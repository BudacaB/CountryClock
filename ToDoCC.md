Avansam in wkd cu primul app pe care il puneti pe github si apoi il deployati la whatever.personalwebsite.com.

Appul va afisa toate tarile din lume si când dai clic pe o tara, imi arata ora locală. Descompunem in subtaskuri împreună in wkd.

app1.bogdanbudaca.com

Appul va afisa toate tarile din lume - public api https://restcountries.eu/rest/v2/name/Romania

Dai clic pe o tara - dropdown - current time in selected country






Appul va afisa toate tarile din lume si când dai clic pe o tara, imi arata ora locală:

1. Pull the API for a single country - RO X
1.1 Pull from API (at page access) and display countries list on webpage - each country name in it's own <p> tag X
1.2 Make an HTML  table with 2 columns country name and country capital. What does this mean: 1) make a table, 2) for each country, you need a new row, yes? whats a row in html? a <tr>
2. Make country name clickable
2.1 Implement routing like on main site
3. When country name is clicked, route to a country-details -> displays the country name for that country (https://angular.io/guide/router).
4. Modify that page to also show local time.
5. ^Formatted any way you want it as long as all is readable, plus local time in that city should be first thing I see on top of page, in big fonts  (needs moment.js library installed). This new page should also display a "back to country list" button

Focus on Angular course and HTML/CSS & Bootstrap

------------------------

Countries API provide cooridantes (storable as JSON obj) - to integrate with NASA API and get imagery - https://api.nasa.gov/api.html#imagery 

-------------------------

Create first browser game (C# / Unity):

1. 'Razboi' / or poker game - card game
    - Angular
    - fontawesome cards - CSS styling // (instead of using TwoJS for drawing)
    - node.js server - game host

Or

2. Meme generator
