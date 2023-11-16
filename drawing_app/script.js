window.addEventListener('load', () => {
  console.log('Hello Canvas');

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  //todo Resizing height and width of canvas
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //! Drawing something our masterpiece
  let drawing = false;

  //todo functions to start drawing
  function startPosition(ev) {
    drawing = true;
    draw(ev);
  }

  function endPosition() {
    drawing = false;
    ctx.beginPath();
  }

  function draw(ev) {
    if (!drawing) return;

    ctx.lineWidth = '5';
    ctx.lineCap = 'round';
    ctx.lineTo(ev.clientX, ev.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ev.clientX, ev.clientY);
  }

  //todo eventlisteners to start drawing
  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', endPosition);
  canvas.addEventListener('mousemove', draw);

  //todo styling and creating rectangle / shapes
  // ctx.strokeStyle = 'purple';
  // ctx.strokeRect(100, 100, 300, 200);

  // ctx.strokeStyle = 'red';
  // ctx.lineWidth = '5';
  // ctx.strokeRect(350, 350, 200, 200);

  //todo creating lines
  // ctx.strokeStyle = 'black';
  // ctx.beginPath();
  // ctx.moveTo(300, 300);
  // ctx.lineTo(300, 450);
  // ctx.lineTo(100, 450);
  // ctx.closePath();
  // ctx.stroke();
});
