<?php $titre = 'Accueil'; ?>

<?php ob_start(); ?>

<h3>Exercice JavaScript Asynchrone</h3>

<?php $contenu = ob_get_clean(); ?>

<?php require 'vue/Gabarit.php'; ?>