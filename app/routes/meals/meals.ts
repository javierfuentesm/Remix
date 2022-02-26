export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type Meals = {
  meals: Meal[];
};

export const getMeals = async () => {
  const data: Meals = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  ).then((res) => res.json());

  return data.meals;
};
