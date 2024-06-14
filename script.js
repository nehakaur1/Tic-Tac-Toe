let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msgpara = document.querySelector("#msg");
let turnO = true;
let counter=0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    counter++;
    console.log(counter);
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.style.color = "black";
    } else {
      box.innerText = "X";
      turnO = true;
      box.style.color = "#b0413e";
    }
    box.disabled = true;
    checkwinner();
  });
});
//2d array
let winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let disablebtn = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
let enablebtn = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
let showwinner = (pos1value) => {
  msgpara.innerText = `congratulations,Winner is ${pos1value}`;
  msgcontainer.classList.remove("hide");
  disablebtn();
  // counter=0;
};
let draw = () => {
  msgpara.innerText = "This was Draw";
  msgcontainer.classList.remove("hide");
  disablebtn();
  counter=0;
};
let checkwinner = () => {
  for (pattern of winpattern) {
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let pos3value = boxes[pattern[2]].innerText;
    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value === pos2value && pos2value === pos3value) {
        showwinner(pos1value);
      }
      else if(counter==9){
      draw();
      
      }
    }
  }
};
let resetGame = () => {
  turnO = true;
  enablebtn();
  msgcontainer.classList.add("hide");
};
resetbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", resetGame);
