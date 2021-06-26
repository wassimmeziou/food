import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ListDetails from './src/screens/ListDetails';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: ListDetails,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Food',
    },
  }
);

export default createAppContainer(navigator);
