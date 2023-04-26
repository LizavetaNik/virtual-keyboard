let lang = 'en';

if( localStorage.getItem('lang') ){
  lang = localStorage.getItem('lang');
}

const arrButton = [];
const startLine1 = 0;
const startLine2 = 14;
const startLine3 = 29;
const startLine4 = 42;
const startLine5 = 55;
const startLine6 = 64;

let clickCtrl = false;
let clickAlt = false;

function createArrButton(){
  //line1 - [0, 13]
  arrButton.push(createButton('`', '~', 'button_style'));
  arrButton.push(createButton('1', '!', 'button_style'));
  arrButton.push(createButton('2', '@', 'button_style'));
  arrButton.push(createButton('3', '#', 'button_style'));
  arrButton.push(createButton('4', '$', 'button_style'));
  arrButton.push(createButton('5', '%', 'button_style'));
  arrButton.push(createButton('6', '^', 'button_style'));
  arrButton.push(createButton('7', '&', 'button_style'));
  arrButton.push(createButton('8', '*', 'button_style'));
  arrButton.push(createButton('9', '(', 'button_style'));
  arrButton.push(createButton('0', ')', 'button_style'));
  arrButton.push(createButton('-', '_', 'button_style'));
  arrButton.push(createButton('=', '+', 'button_style'));
  arrButton.push(createButton('Backspace', 'Backspace', 'button_style_func'));

  //line2 - [14, 28]
  arrButton.push(createButton('Tab', 'Tab', 'button_style_func'));
  arrButton.push(createButton('Q', '\u0419'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('W', '\u0446'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('E', '\u0423'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('R', '\u041A'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('T', '\u0415'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('Y', '\u041D'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('U', '\u0413'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('I', '\u0428'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('O', '\u0429'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('P', '\u0417'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('[', '\u0425'.toUpperCase(), 'button_style'));
  arrButton.push(createButton(']', '\u042A'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('\\', ' / ', 'button_style'));
  arrButton.push(createButton('DEL', 'DEL', 'button_style_func'));

  //line3 - [29, 41]
  arrButton.push(createButton('Caps Lock', 'Caps Lock', 'button_style_func'));
  arrButton.push(createButton('A', '\u0424'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('S', '\u042B'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('D', '\u0432'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('F', '\u0430'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('G', '\u043F'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('H', '\u0440'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('J', '\u043E'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('K', '\u043B'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('L', '\u0434'.toUpperCase(), 'button_style'));
  arrButton.push(createButton(';', '\u0436'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('\u0027', '\u044D'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('Enter', 'Enter', 'button_style_func'));

  //line4 - [42, 54]
  arrButton.push(createButton('Shift', 'Shift', 'button_style_func'));
  arrButton.push(createButton('Z', '\u044F'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('X', '\u0447'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('C', '\u0441'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('V', '\u043C'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('B', '\u0438'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('N', '\u0442'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('M', '\u044C'.toUpperCase(), 'button_style'));
  arrButton.push(createButton('.', '.', 'button_style'));
  arrButton.push(createButton(',', ',', 'button_style'));
  arrButton.push(createButton('/', '/', 'button_style'));
  arrButton.push(createButton('\u2191', '\u2191', 'button_style'));
  arrButton.push(createButton('Shift', 'Shift', 'button_style_func'));

  //line5 - [55, 63]
  arrButton.push(createButton('Ctrl', 'Ctrl', 'button_style'));
  arrButton.push(createButton('Win', 'Win', 'button_style'));
  arrButton.push(createButton('Alt', 'Alt', 'button_style'));
  arrButton.push(createButton('--', '--', 'button_style_space'));
  arrButton.push(createButton('Alt', 'Alt', 'button_style'));
  arrButton.push(createButton('Ctrl', 'Ctrl', 'button_style'));
  arrButton.push(createButton('\u2190', '\u2190', 'button_style')); // влево
  arrButton.push(createButton('\u2193', '\u2193', 'button_style')); //вниз
  arrButton.push(createButton('\u2192', '\u2192', 'button_style')); //вправо
}
// Создаем функцию для создания кнопки
function createButton(engName, ruName, className) {
  const button = document.createElement('button');
  button.classList.add(className);
  
  if( lang === 'en' ){
    button.innerHTML = ruName;
    button.title = engName;
  }else{
    button.innerHTML = engName;
    button.title = ruName;
  }

  button.id = engName.toLowerCase(); 

  button.addEventListener('click', () => {
    console.log(`Click button ${engName}`);
    if( engName === 'Backspace'){
      //todo func
      return;
    }
    if( engName === 'Tab'){
      //todo func
      return;
    }
    if( engName === 'DEL'){
      //todo func
      return;
    }
    if( engName === 'Caps Lock'){
      //todo func
      return;
    }
    if( engName === 'Enter'){
      //todo func
      return;
    }
    if( engName === 'Shift'){
      //todo func
      return;
    }
    if( engName === 'Ctrl'){
      //todo func
      clickCtrl = true;
      return;
    }
    if( engName === 'Win'){
      //todo func
      return;
    }
    if( engName === 'Alt'){
      //todo func
      clickAlt = true;
      return;
    }

    if( engName === '\u2191'){ // стрелка вверх
      //todo func
      return;
    }
    if( engName === '\u2190'){ // стрелка влево
      //todo func
      return;
    }
    if( engName === '\u2193'){ // стрелка вниз
      //todo func
      return;
    }
    if( engName === '\u2192'){ // стрелка вправо
      //todo func
      return;
    }
   
    if( engLang ){
      inputField.value = inputField.value + engName.toLowerCase();
    } else{
      if( engName === '.' || engName === ',' || engName === '/' || engName === '\u2191'){
        inputField.value = inputField.value + engName.toLowerCase();
      }else{
        inputField.value = inputField.value + ruName.toLowerCase();
      } 
    }
  });

  return button;
}

function changeEngNameButton(){
  for( let i = 0; i < arrButton.length; i++){
    let tmp = arrButton[i].innerHTML;
    arrButton[i].innerHTML = arrButton[i].title;
    arrButton[i].title = tmp;  
  }
}

function createLine(start, nextStart){
  const keyboardLine = document.createElement('div');
  keyboardLine.classList.add('keyboard');

  for( let i = start; i < nextStart; i++){
    keyboardLine.appendChild(arrButton[i]);
  }
  document.body.appendChild(keyboardLine);
}

document.body.classList.add("wrapper");

// Создаем новый элемент h3
var newHeading = document.createElement("h3");
var textNode = document.createTextNode("Operating systems: Windows. Use left Ctrl + Alt to switch language.");
newHeading.appendChild(textNode);
document.body.appendChild(newHeading);

// Создаем элемент поля ввода текста
const inputField = document.createElement('textarea');
inputField.type = 'text';
inputField.id = 'output-field';

// Добавляем поле ввода на страницу
document.body.appendChild(inputField);

// Создаем клавиатуру
createArrButton();

createLine(startLine1, startLine2);
createLine(startLine2, startLine3);
createLine(startLine3, startLine4);
createLine(startLine4, startLine5);
createLine(startLine5, startLine6);

changeEngNameButton();

// Добавляем эффект нажатие на кнопку на физической клавиатуре подсвечивает кнопку на виртуальной 2) - добавить кнопку в физ.клав.
function checKeyPressed(keyPressed) {
  if( keyPressed === 'control'){
    return 'ctrl';
  }

  if( keyPressed === 'delete'){
    return 'del';
  }

  if( keyPressed === 'capslock'){
    return 'caps lock';
  }

  return keyPressed;
}

document.addEventListener('keydown', (event) => {
  let keyPressed = event.key.toLowerCase();
  keyPressed = checKeyPressed(keyPressed);

  const buttonLine = arrButton.find( item => item.id == keyPressed );
  if( buttonLine ){
    buttonLine.classList.add('highlighted');
    buttonLine.click();
  }

  if (clickAlt && clickCtrl ){
    if( lang === 'en'){
      lang = 'ru'; 
    } else {
      lang = 'en';
    }
    localStorage.setItem('lang', lang);
    changeEngNameButton();
  }

});

document.addEventListener('keyup', (event) => {
  let keyPressed = event.key.toLowerCase();
  keyPressed = checKeyPressed(keyPressed);

  const buttonLine = arrButton.find( item => item.id == keyPressed );
  if( buttonLine ){
    buttonLine.classList.remove('highlighted');
  }

  if (clickAlt){
    clickAlt = false;
  }

  if (clickCtrl){
    clickCtrl = false;
  }

});