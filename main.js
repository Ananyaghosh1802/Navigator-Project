function validate() {
    var x = document.getElementById("name").value;
    var y= document.getElementById("password").value;

    if(x==="ananya") {
        if(y==="ananya123") {
            console.log("matches");
            window.location.href ="index.html";

        }
        else {
            alert("Enter a valid password");
            console.log("password error");
        }
    }
    else {
        alert("Enter a valid username");
        console.log("Enter valid username");
    }
}