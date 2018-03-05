/*
|----------------------------------------
| JS Utils
|
*/

const flow = (...fns) => fns.reverse().reduce((prev, next) => (...args) => prev(next(...args)))
const times = (length, fnOrConst) =>
  Array.from(
    { length },
    (_, i) => typeof fnOrConst === 'function' ? fnOrConst(i) :
      fnOrConst !== undefined ? fnOrConst : i,
  )
const random = (low, high) => low + Math.ceil(Math.random() * (high - low))
const throttle = (fn, limit) => {
  let wait = false
  return (...args) => {
    if (!wait) {
      wait = true
      setTimeout(
        () => (wait = false),
        typeof limit === 'function' ? limit() : limit,
      )
      return fn(...args)
    } else return args[0]
  }
}

const KEYS = {
  DOWN: 40,
  UP: 38,
  RIGHT: 39,
  LEFT: 37,
  ENTER: 13,
  SPACE: 32,
  ESC: 27,
  O: 79,
}

/*
|----------------------------------------
| Game Options
|
*/

const BETWEEN_SINGLE_FRAME = 16.666
const CANVAS_WIDTH = 46
const CANVAS_HEIGHT = 23
const OBSTACLE_SPACING = 9
const OBSTACLE_WIDTH = 3
const PSEUDO_GRAVITY = 0.004
const CELL_TYPE = {
  EMPTY: ' ',
  OBSTACLE: '#',
  BIRD_NORMAL: '-',
  BIRD_UP: '\\',
  BIRD_DOWN: '/',
}

/*
|----------------------------------------
| Game Utils
|
*/

const checkAxisAlignedCollision = (a, b) =>
  a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.h + a.y > b.y

const createObstacle = (x, isTop, isFirst = false) => {
  const h = isFirst
    ? Math.floor(CANVAS_HEIGHT / 2 - 4)
    : random(Math.floor(CANVAS_HEIGHT / 5), Math.floor(CANVAS_HEIGHT / 2 - 1))
  return {
    x,
    y: isTop ? 0 : CANVAS_HEIGHT - h,
    h,
    w: OBSTACLE_WIDTH,
  }
}

/*
|----------------------------------------
| Game State
|
*/

let STATE = {}
const initState = () => {
  STATE.speedProgress = 1
  STATE.score = 0
  STATE.dead = false
  STATE.player = {
    x: 3,
    y: Math.ceil(CANVAS_HEIGHT / 2),
    v: 0,
  }

  let isTopFlipper = false
  STATE.obstacles = times(4).map(i => {
    const obstacle = createObstacle(
      6 + OBSTACLE_SPACING * i + OBSTACLE_WIDTH,
      isTopFlipper,
      i === 0,
    )
    isTopFlipper = !isTopFlipper
    return obstacle
  })
}

/*
|----------------------------------------
| Game State Updaters
|
*/

const UPDATERS = {
  generateObstacle() {
    const last = STATE.obstacles[STATE.obstacles.length - 1]
  
    // Create the first obstacle
    if (!last) {
      STATE.obstacles.push(createObstacle(CANVAS_WIDTH - 1), true, true)
  
    // Keep creating new obstacles!
    } else {
      const minEdgeDistance = CANVAS_WIDTH - OBSTACLE_SPACING
      if (last.x < minEdgeDistance) {
        STATE.obstacles.push(
          createObstacle(
            CANVAS_WIDTH - 1,
            last.y > Math.floor(CANVAS_HEIGHT / 2),
          ),
        )
      }
    }
  },
  nudgeObstacles() {
    STATE.obstacles = STATE.obstacles
      .map(obstacle => {
        obstacle.x -= 1
        return obstacle
      })
      .filter(obstacle => obstacle.x > 0 - OBSTACLE_WIDTH)
  },
  applyGravity() {
    const player = STATE.player
    player.v -= PSEUDO_GRAVITY
    player.y -= player.v
  },
  flap() {
    STATE.player.v = 0.12
  },
  detectCollisions() {
    const player = STATE.player
    if (
      player.y < 0 ||
      Math.ceil(player.y) == CANVAS_HEIGHT - 1 ||
      STATE.obstacles.some(
        checkAxisAlignedCollision.bind(null, {
          x: player.x,
          y: Math.ceil(player.y),
          w: 1,
          h: 1,
        }),
      )
    ) {
      STATE.dead = true
    }
  },
  checkScore() {
    const player = STATE.player
    if (STATE.obstacles.some(o => o.x === player.x)) {
      STATE.score += 1
    }
  },
  progressSpeed() {
    STATE.speedProgress += STATE.speedProgress / 1000
  },
}

