import React from 'react';
import { StyleSheet } from 'react-native';
import { RecipesIcon } from '../../elements';
import Masonry from 'react-native-masonry';





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
        title: 'Recipes',
        tabBarLabel: 'Recipes',
        tabBarIcon: RecipesIcon
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }

});