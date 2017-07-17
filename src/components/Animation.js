import React, {Component} from 'react';
import {StyleSheet, View, Animated, Easing, Dimensions} from 'react-native';


styles = StyleSheet.create({
    animatedPicture:{
    }
})

export default class Animation extends Component{

    constructor (props) {
        super(props)
        this.spinValue = new Animated.Value(0)
    }

    componentDidMount(){
        this.spin()
    }

    spin(){
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear,
                useNativeDriver: true
            },
        ).start(() => this.spin())
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        const movinMargin = this.spinValue.interpolate({
            inputRange : [0,1],
            outputRange: [0,Dimensions.get("screen").height]
        })
        return(
            <View>
                <Animated.Image
                    style = {{
                    width: 227,
                    height: 200,
                    transform: [{translateY:movinMargin}]}}
                    source = {{uri: 'https://s-media-cache-ak0.pinimg.com/564x/8b/1d/48/8b1d48429ada83a84846b6981899d49a.jpg' }}
                />
            </View>
        );
    }
}