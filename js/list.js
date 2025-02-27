const flereSaker = [
  {
    url: "https://frifagbevegelse.no/arbeidsmanden/lettet-over-iaavtalen--na-skal-vi-jobbe-for-a-fa-ned-sykefravaret-6.158.1114315.2ccec46de5",
    tittel:
      "Lettet over IA-avtalen: – Nå skal vi jobbe for å få ned sykefraværet",
    stikktittel: "Inkluderende arbeidsliv",
    bilde:
      "https://frifagbevegelse.no/image-3.590291.145031.20250213115529.1.0ea7bf8b3f?size=512",
    tema: "Nyheter",
  },
  {
    url: "https://frifagbevegelse.no/hknytt/usa-kutter-penger-til-minerydding--katastrofale-konsekvenser-6.158.1114355.d6784afe7e",
    tittel: "USA kutter penger til minerydding: – Katastrofale konsekvenser",
    stikktittel: "Bistand",
    bilde:
      "https://frifagbevegelse.no/image-3.613213.145041.20250213123854.1.67e6ac5395?size=1024",
    tema: "Nyheter",
  },
  {
    url: "https://frifagbevegelse.no/nyheter/ung-psyk-og-uten-jobb-her-kan-du-fa-hjelp-6.469.1099616.4de3c6c631",
    tittel: "Ung, «psyk» og uten jobb? Her kan du få hjelp",
    stikktittel: "Psykisk helse",
    bilde:
      "https://frifagbevegelse.no/image-3.610577.142706.20250213085418.1.6734e060d6?size=1024",
    tema: "Kronikk",
  },
  {
    url: "https://frifagbevegelse.no/image-3.608794.144997.20250213125159.1.a933a2dce2?size=1024",
    tittel: "Den nye IA-avtalen er en stor seier for LO",
    stikktittel: "Inkluderende arbeidsliv",
    bilde:
      "https://frifagbevegelse.no/image-3.608794.144997.20250213125159.1.a933a2dce2?size=1024",
    tema: "Kommentar",
    forfatter: "Navn Navnesen",
    stilling: "Spaltist i FriFagbevegelse",
  },
  {
    url: "https://frifagbevegelse.no/arbeidsmanden/disse-yrkesgruppene-vil-norge-vare-helt-avhengige-av-i-krig-6.158.1110273.d7c0aae461",
    tittel: "Disse yrkesgruppene vil Norge være helt avhengige av i krig",
    stikktittel: "Beredskap",
    bilde:
      "https://frifagbevegelse.no/image-3.503671.144305.20250205141614.1.d59e1d7acb?size=1024",
    tema: "Debatt",
  },
];

const listContainer = document.querySelector("#fleresakerList");

flereSaker.forEach((saker) => {
  const listElement = document.createElement("a");
  listElement.classList.add("listElement");
  listElement.innerHTML = `
    <img src="${saker.bilde}" alt="${saker.tittel}" />
    <div>
      <h1>${saker.tittel}</h1>
    </div>
  
`;
  listContainer.appendChild(listElement);
});
