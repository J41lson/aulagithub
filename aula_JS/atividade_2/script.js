const h1 = document.getElementById('titulo');
const ul = document.querySelector('ul');
const a = document.querySelector('a');
const ol = document.getElementById('lista-ordenada');

h1.innerText = 'Título da Página';
a.innerText = 'Acesse o site Proz educação';

ul.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

ol.innerHTML = `
    <li><a href="https://google.com" target="_blank">Google</a></li>
    <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
    <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
`;