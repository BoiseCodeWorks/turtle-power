let characters = [{
  id: 44,
  name: "Leo",
  favFood: "Pizza",
  favColor: "blue",
  img: "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/teenage-mutant-ninja-turtles/characters/leonardo-character-web-desktop.png?height=0&width=480&matte=true&crop=false"
}, {
  id: 687,
  name: "Mikey",
  favFood: "Pizza",
  favColor: "orange",
  img: "https://i.ytimg.com/vi/7IWfAUNUs6g/maxresdefault.jpg"
}, {
  id: 55,
  name: "Donny",
  favColor: "purple",
  favFood: "Pizza",
  img: "https://i.ytimg.com/vi/7IWfAUNUs6g/maxresdefault.jpg"
}, {
  id: 16,
  name: "Ralph",
  favColor: "red",
  favFood: "Pizza",
  img: "https://i.ytimg.com/vi/7IWfAUNUs6g/maxresdefault.jpg"
}, {
  id: 1,
  name: "Splinter",
  favColor: "brown",
  favFood: "Garbage",
  img: "https://i.ytimg.com/vi/7IWfAUNUs6g/maxresdefault.jpg"
}, {
  id: 66,
  name: "Shredder",
  favColor: "steelblue",
  favFood: "Turtle Soup",
  img: "https://vignette.wikia.nocookie.net/tmnt/images/0/09/TMNT_Demon_Shredder.jpg/revision/latest?cb=20101015233405&path-prefix=de"
}]

// let position = 0
// while (position < characters.length) {
//   console.log(characters[position].name)
//   position = position + 1
// }

//blocking
//DOM
console.log("The loop is starting")
let appElem = document.getElementById("app")
let charactersTemplate = ''

for (let i = 0; i < characters.length; i++) {
  let character = characters[i]
  charactersTemplate += `
    <div class="character">
      <button onclick="drawCharacterInfo(${character.id})">${character.name}</button>
    </div>
  `
}
appElem.innerHTML = charactersTemplate
console.log("The loop is over")

function drawCharacterInfo(id) {
  console.log("Do I have the id: ", id)
  let character = characters.find(c => c.id == id)
  document.getElementById("character-info").innerHTML = `
    <div class="character-info" style="color: ${character.favColor}">
      <p> <img src="${character.img}" width="60"/>  Hello my name is ${character.name} my favorite food is ${character.favFood}</p>
    </div>
  `
}























