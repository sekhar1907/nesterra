import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const deviceWidth = Dimensions.get('screen').width;
const deviceHigth = Dimensions.get('screen').height;

import {connect} from 'react-redux';
import {LocationKey, PhotoUrl} from '../../key';
class BackGroundCorsoul extends Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    // console.log(this.props.navigation);
  }

  images = this.props.photo;
  componentDidMount = () => {
    // console.log(this.data);
    //  this.back();
  };
  //   componentWillUnmount = () => {
  //     this.setState({
  //       selectedIndex: 0,
  //     });
  //   };
  back = () => {
    this.setState(
      prev => ({
        selectedIndex:
          prev.selectedIndex === this.props.images.length - 1
            ? 0
            : prev.selectedIndex + 1,
      }),
      () => {
        this.scrollRef.current.scrollTo({
          animated: true,
          y: 0,
          x: deviceWidth * this.state.selectedIndex,
        });
      },
    );
  };
  back1 = () => {
    this.setState(
      prev => ({
        selectedIndex:
          prev.selectedIndex === this.props.images.length - 1 ||
          prev.selectedIndex < this.props.images.length - 1
            ? prev.selectedIndex - 1
            : prev.selectedIndex,
      }),
      () => {
        this.scrollRef.current.scrollTo({
          animated: true,
          y: 0,
          x: deviceWidth * this.state.selectedIndex,
        });
      },
    );
  };
  selected = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const offSet = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(offSet / viewSize);
    this.setState({selectedIndex});
    //console.log(viewSize)
  };
  render() {
    ///console.log(this.props, 'iiiiiiiiii');
    const {imag} = this.props;
    const {selectedIndex} = this.state;
    return (
      <SafeAreaView style={{marginTop: StatusBar.currentHeight}}>
        <View style={styles.one}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              width: 28,
              zIndex: 30,
              height: 28,
              position: 'absolute',
              right: 20,
              top: 20,
              backgroundColor: '#007aff',
              borderRadius: 14,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>
              <Entypo name="cross" size={20} color="white" />
            </Text>
          </TouchableOpacity>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            onMomentumScrollEnd={this.selected}
            style={styles.imageVies}
            ref={this.scrollRef}>
            {/* <ImageZoom
              pinchToZoom="true"
              cropWidth={Dimensions.get('window').width}
              cropHeight={Dimensions.get('window').height}
              imageWidth={deviceWidth}
              imageHeight={deviceHigth}> */}
            {this.props.images.map((img, i) => {
              return (
                //   <Image
                //     style={{
                //       width: deviceWidth,
                //       height: deviceHigth,
                //       resizeMode: 'cover',
                //     }}
                //     source={{
                //       uri: `${PhotoUrl}${img.photo_reference}&key=${LocationKey}`,
                //     }}
                //   />
                <ImageZoom
                  key={i}
                  pinchToZoom={true}
                  enableCenterFocus={false}
                  cropWidth={Dimensions.get('window').width}
                  cropHeight={Dimensions.get('window').height}
                  imageWidth={deviceWidth}
                  imageHeight={deviceHigth}>
                  <ImageBackground
                    style={{width: deviceWidth}}
                    imageStyle={{
                      height: '100%',
                      resizeMode: 'contain',
                    }}
                    source={{
                      uri: `${PhotoUrl}${img.photo_reference}&key=${LocationKey}`,
                    }}>
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          width: '50%',
                          height: '100%',
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingLeft: 15,
                          justifyContent: 'flex-start',
                        }}>
                        {this.state.selectedIndex == 0 ? null : (
                          <TouchableOpacity onPress={this.back1}>
                            <View
                              style={{
                                width: 25,
                                height: 25,
                                borderRadius: 15,
                                backgroundColor: 'white',
                                opacity: 0.8,
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Entypo
                                name="chevron-small-left"
                                size={20}
                                color="black"
                              />
                            </View>
                          </TouchableOpacity>
                        )}
                      </View>
                      <View
                        style={{
                          width: '50%',
                          height: '100%',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          paddingRight: 15,
                        }}>
                        {this.state.selectedIndex ==
                        this.props.images.length - 1 ? null : (
                          <TouchableOpacity onPress={this.back}>
                            <View
                              style={{
                                width: 25,
                                height: 25,
                                borderRadius: 15,
                                backgroundColor: 'white',
                                opacity: 0.8,
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Entypo
                                name="chevron-small-right"
                                size={20}
                                color="black"
                              />
                            </View>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  </ImageBackground>
                </ImageZoom>
              );
            })}
            {/* </ImageZoom> */}
          </ScrollView>
        </View>
        {/* <View style={{width: '100%', height: 20}}>
          <View style={styles.circleView}>
            {this.props.images.map((imag, i) => {
              return (
                <View
                  key={i}
                  style={[
                    styles.dot,
                    {backgroundColor: i === selectedIndex ? 'red' : 'green'},
                    {width: i === selectedIndex ? 7 : 5},
                    {height: i === selectedIndex ? 7 : 5},
                    {borderRadius: i === selectedIndex ? 7 : 5},
                  ]}></View>
              );
            })}
          </View>
        </View>  */}
        {/* {this.state.selectedIndex == this.props.images.length - 1 ? null : (
          <TouchableOpacity onPress={this.back}>
            <Text>next</Text>
          </TouchableOpacity>
        )}

        {this.state.selectedIndex == 0 ? null : (
          <TouchableOpacity style={{marginTop: 60}} onPress={this.back1}>
            <Text>prev</Text>
          </TouchableOpacity>
        )} */}
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  return {
    images: state.photo_url.photo_url,
  };
};
export default connect(mapStateToProps)(BackGroundCorsoul);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  one: {
    width: '100%',
    height: deviceHigth,
    //  backgroundColor:"#0A79DF"
  },
  cercalView: {},
  imageVies: {
    width: '100%',
    height: '100%',
    // backgroundColor:"green"
  },

  scroolview: {
    height: deviceWidth,
    height: '27.5%',
  },
  middle: {
    height: deviceWidth,
    height: '27.5%',
  },
  circleView: {
    width: '100%',
    height: '100%',
    marginTop: 30,
    //  backgroundColor:"red",
    opacity: 0.8,
    // zIndex:12,
    position: 'absolute',
    bottom: 0,
    // left:1,
    // marginHorizontal:10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    //  position:"absolute",

    margin: 2,
    //opacity:1
    //padding:3,
  },
});
