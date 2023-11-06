let outputYears = document.getElementById('outputYears');
let outputMonths = document.getElementById('outputMonths');
let outputDays = document.getElementById('outputDays');

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let day = currentDate.getDate();

const inputDateRef = document.getElementById('input-date');
const calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener("click", () => {
    let inputdateValue = new Date(inputDateRef.value);
    let inputDay = inputdateValue.getDate();
    let inputyear = inputdateValue.getFullYear();
    let inputmonth = inputdateValue.getMonth();

    if (inputdateValue > currentDate) {
        alert("Please enter a valid date");
        return; 
    }

    let fday = inputDay - day;
    let fmonth = inputmonth - month;
    let fyear = inputyear - year;

    if (fmonth < 0 || (fmonth === 0 && fday < 0)) {
        fyear--;
        fmonth += 12;
    }

    if (fday < 0) {
        const lastDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).getDate();
        fday += lastDayOfMonth;
        fmonth--;
    }
    
    if (fmonth === -1) {
        fmonth = 11;
        fyear--;
    }

    outputYears.innerText = fyear;
    outputMonths.innerText = fmonth;
    outputDays.innerText = fday;
});