function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var result = "";
    if (principal <= 0) {
        alert("Amount must be a positive number");
        document.getElementById("principal").focus();
    }
    else {
        result = "If you deposit \<mark\>" + principal + "\</mark\>," + "\<br\> at an interest rate of \<mark\>" + rate + "%\</mark\>. \<br\>" + "You will reveice an amount of \<mark\>" + interest + "\</mark\>, \<br\>" + "in the year \<mark\>" + year + "\</mark\> \<br\>";
        document.getElementById("result").innerHTML = result;
    }
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";

}