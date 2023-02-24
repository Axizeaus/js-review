import myName from "./myName";

function component(){
  const element = document.createElement('div');
  
  element.innerHTML = myName('Ye');

  return element;
}

document.body.appendChild(component())