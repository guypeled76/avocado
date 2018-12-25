import React from 'react';

import {UserInfo} from '../entities';

const UserContext = React.createContext<UserInfo|null>(null);


export const UserContextProvider = UserContext.Provider;
export const UserContextConsumer = UserContext.Consumer;

