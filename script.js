//Функції
let getId = id => document.getElementById(id);
let form = n => document.forms[n];
let show = q => q.removeAttribute('hidden', 'hidden');
let hide = r => r.setAttribute('hidden', 'hidden');

//Масиви даних
let txtAlignButton = ['left', 'center', 'right'];
let fontFamilyStyles = ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana']
let colorsPalette = ['mediumaquamarine', 'darkcyan', 'lightgreen', 'green', 'skyblue', 'blue', 'darkviolet', 'purple', 'darkslateblue', 'darkblue', 'gold', 'orange', 'coral', 'chocolate', 'orangered', 'firebrick', 'white', 'lightgrey', 'darkgrey', 'grey', 'black'];
let imagesArray = ['img/field.jpg', 'img/lake.jpg', 'img/winter.jpg', 'img/sea.jpg', 'img/wolf.jpg', 'img/newYork.jpg', 'img/city.jpg', 'img/oazis.jpg', 'img/eagle.jpg'];

//Змінні
let addTable = document.forms['addTableForm'];
let addOrList = document.forms['addOrListForm'];
let addUlList = document.forms['addUnListForm'];
let txtAlign = getId('txtAlignGroup').querySelectorAll('button');
let menuBtns = getId('styleMenu').querySelectorAll('button');
let imgTypes = getId('img-wraper').querySelectorAll('a');
let fontPicker = getId('FontFamily').nextElementSibling.querySelectorAll('a')
let fontSizePicker = getId('txtSize').nextElementSibling.querySelectorAll('a');
let inputValue = addTable.querySelectorAll('input');
let inputOrList = addOrList.elements;
let inputUlList = addUlList.elements;
let resetOrList = addOrList.resetOrList;
let resetUlList = addUlList.resetUnList;
let table;

//Функція для створення таблиць
function createTable(rows, cells) {
	table = document.createElement('table');
	for (let i = 0; i < rows; i++) {
		let tr = document.createElement('tr')
		table.appendChild(tr)
		for (let i = 0; i < cells; i++) {
			let td = document.createElement('td')
			tr.appendChild(td)
		}
	}
}

//Функція для створення списків.
function createList(listType, countItems, styleItems) {
	let listWraper = document.createElement('div');
	let element = document.createElement(listType);
	let countLi = countItems.value;
	let styleLi = styleItems.value;
	let liElement;
	listWraper.appendChild(element);
	for (let i = 1; i <= countLi; i++) {
		liElement = document.createElement('li');
		element.appendChild(liElement);
		liElement.style.listStyleType = styleLi;
		liElement.innerHTML = `item ${i}`;
	}
	getId('txt').value += listWraper.innerHTML;
}

//Функція-reset очищення значень форми.
function reset(btn, input) {
	btn.addEventListener('click', function () {
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	})
}

//Додавання елементів до основного блоку.
getId('addCode').addEventListener('click', () => {
	hide(getId('f1'));
	hide(getId('styleMenu'));
	show(getId('addMenu'));
	show(getId('txt'));
	getId('txt').value = getId('f1').innerHTML
})

//Стилізація тексту основного блоку.
getId('bold').addEventListener('click', () => getId('f1').classList.toggle('fontBold'));
getId('italic').addEventListener('click', () =>
	getId('f1').classList.toggle('fontItalic'));
getId('underline').addEventListener('click', () => getId('f1').classList.toggle('txtUnderline'));
getId('strike').addEventListener('click', () =>
	getId('f1').classList.toggle('txtStrike'));

//Вирівнювання тексту.
for (let i = 0; i < txtAlign.length; i++) {
	txtAlign[i].addEventListener('click', () => getId('f1').style.textAlign = txtAlignButton[i])
}
for (let i = 0; i < fontPicker.length; i++) {
	fontPicker[i].style.fontFamily = fontFamilyStyles[i];
	fontPicker[i].addEventListener('click', () => getId('f1').style.fontFamily = fontFamilyStyles[i])
}
for (let i = 0; i < fontSizePicker.length; i++) {
	fontSizePicker[i].addEventListener('click', () => getId('f1').style.fontSize = fontSizePicker[i].innerHTML)
}

//Стилізація кольору тексту і фону.
function colorTxtPalet() {
	createTable(3, 7);
	getId('table-wraper').appendChild(table);
	table.classList.add('align-colors', 'position-absolute');
	for (let i = 0; i < colorsPalette.length; i++) {
		colorPicker = table.querySelectorAll('td');
		colorPicker[i].style.background = colorsPalette[i];
		colorPicker[i].classList.add('customCells')
		colorPicker[i].addEventListener('click', () => getId('f1').style.color = colorPicker[i].style.background)
	}
}
colorTxtPalet();

function bgColorPalet() {
	createTable(3, 7);
	getId('home').appendChild(table);
	table.classList.add('align-colors');
	for (let i = 0; i < colorsPalette.length; i++) {
		let colorPicker = table.querySelectorAll('td');
		colorPicker[i].style.background = colorsPalette[i];
		colorPicker[i].classList.add('customCells')
		colorPicker[i].addEventListener('click', () => getId('f1').style.background = colorPicker[i].style.background)
	}
}
bgColorPalet();

