import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Lorem from "./pages/Lorem.js";
import NotFound from "./pages/NotFound.js";

const routes = {
  "#/": new Home(),
  "#/about": new About(),
  "#/lorem": new Lorem(),
  404: new NotFound(),
};
//여기서 routes 객체는 경로랑 그 경로에서 렌더링될 페이지 객체를 매핑함.


let goToLoremBtn;

export const renderPage = () => {
  const path = window.location.hash || "#/";
  const selectedPage = routes[path] ?? routes[404];
  selectedPage.render();

  if (path === "#/") {
    goToLoremBtn = document.querySelector(".go-to-lorem");
    goToLoremBtn.addEventListener("click", goToLorem);
  }

  if (path !== "#/" && goToLoremBtn) {
    goToLoremBtn.removeEventListener("click", goToLorem);
    goToLoremBtn = null;
  }
};

function goToLorem() {
  window.location.hash = "#/lorem";
}

