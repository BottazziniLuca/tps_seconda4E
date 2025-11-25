// Determina generazione
function determinaGenerazione(anno) {
    if (anno >= 2013) return "Generazione Alpha";
    if (anno >= 1997) return "Generazione Z";
    if (anno >= 1981) return "Millennials";
    if (anno >= 1965) return "Generazione X";
    if (anno >= 1946) return "Baby Boomers";
    if (anno >= 1928) return "Generazione Silenziosa";
    if (anno >= 1901) return "Greatest Generation";
    return "Generazione non definita";
}

function invia() {

    

    let anagrafica = {}; // oggetto principale

    // Dati base
    anagrafica.nome = document.getElementById("nome").value;
    anagrafica.cognome = document.getElementById("cognome").value;
    anagrafica.indirizzo = document.getElementById("indirizzo").value;
    anagrafica.citta = document.getElementById("citta").value;
    anagrafica.cap = document.getElementById("cap").value;
    anagrafica.dataNascita = document.getElementById("dataNascita").value;

    // determina sesso
    const sesso = document.querySelector('input[name="sesso"]:checked');
    anagrafica.sesso = sesso ? sesso.value : "Non specificato";

    // provincia
    anagrafica.provincia = document.getElementById("provincia").value;

    // mezzi con array
    let mezzi = [];
    document.querySelectorAll(".mezzo:checked").forEach(m => mezzi.push(m.value));
    anagrafica.mezzi = mezzi;

    // materie preferite 
    let materie = [];
    const selezionate = document.querySelectorAll("#materie option:checked");
    if (selezionate.length > 3) {
        alert("Puoi selezionare solo 3 materie!");
        return;
    }
    selezionate.forEach(op => materie.push(op.value));
    anagrafica.materiePreferite = materie;

    // Calcolo generazione
    const anno = new Date(anagrafica.dataNascita).getFullYear();
    anagrafica.generazione = determinaGenerazione(anno);

    
    document.getElementById("risultato").innerHTML =
        `<strong>${anagrafica.nome} ${anagrafica.cognome}</strong><br>
         ${anagrafica.indirizzo}, ${anagrafica.citta} (${anagrafica.cap}) - ${anagrafica.provincia}<br>
         Sesso: ${anagrafica.sesso}<br>
         Mezzi posseduti: ${anagrafica.mezzi.join(", ") || "Nessuno"}<br>
         Materie preferite: ${anagrafica.materiePreferite.join(", ") || "Nessuna"}<br>
         Data di nascita: ${anagrafica.dataNascita}<br>
         Generazione: <strong>${anagrafica.generazione}</strong><br><br>

         <b>Oggetto anagrafica (collection):</b><br>
         <pre>${JSON.stringify(anagrafica, null, 2)}</pre>`;
}
