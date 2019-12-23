const drawCanvas = (objStore, reduxStore) => {
  const ctx = objStore.canvas.ctx

  // Draw a test shape on the canvas
  ctx.fillStyle = '#F00'
  ctx.strokeStyle = '#0F0'
  ctx.lineWidth = 3
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.closePath();
  ctx.stroke()
  ctx.fill();

}

export default drawCanvas
