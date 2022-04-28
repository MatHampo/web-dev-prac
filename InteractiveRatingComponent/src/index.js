document.addEventListener("DOMContentLoaded", () => {
    console.log("src/index.js Linked!");

    const selectScreen = document.getElementById("select-screen");
    const resultScreen = document.getElementById("result-screen");
    const buttonStyle = "rating-button icon";
    let rating = 0;

    function setupPage() {
        selectScreen.style.display = "flex";
        resultScreen.style.display = "none";

        document.querySelectorAll(".rating-button").forEach(button => {
            button.addEventListener("click", clickRating);
        });
        document.getElementById("rating-submit").addEventListener("click", clickSubmit);
    }
    setupPage();

    // Testing
    // selectScreen.style.display = "none";
    // resultScreen.style.display = "flex";

    function clickRating() {
        const selectedRating = this.getAttribute("data-rate");
        document.querySelectorAll(".rating-button").forEach(button => {
            if(button.getAttribute("data-rate") == selectedRating) {
                button.setAttribute("class" , buttonStyle + " selected");
            } else {
                button.setAttribute("class" , buttonStyle);
            }
        rating = selectedRating;
        })
        console.log(selectedRating);
        
    }

    function clickSubmit() {
        if(rating != 0) {
            selectScreen.style.display = "none";
            resultScreen.style.display = "flex";
            document.getElementById("score-result").innerText = rating.toString();
        }
        console.log("rating-submit clicked!");
    }
});