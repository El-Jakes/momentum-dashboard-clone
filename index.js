const imgAuthor = document.getElementById('img-author')

fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=fnkdnkskmadndcknk"
)
  .then((response) => response.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    imgAuthor.textContent = `Author: ${data.user.name}`
})
.catch(err => {
      document.body.style.backgroundImage = `url(https://cdn.xxl.thumbs.canstockphoto.com/danger-sign-drawing_csp0665020.jpg)`;

  })
