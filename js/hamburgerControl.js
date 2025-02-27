const merBtn = document.querySelector("#merBtn");
const menyMer = document.querySelector("#navMerContainer");

merBtn.addEventListener("click", () => {
  menyMer.classList.toggle("dropdownActive");
});

const redaksjonerBtn = document.querySelector("#redaksjonsBtn");
const menyRedaksjoner = document.querySelector("#navRedaksjonerContainer");

redaksjonerBtn.addEventListener("click", () => {
  menyRedaksjoner.classList.toggle("dropdownActive");
});
