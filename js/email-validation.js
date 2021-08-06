// function ValidateEmail(inputText)
// {
// var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// alert("You have entered a valid email address!");    //The pop up alert for a valid email address
// document.form1.mail.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
// document.form1.mail.focus();
// return false;
// }
// }

function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}