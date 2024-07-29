import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const lightTheme = {
  backgroundColor: '#fff',
  bodyBackgroundColor: '#f5f5f5',
  mainTextColor: '#333',
  secondTextColor: '#fff',
  mainColor: '#1666f0',
  mainActiveColor: '#2063d8',
  secondColor: '#e2e2e2',
  secondActiveColor: '#3678E8',
  thirdColor: '#ccc',
  thirdActiveColor: '#737373',
  tutorialMainColor: '#fcb430',
  tutorialSecondColor: '#ffa600'
};
const darkTheme = {
  backgroundColor: '#313131',
  bodyBackgroundColor: '#1e1e1e',
  mainTextColor: '#fff',
  secondTextColor: '#fff',
  mainColor: '#72a6ff',
  mainActiveColor: '#6ba1ff',
  secondColor: '#424242',
  secondActiveColor: '#498cff',
  thirdColor: '#757575',
  thirdActiveColor: '#bdbdbd',
  tutorialMainColor: '#f19d01',
  tutorialSecondColor: '#fcb430'
};
export default function ThemeContextProvider ({ children }) {
  const oldTheme = localStorage.getItem('theme') || 'light';
  const [activeTheme, setActiveTheme] = useState(oldTheme);
  const theme = activeTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
