function topRadiusFunciton(value) {
  percentage = (100-value.toString()) + '%';
  document.getElementById('roundCorners').style.webkitBorderTopRightRadius = percentage;
}

function botRadiusFunciton(value) {
  percentage = value.toString() + '%';
  document.getElementById('roundCorners').style.webkitBorderBottomLeftRadius = percentage;
}

function leftRadiusFunciton(value) {
  percentage = (100-value.toString()) + '%';
  document.getElementById('roundCorners').style.webkitBorderTopLeftRadius = percentage;
}

function rightRadiusFunciton(value) {
  percentage = value.toString() + '%';
  document.getElementById('roundCorners').style.webkitBorderBottomRightRadius = percentage;
}