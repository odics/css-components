var add_button = document.getElementById("add_tag");
var delete_button = document.getElementsByClassName("delete_tag");
var tag_lister = document.getElementById("list_all_tags");
var all_tags = document.querySelector(".tag-text");
var input_text_key_press = document.getElementById("new_tag");

input_text_key_press.onkeyup = function() {
  if (event.keyCode === 13) {
    var tag_input = document.getElementById("new_tag");
    var tag_list = document.getElementById("tag_list");
    var tag_to_add = document.createElement("li");
    var text_to_add = document.createTextNode(tag_input.value);
    
    tag_to_add.appendChild(text_to_add);
    tag_list.appendChild(tag_to_add);
    tag_to_add.innerHTML = "<span class='tag-text'>" + tag_input.value + '</span' + " <span class='delete_tag' onclick='delete_tag(this)'>&times;</span>";
    tag_input.value = ""
  }
}

tag_lister.onclick = function() {
	var all_tags = document.querySelectorAll(".tag-text");
  
  for (i = 0; i < all_tags.length; i++) {
  console.log(all_tags[i].textContent);
  }
  
  // console.log(all_tags);
}

function delete_tag(tag_to_delete) {
  // console.log(tag_to_delete.parentElement);
  tag_to_delete.parentElement.remove();
}
