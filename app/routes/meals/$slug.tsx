import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { Meals } from "~/routes/meals/meals";

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  const data: Meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${slug}`
  ).then((res) => res.json());
  return { data, slug };
};

export default function MealSlug() {
  const { data, slug } = useLoaderData<{ data: Meals; slug: string }>();
  return (
    <main>
      <h1>Comidas buscadas por los parametros: {slug}</h1>
      <ul>
        {data?.meals?.map((meal) => (
          <li key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </li>
        ))}
      </ul>
    </main>
  );
}
