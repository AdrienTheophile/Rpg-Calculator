import type { Item } from "../data";
import React from "react";

type CharacterPreviewProps = {
  weapon: Item;
  armor: Item;
};

export const CharacterPreview = ({ weapon, armor }: CharacterPreviewProps) => {
  // Taille fixe pour le conteneur pour que les images se calent bien
  const containerStyle: React.CSSProperties = {
    position: "relative", //point de repère
    width: "600px",
    height: "700px",
    border: "2px solid #444",
    borderRadius: "10px",
  };

  // Style commun à toutes les images (pour se superposer
  const layoutStyle: React.CSSProperties = {
    position: "absolute", //permet d'empiler les images
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain", // Empêche l'image de s'étirer
  };

  return (
    <div style={containerStyle}>
      <img
        src="/assets/character/body.png"
        alt="Body Perso"
        style={{ ...layoutStyle, zIndex: 0 }}
      />

      {armor.image && (
        <img
          src={armor.image}
          alt={armor.name}
          style={{ ...layoutStyle, zIndex: 1 }}
        />
      )}

      {weapon.image && (
        <img
          src={weapon.image}
          alt={weapon.name}
          style={{ ...layoutStyle, zIndex: 2 }}
        />
      )}
    </div>
  );
};
