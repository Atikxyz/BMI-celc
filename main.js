  const weight = document.querySelector("#weight");
  const height = document.querySelector("#height");
  const calc = document.querySelector("#calculate");
  const reset = document.querySelector("#reset");
  const result = document.querySelector("#result");
  const showMsg = document.querySelector("#showMsg");


 function calculate() {
  const w = weight.value;
  const h = height.value;

  const bmi = w/ (h * 0.0254 * h * 0.0254);

  const bmiResult = bmi.toFixed(2);
  result.textContent = bmiResult;
  showMsg.textContent=msgShow(bmiResult)
  console.log(bmi.toFixed(2))

}


function msgShow(bmiValue) {
  if (bmiValue < 16) {
    return "You are Severe Thin"
  }
  else if (bmiValue >= 16 && bmiValue <= 18) {
    return "You are Moderate Thin"
  }
  else if (bmiValue > 17 && bmiValue <= 18.5) {
    return "You are Mid Thin"
  }
  else if (bmiValue > 18.5 && bmiValue <= 25) {
    return "Yor are Normal"
  }
  else if (bmiValue > 25) {
    return "You are Overweight"
  }
}


reset.addEventListener("click", function (e) {
  weight.value = "";
  height.value = "";
  result.textContent = "_____";
  showMsg.textContent = "";
});

function eventHandler() {
  if (Number(height.value) && Number(weight.value)) {
    calculate();
  }
  else {
    alert("please provide valid inputs")
  }
}
calc.addEventListener("click",eventHandler);