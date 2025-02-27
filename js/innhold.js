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
toppsak.href = saker[0].url;
toppsak.querySelector("h1").textContent = saker[0].tittel;
toppsak.querySelector("h4").textContent = saker[0].stikktittel;
toppsak.querySelector("img").src = saker[0].bilde;

const nyhet1 = document.querySelector("#nyhet1");
nyhet1.href = saker[1].url;
nyhet1.querySelector("h1").textContent = saker[1].tittel;
nyhet1.querySelector("h4").textContent = saker[1].stikktittel;
nyhet1.querySelector("img").src = saker[1].bilde;

const nyhet2 = document.querySelector("#nyhet2");
nyhet2.href = saker[2].url;
nyhet2.querySelector("h1").textContent = saker[2].tittel;
nyhet2.querySelector("h4").textContent = saker[2].stikktittel;
nyhet2.querySelector("img").src = saker[2].bilde;

const nyhet3 = document.querySelector("#nyhet3");
nyhet3.href = saker[3].url;
nyhet3.querySelector("h1").textContent = saker[3].tittel;
nyhet3.querySelector("h4").textContent = saker[3].stikktittel;
nyhet3.querySelector("img").src = saker[3].bilde;

const nyhet4 = document.querySelector("#nyhet4");
nyhet4.href = saker[4].url;
nyhet4.querySelector("h1").textContent = saker[4].tittel;
nyhet4.querySelector("h4").textContent = saker[4].stikktittel;
nyhet4.querySelector("img").src = saker[4].bilde;

const nyhet5 = document.querySelector("#nyhet5");
nyhet5.href = saker[0].url;
nyhet5.querySelector("h1").textContent = saker[0].tittel;
nyhet5.querySelector("h4").textContent = saker[0].stikktittel;
nyhet5.querySelector("img").src = saker[0].bilde;

const debatt1 = document.querySelector("#debatt1");
debatt1.href = saker[2].url;
debatt1.querySelector("h1").textContent = saker[2].tittel;
debatt1.querySelector("img").src = saker[2].bilde;
debatt1.querySelector("p").textContent = saker[2].tema;

const debatt2 = document.querySelector("#debatt2");
debatt2.href = saker[3].url;
debatt2.querySelector("h1").textContent = saker[3].tittel;
debatt2.querySelector("img").src = saker[3].bilde;
debatt2.querySelector("p").textContent = saker[3].tema;

const debatt3 = document.querySelector("#debatt3");
debatt3.href = saker[4].url;
debatt3.querySelector("h1").textContent = saker[4].tittel;
debatt3.querySelector("img").src = saker[4].bilde;
debatt3.querySelector("p").textContent = saker[4].tema;

const debatt4 = document.querySelector("#debatt4");
debatt4.href = saker[0].url;
debatt4.querySelector("h1").textContent = saker[0].tittel;
debatt4.querySelector("img").src = saker[0].bilde;
debatt4.querySelector("p").textContent = saker[0].tema;

const debatt5 = document.querySelector("#debatt5");
debatt5.href = saker[1].url;
debatt5.querySelector("h1").textContent = saker[1].tittel;
debatt5.querySelector("img").src = saker[1].bilde;
debatt5.querySelector("p").textContent = saker[1].tema;

const debatt6 = document.querySelector("#debatt6");
debatt6.href = saker[2].url;
debatt6.querySelector("h1").textContent = saker[2].tittel;
debatt6.querySelector("img").src = saker[2].bilde;
debatt6.querySelector("p").textContent = saker[2].tema;

const debatt7 = document.querySelector("#debatt7");
debatt7.href = saker[3].url;
debatt7.querySelector("h1").textContent = saker[3].tittel;
debatt7.querySelector("p").textContent = saker[3].tema;
debatt7.querySelector(".debatt-byline").innerHTML = `
<img src="${saker[3].bilde}" alt="Bilde av ${saker[3].forfatter}">
<div>
<b>${saker[3].forfatter}</b> <p>${saker[3].stilling}</p>
</div>
`;

