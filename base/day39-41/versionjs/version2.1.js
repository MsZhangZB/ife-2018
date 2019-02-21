const a_node = document.getElementById('a'),
      b_node = document.getElementById('b'),
      c_node = document.getElementById('c'),
      d_node = document.getElementById('d'),
      e_node = document.getElementById('e'),
      f_node = document.getElementById('f');

let url = location.href;
let index = url.indexOf('#');
let publicUrl = '';
if (index === -1) {
  history.replaceState(null, null, url + '#A&B');
}
url = location.href;
index = url.indexOf('#');
publicUrl = url.slice(0, index) + '#';

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
render();

function setContABC (ele) {
  let hash = window.location.hash.slice(1).split('&');
  hash[0] = ele.innerText
  history.pushState('', null, publicUrl + hash.join('&'));    
}
function setContDEF (ele) {
  let hash = window.location.hash.slice(1).split('&');
  hash[1] = ele.innerText
  history.pushState('', null, publicUrl + hash.join('&')); 
}

a_node.onclick = function() {
  setContABC(this);
  render();
}
b_node.onclick = function() {
  setContABC(this);
  render();
}
c_node.onclick = function() {
  setContABC(this);
  render();
}

d_node.onclick = function() {
  setContDEF(this);
  render();
}
e_node.onclick = function() {
  setContDEF(this);
  render();
}
f_node.onclick = function() {
  setContDEF(this);
  render();
}
