let playerCount = 1;

document.getElementById('addplayer').addEventListener('click', () => {
  playerCount++;
  addPlayerField();
  console.log(playerCount);
});

document.getElementById('removeplayer').addEventListener('click', () => {
  removePlayer();
  playerCount--;
  console.log(playerCount);
});


function addPlayerField () {
  const players = document.getElementById('players');

  let row = document.createElement("div");
  row.id = 'playerrow' + playerCount;
  row.className = 'row';

  let col = document.createElement("div");
  col.className = 'col-md-12';
  row.appendChild(col);

  let label = document.createElement("label");
  let labelText = document.createTextNode("Spieler " + playerCount);
  label.appendChild(labelText);
  col.appendChild(label);

  let input = document.createElement("input");
  input.type = "text";
  input.name = "player" + playerCount;
  input.id = "player" + playerCount;
  col.appendChild(input);

  players.appendChild(row);
}

function removePlayer() {
  const playerField =document.getElementById("playerrow" + playerCount);
  playerField.remove();
}