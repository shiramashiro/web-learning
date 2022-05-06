function drawGrid(canvasW, canvasH, step) {
    drawGridX(step, canvasH);
    drawGridY(step, canvasW);
}

function drawGridX(step, canvasH) {
    let horizontalX = 0;
    for (let i = 0; i < canvasH / step; i++) {
        horizontalX += step;
        ctx.beginPath();
        ctx.moveTo(horizontalX, 0);
        ctx.lineTo(horizontalX, canvasH);
        ctx.strokeStyle = '#adadad';
        ctx.stroke();
    }
}

function drawGridY(step, canvasW) {
    let verticalY = 0;
    for (let i = 0; i < canvasW / step; i++) {
        verticalY += step;
        ctx.beginPath();
        ctx.moveTo(0, verticalY);
        ctx.lineTo(canvasW, verticalY);
        ctx.strokeStyle = '#adadad';
        ctx.stroke();
    }
}