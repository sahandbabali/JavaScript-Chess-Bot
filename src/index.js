// DEMO JOKE APP
import "./styles/main.scss";

const jsChessEngine = require("js-chess-engine");
const game = new jsChessEngine.Game();

console.log("initial game");
console.log(game);

var board1 = Chessboard("board1", {
  draggable: true,
  position: "start",
  //   dropOffBoard: "trash",
  sparePieces: true,
  onChange: onChange,
  onDrop: onDrop,
});

$("#startBtn").on("click", board1.start);
$("#clearBtn").on("click", board1.clear);

function clickShowPositionBtn() {
  console.log("Current position as an Object:");
  console.log(board1.position());

  console.log("Current position as a FEN string:");
  console.log(board1.fen());
}

$("#showPositionBtn").on("click", clickShowPositionBtn);

function onChange(oldPos, newPos) {
  //   console.log("Position changed:");
  //   console.log("Old position: " + Chessboard.objToFen(oldPos));
  //   console.log("New position: " + Chessboard.objToFen(newPos));
  //   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

$("#aimovebutton").on("click", aimovefunc);

function aimovefunc() {
  console.log("aimovefunc");
  let move = game.aiMove(2);
  let movefrom = Object.keys(move)[0];
  let moveto = Object.values(move)[0];
  let nextaimove = `${movefrom}-${moveto}`;
  nextaimove = nextaimove.toLowerCase();
  board1.move(nextaimove);
  console.log(move);
}
function onDrop(source, target, piece, newPos, oldPos, orientation) {
  console.log("Source: " + source);
  console.log("Target: " + target);
  source = source.toUpperCase();
  target = target.toUpperCase();
  let move = game.move(source, target);
  console.log(move);
  //   console.log("Piece: " + piece);
  //   console.log("New position: " + Chessboard.objToFen(newPos));
  //   console.log("Old position: " + Chessboard.objToFen(oldPos));
  //   console.log("Orientation: " + orientation);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}
