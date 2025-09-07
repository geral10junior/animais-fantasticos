export default function fetchBitcoin(url, target) {
  const btcPreco = document.querySelector(target);

  fetch(url)
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
