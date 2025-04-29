document.addEventListener("DOMContentLoaded", () => {
  const plusSign = document.querySelector(".plus_div img");
  const plusDivFunction = document.querySelector(".plus_div_function");
  const topInput = document.querySelector(".top_input");

  plusSign.addEventListener("click", () => {
    if (plusDivFunction.style.display === "none" || plusDivFunction.style.display === "") {
      plusDivFunction.style.display = "flex";
    } else {
      plusDivFunction.style.display = "none";
    }
  });

  topInput.addEventListener("input", () => {
    console.log("Searching: " + topInput.value);
  });
});
