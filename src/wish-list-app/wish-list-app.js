function getWishes() {
	var wishes = new Array;
	var wishesStr = localStorage.getItem('wishes');
	if (wishesStr !== null) {
		wishes = JSON.parse(wishesStr);
	}
	return wishes;
}

function add() {
	var wish = document.getElementById('wish').value;

	var wishes = getWishes();
	wishes.push(wish);
	localStorage.setItem('wishes', JSON.stringify(wishes));

	show();

	return false;
}

function remove() {
	var id = this.getAttribute('id');
	var wishes = getWishes();
	wishes.splice(id, 1);
	localStorage.setItem('wishes', JSON.stringify(wishes));

	show();

	return false;
}

function show() {
	var wishes = getWishes();

	var html = '<ul>';
	for(var i=0; i<wishes.length; i++) {
		html += '<li>' + wishes[i] + '<button class="remove" id="' + i  + '">x</button></li>';
	};
	html += '</ul>';

	document.getElementById('wishes').innerHTML = html;

	var buttons = document.getElementsByClassName('remove');
	for (var i=0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', remove);
	};
}

document.getElementById('add').addEventListener('click', add);
show();
