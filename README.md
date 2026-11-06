# Exerion — zamówienia publiczne i dla instytucji

Samodzielna strona statyczna HTML/CSS/JavaScript. Bez formularza, backendu, npm i zależności od Shoper. Zawiera lokalne zdjęcia, poprawki mobilne, karuzelę marek i rozwijane FAQ. Górne menu sekcji zostało usunięte.

## Publikacja

Na GitHub Pages: **Settings → Pages → Deploy from a branch → main → /(root)**. Plik `.nojekyll` pozwala publikować gotowe pliki statyczne.

Na innym hostingu statycznym: katalog publikacji to katalog główny repozytorium, polecenie budowania pozostaw puste. Prześlij `index.html`, `styles.css`, `script.js` oraz cały katalog `assets/`.

## Edycja

- `index.html`: teksty, kontakt, tytuł i opis SEO.
- `styles.css`: wygląd i układ mobilny.
- `script.js`: przewijanie logotypów przyciskami i klawiaturą.
- `assets/`: wszystkie zdjęcia i logotypy używane na stronie.

Kontakt: kontakt@exerion.pl, +48 608 662 334. Linki produktowe prowadzą do sklepu Exerion; zdjęcia są serwowane z tego repozytorium. Znaczniki Shoper zostały zastąpione danymi kontaktowymi.

## Podgląd lokalny

Otwórz `index.html` w przeglądarce lub uruchom `python3 -m http.server 8080` w katalogu repozytorium.

## Własna domena i SEO

Po wyborze ostatecznej domeny ustaw ją u dostawcy hostingu i w DNS. Zaktualizuj adres canonical, og:url i sitemap.xml, jeśli przenosisz stronę z GitHub Pages. Metadane nie gwarantują indeksowania; po publikacji sprawdź adres w Google Search Console. Nie publikuj kilku równorzędnych kopii bez wskazania docelowego adresu canonical.

## Materiały

Logo EFL i zdjęcie mobilnego stanowiska przekazane przez właściciela. Pozostałe materiały produktowe i logotypy pochodzą ze sklepu Exerion. Obraz platformy został przygotowany z usuniętym tłem. Prawa do znaków i zdjęć należą do ich właścicieli; publiczne repozytorium nie oznacza udzielenia licencji na te materiały.
