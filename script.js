const jokeElement = document.getElementById("joke");
        const getJokeButton = document.getElementById("getJokeButton");

        getJokeButton.addEventListener("click", () => {
            fetch("https://icanhazdadjoke.com/", {
                headers: {
                    "Accept": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                jokeElement.textContent = data.joke;
            })
            .catch(error => {
                jokeElement.textContent = "Failed to fetch a dad joke. Please try again later.";
                console.error(error);
            });
        });