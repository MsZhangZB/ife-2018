const regionWrapper = document.getElementById('region-radio-wrapper'),//地区外层
      productWrapper = document.getElementById('product-radio-wrapper'),//产品外层
      tableWrapper = document.getElementById('table-wrapper'),//表格外层
      save = document.getElementById('save'), //保存数据按钮
      clear = document.getElementById('clear'); //清空数据按钮
//页面加载根据默认选择调用一次渲染表格函数   
window.onload = function () { 
  let data = updateTable();
  lineChart.setDate(data);
  lineChart.drawChart();
  barChart.setDate(data);
  barChart.drawChart();
} 
//初始区域
var one = generateCheckBox(regionWrapper, [{
  value: 1,
  text: "华东"
}, {
  value: 2,
  text: "华北"
}, {
  value: 3,
  text: "华南"
}]);
//初始化产品
generateCheckBox(productWrapper, [{
  value: 1,
  text: "手机"
}, {
  value: 2,
  text: "笔记本"
}, {
  value: 2,
  text: "智能音箱"
}]);  

//鼠标hover 根据鼠标当前行的数据作 折线图
tableWrapper.onmouseover = function (event) {
  let e = event || window.event,
      target = e.target || e.srcElement,
      tr = null,
      region = '',
      product = '',
      data = [],
      newdata = {};
  if (localStorage.getItem('newdata')) {
    newdata = JSON.parse(localStorage.getItem('newdata'));
  } else {
    newdata = sourceData;
  }
  if (target.nodeName === 'TD' || target.nodeName === 'INPUT') {
    if (target.nodeName === 'INPUT') {
      tr = target.parentNode.parentNode;
    } else {
      tr = target.parentNode;
    }
    region = tr.getAttribute('region');
    product = tr.getAttribute('product');
    for (var i = 0; i < newdata.length; i++) {
      if (newdata[i].region === region && newdata[i].product === product) {
        data[0] = newdata[i];
        break;
      }
    }
    lineChart.setDate(data);
    lineChart.drawChart();
    barChart.setDate(data);
    barChart.drawChart();
  }
}
//鼠标离开table 根据表单选择数据作 折线图
tableWrapper.onmouseout = function (event) {
  let data = getData();
  lineChart.setDate(data);
  lineChart.drawChart();
  barChart.setDate(data);
  barChart.drawChart();
}

clear.onclick = function () {
  localStorage.clear();
};
//获取hash的值来设置checkbox的状态
hash.getHash();



