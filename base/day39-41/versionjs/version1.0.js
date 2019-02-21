const a_node = document.getElementById('a'),
      b_node = document.getElementById('b'),
      c_node = document.getElementById('c');


function getHash () {
  return window.location.hash.slice(1);
}

function render () {
  let text = getHash();
  const cont_node = document.getElementById('cont');
  cont_node.innerHTML = text;
}
function setCont (ele) {
  window.location.hash = ele.innerText;
}
a_node.onclick = function() {
  setCont(this);
}
b_node.onclick = function() {
  setCont(this);
}
c_node.onclick = function() {
  setCont(this);
}


window.onhashchange = render;

render();