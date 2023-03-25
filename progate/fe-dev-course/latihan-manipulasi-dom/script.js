const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const input = document.getElementById("number").value;
  const container = document.querySelector(".container");
  const result = document.createElement("p");
  const hr = document.createElement("hr");

  const showValue = () => {
    container.append(result);
    container.append(hr);
  };

  const style = () => {
    result.style.fontSize = "1.5em";
    result.style.margin = "1rem";
  };

  if (Number(input) === 0) {
    result.innerHTML = `Input ${input}: invalid input`;
    result.style.color = "red";
    style();
    showValue();
  } else if (Number(input) % 3 === 0 && Number(input) % 5 === 0) {
    result.innerHTML = `Input ${input}: FizzBuzz!`;
    style();
    showValue();
  } else if (Number(input) % 3 === 0) {
    result.innerHTML = `Input ${input}: Fizz!`;
    style();
    showValue();
  } else if (Number(input) % 5 === 0) {
    result.innerHTML = `Input ${input}: Buzz!`;
    style();
    showValue();
  } else {
    result.innerHTML = Number(input);
    style();
    showValue();
  }
});
