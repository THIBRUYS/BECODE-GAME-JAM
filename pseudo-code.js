becode game jam

HTML
1. Délimiter une zone de jeu en forme de carré. (playground)
2. Créer un serpent de départ. Et le mettre sur le terrain (snake)
3. Mettre une pomme sur le terrain aléatoirement. (apple)
4. Bouton "start" pour commencer la partie. (startbutton)
5. Bouton "cancel" pour arrêter la partie. (cancelbutton)
6. Compteur du score. (scorecount)
7. Level. (nombre max de niveaux) (levelcount)
8. Timer. (timercount)

CSS
1. Background noir.
2. Serpent vert.
3. Pomme rouge.
4. Responsive design (media queries pour éviter des problèmes de touch screen ? Rajouter des boutons pour petits écrans (bonus?)).
 

JavaScript

A. Mouvement
1. Le serpent avance toujours tout seul, donner une direction le fait changer de sens.
2. Appuyer sur la flèche de droite et le serpent tourne à droite.
// if press [right arrow] -> { snake turns right }
3. Appuyer sur la flèche de gauche et le serpent tourne à gauche.
4. Appuyer sur la flèche du bas et le serpent tourne en bas.
5. Appuyer sur la flèche du haut et le serpent tourne en haut.
6. Si le serpent avance contre un mur il ressort de l'autre coté.
7. Possibilité de mettre le jeu en pause avec backspace.


B. Interactions
-Serpent
1. Quand le serpent mange une pomme, il s'agrandit de x pixels en longueur et le score augmente de x points.
2. Quand le serpent a mangé x pommes il passe au niveau suivant (il va dans un autre field d'une autre couleur et plus rapide).
3. Si le serpent se touche lui même il meurt. (game over).
4. Lorsqu'on meurt message game over avec le score et le temps.
5. Lorsqu'on gagne message avec victoire avec le score et le temps.

-Son
1. Petit son quand il mange.
2. Petit son quand il meurt.
3. Musique pendant la partie.
3. Dernier niveau musique hard rock.
