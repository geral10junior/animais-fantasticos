export default function initFetchBitcoin() {
  const btcPreco = document.querySelector(".btc-preco");

  fetch("https://blockchain.info/ticker")
    .then((response) => {
      response
        .json()
        .then(
          (json) => (btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4))
        );
    })
    .catch((erro) => {
      console.log(erro);
    });
}

// https://blockchain.info/ticker
