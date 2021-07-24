
const ps = document.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const bgc = estiloBody.backgroundColor;


for(let i of ps){
    i.style.backgroundColor = bgc
    i.style.color = '#FFFFFF';
};
