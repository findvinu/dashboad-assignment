import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const SelectComponent = () => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value);
      };

  return (
    <FormControl
      sx={{ m: 1, minWidth: 120 }}
      size="small"
      className="selectWrapper"
    >
      <InputLabel id="demo-select-small-label">Weekly</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label="Weekly"
        onChange={handleChange}
        className="select"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
