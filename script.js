const mail = document.querySelector("#eMail");
const pass = document.querySelector("#passWord");
const key = document.querySelector("#btn15");
const saw = document.querySelector("#jai");




var patt = new RegExp("[a-zA-Z0-9]+@[a-z]+\.(com|in)+")
    var patt2 = new RegExp("[a-zA-Z0-9!@#$%^&*()]{6,}");


function start() {

    if (mail.value.match(patt)) {
       document.querySelector("#eMail").style.borderColor = "green";
       document.querySelector("#jai").style.color = "green";
          true;
    }
        else {
            document.querySelector("#eMail").style.borderColor = "red";
       document.querySelector("#jai").style.color = "red"
       alert("Please Enter a valid Email Adress");
              return false;
        }
    
    if (pass.value.match(patt2)) {
       document.querySelector("#passWord").style.borderColor = "green";
       document.querySelector("#rocky").style.color = "green";
         true;
    }
        else {
            document.querySelector("#passWord").style.borderColor = "red";
       document.querySelector("#rocky").style.color = "red"
        alert("Error-Type-Password : Please enter a password of atleast 6 characters or more <br>");
        return false;
        }    
    
   
    
    }
    
    
    











//
//
//key.addEventListener("click" , start , false);
//
//

