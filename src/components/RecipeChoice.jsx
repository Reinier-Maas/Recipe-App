import { Center, Text, Image, Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { Button } from "./ui/Button";

export const RecipeChoice = ({ recipe, onClick }) => {
  const recipeMealType = recipe.recipe.mealType.map((meal) => {
    return (
      <>
        <Text
          key={meal.recipeMealType}
          fontSize={{ base: 10, sm: 12, md: 16 }}
          color="gray.400"
          paddingTop="2px"
          paddingLeft="1px"
        >
          {meal}
        </Text>
      </>
    );
  });

  const recipeHealthLabels = recipe.recipe.healthLabels.map((health) => {
    return (
      <>
        <Text
          key={health.recipeHealthLabel}
          fontSize={{ base: 10, sm: 12, md: 16 }}
          as="button"
          background="purple.100"
          borderRadius="5px"
          padding={0.5}
          margin="2px"
        >
          {health}
        </Text>
      </>
    );
  });

  const recipeDietLabels = recipe.recipe.dietLabels.map((diet) => {
    return (
      <>
        <Text
          key={diet.recipeDiethLabel}
          fontSize={{ base: 10, sm: 12, md: 16 }}
          as="button"
          background="green.100"
          borderRadius="5px"
          padding={0.5}
          margin="2px"
        >
          {diet}
        </Text>
      </>
    );
  });

  const recipeCautions = recipe.recipe.cautions.map((caution) => {
    return (
      <>
        <Text
          key={caution.recipeCautions}
          fontSize={{ base: 10, sm: 12, md: 16 }}
          as="button"
          background="red.100"
          borderRadius="5px"
          padding={0.5}
          margin="2px"
        >
          {caution}
        </Text>
      </>
    );
  });

  const recipeIngredients = recipe.recipe.ingredientLines.map((ingredient) => {
    return (
      <>
        <Text
          key={ingredient.recipeIngredients}
          fontSize={{ base: 10, sm: 12, md: 16 }}
          paddingRight="10px"
        >
          {ingredient}
        </Text>
      </>
    );
  });

  return (
    <Center flexDir={"column"} width="75%" height="100%" background="gray.50">
      <Flex width="100%">
        <Button
          colorScheme="white"
          color="black"
          _hover={{ bg: "gray.200" }}
          rounded="none"
          onClick={() => onClick()}
        >
          Back
        </Button>
      </Flex>

      <Image
        src={recipe.recipe.image}
        w="100%"
        height="400px"
        objectFit="cover"
        alt={recipe.recipe.label}
      />

      <Flex width="90%" flexDirection="row">
        <Box width="50%">
          {recipeMealType}
          <Text
            fontSize={{ base: 12, sm: 18, md: 24 }}
            fontWeight={"450"}
            paddingBottom="4px"
            paddingRight="10px"
          >
            {recipe.recipe.label}
          </Text>
          <Text fontSize={{ base: 10, sm: 12, md: 16 }} paddingBottom="4px">
            Total cooking time: {recipe.recipe.totalTime} minutes
          </Text>
          <Text fontSize={{ base: 10, sm: 12, md: 16 }} paddingBottom="6px">
            Sevings: {recipe.recipe.yield}
          </Text>
          <Text fontSize={{ base: 14, sm: 16, md: 20 }} paddingBottom="4px">
            Ingredients:
          </Text>
          {recipeIngredients}
        </Box>

        <Box width="50%">
          <Text
            fontSize={{ base: 10, sm: 12, md: 16 }}
            paddingLeft="2px"
            paddingTop="2px"
          >
            Health labels:
          </Text>
          {recipeHealthLabels}
          <Text
            fontSize={{ base: 10, sm: 12, md: 16 }}
            paddingLeft="2px"
            paddingTop="4px"
          >
            Diet:
          </Text>
          {recipeDietLabels}
          <Text
            fontSize={{ base: 10, sm: 12, md: 16 }}
            paddingLeft="2px"
            paddingTop="4px"
          >
            Cautions:
          </Text>
          {recipeCautions}
          <Text
            fontSize={{ base: 14, sm: 16, md: 20 }}
            paddingBottom="2px"
            paddingTop="4px"
          >
            Total nutrients:
          </Text>
          <Box>
            <SimpleGrid minChildWidth={20} spacing={2}>
              <Box>
                <Text fontSize={{ base: 10, sm: 12, md: 16 }}>
                  {recipe.recipe.calories.toFixed()}
                </Text>
                <Text fontSize={{ base: 10, sm: 12, md: 16 }}>CALORIES</Text>
              </Box>
              <Box>
                <Text fontSize={{ base: 10, sm: 12, md: 16 }}>
                  {recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed()}{" "}
                  {recipe.recipe.totalNutrients.CHOCDF.unit}
                </Text>
                <Text fontSize={{ base: 10, sm: 12, md: 16 }}>CARBS</Text>
              </Box>
              <Box>
                <Text fontSize={{ base: 10, sm: 12, md: 16 }}>
                  {recipe.recipe.totalNutrients.PROCNT.quantity.toFixed()}{" "}
                  {recipe.recipe.totalNutrients.PROCNT.unit}
                </Text>
                <Text fontSize={{ base: 10, sm: 12, md: 16 }}>PROTIEN</Text>
              </Box>
              <Box>
                <Text fontSize={{ base: 10, sm: 12, md: 16 }}>
                  {recipe.recipe.totalNutrients.FAT.quantity.toFixed()}{" "}
                  {recipe.recipe.totalNutrients.FAT.unit}
                </Text>
                <Text fontSize={{ base: 10, sm: 12, md: 16 }}>FAT</Text>
              </Box>
              <Box>
                <Text fontSize={{ base: 10, sm: 12, md: 16 }}>
                  {recipe.recipe.totalNutrients.CHOLE.quantity.toFixed()}{" "}
                  {recipe.recipe.totalNutrients.CHOLE.unit}
                </Text>
                <Text fontSize={{ base: 10, sm: 12, md: 16 }}>CHOLESTEROL</Text>
              </Box>

              <Box>
                <Text fontSize={{ base: 10, sm: 12, md: 16 }}>
                  {recipe.recipe.totalNutrients.NA.quantity.toFixed()}{" "}
                  {recipe.recipe.totalNutrients.NA.unit}
                </Text>
                <Text fontSize={{ base: 10, sm: 12, md: 16 }}>SODIUM</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </Center>
  );
};
