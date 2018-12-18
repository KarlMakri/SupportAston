print('Entrez le Nombre : ', end='')
nombres = input()
compteur = int(nombres)
resultat = 1

while compteur > 1:

    resultat *= compteur
    compteur -= 1

print('Factorielle de Nombre : ', end='')
print(nombres, end='')
print(' est ', end='')
print(resultat)
print('\n')