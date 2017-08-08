const express = require("express")
const mustacheExpress = require("mustache-express")
const bodyParser = require("body-parser")

const app = express()

app.engine("mst", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mst")

app.use(express.static("public"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false }))

app.get("/", (req, res) => {
  res.render("index", allDinos[1])
})

// This array is only for demostration purposes
// in the `future` this would a database
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
