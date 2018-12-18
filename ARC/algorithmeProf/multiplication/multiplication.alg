<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="b EST_DU_TYPE NOMBRE" texte="Algorithme permettant de faire une multiplication."/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" epaisseurPoint="2" maxBoucle="500000" totalAffichages="1000" nbDecimales="8" totalBoucles="5000000" epaisseurLigne="2"/>
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
        <item code="4#Le produit de a * b est égale à : #0" algoitem="AFFICHER &quot;Le produit de a * b est égale à : &quot;"/>
        <item code="3#produit#1#pasliste" algoitem="AFFICHER produit"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
