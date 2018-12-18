<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="TANT_QUE (Compteur&lt;Nombres.length) FAIRE" texte="Algorithme Tant que"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" epaisseurPoint="2" totalAffichages="1000" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Compteur" algoitem="Compteur EST_DU_TYPE NOMBRE"/>
        <item code="1#LISTE#Nombres" algoitem="Nombres EST_DU_TYPE LISTE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#Nombres#17:6:47:13:11:49#0" algoitem="Nombres[0] PREND_LA_VALEUR 17:6:47:13:11:49"/>
        <item code="15#Compteur&lt;Nombres.length" algoitem="TANT_QUE (Compteur&lt;Nombres.length) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="3#Nombres#1#Compteur" algoitem="AFFICHER Nombres[Compteur]"/>
            <item code="5#Compteur#Compteur+1#pasliste" algoitem="Compteur PREND_LA_VALEUR Compteur+1"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
