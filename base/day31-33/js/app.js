var regionWrapper = document.getElementById('region-radio-wrapper'),//地区外层
    productWrapper = document.getElementById('product-radio-wrapper'),//产品外层
    tableWrapper = document.getElementById('table-wrapper');//表格外层
window.onload = function () {
  updateTable();//页面加载根据默认选择调用一次渲染表格函数
} 
//初始区域
generateCheckBox(regionWrapper, [{
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

