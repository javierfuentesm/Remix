import {
  useActionData,
  Link,
  ActionFunction,
  useTransition,
  Form,
} from "remix";
import mealsStyles from "~/styles/meals.css";
import {  Meals } from "~/routes/meals/meals";

export const links = () => {
  return [{ rel: "stylesheet", href: mealsStyles }];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const search = formData.get("search");
  console.log("search", search);
  const data: Meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  ).then((res) => res.json());
  console.log(data);
  return data;
  // return redirect("/admin");
};

//Posts con un form normal
// export default function Posts() {
//   const data = useActionData<Meals>();
//   const transition = useTransition();
//
//   console.log("data", data);
//   console.log("transition", transition);
//
//   return (
//     <main className="wrapper">
//       <Link to="/meals/all" className="link">
//         Muestra todos los platillos
//       </Link>
//       <form method="POST" action="/meals2">
//         <input name="search" type="text" className="search-input" />
//         <button className="search-button" type="submit">
//           Buscar platillo
//         </button>
//       </form>
//       {data && (
//         <ul>
//           {data?.meals?.map((meal) => (
//             <li key={meal.idMeal}>
//               <h2>{meal.strMeal}</h2>
//               <img src={meal.strMealThumb} alt={meal.strMeal} />
//             </li>
//           ))}
//         </ul>
//       )}
//     </main>
//   );
// }

// con Form y useTransition
export default function Posts() {
  const data = useActionData<Meals>();
  const transition = useTransition();

  console.log("data", data);
  console.log("transition", transition);

  return (
    <main className="wrapper">
      <Link to="/meals/all" className="link">
        Muestra todos los platillos
      </Link>
      <Form method="post">
        <input name="search" type="text" className="search-input" />

        <button
          className="search-button"
          type="submit"
          disabled={transition.state === "submitting"}
        >
          Buscar platillo
        </button>
      </Form>

      {transition.state !== "idle" && transition.state}

      {data && (
        <ul>
          {data?.meals?.map((meal) => (
            <li key={meal.idMeal}>
              <h2>{meal.strMeal}</h2>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
