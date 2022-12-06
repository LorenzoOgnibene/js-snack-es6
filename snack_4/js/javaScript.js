/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */


const randomUsers = [
    {
        name : 'donato',
        surname : 'montone',
        age : '68'
    },
    {
        name : 'alessio',
        surname : 'napoletano',
        age : '15'
    },
    {
        name : 'samuele',
        surname : 'ndreu',
        age : '28'
    },
    {
        name : 'giada',
        surname : 'gallitto',
        age : '20'
    },
    {
        name : 'sara',
        surname : 'donzellini',
        age : '21'
    },
    {
        name : 'riccardo',
        surname : 'er mejo',
        age : '23'
    },
    {
        name : 'pino',
        surname : 'dei palazzi',
        age : '69'
    },
    {
        name : 'giacomo',
        surname : 'belli',
        age : '38'
    },
    {
        name : 'checca',
        surname : 'pocchia',
        age : '33'
    },
]

const oldUser = randomUsers.filter((user) =>{
    if(user.age >= 18) {

        return (user + 'U can drive bebe')
    }
})

console.log(oldUser);