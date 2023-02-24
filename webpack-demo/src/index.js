import printMe from "./print";

function component(){
  const element = document.createElement('div');
  
  element.innerHTML = 'this is working still';
  printMe();

  return element;
}

document.body.appendChild(component())