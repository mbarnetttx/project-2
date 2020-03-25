var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/science", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  // Create a new example
  app.post("/api/science", function(req, res) {
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  // Delete an example by id
  app.delete("/api/science/:id", function(req, res) {
    db.Learn.destroy({ where: { id: req.params.id } }).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });


};
