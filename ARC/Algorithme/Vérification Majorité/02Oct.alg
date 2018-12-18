<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;Tu es encore un Gamin, rentre chez ta Mère&quot;" texte="Algorithme pour vérifier la Majorité."/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" arrondiAuto="vrai" nbDecimales="8" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Age" algoitem="Age EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#Age#pasliste" algoitem="LIRE Age"/>
        <item code="6#Age >= 18" algoitem="SI (Age >= 18) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Tu es Majeur#0" algoitem="AFFICHER &quot;Tu es Majeur&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#Tu es encore un Gamin, rentre chez ta Mère#0" algoitem="AFFICHER &quot;Tu es encore un Gamin, rentre chez ta Mère&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
