import Login from './Login'
import Splash from './Splash'
import App from './App'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
const AppNavigator = createStackNavigator({
    Splash:{
        screen: Splash
    },
    Login:{
        screen: Login
    },
    App:{
        screen: App
    }
},{
    initialRouteName: 'Splash'
})
export default createAppContainer(AppNavigator);