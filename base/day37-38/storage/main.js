var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');

function setStyles() {
  //localStorage.getItem() 从存储中获取一个数据项
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
}

function populateStorage() {
  //localStorage.setItem() 创建新的数据项或者更新已存在的值
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);

  setStyles();
}
//Storage.length  同样可以判断 存储对象是否为空
if (!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}
var bgcolorForm = document.getElementById('bgcolor');
var fontForm = document.getElementById('font');
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;