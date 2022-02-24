import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";

import CardGame from "./src/components/CardGame";
const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

// Não usar .innerHTML por motivos de segurança!
$root.insertAdjacentHTML("beforeend", $htmlCardGame);