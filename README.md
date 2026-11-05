# Atlas Středozemě

Interaktivní mapa Středozemě s deníkem výpravy a kalkulačkou cesty do Mordoru.

## Spuštění

Projekt nevyžaduje instalaci ani build. Otevři [index.html](./index.html) v prohlížeči. Pro pohodlný vývoj lze použít libovolný lokální statický server.

## Ovládání

- Kliknutím na bod v mapě nebo místo v pravém seznamu se otevře detail lokace.
- Kalkulačka „Jak daleko jsi došel?“ podporuje kilometry i kroky. Jeden kilometr odpovídá přibližně 1 400 krokům.
- Posuvník i vstupní pole posouvají značku poutníka po trase dlouhé 2 800 km.
- V části Deník výpravy lze tlačítkem přidat vlastní zápis; zápis zůstává v aktuálním běhu stránky.

## Struktura

- `index.html` – sémantické rozvržení aplikace a SVG mapa
- `styles.css` – fantasy vizuál, responzivní layout a dialog
- `script.js` – data míst, interakce mapy, dialog, kalkulačka a deník

## Mapový podklad

Detailní podklad `middle-earth-map.svg` vytvořil k1tesurfen a je převzat z repozitáře
[k1tesurfen/mapome](https://github.com/k1tesurfen/mapome) pod licencí
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). V aplikaci je uveden autor
i licence přímo pod mapou.

Dekorativní obrázek prstenu `gold-ring.png` pochází z [Openclipart](https://openclipart.org/detail/229221/gold-ring)
a je použit pod jejich volnou licencí.