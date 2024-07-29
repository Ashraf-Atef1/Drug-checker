import DrugsInformationsProvider from '../context/drugs-informations.context';
import InteractionsListProvider from '../context/interactions-list.context';
import InteractionsResultsProvider from '../context/interactions-results.context';
import ImagesProvider from '../context/images.context';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../app.sytle.jsx';
import LoadingSpinner from '../components/global-components/loading-spinner/loading-spinner.component.jsx';
import { LoadingContext } from '../context/loading.context';
import Tutorial from '../components/global-components/tutorial/tutorial.component';
import useTutorial from '../hooks/tutorial.hook.jsx';

export default function Provider ({ children }) {
  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(LoadingContext);
  const { tutorialMode } = useTutorial();

  return (
    <DrugsInformationsProvider>
      <InteractionsListProvider>
        <InteractionsResultsProvider>
          <ImagesProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              {isLoading && <LoadingSpinner />}
              {(tutorialMode && !isLoading) && <Tutorial />}
              {children}
            </ThemeProvider>
          </ImagesProvider>
        </InteractionsResultsProvider>
      </InteractionsListProvider>
    </DrugsInformationsProvider>
  );
}
