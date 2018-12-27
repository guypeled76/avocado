import React from 'react';
import { StyleSheet } from 'react-native';
import Masonry from 'react-native-masonry';
import { strings, icons } from 'resources';





export default class Timeline extends React.Component<{}, {}> {

    
    public state = { 
       
    };

    constructor(props : {}) {
        super(props);

        
    }

    public render() {
        return <Masonry style={styles.container}
            columns={2} // optional - Default: 2
            bricks={[]}
            />;

    }

    static navigationOptions = {
        title: strings.views.recipes,
        tabBarLabel: strings.views.recipes,
        tabBarIcon: icons.views.recipes
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }

});