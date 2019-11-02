
function colorPalettes() {
  const colors = document.querySelectorAll('.color__swatch');

  colors.forEach(function(swatch, i) {
    console.log(swatch);
  });
}

window.addEventListener('DOMContentLoaded', colorPalettes);
