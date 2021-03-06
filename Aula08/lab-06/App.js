
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CompromissoLista from './screens/CompromissoLista';
import CompromissoHome from './screens/CompromissoHome'

const RootStack = createStackNavigator({
  Home: {
    navigationOptions : {
      title: 'Home',
    },
    screen: CompromissoHome
  },
  Lista: {
    navigationOptions : {
      title: 'Lista',
    },
    screen: CompromissoLista
  }
});

export default createAppContainer(RootStack);