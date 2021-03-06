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
import { data as mockData, columns } from "./__data__/MockData";

export const NutritionTable = () => {
  const size = useContext(ResponsiveContext);
  const [data, setData] = useState(mockData);
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  console.log("data", data);
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
      <AddNutrition
        open={open}
        setOpen={setOpen}
        data={data}
        setData={setData}
      />
      <TableControls
        selected={selected}
        open={open}
        setOpen={setOpen}
        data={data}
        setData={setData}
      />
      <Box height={{ max: "large" }} overflow="auto">
        <DataTable
          data={data}
          columns={[...columns]}
          pin={size === "small"}
          select={selected}
          onSelect={setSelected}
          sort
        />
      </Box>
    </>
  );
};

const ActionsMenu = styled(Menu)`
  border: 1px solid
    ${({ theme }) => theme.global.colors.border[theme.dark ? "dark" : "light"]};
`;

const TableControls = ({ selected, setOpen, data, setData }) => {
  const AddNutrition = (records) => {
    setOpen(true);
  };
  const ActionHandler = (records, action) => {
    let filteredData;
    if (action === "remove") {
      filteredData = data.filter((each) => !records.includes(each.dessert));
      setData([...filteredData]);
    } else {
      filteredData = data.filter((each) => records.includes(each.dessert));
      setData([...data, ...filteredData]);
    }
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
              AddNutrition();
            }
          },
          {
            label: "Duplicate",
            onClick: () => {
              ActionHandler(selected, "duplicate");
            }
          },
          {
            label: "Remove",
            onClick: () => {
              ActionHandler(selected, "remove");
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

const SelectionSummary = ({ selected, data }) => {
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
