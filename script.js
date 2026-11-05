const places = [
  { id: 'shire', name: 'Kraj', region: 'Západní země', x: 31, y: 30, symbol: '❧', description: 'Zelená, pokojná země hobitů, kde začala výprava za záchranou celého světa.', events: ['Frodo převzal Jeden prsten', 'Frodo a jeho přátelé opustili Kraj'], characters: ['Frodo', 'Sam', 'Bilbo', 'Gandalf'] },
  { id: 'bree', name: 'Bree', region: 'Rozcestí poutníků', x: 37.8, y: 28.4, symbol: '✦', description: 'Rušné městečko na hranici Kraje, kde se cesty hobitů poprvé spojily s velkým světem.', events: ['Hobiti se setkali s Aragornem', 'Hobiti unikli pátrání Černých jezdců'], characters: ['Frodo', 'Sam', 'Smíšek', 'Pipin', 'Chodec'] },
  { id: 'weathertop', name: 'Větrov', region: 'Amon Sûl', x: 40.4, y: 28.3, symbol: '△', description: 'Ruiny dávné věže, kde Černí jezdci napadli hobity a Aragorna.', events: ['Frodo byl zraněn Morgulskou čepelí', 'Aragorn zahnal Nazgûly'], characters: ['Frodo', 'Aragorn', 'Nazgûlové'] },
  { id: 'rivendell', name: 'Roklinka', region: 'Skryté údolí', x: 49.5, y: 23, symbol: '✧', description: 'Poslední útulný dům na východ od Moře a místo, kde se rozhodlo o osudu Prstenu.', events: ['Rada Elronda rozhodla o osudu Prstenu', 'Bylo založeno Společenstvo prstenu'], characters: ['Elrond', 'Arwen', 'Frodo', 'Aragorn'] },
  { id: 'moria', name: 'Morie', region: 'Doly trpaslíků', x: 50.8, y: 38.2, symbol: '◆', description: 'Kdysi největší království trpaslíků, dnes plné stínů a ozvěn dávno padlého Durinova rodu.', events: ['Společenstvo prošlo Khazad-dûm', 'Gandalf se utkal s Balrogem'], characters: ['Gandalf', 'Gimli', 'Aragorn', 'Legolas'] },
  { id: 'lorien', name: 'Lothlórien', region: 'Zlatý les', x: 54, y: 40.2, symbol: '❈', description: 'Zlatý les pod ochranou Galadriel a Celeborna, kde čas plyne jinak.', events: ['Společenstvo nalezlo útočiště u Galadriel', 'Galadriel darovala výpravě dary'], characters: ['Galadriel', 'Celeborn', 'Frodo', 'Sam'] },
  { id: 'fangorn', name: 'Fangorn', region: 'Starý les', x: 50.3, y: 47.2, symbol: '♣', description: 'Prastarý les, v jehož stínu se probudili entové.', events: ['Smíšek a Pipin potkali Stromovouse', 'Enti zaútočili na Železný pas'], characters: ['Stromovous', 'Smíšek', 'Pipin'] },
  { id: 'edoras', name: 'Edoras', region: 'Země Rohanu', x: 54, y: 54.1, symbol: '♞', description: 'Hlavní město Rohanu vystavěné na kopci pod Bílými horami.', events: ['Theoden byl osvobozen od Grímy', 'Rohan se připravil na válku'], characters: ['Theoden', 'Éowyn', 'Aragorn', 'Gandalf'] },
  { id: 'helm', name: 'Helmův žleb', region: 'Pevnost Rohanu', x: 50.3, y: 54.3, symbol: '⚔', description: 'Mohutná pevnost v průsmyku, kde se Rohan postavil Sarumanově armádě.', events: ['Bitva o Helmův žleb', 'Gandalf přivedl posily za úsvitu'], characters: ['Aragorn', 'Gimli', 'Legolas', 'Theoden'] },
  { id: 'isengard', name: 'Železný pas', region: 'Sarumanova věž', x: 47, y: 52.2, symbol: '▣', description: 'Pevnost Sarumana, obklopená průmyslem a armádami skřetů.', events: ['Enti prolomili Isengard', 'Saruman přišel o svou moc'], characters: ['Saruman', 'Gandalf', 'Stromovous'] },
  { id: 'gondor', name: 'Minas Tirith', region: 'Bílé město', x: 63.3, y: 61.5, symbol: '♜', description: 'Sedm kruhů Bílého města, poslední velká hradba proti stínům Mordoru.', events: ['Bitva na Pelennorských polích', 'Aragorn byl korunován králem'], characters: ['Aragorn', 'Pipin', 'Gandalf', 'Faramir'] },
  { id: 'osgiliath', name: 'Osgiliath', region: 'Ruiny Gondoru', x: 65, y: 60.8, symbol: '◇', description: 'Rozpadlé město na řece Anduin, poslední překážka před Mordorem.', events: ['Faramir bránil město', 'Ve filmové verzi sem Faramir přivedl Froda a Sama'], characters: ['Faramir', 'Frodo', 'Sam'] },
  { id: 'cirith-ungol', name: 'Cirith Ungol', region: 'Průsmyk pavouka', x: 66.7, y: 62, symbol: '☍', description: 'Nebezpečný průsmyk nad Mordorem, střežený obřím pavoukem.', events: ['Sheloba napadla Froda', 'Sam zachránil Froda z věže'], characters: ['Frodo', 'Sam', 'Sheloba'] },
  { id: 'mordor', name: 'Mordor', region: 'Země stínu', x: 73, y: 63, symbol: '◈', description: 'Spálená země, v jejímž srdci hoří Orodruina.', events: ['Frodo a Sam vstoupili do země stínu', 'Prsten byl zničen v Hoře osudu'], characters: ['Frodo', 'Sam', 'Glum', 'Sauron'] }
];

