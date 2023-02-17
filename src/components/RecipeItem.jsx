import { Image, Text, WrapItem, Box } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, onClick }) => {
  const recipeMealType = recipe.recipe.mealType.map((meal) => {
    return (
      <Text
        key={meal.mealType}
        fontSize={{ base: 10, sm: 16, md: 22 }}
        color="gray.400"
        margin={1}
        marginTop={2}
      >
        {meal}
      </Text>
    );
  });

  const recipeHealthLabel = recipe.recipe.healthLabels.filter((r) => {
    return r.toLowerCase().includes("vegetarian", "vegan");
  });

  const recipeHealthLabels = recipeHealthLabel.map((health) => {
    return (
      <>
        <Text
          key={health.recipeHealthLabel}
          fontSize={{ base: 10, sm: 16, md: 22 }}
          as="button"
          background="purple.100"
          borderRadius="5px"
          padding={0.5}
          margin="2px"
        >
          {health}
        </Text>
        <br />
      </>
    );
  });

  const recipeDietLabels = recipe.recipe.dietLabels.map((diet) => {
    return (
      <Text
        key={diet.dietLabels}
        fontSize={{ base: 10, sm: 16, md: 22 }}
        as="button"
        background="green.100"
        borderRadius="5px"
        padding={0.5}
        margin="2px"
      >
        {diet}
      </Text>
    );
  });

  const recipeCautions = recipe.recipe.cautions.map((caution) => {
    return (
      <Text
        key={caution.cautions}
        fontSize={{ base: 10, sm: 16, md: 22 }}
        as="button"
        background="red.100"
        borderRadius="5px"
        padding={0.5}
        margin="2px"
      >
        {caution}
      </Text>
    );
  });

  return (
    <WrapItem>
      <Box
        cursor={"pointer"}
        onClick={() => onClick(recipe)}
        background="white"
        maxWidth={{ base: "100%", sm: "100%", md: "450px", lg: "350px" }}
        width="100%"
        height="100%"
        borderRadius="20px"
        paddingBottom={2}
        textAlign="center"
        flexDirection="column"
      >
        <Image
          src={recipe.recipe.image}
          width="100%"
          height="200px"
          objectFit="cover"
          borderTopRadius="20px"
          alt={recipe.recipe.label}
        />

        {recipeMealType}
        <Text
          fontSize={{ base: 12, sm: 18, md: 24 }}
          fontWeight={"450"}
          margin={1}
        >
          {recipe.recipe.label}
        </Text>
        {recipeHealthLabels}
        {recipeDietLabels}
        <Text
          key={recipe.dishType}
          fontSize={{ base: 10, sm: 16, md: 22 }}
          padding={0.5}
          margin="2px"
        >
          Dish: {recipe.recipe.dishType}
        </Text>
        <Text key={recipe.cautions} fontSize={{ base: 8, sm: 14, md: 20 }}>
          Cautions:
        </Text>
        {recipeCautions}
      </Box>
    </WrapItem>
  );
};
