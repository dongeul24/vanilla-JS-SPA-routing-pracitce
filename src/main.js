import { renderPage } from "./router";

renderPage();

window.addEventListener("hashchange", renderPage);
