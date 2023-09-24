const search = document.getElementById('textInput');
const button = document.getElementById('submitButton');
const reault = document.getElementById('result')

// let FinalResult = { 
//     "ID": idof, 
//     "Rank": rankof, 
//     "Symbol": symbolof, 
//     "Name": nameof, 
//     "Price(USD": priceof, 
// }

function processData(data, textentered) {
    let CryptoObj = data.data[0];
    console.log(CryptoObj[textentered]);
}

search.addEventListener('keyup',function(event){
    if(event.keyCode === 13){
        handleinput();
    }
});

button.addEventListener('click',function(){
    handleinput();
});


function handleinput(){
    let txt = String(search.value);
    let promise = fetch('https://api.coincap.io/v2/assets');
    promise.then(response => {
        return response.json();
    }).then(data => {
        var Info = (data.data);
        for (var i = 0; i < 100; i++) {
            if (Info[i]['name'] == txt) {
                let detail = JSON.stringify(data.data[i], null, 2);
                reault.innerHTML = detail;
                break;
            }
        }
    }).catch(error => {
        console.error('Error:', error);
    });
    search.value = ''
}
