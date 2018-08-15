/*variable declared*/
var customName = document.getElementById('customname'),
		randomize = document.querySelector('.randomize'),
		story = document.querySelector('.story'),
		storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.',
		insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'],
		insertY = ['the soup kitchen', 'Disneyland', 'the White House'],
		insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
console.log(storyText)
/*return randomNumber*/
function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}
/*add click event to button*/
randomize.addEventListener('click', result);
function result() {
	var newStory = storyText,//in order to each click newStory is initial
			xItem = randomValueFromArray(insertX),
			yItem = randomValueFromArray(insertY),
			zItem = randomValueFromArray(insertZ);
	newStory = newStory.replace(/:insertx:/g, xItem);
	newStory = newStory.replace(/:inserty:/, yItem);
	newStory = newStory.replace(/:insertz:/, zItem);
/*myself method*/
	// var arr = newStory.split(':');
	// arr[1] = xItem;
	// arr[3] = yItem;
	// arr[5] = zItem;
	// arr[7] = xItem;
	// storyText = arr.join(':');	
	// newStory = storyText.split(':').join('');

	//Bob change to user enter custoname 
  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob',name);
  }
  //change show method
  if(document.getElementById("uk").checked) {
  	var weight = Math.round(300 * 0.07142857142857142) + ' stone';
  	var temperature =  Math.round((94 - 32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 farenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
/*myself method*/
    // var weight = Math.round(300);
    // var temperature =  Math.round(94);
    // newStory = newStory.replace(weight,21);
    // newStory = newStory.replace(/farenheit/,'centigrade');
    // newStory = newStory.replace(temperature,34);
    // newStory = newStory.replace(/pounds/,'stone');
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}