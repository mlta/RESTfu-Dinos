
Activity: RESTful Dinos - Pair Programming

We're going to create a RESTful API for our dinosaur collection! There are a couple of things you'll need to employ to accomplish this; You'll need to add API endpoints that will allow you to read, create, delete and edit dinosaurs from your program or database. You're only going to use Postman to test and work with your API. You do not need to build a website.

Dinosaur Properties  

We want our dinosaurs to have at least these properties:

An identifying primary key
A name
A color
A size/weight
A set of habitats that it may belong to (i.e., jungle, mountain, plain, desert, etc.)
Remember to use notes from todays lecture as a point of reference.




Endpoints  

GET /api/dinosaurs
GET /api/dinosaurs/:id
GET /api/dinosuars/:id/habitats
POST /api/dinosaurs
PUT /api/dinosaurs/:id
DELETE /api/dinosaurs/:id
Level 1  

create a new repository and project
Implement all the above endpoints using a array as your database (like we did in class)
