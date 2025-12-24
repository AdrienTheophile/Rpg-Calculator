import "./App.css";
import BaseStatsForm from "./components/BaseStatsForm.tsx";
import { InventorySelect } from "./components/InventorySelect.tsx";
import { StatDisplay } from "./components/StatDisplay.tsx";
import { WEAPONS } from "./data";
import { ARMORS } from "./data";
import { useState } from "react";

function App() {
  const [strength, setStrength] = useState(10);
  const [selectedWeapon, setSelectedWeapon] = useState(WEAPONS[0]);
  const [selectedArmor, setSelectedArmor] = useState(ARMORS[0]);

  const totalDamage = strength + selectedWeapon.value;
  const totalDefense = selectedArmor.value;

  return (
    <div>
      <BaseStatsForm strength={strength} onStrengthChange={setStrength} />

      <InventorySelect
        label="Arme : "
        items={WEAPONS}
        selectedItem={selectedWeapon}
        onSelect={setSelectedWeapon}
      />

      <InventorySelect
        label="Armure : "
        items={ARMORS}
        selectedItem={selectedArmor}
        onSelect={setSelectedArmor}
      />

      <StatDisplay damage={totalDamage} defense={totalDefense} />
    </div>
  );
}

export default App;