const limitBySpeedProgress = () =>
  BETWEEN_SINGLE_FRAME * 7 / STATE.speedProgress

const updateState = flow(
  throttle(UPDATERS.generateObstacle, limitBySpeedProgress),
  throttle(UPDATERS.nudgeObstacles, limitBySpeedProgress),
  UPDATERS.applyGravity,
  UPDATERS.detectCollisions,
  throttle(UPDATERS.checkScore, limitBySpeedProgress),
  UPDATERS.progressSpeed,
)

/*
|----------------------------------------
| Game Renderers
|
*/

const createAppendedRenderer = lines => screen => {
  return `${screen}\n\n${lines.map(line => ' > ' + line).join('\n\n')}`
}

const RENDERERS = {
  initGrid() {
    let grid = []
    while (grid.push(times(CANVAS_HEIGHT, CELL_TYPE.EMPTY)) < CANVAS_WIDTH);
    return grid
  },
  withObstacles(grid) {
    STATE.obstacles.forEach(obstacle => {
      times(obstacle.w).forEach(xOffset => {
        times(obstacle.h).forEach(yOffset => {
          if (
            grid[obstacle.x + xOffset] &&
            grid[obstacle.x + xOffset][obstacle.y + yOffset]
          ) {
            grid[obstacle.x + xOffset][obstacle.y + yOffset] =
              CELL_TYPE.OBSTACLE
          }
        })
      })
    })
    return grid
  },
  withBird(grid) {
    const player = STATE.player
    let birdType
    if (player.v < -0.03) birdType = CELL_TYPE.BIRD_UP
    else if (player.v < 0.03) birdType = CELL_TYPE.BIRD_NORMAL
    else birdType = CELL_TYPE.BIRD_DOWN
    grid[player.x][Math.ceil(player.y)] = birdType
    return grid
  },
  withWalls(grid) {
    grid = grid.map(column => [
      CELL_TYPE.OBSTACLE,
      ...column,
      CELL_TYPE.OBSTACLE,
    ])
    grid.push(CELL_TYPE.OBSTACLE.repeat(CANVAS_HEIGHT + 2))
    grid.unshift(CELL_TYPE.OBSTACLE.repeat(CANVAS_HEIGHT + 2))
    return grid
  },
  gridToString(grid) {
    const w = grid.length
    const h = grid[0].length
    const swappedAxisGrid = times(h).map(row =>
      times(w).map(column => grid[column][row]),
    )
    return swappedAxisGrid.map(column => column.join('')).join('\n')
  },
  withScore(screen) {
    return `Score: ${STATE.score}\n` + screen
  },
  withPoorBird: createAppendedRenderer([
    'Oops!',
    ' The guilt washes over you in an awful wave.',
    'Hit Enter to bird again',
  ]),
  withWelcome: createAppendedRenderer([
    'ASCII BIRD',
    '',
    'Controls:',
    'ENTER, to play',
    'UP or SPACE, to flap your wings',
  ]),
}

function render(postRenderers = []) {
  const screen = flow(
    RENDERERS.initGrid,
    RENDERERS.withObstacles,
    RENDERERS.withBird,
    RENDERERS.withWalls,
    RENDERERS.gridToString,
    RENDERERS.withScore,
    ...postRenderers,
  )()

  document.querySelector('#game').innerText = screen
}

/*
|----------------------------------------
| Game Event Management
|
*/

document.addEventListener('keydown', ({ keyCode }) => {
  const p = STATE.player
  switch (keyCode) {
    case KEYS.O:
      document.body.classList.toggle('js-power-mode')
      break
    case KEYS.SPACE:
    case KEYS.UP:
      UPDATERS.flap()
      break
    case KEYS.ENTER:
      startGame(STATE.dead)
      break
    case KEYS.ESC:
      if (STATE.dead) awaitPlayer()
      break
    default:
      return
  }
})

let past
function loop(now) {
  if (!past) past = now
  const delta = now - past

  if (delta > BETWEEN_SINGLE_FRAME) {
    past = now

    updateState()

    if (STATE.dead) {
      render([RENDERERS.withPoorBird])
    } else {
      render()
      requestAnimationFrame(loop)
    }
  } else {
    requestAnimationFrame(loop)
  }
}

/*
|----------------------------------------
| Game Setup
|
*/

function startGame(freshGame = false) {
  if (freshGame) initState()
  loop()
}

function awaitPlayer() {
  initState()
  render([RENDERERS.withWelcome])
}

awaitPlayer()
