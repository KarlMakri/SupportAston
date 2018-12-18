<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Palindrome" courant="AFFICHERCALCUL isPalindrome('m')"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2lignes="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" maxBoucle="500000" totalBoucles="5000000" nbDecimales="8" epaisseurPoint="2" arrondiAuto="vrai" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#isPalindrome#mot" algoitem="FONCTION isPalindrome(mot)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#NOMBRE#size" algoitem="size EST_DU_TYPE NOMBRE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="5#size#mot.length#pasliste" algoitem="size PREND_LA_VALEUR mot.length"/>
            <item code="6#size == 0|| size == 1" algoitem="SI (size == 0|| size == 1) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="205#1" algoitem="RENVOYER 1"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="6#mot.substr(0,1) !=mot.substr(size-1,1)" algoitem="SI (mot.substr(0,1) !=mot.substr(size-1,1)) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="205#0" algoitem="RENVOYER 0"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="205#isPalindrome(mot.substr(1,size-2))" algoitem="RENVOYER isPalindrome(mot.substr(1,size-2))"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#m" algoitem="m EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#m#pasliste" algoitem="LIRE m"/>
        <item code="20#isPalindrome('m')#1" algoitem="AFFICHERCALCUL isPalindrome('m')"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
