import React from 'react';

import { View, Text } from 'react-native';
import { DrawerItemsProps } from 'react-navigation';
import { Drawer } from 'react-native-paper';
import { constants, styles } from 'resources';
import { AuthService } from 'services';
import { Avatar } from 'elements';
import { object } from 'prop-types';

export class DrawerDialog extends React.Component<DrawerItemsProps, { active: string }> {

  state = {
    active: 'first',
  };
  render() {
    const { active } = this.state;

    return (
      <View style={Object.assign({},styles.fill, styles.padding)}>        
        <View style={styles.columnContainer}>
          <Avatar size={40} user={AuthService.loggedUser} />
        </View>
        <Drawer.Section title={AuthService.loggedUser.displayName} style={styles.fill}>
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
            onPress={() => {
              this.setState({ active: 'third' });
              this.props.navigation.closeDrawer();
              this.props.navigation.navigate(constants.navigation.settings)
            }}
          />
          <Drawer.Item
            label="Logout"
            active={active === 'fourth'}
            onPress={() => {
              this.setState({ active: 'fourth' });
              this.props.navigation.closeDrawer();
              AuthService.logout();
            }}
          />
        </Drawer.Section>
      </View>
    );
  }
}