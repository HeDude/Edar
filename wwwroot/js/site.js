document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("freedomSlider");
    if (slider) {
        slider.addEventListener("input", changeRootStatement);
        slider.addEventListener("input", changeSliderColor);
        changeSliderColor(); // Initialize the color
    }
});

function changeRootStatement() {
    const slider = document.getElementById("freedomSlider");
    let rootStatement = document.getElementById("rootStatement");
    let productStatement = document.getElementById("productStatement");
    productStatement.innerHTML = `This education architecture is called <input type="text" id="architectureName" value="Codeniacs">.`;
    if (slider.value >= 0 && slider.value < 10) {
        productStatement.innerHTML = ``;
        rootStatement.innerHTML = `This learning architecture is called <input type="text" id="architectureName" value="Codeniacs">.`;
    } else if (slider.value >= 10 && slider.value < 20) {
        rootStatement.innerHTML = `The root is an actor called <input type="text" id="rootName" value="Teacher">.`;
    } else if (slider.value >= 20 && slider.value < 30) {
        rootStatement.innerHTML = `The root is a portfolio called <input type="text" id="rootName" value="Showcase">.`;
    } else if (slider.value >= 30 && slider.value < 40) {
        rootStatement.innerHTML = `The root is an action called <input type="text" id="rootName" value="Skill">.`;
    } else if (slider.value >= 40 && slider.value < 50) {
        rootStatement.innerHTML = `The root is a unit called <input type="text" id="rootName" value="Course">.`;
    } else if (slider.value >= 50 && slider.value < 60) {
        rootStatement.innerHTML = `The root is a prerequisite called <input type="text" id="rootName" value="Recognition of prior learning">.`;
    } else if (slider.value >= 60 && slider.value < 70) {
        rootStatement.innerHTML = `The root is a resource called <input type="text" id="rootName" value="Book">.`;
    } else if (slider.value >= 70 && slider.value < 80) {
        rootStatement.innerHTML = `The root is a method called <input type="text" id="rootName" value="Entrepreneurial learning">.`;
    } else {
        productStatement.innerHTML = `ERROR: This architecture has not enough freedom!`;
        rootStatement.innerHTML = ``;
    }
}
function changeSliderColor() {
    const slider = document.getElementById("freedomSlider");
    var redValue = 0;
    var greenValue = 0;
    var blueValue = 0;
    if (slider.value < 25) {
        redValue = 0;
        greenValue = 255 - 4 * slider.value;
        blueValue = 0;
    }
    else if (slider.value >= 25 && slider.value < 50) {
        redValue = 0;
        greenValue = 255 - 4 * slider.value;
        blueValue = 2 * slider.value;
    }
    else if (slider.value >= 50 && slider.value < 75) {
        redValue = 2 * slider.value;
        greenValue = 0;
        blueValue = 200 - 2 * slider.value;
    }
    else {
        redValue = 2 * slider.value;
        greenValue = 0;
        blueValue = 0;
    }
    console.log(`${slider.value}`);
    slider.style.setProperty('--track-color', `rgb(${redValue}, ${greenValue}, ${blueValue})`);
}


