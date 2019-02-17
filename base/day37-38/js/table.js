/**
 * [/渲染新的表格]
 * @return data [渲染时候对应的数据]
 */
function updateTable () {
  let states = true,
      table = {},
      tr = {},
      product = {},
      region = {},
      month = {},
      item = {},
      sale_len = 0,
      data = getData(),
      data_len = data.length,
      input = {},
      is_edit = true; //用来记录是否在编辑的状态值
  let regionlen = regionWrapper.querySelectorAll('input[checkbox-type=sub]:checked').length;
  let productlen = productWrapper.querySelectorAll('input[checkbox-type=sub]:checked').length;
  let product_before = productlen === 1 && regionlen > productlen;
  let region_before = regionlen === 1 && productlen > regionlen;
  tableWrapper.innerHTML = ''; //每次渲染之前先重置表格
  //渲染表头
  table = document.createElement('table');
  table.cellSpacing = '0';
  tr = document.createElement('tr');
  product = document.createElement('th');
  product.innerText = '商品';
  region = document.createElement('th');
  region.innerText = '地区';
  /*
  if：
    商品选择一个,地区作为第二列;
    地区选择一个,商品作为第二列;
  else：
    商品作为第一列, 地区作为第二列;
  */
  if (product_before || region_before) {
    if (product_before) {
      tr.appendChild(product);
      tr.appendChild(region);
    } 
    if (region_before) {
      tr.appendChild(region);
      tr.appendChild(product);
    } 
  } else {
    tr.appendChild(product);
    tr.appendChild(region);
  }
  for (var i = 1; i <= 12; i++) {
    month = document.createElement('th');
    month.innerText = i + '月';
    tr.appendChild(month);
  } 
  table.appendChild(tr);
  //渲染表格主题内容
  for (var i = 0; i < data_len; i++) {
    item = document.createElement('tr');
    item.setAttribute('region', data[i].region);
    item.setAttribute('product', data[i].product);
    regionTd = document.createElement('td');
    regionTd.innerText = data[i].region;
    productTd = document.createElement('td');
    productTd.innerText = data[i].product;
    /*
    if：
      商品选择一个,地区作为第二列,并且合并商品列;
      地区选择一个,商品作为第二列,并且合并地区列;
    else：
      商品作为第一列, 地区作为第二列,并且合并商品列;
    */
    if(product_before > productlen || region_before){
      //商品选择一个
      if (product_before) {
        productTd.setAttribute('rowspan', regionlen); 
        if (states) {
          states = false;
          item.appendChild(productTd);
        }
        item.appendChild(regionTd);
      } 
      // 地区选择一个
      if (region_before) { 
        regionTd.setAttribute('rowspan', productlen);
        if (states) {
          states = false;
          item.appendChild(regionTd);
        }
        item.appendChild(productTd);
      } 
    } else {
      // 商品作为第一列, 地区作为第二列,并且合并商品列;
      productTd.setAttribute('rowspan', regionlen); 
      if (states) {
        states = false;
        item.appendChild(productTd);
      }
      //这一行是关键
      if (i % regionlen == 0) {
        item.appendChild(productTd);
      }
      item.appendChild(regionTd);
    }
    sale_len = data[i]['sale'].length
    //渲染每月对应的数据到表格中
    for (var j = 0; j < sale_len; j++) {
      sales = document.createElement('td');
      input = document.createElement('input');
      span = document.createElement('span');
      edit = document.createElement('span');
      confirm_btn = document.createElement('button');
      cancle_btn = document.createElement('button');
      sales.setAttribute('index', j);
      input.type = 'text';
      edit.innerText = '编辑';
      edit.className = 'edit';
      confirm_btn.innerText = '确认';
      cancle_btn.innerText = '取消';
      confirm_btn.style.display = 'none';
      cancle_btn.style.display = 'none';
      input.style.display = 'none';
      input.setAttribute('prevval', data[i]['sale'][j]);
      input.value = data[i]['sale'][j];
      input.onblur = function () {
        var val = this.getAttribute('prevval');
        //是否输入正确数字
        if (isNaN(this.value) || this.value < 0 || this.value === '' || this.value.indexOf('.') !== -1) {
          alert('请输入正确的数字');
          this.value = val;
        }  
        populateStorage(data,  this);
      } 
      confirm_btn.onclick = function (event) {
        let e = event || window.event;
        let target = e.target || e.srcElement;
        confirm(target);
        is_edit = true;
      }
      cancle_btn.onclick = function (event) {
        let e = event || window.event;
        let target = e.target || e.srcElement;
        cancle(target);
        is_edit = true;
      }
      edit.onclick = function (event) {
        if (is_edit) {
          let e = event || window.event;
          let target = e.target || e.srcElement;
          let input = target.parentNode.querySelector('input[type=text]');
          let span = target.parentNode.querySelector('span');
          let btn = target.parentNode.querySelectorAll('button');
          span.style.display = 'none';
          input.style.display = 'inline';
          input.focus();
          btn[0].style.display = 'inline';
          btn[1].style.display = 'inline';
          input.value = input.getAttribute('prevval');
          is_edit = !is_edit;
        }  
      }
      input.onkeydown = function(event) {
        let e = event || window.event;
        let target = e.target || e.srcElement;
        let code = e.keyCode;
        if (code === 13) {
          confirm(target);
          is_edit = true;
        }
        if (code === 27) {
          cancle(target);
          is_edit = true;
        }
      }
      span.innerText = input.value;
      sales.appendChild(input); 
      sales.appendChild(span); 
      sales.appendChild(edit); 
      sales.appendChild(confirm_btn); 
      sales.appendChild(cancle_btn); 
      item.appendChild(sales);
    }
    table.appendChild(item);
  } 
  tableWrapper.appendChild(table);
  return data;
}

/**
 * 确认输入
 * @param {element} ele [当前的所处理的元素对象]
 */
function confirm(ele) {
  let input = ele.parentNode.querySelector('input[type=text]');
  let span = ele.parentNode.querySelector('span');
  let btn = ele.parentNode.querySelectorAll('button');
  btn[0].style.display = 'none';
  btn[1].style.display = 'none';
  input.style.display = 'none';
  span.style.display = 'block';
  input.setAttribute('prevval', input.value);
  span.innerText = input.value;
}
/**
 * 取消输入
 * @param {element} ele [当前的所处理的元素对象]
 */
function cancle(ele) {
  let input = ele.parentNode.querySelector('input[type=text]');
  let span = ele.parentNode.querySelector('span');
  let btn = ele.parentNode.querySelectorAll('button');
  btn[0].style.display = 'none';
  btn[1].style.display = 'none';
  input.style.display = 'none';
  span.style.display = 'block';
  span.innerText = input.getAttribute('prevval');
}