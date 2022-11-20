const buttonOpenModal = document.getElementById("openModal");
const modalWrapper = document.querySelector(".modal-wrapper");

console.log(modalWrapper);

buttonOpenModal.addEventListener("click", () =>
  modalWrapper.classList.remove("invisible")
);

document.addEventListener("keydown", function (event) {
  const isEscKey = event.key === "Escape";

  if (isEscKey) {
    modalWrapper.classList.add("invisible");
  }
});
