const calenderButton = document.querySelector('.btn-start');
const calendarContainer = document.querySelector(".container");
const calendarMonths = 12;

calenderButton.addEventListener('click', (event)=> {
    console.log("test");
    for(let i=0; i < calendarMonths; i++){
        const calendarDoor = document.createElement ('div');
        const calendarDoorText =document.createElement('div');
        calendarDoor.classList.add('image');
        calendarDoorText.classList.add('text');
        calendarDoor.style.gridArea ="month" + (i+1);
        calendarDoorText.innerHTML = i+1;

        calendarDoor.appendChild(calendarDoorText);
        calendarContainer.appendChild(calendarDoor);

        let picNumber = i+1;
        let picPath = `./img/pic${picNumber}.jpg`;

        calendarDoorText.addEventListener('click', (event)=> {
            event.target.parentNode.style.backgroundImage = `url("${picPath}")`;
            event.target.style.opacity = 0;
            event.target.style.backgroundcolor = "#333";
        }
            
        );

    }
    event.preventDefault();
});

