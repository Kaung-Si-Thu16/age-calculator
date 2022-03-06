const results = document.querySelector("#results");

function calc(){
    let userDate = document.querySelector("#dd").value;
    let userMonth = document.querySelector("#mm").value;
    let userYear = document.querySelector("#yy").value;

    let dateObj = new Date();

    let currentDate = dateObj.getDate();
    let currentMonth = dateObj.getMonth() + 1;
    let currentYear = dateObj.getFullYear();

    const daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(userDate && userMonth && userYear){
        if(userDate > currentDate){
            currentDate += daysOfMonths[currentMonth - 1];

            currentMonth -= 1;
        }

        if(userMonth > currentMonth){
            currentMonth += 12;

            currentYear -= 1;
        }

        let calculatedDate = currentDate - userDate;
        let calculatedMonth = currentMonth - userMonth;
        let calculatedYear = currentYear - userYear;

        results.innerHTML = `${calculatedYear} year(s), ${calculatedMonth} month(s) and ${calculatedDate} day(s) old`;


    if(userYear <= 1800){
        results.innerHTML = `${calculatedYear} year(s), ${calculatedMonth} month(s) and ${calculatedDate} day(s) old <br> How are you still alive!?`;
    }

    }else {
        alert("You Need to Fill All the Fields!")
    }

    if(userDate > 31 || userMonth > 12 || userYear > currentYear){
        results.innerHTML = "What are you?"
    }
}


function clearAll(){
    results.innerHTML = "";
    let userDate = document.querySelector("#dd").value = "";
    let userMonth = document.querySelector("#mm").value = "";
    let userYear = document.querySelector("#yy").value = "";
}

