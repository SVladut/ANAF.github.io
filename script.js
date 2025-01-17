const canvas = document.getElementById('semnatura');
const ctx = canvas.getContext('2d');
let drawing = false;

function getCoordinates(event) {
    const rect = canvas.getBoundingClientRect();
    let x, y;
    if (event.type.startsWith('touch')) {
        x = event.touches[0].clientX - rect.left;
        y = event.touches[0].clientY - rect.top;
    } else {
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    }
    return { x, y };
}

canvas.addEventListener('mousedown', (event) => {
    drawing = true;
    ctx.beginPath();
    const { x, y } = getCoordinates(event);
    ctx.moveTo(x, y);
});

canvas.addEventListener('touchstart', (event) => {
    drawing = true;
    ctx.beginPath();
    const { x, y } = getCoordinates(event);
    ctx.moveTo(x, y);
    event.preventDefault();
});

canvas.addEventListener('mousemove', (event) => {
    if (!drawing) return;
    const { x, y } = getCoordinates(event);
    ctx.lineTo(x, y);
    ctx.stroke();
});

canvas.addEventListener('touchmove', (event) => {
    if (!drawing) return;
    const { x, y } = getCoordinates(event);
    ctx.lineTo(x, y);
    ctx.stroke();
    event.preventDefault();
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
});

canvas.addEventListener('touchend', () => {
    drawing = false;
    event.preventDefault();
});

canvas.addEventListener('mouseleave', () => {
    drawing = false;
});

canvas.addEventListener('touchcancel', () => {
    drawing = false;
});

document.getElementById('clear-signature').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
});
