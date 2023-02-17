import { SimpleGrid } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";

export const RecipeItems = ({ recipes, onClick }) => {
  return (
    <SimpleGrid minChildWidth={250} spacing={10} width="100%" padding={10}>
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.recipe.label}
          recipe={recipe}
          onClick={onClick}
        />
      ))}
    </SimpleGrid>
  );
};
