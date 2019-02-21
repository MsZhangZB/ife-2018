const a_node = document.getElementById('a'),
      b_node = document.getElementById('b'),
      c_node = document.getElementById('c'),
      d_node = document.getElementById('d'),
      e_node = document.getElementById('e'),
      f_node = document.getElementById('f');


function getHash () {
  return window.location.hash.slice(1).split('&');
}

function render () {
  let text_arr = getHash();
  const contABC_node = document.getElementById('contABC'),
        contDEF_node = document.getElementById('contDEF');
  contABC_node.innerHTML = text_arr[0];
  if (text_arr.length > 1) {
    contDEF_node.innerHTML = text_arr[1];
  }
}

function setContABC (ele) {
  let hash = window.location.hash.slice(1).split('&');
  hash[0] = ele.innerText
  window.location.hash = hash.join('&');
}
function setContDEF (ele) {
  let hash = window.location.hash.slice(1).split('&');
  hash[1] = ele.innerText
  window.location.hash = hash.join('&');
}

a_node.onclick = function() {
  setContABC(this)
}
b_node.onclick = function() {
  setContABC(this)
}
c_node.onclick = function() {
  setContABC(this)
}

d_node.onclick = function() {
  setContDEF(this)
}
e_node.onclick = function() {
  setContDEF(this)
}
f_node.onclick = function() {
  setContDEF(this)
}

window.onhashchange = render;

render();