let hash = {
  'url': decodeURI(window.location.href),
  'indexhash': -1,
  'region': '华东',
  'product': '手机',
  'region_select': null,
  'product_select': null,
  'select_all': null,
  'public_url': '',
  'setHash': function () {
    this.indexHash = this.url.indexOf('#');
    this.region = '';
    this.product = '';
    this.indexHash = this.url.indexOf('#');
    this.region_select = document.querySelectorAll('#region-radio-wrapper input[checkbox-type=sub]');
    this.product_select = document.querySelectorAll('#product-radio-wrapper input[checkbox-type=sub]');
    this.public_url = this.url.slice(0, this.indexHash);
    for (let i = 0; i < this.region_select.length; i++) {
      if (this.region_select[i].checked === true) {
        this.region += this.region_select[i].getAttribute('data-text') + '&&';
      }
    }
    for (let j = 0; j < this.product_select.length; j++) {
      if (this.product_select[j].checked === true) {
        this.product += this.product_select[j].getAttribute('data-text') + '&&';
      }
    }
    history.pushState('', null, this.public_url  + '#' +  this.region.slice(0, -2) + '||' + this.product.slice(0, -2));
  },
  'getHash': function () {
    this.indexHash = this.url.indexOf('#');
    this.public_url = this.url.slice(0, this.indexHash);
    if(this.indexHash === -1) {
      history.replaceState('', null, this.public_url + '#' +  region + '||' + product);
    } 
    this.region_select = document.querySelectorAll('#region-radio-wrapper input[checkbox-type=sub]');
    this.product_select = document.querySelectorAll('#product-radio-wrapper input[checkbox-type=sub]');
    this.select_all = document.querySelectorAll('input[checkbox-type=all]');
    
    let hash = decodeURI(window.location.hash).slice(1).split('||');
    let regions = hash[0].split('&&');
    let products = hash[1].split('&&');
    let regions_len = regions.length;
    let products_len = products.length;
    if (regions_len === 3) {
      this.select_all[0].checked = true;
    }
    if (products_len === 3) {
      this.select_all[1].checked = true;
    }
    for (let i = 0; i < this.region_select.length; i++) {
      let region = this.region_select[i].getAttribute('data-text');
      let product = this.product_select[i].getAttribute('data-text');
      if (regions.indexOf(region) !== -1 ) {
        this.region_select[i].checked = true;
      } else {
        this.region_select[i].checked = false;
      }
      if (products.indexOf(product) !== -1) {
       this.product_select[i].checked = true;
      } else {
        this.product_select[i].checked = false;
      }
    }
  }
}