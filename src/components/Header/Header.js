import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Box,
  Button,
  Header,
  Keyboard,
  ResponsiveContext,
  Text,
  TextInput
} from "grommet";
import { Search as SearchIcon } from "grommet-icons";
import Wlabs from "../Header/WLabs";

const StyledTextInput = styled(TextInput).attrs(() => ({
  "aria-labelledby": "search-icon-example"
}))``;

const MainHeader = () => {
  const size = useContext(ResponsiveContext);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused, setFocused]);

  return (
    <Header fill="horizontal" pad="none" background="background-front">
      <Button>
        <Box
          direction="row"
          align="start"
          // gap="medium"
          // pad maintains accessible hit target
          // non-responsive maintains same dimensions for mobile
          pad={{ vertical: "small" }}
          responsive={false}
        >
          <Wlabs width={50} height={90} />
          {(size !== "small" || (size === "small" && !focused)) && (
            <Box direction="row" gap="xsmall" wrap>
              <Text color="text-strong" size={"2xl"} weight="bold">
                Walmart
              </Text>
              <Text color="text-strong" size={"2xl"}>
                Labs
              </Text>
            </Box>
          )}
        </Box>
      </Button>
    </Header>
  );
};

export default MainHeader;
