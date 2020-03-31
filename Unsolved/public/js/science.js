var $title = $("#title");
var $category = $("#category");
var $submitBtn = $("#submit");
var $list = $("#list");
var $link = $("#link");

var API = {
  saveScience: function (science) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/science",
      data: JSON.stringify(science)
    });
  },
  getScience: function (category) {
    return $.ajax({
      url: "api/" + category,
      type: "GET"
    }).then(function(data) {
      //console.log(data);
    });
  },
  updateLikes: function (id, likes) {
    return $.ajax({
      url: "api/update-likes/" + id + "/" + likes,
      type: "PUT"
    }).then(data => {
    location.reload();
  })
}
};
let currentPage = location.pathname.split("/")[1];
console.log(currentPage);

var handleFormSubmit = function (event) {
  event.preventDefault();

  var science = {
    title: $title.val().trim(),
    category: $category.val().trim(),
    link: $link.val().trim(),
  };

  if (!(science.title && science.category)) {
    alert("You must enter a title and category!");
    return;
  }

  API.saveScience(science);

  $title.val("");
  $link.val("");

  location.reload();
};

$submitBtn.on("click", handleFormSubmit);

$(document).on("click", ".likes", function (event) {
  event.preventDefault();
  var likes = $(this).attr("data-likes");
  var id = $(this).attr("data-id");

  updatedLikes = parseInt(likes) + 1;

  API.updateLikes(id, updatedLikes);

});