'use strict';
const $ = selector => document.querySelector(selector);
const range = $('#location-range');
let selectedIndex = 0;
function textElement(tag, text, className) {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}
const markerButtons = [], listButtons = [];
places.forEach((place,index) => {
  const pin = document.createElement('button');
  pin.type = 'button';
  pin.className = 'map-marker';
  pin.style.left = place.x + '%';
  pin.style.top = place.y + '%';
  pin.setAttribute('aria-label', 'Vybrat místo: ' + place.name);
  pin.append(textElement('span',place.symbol,'pin'),textElement('span',place.name,'marker-name'));
  pin.addEventListener('click',()=>setLocation(index));
  $('#map-markers').append(pin);
  markerButtons.push(pin);
  const item = document.createElement('button');
  item.type='button'; item.className='place-list-item';
  const copy=document.createElement('span');
  copy.append(textElement('strong',place.name),textElement('small',place.region));
  item.append(textElement('span','','tiny-pin'),copy);
  item.addEventListener('click',()=>setLocation(index));
  $('#places-list').append(item); listButtons.push(item);
});
range.max = places.length - 1;
function setLocation(value) {
  selectedIndex = Math.max(0,Math.min(places.length-1,Math.round(Number(value)||0)));
  const place=places[selectedIndex];
  range.value=selectedIndex;
  range.setAttribute('aria-valuetext',place.name+'; zastávka '+(selectedIndex+1)+' ze '+places.length);
  $('#selected-location').textContent=place.name;
  $('#location-distance').textContent='Zastávka '+(selectedIndex+1)+' ze '+places.length;
  $('#detail-region').textContent=place.region;
  $('#location-title').textContent=place.name;
  $('#location-description').textContent=place.description;
  $('#location-events').replaceChildren(...place.events.map(event=>textElement('li',event)));
  $('#location-characters').textContent=place.characters.join(' · ');
  $('#location-count').textContent=(selectedIndex+1)+' / '+places.length;
  $('#previous-location').disabled=selectedIndex===0;
  $('#next-location').disabled=selectedIndex===places.length-1;
  markerButtons.forEach((button,index)=>{
    button.classList.toggle('active',index===selectedIndex);
    button.setAttribute('aria-pressed',String(index===selectedIndex));
    listButtons[index].classList.toggle('active',index===selectedIndex);
    listButtons[index].setAttribute('aria-pressed',String(index===selectedIndex));
  });
  const traveller=$('#traveller-marker');
  traveller.hidden=false; traveller.style.left=place.x+'%'; traveller.style.top=place.y+'%';
  traveller.setAttribute('aria-label','Vybrané místo: '+place.name);
}
range.addEventListener('input',event=>setLocation(event.target.value));
$('#previous-location').addEventListener('click',()=>setLocation(selectedIndex-1));
$('#next-location').addEventListener('click',()=>setLocation(selectedIndex+1));
setLocation(0);
const menu=$('.menu-button'), nav=$('.main-nav');
function closeMenu() { setMenu(false); }
function setMenu(open) {
  nav.classList.toggle('is-open',open);
  menu.setAttribute('aria-expanded',String(open));
  menu.setAttribute('aria-label',open?'Zavřít navigaci':'Otevřít navigaci');
}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
const navLinks=[...nav.querySelectorAll('a')];
navLinks.forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('click',event=>{if(!event.target.closest('.site-header')) closeMenu();});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&nav.classList.contains('is-open')) {closeMenu();menu.focus();}
});
window.matchMedia('(max-width:800px)').addEventListener('change',closeMenu);
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window) {
 const reveal=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');entry.target.classList.remove('reveal-pending');reveal.unobserve(entry.target);}});
 },{threshold:.08});
 if(!reducedMotion.matches) document.querySelectorAll('.section-heading,.map-frame,.places-panel,.location-detail,.sources-grid,.ai-disclosure').forEach(element=>{
  element.classList.add('reveal-pending');reveal.observe(element);
 });
 reducedMotion.addEventListener('change',event=>{
  if(event.matches){reveal.disconnect();document.querySelectorAll('.reveal-pending').forEach(element=>element.classList.remove('reveal-pending'));}
 });
 const sectionObserver=new IntersectionObserver(entries=>{
  const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!visible) return;
  navLinks.forEach(link=>{
   const active=link.hash==='#'+visible.target.id;
   link.classList.toggle('active',active);
   if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
  });
 },{rootMargin:'-10% 0px -35% 0px',threshold:[0,.2,.5]});
 navLinks.forEach(link=>{const target=$(link.hash);if(target)sectionObserver.observe(target);});
}
if(/^https?:$/.test(location.protocol)) {
 const url=new URL(location.href);url.hash='';url.search='';
 $('#validate-html').href='https://validator.w3.org/nu/?doc='+encodeURIComponent(url.href);
 $('#validate-css').href='https://jigsaw.w3.org/css-validator/validator?uri='+encodeURIComponent(url.href)+'&profile=css3svg';
}
