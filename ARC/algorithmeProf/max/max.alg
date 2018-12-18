<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Algorithme permettant de récuperer la valeur maximal d'un tableau." courant="AFFICHER max"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2defaut="" F2para="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" maxBoucle="500000" epaisseurLigne="2" epaisseurPoint="2" nbDecimales="8" totalAffichages="1000" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="compteur EST_DU_TYPE NOMBRE" code="1#NOMBRE#compteur"/>
        <item algoitem="nombres EST_DU_TYPE LISTE" code="1#LISTE#nombres"/>
        <item algoitem="max EST_DU_TYPE NOMBRE" code="1#NOMBRE#max"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="nombres[0] PREND_LA_VALEUR 10:9:70:36:20:10:80:130" code="5#nombres#10:9:70:36:20:10:80:130#0"/>
        <item algoitem="max PREND_LA_VALEUR nombres[0]" code="5#max#nombres[0]#pasliste"/>
        <item algoitem="POUR compteur ALLANT_DE 0 A nombres.length-1" code="12#compteur#0#nombres.length-1">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="SI (max &lt; nombres[compteur]) ALORS" code="6#max &lt; nombres[compteur]">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="max PREND_LA_VALEUR nombres[compteur]" code="5#max#nombres[compteur]#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Le nombre max est : &quot;" code="4#Le nombre max est : #0"/>
        <item algoitem="AFFICHER max" code="3#max#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
