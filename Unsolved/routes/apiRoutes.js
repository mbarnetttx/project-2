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

  app.get("/api/art", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  // Create a new example
  app.post("/api/art", function(req, res) {
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  app.get("/api/mathematics", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  // Create a new example
  app.post("/api/mathematics", function(req, res) {
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  app.get("/api/read", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  // Create a new example
  app.post("/api/read", function(req, res) {
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  app.get("/api/history", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  // Create a new example
  app.post("/api/history", function(req, res) {
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  app.get("/api/break", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  // Create a new example
  app.post("/api/break", function(req, res) {
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });
};
