let userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const showwinner = (userwin, userchoice, compchoice) => 
{
    if(userwin) 
    {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! \n Computer = ${compchoice} \n Player = ${userchoice}`;
        msg.style.backgroundColor = "green";
    }
    else 
    {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lose! \n Computer = ${compchoice} \n Player = ${userchoice}`;
        msg.style.backgroundColor = "red";
    }


};


const playgame = (userchoice) =>
{
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random()*3);
    const compchoice = options[idx];
    
    if(userchoice === compchoice) 
    {
        msg.innerText = `Draw! \n Computer = ${compchoice} \n Player = ${userchoice}`;
        msg.style.backgroundColor = "#081b31";

    }
    else 
    {
        let userwin=true;
        if(userchoice === "rock") 
        {
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper") 
        {
            userwin = compchoice === "rock" ? true : false;
        }
        else  
        {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }

    

};

choices.forEach((choice) => 
{
    choice.addEventListener("click", () =>
    {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });

});