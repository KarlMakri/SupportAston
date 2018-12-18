/**
 * Table des multiplications.
 */

var n = process.argv[2] || 5;
var max = n*n;

for (var i = 1; i <= n; i++) {
    process.stdout.write('\n');

    for (var j = 1; j <= n; j++) {
        var produit = i * j;

        process.stdout.write(' '.repeat(
            max.toString().length - produit.toString().length
        ));

        process.stdout.write(' ' + produit);
    }
}

console.log('\n');