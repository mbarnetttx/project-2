var db = require("../models");

module.exports = function(app) {
  
  app.get("/api/science", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  
  app.post("/api/science", function(req, res) {
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  app.get("/api/math", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  app.post("/api/math", function(req, res) {
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  app.get("/api/history", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  app.post("/api/history", function(req, res) {
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  app.get("/api/art", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  app.post("/api/art", function(req, res) {
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  app.get("/api/reading", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });
  
  app.post("/api/reading", function(req, res) {
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  app.get("/api/break", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });
  
  app.post("/api/break", function(req, res) {
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });
  app.get("api/science/:postid/likes", function(req, res) {
    db.Learn.findAll(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });
  app.post("/api/science/:postid/likes", function(req, res) {
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });
};
