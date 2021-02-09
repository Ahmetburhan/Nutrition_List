import React from "react";
import { Button, Text } from "grommet";

const onClickHandler = (nutrition) => {
  // eslint-disable-next-line no-alert
  alert(`
    nutrition was clicked:
    { 
        dessert: ${nutrition.dessert}
        Calories: ${nutrition.nutritionInfo.calories}
        Carbs: ${nutrition.nutritionInfo.carb}
    }
    
    You can use onClick() to navigate to a nutrition's detail
    page, open a panel or modal to edit the nutrition, or perform 
    other actions as you see fit.
  `);
};

const columns = [
  {
    property: "dessert",
    header: "Dessert (100g Serving)",
    render: (datum) => (
      <Button onClick={() => onClickHandler(datum)}>
        <Text truncate weight="bold">
          {datum.dessert}
        </Text>
      </Button>
    )
  },
  {
    property: "nutritionInfo.calories",
    header: "Calories",
    render: (datum) => <Text truncate>{datum.nutritionInfo.calories}</Text>,
    size: "xsmall",
    align: "end"
  },
  {
    property: "nutritionInfo.fat",
    header: "Fat (g)",
    render: (datum) => <Text truncate>{datum.nutritionInfo.fat}</Text>
  },
  {
    property: "nutritionInfo.carbs",
    header: "Carbs (g)",
    render: (datum) => <Text truncate>{datum.nutritionInfo.carb}</Text>,
    size: "xsmall"
  },
  {
    property: "nutritionInfo.protein",
    header: "Protein (g)",
    render: (datum) => <Text truncate>{datum.nutritionInfo.protein}</Text>
  }
];
const data = [
  {
    dessert: "Oreo",
    nutritionInfo: { calories: 437, fat: 18, carb: 63, protein: 4 }
  },
  {
    dessert: "Nougat",
    nutritionInfo: { calories: 360, fat: 19, carb: 50, protein: 37 }
  },
  {
    dessert: "Marshmelow",
    nutritionInfo: { calories: 318, fat: 23, carb: 345, protein: 3 }
  },
  {
    dessert: "Lolypop",
    nutritionInfo: { calories: 398, fat: 423, carb: 45, protein: 7 }
  },
  {
    dessert: "KitKat",
    nutritionInfo: { calories: 510, fat: 45, carb: 333, protein: 87 }
  }
];

export { data, columns };
