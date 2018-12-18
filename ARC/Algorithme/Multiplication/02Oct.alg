<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER produit" texte="Algorithme permettant de faire un multiplication."/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" arrondiAuto="vrai" nbDecimales="8" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#a" algoitem="a EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#b" algoitem="b EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#produit" algoitem="produit EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#a#pasliste" algoitem="LIRE a"/>
        <item code="2#b#pasliste" algoitem="LIRE b"/>
        <item code="5#produit#a*b#pasliste" algoitem="produit PREND_LA_VALEUR a*b"/>
        <item code="4#Le Produit de A*B est égale à :#0" algoitem="AFFICHER &quot;Le Produit de A*B est égale à :&quot;"/>
        <item code="3#produit#0#pasliste" algoitem="AFFICHER produit"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
