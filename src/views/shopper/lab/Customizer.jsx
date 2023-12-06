import React, { useState } from 'react';
import Header from '../header/Header';
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Select,
} from '@chakra-ui/react';

function Customizer() {
  const [nailLength, setNailLength] = useState('');
  const [nailShape, setNailShape] = useState('');
  const [nailColor, setNailColor] = useState('#ff0000'); // Default color: red
  const [addOns, setAddOns] = useState({
    glitter: false,
    halo: false,
    chrome: false,
    frenchTip: false,
    freestyleBling: false,
    lines: { type: '', option: '' },
  });

  const handleNailLengthChange = e => {
    setNailLength(e.target.value);
  };

  const handleNailShapeChange = e => {
    setNailShape(e.target.value);
  };

  const handleNailColorChange = color => {
    setNailColor(color.hex);
  };

  const handleAddOnsChange = addOn => {
    setAddOns({
      ...addOns,
      [addOn]: !addOns[addOn],
    });
  };

  const handleLinesChange = (type, option) => {
    setAddOns({
      ...addOns,
      lines: { type, option },
    });
  };

  return (
    <>
    <Header />
      <Box p={4}>
        <Heading as="h1" mb={4}>
          Welcome to the Nail Customizer
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <FormControl mb={4}>
              <FormLabel>Select Nail Length:</FormLabel>
              <Select value={nailLength} onChange={handleNailLengthChange}>
                {/* Options for nail length */}
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Select Nail Shape:</FormLabel>
              <Select value={nailShape} onChange={handleNailShapeChange}>
                {/* Options for nail shape */}
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Nail Color:</FormLabel>
              <input
                type="color"
                value={nailColor}
                onChange={e => handleNailColorChange(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl mb={4}>
              <FormLabel>Add-Ons:</FormLabel>
              <CheckboxGroup
                colorScheme="teal"
                onChange={values =>
                  setAddOns({ ...addOns, [values]: !addOns[values] })
                }
              >
                <Checkbox value="glitter">Glitter</Checkbox>
                <Checkbox value="halo">Halo</Checkbox>
                <Checkbox value="chrome">Chrome</Checkbox>
                <Checkbox value="frenchTip">French Tip</Checkbox>
                <Checkbox value="freestyleBling">Freestyle Bling</Checkbox>
              </CheckboxGroup>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Lines:</FormLabel>
              {/* Options for lines */}
            </FormControl>
            <Button colorScheme="teal">Submit</Button>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
  
}

export default Customizer;
