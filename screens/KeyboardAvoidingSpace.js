import * as React from "react";
import { Animated, Easing, Keyboard, Platform, StatusBar } from "react-native";
import { isIphoneX } from "./isIphoneX";

interface KeyboardAvoidingSpaceProps {
  onKeyboardWillShow?: (duration: number) => void;
  onKeyboardWillHide?: (duration: number) => void;
  offset?: number;
}

interface KeyboardAvoidingSpaceState {
  height: Animated.Value;
}

/**
 * Made with swag by yours truly
 * @author Brad "Swagalicious" Johnson
 */
export class KeyboardAvoidingSpace extends React.Component<
  KeyboardAvoidingSpaceProps,
  KeyboardAvoidingSpaceState
> {
  //   protected keyboardWillShowListener: {
  //     remove: any;
  //   };

  //   protected keyboardWillHideListener: {
  //     remove: any;
  //   };

  //   protected keyboardDidShowListener: {
  //     remove: any;
  //   };

  //   protected keyboardDidHideListener: {
  //     remove: any;
  //   };

  constructor(props: KeyboardAvoidingSpaceProps) {
    super(props);
    this.state = {
      height: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.bindListeners();
  }

  componentWillUnmount() {
    this.unbindListeners();
  }

  bindListeners() {
    if (Platform.OS === "ios") {
      this.keyboardWillShowListener = Keyboard.addListener(
        "keyboardWillShow",
        this.keyboardWillShow
      );
      this.keyboardWillHideListener = Keyboard.addListener(
        "keyboardWillHide",
        this.keyboardWillHide
      );
    } else {
      this.keyboardDidShowListener = Keyboard.addListener(
        "keyboardDidShow",
        this.keyboardWillShow
      );
      this.keyboardDidHideListener = Keyboard.addListener(
        "keyboardDidHide",
        this.keyboardWillHide
      );
    }
  }

  unbindListeners() {
    if (Platform.OS === "ios") {
      this.keyboardWillShowListener.remove();
      this.keyboardWillHideListener.remove();
    } else {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
    }
  }

  keyboardWillShow = (e: any) => {
    // because of iPhone X new screen settings, remove SafeAreaView padding-bottom when keyboard is open
    const SafeAreaViewPaddingBottom = 34;
    const duration = e && e.duration ? e.duration : 100;
    let notchHeight = 0;
    if (
      Platform.OS === "android" &&
      StatusBar.currentHeight &&
      StatusBar.currentHeight > 24
    ) {
      notchHeight = StatusBar.currentHeight;
    }
    if (this.props.onKeyboardWillShow) {
      this.props.onKeyboardWillShow(duration);
    }
    Animated.timing(this.state.height, {
      duration,
      easing: Easing.linear,
      toValue:
        e.endCoordinates.height +
        notchHeight -
        (this.props.offset || 0) -
        (isIphoneX() ? SafeAreaViewPaddingBottom : 0),
    }).start();
  };

  keyboardWillHide = (e: any) => {
    const duration = e && e.duration ? e.duration : 100;
    if (this.props.onKeyboardWillHide) {
      this.props.onKeyboardWillHide(duration);
    }
    Animated.timing(this.state.height, {
      duration,
      easing: Easing.linear,
      toValue: 0,
    }).start();
  };

  render() {
    return <Animated.View style={{ height: this.state.height }} />;
  }
}
