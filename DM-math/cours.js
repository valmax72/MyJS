//ouvrir une fenetre pour saisir la valeur de n par l'user
var n = Number(prompt('Saisir un valeur pour n'));

function Un(x){ // caccule de la fonction Un
    var result=0;
    for (var j=1 ; j<=x ; j++){
        result= result + 1/(j*j);
        console.log(result);
    }
    return result;
}

function racine6(x) { //calcule racine de 6Un
    return Math.sqrt(6*Un(x))
}

// afficher message à l'écran
alert(`Pour n = ${n} Un sera égale à ${Un(n)} \n Et la racine de 6Un égale ${racine6(n)}`);