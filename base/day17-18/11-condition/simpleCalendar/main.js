var select = document.querySelector('select'),
    list = document.querySelector('ul'),
    h1 = document.querySelector('h1'),
    time = new Date();
    year = time.getFullYear();
    month = time.getMonth();
select.onchange = function() {
  var choice = select.value;
  //var day = 31
  //only match：April,June,September,November February.Reduce the number of matches
  switch(choice) {
    case 'January': 
    case 'March':
    case 'May': 
    case 'July':
    case 'August': 
    case 'October': 
    case 'December':days = 31; break;
    case 'April': 
    case 'June': 
    case 'September': 
    case 'November': days = 30; break;
    case 'February':  
          days = ((year % 4 === 0 && year % 400 !== 0) || year % 400 === 0)?29:28; 
          break;
    default: days = 31, choice = 'January';

  }
  createCalendar(days, choice);
}
function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January'); //default
