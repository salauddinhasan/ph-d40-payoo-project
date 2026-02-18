       
       
       document.getElementById('login-btn')
        .addEventListener('click', function() { 
           
        // step : 1 get the mobile number input
        const inputNumber = document.getElementById('input-number');
        const contactNumber = inputNumber.value;
        console.log(contactNumber);

        // step : 2 get the email input
        const inputPin = document.getElementById('input-pin');
        const contactPin = inputPin.value;
        console.log(contactPin);

        // step : 3 match inputPin & inputNumber
        if(contactNumber == '01331539924' && contactPin == '1234'){
            // 3.1 true hoy tahole alert homepage
            alert('login Successful')

            // window.location.assign(home.html)
            window.location.assign('/home.html');
        } else {
            // 3.2 false hoy tahole alert return
            alert('login Failed');
            return;
        }

        })