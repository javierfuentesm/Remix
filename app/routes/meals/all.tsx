import { useLoaderData } from "remix";
import { getMeals, Meal } from "~/routes/meals/meals";

export const loader = async () => {
  return getMeals();
};
export default function Posts() {
  const meals = useLoaderData<Meal[]>();
  return (
    <main>
      <h1>Comidas</h1>
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
      ))}
    </main>
  );
}
