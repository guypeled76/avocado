import { StyleSheet, Platform } from "react-native";


export const styles = StyleSheet.create({
    fill : {
        flex:1
    },
    columnContainer: {
        flexDirection:'column'
    },
    rowContainer: {
        flexDirection:'row'
    },
    padding : {
        padding:10
    },

    fillSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    
});