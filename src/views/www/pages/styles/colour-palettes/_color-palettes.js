function colorPalettes() {
  const colors = document.querySelectorAll('.color__swatch');

  // Function to convert rgb to hex
  function rgb2hex(rgb) {
    const newRGB = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
      return `0${parseInt(x).toString(16)}`.slice(-2);
    }
    return `#${hex(newRGB[1])}${hex(newRGB[2])}${hex(newRGB[3])}`;
  }

  colors.forEach(function(swatch) {
    const ele = swatch;
    const rgbColor = getComputedStyle(swatch).backgroundColor;
    const hexColor = rgb2hex(rgbColor);

    ele.nextElementSibling.querySelector('pre code .color-hex').innerText = `color: '${hexColor}'`;
  });
}

window.addEventListener('DOMContentLoaded', colorPalettes);

export default colorPalettes;
