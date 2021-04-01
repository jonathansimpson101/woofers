const button = document.querySelector('.btn');
const woofer = document.querySelector('.woofer')


const getWoofer = () => {

  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => woofer.innerHTML = `<img src="${data.message}">`);
};

getWoofer();
button.addEventListener('click', getWoofer);
