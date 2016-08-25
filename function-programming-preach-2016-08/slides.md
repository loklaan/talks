# WHAT I WANT


1. have fun writing fun code
2. maintain maintainable code






                    :expressionless: :thumbsup:

---
# WHY FUNCTIONAL PROGRAMMING?


promises for your code:

* comparatively less
* inherently reusable
* not-hard to debug   ◀──┐
                         │
                         │
                         └── very-easy to test :raised_hands:

---
# SHH. WHAT IS THIS


functional programming is all about

1. avoiding side causes & effects
2. function composition

![oh_no_way](ohwow.gif)

---
# SIDE STUFF


what do these terms, side cause and side effect, mean?

let us explore functions, okay :ok_hand:

---
# OMG I KNOW FUNCTIONS


a function can have 2 kinds of inputs, and 2 kinds of outputs


## INPUT :chart_with_downwards_trend:

1. function argument
2. hidden cause


## OUTPUT :chart_with_upwards_trend:

1. return value
2. hidden effect

---
# SIDE CAUSE


example:
```javascript
const cause = 'probs 42'

function wutlyf () {
  console.log('meaning of lyf is' + cause)
}

wutlyf()
// meaning of lyf is probs 42

cause = '... somethings cause my output to change'
wutlyf()
// meaning of lyf is ... something caused my output to change
```

---
# SIDE EFFECT


example:
```javascript
function wutlyf (meaning) {
  console.log('meaning of lyf is' + meaning)
  process(meaning)
}

wutlyf('defs 42')
// meaning of lyf is defs 42
// vogon construction fleet blew up earth
```

---
# PURE FUNCTION


## CRITERIA

1. has function arguments as input
2. has a return value output
3. no side causes or effects :no_good:


## GLORIOUS OUTCOME :dancer:

pure functions are 100% recyclable & reusable :blush:

^ assertion means that we can use our
  functions anywhere, anytime, with
  any-ish input

---
# COMPOSITION, YES THE OTHER GOOD MAIN THING OKAY


// TODO: transition to explain breaking data
   problems into small reusable functions

---
# HIGH ORDER FUNCTION


// TODO: explain a high order function, and
   why it adds to the boon of composition

---
# PLEASE LISTEN NOW


// TODO: tie all this good stuff back together,
   to reach my goals: fun maintainable code

---
# FIN


questions PLEASE

@loklaan
