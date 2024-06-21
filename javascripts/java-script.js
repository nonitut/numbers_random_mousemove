document.addEventListener('DOMContentLoaded', function() {
    let canvasPosition, canvasTop, canvasLeft;

    function getRandomNumber() {
        return Math.floor(Math.random() * 100); 
    }

    document.querySelector('.my_numbers_block').addEventListener('mousemove', function(e) {
        let number = getRandomNumber();

        canvasPosition = this.getBoundingClientRect();
        canvasTop = canvasPosition.top;
        canvasLeft = canvasPosition.left;

        let numDiv = document.createElement('div');
        numDiv.textContent = number;
        numDiv.className = 'number';
        numDiv.style.left = (e.clientX - canvasLeft) + 'px';
        numDiv.style.top = (e.clientY - canvasTop) + 'px';

        this.appendChild(numDiv);

        setTimeout(function() {
            numDiv.style.opacity = 0;
        }, 0);

        setTimeout(function() {
            numDiv.remove();
        }, 5000);
    });
});
