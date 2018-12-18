<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Boucle TANT QUE." courant="AFFICHER nombres[compteur]"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2defaut="" F2para="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" maxBoucle="500000" epaisseurLigne="2" epaisseurPoint="2" nbDecimales="8" totalAffichages="1000" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="compteur EST_DU_TYPE NOMBRE" code="1#NOMBRE#compteur"/>
        <item algoitem="nombres EST_DU_TYPE LISTE" code="1#LISTE#nombres"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="nombres[0] PREND_LA_VALEUR 56:90:2:3:4:70" code="5#nombres#56:90:2:3:4:70#0"/>
        <item algoitem="TANT_QUE (compteur &lt; nombres.length) FAIRE" code="15#compteur &lt; nombres.length">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="AFFICHER nombres[compteur]" code="3#nombres#1#compteur"/>
            <item algoitem="compteur PREND_LA_VALEUR compteur + 1" code="5#compteur#compteur + 1#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
