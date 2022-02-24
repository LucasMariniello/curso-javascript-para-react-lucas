import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";


const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

// Não usar .innerHTML por motivos de segurança!
$root.insertAdjacentHTML("beforeend", $htmlBoardGame);