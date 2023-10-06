<?php $titre = 'Asynchrone'; ?>

<?php ob_start(); ?>

<div id="Attendre" class="row mb-3 g-3">
    <div class="col-sm-8">
        <div class="form-floating">
            <input type="number" class="form-control" id="attendreInput" placeholder="Nombre de millisecondes à attendre" value="2000">
            <label for="attendreInput">Nombre de millisecondes à attendre</label>
        </div>
    </div>
    <div class="col-sm-4 text-center">
        <button class="btn btn-primary h-100">Attendre</button>
    </div>
</div>

<hr/>

<div id="GenererNbPremiers" class="row mb-3 g-3">
    <div class="col-sm-8">
        <div class="form-floating">
            <input type="number" class="form-control" id="nbPremierInput" placeholder="Nombre de nombres premiers à générer" value="1000000">
            <label for="nbPremierInput">Nombre de nombres premiers à générer</label>
        </div>
    </div>
    <div class="col-sm-4 text-center">
        <button class="btn btn-primary h-100">Générer</button>
    </div>
</div>

<hr/>

<div id="TrierAvecTrieABulles" class="row mb-3 g-3">
    <div class="col-sm-8">
        <div class="form-floating">
            <input type="number" class="form-control" id="listeTriInput" placeholder="Nombre de nombres dans la liste à trier" value="50000">
            <label for="listeTriInput">Nombre de nombres dans la liste à trier</label>
        </div>
    </div>
    <div class="col-sm-4 text-center">
        <button class="btn btn-primary h-100">Trier</button>
    </div>
</div>

<script type="module" src="js/asynchrone.js"></script>

<?php $contenu = ob_get_clean(); ?>

<?php require 'vue/Gabarit.php'; ?>