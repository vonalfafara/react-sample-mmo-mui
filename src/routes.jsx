import Home from "./views/Home"
import News from "./views/News"
import Games from "./views/Games"
import Game from "./views/Game"
import Giveaways from "./views/Giveaways"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/news",
    element: <News />
  },
  {
    path: "/games",
    element: <Games />
  },
  {
    path: "/games/:id",
    element: <Game />
  },
  {
    path: "/giveaways",
    element: <Giveaways />
  },
]

export default routes