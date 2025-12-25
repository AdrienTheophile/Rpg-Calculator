import React from "react";

type BaseStatsFormProps = {
  strength: number;
  onStrengthChange: (value: number) => void;
};

const BaseStatsForm = ({ strength, onStrengthChange }: BaseStatsFormProps) => {
  return (
    <div>
      <label>Force : </label>
      <input
        type="number"
        min={1}
        value={strength}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          onStrengthChange(val < 1 ? 1 : val);
        }}
      />
    </div>
  );
};

export default BaseStatsForm;
