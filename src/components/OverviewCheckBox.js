import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function OverviewCheckBox() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Marketing dashboard app" />
      <FormControlLabel  control={<Checkbox />} label="Create new version 4.0" />

      <FormControlLabel control={<Checkbox defaultChecked />} label="User Testing" />
      <FormControlLabel
        
        control={<Checkbox defaultChecked />}
        label="Design systems"
      />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Awesome task" />
      <FormControlLabel  control={<Checkbox />} label="Marketing dashboard concept" />
    </FormGroup>
  );
}
