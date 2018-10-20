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
3. When country name is clicked, page should display local time in selected country (needs moment.js library installed)

Focus on Angular course and HTML/CSS

------------------------

Countries API provide cooridantes (storable as JSON obj) - to integrate with NASA API and get imagery