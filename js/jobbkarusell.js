const jobber = [
  {
    logo: "",
    jobb: "Frontend-utvikler",
    bedrift: "Bouvet",
    sted: "Oslo",
  },
  {
    logo: "",
    jobb: "Backend-utvikler",
    bedrift: "Bouvet",
    sted: "Oslo",
  },
  {
    logo: "",
    jobb: "Frontend-utvikler",
    bedrift: "Bouvet",
    sted: "Oslo",
  },
  {
    logo: "",
    jobb: "Frontend-utvikler",
    bedrift: "Bouvet",
    sted: "Oslo",
  },
  {
    logo: "",
    jobb: "Frontend-utvikler",
    bedrift: "Bouvet",
    sted: "Oslo",
  },
  {
    logo: "",
    jobb: "Frontend-utvikler",
    bedrift: "Bouvet",
    sted: "Oslo",
  },
  {
    logo: "",
    jobb: "Frontend-utvikler",
    bedrift: "Bouvet",
    sted: "Oslo",
  },
  {
    logo: "",
    jobb: "Frontend-utvikler",
    bedrift: "Bouvet",
    sted: "Oslo",
  },
  {
    logo: "",
    jobb: "Frontend-utvikler",
    bedrift: "Bouvet",
    sted: "Oslo",
  },
  {
    logo: "",
    jobb: "Frontend-utvikler",
    bedrift: "Bouvet",
    sted: "Oslo",
  },
];

const jobbCount = document.querySelector("#workCount");
jobbCount.innerHTML = `${jobber.length}`;

const jobbKarusellContainer = document.querySelector(".workCarouselWrapper");

jobber.forEach((jobb) => {
  const jobbCard = document.createElement("div");
  jobbCard.classList.add("workCard", "swiper-slide");
  jobbCard.innerHTML = `
    <div class="workCarouselCard">
      <img src="${jobb.logo}" alt="logo">
    <div>
      <h3>${jobb.jobb}</h3>
      <p>${jobb.bedrift}</p>
      <p>${jobb.sted}</p>
    </div>
    </div>
  `;
  jobbKarusellContainer.appendChild(jobbCard);
});
