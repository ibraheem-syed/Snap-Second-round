/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    fetch('teams.json')
        .then(response => response.json())
        .then(json => {
        // Assign the fetched JSON data to the titles object array
            let titles = json
            
            const cardContainer = document.getElementById("card-container");
            cardContainer.innerHTML = "";
            const templateCard = document.querySelector(".card");
    
            for (let i = 0; i < titles.length; i++) {
                let title = titles[i].name;

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
            let imageURL = "";
            imageURL = titles[i].imageURL;

            let championships = "";
            championships = titles[i].championships;

            let conference = "";
            conference = titles[i].conference;

            let division = "";
            division = titles[i].division;
        /*
        if ((i+1) % 3 === 0) 
        {
            cardContainer.appendChild(document.createElement("br"));
        }
        */
            const nextCard = templateCard.cloneNode(true); // Copy the template card
            editCardContent(nextCard, title, imageURL,championships,conference,division); // Edit title and image
            cardContainer.appendChild(nextCard); // Add new card to the container
    }
        // Call a function to display or process the fetched data as needed
    })
    .catch(error => {
        console.error('Error fetching teams data:', error);
    });

    console.log(titles);
    
}

function editCardContent(card, newTitle, newImageURL,newChampionship,newConference,newDivision) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle;

    const ulElement = card.querySelector('ul');

    const liElements = ulElement.querySelectorAll('li');

    liElements[0].textContent = "Championships: " + newChampionship;
    liElements[1].textContent = "Conference: " + newConference;
    liElements[2].textContent = "Division: " + newDivision;
    console.log("Conference",newConference," ",card);
    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newChampionship, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I'm a Celtics fan");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
