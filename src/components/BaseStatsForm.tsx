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
        value={strength}
        onChange={(e) => onStrengthChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default BaseStatsForm;
