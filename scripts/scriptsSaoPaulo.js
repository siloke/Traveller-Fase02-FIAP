const holtelListArray = [
  {
    id: 1,
    name: "IBIS Styles São Paulo Anhembi",
    availability: "Disponível",
    url: "https://www.booking.com/hotel/br/ibis-styles-sao-paulo-anhembi.pt-br.html",
    imageURL: "./assets/hoteis/ibis.png",
  },
  {
    id: 2,
    name: "Confort Ibirapuera",
    availability: "Disponível",
    url: "https://www.booking.com/hotel/br/comfort-ibirapuera.pt-br.html",
    imageURL: "./assets/hoteis/confort.png",
  },
  {
    id: 3,
    name: "Blue Tree Premium Morumbi",
    availability: "Disponível",
    url: "https://www.booking.com/hotel/br/blue-tree-premium-morumbi.pt-br.html",
    imageURL: "./assets/hoteis/blue_tree.png",
  },
  {
    id: 4,
    name: "Mercure São Paulo Pamplona",
    availability: "Disponível",
    url: "https://www.booking.com/hotel/br/apartments-sao-paulo-pamplona.pt-br.html",
    imageURL: "./assets/hoteis/pamplona.png",
  },
  {
    id: 5,
    name: "Sheraton São Paulo WTC Hotel",
    availability: "Disponível",
    url: "https://www.booking.com/hotel/br/sao-paulo-wtc.pt-br.html",
    imageURL: "./assets/hoteis/sheraton.png",
  },
  {
    id: 6,
    name: "Bourbon Convention Ibirapuera",
    availability: "Disponível",
    url: "https://www.booking.com/hotel/br/bourbon-convention-ibirapuera.pt-br.html",
    imageURL: "./assets/hoteis/bourbon.png",
  },
  {
    id: 7,
    name: "Golden Tulip Paulista Plaza",
    availability: "Disponível",
    url: "https://www.tripadvisor.com.br/LocationPhotoDirectLink-g303631-d301508-i280141509-Radisson_Paulista-Sao_Paulo_State_of_Sao_Paulo.html",
    imageURL: "./assets/hoteis/golden_tulip.png",
  },
  {
    id: 8,
    name: "Renaissance São Paulo Hotel",
    availability: "Disponível",
    url: "https://www.marriott.com.br/hotels/travel/saobr-renaissance-sao-paulo-hotel/",
    imageURL: "./assets/hoteis/renaissance.png",
  },
];

function renderHoltel(hotelList) {
  const gridHoltelsPositionOnDom = document.querySelector(
    ".cardsList"
  );

  const citysHtml = hotelList
    .map(
      (hotel) => `
        <a href="${hotel.url}" target="_blank" class="card ${
          hotel.availability === "Disponível" ? "disponivel" : "indisponivel"
      }" style="background-image: url(${hotel.imageURL});">
            <div class="localeHeader">
              <span class="tag ${
                hotel.availability === "Disponível" ? "green" : "red"
              }">
                ${hotel.availability}
              </span>
            </div>
            <div class="informationContainer">
              <div class="leftCollum">
                <span class="leftCollumTopic">Hotel</span>
                <h3 class="name">${hotel.name}</h3>
              </div>
            </div>
        </a>
      `
    )
    .join("");

  gridHoltelsPositionOnDom.innerHTML = citysHtml;
}

renderHoltel(holtelListArray);
