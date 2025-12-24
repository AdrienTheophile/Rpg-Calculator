import React from "react";

type StatDisplayProps = {
  damage: number;
  defense: number;
};

export const StatDisplay = ({ damage, defense }: StatDisplayProps) => {
  return (
    <div class="border: 1px solid white; padding: 20px">
      ⚔️ Dégâts : {damage} <br /> 🛡️ Défense : {defense}
    </div>
  );
};
