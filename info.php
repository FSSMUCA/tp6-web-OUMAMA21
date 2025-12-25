<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Introduction PHP</title>
</head>
<body>

<h1>Découverte du PHP</h1>

<?php
// Variables
$nom = "Calculatrice PHP";
$a = 10;
$b = 5;

// Calculs
$addition = $a + $b;
$soustraction = $a - $b;
$multiplication = $a * $b;
$division = $a / $b;

// Affichage
echo "<p>Nom du projet : $nom</p>";
echo "<p>A = $a | B = $b</p>";
echo "<ul>
        <li>Addition : $addition</li>
        <li>Soustraction : $soustraction</li>
        <li>Multiplication : $multiplication</li>
        <li>Division : $division</li>
      </ul>";
?>

</body>
</html>
