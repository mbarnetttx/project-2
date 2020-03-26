
// Get references to page elements
var $title = $("#title");
var $submitBtn = $("#submit");
var $category = $("#category");
var $list = $("#list");
var $link = $("#link")
var $cats = $("#category")

category = $("#category")





// The API object contains methods for each kind of request we'll make
var API = {
  saveForm: function(category) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: `api/${str}`,
      data: JSON.stringify(category)
    });
  },
  getScience: function(category) {
    return $.ajax({
      url: `api/${category}`,
      type: "GET"
    });
  },
  deleteScience: function(id) {
    return $.ajax({
      url: "api/science/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshScience = function() {
  API.getScience().then(function(data) {
    var $science = data.map(function(category) {
      var $a = $("<a>")
        .text(category.text)
        .attr("href", "/science/" + category.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": category.id
        })
        .append($a);

      return $li;
    });

    $list.empty();
    $list.append($cats);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  console.log($title.val())
  var category = {
    title: $title.val().trim(),
    category: $category.val().trim(),
    link: $link.val().trim()
  };

  if (!(category.title && category.category)) {
    alert("You must enter a title and category!");
    return;
  }

  API.saveForm(category).then(function() {
    refreshScience();
  });

  $title.val("");
  $link.val("");
};



// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);

