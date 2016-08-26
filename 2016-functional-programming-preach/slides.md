












# FP PREACH :eyes:

> 2016

---
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

that is it

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


what does this other term, composition, mean?

* encapsulate small solutions
* use these small solutions together

functions were made to do this

---
# HIGH ORDER FUNCTION


a function, that returns another function :hatching_chick:

* second function can carry state
* so many uses, have to get a feel for it, like closures

---
# PLEASE LISTEN NOW


* functional programming is good
* so are other programming paradigms
* get familiar with different kinds
* situations call for different approaches
* be awesome :fist:

---
# FIN

![finish](bye.gif)

questions PLEASE

@loklaan