function bgImagePalet() {
	createTable(3, 3);
	getId('profile').appendChild(table);
	table.classList.add('align-colors');
	for (let i = 0; i < imagesArray.length; i++) {
		let imagePicker = table.querySelectorAll('td');
		imagePicker[i].style.background = `url(${imagesArray[i]})`;
		imagePicker[i].classList.add('customCells');
		imagePicker[i].style.backgroundRepeat = 'no-repeat';
		imagePicker[i].style.backgroundSize = 'cover';
		imagePicker[i].addEventListener('click', () => getId('f1').style.background = imagePicker[i].style.background)
	}
}
bgImagePalet();

getId('loader').addEventListener('change', () => {
	getId('f1').style.background = `url(${URL.createObjectURL(event.target.files[0])})`
	getId('f1').style.backgroundSize = 'cover';
})

//Код для форми реєстрації.
function getFocus() {
	show(getId('signForm'));
	document.getElementById('signForm').focus();
	document.body.style.backgroundColor = 'rgba(0,0,0,0.5)';
	for (let i = 0; i < menuBtns.length; i++)
		getId('styleMenu').menuBtns[i].disabled = true;
}

function unlock() {
	hide(getId('signForm'));
	document.getElementById('signForm').onblur;
	document.body.style.backgroundColor = 'rgba(0,0,0,0)';
	for (let i = 0; i < getId('styleMenu').getElementsByTagName('button').length; i++)
		getId('styleMenu').getElementsByTagName('button')[i].disabled = false;
	getId('signForm').reset();
}

getId('lockBtn').addEventListener('click', () => getFocus());
getId('signForm').button.addEventListener('click', () => (getId('signForm').login.value == 'admin' && getId('signForm').password.value == 'admin') ? unlock() : null);

//Вихід з форми при кліку поза її межами.
window.addEventListener('click', (event) =>
	(event.target.matches('#colorBtn, #colorBtn *, #table-wraper, #table-wraper *')) ? show(getId('table-wraper')) : hide(getId('table-wraper')))
window.addEventListener('click', (event) =>
	(event.target.matches('#imageBtn, #imageBtn *, #img-wraper, #img-wraper *')) ? show(getId('img-wraper')) : hide(getId('img-wraper')))
window.addEventListener('click', (event) =>
	(event.target.matches('#addTable, #addTable *, form[name=addTableForm], form[name=addTableForm] *')) ? show(addTable) : hide(addTable))
window.addEventListener('click', (event) =>
	(event.target.matches('#olList, #olList *, form[name=addOrListForm], form[name=addOrListForm] *')) ? show(addOrList) : hide(addOrList))
window.addEventListener('click', (event) =>
	(event.target.matches('#ulList, #ulList *, form[name=addUnListForm], form[name=addUnListForm] *')) ? show(addUlList) : hide(addUlList))

//Перехід з форми редагування коду до основного блоку.
getId('save').addEventListener('click', () => {
	show(getId('f1'));
	show(getId('styleMenu'));
	hide(getId('addMenu'));
	hide(getId('txt'));
	getId('f1').innerHTML = getId('txt').value
})

//Форма-редактор створення таблиці користувачем.
getId('addTable').addEventListener('click', () => show(addTable));

function addNewTable() {
	let td;
	let tr;
    let newTable = document.createElement('table')
	let countRow = getId('countTR').value;
	let countCell = getId('countTD').value;
	let widthTd = getId('widthTD').value;
	let heightTd = getId('heightTD').value;
	let borderWidth = getId('borderWidth').value;
	let borderType = getId('borderStyle').value;
	let borderColor = getId('borderColor').value;
	let tableWraper = document.createElement('div');
	tableWraper.appendChild(newTable);
	newTable.style.borderCollapse = 'collapse';
	for (let i = 0; i < countRow; i++) {
		tr = document.createElement('tr')
		newTable.appendChild(tr)
		for (let i = 0; i < countCell; i++) {
			td = document.createElement('td');
			tr.appendChild(td)
			td.style.width = `${widthTd}px`;
			td.style.height = `${heightTd}px`;
			td.style.borderWidth = `${borderWidth}px`;
			td.style.borderStyle = borderType;
			td.style.borderColor = borderColor;
			td.style.textAlign = 'center';
			td.innerHTML = 'td';
		}
	}
	getId('txt').value += tableWraper.innerHTML;
	hide(addTable);
}
getId('createTable').addEventListener('click', () => addNewTable())

//Форма-редактор створення нумерованого списку.
getId('olList').addEventListener('click', () => show(addOrList));
addOrList.createOrList.addEventListener('click', function () {
	createList('ol', getId('countOrLi'), getId('markStyle'))
})

//Форма-редактор створення ненумерованого списку.
getId('ulList').addEventListener('click', () => show(addUlList));
addUlList.createUnList.addEventListener('click', function () {
	createList('ul', getId('countUnLi'), getId('markStyle2'))
})

//Очищення полів форм.
reset(getId('reset'), inputValue);
reset(resetOrList, inputOrList);
reset(resetUlList, inputUlList);
