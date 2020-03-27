var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.render("index", {
        title: "Indoor Learning",
        msg: "A community to help homeschooling parents, summer time with kids, and each other!"
      });
    });
  });

  app.get("/science", function(req, res) {
    db.Learn.findAll({
      where: {
        category: "science"
      }
    }).then(function(dbLearn) {
      res.render("science", {
        science: dbLearn,
        title: "Science Time!",
        msg: "Science for elementary aged children."
      });
    });
  });
  app.get("/art", function(req, res) {
    db.Learn.findAll({
      where: {
        category: "Art"
      }
    }).then(function(dbLearn) {
      res.render("art", {
        art: dbLearn,
        title: "Art Time!",
        msg: "Art for elementary aged children."
      });
    });
  });
  app.get("/mathematics", function(req, res) {
    db.Learn.findAll({
      where: {
        category: "math"
      }
    }).then(function(dbLearn) {
      res.render("math", {
        math: dbLearn,
        title: "Math Time!",
        msg: "Math for elementary aged children."
      });
    });
  });

  app.get("/read", function(req, res) {
    db.Learn.findAll({
      where: {
        category: "reading"
      }
    }).then(function(dbLearn) {
      res.render("reading", {
        reading: dbLearn,
        title: "Reading Time!",
        msg: "Reading for elementary aged children."
      });
    });
  });

  app.get("/history", function(req, res) {
    db.Learn.findAll({
      where: {
        category: "history"
      }
    }).then(function(dbLearn) {
      res.render("history", {
        history: dbLearn,
        title: "History Time!",
        msg: "History for elementary aged children."
      });
    });
  });

  app.get("/break", function(req, res) {
    db.Learn.findAll({
      where: {
        category: "break"
      }
    }).then(function(dbLearn) {
      res.render("break", {
        break: dbLearn,
        title: "Break Time!",
        msg: "We all need a break sometimes."
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
  };
