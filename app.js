let apiLink = '';
let language = 'de';
const searchWord = document.getElementById('txtWord');
const lblWord = document.getElementById('foundWord');
const lblDef = document.getElementById('desc');

window.onload = init;

function init() {
    searchWord.value = 'Hallo';
    searchForWord();
}

async function searchForWord() {
    let definition = '';

    if (searchWord.value !== '') {
        // language =
        apiLink = `https://api.dictionaryapi.dev/api/v2/entries/${language}/`;
        console.log(apiLink);
        try {
            const res = await fetch(apiLink + searchWord.value);
            const data = await res.json();
            // console.log(data);
            const allSearchResults = data;
            allSearchResults.forEach;

            const fullDefinitionArray = data[0].meanings[0].definitions;

            fullDefinitionArray.forEach((element) => {
                definition += `- ${element.definition} <br> <br>`;
            });

            // Werte anzeigen
            lblDef.innerHTML = `<h4>Definition:</h4> <hr> ${definition}`;
            lblWord.innerHTML = data[0].word.toUpperCase();

            searchWord.value = '';
        } catch {
            lblWord.innerHTML = 'Kein treffer 😔';
            lblDef.innerHTML = `Der Begriff
            "<strong>${searchWord.value}</strong>"
            konnte nicht gefunden werden!
            <br> <small>Tipp:
            <br> -Bitte nur ein Wort eingeben
            <br> -Nur Wörter in jeweiliger Sprache suchen</small>`;
            searchWord.value = '';
        }
    }
}

// Mit Enter suchen
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchForWord();
    }
});
