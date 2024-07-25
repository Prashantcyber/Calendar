const daysTag = document.querySelector(".days");
currentDate = document.querySelector(".current-date");
prevNextIcon =document.querySelectorAll(".icons span");

//retrive New date , Current year and month

let date = new Date();
currYear =date.getFullYear();
currMonth = date.getMonth();

// console.log( date, currMonth, currYear)   // Check the date, year, month;


const months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];

const renderCalendar =() =>{
    let FirstDateofMonth = new Date(currYear, currMonth ,1).getDay(), //get first date of Month
    // console.log(lastDateofMonth);
    lastDateofMonth = new Date(currYear, currMonth + 1,0).getDate(),
    //get last date of Month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay()
    // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth ,0).getDate();
    //get last date of prevs Month
    let liTag ="";

    for (let i = FirstDateofMonth; i>0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i=1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
        && currYear === new Date().getFullYear() ? "active" : "";
        // console.log(i);
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", ()=> {  //adding click event on both icon
        currMonth = icon.id ==="prev" ? currMonth -1 : currMonth +1;

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth );
            currYear =date.getFullYear();
            currMonth= date.getMonth();
        } else {
            date =new Date();
        }
        renderCalendar();
    })
})