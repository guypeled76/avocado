import React from 'react';

import {View, Text} from 'react-native';
import { DrawerItemsProps } from 'react-navigation';
import { Drawer } from 'react-native-paper';

export default class DrawerDialog extends React.Component<DrawerItemsProps, {active:string}> {
  
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
         </Drawer.Section>
        );
      }
}