const imgAuthor = document.getElementById('img-author')

fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((response) => response.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    imgAuthor.textContent = `Author: ${data.user.name}`
  })
