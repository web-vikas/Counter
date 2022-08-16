const number = document.querySelector("#num");
const dec = document.querySelector("#dec");
const res = document.querySelector("#res");
const inc = document.querySelector("#inc");
let count = 0;

res.addEventListener("click", () => {
  count = 0;
  valueCheck();
  number.textContent = count;
});
dec.addEventListener("click", () => {
  count--;
  valueCheck();
  number.textContent = count;
});
inc.addEventListener("click", () => {
  count++;
  valueCheck();
  number.textContent = count;
});

function valueCheck() {
  if (count < 0) number.style.color = "red";
  else if (count > 0) number.style.color = "green";
  else number.style.color = "black"
}
