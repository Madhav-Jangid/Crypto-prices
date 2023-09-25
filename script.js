const search = document.getElementById('textInput');
const button = document.getElementById('submitButton');
const resultName = document.getElementById('resultname');
const resultId = document.getElementById('resultid');
const resultRank = document.getElementById('resultrank');
const resultPrice = document.getElementById('resultprice');
const resultdiv = document.getElementById('mainrsdiv');


search.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    handleInput();
  }
});

button.addEventListener('click', function () {
  // search.classList.toggle("toggleClass");
  handleInput();
});

async function handleInput() {
  let txt = search.value;
  try {
    const response = await fetch('https://api.coincap.io/v2/assets');
    const data = await response.json();
    
    const cryptoData = data.data.find(item => item.name === txt);
    
    if (cryptoData) {
      resultName.innerHTML = ('Name: ' + cryptoData.name);
      resultId.innerHTML = ('Id: ' + cryptoData.id);
      resultRank.innerHTML = ('Rank: ' + cryptoData.rank);
      resultPrice.innerHTML = ('Price($): ' + cryptoData.priceUsd);
    } else {
      // Handle the case when the cryptocurrency is not found
      resultdiv.innerHTML = 'Cryptocurrency not found :(';
    }
  } catch (error) {
    console.error('Error:', error);
  }
  
  search.value = '';
}
