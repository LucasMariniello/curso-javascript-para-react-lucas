import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";


const $root = document.querySelector("#root");

// Não usar .innerHTML por motivos de segurança!
$root.insertAdjacentHTML(
    "beforeend",
    `
    ${PlayerName('Player1')}
    ${PlayerName('Player2')}
    ${BoardGame(6)}

`
);