
let EngLang = true; //TODO switch language
const arrButton = [];
const startLine1 = 0;
const startLine2 = 14;
const startLine3 = 29;
const startLine4 = 42;
const startLine5 = 55;
const startLine6 = 64;

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
  arrButton.push(createButton('Backspace', '', 'button_style_func'));

  //line2 - [14, 28]
  arrButton.push(createButton('Tab', '', 'button_style_func'));
  arrButton.push(createButton('Q', '\u0419', 'button_style'));
  arrButton.push(createButton('W', '\u0446', 'button_style'));
  arrButton.push(createButton('E', '\u0423', 'button_style'));
  arrButton.push(createButton('R', '\u041A', 'button_style'));
  arrButton.push(createButton('T', '\u0415', 'button_style'));
  arrButton.push(createButton('Y', '\u041D', 'button_style'));
  arrButton.push(createButton('U', '\u0413', 'button_style'));
  arrButton.push(createButton('I', '\u0428', 'button_style'));
  arrButton.push(createButton('O', '\u0429', 'button_style'));
  arrButton.push(createButton('P', '\u0417', 'button_style'));
  arrButton.push(createButton('[', '\u0425', 'button_style'));
  arrButton.push(createButton(']', '\u042A', 'button_style'));
  arrButton.push(createButton('\\', ' / ', 'button_style'));
  arrButton.push(createButton('DEL', '', 'button_style_func'));

  //line3 - [29, 41]
  arrButton.push(createButton('Caps Lock', '', 'button_style_func'));
  arrButton.push(createButton('A', '\u0424', 'button_style'));
  arrButton.push(createButton('S', '\u042B', 'button_style'));
  arrButton.push(createButton('D', '\u0432', 'button_style'));
  arrButton.push(createButton('F', '\u0430', 'button_style'));
  arrButton.push(createButton('G', '\u043F', 'button_style'));
  arrButton.push(createButton('H', '\u0440', 'button_style'));
  arrButton.push(createButton('J', '\u043E', 'button_style'));
  arrButton.push(createButton('K', '\u043B', 'button_style'));
  arrButton.push(createButton('L', '\u0434', 'button_style'));
  arrButton.push(createButton(';', '\u0436', 'button_style'));
  arrButton.push(createButton('\u0027', '\u044D', 'button_style'));
  arrButton.push(createButton('Enter', '', 'button_style_func'));

  //line4 - [42, 54]
  arrButton.push(createButton('Shift', '', 'button_style_func'));
  arrButton.push(createButton('Z', '\u044F', 'button_style'));
  arrButton.push(createButton('X', '\u0447', 'button_style'));
  arrButton.push(createButton('C', '\u0441', 'button_style'));
  arrButton.push(createButton('V', '\u043C', 'button_style'));
  arrButton.push(createButton('B', '\u0438', 'button_style'));
  arrButton.push(createButton('N', '\u0442', 'button_style'));
  arrButton.push(createButton('M', '\u044C', 'button_style'));
  arrButton.push(createButton('.', '', 'button_style'));
  arrButton.push(createButton(',', '', 'button_style'));
  arrButton.push(createButton('/', '', 'button_style'));
  arrButton.push(createButton('\u2191', '', 'button_style'));
  arrButton.push(createButton('Shift', '', 'button_style_func'));

  //line5 - [55, 63]
  arrButton.push(createButton('Ctrl', '', 'button_style'));
  arrButton.push(createButton('Win', '', 'button_style'));
  arrButton.push(createButton('Alt', '', 'button_style'));
  arrButton.push(createButton(' ', ' ', 'button_style_space'));
  arrButton.push(createButton('Alt', '', 'button_style'));
  arrButton.push(createButton('Ctrl', '', 'button_style'));
  arrButton.push(createButton('\u2190', '', 'button_style')); // влево
  arrButton.push(createButton('\u2193', '', 'button_style')); //вниз
  arrButton.push(createButton('\u2192', '', 'button_style')); //вправо
}
// Создаем функцию для создания кнопки
function createButton(number, symbol, className) {
  const button = document.createElement('button');
  button.classList.add(className);
  button.innerHTML = `<span class="exclamation-mark">${symbol}</span><br><span class="number">${number}</span>`;
  button.id = number.toLowerCase();

  button.addEventListener('click', () => {
    console.log(`Click button ${number}`);
    if( number === 'Backspace'){
      //todo func
      return;
    }
    if( number === 'Tab'){
      //todo func
      return;
    }
    if( number === 'DEL'){
      //todo func
      return;
    }
    if( number === 'Caps Lock'){
      //todo func
      return;
    }
    if( number === 'Enter'){
      //todo func
      return;
    }
    if( number === 'Shift'){
      //todo func
      return;
    }
    if( number === 'Ctrl'){
      //todo func
      return;
    }
    if( number === 'Win'){
      //todo func
      return;
    }
    if( number === 'Alt'){
      //todo func
      return;
    }

    if( number === '\u2191'){ // стрелка вверх
      //todo func
      return;
    }
    if( number === '\u2190'){ // стрелка влево
      //todo func
      return;
    }
    if( number === '\u2193'){ // стрелка вниз
      //todo func
      return;
    }
    if( number === '\u2192'){ // стрелка вправо
      //todo func
      return;
    }
   
    if( EngLang ){
      inputField.value = inputField.value + number.toLowerCase();
    } else{
      if( number === '.' || number === ',' || number === '/' || number === '\u2191'){
        inputField.value = inputField.value + number.toLowerCase();
      }else{
        inputField.value = inputField.value + symbol.toLowerCase();
      } 
    }
  });

  return button;
}

function createLine(start, nextStart){
  const keyboardLine = document.createElement('div');
  keyboardLine.classList.add('keyboard');

  for( let i = start; i < nextStart; i++){
    keyboardLine.appendChild(arrButton[i]);
  }
  document.body.appendChild(keyboardLine);
}

// Создаем новый элемент h3
var newHeading = document.createElement("h3");
var textNode = document.createTextNode("Operating systems: Windows. Use left Ctrl + Alt to switch language.");
newHeading.appendChild(textNode);
document.body.appendChild(newHeading);

// Создаем элемент поля ввода текста
const inputField = document.createElement('input');
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

});

document.addEventListener('keyup', (event) => {
  let keyPressed = event.key.toLowerCase();
  keyPressed = checKeyPressed(keyPressed);

  const buttonLine = arrButton.find( item => item.id == keyPressed );
  if( buttonLine ){
    buttonLine.classList.remove('highlighted');
  }

});