import React from "react";

import { Add, Close } from "grommet-icons";

import {
  Box,
  Button,
  FormField,
  Heading,
  Layer,
  Select,
  TextArea,
  Form,
  TextInput
} from "grommet";

const AddNutrition = ({ open, setOpen, data }) => {
  const [select, setSelect] = React.useState("");

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);
  // Auto suggest enabling here
  const suggestions = data && data.map((each) => each.dessert);

  return (
    <Box fill align="center" justify="center">
      {open && (
        <Layer
          position="right"
          full="vertical"
          modal
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <Box
            as="form"
            fill="vertical"
            overflow="auto"
            width="medium"
            pad="medium"
            onSubmit={onClose}
          >
            <Box flex={false} direction="row" justify="between">
              <Heading level={2} margin="none">
                Add a Nutriton
              </Heading>
              <Button icon={<Close />} onClick={onClose} />
            </Box>
            <Form
              validate="blur"
              onReset={(event) => console.log(event)}
              onSubmit={({ value }) => console.log("Submit", value)}
            >
              <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                <FormField name="dessert" label="Desert Name *" required>
                  <TextInput name="dessert" suggestions={suggestions} />
                </FormField>
                <FormField name="calories" label="Calories *" required>
                  <TextInput name="calories" />
                </FormField>
                <FormField name="fat" label="Fat *" required>
                  <TextInput name="fat" />
                </FormField>
                <FormField name="carb" label="Carbs *" required>
                  <TextInput name="carb" />
                </FormField>
                <FormField name="protein" label="Protein *" required>
                  <TextInput name="protein" />
                </FormField>
              </Box>
              <Box flex={false} as="footer" align="start">
                <Button
                  type="submit"
                  label="Submit"
                  onClick={onClose}
                  primary
                />
              </Box>
            </Form>
          </Box>
        </Layer>
      )}
    </Box>
  );
};
export default AddNutrition;
