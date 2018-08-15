var select = document.querySelector('select'),
    html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;
  if(choice === 'white') {
    update(choice, 'black');
  }else if(choice === 'black') {
    update(choice, 'white');
  }else if(choice === 'purple') {
    update(choice, 'white');
  }else if(choice === 'yellow') {
    update(choice, '#ccc');
  }else {
    update('lime', 'purple');
  }
  //you can use switch-case,it's simpler
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
