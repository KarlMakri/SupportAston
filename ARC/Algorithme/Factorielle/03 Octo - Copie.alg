<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FONCTIONS_UTILISEES" texte="Factorielle"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" epaisseurPoint="2" totalAffichages="1000" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Compteur" algoitem="Compteur EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Résultat" algoitem="Résultat EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Nombres" algoitem="Nombres EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#Résultat#1#pasliste" algoitem="Résultat PREND_LA_VALEUR 1"/>
        <item code="2#Nombres#pasliste" algoitem="LIRE Nombres"/>
        <item code="5#Compteur#Nombres#pasliste" algoitem="Compteur PREND_LA_VALEUR Nombres"/>
        <item code="15#Compteur>1" algoitem="TANT_QUE (Compteur>1) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="5#Résultat#Résultat*Compteur#pasliste" algoitem="Résultat PREND_LA_VALEUR Résultat*Compteur"/>
            <item code="5#Compteur#Compteur-1#pasliste" algoitem="Compteur PREND_LA_VALEUR Compteur-1"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="3#Résultat#1#pasliste" algoitem="AFFICHER Résultat"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
