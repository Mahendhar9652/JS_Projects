const colorNames = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Gray", "Black", "White", "Cyan", "Magenta", "Lime", "Teal", "Indigo", "Maroon", "Navy", "Olive", "Silver", "Gold", "Violet", "Turquoise", "Plum", "Salmon"];
var colorBox = document.getElementsByClassName('color-box')[0];
var colorTitle = document.getElementsByClassName('section-title')[0];

let count = 0;
colorTitle.innerText = 'Empty Color';

function simpleColorChange() {
  colorBox.style.backgroundColor = colorNames[count];
  colorTitle.innerText = colorNames[count];
  count++;
  if (count > colorNames.length - 1) {
    count = 0;
  }
}




function hexColorChange() {
    let number = Math.floor(Math.random() *99999); 
    let color = '#' + number.toString().padStart(6, '0');   
    colorBox.style.backgroundColor = color;
  colorTitle.innerText = color; 
  }
  
