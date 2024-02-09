function showAbout(){
  Swal.fire({
    title: "O mnie",
    text: "Lepiej mi idzie wymyślanie tasiemcowych opowiadań niż ich spisywanie, ale robię, co w mojej mocy.",
    icon: "question",
    confirmButtonText: "Zamknij",
    confirmButtonColor: "#708090",
   // toast: true,
    heightAuto: false
  });
}

let myButton = document.getElementById("topBtn");

let width;
let height;
let size;
const minSize = 408818

window.onscroll = function() {
  width = document.documentElement.clientWidth
  height = document.documentElement.clientHeight
  size = width * height
  if (size > minSize) {
  scrollFunction()}
};

function scrollFunction() {
  if (myButton && document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

