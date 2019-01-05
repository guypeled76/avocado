import React from 'react';

import { ViewProps, Platform, KeyboardAvoidingView } from "react-native";
import { ReactNode } from "react";
import { styles } from 'resources';


export function AvoidKeyboard(props :{children?:ReactNode}) {
    return <KeyboardAvoidingView behavior= {(Platform.OS === 'ios')? "padding" : null}
    keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}
    style={styles.fill}>{props.children}</KeyboardAvoidingView>
}