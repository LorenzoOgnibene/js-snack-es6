/**
 * 
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: 
    nel primo array solo le auto a benzina, 
    nel secondo solo le auto a diesel, 
    nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array

*/

const cars = [
    {
        marca : 'fiat',
        modello : '500',
        alimentazione : 'benzina'
    },
    {
        marca : 'bmw',
        modello : 'm1',
        alimentazione : 'disel'
    },
    {
        marca : 'tesla',
        modello : 'plaid',
        alimentazione : 'elettrico'
    },
    {
        marca : 'citroen',
        modello : 'ami',
        alimentazione : 'elettrico'
    },
    {
        marca : 'fiat',
        modello : '500',
        alimentazione : 'benzina'
    },
    {
        marca : 'mercedes',
        modello : 'classe A',
        alimentazione : 'disel'
    },
    {
        marca : 'renault',
        modello : 'capture',
        alimentazione : 'disel'
    },
    {
        marca : 'lamborghini',
        modello : 'elettra',
        alimentazione : 'benzina'
    },
    {
        marca : 'porche',
        modello : 'panamera',
        alimentazione : 'benzina'
    },
    {
        marca : 'jeep',
        modello : 'compas',
        alimentazione : 'disel'
    },


]

const benzina = [];
const disel = [];
const other = []; 

for(let i = 0; i < cars.length; i++){
    for(key in cars[i]){
        if(cars[i].alimentazione == 'benzina'){
            benzina.push(cars[i])
        }else if(cars[i].alimentazione == 'disel'){
            disel.push(cars[i])
        }else{
            other.push(cars[i])
        }
    }
}

console.log(benzina);
console.log(disel);
console.log(other);