const main = () => {
  const shapes = document.querySelectorAll('.shape');
  const shapeWrappers = document.querySelectorAll('.shapes-wrapper');

  setTimeout(() => {
    Array.from(shapes).forEach(shapeEl => shapeEl.classList.add('in-place'));
    Array.from(shapeWrappers).forEach(shapeWrapEl => shapeWrapEl.classList.add('in-place'));
  }, 0);
}

document.onload = main();
