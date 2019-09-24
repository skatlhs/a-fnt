import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import NextArrowButton from "../components/buttons/NextArrowButton";
import GradientButton from "../components/buttons/GradientButton";
import { Fonts } from "../assets/utils/fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import InputField from "../components/form/InputField";
import Notification from '../components/Notification';
import Loader from '../components/Loader';
import LinearGradient from "react-native-linear-gradient";
const COLORS_GRADIENTS = ["#ff3d78", "#ff7537"];

class LogIn extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.white,
  });

  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      validEmail: false,
      emailAddress: '',
      password: '',
      validPassword: false,
      loadingVisible: false,
    }
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
  }

  handleNextButton() {
  	this.setState({ loadingVisible: true });

  	setTimeout(() => {
      const { emailAddress, password } = this.state;
      if (this.props.logIn(emailAddress, password)) {
        this.setState({ formValid: true, loadingVisible: false });
      } else {
        this.setState({ formValid: false, loadingVisible: false });
      }
    }, 2000);
  }

  handleCloseNotification() {
    this.setState({ formValid: true });
  }

  handleEmailChange(email) {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ emailAddress: email });

    if (!this.state.validEmail) {
      if (emailCheckRegex.test(email)) {
      	this.setState({ validEmail: true });
      }
    } else {
      if (!emailCheckRegex.test(email)) {
      	this.setState({ validEmail: false });
      }
    }
  }

  handlePasswordChange(password) {
    this.setState({ password });
    if (!this.state.validPassword) {
      if (password.length > 4) {
      	//Password has to be at least 4 characters long
      	this.setState({ validPassword: true });
      }
    } else if (password <= 4) {
      this.setState({ validPassword: false });
    }
  }

  toggleNextButtonState() {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  }

  render() {
  	const { formValid, loadingVisible, validEmail, validPassword } = this.state;
  	const showNotification = formValid ? false : true;
  	const background = formValid ? colors.green01 : colors.darkOrange;
  	const notificationMarginTop = showNotification ? 10 : 0;
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.centerWrapper}>
          <Image
            source={require("../assets/img/bestrongLogoColors.png")}
            style={styles.logo2}
          />
          <Text style={styles.slogan}>A new way to socialize</Text>
        </View>

        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeading}>Log In</Text>
            <InputField
              labelText="email"
              labelTextSize={18}
              labelColor={colors.peach}
              borderColor={colors.peach}
              textColor={colors.peach}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handleEmailChange}
              showCheckmark={validEmail}
              autoFocus={false}
              checkColor={colors.peach}
            />

            <InputField
              labelText="password"
              labelTextSize={18}
              labelColor={colors.mainOrange}
              borderColor={colors.mainOrange}
              textColor={colors.mainOrange}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handlePasswordChange}
              showCheckmark={validPassword}
              checkColor={colors.mainOrange}
            />

          <NextArrowButton
            text="Log In"
            handleNextButton={this.handleNextButton}
            //disabled={this.toggleNextButtonState()}
          />
              
            <View style={styles.centerWrapper}>
              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>
        <View style={showNotification ? {marginTop: 10} : {}}>
            <Notification
              showNotification={showNotification}
              handleCloseNotification={this.handleCloseNotification}
              type="Error:"
              firstLine="Ooops! Looks like your log in info is wrong : /"
              secondLine="Give it another shot!"
             />
          </View>
        <Loader
          modalVisible={loadingVisible}
          animationType="fade"
        />
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    fontFamily: Fonts.JosefinSansBold
  },

  scrollViewWrapper: {
    marginTop: 5,
    flex: 1,
    padding: 30,
  },

  scrollView: {
    flex: 1
  },

  centerWrapper: {
    alignItems: "center"
  },

  slogan: {
    fontFamily: Fonts.JosefinSansBold,
    color: colors.peach,
    marginBottom: 15
  },

  welcomeBack: {
    fontFamily: Fonts.JosefinSansBold,
    color: colors.peach,
    marginBottom: 20,
    fontSize: 22
  },

  logo2: {
    height: 60,
    width: 140,
    marginTop: 30,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  loginHeading: {
    fontFamily: Fonts.JosefinSansBold,
    fontSize: 40,
    letterSpacing: -1,
    color: colors.peach,
    marginBottom: 20
  },

  buttonIcon: {
    color: colors.peach,
    position: "relative",
    left: 20,
    top: 2,
    zIndex: 8
  },

  forgot: {
    color: colors.mainOrange
  },

  spacer: {
    marginTop: 15,
    marginBottom: 15
  },

  loginButton: {
    width: "100%",
    padding: 13,
    borderRadius: 10,
    marginBottom: 20
  },

  myWidth: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  centerText: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 20
  }
});

const mapStateToProps = (state) => {
  return {
    loggedInStatus: state.loggedInStatus,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);