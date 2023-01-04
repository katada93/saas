import { icons } from '../../../assets/icons';

interface IconsProps {
  name: keyof typeof icons;
  className?: string;
}

export const Icon = ({ name, className }: IconsProps): JSX.Element => {
  const Glyph = icons[name];

  return <Glyph name={name} className={className} />;
};
