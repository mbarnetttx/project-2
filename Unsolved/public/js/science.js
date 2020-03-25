
// // Get references to page elements
// var title = $("#title");
// var description = $("#description");
// var $submitBtn = $("#submit");
// var $list = $("#list");
// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveScience: function(science) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/science",
//       data: JSON.stringify(science)
//     });
//   },
//   getScience: function(category) {
//     return $.ajax({
//       url: "api/" + category,
//       type: "GET"
//     });
//   },
//   deleteScience: function(id) {
//     return $.ajax({
//       url: "api/science/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshScience = function() {
//   API.getScience().then(function(data) {
//     var $science = data.map(function(science) {
//       var $a = $("<a>")
//         .text(science.text)
//         .attr("href", "/science/" + science.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": science.id
//         })
//         .append($a);

//       return $li;
//     });

//     $list.empty();
//     $list.append($science);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var science = {
//     title: $title.val().trim(),
//     description: $description.val().trim()
//   };

//   if (!(science.title && science.description)) {
//     alert("You must enter a title and description!");
//     return;
//   }

//   API.saveExample(science).then(function() {
//     refreshExamples();
//   });

//   $title.val("");
//   $description.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
