import { Outlet } from 'react-router-dom';
import NavigationSection from '../../components/navigation-section/navigation-section.component';

export default function Navigation () {
  return (
    <>
      <NavigationSection />
      <Outlet />
    </>
  );
}
