const cityListArray = [
  {
    id: 1,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo.html",
    imageURL: "./assets/cidades/sao-paulo.png",
  },
  {
    id: 2,
    cityName: "Rio de Janeiro",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/cidades/rio.png",
  },
  {
    id: 3,
    cityName: "Salvador",
    cityRegion: "Nordeste",
    minimumCost: "R$ 10.000,00",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/cidades/salvador.png",
  },
  {
    id: 4,
    cityName: "Maceió",
    cityRegion: "Nordeste",
    minimumCost: "R$ 10.000,00",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/cidades/maceio.png",
  },
  {
    id: 5,
    cityName: "São Luiz",
    cityRegion: "Nordeste",
    minimumCost: "R$ 10.000,00",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/cidades/sao-luiz.png",
  },
  {
    id: 6,
    cityName: "Natal",
    cityRegion: "Nordeste",
    minimumCost: "R$ 10.000,00",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/cidades/natal.png",
  },
  {
    id: 7,
    cityName: "Aracaju",
    cityRegion: "Nordeste",
    minimumCost: "R$ 10.000,00",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/cidades/aracaju.png",
  },
  {
    id: 8,
    cityName: "Fortaleza",
    cityRegion: "Nordeste",
    minimumCost: "R$ 10.000,00",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/cidades/fortaleza.png",
  },
];

function renderOffers(cityList) {
  const gridCitysPositionOnDom = document.querySelector(
    "#MainDestinationsList"
  );

  const citysHtml = cityList
    .map(
      (city) => `
        <a href="${city.url}" class="card ${city.availability === "Disponível" ? "disponivel" : "indisponivel"}" style="background-image: url(${city.imageURL});">
            <div class="localeHeader">
              <span class="tag ${city.availability === "Disponível" ? "green" : "red"}">
                ${city.availability}
              </span>
            </div>
            <div class="informationContainer">
              <div class="leftCollum">
                <span class="leftCollumTopic">${city.cityRegion}</span>
                <h3 class="name">${city.cityName}</h3>
              </div>

              <div class="rightCollum">
                <span class="rightCollumTopic">Custo mínimo</span>
                <span class="costAmount">${city.minimumCost}</span>
              </div>
            </div>
        </a>
      `
    )
    .join("");

  gridCitysPositionOnDom.innerHTML = citysHtml;
}

renderOffers(cityListArray);