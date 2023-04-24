import React from 'react';
import { Box, Column, Heading } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import logo from '../logo.png';

const Header = () => {
  return (
    <Box display="flex" direction="row" paddingY={2} color="lightWash">
      <Column span={10}>
        <Box padding={3} display="flex">
          <img
            src={logo}
            alt=""
            style={{
              width: '3rem',
              height: '3rem',
              marginRight: '17rem',
              marginLeft: '3rem',
            }}
          />
          <Heading size="lg" id="h1"> Digital E-Sign</Heading>
        </Box>
      </Column>
    </Box>
  );
};

export default Header;
