const baseURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api`;
const ourURL = baseURL + `/2406-FTB-ET-WEB-FT`

const state = {
  artists:null
}

const getInfo = async() => {
  const artistsData = await fetch(ourURL + `/artists`)
  const artistsJson = await artistsData.json();
  const artists = artistsJson.data;
  state.artists = artists;
  // state.artists.forEach(artist => console.log(artist.name))
  // console.log(artists)
}
getInfo();

// grab the main element
const main = document.querySelector(`main`)
// create an unordered list
const artistUL = document.createElement(`ul`);
// attatch it to the main element
main.appendChild(artistUL)
// instruct to click
artistUL.innerText = `(click here for artists!)`;
artistUL.style.color = `#FFB6C1`

artistUL.addEventListener(`click`, event => {
  artistUL.innerText = ``;

  state.artists.forEach(artist => {
    const artistLI = document.createElement(`li`);
    artistUL.appendChild(artistLI);
    const artistID = artist.id;
    artistLI.innerHTML =
    `
    <section>
    <img src="${artist.imageUrl}"></>
    <h3>${artist.name}</h3>
    <p>${artist.description}</p>
    <button id="id${artist.id}">Remove</button>
    </section>
    `
    const deleteButton = artistLI.querySelector(`#id${artist.id}`);
    deleteButton.addEventListener(`click`,(event) => {
      event.preventDefault();
      artistLI.remove();
    });

  })
})

// const form = document.querySelector(`form`);
// const addArtist = async(event) =>{

//   event.preventDefault();
//   let name = document.querySelector(`#artistName`).value;
//   let description = document.querySelector(`#artistDescription`).value;
//   let image = document.querySelector(`#artistImage`).value;

//   const artistLI = document.createElement(`li`);
//     artistUL.appendChild(artistLI);
//     artistLI.innerHTML =
//     `
//     <section>
//     <img src="${image}"></>
//     <h3>${name}</h3>
//     <p>${description}</p>
//     <button class="deleteButton">Remove</button>
//     </section>
//     `
//     const deleteButton = artistLI.querySelector(`.deleteButton`);
//     let eleCount = 1;
//     deleteButton.addEventListener(`click`,(event) => {
//       event.preventDefault();
//       artistLI.remove();
//     });
//     document.querySelector(`#artistName`).value = ``;
//     document.querySelector(`#artistDescription`).value = ``;
//     document.querySelector(`#artistImage`).value = ``;
//     eleCount++;
// }
// form.addEventListener(`submit`, addArtist)
