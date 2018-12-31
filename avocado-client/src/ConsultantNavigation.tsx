import React from 'react';

import { View,Text } from "react-native";
import { styles } from "resources";
import { AuthService } from "services";
import { Button } from 'react-native-elements';




export function ConsultantNavigation() {
    return <View style={styles.fill}>
        <Button onPress={AuthService.logout} title="logout"/>
    </View>;
}