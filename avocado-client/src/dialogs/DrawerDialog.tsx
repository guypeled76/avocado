import React from 'react';

import {View, Text} from 'react-native';
import { DrawerItemsProps } from 'react-navigation';
import { Drawer } from 'react-native-paper';
import { constants } from 'resources';

export class DrawerDialog extends React.Component<DrawerItemsProps, {active:string}> {
  
    state = {
        active: 'first',
      };
    render() {
        const { active } = this.state;
    
        return (
          <Drawer.Section title="Some title">
            <Drawer.Item
              label="First Item"
              active={active === 'first'}
              onPress={() => { this.setState({ active: 'first' }); }}
            />
            <Drawer.Item
              label="Second Item"
              active={active === 'second'}
              onPress={() => { this.setState({ active: 'second' }); }}
            />
            <Drawer.Item
              label="Settings"
              active={active === 'third'}
              onPress={() => { this.setState({ active: 'third' }); 
              this.props.navigation.closeDrawer();
              this.props.navigation.navigate(constants.navigation.settings) }}
            />
         </Drawer.Section>
        );
      }
}