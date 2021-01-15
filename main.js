const boton1 = document.createElement('button');

document.getElementById('buttons-container').appendChild(boton1);

boton1.innerHTML = "Contar palabras";
boton1.style.width = '80px';
boton1.style.height = '35px';

const boton2 = document.createElement('button');

boton2.innerHTML = "Restablecer";
boton2.style.width = '80px';
boton2.style.height = '35px';

const newSpan = document.createElement('span');

const newDiv = document.createElement('div');

document.getElementsByClassName('text-container').item(0).appendChild(newDiv);

const text = document.getElementsByClassName('text-container').item(0);

const text0 = document.getElementsByClassName('text-container').item(0).textContent;

const contadorDiv = (div) => {
    let count = 0;
    const text = div.textContent.replace(',', '');
    const textContent = text.replace('.', '');
    const words = textContent.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 2) {
            count++;
        }
    }
    document.getElementById('buttons-container').appendChild(boton2);

    return count;

}

const contar = () => {
    
    if(!newDiv.contains(newSpan)){
        newDiv.appendChild(newSpan);
      }
    newSpan.textContent = contadorDiv(text);
}

boton1.setAttribute('onclick', 'contar()');

const removeSpan = () =>{
    if(newDiv.contains(newSpan)){
    newDiv.removeChild(newSpan);
    }
    }
boton2.setAttribute('onclick', 'removeSpan()');