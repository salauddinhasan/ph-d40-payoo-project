document.getElementById('cashout-btn').addEventListener('click', function() { 

    // 1: get the agent number & validate
    const cashoutNumber = getValueFromInput('cashout-number');
    if(cashoutNumber.length != 11) {
        alert('Invalid Number');
        return;
    }

    // 2: get the amount * validate
    const cashoutAmount = getValueFromInput('cashout-amount')

     const currentBalance = getBalance();

    // 4: calculate new balance

    const newBalance = currentBalance - Number(cashoutAmount);
     console.log(newBalance);

    if(newBalance < 0) {
        alert('Invalid Amount');
        return;
    }

    // 5: pin validation
const pin = getValueFromInput('cashout-pin');
    if(pin === '1234') {
        alert('cashout successfull');
        setBalance(newBalance); 
    } else {
        alert('Invalid Pin');
        return;
    }
});




// document.getElementById('cashout-btn').addEventListener('click', function() { 

//     // 1: get the agent number & validate
//     const cashoutNumber = getValueFromInput('cashout-number');
//     if(cashoutNumber.length != 11) {
//         alert('Invalid Number');
//         return;
//     }

//     // 2: get the amount * validate
//     const cashoutAmount = getValueFromInput('cashout-amount')

//     // 3 get the current number ;
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     // 4: calculate new balance

//     const newBalance = Number(balance) - Number(cashoutAmount);
//     console.log(newBalance);

//     if(newBalance < 0) {
//         alert('Invalid Amount');
//         return;
//     }

//     // 5: pin validation
// const pin = getValueFromInput('cashout-pin');
//     if(pin === '1234') {
//         alert('cashout successfull');
//         balanceElement.innerText = newBalance;
//     } else {
//         alert('Invalid Pin');
//         return;
//     }
// });




// document.getElementById('cashout-btn').addEventListener('click', function() { 
//     // 1: check agent number
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length != 11) {
//         alert('Invalid agent Number');
//         return;
//     }


//     // 2: check amount number;
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     // 3: get the current balance
//     const balanceElement = document.getElementById('balance');
//     const balance =  balanceElement.innerText
//     console.log(balance);

//     // 4: calculate balance
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if(newBalance < 0) {
//         alert('Invalid Amount');
//         return;
//     } 
    
//     // 5: get the pin and verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
    
//     // 5.1 true : show in error alert> return
//     if(pin === '1234') {
//         alert('cashout successfull');
//         console.log('new balance', newBalance);
//         balanceElement.innerText = newBalance;
//         // 5.2 true : show an error alert > return
//     } else {
//         alert('Invalid Pin');
//         return;
//     }

// })