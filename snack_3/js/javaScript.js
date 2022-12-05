/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */



const zucchine = [
    {
        variety : 'cinese',
        weight : 120,
        lenght : 12
    },
    {
        variety : 'cinese',
        weight : 12,
        lenght : 12
    },
    {
        variety : 'cinese',
        weight : 30,
        lenght : 12
    },
    {
        variety : 'cinese',
        weight : 450,
        lenght : 12
    },
    {
        variety : 'cinese',
        weight : 333,
        lenght : 12
    },
    {
        variety : 'cinese',
        weight : 232,
        lenght : 12
    },
    {
        variety : 'cinese',
        weight : 121,
        lenght : 12
    },
    {
        variety : 'cinese',
        weight : 88,
        lenght : 12
    },
    {
        variety : 'cinese',
        weight : 69,
        lenght : 12
    },
    {
        variety : 'cinese',
        weight : 64,
        lenght : 12
    },
]

let sum = 0;
let totLenght = 0;


for(let i = 0; i < zucchine.length; i++){
    console.log(zucchine[i].weight)
    sum += zucchine[i].weight;
    totLenght  += zucchine[i].lenght;
}

console.log(sum + " " + "somma dei pesi");
console.log(totLenght + " " + "somma delle lunghezze");

const weightMedia = sum / zucchine.length;
console.log(weightMedia + " " +  "peso medio");

const lenghtMedia = totLenght / zucchine.length;
console.log(lenghtMedia + " " + "lunghezza media");