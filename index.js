function setError(id, error) {
    var element = document.getElementById(id);
    element.innerHTML = error;

}





function Validate() {
    var value = true;
    const cardname = document.getElementById("name").value;
    const cardnumber = document.getElementById("number").value;
    const ExpiryMonth = document.getElementById("month").value;
    const ExpiryYear = document.getElementById("year").value;
    const cardCvv = document.getElementById("cvv").value;

    if (cardname.length == 0) {
        setError("errormsg1", "*Can't be blank");
        document.getElementById("name").classList.add("error");
        value = false;
    }
    if (cardnumber.length == 0) {
        setError("errormsg2", "*Can't be blank");
        document.getElementById("number").classList.add("error");
        value = false;
    }
    if (ExpiryMonth.length == 0) {
        setError("errormsg3", "*Can't be blank");
        document.getElementById("month").classList.add("error");
        value = false;
    }
    if (ExpiryYear.length == 0) {
        setError("errormsg3", "*Can't be blank");
        document.getElementById("year").classList.add("error");
        value = false;
    }
    if (cardCvv.length == 0) {
        setError("errormsg3", "*Can't be blank");
        document.getElementById("cvv").classList.add("error");
        value = false;
    }
    if (cardname.length != 0) {
        document.getElementById("errormsg1").innerHTML = ""
        document.getElementById("name").classList.remove("error");
    }
    if (cardnumber.length != 0) {
        document.getElementById("errormsg2").innerHTML = ""
        document.getElementById("number").classList.remove("error");
    }

    if (ExpiryMonth.length != 0) {
        if(ExpiryYear.length != 0 && cardCvv.length != 0 ){
            document.getElementById("errormsg3").innerHTML = ""
        }
        
        document.getElementById("month").classList.remove("error");
    }

    if (ExpiryYear.length != 0) {
        if(ExpiryMonth.length != 0 && cardCvv.length != 0){
            document.getElementById("errormsg3").innerHTML = ""
        }
        
        document.getElementById("year").classList.remove("error");
    }
    if (cardCvv.length != 0) {
        if(ExpiryMonth.length != 0 && ExpiryYear.length != 0 ){
            document.getElementById("errormsg3").innerHTML = ""
        }
       
        document.getElementById("cvv").classList.remove("error");
    }




    return value;

}

