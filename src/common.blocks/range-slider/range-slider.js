const rangeSlider = document.getElementById('range-slider');
const valueDonat = document.querySelector('.calculator__donat');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [100],
    connect: 'lower',
    step: 1,
    range: {
      min: [0],
      max: [1000],
    },
  });
}
rangeSlider.noUiSlider.on('update', (values) => {
  valueDonat.innerHTML = `${Math.round(values)} ₽`;
});
