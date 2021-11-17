document.addEventListener('DOMContentLoaded', () => {
    const apiLink =  "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=";
    const apiTicker = "SHIB";
    const apiKey = '&market=CNY&apikey=CPEBC3UR4IJI5F21';


    const openPrice = document.getElementById("open");
    const highPrice = document.getElementById("high");
    const lowPrice = document.getElementById("low");
    const closePrice = document.getElementById("close");
    const volume = document.getElementById("volume");
    
    const searchBtn = document.getElementById('search-btn');

    function fetchData(ticker = apiTicker){
        fetch(apiLink + ticker + apiKey)
        .then(response => response.json())
        .then(json => {
            renderData(json)
            });
    }

    function numberWithCommas(x) {
        num = Number.parseFloat(x).toFixed(2);
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    function renderData(name) {
        openPrice.innerText = "Open Price : $"+ numberWithCommas(name['Time Series (Digital Currency Daily)']['2021-11-16']["1b. open (USD)"]);
        highPrice.innerText = "High Price : $"+ numberWithCommas (name['Time Series (Digital Currency Daily)']['2021-11-16']["2b. high (USD)"]);
        lowPrice.innerText = " Low Price : $"+ numberWithCommas (name['Time Series (Digital Currency Daily)']['2021-11-16']["3b. low (USD)"]);
        closePrice.innerText = "Close Price : $"+ numberWithCommas (name['Time Series (Digital Currency Daily)']['2021-11-16']["4b. close (USD)"]);
        volume.innerText = "Volume : "+ numberWithCommas (name['Time Series (Digital Currency Daily)']['2021-11-16']["5. volume"]);
    }

    


    searchBtn.addEventListener("click",()=>{
        const selectElement = document.getElementById("ticker-form");
        let output = selectElement.options[selectElement.selectedIndex].value;
        fetchData(output);
    });

})

































// //fetchData(selectResult);
    // function selected(){
        
    //     return selectResult;
    // }//return the value


    // searchBtn.addEventListener('click',fetchData('BTC'));

    // //console.log(selectResult);


    // //console.log(selected());

    // const btcRadio = document.getElementById('BTC');
    // const ethRadio = document.getElementById('ETH');
    // const dogeRadio = document.getElementById('DOGE');

    
    //console.log(btcRadio);

    // if(btcRadio.checked){
    //     console.log("BTC");
    // }else if (ethRadio.checked){
    //     console.log("ETH");
    // }else if(dogeRadio.checked){
    //     console.log('DOGE')
    // }


    const btnRadio = document.getElementsByName('nameF');
    // let selectedValue;
    // for (const rb of btnRadio){
    //     if(rb.checked){
    //         selectedValue = rb.value;
    //     }
    // }

    //console.log(btnRadio[0].checked = true);