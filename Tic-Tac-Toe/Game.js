let boxes = document.querySelectorAll(".box");
let turn0 = false;
let msgContainer = document.querySelector(".msgContainer");
let resetgamebtn = document.querySelector("#reset-btn")
let count=0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () =>
{
    for(let box of boxes)
    {
        turn0=false;
        box.disabled=false;
        box.innerText = "";
        msg.innerText="PLAY!";
        count=0;
    }

};
resetgamebtn.addEventListener("click", resetgame);



const showwinner = (winner) =>
{
    msg.innerText = `CONGRATULATIONS!! THE WINNER IS ${winner}`;
    for(let box of boxes) box.disabled=true;
};

const draw = () => 
{
    msg.innerText = "DRAW!";
    for(let box of boxes) box.disabled=true;

};

const checkwinner = () => 
{
    for(let pattern of winPatterns)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="" && pos1==pos2 && pos2==pos3 && count!=9)
        {
            showwinner(pos1);
            return;
        }
        else if(count==9) 
        {
            draw();
        }
    }
};

boxes.forEach((box) => 
{
    box.addEventListener("click", () => 
    {
        if(turn0 == true) 
        {
            box.innerText = "0";
            turn0 = false;
            count+=1;
        }
        else 
        {
            box.innerText="X";
            turn0=true;
            count+=1;
        }
        box.disabled = true;
        checkwinner();
    });
});

