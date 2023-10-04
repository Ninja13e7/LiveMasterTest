var buttons = document.querySelectorAll(".moreDetails button");
var modals = document.querySelectorAll(".modal");


function openModal(modal) {
  modal.style.display = "block";
}


function closeModal(modal) {
  modal.style.display = "none";
}


buttons.forEach(function(button, index) {
  button.addEventListener("click", function() {
    openModal(modals[index]);
  });
});


modals.forEach(function(modal) {
  var closeBtn = modal.querySelector(".close");
  closeBtn.addEventListener("click", function() {
    closeModal(modal);
  });
});
