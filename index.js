const url = 'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

fetch(url + coins)
  .then(function(response){
    return response.json()
  })
  .then(function(date){
    const dolarReal = date.USDBRL
    const euroReal = date.EURBRL
    const btcReal = date.BTCBRL
    let thisData = new Date()

    //DOLAR
    document.getElementById('title').innerHTML = dolarReal.name
    document.getElementById('thisdate').innerHTML = thisData.toLocaleString()
    //valor Maximo DOLAR:
    document.getElementById('maxvalue').innerHTML = parseFloat(dolarReal.high).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    //valor Minimo DOLAR:
    document.getElementById('minvalue').innerHTML = parseFloat(dolarReal.low).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })

    //EURO
    document.getElementById('title-eur').innerHTML = euroReal.name
    document.getElementById('thisdate-eur').innerHTML = thisData.toLocaleString()
    //valor Maximo EURO:
    document.getElementById('maxvalue-eur').innerHTML = parseFloat(euroReal.high).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    //valor Minimo EURO:
    document.getElementById('minvalue-eur').innerHTML = parseFloat(euroReal.low).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })

    //BITCOIN
    document.getElementById('title-btc').innerHTML = btcReal.name
    document.getElementById('thisdate-btc').innerHTML = thisData.toLocaleString()
    //valor Maximo BITCOIN:
    document.getElementById('maxvaluebtc').innerHTML = parseFloat(btcReal.high).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    //valor Minimo BITCOIN:
    document.getElementById('minvaluebtc').innerHTML = parseFloat(btcReal.low).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  })