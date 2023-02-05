const scoreDOM= document.getElementById("score");
let score= JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreDOM.innerText=`score: ${score}`;
//to create random numbers
const num1= Math.floor(Math.random()*10); //to make numbers integers and between 1 and 10
const num2= Math.floor(Math.random()*10);

//to manipulate numbers
const questionDOM= document.getElementById("question");
questionDOM.innerText = `What is ${num1} multiply by ${num2} ?`;

//to check answers
const correctAns = num1 * num2;

//to get data from the input
const formDOM= document.getElementById("form");
const inputDOM= document.getElementById("input");
formDOM.addEventListener("submit", ()=>{
   const userAns = +inputDOM.value
   if(userAns===correctAns){
    score++;
    updateLocalStorage();
   }
   else{
    score--;
    updateLocalStorage();
   }
}) //each time someone submit the form activate callback function

//each time we press submit the page is refreshing and set score to 0 so we need to store
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}

