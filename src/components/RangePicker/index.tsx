import { useState } from 'react';
import { styled, Box, Slider, Input } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

const StyledInput = styled(Input)`
  width: 100px;
`;

interface Props {
  minCoverage: number;
  maxCoverage: number;
  setSelectedUserCoverage: Dispatch<SetStateAction<number | undefined>>;
  isProductAdded?: boolean;
}

const RangePicker = (props: Props) => {
  const { minCoverage, maxCoverage, setSelectedUserCoverage, isProductAdded } =
    props;
  const [value, setValue] = useState<number | string | Array<number | string>>(
    minCoverage,
  );

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
    setSelectedUserCoverage(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);
    let valueInRange;

    if (inputValue > maxCoverage) {
      valueInRange = maxCoverage;
    } else if (inputValue < minCoverage) {
      valueInRange = minCoverage;
    } else {
      valueInRange = inputValue;
    }
   
    setValue(event.target.value === '' ? '' : inputValue);
    setSelectedUserCoverage(valueInRange);
  };

  const handleBlur = () => {
    if (value < minCoverage) {
      setValue(minCoverage);
    } else if (value > maxCoverage) {
      setValue(maxCoverage);
    }
  };

  const inputValidation = () => {
    if (value > maxCoverage || value < minCoverage) {
      return true;
    }
    return false;
  };

  const marks = [
    {
      value: minCoverage,
      label: minCoverage,
    },
    {
      value: maxCoverage,
      label: maxCoverage,
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        alignContent: 'stretch',
      }}>
      <Box width={200}>
        <Slider
          aria-label="Always visible"
          valueLabelDisplay="auto"
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          min={minCoverage}
          max={maxCoverage}
          marks={marks}
          disabled={isProductAdded}
        />
      </Box>
      <Box width={225}>
        <StyledInput
          error={inputValidation()}
          value={value}
          size="medium"
          onChange={handleInputChange}
          onBlur={handleBlur}
          disabled={isProductAdded}
          inputProps={{
            step: 1,
            min: minCoverage,
            max: maxCoverage,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Box>
    </Box>
  );
};

export default RangePicker;
