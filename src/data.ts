export interface Item {
  id: number;
  name: string;
  value: number;
}

export const WEAPONS: Item[] = [
  { id: 1, name: "Epée rouillée", value: 5 },
  { id: 2, name: "Hache", value: 7 },
  { id: 3, name: "Epée en bois", value: 3 },
];

export const ARMORS: Item[] = [
  { id: 1, name: "Tunique en tissu", value: 1 },
  { id: 2, name: "Armure en maille", value: 10 },
  { id: 3, name: "Armure en cuir", value: 3 },
];
