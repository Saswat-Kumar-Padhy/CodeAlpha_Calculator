const result = document.getElementById("result");

function clearResult() {
  result.textContent = "0";
}

function backspace() {
  result.textContent = result.textContent.slice(0, -1) || "0";
}

function liveScreen(value) {
  if (result.textContent === "0") {
    result.textContent = "";
  }
  result.textContent += value;
}

function calculate() {
  try {
    result.textContent =
      eval(
        result.textContent.replace(/\u00d7/g, "*").replace(/\u00f7/g, "/")
      ) || "0";
  } catch {
    result.textContent = "Error";
    setTimeout(() => (result.textContent = "0"), 1500);
  }
}
