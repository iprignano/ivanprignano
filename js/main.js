const main = () => {
  const shapes = document.querySelectorAll('.shape');

  setTimeout(() => Array.from(shapes).forEach(shapeEl => shapeEl.classList.add('in-place')), 0);
}

document.onload = main();
