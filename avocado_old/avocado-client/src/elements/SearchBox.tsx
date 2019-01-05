import React from 'react';

import { View, ViewStyle, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

export class SearchBox extends React.Component{

    render() {
        return <View style={styles.searchRow}>
        <SearchBar style={styles.searchBar}
            lightTheme
            icon={{ type: 'font-awesome', name: 'search' }}
            placeholder='Search...' round
            inputStyle={styles.searchInput}
            containerStyle={styles.searchContainer} />
    </View>;
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: 'white',
        flex:1
    },
    searchInput: {
        backgroundColor: 'white',
        borderColor:'lightgray',
        borderWidth:1
    },
    searchRow: {
        backgroundColor: 'white',
        alignItems: 'stretch',
        flexDirection: 'row',
        height: 45,
        borderWidth:0
    },
    searchBar: {
        flex: 1
    }
});