export interface Item {
  id: number;
  name: string;
  value: number;
  image: string;
}

export const WEAPONS: Item[] = [
  {
    id: 1,
    name: "Epée rouillée",
    value: 5,
    image: "/assets/weapons/weapon.png",
  },
  { id: 2, name: "Hache", value: 7, image: "/assets/weapons/weapon.png" },
  {
    id: 3,
    name: "Epée en bois",
    value: 3,
    image: "/assets/weapons/weapon.png",
  },
];

export const ARMORS: Item[] = [
  {
    id: 1,
    name: "Tunique en tissu",
    value: 1,
    image: "/assets/armors/armor.png",
  },
  {
    id: 2,
    name: "Armure en maille",
    value: 10,
    image: "/assets/armors/armor.png",
  },
  {
    id: 3,
    name: "Armure en cuir",
    value: 3,
    image: "/assets/armors/armor.png",
  },
];