const debatt8 = document.querySelector("#debatt8");
debatt8.href = saker[4].url;
debatt8.querySelector("h1").textContent = saker[4].tittel;
debatt8.querySelector("p").textContent = saker[4].tema;
debatt8.querySelector(".debatt-byline").innerHTML = `
<img src="${saker[4].bilde}" alt="Bilde av ${saker[4].forfatter}">
<div>
<b>${saker[3].forfatter}</b> <p>${saker[3].stilling}</p>
</div>
`;

const debatt9 = document.querySelector("#debatt9");
debatt9.href = saker[0].url;
debatt9.querySelector("h1").textContent = saker[0].tittel;
debatt9.querySelector("p").textContent = saker[0].tema;
debatt9.querySelector(".debatt-byline").innerHTML = `
<img src="${saker[0].bilde}" alt="Bilde av ${saker[0].forfatter}">
<div>
<b>${saker[3].forfatter}</b> <p>${saker[3].stilling}</p>
</div>
`;

const debatt10 = document.querySelector("#debatt10");
debatt10.href = saker[1].url;
debatt10.querySelector("h1").textContent = saker[1].tittel;
debatt10.querySelector("p").textContent = saker[1].tema;
debatt10.querySelector(".debatt-byline").innerHTML = `
<img src="${saker[1].bilde}" alt="Bilde av ${saker[1].forfatter}">
<div>
<b>${saker[3].forfatter}</b> <p>${saker[3].stilling}</p>
</div>
`;

const debatt11 = document.querySelector("#debatt11");
debatt11.href = saker[2].url;
debatt11.querySelector("h1").textContent = saker[2].tittel;
debatt11.querySelector("p").textContent = saker[2].tema;
debatt11.querySelector(".debatt-byline").innerHTML = `
<img src="${saker[2].bilde}" alt="Bilde av ${saker[2].forfatter}">
<div>
<b>${saker[3].forfatter}</b> <p>${saker[3].stilling}</p>
</div>
`;

const debatt12 = document.querySelector("#debatt12");
debatt12.href = saker[3].url;
debatt12.querySelector("h1").textContent = saker[3].tittel;
debatt12.querySelector("p").textContent = saker[3].tema;
debatt12.querySelector(".debatt-byline").innerHTML = `
<img src="${saker[3].bilde}" alt="Bilde av ${saker[3].forfatter}">
<div>
<b>${saker[3].forfatter}</b> <p>${saker[3].stilling}</p>
</div>
`;

const rorsla1 = document.querySelector("#rorsla1");
rorsla1.href = saker[0].url;
rorsla1.querySelector("h1").textContent = saker[0].tittel;
rorsla1.querySelector("img").src = saker[0].bilde;
rorsla1.querySelector("p").textContent = saker[0].stikktittel;

const rorsla2 = document.querySelector("#rorsla2");
rorsla2.href = saker[1].url;
rorsla2.querySelector("h1").textContent = saker[1].tittel;
rorsla2.querySelector("img").src = saker[1].bilde;
rorsla2.querySelector("p").textContent = saker[1].stikktittel;

const rorsla3 = document.querySelector("#rorsla3");
rorsla3.href = saker[2].url;
rorsla3.querySelector("h1").textContent = saker[2].tittel;
rorsla3.querySelector("img").src = saker[2].bilde;
rorsla3.querySelector("p").textContent = saker[2].stikktittel;

const rorsla4 = document.querySelector("#rorsla4");
rorsla4.href = saker[3].url;
rorsla4.querySelector("h1").textContent = saker[3].tittel;
rorsla4.querySelector("img").src = saker[3].bilde;
rorsla4.querySelector("p").textContent = saker[3].stikktittel;

const rorsla5 = document.querySelector("#rorsla5");
rorsla5.href = saker[4].url;
rorsla5.querySelector("h1").textContent = saker[4].tittel;
rorsla5.querySelector("img").src = saker[4].bilde;
rorsla5.querySelector("p").textContent = saker[4].stikktittel;

