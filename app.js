
let EngLang = false; //TODO switch language

// Создаем функцию для создания кнопки
function createButton(number, symbol, className) {
  const button = document.createElement('button');
  button.classList.add(className);
  button.innerHTML = `<span class="exclamation-mark">${symbol}</span><br><span class="number">${number}</span>`;
  button.id = number.toLowerCase();

  button.addEventListener('click', () => {
    console.log(`Click button ${number}`);
    console.log(`Click button ${button.id}`);
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

// Создаем элемент поля ввода текста
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.id = 'output-field';

// Добавляем поле ввода на страницу
document.body.appendChild(inputField);

// Создаем клавиатуру
// line 1
const keyboardLine1 = document.createElement('div');
keyboardLine1.classList.add('keyboard');

// Создаем кнопки клавиатуры 1) - кнопку нужно добавить тут
const arrButtonLine1 = [];
arrButtonLine1.push(createButton('`', '~', 'button_style'));
arrButtonLine1.push(createButton('1', '!', 'button_style'));
arrButtonLine1.push(createButton('2', '@', 'button_style'));
arrButtonLine1.push(createButton('3', '#', 'button_style'));
arrButtonLine1.push(createButton('4', '$', 'button_style'));
arrButtonLine1.push(createButton('5', '%', 'button_style'));
arrButtonLine1.push(createButton('6', '^', 'button_style'));
arrButtonLine1.push(createButton('7', '&', 'button_style'));
arrButtonLine1.push(createButton('8', '*', 'button_style'));
arrButtonLine1.push(createButton('9', '(', 'button_style'));
arrButtonLine1.push(createButton('0', ')', 'button_style'));
arrButtonLine1.push(createButton('-', '_', 'button_style'));
arrButtonLine1.push(createButton('=', '+', 'button_style'));
arrButtonLine1.push(createButton('Backspace', '', 'button_style_func'));

for( let i = 0; i < arrButtonLine1.length; i++){
  keyboardLine1.appendChild(arrButtonLine1[i]);
}

// Добавляем клавиатуру на страницу
document.body.appendChild(keyboardLine1);

//line2
const keyboardLine2 = document.createElement('div');
keyboardLine2.classList.add('keyboard');

const arrButtonLine2 = [];
arrButtonLine2.push(createButton('Tab', '', 'button_style_func'));
arrButtonLine2.push(createButton('Q', '\u0419', 'button_style'));
arrButtonLine2.push(createButton('W', '\u0446', 'button_style'));
arrButtonLine2.push(createButton('E', '\u0423', 'button_style'));
arrButtonLine2.push(createButton('R', '\u041A', 'button_style'));
arrButtonLine2.push(createButton('T', '\u0415', 'button_style'));
arrButtonLine2.push(createButton('Y', '\u041D', 'button_style'));
arrButtonLine2.push(createButton('U', '\u0413', 'button_style'));
arrButtonLine2.push(createButton('I', '\u0428', 'button_style'));
arrButtonLine2.push(createButton('O', '\u0429', 'button_style'));
arrButtonLine2.push(createButton('P', '\u0417', 'button_style'));
arrButtonLine2.push(createButton('[', '\u0425', 'button_style'));
arrButtonLine2.push(createButton(']', '\u042A', 'button_style'));
arrButtonLine2.push(createButton('\\', ' / ', 'button_style'));
arrButtonLine2.push(createButton('DEL', '', 'button_style_func'));

for( let i = 0; i < arrButtonLine2.length; i++){
  keyboardLine2.appendChild(arrButtonLine2[i]);
}

document.body.appendChild(keyboardLine2);

//line3
const keyboardLine3 = document.createElement('div');
keyboardLine3.classList.add('keyboard');

const arrButtonLine3 = [];
arrButtonLine3.push(createButton('Caps Lock', '', 'button_style_func'));
arrButtonLine3.push(createButton('A', '\u0424', 'button_style'));
arrButtonLine3.push(createButton('S', '\u042B', 'button_style'));
arrButtonLine3.push(createButton('D', '\u0432', 'button_style'));
arrButtonLine3.push(createButton('F', '\u0430', 'button_style'));
arrButtonLine3.push(createButton('G', '\u043F', 'button_style'));
arrButtonLine3.push(createButton('H', '\u0440', 'button_style'));
arrButtonLine3.push(createButton('J', '\u043E', 'button_style'));
arrButtonLine3.push(createButton('K', '\u043B', 'button_style'));
arrButtonLine3.push(createButton('L', '\u0434', 'button_style'));
arrButtonLine3.push(createButton(';', '\u0436', 'button_style'));
arrButtonLine3.push(createButton('\u0027', '\u044D', 'button_style'));
arrButtonLine3.push(createButton('Enter', '', 'button_style_func'));

for( let i = 0; i < arrButtonLine3.length; i++){
  keyboardLine3.appendChild(arrButtonLine3[i]);
}

document.body.appendChild(keyboardLine3);

//line4
const keyboardLine4 = document.createElement('div');
keyboardLine4.classList.add('keyboard');
  
const arrButtonLine4 = [];
arrButtonLine4.push(createButton('Shift', '', 'button_style_func'));
arrButtonLine4.push(createButton('Z', '\u044F', 'button_style'));
arrButtonLine4.push(createButton('X', '\u0447', 'button_style'));
arrButtonLine4.push(createButton('C', '\u0441', 'button_style'));
arrButtonLine4.push(createButton('V', '\u043C', 'button_style'));
arrButtonLine4.push(createButton('B', '\u0438', 'button_style'));
arrButtonLine4.push(createButton('N', '\u0442', 'button_style'));
arrButtonLine4.push(createButton('M', '\u044C', 'button_style'));
arrButtonLine4.push(createButton('.', '', 'button_style'));
arrButtonLine4.push(createButton(',', '', 'button_style'));
arrButtonLine4.push(createButton('/', '', 'button_style'));
arrButtonLine4.push(createButton('\u2191', '', 'button_style'));
arrButtonLine4.push(createButton('Shift', '', 'button_style_func'));
  
for( let i = 0; i < arrButtonLine4.length; i++){
  keyboardLine4.appendChild(arrButtonLine4[i]);
}
  
document.body.appendChild(keyboardLine4);

//line5
const keyboardLine5 = document.createElement('div');
keyboardLine5.classList.add('keyboard');
  
const arrButtonLine5 = [];
arrButtonLine5.push(createButton('Ctrl', '', 'button_style'));
arrButtonLine5.push(createButton('Win', '', 'button_style'));
arrButtonLine5.push(createButton('Alt', '', 'button_style'));
arrButtonLine5.push(createButton(' ', ' ', 'button_style_space'));
arrButtonLine5.push(createButton('Alt', '', 'button_style'));
arrButtonLine5.push(createButton('Ctrl', '', 'button_style'));
arrButtonLine5.push(createButton('\u2190', '', 'button_style')); // влево
arrButtonLine5.push(createButton('\u2193', '', 'button_style')); //вниз
arrButtonLine5.push(createButton('\u2192', '', 'button_style')); //вправо

for( let i = 0; i < arrButtonLine5.length; i++){
  keyboardLine5.appendChild(arrButtonLine5[i]);
}
  
document.body.appendChild(keyboardLine5);

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

  const buttonLine1 = arrButtonLine1.find( item => item.id == keyPressed );
  if( buttonLine1 ){
    buttonLine1.classList.add('highlighted');
    buttonLine1.click();
  }

  const buttonLine2 = arrButtonLine2.find( item => item.id == keyPressed );
  if( buttonLine2 ){
    buttonLine2.classList.add('highlighted');
    buttonLine2.click();
  }

  const buttonLine3 = arrButtonLine3.find( item => item.id == keyPressed );
  if( buttonLine3 ){
    buttonLine3.classList.add('highlighted');
    buttonLine3.click();
  }

  const buttonLine4 = arrButtonLine4.find( item => item.id == keyPressed );
  if( buttonLine4 ){
    buttonLine4.classList.add('highlighted');
    buttonLine4.click();
  }

  const buttonLine5 = arrButtonLine5.find( item => item.id == keyPressed );
  if( buttonLine5 ){
    buttonLine5.classList.add('highlighted');
    buttonLine5.click();
  }
});

document.addEventListener('keyup', (event) => {
  let keyPressed = event.key.toLowerCase();
  keyPressed = checKeyPressed(keyPressed);
  
  const buttonLine1 = arrButtonLine1.find( item => item.id == keyPressed );
  if( buttonLine1 ){
    buttonLine1.classList.remove('highlighted');
  }

  const buttonLine2 = arrButtonLine2.find( item => item.id == keyPressed );
  if( buttonLine2 ){
    buttonLine2.classList.remove('highlighted');
  }

  const buttonLine3 = arrButtonLine3.find( item => item.id == keyPressed );
  if( buttonLine3 ){
    buttonLine3.classList.remove('highlighted');
  }

  const buttonLine4 = arrButtonLine4.find( item => item.id == keyPressed );
  if( buttonLine4 ){
    buttonLine4.classList.remove('highlighted');
  }

  const buttonLine5 = arrButtonLine5.find( item => item.id == keyPressed );
  if( buttonLine5 ){
    buttonLine5.classList.remove('highlighted');
  }

});