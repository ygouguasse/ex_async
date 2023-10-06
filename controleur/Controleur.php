<?php

function AfficherPageDefaut() {
    AfficherPageAccueil();
}

function AfficherPageAccueil() {
    require("vue/Accueil.php");
}

function AfficherPageSynchrone() {
    require("vue/Synchrone.php");
}

function AfficherPageAsynchrone() {
    require("vue/Asynchrone.php");
}
?>