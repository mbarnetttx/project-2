var db = require("../models");

module.exports = function(app) {
  
  app.get("/api/:category?", function(req, res) {
    db.Learn.findAll({where: {category: req.params.category}}).then(function(dbLearn) {
      res.json(dbLearn);
    });
  });

  
  app.post("/api/science", function(req, res) {
    let title = req.body.title
    let category = req.body.category
    let link = req.body.link
    let likes = req.body.likes
    db.Learn.create({title, category, link, likes
    }).then(function(dbLearn) {
      //console.log(req);
      res.json(dbLearn);
    });
  });
  app.put('/api/update-likes/:id?/:likes?', function(req, res)
  {
    let likes = req.params.likes;
    let postId = req.params.id;

    db.Learn.update({likes: likes}, 
      {
        where: {id: postId}
      }).then(function(dbLearn) {
        res.json(dbLearn);
      })
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
