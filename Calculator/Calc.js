let string = "";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => 
{
  button.addEventListener("click", (e) => 
  {

    let newText = e.target.innerText.trim(); 

    if (newText === "=") 
    {
      string = eval(string);
      document.querySelector("input").value = string;
    } 
    else if (newText === "AC") 
    {
      string = "";
      document.querySelector("input").value = string;
    } 
    else if (newText === "DEL") 
    {
      string = string.slice(0, -1); 
      document.querySelector("input").value = string;
    } 
    else if (newText === "x!") 
    {
      let num = Number(string);
      if (Number.isInteger(num) && num >= 0) 
      {
        let fact = 1;
        for (let i = 2; i <= num; i++) 
        {
          fact *= i;
        }
        string = fact.toString();
        document.querySelector("input").value = string;
      }
    }
    else 
    {
      string += newText;
      document.querySelector("input").value = string;
    }
  });
});
