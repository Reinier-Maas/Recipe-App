import { useState } from "react";
import { data } from "../utils/data";
import { RecipeItems } from "./RecipeItems";
import { TextInput } from "./ui/TextInput";

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipe = data.hits.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <TextInput
        onChange={handleChange}
        w={200}
        mb={8}
        background="white.100"
      />
      <RecipeItems onClick={onClick} recipes={matchedRecipe} />
    </>
  );
};
