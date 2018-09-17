// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
    kittens.push(name) 
}

destructivelyAppendKitten("Ralph")

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

destructivelyPrependKitten("Bob")

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  var newKittens = [name, ...kittens]
}

  appendKitten("Broom")