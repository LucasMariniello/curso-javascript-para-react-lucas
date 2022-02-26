import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";

import ScoreBoard from "./src/objects/ScoreBoard";
import BoardGame from "./src/objects/BoardGame";

const $root = document.querySelector("#root");

// Não usar .innerHTML por motivos de segurança!
$root.insertAdjacentHTML(
    "beforeend",
    `
    ${ScoreBoard()}
    ${BoardGame(6)}

`
);