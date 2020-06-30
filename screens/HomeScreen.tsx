import React, { useState } from 'react';
import { View, TextInput, Button,SafeAreaView, Text, Alert, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const UselessTextInput = (props: any) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
      />
    );
  }


const HomeScreen = () => {

    const [value, onChangeText] = useState();
    const [card, setCard] =useState()

    const handleSearch = () => {
        const newLocal = `https://us.api.blizzard.com/hearthstone/cards?locale=pt_BR&textFilter=${value}&access_token=US7KXLRuO4WLtaAtzE26AHidGtGUax4FsS`
        fetch(newLocal)
        .then(res => res.json())
        .then(res => { setCard(res) })
    }

    console.log(card)

    return(
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    backgroundColor: value,
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1,
                }}>
                <UselessTextInput
                    multiline
                    numberOfLines={4}
                    onChangeText={(text: React.SetStateAction<string>) => onChangeText(text)}
                    value={value}
                />
            </View>
            <View>
                <Button
                    title="Press me"
                    onPress={() => handleSearch()}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

export default HomeScreen