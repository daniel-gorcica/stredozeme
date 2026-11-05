const places = [
  { id: 'shire', name: 'Kraj', region: 'Západní země', x: 21, y: 19, symbol: '❧', description: 'Zelená, pokojná země hobitů, kde začala výprava za záchranou celého světa.', events: ['Frodo převzal Jeden prsten', 'Společenstvo vyrazilo z Dna pytle'], characters: ['Frodo', 'Sam', 'Bilbo', 'Gandalf'], distance: 0 },
  { id: 'bree', name: 'Bree', region: 'Rozcestí poutníků', x: 27, y: 34, symbol: '✦', description: 'Rušné městečko na hranici Kraje, kde se cesty hobitů poprvé spojily s velkým světem.', events: ['Hobiti se setkali s Aragornem', 'Prsten byl ukryt před Černými jezdci'], characters: ['Frodo', 'Sam', 'Smíšek', 'Pipin', 'Chodec'], distance: 140 },
  { id: 'weathertop', name: 'Větrov', region: 'Amon Sûl', x: 34, y: 43, symbol: '△', description: 'Ruiny dávné věže, kde se Společenstvo střetlo s Černými jezdci.', events: ['Frodo byl zraněn Morgulskou čepelí', 'Aragorn zahnal Nazgûly'], characters: ['Frodo', 'Aragorn', 'Nazgûlové'], distance: 270 },
  { id: 'rivendell', name: 'Roklinka', region: 'Skryté údolí', x: 39, y: 20, symbol: '✧', description: 'Poslední útulný dům na východ od Moře a místo, kde se rozhodlo o osudu Prstenu.', events: ['Rada Elronda rozhodla o osudu Prstenu', 'Bylo založeno Společenstvo prstenu'], characters: ['Elrond', 'Arwen', 'Frodo', 'Aragorn'], distance: 458 },
  { id: 'moria', name: 'Morie', region: 'Doly trpaslíků', x: 48, y: 50, symbol: '◆', description: 'Kdysi největší království trpaslíků, dnes plné stínů a ozvěn dávno padlého Durinova rodu.', events: ['Společenstvo prošlo Khazad-dûm', 'Gandalf se utkal s Balrogem'], characters: ['Gandalf', 'Gimli', 'Aragorn', 'Legolas'], distance: 750 },
  { id: 'lorien', name: 'Lothlórien', region: 'Zlatý les', x: 53, y: 55, symbol: '❈', description: 'Zlatý les pod ochranou Galadriel a Celeborna, kde čas plyne jinak.', events: ['Společenstvo nalezlo útočiště u Galadriel', 'Galadriel darovala výpravě dary'], characters: ['Galadriel', 'Celeborn', 'Frodo', 'Sam'], distance: 1020 },
  { id: 'fangorn', name: 'Fangorn', region: 'Starý les', x: 58, y: 47, symbol: '♣', description: 'Prastarý les, v jehož stínu se probudili entové.', events: ['Smíšek a Pipin potkali Stromovouse', 'Enti zaútočili na Železný pas'], characters: ['Stromovous', 'Smíšek', 'Pipin'], distance: 1180 },
  { id: 'edoras', name: 'Edoras', region: 'Země Rohanu', x: 62, y: 43, symbol: '♞', description: 'Hlavní město Rohanu vystavěné na kopci pod Bílými horami.', events: ['Theoden byl osvobozen od Grímy', 'Rohan se připravil na válku'], characters: ['Theoden', 'Éowyn', 'Aragorn', 'Gandalf'], distance: 1430 },
  { id: 'helm', name: 'Helmův žleb', region: 'Pevnost Rohanu', x: 60, y: 54, symbol: '⚔', description: 'Mohutná pevnost v průsmyku, kde se Rohan postavil Sarumanově armádě.', events: ['Bitva o Helmův žleb', 'Gandalf přivedl posily za úsvitu'], characters: ['Aragorn', 'Gimli', 'Legolas', 'Theoden'], distance: 1580 },
  { id: 'isengard', name: 'Železný pas', region: 'Sarumanova věž', x: 57, y: 55, symbol: '▣', description: 'Pevnost Sarumana, obklopená průmyslem a armádami skřetů.', events: ['Enti prolomili Isengard', 'Saruman přišel o svou moc'], characters: ['Saruman', 'Gandalf', 'Stromovous'], distance: 1710 },
  { id: 'gondor', name: 'Minas Tirith', region: 'Bílé město', x: 69, y: 76, symbol: '♜', description: 'Sedm kruhů Bílého města, poslední velká hradba proti stínům Mordoru.', events: ['Bitva na Pelennorských polích', 'Aragorn byl korunován králem'], characters: ['Aragorn', 'Pippin', 'Gandalf', 'Faramir'], distance: 2100 },
  { id: 'osgiliath', name: 'Osgiliath', region: 'Ruiny Gondoru', x: 76, y: 70, symbol: '◇', description: 'Rozpadlé město na řece Anduin, poslední překážka před Mordorem.', events: ['Faramir bránil město', 'Frodo se Samem přešli ruiny'], characters: ['Faramir', 'Frodo', 'Sam'], distance: 2310 },
  { id: 'cirith-ungol', name: 'Cirith Ungol', region: 'Průsmyk pavouka', x: 78, y: 60, symbol: '☍', description: 'Nebezpečný průsmyk nad Mordorem, střežený obřím pavoukem.', events: ['Sheloba napadla Froda', 'Sam nesl Prsten dál'], characters: ['Frodo', 'Sam', 'Sheloba'], distance: 2510 },
  { id: 'mordor', name: 'Mordor', region: 'Země stínu', x: 84, y: 72, symbol: '◈', description: 'Spálená země, v jejímž srdci hoří Orodruina.', events: ['Frodo a Sam vstoupili do země stínu', 'Prsten byl zničen v Hoře osudu'], characters: ['Frodo', 'Sam', 'Glum', 'Sauron'], distance: 2800 }
];
const totalDistance = 2800;
const markers = document.querySelector('#map-markers');
const routeLine = document.querySelector('#journey-route-line');
const journeyStops = document.querySelector('#journey-stops');
const placesList = document.querySelector('#places-list');
const marker = document.querySelector('#traveller-marker');
const distanceInput = document.querySelector('#distance-input');
const distanceRange = document.querySelector('#distance-range');
const progressBar = document.querySelector('#progress-bar');
const progressValue = document.querySelector('#progress-value');
const progressPercent = document.querySelector('#progress-percent');
const locationOutput = document.querySelector('#current-location');
let unit = 'km';
const journeyStep = 10;
const routePoints = [
  { distance: 0, x: 21, y: 19 },
  { distance: 70, x: 24, y: 20 },
  { distance: 140, x: 27, y: 34 },
  { distance: 210, x: 31, y: 39 },
  { distance: 270, x: 34, y: 43 },
  { distance: 360, x: 37, y: 32 },
  { distance: 458, x: 39, y: 20 },
  { distance: 560, x: 43, y: 35 },
  { distance: 650, x: 46, y: 44 },
  { distance: 750, x: 48, y: 50 },
  { distance: 860, x: 51, y: 53 },
  { distance: 1020, x: 53, y: 55 },
  { distance: 1120, x: 56, y: 50 },
  { distance: 1180, x: 58, y: 47 },
  { distance: 1300, x: 60, y: 44 },
  { distance: 1430, x: 62, y: 43 },
  { distance: 1530, x: 61, y: 49 },
  { distance: 1580, x: 60, y: 54 },
  { distance: 1710, x: 57, y: 55 },
  { distance: 1870, x: 61, y: 63 },
  { distance: 2100, x: 69, y: 76 },
  { distance: 2210, x: 73, y: 73 },
  { distance: 2310, x: 76, y: 70 },
  { distance: 2430, x: 78, y: 65 },
  { distance: 2510, x: 78, y: 60 },
  { distance: 2610, x: 81, y: 65 },
  { distance: 2700, x: 83, y: 69 },
  { distance: 2800, x: 84, y: 72 }
];

