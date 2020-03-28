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

<<<<<<< HEAD
  app.get("/api/mathematics", function(req, res) {
=======
  app.get("/api/reading", function(req, res) {
>>>>>>> 11baed67e41fbe6e3155af28c8dc19472d87022c
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });
<<<<<<< HEAD

  // Create a new example
  app.post("/api/mathematics", function(req, res) {
=======
  
  app.post("/api/reading", function(req, res) {
>>>>>>> 11baed67e41fbe6e3155af28c8dc19472d87022c
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

<<<<<<< HEAD
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
=======
  app.get("/api/break", function(req, res) {
>>>>>>> 11baed67e41fbe6e3155af28c8dc19472d87022c
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });
<<<<<<< HEAD

  // Create a new example
  app.post("/api/history", function(req, res) {
=======
  
  app.post("/api/break", function(req, res) {
>>>>>>> 11baed67e41fbe6e3155af28c8dc19472d87022c
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });
<<<<<<< HEAD

  app.get("/api/break", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  // Create a new example
  app.post("/api/break", function(req, res) {
=======
  app.get("api/science/:postid/likes", function(req, res) {
    db.Learn.findAll(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });
  app.post("/api/science/:postid/likes", function(req, res) {
>>>>>>> 11baed67e41fbe6e3155af28c8dc19472d87022c
    db.Learn.create(req.body).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });
};
