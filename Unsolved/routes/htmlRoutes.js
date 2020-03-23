var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.render("index", {
        title: "Indoor Learning",
        msg: "A community to help homeschooling parents, summer time with kids, and each other!",
        //examples: dbLearn
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbLearn
      });
    });
  });

  app.get("/science", function(req, res) {

    db.Learn.findAll({}).then(function(dbLearn) {
      res.render("science", {
        example: dbLearn,
        title: "Science Time!",
        msg: "Science for elementary aged children.",
      });
    });
  });

  app.get("/art", function(req, res) {

    db.Learn.findAll({}).then(function(dbLearn) {
      res.render("art", {
        example: dbLearn,
        title: "Art Time!",
        msg: "Art for elementary aged children.",
      });
    });
  });

  app.get("/mathematics", function(req, res) {

    db.Learn.findAll({}).then(function(dbLearn) {
      res.render("math", {
        example: dbLearn,
        title: "Math Time!",
        msg: "Math for elementary aged children.",
      });
    });
  });

  app.get("/read", function(req, res) {

    db.Learn.findAll({}).then(function(dbLearn) {
      res.render("reading", {
        example: dbLearn,
        title: "Reading Time!",
        msg: "Reading for elementary aged children.",
      });
    });
  });

  app.get("/history", function(req, res) {

    db.Learn.findAll({}).then(function(dbLearn) {
      res.render("history", {
        example: dbLearn,
        title: "History Time!",
        msg: "History for elementary aged children.",
      });
    });
  });

  app.get("/break", function(req, res) {

    db.Learn.findAll({}).then(function(dbLearn) {
      res.render("break", {
        example: dbLearn,
        title: "Break Time!",
        msg: "We all need a break sometimes.",
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