function renderJourneyRoute() {
  routeLine.setAttribute('points', routePoints.map(point => `${point.x},${point.y}`).join(' '));
}

function renderJourneyStops() {
  journeyStops.replaceChildren(...places.map(place => {
    const stop = document.createElement('span');
    stop.className = 'journey-stop';
    stop.style.left = `${place.distance / totalDistance * 100}%`;
    stop.title = place.name;
    return stop;
  }));
}

function getJourneyPosition(distance) {
  const nextIndex = routePoints.findIndex(point => point.distance >= distance);
  if (nextIndex <= 0) return routePoints[0];
  if (nextIndex === -1) return routePoints[routePoints.length - 1];

  const start = routePoints[nextIndex - 1];
  const end = routePoints[nextIndex];
  const segmentProgress = (distance - start.distance) / (end.distance - start.distance);
  return {
    x: start.x + (end.x - start.x) * segmentProgress,
    y: start.y + (end.y - start.y) * segmentProgress
  };
}

function renderPlaces() {
  places.forEach(place => {
    const mapButton = document.createElement('button');
    mapButton.className = 'map-marker';
    mapButton.style.left = `${place.x}%`;
    mapButton.style.top = `${place.y}%`;
    mapButton.dataset.place = place.id;
    mapButton.setAttribute('aria-label', `Otevřít detail: ${place.name}`);
    mapButton.innerHTML = `<span class="pin">${place.symbol}</span><span class="marker-name">${place.name}</span>`;
    mapButton.addEventListener('click', () => openPlace(place.id));
    markers.append(mapButton);

    const listButton = document.createElement('button');
    listButton.className = 'place-list-item';
    listButton.dataset.place = place.id;
    listButton.innerHTML = `<span class="tiny-pin"></span><span><strong>${place.name}</strong><small>${place.region}</small></span>`;
    listButton.addEventListener('click', () => openPlace(place.id));
    placesList.append(listButton);
  });
}

