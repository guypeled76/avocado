import React from 'react';
import Masonry from 'react-native-masonry';
import { strings, icons, styles } from 'resources';





export class Recipes extends React.Component<{}, {}> {

    
    public state = { 
       
    };

    constructor(props : {}) {
        super(props);

        
    }

    public render() {
        return <Masonry style={styles.fill}
            columns={2} 
            bricks={[]}
            />;

    }

    static navigationOptions = {
        title: strings.views.recipes,
        tabBarLabel: strings.views.recipes,
        tabBarIcon: icons.navigation.recipes
    }
}

