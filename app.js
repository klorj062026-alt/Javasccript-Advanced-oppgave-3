const url = "https://api.tvmaze.com/shows";

const randomBtn = document.querySelector("#surpriseBtn");

const containTvShow = document.querySelector("#tvShowContainer");

async function getData(apiurl) {
  try {
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => randomTvShowPicker(data))
      .finally(console.log("got api!"));
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

  const pGenre = document.createElement("p");
  const genretxt = document.createTextNode(
    "Sjanger: " + arrayData[randomIndex].genres,
  );

  pGenre.append(genretxt);
  pGenre.className = "genre_txt";

  const pSum = document.createElement("p");
  pSum.innerHTML = arrayData[randomIndex].summary;
  pSum.className = "summary_txt";

  const pRat = document.createElement("p");
  const rattxt = document.createTextNode(
    "Rating: " + arrayData[randomIndex].rating.average,
  );
  pRat.append(rattxt);
  pRat.className = "rating_txt";

  const figure = document.createElement("figure");
  const tvShowImg = document.createElement("img");
  tvShowImg.src = arrayData[randomIndex].image.medium;
  figure.append(tvShowImg);
  // Se på denne
  figure.className = "tv_show_img";

  div.append(titleh3, figure, pGenre, pRat, pSum);
  containTvShow.appendChild(div);
}

randomBtn.addEventListener("click", (e) => {
  getData(url);
});

// async function searchShows(query) VENTE LITT MED DENNE.
