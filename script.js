
const stepsButton = document.getElementById("stepsButton");
const stepsList = document.getElementById("steps");

stepsButton.addEventListener("click", function() {
    if (stepsList.style.display === "none" || stepsList.style.display === "") {
        stepsList.style.display = "block";
        stepsButton.textContent = "Hide Steps";
    } else {
        stepsList.style.display = "none";
        stepsButton.textContent = "Show Steps";
    }
});

const steps = document.querySelectorAll(".step");

    steps.forEach(step => {
        step.addEventListener("mouseover", function() {
            step.style.color = "red"; // Change color when hovered over
        });

        step.addEventListener("mouseleave", function() {
            step.style.color = ""; // Restore original color when mouse leaves
        });

        step.addEventListener("click", function() {
            const soundFile = step.getAttribute("data-sound");
            playSound(soundFile); // Play sound on click
        });
    });

function playSound(soundFile) {
    const sound = document.getElementById("hoverSound");
    sound.src = soundFile;
    sound.play();
}
