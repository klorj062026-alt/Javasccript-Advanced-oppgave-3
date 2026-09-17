const url = "https://api.tvmaze.com/shows";

const randomBtn = document.querySelector("#surprise_btn");

const containTvShow = document.querySelector("#tvShowContainer");

async function getData(apiUrl) {
  try {
    fetch(
      apiUrl
        .then((res) => res.json)
        .then((data) => randomTvShowPicker(data))
        .finally(console.log("got api!")),
    );
  } catch (err) {
    console.error(err);
  }
}

function randomTvShowPicker(arrayData) {
  // Random index generator
  let randomIndex = Math.floor(Math.random() * arrayData.length);
  console.log(arrayData[randomIndex]);
  const div = document.createElement("div");
  div.className = "tv_card";

  const titleh3 = document.createElement("h3");
  const titletxt = document.createTextNode(arrayData[randomIndex].name);
  titleh3.append(titletxt);
  titleh3.className = "show_title";
}
// async function searchShows(query) VENTE LITT MED DENNE.
