import React, { Component } from 'react';
import propTypes from 'prop-types';
import colors from '../styles/colors';
import { View, Image, Modal, Text, StyleSheet } from 'react-native';
import { Fonts } from "../assets/utils/fonts";

export default class Loader extends Component {
  render() {
    const { animationType, modalVisible } = this.props;
    return(
      <Modal
        animationType={animationType}
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.wrapper}>
          <View style={styles.loaderBg}>
            <View style={styles.loaderContainCenter}>
              <Image 
                style={styles.imgLoader}
                source={require("../assets/img/colorLoad.gif")}
              />
              <Text style={styles.loadingText}>Just a sec!</Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

Loader.propTypes = {
  animationType: propTypes.string.isRequired,
  modalVisible: propTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    backgroundColor: 'rgba(0, 0, 0, 0.63)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  },
  
  loaderBg: {
    backgroundColor: colors.white,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -45,
    marginTop: -45,
    width: 105,
    height: 105,
    borderRadius:20,
  },
  
  loaderContainCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  imgLoader: {
    zIndex: 10,
    width: 80,
    height: 80,
    top: 12
  },
  
  loadingText: {
    color: colors.white,
    fontFamily: Fonts.RobotoBold,
    position: 'absolute',
    top: 110,
  }
  
});