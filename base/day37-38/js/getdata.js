/**
 * [根据表单选项获取数据]
 * @return list [返回符合表单的数据]
 */
function getData () {
  var list = [],//存储要返回的数据
      len = 0,
      region = '',
      product = '',
      data = {};
  if (localStorage.getItem('newdata')) {
    data = JSON.parse(localStorage.getItem('newdata'));
  } else {
    data = sourceData;
  }
  len = data.length;
  var regions = regionWrapper.querySelectorAll('input[checkbox-type=sub]:checked');
  var products = productWrapper.querySelectorAll('input[checkbox-type=sub]:checked');
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < regions.length; j++) {
      for (var k = 0; k < products.length; k++) {
        region = regions[j].getAttribute('data-text');//获取地区复选框中 对应的名字
        product = products[k].getAttribute('data-text');//获取产品复选框中 对应的名字
        if (data[i].region === region && data[i].product === product) {
          list.push(data[i]); //满足的数据push进list
        }
      }
    }
  }
  return list;
}