import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps202381Navigator from '../features/Maps202381/navigator';
import Additem202380Navigator from '../features/Additem202380/navigator';
import Maps202376Navigator from '../features/Maps202376/navigator';
import UserProfile202372Navigator from '../features/UserProfile202372/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps202381: { screen: Maps202381Navigator },
Additem202380: { screen: Additem202380Navigator },
Maps202376: { screen: Maps202376Navigator },
UserProfile202372: { screen: UserProfile202372Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
