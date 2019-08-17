var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

   // POST route for saving a new post
   app.post("/api/profile", function(req, res) {
    console.log(req.body)
    db.petProfile.create({
      Pet_name: req.body.name,
      Gender: req.body.gender,
      Age: req.body.age,
      Breed: req.body.breed,
      Type1: req.body.type,
      Bio: req.body.bio,
      Temp: req.body.temperament,
      Act: req.body.activity,
      Image: req.body.image
    })
      .then(function(data) {
        console.log("success")

        res.json("success");
      });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
