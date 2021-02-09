import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Box,
  DataTable,
  Heading,
  Menu,
  ResponsiveContext,
  Text
} from "grommet";
import AddNutrition from "../Modal/AddNutrition";
import { data, columns } from "./__data__/MockData";

export const NutritionTable = () => {
  const size = useContext(ResponsiveContext);
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box align="start">
        <Heading
          pad="none"
          background="background-front"
          level={2}
          margin="none"
        >
          Nutrition List{" "}
        </Heading>
      </Box>
      <AddNutrition open={open} setOpen={setOpen} />
      <TableControls selected={selected} />
      <Box height={{ max: "large" }} overflow="auto">
        <DataTable
          data={data}
          columns={[...columns]}
          pin={size === "small"}
          select={selected}
          onSelect={setSelected}
          // resizeable
          sort={true}
        />
      </Box>
    </>
  );
};

const ActionsMenu = styled(Menu)`
  border: 1px solid
    ${({ theme }) => theme.global.colors.border[theme.dark ? "dark" : "light"]};
`;

const TableControls = ({ selected }) => {
  const ActionHandler = (records) => {
    // eslint-disable-next-line no-alert
    alert(
      `
      Handler called to perform an action
      against these records:
      [${records}]
      `
    );
  };

  return (
    <Box
      direction="row"
      fill="horizontal"
      justify="between"
      pad={{ vertical: "small" }}
    >
      <Box justify="center">
        <SelectionSummary selected={selected} data={data} />
      </Box>
      <ActionsMenu
        label="Actions"
        items={[
          {
            label: "Add",
            onClick: () => {
              ActionHandler(selected);
            }
          },
          {
            label: "Remove",
            onClick: () => {
              ActionHandler(selected);
            }
          }
        ]}
      />
    </Box>
  );
};

TableControls.propTypes = {
  selected: PropTypes.array
};

const SelectionSummary = ({ selected }) => {
  return (
    <>
      {selected && (
        <>
          {selected.length > 0 ? (
            <Box direction="row" gap="xxsmall">
              <Text size="small" weight="bold">
                {selected.length}
              </Text>
              <Text size="small">of</Text>
              <Text size="small" weight="bold">
                {data.length}
              </Text>
              <Text size="small">deserts selected</Text>
            </Box>
          ) : (
            <Box direction="row" gap="xxsmall">
              <Text size="small" weight="bold">
                {data.length}
              </Text>
              <Text size="small">deserts</Text>
            </Box>
          )}
        </>
      )}
    </>
  );
};

SelectionSummary.propTypes = {
  selected: PropTypes.array
};
