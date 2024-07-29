import { ReactComponent as HomeIcon } from '../../../assets/home.svg';
import { ReactComponent as ImageSearchIcon } from '../../../assets/image-search.svg';
import { ReactComponent as InteractionsListIcon } from '../../../assets/interactions-list.svg';
import { ReactComponent as AboutIcon } from '../../../assets/about.svg';
import { NavigationButton, NavigationIcon } from './navigation-link.style';
import { useLocation } from 'react-router-dom';

const icons = {
  home: HomeIcon,
  imageSearch: ImageSearchIcon,
  interactionsList: InteractionsListIcon,
  about: AboutIcon
};

export default function NavigationLink ({ to, icon, drugsNumber, children }) {
  const activeState = useLocation().pathname === to;
  return (
    <NavigationButton to={to} className={activeState ? 'active' : ''}>
      <NavigationIcon as={icons[icon]} />
      {children}
      {drugsNumber !== undefined ? <span>{drugsNumber}</span> : null}
    </NavigationButton>
  );
}
