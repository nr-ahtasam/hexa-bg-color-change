// project requirement:
//change the background color by generateing random hex color by clicking a button
//also display the hex code to a disable input field

//step 1 create onload handler

window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const colorPicker = document.getElementById("output");
  btn.addEventListener("click", () => {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    colorPicker.value = bgColor;
  });
}

// step 2 random color generator function
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
// step 3 collect all necessary referances

//step 4 handle the click event
