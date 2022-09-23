function getPin(){
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ' ';
    if(pinString.length == 5){
        return pin;
    }
    else {
        return getPin();
    }
}



function generatePin(){
    const pin =getPin();
    document.getElementById('Display-Pin').value = pin;
}

document.getElementById('Key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    const previousCalc = calcInput.value ;
    const newCalc = previousCalc + number;
    calc.value = newCalc;
})