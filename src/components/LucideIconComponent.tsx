import { icons } from 'lucide-react';

interface Icon{
  name: string,
  color: string,
  size: number,
}

const Icon = ({ name, color, size }: Icon) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
  
};

export default Icon;