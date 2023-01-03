import React from 'react';
import { ReactComponent as Dashboard } from '../../assets/sidebar/dashboard.svg';
import { ReactComponent as Tasks } from '../../assets/sidebar/tasks.svg';
import { ReactComponent as Contact } from '../../assets/sidebar/contacts.svg';
import { ReactComponent as Logout } from '../../assets/sidebar/logout.svg';
import { ReactComponent as Chat } from '../../assets/sidebar/chat.svg';

const icons = {
  Dashboard,
  Tasks,
  Contact,
  Logout,
  Chat,
};

interface IconsProps {
  name: keyof typeof icons;
  className?: string;
  stroke?: string;
}

const SideBarIcons = ({ name, className, stroke }: IconsProps): JSX.Element => {
  const Gryph = icons[name];

  return <Gryph name={name} className={className} stroke={stroke} />;
};

export default SideBarIcons;
