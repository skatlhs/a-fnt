import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Easing,
  Animated
} from "react-native";

import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import GradientButton from "../components/buttons/GradientButton";
import { Fonts } from "../assets/utils/fonts";
import Icon from "react-native-vector-icons/EvilIcons";
import propTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";
const COLORS_GRADIENTS = ["#ff3d78", "#ff7537"];

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionValue: new Animated.Value(100),
    };
    this.closeNotification = this.closeNotification.bind(this);
    this.animatedNotification = this.animatedNotification.bind(this);
  }
  
  animatedNotification(value) {
    const { positionValue } = this.state;
    Animated.timing(
      positionValue,
      {
        toValue: value,
        duration: 200,
        velocity: 3,
        tension: 2,
        friction: 8,
        easing: Easing.easeOutBack,
      }
    ).start();
  }
  
  closeNotification() {
    this.props.handleCloseNotification();
  }
  render() {
    const { type, firstLine, secondLine, showNotification} = this.props;
    showNotification ? this.animatedNotification(0) : this.animatedNotification(100);
    const { positionValue } = this.state;
    return(
      <Animated.View style={[{transform:[{ translateY: positionValue}]}, styles.wrapper]}>
      <LinearGradient
          style={styles.gradient}
          start={{ x: 1.0, y: 0.0 }}
          end={{ x: 0.0, y: 1.0 }}
          colors={COLORS_GRADIENTS}
        >
        <View style={styles.notificationContent}>
          <Text style={styles.errorText}>{type}</Text>
          <Text style={styles.errorMessage}>{firstLine}</Text>
          <Text style={styles.errorMessage}>{secondLine}</Text>
        </View>
      
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={this.closeNotification}
        >
          <Icon
            name="close"
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
      </LinearGradient>
      </Animated.View>
    );
  }
}

Notification.propTypes = {
  showNotification:propTypes.bool.isRequired,
  type: propTypes.string.isRequired,
  firstLine: propTypes.string,
  secondLine: propTypes.string,
  handleCloseNotification: propTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
    width: '100%',
  },
  
  notificationContent: {
    fontSize: 13,
    marginBottom: 2,
    width: '100%',
    marginLeft: 5
  },
  
  errorText: {
    color: '#ffffff',
    marginRight: 5,
    fontWeight: '500',

  },
  
  errorMessage: {
    marginBottom: 2,
    fontSize: 13,
    color: colors.white,
  },
  
  gradient: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    padding: 15,
    width: '100%'
  },
  
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 15,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.29)',
    borderRadius: 100
  }
  
});