function openPlace(id) {
  const place = places.find(item => item.id === id);
  if (!place) return;
  document.querySelector('#dialog-symbol').textContent = place.symbol;
  document.querySelector('#dialog-region').textContent = place.region;
  document.querySelector('#dialog-title').textContent = place.name;
  document.querySelector('#dialog-description').textContent = place.description;
  document.querySelector('#dialog-events').innerHTML = place.events.map(event => `<li>${event}</li>`).join('');
  document.querySelector('#dialog-characters').innerHTML = place.characters.map(character => `<span>${character}</span>`).join('');
  document.querySelectorAll('[data-place]').forEach(element => element.classList.toggle('active', element.dataset.place === id));
  document.querySelector('#place-dialog').showModal();
}

function updateJourney(value, snapToStop = false) {
  const clampedKm = Math.min(Math.max(value, 0), totalDistance);
  const boundedKm = snapToStop
    ? places.reduce((nearest, place) => Math.abs(place.distance - clampedKm) < Math.abs(nearest.distance - clampedKm) ? place : nearest).distance
    : Math.round(clampedKm / journeyStep) * journeyStep;
  const percent = boundedKm / totalDistance * 100;
  const location = [...places].reverse().find(place => boundedKm >= place.distance) || places[0];
  distanceInput.value = unit === 'steps' ? Math.round(boundedKm * 1400) : Math.round(boundedKm);
  distanceRange.value = Math.round(boundedKm);
  progressValue.textContent = `${Math.round(boundedKm).toLocaleString('cs-CZ')} km`;
  progressPercent.textContent = `${Math.round(percent)} % výpravy`;
  progressBar.style.width = `${percent}%`;
  locationOutput.textContent = location.name;
  marker.hidden = false;
  const journeyPosition = getJourneyPosition(boundedKm);
  marker.style.left = `${journeyPosition.x}%`;
  marker.style.top = `${journeyPosition.y}%`;
}

function setUnit(nextUnit) {
  unit = nextUnit;
  document.querySelectorAll('.unit-toggle button').forEach(button => button.classList.toggle('selected', button.dataset.unit === unit));
  document.querySelector('#unit-label').textContent = unit === 'steps' ? '(kroky)' : '(km)';
  document.querySelector('#input-suffix').textContent = unit === 'steps' ? 'kroků' : 'km';
  document.querySelector('.range-labels span:first-child').textContent = unit === 'steps' ? '0 kroků' : '0 km';
  document.querySelector('.range-labels span:last-child').textContent = unit === 'steps' ? '3,9 mil. kroků' : 'Hora osudu';
  updateJourney(Number(distanceRange.value));
}

renderPlaces();
renderJourneyRoute();
renderJourneyStops();
document.querySelector('.dialog-close').addEventListener('click', () => document.querySelector('#place-dialog').close());
document.querySelector('#place-dialog').addEventListener('click', event => { if (event.target === event.currentTarget) event.currentTarget.close(); });
document.querySelectorAll('.unit-toggle button').forEach(button => button.addEventListener('click', () => setUnit(button.dataset.unit)));
distanceInput.addEventListener('input', () => updateJourney(Number(distanceInput.value) * (unit === 'steps' ? 1 / 1400 : 1)));
distanceRange.addEventListener('input', () => updateJourney(Number(distanceRange.value), true));
document.querySelector('#reset-journey').addEventListener('click', () => updateJourney(0));
document.querySelector('#add-entry').addEventListener('click', () => {
  const text = window.prompt('Co sis dnes zapsal do deníku?');
  if (!text || !text.trim()) return;
  const entry = document.createElement('article');
  entry.className = 'journal-card';
  entry.innerHTML = `<span class="journal-date">Nový zápis · právě teď</span><h3>Moje cesta</h3><p>„${text.trim().replace(/[<>]/g, '')}“</p><span class="journal-author">— Já</span>`;
  document.querySelector('#journal-grid').prepend(entry);
});
document.querySelector('.menu-button').addEventListener('click', event => {
  const expanded = event.currentTarget.getAttribute('aria-expanded') === 'true';
  event.currentTarget.setAttribute('aria-expanded', String(!expanded));
  document.querySelector('.main-nav').style.display = expanded ? '' : 'flex';
});
updateJourney(0);
