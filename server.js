const express = require("express")
const mustacheExpress = require("mustache-express")
const bodyParser = require("body-parser")

const app = express()

app.engine("mst", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mst")

app.use(express.static("public"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let allDinos = [
  {
    id: 1,
    name: "Terodactilo",
    colors: ["cafe", "negro"],
    languages: "ultrasonidos"
  },
  {
    id: 2,
    name: "Tiranosaurio-Rex",
    colors: ["Rojo tinto", "verde", "plateado"],
    languages: "ultrasonidos"
  },
  {
    id: 3,
    name: "Tryceratops",
    colors: ["naranja", "verde"],
    languages: "ultrasonidos"
  },
  {
    id: 4,
    name: "Centrosauos",
    colors: ["blanco", "verde"],
    languages: "yes"
  }
]

app.get("/api/dinosaurios", (req, res) => {
  res.render("index", allDinos[1])
  //

  // This array is only for demostration purposes
  // in the `future` this would a database

  res.json(allDinos)
})

// 2

app.get("/api/dinosaurios/:id", (req, res) => {
  const dinoId = parseInt(req.params.id)
  const myDino = allDinos.find(bot => {
    return bot.id === dinoId
  })
  res.json(myDino)
})

// 3

app.get("/api/dinosaurios/:id/name", (req, res) => {
  const dinoId = parseInt(req.params.id)
  const myDino = allDinos.find(bot => {
    return bot.id === dinoId
  })
  res.json(myDino.name)
})

//4

app.post("/api/dinosaurios", (req, res) => {
  let newDino = {
    id: allDinos.length + 1,
    name: req.body.name,
    colors: req.body.colors,
    languages: req.body.languages
  }
  allDinos.push(newDino)
  res.json(newDino)
})
//5
app.delete("/api/dinosaurios/:id", (req, res) => {
  const dinoId = parseInt(req.params.id)
  allDinos = allDinos.filter(bot => bot.id !== dinoId)
  res.json(allDinos)
})

app.listen(3000, () => {
  console.log("We are rocking on 3000")
})
