


const numeroChilometri = parseInt (prompt ("Numero di chilometri da eseguire"));
const anniPasseggero = prompt ("Dichiara la tua età");
const prezzoBigliettoStandard = 0.21;
const prezzototale = numeroChilometri*prezzoBigliettoStandard;
const scontogiovani = prezzototale / 100 * 20;
const scontoanziani = prezzototale / 100 * 40;

console.log ("prezzo del biglietto senza sconto = " + prezzototale +"€");

if (anniPasseggero < 18) {
        prezzoFinale = scontogiovani.toFixed(2)
} else if (anniPasseggero > 65) {
        prezzoFinale = scontoanziani.toFixed(2)
} else {
        prezzoFinale = prezzototale.toFixed(2)
};


document.writeln("prezzo del biglietto = " + prezzoFinale + "€");