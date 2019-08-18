import * as React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Constants } from 'expo';
import {icons} from '@expo/vector-icons/FontAwesome5';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      temperature: '20',
      weather: 'sunny',
      icon: 'sunny.png',
      temperature0:'10',
      weather0: 'sunny',
      date0: '01-01',
      icon0: 'sunny.png',
      temperature1:'10',
      weather1: 'sunny',
      date1: '01-01',
      icon1: 'sunny.png',
      temperature2:'10',
      weather2: 'sunny',
      date2: '01-01',
      icon2: 'sunny.png',
      temperature3:'10',
      weather3: 'sunny',
      date3: '01-01',
      icon3: 'sunny.png',
    };
  }
  async componentDidMount(){
     const data = {
      lat: -36.8485,
      lon: 174.7633,
      appid: 'd1580a5eaffdf2ae907ca97ceaff0235',
    };
     const url = 'https://api.openweathermap.org/data/2.5/forecast?lat='+data.lat+'&lon='+data.lon+'&APPID='+data.appid;
     let today = new Date();

    try{
      const response = await fetch(url);
      let json = await response.json();
      
      let weatherlist = json.list[0];
      let tempo = weatherlist.main.temp - 273.15;
      let temp = parseInt(tempo, 10);
      let weath = weatherlist.weather[0].main;
      
      let icon = this.findIcon(weatherlist.weather[0].icon);
      console.log(temp);
      let forecasts = [];
      
        let forecastList1 = json.list[7]
        this.state.date0= (today.getMonth()+1)+'-'+(today.getDate()+1+0);
        this.state.temperature0 = parseInt((forecastList1.main.temp - 273.15),10);
        this.state.icon0 = this.findIcon(forecastList1.weather[0].icon);
        this.state.weather0 = forecastList1.weather[0].main;

        let forecastList2 = json.list[15]
        this.state.date1= (today.getMonth()+1)+'-'+(today.getDate()+1+1);
        this.state.temperature1 = parseInt((forecastList2.main.temp - 273.15),10);
        this.state.icon1 = this.findIcon(forecastList2.weather[0].icon);
        this.state.weather1 = forecastList2.weather[0].main;

        let forecastList3 = json.list[23]
        this.state.date2= (today.getMonth()+1)+'-'+(today.getDate()+1+2);
        this.state.temperature2 = parseInt((forecastList3.main.temp - 273.15),10);
        this.state.icon2 = this.findIcon(forecastList3.weather[0].icon);
        this.state.weather2 = forecastList3.weather[0].main;

        let forecastList4 = json.list[31]
        this.state.date3= (today.getMonth()+1)+'-'+(today.getDate()+1+3);
        this.state.temperature3 = parseInt((forecastList4.main.temp - 273.15),10);
        this.state.icon3 = this.findIcon(forecastList4.weather[0].icon);
        this.state.weather3 = forecastList4.weather[0].main;
        
        
        this.state.temperature = temp;
        this.state.weather = weath;
        this.state.icon = icon;
        this.state.forecasts = forecasts;
        
    } catch(e) {
        console.log(e)
      }
    }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Body style = {{paddingTop:40,paddingLeft:96}}>
                <Text style = {{fontSize:30}}>Auckland</Text>
                <Text style = {{fontSize:60,paddingLeft:30,paddingTop:30}}>{this.state.temperature}</Text>
                <Text style = {{fontSize:20,paddingLeft:35,paddingTop:30}}>{this.state.weather}</Text>
                <Text style = {{paddingTop:30}}/>
                <Image source={require(this.state.icon)} style={{height: 150, width:150, flex: 1}} resizeMode={'contain'}/>
              </Body>
            </ListItem>
          </List>
          <List style = {{paddingLeft:40,paddingRight:40}}>
                <ListItem>
                  <Left style = {{paddingRight:20}}>
                    <Text style = {{fontSize:12}}>{this.state.date0}</Text>
                  </Left>
                  <Body style = {{paddingRight:60}}>
                    <Text style = {{fontSize:14}}>{this.state.temperature0}</Text>
                    <Text style = {{fontSize:11}}>{this.state.weather0}</Text>
                  </Body>
                  <Right>
                    <Thumbnail square source={require(this.state.icon0)} style={{height:50,width:50}} resizeMode={'contain'}/>
                  </Right>
                </ListItem>
              <ListItem>
                  <Left style = {{paddingRight:20}}>
                    <Text style = {{fontSize:12}}>{this.state.date1}</Text>
                  </Left>
                  <Body style = {{paddingRight:60}}>
                    <Text style = {{fontSize:14}}>{this.state.temperature1}</Text>
                    <Text style = {{fontSize:11}}>{this.state.weather1}</Text>
                  </Body>
                  <Right>
                    <Thumbnail square source={require(this.state.icon1)} style={{height:50,width:50}} resizeMode={'contain'}/>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left style = {{paddingRight:20}}>
                    <Text style = {{fontSize:12}}>{this.state.date2}</Text>
                  </Left>
                  <Body style = {{paddingRight:60}}>
                    <Text style = {{fontSize:14}}>{this.state.temperature2}</Text>
                    <Text style = {{fontSize:11}}>{this.state.weather2}</Text>
                  </Body>
                  <Right>
                    <Thumbnail square source={require(this.state.icon2)} style={{height:50,width:50}} resizeMode={'contain'}/>
                  </Right>
                </ListItem>
                  <ListItem>
                  <Left style = {{paddingRight:20}}>
                    <Text style = {{fontSize:12}}>{this.state.date3}</Text>
                  </Left>
                  <Body style = {{paddingRight:60}}>
                    <Text style = {{fontSize:14}}>{this.state.temperature3}</Text>
                    <Text style = {{fontSize:11}}>{this.state.weather3}</Text>
                  </Body>
                  <Right>
                    <Thumbnail square source={require(this.state.icon3)} style={{height:50,width:50}} resizeMode={'contain'}/>
                  </Right>
                </ListItem>
              </List>
        </Content>
      </Container>
    );
  }

  useless(){
    <Content>
    <Thumbnail square source={require('fog.png')} style={{height:50,width:50,flex:1}}/>
    <Thumbnail square source={require('sunny.png')} style={{height:50,width:50,flex:1}}/>
    <Thumbnail square source={require('rain.png')} style={{height:50,width:50,flex:1}}/>
    <Thumbnail square source={require('cloudy.png')} style={{height:50,width:50,flex:1}}/>
    <Thumbnail square source={require('mostlycloudy.png')} style={{height:50,width:50,flex:1}}/>
    <Thumbnail square source={require('partlysunny.png')} style={{height:50,width:50,flex:1}}/>
    <Thumbnail square source={require('thunder.png')} style={{height:50,width:50,flex:1}}/>
    <Thumbnail square source={require('partlycloudy.png')} style={{height:50,width:50,flex:1}}/>
    </Content>
  }
  findIcon(iconName){
    switch(iconName){
       case "01d":
                        return 'sunny.png'
                  
                    case "01n":
                        return 'sunny.png'
                    case "02d":
                        return 'partlycloudy.png'
                    case "02n":
                        return 'partlycloudy.png'
                    case "03d":
                        return 'cloudy.png'
                    case "03n":
                        return 'cloudy.png'
                    case "04d":
                        return 'mostlycloudy.png'
                    case "04n":
                        return 'mostlycloudy.png'
                    case "09d":
                        return 'sunnyrain.png'
                    case "09n":
                        return 'sunnyrain.png'
                    case "10d":
                        return 'rain.png'
                    case "10n":
                        return 'rain.png'
                       
                    case "11d":
                       return 'thunder.png'
                    case "11n":
                        return 'thunder.png'
                       
                    case "13d":
                       return 'mostlycloudy.png'
                    case "13n":
                        return 'mostlycloudy.png'
                    case "50d":
                        return 'fog.png'
                    case "50n":
                       return 'fog.png'
                    default:
                        return 'sunny.png'
    }
  }
}
