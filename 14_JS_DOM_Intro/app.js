//Document
console.log(document);

//title
console.log(document.title);

//body
console.log(document.body);

//header
console.log(document.head);

//nav
let navTag = document.querySelector('nav');
console.log(navTag);

//anchor Tag
let anchorTag = document.querySelector('nav a');
console.log(anchorTag);

//inner text of anchorTag
let theText = anchorTag.innerText;
console.log(theText);

//change the inner text
anchorTag.innerText = 'Siegfred Samson'

//To apply CSS
let h1Tag = document.querySelector('#msg');
h1Tag.innerText = 'Good Evening';

h1Tag.style.backgroundColor = 'limegreen';
h1Tag.style.padding = '10px';
h1Tag.style.color = 'white';
h1Tag.style.textAlign = 'center';
h1Tag.style.boxShadow = '0 0 10px black';
h1Tag.style.borderRadius = '10px';

let newText = document.querySelector('form input');
newText.style.marginLeft = '30px';
newText.style.backgroundColor = 'lightslategrey'
newText.style.border = 'none';
newText.style.borderRadius = '2px';

newText.innerMessage = `i'm certainly the new boss`;