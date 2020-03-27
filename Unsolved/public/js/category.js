// Get references to page elements
var $title = $("#title");
var $category = $("#category");
var $submitBtn = $("#submit");
var $list = $("#list");
var $link = $("#link")
// The API object contains methods for each kind of request we'll make
var API = {
  saveCategory: function(category) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/" + category,
      data: JSON.stringify(category)
    });
  },
  getCategory: function(category) {
    return $.ajax({
      url: "api/" + category,
      type: "GET"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshCategory = function() {
  API.getCategory().then(function(data) {
    var $category = data.map(function(category) {
      var $a = $("<a>")
        .text(category.text)
        .attr("href", "/" + category + "/" + category.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": category.id
        })
        .append($a);

      return $li;
    });

    $list.empty();
    $list.append($category);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var category = {
    title: $title.val().trim(),
    category: $category.val().trim(),
    link: $link.val().trim()
  };
  
  if (!(category.title && category.category)) {
    alert("You must enter a title and category!");
    return;
  }

  API.saveCategory(category).then(function() {
    refreshCategory();
  });

  $title.val("");
  $link.val("");
};



// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
