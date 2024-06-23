// script.js
let autoColorInterval;

document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);
document.getElementById('autoColorButton').addEventListener('click', toggleAutoChange);

function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0FF33', '#FF33F6', '#33FFF6', '#9D33FF', '#FF9D33', '#D4FF33', '#FF33B8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function toggleAutoChange() {
    const button = document.getElementById('autoColorButton');
    if (autoColorInterval) {
        clearInterval(autoColorInterval);
        autoColorInterval = null;
        button.textContent = 'Mudar Cor Automaticamente';
    } else {
        autoColorInterval = setInterval(changeBackgroundColor, 1000); // Muda a cor a cada segundo
        button.textContent = 'Parar Mudança Automática';
    }
}
