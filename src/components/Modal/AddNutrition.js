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
  TextInput
} from "grommet";

const suggestions = ["alpha", "beta"];

const AddNutrition = ({ open, setOpen }) => {
  const [select, setSelect] = React.useState("");

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);

  return (
    <Box fill align="center" justify="center">
      <Button icon={<Add />} label="Add" onClick={onOpen} />
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
            <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
              <FormField label="Desert Name *" required>
                <TextInput suggestions={suggestions} />
              </FormField>
              <FormField label="Calories *" required>
                <TextInput />
              </FormField>
              <FormField label="Fat*" required>
                <TextInput />
              </FormField>
              <FormField label="Carbs*" required>
                <TextInput />
              </FormField>
              <FormField label="Protein*" required>
                <TextInput />
              </FormField>
            </Box>
            <Box flex={false} as="footer" align="start">
              <Button type="submit" label="Submit" onClick={onClose} primary />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};
export default AddNutrition;
