const saker = [
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

const toppsak = document.querySelector("#toppsak");
toppsak.querySelector("img").src = saker[0].bilde;
toppsak.querySelector("h4").textContent = saker[0].stikktittel;
toppsak.querySelector("h1").textContent = saker[0].tittel;

const sak1 = document.querySelector("#sak1");
sak1.querySelector("img").src = saker[1].bilde;
sak1.querySelector("h4").textContent = saker[1].stikktittel;
sak1.querySelector("h1").textContent = saker[1].tittel;

const sak2 = document.querySelector("#sak2");
sak2.querySelector("img").src = saker[2].bilde;
sak2.querySelector("h1").textContent = saker[2].tittel;

const sak3 = document.querySelector("#sak3");
sak3.querySelector("img").src = saker[3].bilde;
sak3.querySelector("h4").textContent = saker[3].stikktittel;
sak3.querySelector("h1").textContent = saker[3].tittel;

const sak4 = document.querySelector("#sak4");
sak4.querySelector("img").src = saker[4].bilde;
sak4.querySelector("h4").textContent = saker[4].stikktittel;
sak4.querySelector("h1").textContent = saker[4].tittel;

const sak5 = document.querySelector("#sak5");
sak5.querySelector("img").src = saker[0].bilde;
sak5.querySelector("h4").textContent = saker[0].stikktittel;
sak5.querySelector("h1").textContent = saker[0].tittel;

const sak6 = document.querySelector("#sak6");
sak6.querySelector("img").src = saker[1].bilde;
sak6.querySelector("h4").textContent = saker[1].stikktittel;
sak6.querySelector("h1").textContent = saker[1].tittel;

const sak7 = document.querySelector("#sak7");
sak7.querySelector("img").src = saker[2].bilde;
sak7.querySelector("h1").textContent = saker[2].tittel;
sak7.querySelector("p").textContent = saker[2].stikktittel;

const sak8 = document.querySelector("#sak8");
sak8.querySelector("img").src = saker[3].bilde;
sak8.querySelector("h4").textContent = saker[3].stikktittel;
sak8.querySelector("h1").textContent = saker[3].tittel;

const sak9 = document.querySelector("#sak9");
sak9.querySelector("h1").textContent = saker[4].tittel;
sak9.querySelector(".debatt-byline").innerHTML = `
<img src="${saker[4].bilde}" alt="Bilde av ${saker[4].forfatter}">
<div>
<b>${saker[3].forfatter}</b> <p>${saker[3].stilling}</p>
</div>
`;

const sak10 = document.querySelector("#sak10");
sak10.querySelector("h1").textContent = saker[0].tittel;
sak10.querySelector(".debatt-byline").innerHTML = `
<img src="${saker[0].bilde}" alt="Bilde av ${saker[0].forfatter}">
<div>
<b>${saker[3].forfatter}</b> <p>${saker[3].stilling}</p>
</div>
`;

const sak11 = document.querySelector("#sak11");
sak11.querySelector("h1").textContent = saker[1].tittel;
sak11.querySelector("h4").textContent = saker[1].stikktittel;
sak11.querySelector("img").src = saker[1].bilde;

const sak12 = document.querySelector("#sak12");
sak12.querySelector("h1").textContent = saker[2].tittel;
sak12.querySelector("img").src = saker[2].bilde;
sak12.querySelector("h4").textContent = saker[2].stikktittel;

const sak13 = document.querySelector("#sak13");
sak13.querySelector("h1").textContent = saker[3].tittel;
sak13.querySelector("img").src = saker[3].bilde;
sak13.querySelector("h4").textContent = saker[3].stikktittel;

const sak14 = document.querySelector("#sak14");
sak14.querySelector("h1").textContent = saker[4].tittel;
sak14.querySelector("img").src = saker[4].bilde;
sak14.querySelector("h4").textContent = saker[4].stikktittel;

const sak15 = document.querySelector("#sak15");
sak15.querySelector("h1").textContent = saker[0].tittel;
sak15.querySelector("img").src = saker[0].bilde;
sak15.querySelector("h4").textContent = saker[0].stikktittel;

const sak16 = document.querySelector("#sak16");
sak16.querySelector("h1").textContent = saker[1].tittel;
sak16.querySelector("img").src = saker[1].bilde;
sak16.querySelector("h4").textContent = saker[1].stikktittel;

const sak17 = document.querySelector("#sak17");
sak17.querySelector("h1").textContent = saker[2].tittel;
sak17.querySelector("img").src = saker[2].bilde;
sak17.querySelector("p").textContent = saker[2].stikktittel;

const sak18 = document.querySelector("#sak18");
sak18.querySelector("h1").textContent = saker[3].tittel;
sak18.querySelector("img").src = saker[3].bilde;
sak18.querySelector("h4").textContent = saker[3].stikktittel;

const sak19 = document.querySelector("#sak19");
sak19.querySelector("h1").textContent = saker[4].tittel;
sak19.querySelector("img").src = saker[4].bilde;
sak19.querySelector("h4").textContent = saker[4].stikktittel;

const sak20 = document.querySelector("#sak20");
sak20.querySelector("h1").textContent = saker[0].tittel;
sak20.querySelector("img").src = saker[0].bilde;
sak20.querySelector("h4").textContent = saker[0].stikktittel;

const sak21 = document.querySelector("#sak21");
sak21.querySelector("h1").textContent = saker[1].tittel;
sak21.querySelector("img").src = saker[1].bilde;
sak21.querySelector("h4").textContent = saker[1].stikktittel;

const sak22 = document.querySelector("#sak22");
sak22.querySelector("h1").textContent = saker[2].tittel;
sak22.querySelector("img").src = saker[2].bilde;
sak22.querySelector("h4").textContent = saker[2].stikktittel;

const sak23 = document.querySelector("#sak23");
sak23.querySelector("h1").textContent = saker[3].tittel;
sak23.querySelector("img").src = saker[3].bilde;
sak23.querySelector("h4").textContent = saker[3].stikktittel;

const sak24 = document.querySelector("#sak24");
sak24.querySelector("h1").textContent = saker[4].tittel;
sak24.querySelector("img").src = saker[4].bilde;
sak24.querySelector("h4").textContent = saker[4].stikktittel;

const sak25 = document.querySelector("#sak25");
sak25.querySelector("h1").textContent = saker[0].tittel;
sak25.querySelector("img").src = saker[0].bilde;
sak25.querySelector("h4").textContent = saker[0].stikktittel;

const sak26 = document.querySelector("#sak26");
sak26.querySelector("h1").textContent = saker[1].tittel;
sak26.querySelector("img").src = saker[1].bilde;
sak26.querySelector("h4").textContent = saker[1].stikktittel;

const sak27 = document.querySelector("#sak27");
sak27.querySelector("h1").textContent = saker[2].tittel;
sak27.querySelector("img").src = saker[2].bilde;
sak27.querySelector("h4").textContent = saker[2].stikktittel;

const sak28 = document.querySelector("#sak28");
sak28.querySelector("h1").textContent = saker[3].tittel;
sak28.querySelector("img").src = saker[3].bilde;
sak28.querySelector("h4").textContent = saker[3].stikktittel;

const sak29 = document.querySelector("#sak29");
sak29.querySelector("h1").textContent = saker[4].tittel;
sak29.querySelector("img").src = saker[4].bilde;
sak29.querySelector("h4").textContent = saker[4].stikktittel;

const sak30 = document.querySelector("#sak30");
sak30.querySelector("h1").textContent = saker[0].tittel;
sak30.querySelector("img").src = saker[0].bilde;
sak30.querySelector("h4").textContent = saker[0].stikktittel;

const sak31 = document.querySelector("#sak31");
sak31.querySelector("h1").textContent = saker[1].tittel;
sak31.querySelector("img").src = saker[1].bilde;
sak31.querySelector("h4").textContent = saker[1].stikktittel;

const sak32 = document.querySelector("#sak32");
sak32.querySelector("h1").textContent = saker[2].tittel;
sak32.querySelector("img").src = saker[2].bilde;
sak32.querySelector("h4").textContent = saker[2].stikktittel;

const sak33 = document.querySelector("#sak33");
sak33.querySelector("h1").textContent = saker[3].tittel;
sak33.querySelector("img").src = saker[3].bilde;
sak33.querySelector("h4").textContent = saker[3].stikktittel;

const sak34 = document.querySelector("#sak34");
sak34.querySelector("h1").textContent = saker[4].tittel;
sak34.querySelector("img").src = saker[4].bilde;
sak34.querySelector("p").textContent = saker[4].stikktittel;

const strip = document.querySelector("#strip");
strip.querySelector("h1").textContent = saker[0].tittel;
strip.querySelector("img").src = saker[0].bilde;
strip.querySelector("h4").textContent = saker[0].stikktittel;

const sak35 = document.querySelector("#sak35");
sak35.querySelector("h1").textContent = saker[1].tittel;
sak35.querySelector("img").src = saker[1].bilde;
sak35.querySelector("h4").textContent = saker[1].stikktittel;

const sak36 = document.querySelector("#sak36");
sak36.querySelector("h1").textContent = saker[2].tittel;
sak36.querySelector("img").src = saker[2].bilde;
sak36.querySelector("h4").textContent = saker[2].stikktittel;

const sak37 = document.querySelector("#sak37");
sak37.querySelector("h1").textContent = saker[3].tittel;
sak37.querySelector("img").src = saker[3].bilde;
sak37.querySelector("h4").textContent = saker[3].stikktittel;

const sak38 = document.querySelector("#sak38");
sak38.querySelector("h1").textContent = saker[4].tittel;
sak38.querySelector("img").src = saker[4].bilde;
sak38.querySelector("h4").textContent = saker[4].stikktittel;

const sak39 = document.querySelector("#sak39");
sak39.querySelector("h1").textContent = saker[0].tittel;
sak39.querySelector("img").src = saker[0].bilde;
sak39.querySelector("h4").textContent = saker[0].stikktittel;

const sak40 = document.querySelector("#sak40");
sak40.querySelector("h1").textContent = saker[1].tittel;
sak40.querySelector("img").src = saker[1].bilde;
sak40.querySelector("h4").textContent = saker[1].stikktittel;

const sak41 = document.querySelector("#sak41");
sak41.querySelector("h1").textContent = saker[2].tittel;
sak41.querySelector("img").src = saker[2].bilde;
sak41.querySelector("h4").textContent = saker[2].stikktittel;

const sak42 = document.querySelector("#sak42");
sak42.querySelector("h1").textContent = saker[3].tittel;
sak42.querySelector("img").src = saker[3].bilde;
sak42.querySelector("h4").textContent = saker[3].stikktittel;

const sak43 = document.querySelector("#sak43");
sak43.querySelector("h1").textContent = saker[4].tittel;
sak43.querySelector("img").src = saker[4].bilde;
sak43.querySelector("h4").textContent = saker[4].stikktittel;

const sak44 = document.querySelector("#sak44");
sak44.querySelector("h1").textContent = saker[0].tittel;
sak44.querySelector("img").src = saker[0].bilde;
sak44.querySelector("h4").textContent = saker[0].stikktittel;
