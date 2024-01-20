let clickCount = 0;

function changeColors() {
    console.log('Button Clicked!');
    const body = document.body;
    const leftSide = document.querySelector('.container .left-side');
    const textElements = document.querySelectorAll('.title, .profile-text h2, .contact-info li .icon, .contact-info li span, .contact-info.education h4, .contact-info.education h5, .container .right-side .title2, .about .box .year h5, .about .box .text h4, .skills .box h4, .skills .box .percent div');
    const originalPalette = { bgColor: 'lightblue', textColor: '#333' };
    const pastelPalette = { bgColor: '#f0f0f0', textColor: '#333' }; 
    clickCount++;
    const selectedPalette = clickCount % 2 === 0 ? originalPalette : pastelPalette;
    body.style.backgroundColor = selectedPalette.bgColor;
    leftSide.style.backgroundColor = selectedPalette.bgColor;

    textElements.forEach(element => {
        element.style.color = selectedPalette.textColor;
    });
    if (clickCount >= 2) {
        clickCount = 0;
        body.style.backgroundColor = originalPalette.bgColor;
        leftSide.style.backgroundColor = originalPalette.bgColor;
        textElements.forEach(element => {
            element.style.color = originalPalette.textColor;
        });
    }
}
document.querySelector('.color-change-button').addEventListener('click', changeColors);

