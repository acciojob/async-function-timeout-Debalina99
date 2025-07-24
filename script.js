//your JS code here. If required.
let button = document.getElementById("btn");
let output = document.getElementById("output");

button.addEventListener("click", async () => {
  let text = document.getElementById("text").value;
  let delay = document.getElementById("delay").value;

  if (!text || !delay) {
    alert("Fill both fields!");
    return;
  }

  delay = parseInt(delay);
	await new Promise(resolve => setTimeout(resolve, delay));
    output.textContent = text;

});