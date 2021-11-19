const btn = document.querySelector(".calc");

function inputText(letter, part){
    const yourName = document.getElementById(letter).value;
    const nameInput = document.getElementById(part).innerText;
    document.getElementById(part).innerText = yourName;
    document.getElementById(letter).value = "";
}

function calculate(percent){
    const number =Math.random()*100;
    const result =Math.round(number);
    document.getElementById(percent).style.display = "block";
    const lovePercentage = document.getElementById(percent).innerText;
    document.getElementById(percent).innerText = `${result} %`;
    if(result<30){
        const discription = document.getElementById("discription").innerText;
        document.getElementById("discription").innerText = `This man hates you`;
    }
    else if(result>90){
        const discription2 = document.getElementById("discription").innerText;
        document.getElementById("discription").innerText = `This man loves you more than his life`;
    }
}

btn.addEventListener('click',function(){
    const upper = document.querySelector(".up").style.display = "none";
    const lower = document.getElementById("doId").style.display = "flex";
    inputText("firstname", "firstNameH");
    inputText("secondname","secondNameH");
    calculate("mathH");
});