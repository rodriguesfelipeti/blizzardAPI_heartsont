import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image, ScrollView  } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Constants from 'expo-constants';


type cards = any[] | any;

export default function TabOneScreen() {

  const [state, setState] = useState<cards>()

  console.log('Pagina Carregada')

  React.useEffect( () => {
    // const newLocal = 'https://us.api.blizzard.com/hearthstone/deck/AAECAQcG%2Bwyd8AKS%2BAKggAOblAPanQMMS6IE%2Fweb8wLR9QKD%2BwKe%2BwKz%2FAL1gAOXlAOalAOSnwMA?locale=pt_BR&access_token=US7KXLRuO4WLtaAtzE26AHidGtGUax4FsS';
    const newLocal = 'https://us.api.blizzard.com/hearthstone/cards?locale=pt_BR&access_token=US7KXLRuO4WLtaAtzE26AHidGtGUax4FsS'
    fetch(newLocal)
    .then(res => res.json())
    .then(res => { setState(res.cards) })
  }, [])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });

  console.log(state)

  return (
    <ScrollView style={styles.scrollView}>
    <View>
      {state && state.map( (card: { id: number; image: string; name: string; flavorText: string }, index: string | number | undefined)  => {
        return(
          <Card key={index} title={card.name}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: 'hidden' }}>
                      <View style={{ height: 480, width: 300,  overflow: 'hidden' }}>
                        <Image
                          source={{uri:card.image }}
                          style={{
                            width: 300,
                            height: 450,
                          }}
                        />
                      </View>
                      <View style={{ padding: 10, width: 300 }}>  
                        <Text style={{ color: "#777", paddingTop: 5 }}>
                            {card.flavorText}
                        </Text>
                      </View>
                    </View>
              </View>
            </Card>
        )
      })
      }
    </View>
    </ScrollView>
  );
}
