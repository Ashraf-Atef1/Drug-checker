import ThemeContextProvider from './context/theme.context';
import LoadingContextProvider from './context/loading.context';
import TutorialContextProvider from './context/tutorial.context';
import TutorialStepsContextProvider from './context/tutorial-steps.context';
import Provider from './providers/provider.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.route';
import Home from './routes/home/home.route';
import ImageSearch from './routes/image-search/image-search.route';
import InteractionsList from './routes/interactions-list/interactions-list.route';
import SeeImage from './routes/see-image/see-image.route';
import About from './routes/about/about.route';
import MoreInformation from './routes/more-information/more-information.route';

function App () {
  return (
    <ThemeContextProvider>
      <LoadingContextProvider>
        <TutorialContextProvider>
          <TutorialStepsContextProvider>
            <Provider>
              <Routes>
                <Route path='/' element={<Navigation />}>
                  <Route index element={<Home />} />
                  <Route path='/image-search' element={<ImageSearch />} />
                  <Route path='/interactions-list' element={<InteractionsList />} />
                  <Route path='/more-information' element={<MoreInformation />} />
                  <Route path='/see-image/*' element={<SeeImage />} />
                  <Route path='/about' element={<About />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
              </Routes>
            </Provider>
          </TutorialStepsContextProvider>
        </TutorialContextProvider>
      </LoadingContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
