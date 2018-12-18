<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER numbers[compteur]" texte="Boucle"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" epaisseurPoint="2" maxBoucle="500000" totalAffichages="1000" nbDecimales="8" totalBoucles="5000000" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#numbers" algoitem="numbers EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#compteur" algoitem="compteur EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#numbers#6:90:34:87:52:3#0" algoitem="numbers[0] PREND_LA_VALEUR 6:90:34:87:52:3"/>
        <item code="12#compteur#0#numbers.length-1" algoitem="POUR compteur ALLANT_DE 0 A numbers.length-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="3#numbers#1#compteur" algoitem="AFFICHER numbers[compteur]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
