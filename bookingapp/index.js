/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import UserContextProvider from './src/context/UserContext';

const Main = () => {
    return (
        <UserContextProvider>
            <App />
        </UserContextProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
