const cryptoData = document.getElementById("crypto-data");
const imgAuthor = document.getElementById("img-author");
const crypto = document.getElementById("crypto");

fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((response) => response.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    imgAuthor.textContent = `Author: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTQ4OTg2MTZ8&ixlib=rb-4.0.3&q=80&w=1080)`;
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((response) => response.json())
  .then((data) => {
    cryptoData.innerHTML = `<span>${data.name}</span> <img src='${data.image.small}' />`

    crypto.innerHTML += `
        <p>🌞: ${data.market_data.current_price.ngn} NGN</p>
        <p>🚀: ${data.market_data.high_24h.ngn} NGN</p>
        <p>🛬: ${data.market_data.low_24h.ngn} NGN</p>
    `;
  })
  .catch((err) => console.log("error found"));
