import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreenn from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'

import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialBottomTabNavigator} from  'react-navigation-material-bottom-tabs'

import {Provider as AuthProvider} from './src/context/AuthContext'


const switchNavigator = createSwitchNavigator({
  loginFlow:createStackNavigator({
    Signup:SignupScreenn,
    Signin:SigninScreen
  }),
  mainFlow:createMaterialBottomTabNavigator({
    trackListFlow:createStackNavigator({
      TrackList:TrackListScreen,
      TrackDetail:TrackDetailScreen
    }),
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen
  })
})

const App = createAppContainer(switchNavigator)


export default() => {
  return (
    <AuthProvider><App /></AuthProvider>
  )
}