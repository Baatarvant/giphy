// Variables
let db = firebase.firestore();
let giphyUrl =
  "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&q=";
let DATA = {};

// Fetch api
async function fetchGiphy() {
  let inputValue = document.querySelector("#input").value;
  let response = await fetch(giphyUrl + inputValue);
  DATA = await response.json();
}

// Write data on firebase
function writeData() {
  console.log(DATA.data);
  DATA.data.forEach((item) => {
    let result = item.images.fixed_height.url;
    console.log(result);
    // console.log(item[index].images.fixed_height.url);
  });
}
