// Seleciona o botão e a imagem no HTML
const btn = document.getElementById('mudar');
const img = document.getElementById("img");

// Define a chave da API e a URL base
const key = 'CSL6MJ3bA7Crl8zdunV90wJddHdtm4hE';
const url = 'https://api.giphy.com/v1/stickers/random?api_key=';

// Define a tag que será usada para buscar GIFs aleatórios de anime
const tag = '&tag=anime'

// Cria a URL completa para fazer a solicitação à API do Giphy
const urlcomplet = url + key + tag ;

// Adiciona um ouvinte de eventos ao botão que é acionado quando o botão é clicado
btn.addEventListener('click', () => {
  // Faz uma solicitação à API do Giphy usando a URL completa criada anteriormente
  fetch(urlcomplet)
    // Converte a resposta em um objeto JSON
    .then(response => response.json())
    // Usa os dados retornados pela API para atualizar a imagem exibida na página
    .then(data => {
      img.src = data.images.original[url];
      img.alt = data.images.original[alt];
    })
    // Lida com erros caso ocorram durante a solicitação ou conversão de dados JSON
    .catch(error => console.error(error));
});





"https://media3.giphy.com/media/hXYlYBixtHEFq/giphy.gif?cid=7606fc4d156031075eb618c94641c749b24fa3699bc40dd1&ep=v1_gifs_random&rid=giphy.gif&ct=g"