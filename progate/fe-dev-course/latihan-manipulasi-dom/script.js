const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const input = document.getElementById("number").value;
  console.log(typeof input);
  const body = document.querySelector("body");
  const result = document.createElement("p");
  if (Number(input) === 0) {
    result.innerHTML = `Input ${input}: invalid input`;
    result.style.color = "red";
    body.append(result);
  } else if (Number(input) % 3 === 0 && Number(input) % 5 === 0) {
    result.innerHTML = `Input ${input}: FizzBuzz!`;
    body.append(result);
  } else if (Number(input) % 3 === 0) {
    result.innerHTML = `Input ${input}: Fizz!`;
    body.append(result);
  } else if (Number(input) % 5 === 0) {
    result.innerHTML = `Input ${input}: Buzz!`;
    body.append(result);
  } else {
    result.innerHTML = Number(input);
    body.append(result);
  }
});
