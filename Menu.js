import React from 'react';

import Work from './src/components/Work';
import Pix from './src/components/Pix';
import Client from './src/components/Client';
import Pagamento from './src/components/Pagamento';
import Dashboard from './src/components/pages/Dashboard';
import NewTask from './src/components/pages/NewTask';
import CustomDrawer from './src/estilo/CustomDrawer';
import LogOut from './src/components/LogOut';


import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Padrao from './src/estilo/Padrao';
import { View } from 'react-native';

const Drawer = createAppContainer(
  createDrawerNavigator(
    {
      Dashboard: {
        screen: () => <Dashboard />
      },
      Work: {
        screen: () => <View> <Work /> </View>
        
      },
      Pix: {
        screen: () => <Pix />,
      },
      Client: {
        screen: () => <Client />,
      },
      Pagamento: {
        screen: () => <Pagamento />,
        navigationOptions:{ title:'Payment'}
      },
      NewTask:{
        screen: () => <NewTask />,
        navigationOptions:{ title:'New Task'}
      },
      LogOut:{
        screen: () => <LogOut />
      }
    },
    {initialRouteName: 'Dashboard', contentComponent: CustomDrawer, drawerType:'slide' },
  ),
);

export default Drawer;
