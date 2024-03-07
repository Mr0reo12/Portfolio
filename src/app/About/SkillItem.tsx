// SkillItem.tsx
import React from 'react';
import { IconType } from 'react-icons'; // Importa el tipo IconType para los íconos

type SkillItemProps = {
  title: string;
  level: string;
  Icon: IconType; // Añade la prop para el componente del ícono
};

const SkillItem: React.FC<SkillItemProps> = ({ title, level, Icon }) => {
  return (
    <div className="flex items-center gap-2">
      <Icon className="text-2xl" /> {/* Ajusta el tamaño y el color según sea necesario */}
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{level}</p>
      </div>
    </div>
  );
};

export default SkillItem;

