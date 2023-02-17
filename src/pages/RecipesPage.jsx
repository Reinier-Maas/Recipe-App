import { Center, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../components/RecipeChoice";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipesPage = () => {
  const [userRecipe, setUserRecipe] = useState();

  return (
    <Center h="100%" minHeight="100vh" flexDir="column" background="blue.100">
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading size="2xl" mb={8} color="blue.200">
            <Text fontSize={[24, 40, 56]} color="gray.600" margin="10px">
              Your Recipe App
            </Text>
          </Heading>
          <RecipeSearch onClick={setUserRecipe} />
        </>
      )}
    </Center>
  );
};
