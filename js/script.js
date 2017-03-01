/* when the submit button is clicked
1. prevent the default behavior
2. store the value of the text input field in a variable
3. append the new item to the to do list
*/
$("form input").click(function(event) {
  event.preventDefault();
  addItem();
});

$("form input").keydown(function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    addItem();
  }
});

var currentList = [];

$("#additem").click(addItem);

var addItem = function() {
  var newItem = $("#inputbox").val();
  if (newItem.length > 0) {
    $("#inputbox").val("");
    currentList.push(newItem);
    $("ul").empty();
    $("#subhead").text("You have " + currentList.length + " things to do. GET CRACKIN'!");
    for (i=0; i<currentList.length; i++) {
      $("ul").append("<li class='item' id=" + i + "><button class=\"btn btn-danger btn-lrg\" onclick=\"deleteItem(" + i + ")\" type=button><span class=\"glyphicon glyphicon-trash\"></span> Delete</button> " + currentList[i] + "</li>");
    };
  };
}

/*
When an X button is pressed:
1. figure out which li is associated
2. remove that li
*/

var deleteItem = function(i) {
  var listNum = i;
  currentList.splice(listNum, 1);
  $("ul").empty();
  $("#subhead").text("You have " + currentList.length + " things to do. GET CRACKIN'!");
  for (i=0; i<currentList.length; i++) {
    $("ul").append("<li class='item' id=" + i + "><button class=\"btn btn-danger btn-lrg\" onclick=\"deleteItem(" + i + ")\" type=button><span class=\"glyphicon glyphicon-trash\"></span> Delete</button> " + currentList[i] + "</li>");
  };
}

var height = $(document).height();
$("body").css("height",height);




