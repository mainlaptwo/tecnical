

function searchToggle() {
  let searchFild = document.getElementById("search");

  if (searchFild.classList.contains("visble")) {
    searchFild.parentElement.submit();
    searchFild.classList.remove("visble");
  } else {
    searchFild.classList.add("visble");
    searchFild.focus();
    searchFild.focus();
  }
}

window.onload = function () {
    document.getElementsByClassName("search-icon")[0].onclick =searchToggle;
    document.getElementById("search").onblur = function () {
        if(this.classList.contains("visble")){
            this.classList.remove("visble");
        }
    }
};
