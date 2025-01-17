const canvas = document.getElementById('semnatura');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', (event) => {
    drawing = true;
    ctx.beginPath();
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ctx.moveTo(x, y);
});

canvas.addEventListener('mousemove', (event) => {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
});

canvas.addEventListener('mouseleave', () => {
    drawing = false;
});
