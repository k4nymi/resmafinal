var imagecounter = 1;
document.getElementById("slideshowimg").style.backgroundImage = "url(img1.jpg)";
document.getElementById("img1").style.opacity = 1;

function checkImage(){
    if (imagecounter == 0){
        imagecounter = 5;
    }

    if (imagecounter == 6){
        imagecounter = 1;
    }

    if (imagecounter == 1){
        document.getElementById("slideshowimg").style.backgroundImage = "url(img1.jpg)";
        document.getElementById("img1").style.opacity = 1;
        document.getElementById("img5").style.opacity = 0.2;
        document.getElementById("img2").style.opacity = 0.2;
    } else if (imagecounter == 2){
        document.getElementById("slideshowimg").style.backgroundImage = "url(img2.jpg)";
        document.getElementById("img2").style.opacity = 1;
        document.getElementById("img1").style.opacity = 0.2;
        document.getElementById("img3").style.opacity = 0.2;
    } else if (imagecounter == 3){
        document.getElementById("slideshowimg").style.backgroundImage = "url(img3.jpg)";
        document.getElementById("img3").style.opacity = 1;
        document.getElementById("img2").style.opacity = 0.2;
        document.getElementById("img4").style.opacity = 0.2;
    } else if (imagecounter == 4){
        document.getElementById("img4").style.opacity = 1;
        document.getElementById("img3").style.opacity = 0.2;
        document.getElementById("img5").style.opacity = 0.2;
        document.getElementById("slideshowimg").style.backgroundImage = "url(img4.jpg)";
    } else if (imagecounter == 5){
        document.getElementById("slideshowimg").style.backgroundImage = "url(img5.jpg)";
        document.getElementById("img5").style.opacity = 1;
        document.getElementById("img4").style.opacity = 0.2;
        document.getElementById("img1").style.opacity = 0.2;
    }
}

function leftButton(){
    imagecounter--;
    checkImage();
}

function rightButton(){
    imagecounter++;
    checkImage();
}

var userinformation = {};

function passwordfunction_focus(){
    var x = document.getElementById("sign-in-password");

    if (x.value=="Password" && x.getAttribute("type") == "text"){
        x.style.opacity = "1";
        x.style.color = "black";
        x.value = "";
        x.setAttribute("type", "password");
    }
}

function passwordfunction_blur(){
    var x = document.getElementById("sign-in-password");

    if (x.value.length == 0){
        x.style.opacity = "0.6";
        x.style.color = "red";
        x.setAttribute("type", "text");
        x.value = "Password";

        x.style.borderColor = "red";
        document.getElementById("password-check").innerHTML = "Error! Required Field.";
        document.getElementById("password-check").style.color = "red";
    }
    else {
        x.style.borderColor = "green";
        document.getElementById("password-check").innerHTML = " ";
    }
}

function contactfunction_focus(){
    var x = document.getElementById("sign-in-contact");

    if (x.value=="Contact Number" && x.getAttribute("type") == "text"){
        x.style.opacity = "1";
        x.style.color = "black";
        x.value = "";
        x.setAttribute("type", "number");
    }
}

function contactfunction_blur(){
    var x = document.getElementById("sign-in-contact");

    if (x.value.length == 0){
        x.style.opacity = "0.6";
        x.style.color = "red";
        x.setAttribute("type", "text");
        x.value = "Contact Number";

        x.style.borderColor = "red";
        document.getElementById("contact-check").innerHTML = "Error! Required Field.";
        document.getElementById("contact-check").style.color = "red";
    }
    else {
        document.getElementById("contact-check").innerHTML = " ";
        x.style.borderColor = "green";
    }
}

function emailfunction_focus(){
    var x = document.getElementById("sign-in-email");

    if (x.value=="Email"){
        x.style.opacity = "1";
        x.style.color = "black";
        x.value = "";
    }
}

function emailfunction_blur(){
    var x = document.getElementById("sign-in-email");
    var check = validate(x.value);

    if (x.value.length == 0){
        x.style.opacity = "0.6";
        x.style.color = "red";
        x.value = "Email";

        x.style.borderColor = "red";
        document.getElementById("email-check").innerHTML = "Error! Required Field.";
        document.getElementById("password-check").style.marginLeft = "13.1vw";
        document.getElementById("email-check").style.color = "red";
    }
    else if(check == false){
        x.style.borderColor = "red";
        document.getElementById("email-check").innerHTML = "Error! Invalid email format.";
        document.getElementById("password-check").style.marginLeft = "10.39vw";
        document.getElementById("email-check").style.color = "red";
    }
    else {
        document.getElementById("email-check").innerHTML = " ";
        document.getElementById("password-check").style.marginLeft = "24.11vw";
        x.style.borderColor = "green";
    }
}

function validate(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) == false) 
    {
        return (false);
    }
}

function firstnamefunction_focus(){
    var x = document.getElementById("sign-in-firstname");
    var edited = false;

    if (x.value=="First Name" && edited == false){
        x.style.opacity = "1";
        x.style.color = "black";
        x.value = "";

        edited = true;
        localStorage.setItem("edited", edited);
    }
}

