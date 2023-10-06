<?php
require 'controleur/Controleur.php';

try {
    if (!isset($_GET['action'])) {
        return AfficherPageDefaut();
    }
    switch ($_GET['action']) {
        case 'Accueil':
            AfficherPageAccueil();
            break;
        case 'Synchrone':
            AfficherPageSynchrone();
            break;
        case 'Asynchrone':
            AfficherPageAsynchrone();
            break;
        default:
            throw new Exception('Aucune page spécifique demandée');
    }
} catch (PDOException $e) {
    $msgErreur = $e->getMessage();
    require 'vue/Erreur.php';
} catch (Exception $ex) {
    $msgErreur = $ex->getMessage();
    require 'vue/Erreur.php';
}
