import { Outlet, Link } from "remix";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mealsStyles from "~/styles/meals.css";

export const links = () => {
  return [{ rel: "stylesheet", href: mealsStyles }];
};

//Posts con un useState
export default function Posts() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <main className="wrapper">
      <Link to="/meals/all" className="link">
        Muestra todos los platillos
      </Link>

      <input
        type="text"
        value={search}
        className="search-input"
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="search-button"
        onClick={() => navigate(`/meals/${search}`)}
      >
        Buscar platillo
      </button>

      <Outlet />
    </main>
  );
}
