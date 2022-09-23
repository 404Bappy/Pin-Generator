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
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = ' '; 
        }
    }
    else{
       
        const previousNumber = calcInput.value ;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;

    }

  
});

function verifyPin(){
    const generatedPin = document.getElementById('Display-Pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const correctNotification = document.getElementById('notify-correct');
    const failedNotification = document.getElementById('notify-Fail');
    if(generatedPin == typedNumbers){
        
        correctNotification.style.display = 'block';
        failedNotification.style.display = 'none';   
    }
    else{
        correctNotification.style.display = 'none';
        failedNotification.style.display = 'block';   
     }
}