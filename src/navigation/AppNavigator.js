 import { StackNavigator} from "react-navigation";
 import SplashScreen from '../containers/SplashScreen';
import HomeScreen from '../containers/HomeScreen';
import Invitation from '../containers/Invitation';
import LocationScreen from '../containers/LocationScreen';
import GalleryView from '../containers/GalleryView';
import MapViewScreen from '../containers/MapViewScreen';
import MarriageMapView from '../containers/MarriageMapView';

const AppNavigator = StackNavigator({
    Splash:{ screen:SplashScreen},
    Home: { screen: HomeScreen },
    Gallery:{screen:GalleryView},
    Invitation:{screen:Invitation},
    Location:{screen:LocationScreen},
    MapView:{screen:MapViewScreen},
    MarriageMapView:{screen:MarriageMapView}
   
},
    {
        headerMode: 'none',
        initialRouteName: 'Splash'
    }
);

export default AppNavigator;