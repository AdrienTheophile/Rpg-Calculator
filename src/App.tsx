import "./App.css";
import BaseStatsForm from "./components/BaseStatsForm.tsx";
import { CharacterPreview } from "./components/CharacterPreview.tsx";
import { InventorySelect } from "./components/InventorySelect.tsx";
import { StatDisplay } from "./components/StatDisplay.tsx";
import { useState, useMemo, useEffect } from "react";
import { Item } from "./data.ts";

function calculateDamageIsSlow(strength: number, weapon: Item): number {
  if (!weapon) {
    return strength;
  }
  return strength + weapon.value;
}

function App() {
  const [strength, setStrength] = useState(10);

  const [armorList, setArmorList] = useState<Item[]>([]);
  const [weaponList, setWeaponList] = useState<Item[]>([]);

  const [selectedWeapon, setSelectedWeapon] = useState([]);
  const [selectedArmor, setSelectedArmor] = useState([]);

  const totalDamage = useMemo(() => {
    return calculateDamageIsSlow(strength, selectedWeapon);
  }, [strength, selectedWeapon]);

  const totalDefense = selectedArmor ? selectedArmor.value : 0;

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/armors")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const armors = data.member.map((armorAPI) => ({
          id: armorAPI.id,
          name: armorAPI.name,
          value: armorAPI.defense,
          image: armorAPI.image,
        }));
        setArmorList(armors);
      });

    fetch("http://127.0.0.1:8000/api/weapons")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const weapons = data.member.map((weaponAPI) => ({
          id: weaponAPI.id,
          name: weaponAPI.name,
          value: weaponAPI.damage,
          image: weaponAPI.image,
        }));
        setWeaponList(weapons);
      });
  }, []);

  // Surveille la liste d'armes. Dès qu'elle se remplit, on prend la 1ère.
  useEffect(() => {
    if (weaponList.length > 0) {
      setSelectedWeapon(weaponList[0]);
    }
  }, [weaponList]);

  // Surveille la liste d'armures. Dès qu'elle se remplit, on prend la 1ère.
  useEffect(() => {
    if (armorList.length > 0) {
      setSelectedArmor(armorList[0]);
    }
  }, [armorList]);

  return (
    <div className="dashboard">
      <div className="character-panel">
        <CharacterPreview weapon={selectedWeapon} armor={selectedArmor} />
      </div>

      <div className="controls-panel">
        <BaseStatsForm strength={strength} onStrengthChange={setStrength} />

        <InventorySelect
          label="Arme : "
          items={weaponList}
          selectedItem={selectedWeapon}
          onSelect={setSelectedWeapon}
        />

        <InventorySelect
          label="Armure : "
          items={armorList}
          selectedItem={selectedArmor}
          onSelect={setSelectedArmor}
        />

        <StatDisplay damage={totalDamage} defense={totalDefense} />
      </div>
    </div>
  );
}

export default App;
