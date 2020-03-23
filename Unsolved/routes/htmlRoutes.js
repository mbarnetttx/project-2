var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Learn.findAll({}).then(function(dbLearn) {
      res.render("index", {

        title: "Indoor Learning",
        msg: "A place to help homeschooling parents or summer time with kids!",
        //examples: dbLearn


      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/science", function(req, res) {

    db.Learn.findAll({}).then(function(dbLearn) {
      let scienceData = {
        science: dbLearn
      }
      res.render("science", scienceData);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