const rorsla6 = document.querySelector("#rorsla6");
rorsla6.href = saker[0].url;
rorsla6.querySelector("h1").textContent = saker[0].tittel;
rorsla6.querySelector("img").src = saker[0].bilde;
rorsla6.querySelector("p").textContent = saker[0].stikktittel;

const reportasje1 = document.querySelector("#reportasje1");
reportasje1.href = saker[2].url;
reportasje1.querySelector("h1").textContent = saker[2].tittel;
reportasje1.querySelector("img").src = saker[2].bilde;
reportasje1.querySelector("p").textContent = saker[2].stikktittel;

const reportasje2 = document.querySelector("#reportasje2");
reportasje2.href = saker[3].url;
reportasje2.querySelector("h1").textContent = saker[3].tittel;
reportasje2.querySelector("img").src = saker[3].bilde;
reportasje2.querySelector("p").textContent = saker[3].stikktittel;

const reportasje3 = document.querySelector("#reportasje3");
reportasje3.href = saker[4].url;
reportasje3.querySelector("h1").textContent = saker[4].tittel;
reportasje3.querySelector("img").src = saker[4].bilde;
reportasje3.querySelector("p").textContent = saker[4].stikktittel;

const reportasje4 = document.querySelector("#reportasje4");
reportasje4.href = saker[0].url;
reportasje4.querySelector("h1").textContent = saker[0].tittel;
reportasje4.querySelector("img").src = saker[0].bilde;
reportasje4.querySelector("p").textContent = saker[0].stikktittel;

const reportasje5 = document.querySelector("#reportasje5");
reportasje5.href = saker[1].url;
reportasje5.querySelector("h1").textContent = saker[1].tittel;
reportasje5.querySelector("img").src = saker[1].bilde;
reportasje5.querySelector("p").textContent = saker[1].stikktittel;

const reportasje6 = document.querySelector("#reportasje6");
reportasje6.href = saker[2].url;
reportasje6.querySelector("h1").textContent = saker[2].tittel;
reportasje6.querySelector("img").src = saker[2].bilde;
reportasje6.querySelector("p").textContent = saker[2].stikktittel;

const spesial1 = document.querySelector("#spesial1");
spesial1.href = saker[3].url;
spesial1.querySelector("h1").textContent = saker[3].tittel;
spesial1.querySelector("img").src = saker[3].bilde;
spesial1.querySelector("h4").textContent = saker[3].stikktittel;

const spesial2 = document.querySelector("#spesial2");
spesial2.href = saker[4].url;
spesial2.querySelector("h1").textContent = saker[4].tittel;
spesial2.querySelector("img").src = saker[4].bilde;
spesial2.querySelector("h4").textContent = saker[4].stikktittel;

const spesial3 = document.querySelector("#spesial3");
spesial3.href = saker[0].url;
spesial3.querySelector("h1").textContent = saker[0].tittel;
spesial3.querySelector("img").src = saker[0].bilde;
spesial3.querySelector("h4").textContent = saker[0].stikktittel;

const spesial4 = document.querySelector("#spesial4");
spesial4.href = saker[1].url;
spesial4.querySelector("h1").textContent = saker[1].tittel;
spesial4.querySelector("img").src = saker[1].bilde;
spesial4.querySelector("h4").textContent = saker[1].stikktittel;

const spesial5 = document.querySelector("#spesial5");
spesial5.href = saker[2].url;
spesial5.querySelector("h1").textContent = saker[2].tittel;
spesial5.querySelector("img").src = saker[2].bilde;
spesial5.querySelector("h4").textContent = saker[2].stikktittel;

const spesial6 = document.querySelector("#spesial6");
spesial6.href = saker[3].url;
spesial6.querySelector("h1").textContent = saker[3].tittel;
spesial6.querySelector("img").src = saker[3].bilde;
spesial6.querySelector("h4").textContent = saker[3].stikktittel;
