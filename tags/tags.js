var add_button = document.getElementById("add_tag");
var delete_button = document.getElementsByClassName("delete_tag");


add_button.onclick = function() {
var tag_input = document.getElementById("new_tag");

var tag_list = document.getElementById("tag_list");

	var tag_to_add = document.createElement("li");
  var text_to_add = document.createTextNode(tag_input.value);
  tag_to_add.appendChild(text_to_add);
  tag_list.appendChild(tag_to_add);
}

function delete_tag(tag_to_delete) {
// console.log(tag_to_delete.parentElement);
tag_to_delete.parentElement.remove();
}
