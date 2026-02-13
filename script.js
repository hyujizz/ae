const wrapper = document.getElementById("wrapper");
const readBtn = document.getElementById("readBtn");

function toggleEnvelope() {
  wrapper.classList.toggle("active");
}

readBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleEnvelope();
});

wrapper.addEventListener("click", () => {
  toggleEnvelope();
});
