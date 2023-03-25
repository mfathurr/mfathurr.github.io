const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const input = document.getElementById("number").value;
  console.log(typeof input);
  const body = document.querySelector(".container");
  const result = document.createElement("p");
  const style = () => {
    result.style.fontSize = "1.5em";
    result.style.margin = "1rem";
  };
  if (Number(input) === 0) {
    result.innerHTML = `Input ${input}: invalid input`;
    result.style.color = "red";
    style();
    body.append(result);
  } else if (Number(input) % 3 === 0 && Number(input) % 5 === 0) {
    result.innerHTML = `Input ${input}: FizzBuzz!`;
    style();
    body.append(result);
  } else if (Number(input) % 3 === 0) {
    result.innerHTML = `Input ${input}: Fizz!`;
    style();
    body.append(result);
  } else if (Number(input) % 5 === 0) {
    result.innerHTML = `Input ${input}: Buzz!`;
    style();
    body.append(result);
  } else {
    result.innerHTML = Number(input);
    style();
    body.append(result);
  }
});
