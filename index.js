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
}
getInfo();

const artistUL = document.createElement(`ul`);
const main = document.querySelector(`main`)
main.appendChild(artistUL)
artistUL.innerText = `click here!`

artistUL.addEventListener(`click`, event => {
  state.artists.forEach(artist => {
    const artistLI = document.createElement(`li`);
    artistUL.appendChild(artistLI);
    // artistLI.innerText = artist.name;
    artistLI.innerHTML =
    `
    <section>
    <img src="${artist.imageUrl}"></>
    <h3>${artist.name}</h3>
    <p>${artist.description}</p>
    </section>
    `
    artistLI.style.listStyle = `none`;
    artistLI.style.marginTop = `20px`;
    artistLI.style.width = `100%`;
    // artistLI.style.border = `thin black solid`;
    // artistLI.style.backgroundColor = `darkgreen`;
    // artistLI.style.borderRadius = `40px`;


  })
})
