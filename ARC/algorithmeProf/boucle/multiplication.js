// Table de Multiplication
/*for (var i = 1; i <= 10; i++){

    process.stdout.write('\n');
    
    for (var j = 1; j <= 10; j++){

        process.stdout.write(' ' + (j*i));
    }
}*/


//console.log(process.argv[2]); // Récupérer un Argument de valeur

var maxTable = process.argv[2] || 5; // || Une des deux valeur est true

for (var i = 1; i <= maxTable; i++){

    process.stdout.write('\n');
    
    for (var j = 1; j <= maxTable; j++){

        var produit = i*j;

        if(produit.toString().length == 1){

            process.stdout.write(' ');
        }

        process.stdout.write(' ' + produit);
    }
}

console.log('\n');
//console.log('');