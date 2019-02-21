const a_node = document.getElementById('a'),
      b_node = document.getElementById('b'),
      c_node = document.getElementById('c');
function getHash () {
  return window.location.hash.slice(1);
}
let url = location.href;
let index = url.indexOf('#');
let publicUrl = '';
if (index === -1) {
  history.replaceState(null, null, url + '#A');
}
url = location.href;
index = url.indexOf('#');
publicUrl = url.slice(0, index) + '#';

a_node.onclick = function() {
  history.pushState('', null, publicUrl + this.innerText);
  render();
}
b_node.onclick = function() {
  history.pushState('', null, publicUrl + this.innerText);
  render();
}
c_node.onclick = function() {
  history.pushState('', null, publicUrl + this.innerText);
  render();
}

function render () {
  const text = getHash();
  const cont_node = document.getElementById('cont');
  cont_node.innerHTML = text;
}
render();