
const userName = document.querySelector('#user_name');
const userEmail = document.querySelector('#email');
const userNumber = document.querySelector('#number');
const submitButton = document.querySelector('#submit');

name_r = document.querySelector('#name_r')
email_r = document.querySelector('#email_r')
phone_r = document.querySelector('#phone_r')

submitButton.addEventListener('click', InputValidation)


function InputValidation(){
       

    const userNameValue = userName.value;
    const userEmailValue = userEmail.value;
    const userNumberValue = userNumber.value;

       //name validation
       const validName = /^[a-zA-Z\s]+$/;

       if(userNameValue === '' || !validName.test(userNameValue)){
              
              if(userNameValue.length === 0){
                 alert(`Name can't be empty`)
              } else{
                  alert(`${userNameValue} is't an Valid Name. Please enter a valid name`)
              }
                 
       } else{
              name_r.innerHTML = userNameValue;
       }

       //email validation
       const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

       if (validEmail.test(userEmailValue)) {
           email_r.innerHTML = userEmailValue;
       } else {
           alert(`Please enter a valid email address`);
       }
       
       // phone validation
       const validPhoneNumber = /^\d{11}$/;

       if (validPhoneNumber.test(userNumberValue)) {
       
       phone_r.innerHTML = userNumberValue;
       } else {
       alert(`Please enter a valid phone number (11 digits)`);
       }
       
 
 }

