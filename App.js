import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, PermissionsAndroid, Platform} from 'react-native';
import MapView from 'react-native-maps'
/* import Geolocation from '@react-native-community/geolocation'; */

const {width, height} = Dimensions.get('screen');

export default function App() {
  const [region, setRegion] = useState(null);


  function getMyLocation(){
    Geolocation.getCurrentPosition(() => {
      console.log('lat', info.coords.latitude)
      console.log('log', info.coords.longitude)
    })
  }

  return (
    <View style={styles.container}>
      <MapView 
        onMapReady={() => {
          Platform.OS === 'android' 
          PermissionsAndroid. request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(() => {
              console.log('USUARIO ACEITOU')
            })
          
        }} 
        style={{width: "90%", height: '50%'}}
        region={region}
        zoomEnableLed={true}
       /*  minZoomLevel={17} */
        showsUserLocation={true} //bolinha do usuario, ou seja, aonde ele ta no mapa
        loadingEnabled={true} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 