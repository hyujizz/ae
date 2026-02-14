const wrapper = document.getElementById("wrapper");
const readBtn = document.getElementById("readBtn");

readBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  wrapper.classList.toggle("active");
});

wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
