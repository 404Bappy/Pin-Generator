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
    const calc = document.getElementById('typed-numbers');
    calc.value = number;
})