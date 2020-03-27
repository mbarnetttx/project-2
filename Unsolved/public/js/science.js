// Get references to page elements
var $title = $("#title");
var $category = $("#category");
var $submitBtn = $("#submit");
var $list = $("#list");
var $link = $("#link");

category = $("#category");


// The API object contains methods for each kind of request we'll make
var API = {
  saveScience: function(science) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/" + category,
      data: JSON.stringify(science)
    });
  },
  getScience: function() {
    return $.ajax({
      url: "api/" + category,
      type: "GET"
    });
  },
  // deleteScience: function(id) {
  //   return $.ajax({
  //     url: "api" + category + id,
  //     type: "DELETE"
  //   });
  // },
  // editLikes: function(id) {
  //   return $.ajax({
  //     url: "api/science/" + id,
  //     type: "DELETE"
  //   });
  // }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshScience = function() {
  API.getScience().then(function(data) {
    var $science = data.map(function(science) {
      var $a = $("<a>")
        .text(science.text)
        .attr("href", "/" + category + "/" + science.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": science.id
        })
        .append($a);

      return $li;
    });

    $list.empty();
    $list.append($science);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var science = {
    title: $title.val().trim(),
    category: $category.val().trim(),
    link: $link.val().trim()
  };

  if (!(science.title && science.category)) {
    alert("You must enter a title and category!");
    return;
  }

  API.saveScience(science).then(function() {
    refreshScience();
  });

  $title.val("");
  $link.val("");
};



// Add event listeners to the submit 
$submitBtn.on("click", handleFormSubmit);
