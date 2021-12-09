


const numeroChilometri = prompt ("Numero di chilometri da eseguire")
const anniPasseggero = prompt ("Dichiara la tua età")
const prezzoBigliettoStandard = 0.21
const prezzototale = numeroChilometri*prezzoBigliettoStandard
const scontogiovani = prezzototale / 100 * 20
const scontoanziani = prezzototale / 100 * 40

console.log ("prezzo del biglietto senza sconto = " + prezzototale +"€")

if (anniPasseggero < 18) {
        prezzoFinale = scontogiovani
} else if (anniPasseggero > 65) {
        prezzoFinale = scontoanziani
} else {
        prezzoFinale = prezzototale
}


document.writeln("prezzo del biglietto = " + prezzoFinale + "€")