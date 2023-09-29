var counter =1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 4){
                counter = 1;
            }
        }, 3500);


        var countera =1;
        setInterval(function(){
            document.getElementById('radioa' + countera).checked = true;
            countera++;
            if(countera > 4){
                countera = 1;
            }
        }, 3500);

        const accordionItems = document.querySelectorAll('.accordion-item');
    
        accordionItems.forEach(item => {
          const header = item.querySelector('.accordion-header');
          header.addEventListener('click', () => {
            item.classList.toggle('active');
          });
        });

        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');


        menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        
        });

        function updateCountdown() {
            const hoursElement = document.getElementById("hours");
            const minutesElement = document.getElementById("minutes");
            const secondsElement = document.getElementById("seconds");
          
            let hours = parseInt(hoursElement.innerText);
            let minutes = parseInt(minutesElement.innerText);
            let seconds = parseInt(secondsElement.innerText);
          
            if (seconds > 0) {
              seconds--;
            } else {
              if (minutes > 0) {
                minutes--;
                seconds = 59;
              } else {
                if (hours > 0) {
                  hours--;
                  minutes = 59;
                  seconds = 59;
                } else {
                  // Countdown finished
                  clearInterval(interval);
                  return;
                }
              }
            }
          
            hoursElement.innerText = hours.toString().padStart(2, '0');
            minutesElement.innerText = minutes.toString().padStart(2, '0');
            secondsElement.innerText = seconds.toString().padStart(2, '0');
          }
          
          // Update the countdown every second
          const interval = setInterval(updateCountdown, 1000);
          
          // Initial call to set the initial countdown values
          updateCountdown();
          