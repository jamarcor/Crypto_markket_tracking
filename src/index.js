const api =  "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=demo";
// let userData;

fetch(api)
.then(response => response.json())
.then(json => renderData);

function renderData(info){
    console.log(info)
}

renderData()