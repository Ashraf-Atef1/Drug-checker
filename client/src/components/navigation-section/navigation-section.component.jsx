import { Header, NavigationContainer, NavigationLogo, AppLogo, DarkModeIcon, LightModeIcon } from './navigation.style';
import NavigationLink from './navigation-link/navigation-link.component';
import { ReactComponent as logo } from '../../assets/logo.svg';
import { useContext } from 'react';
import { InteractionsListContext } from '../../context/interactions-list.context';
import { ThemeContext } from '../../context/theme.context';

export default function NavigationSection () {
  const { interactionsList } = useContext(InteractionsListContext);
  const { activeTheme, setActiveTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    setActiveTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  const ModeIcons = {
    dark: <LightModeIcon />,
    light: <DarkModeIcon />
  };

  return (
    <Header>
      <NavigationLogo className='app-logo' to='/'><AppLogo as={logo} alt='drug-checker-logo' /> Drug Checker</NavigationLogo>
      <NavigationContainer className='navigation-container'>
        <NavigationLink to='/' icon='home'>Home</NavigationLink>
        <NavigationLink to='/image-search' icon='imageSearch'>Image serach</NavigationLink>
        <NavigationLink to='/interactions-list' icon='interactionsList' drugsNumber={interactionsList.length}>Interactions list</NavigationLink>
        <NavigationLink to='/about' icon='about'>About</NavigationLink>
      </NavigationContainer>
      <div className='theme-mode' onClick={toggleTheme}>{ModeIcons[activeTheme]}</div>
    </Header>
  );
}
