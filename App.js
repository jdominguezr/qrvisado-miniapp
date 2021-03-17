import React from "react"
import QRCodeScanner from "react-native-qrcode-scanner"
import {Linking, Text, TouchableOpacity,Alert} from "react-native"
export default class App extends React.Component{

  ifScanned= e=>{
    Alert.alert(e.data);
  }
  render(){
    return(
      <QRCodeScanner
        containerStyle={{backgroundColor:"#FFF", marginBottom:"35%"}}
        onRead={this.ifScanned}
        reactivate={true}
        permissionDialogMessage="Need Permission to Access Camera"
        reactivateTimeout={10}
        showMarker={true}
        markerStyle={{borderColor:"#FFF",borderRadius:10}}
        bottomContent={
          <TouchableOpacity>
            <Text style={{fontSize:21, color:'rgb(0,122,255)'}}></Text>
          </TouchableOpacity>
        }/>
    )
  }
}