function firstnamefunction_blur(){
    var x = document.getElementById("sign-in-firstname");

    if (x.value.length == 0){
        x.style.opacity = "0.6";
        x.style.color = "red";
        x.value = "First Name";

        x.style.borderColor = "red";
        document.getElementById("firstname-check").innerHTML = "Error! Required Field.";
        document.getElementById("lastname-check").style.marginLeft = "13.421vw";
        document.getElementById("firstname-check").style.color = "red";

        edited = localStorage.getItem("edited");
        edited = false;
        localStorage.setItem("edited", edited);
    }
    else {
        x.style.borderColor = "green";
        document.getElementById("firstname-check").innerHTML = " ";
        document.getElementById("lastname-check").style.marginLeft = "24.18vw";
    }
}

function lastnamefunction_focus(){
    var x = document.getElementById("sign-in-lastname");
    var edited = false;

    if (x.value=="Last Name" && edited == false){
        x.style.opacity = "1";
        x.style.color = "black";
        x.value = "";

        edited = true;
        localStorage.setItem("edited", edited);
    }
}

function lastnamefunction_blur(){
    var x = document.getElementById("sign-in-lastname");

    if (x.value.length == 0){
        x.style.opacity = "0.6";
        x.style.color = "red";
        x.value = "Last Name";

        x.style.borderColor = "red";
        document.getElementById("lastname-check").innerHTML = "Error! Required Field.";
        document.getElementById("lastname-check").style.color = "red";

        edited = localStorage.getItem("edited");
        edited = false;
        localStorage.setItem("edited", edited);
    }
    else {
        x.style.borderColor = "green";
        document.getElementById("lastname-check").innerHTML = " ";

    }
}

function textareafunction_focus(){
    var x = document.getElementById("sign-in-textarea");
    var edited = false;

    if (x.value=="Why do you want to support this campaign?" && edited == false){
        x.style.opacity = "1";
        x.style.color = "black"
        x.value = "";

        edited = true;
        localStorage.setItem("edited", edited);
    }
}

function textareafunction_blur(){
    var x = document.getElementById("sign-in-textarea");

    if (x.value.length == 0){
        x.style.opacity = "0.6";
        x.value = "Why do you want to support this campaign?";

        x.style.borderColor = "red";
        x.style.color = "red";
        document.getElementById("textarea-check").innerHTML = "Error! Required Field.";
        document.getElementById("textarea-check").style.color = "red";

        edited = localStorage.getItem("edited");
        edited = false;
        localStorage.setItem("edited", edited);
    }
    else {
        x.style.borderColor = "green";
        document.getElementById("textarea-check").innerHTML = " ";
    }
}

function radiobutton_checking(){
    var x = document.querySelector('input[name="gender"]:checked');
    var a = document.getElementById("radio-fieldset");
    var i = document.getElementById("gender-check");

    if (x == null){
        i.innerHTML = "Error! Required Field.";
        i.style.color = "red";
        a.style.borderColor = "red";

        document.getElementById("contact-check").style.marginLeft = "13.421vw";
    }
    else{
        i.innerHTML = "";
        a.style.borderColor = "green";
        document.getElementById("contact-check").style.marginLeft = "24.18vw";
    }
}

function submitfunction(){
    var a = document.getElementById("firstname-check").innerHTML;
    var b = document.getElementById("lastname-check").innerHTML;
    var c = document.getElementById("contact-check").innerHTML;
    var d = document.getElementById("email-check").innerHTML;
    var e = document.getElementById("password-check").innerHTML;
    var f = document.getElementById("textarea-check").innerHTML;
    var g = document.querySelector('input[name="gender"]:checked');
    var h = document.getElementById("gender-check");
    var i = document.getElementById("sign-in-firstname").value;
    var j = document.getElementById("sign-in-lastname").value;
    var k = document.getElementById("sign-in-contact").value;
    var l = document.getElementById("sign-in-email").value;
    var m = document.getElementById("sign-in-password").value;
    var n = document.getElementById("sign-in-textarea").value;

    if((a == "Error! Required Field." && i == "First Name") || (b == "Error! Required Field." && j == "Last Name") || (c == "Error! Required Field." && k == "Contact Number") || ((d == "Error! Required Field." && l == "Email") || d == "Error! Invalid email format.") || (e == "Error! Required Field." && m == "Password") || (f == "Error! Required Field." && n == "Why do you want to support this campaign?") || (g == null)){
        alert("Fill out the required information.");
    }
    else{
        alert("You have successfully logged in!");
        
        location.href = "page2.html";
        login = true;

        localStorage.setItem("FirstName", i);
        localStorage.setItem("LastName", j);
        localStorage.setItem("Contact", k);
        localStorage.setItem("Email", l);
        localStorage.setItem("Password", m);
        localStorage.setItem("Textarea", n);
        localStorage.setItem("Gender", g.value);
    }

    return false;
}

function getAccount(){
    document.getElementById("fn").innerHTML = localStorage.getItem("FirstName") + "!";
    document.getElementById("firstn").innerHTML = localStorage.getItem("FirstName");
    document.getElementById("lastn").innerHTML = localStorage.getItem("LastName");
    document.getElementById("em").innerHTML = localStorage.getItem("Email");
    document.getElementById("sp").innerHTML = localStorage.getItem("Textarea");
    if (localStorage.getItem("Gender") == "Male"){
        document.getElementById("gender").innerHTML = "M";
    } else if (localStorage.getItem("Gender") == "Female"){
        document.getElementById("gender").innerHTML = "F";
    } else {
        document.getElementById("gender").innerHTML = "-";
    }
    
}