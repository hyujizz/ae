const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector(".read-btn");

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  wrapper.classList.toggle("active");
});

wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
