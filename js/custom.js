// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "trinhvinhphuc2001@gmail.com",
        Password : "91D51A1E9E9B6C1A71F65EA73E24CFF6ED0C",
        To : "trinhvinhphuc2001@gmail.com",
        From : "trinhvinhphuc2001@gmail.com",
        Subject : document.getElementById("inputSubject4").value,
        Body : document.getElementById("inputName4").value+" ("+document.getElementById("inputEmail4").value+") has a message:\n"+document.getElementById("inputMessage").value
    }).then(
      message => alert(message)
    );  
}