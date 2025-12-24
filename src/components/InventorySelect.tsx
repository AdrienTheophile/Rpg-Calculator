import { Item } from "../data";

type InventorySelectProps = {
  label: string;
  items: Item[];
  selectedItem: Item;
  onSelect: (item: Item) => void;
};

export const InventorySelect = ({
  label,
  items,
  selectedItem,
  onSelect,
}: InventorySelectProps) => {
  return (
    <div>
      <label>{label}</label>

      <select
        value={selectedItem.id}
        onChange={(e) => {
          const id = parseInt(e.target.value);
          const found = items.find((i) => i.id === id);
          if (found) {
            onSelect(found);
          }
        }}
      >
        {items.map((weapon) => (
          <option key={weapon.id} value={weapon.id}>
            {weapon.name}
          </option>
        ))}
      </select>
    </div>
  );
};
