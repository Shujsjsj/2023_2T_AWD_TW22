document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('.calculator input[type="button"]');
    const container = document.querySelector('.container');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.value;
            if (value === 'AC') {
                display.value = '';
            } else if (value === 'DE') {
                display.value = display.value.toString().slice(0, -1);
            } else if (value === '=') {
                display.value = eval(display.value);
                container.style.background = "linear-gradient(" + getRandomDegree() + "deg, #eb92be, #ffef78, #63c9b4)";
            } else {
                display.value += value;
            }
        });
    });
    function getRandomDegree() {
        return Math.floor(Math.random() * 360);
    }
});
