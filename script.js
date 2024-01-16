const data = document.getElementById("data");
const calculate = document.getElementById("calculate");
const date = new Date();
const today = date.getDate();
const currentMonth = date.getMonth() + 1; 
const currentYear = date.getFullYear();
calculate.addEventListener('click', () => {
    // console.log("button clicked");
    // console.log(data.value);
    // console.log(today);
    if (data.value == " ") {
        alert("please select a date");
    }
    else {
        calculateAgeDifference();
    }
})
function calculateAgeDifference(){
    const dob = data.value;
    const dobYear = parseInt(dob.substring(0, 4));
    const dobMonth = parseInt(dob.substring(5,7));
    const dobDate = parseInt(dob.substring(8, 10));
    // console.log(dobDate);
    if (currentYear > dobYear || currentYear==dobYear) {
        // console.log("continue");
        // console.log(currentYear - dobYear);
        let yearDifference = currentYear - dobYear;

        document.getElementById("yearsprint").innerText = yearDifference;
        let monthDifference;
        if (currentMonth > dobMonth) {
            monthDifference = currentMonth - dobMonth;
        } else {
            yearDifference--;
            monthDifference = 12 + currentMonth - dobMonth;
        }
        document.getElementById("monthPrint").innerText = monthDifference;
        let dateDifference;
        if (today > dobDate) {
            dateDifference = today - dobDate;
        }
    } else {
        alert("please enter a valid date");
    }
}