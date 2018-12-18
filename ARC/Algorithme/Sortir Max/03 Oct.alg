<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="Nombres[0] PREND_LA_VALEUR 15:12:3:50:817:6:140" texte="Max Number."/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" epaisseurPoint="2" totalAffichages="1000" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Compteur" algoitem="Compteur EST_DU_TYPE NOMBRE"/>
        <item code="1#LISTE#Nombres" algoitem="Nombres EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#Résultat" algoitem="Résultat EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#Nombres#15:12:3:50:817:6:140#0" algoitem="Nombres[0] PREND_LA_VALEUR 15:12:3:50:817:6:140"/>
        <item code="5#Résultat#Nombres[0]#pasliste" algoitem="Résultat PREND_LA_VALEUR Nombres[0]"/>
        <item code="12#Compteur#0#Nombres.length-1" algoitem="POUR Compteur ALLANT_DE 0 A Nombres.length-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="6#Résultat &lt; Nombres[Compteur]" algoitem="SI (Résultat &lt; Nombres[Compteur]) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#Résultat#Nombres[Compteur]#pasliste" algoitem="Résultat PREND_LA_VALEUR Nombres[Compteur]"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="4#Le Résulat est :#1" algoitem="AFFICHER &quot;Le Résulat est :&quot;"/>
        <item code="3#Résultat#1#pasliste" algoitem="AFFICHER Résultat"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
