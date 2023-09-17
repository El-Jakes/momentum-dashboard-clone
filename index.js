const cryptoData = document.getElementById("crypto-data");
const crypto = document.getElementById("crypto");
const mainWeather = document.getElementById("main-weather");
const currentTime = document.getElementById('current-time')
const imgAuthor = document.getElementById("img-author");

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

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
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

  const getCurrentTime = () => {
      const date = new Date()
      currentTime.textContent = date.toLocaleTimeString("en-us", { timeStyle: "short" });
  }

  setInterval(getCurrentTime, 1000)

  navigator.geolocation.getCurrentPosition((position) => {
    fetch(
      `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
    )
      .then(res => {
        if (!res.ok) {
            throw Errow('Weather data not found')
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        mainWeather.innerHTML = `
            <img src='${weatherIcon}' />
            <p class="temp">${Math.round(data.main.temp)}°</p>
            <p class="weather-city">${data.name}</p>
        `

    })
  })
  .catch(err => console.error(err))
