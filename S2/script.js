const dayColors = {
    "Monday": "#783194",
    "Tuesday": "#f79ee3",
    "Wednesday": "#3498DB",
    "Thursday": "#5de696",
    "Friday": "#ffdf5d",
    "Saturday": "#fa943a",
    "Sunday": "#e93e3e"
};

let prevButtonId = null;

function showLargeBox(day) {
    if (prevButtonId === day) {
        console.log('Same button clicked again. Do nothing.');
        return; 
    }
    prevButtonId = day;

    var existingBox = document.getElementById("largeBox");

    if (existingBox) {
        existingBox.style.transition = "all 2s";
        existingBox.style.opacity = 0;
        existingBox.style.top = "-100px";
        setTimeout(function () {
            existingBox.remove();
        }, 400);
    }

    var largeBox = document.createElement("div");
    largeBox.className = "Box";
    largeBox.id = "largeBox";

    var bgColor = dayColors[day];

    largeBox.style.right = "100px";
    largeBox.style.top = "-100px";
    largeBox.style.backgroundColor = bgColor;
    largeBox.style.border = "15px solid " + bgColor;

    document.body.appendChild(largeBox);

    void largeBox.offsetHeight;

    setTimeout(function () {
        largeBox.style.opacity = 1;
        largeBox.style.top = "200px";
        largeBox.style.border = "15px solid " + bgColor;
        largeBox.style.backgroundColor = "transparent";
    }, 200);
}
