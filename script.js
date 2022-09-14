let box = document.getElementById("box");


function displayContent(dropdownId) {
  let dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("open");
  let i = 1;
  for(; i <= 5; i++) {
    let dropdown = document.getElementById(i)
    for (let j of dropdown.classList) {
      if( j == "open") {
        box.classList.add("left");
        return;
      }
    }
  }
  box.classList.remove("left");
}



