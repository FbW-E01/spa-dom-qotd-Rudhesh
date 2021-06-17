
        const quoteOfTheDay = [
            'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
            "Don't watch the clock; do what it does. Keep going.",
            'The secret of getting ahead is getting started.',
            'Well done is better than well said.',
            'You miss 100% of the shots you don’t take.',
            'A goal is a dream with a deadline.',
            'Outstanding people have one thing in common: An absolute sense of mission.',
            'Trying is winning in the moment.',
            'Fall down seven times and stand up eight.',
            "You just can't beat the person who never gives up.",
            'There is little success where there is little laughter.',
            'We cannot solve our problems with the same thinking we used when we created them.'
          ];
          const button = document.querySelector("button");
          button.classList.add("btn", "btn-secondary")
         

          const input = document.querySelector("div")
          input.style.border = "2px solid gray"
          input.style.width = "70%"
          input.style.borderRadius = "5px"
          input.style.fontSize = "1.7rem"



          function mouseClickHandler() {
            input.innerText = quoteOfTheDay[Math.floor(Math.random()* quoteOfTheDay.length)]
            
   
          }
          button.addEventListener("click", mouseClickHandler)
       

        
        
        