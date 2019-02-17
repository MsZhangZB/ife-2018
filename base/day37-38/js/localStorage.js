/**
 * [设置localStorage]
 * @param {object} data [sourceData的副本] 
 * @param {element} ele [修改数据对应的input]]
 * @return data [返回sourceData的副本]
 */
function populateStorage(data, ele) {
  //如果localStorage存在 则写入localStorage中去
  var temp = localStorage.getItem('newdata'), 
      len = 0, 
      o = {}, 
      str = {},
      td = ele.parentNode,  
      tr = ele.parentNode.parentNode,
      curRegion = tr.getAttribute('region'), 
      curProduct = tr.getAttribute('product'), 
      index = td.getAttribute('index'),  
      newdata = ele.value * 1;   
      
  if (!temp) {
    str = JSON.stringify(data);
    localStorage.setItem('newdata', str);
  }
  temp = localStorage.getItem('newdata');
  o = JSON.parse(temp);
  len = o.length;
  
  //修改当前改变值
  for (var i = 0; i < len; i++) {
    if (o[i].region == curRegion && o[i].product == curProduct) {
      o[i].sale[index] = newdata;
    }
  }
  str = JSON.stringify(o);
  localStorage.setItem('newdata', str);
  return data;
}