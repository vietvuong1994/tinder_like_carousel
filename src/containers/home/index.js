import React from 'react';
import {
  Pressable,
  Text,
  StatusBar,
  View,
  ActivityIndicator,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import styles from './style';
import CardItem from '../../components/cardItem';
import {getUserData} from '../../commons/api';
import SwipeCards from 'react-native-swipe-cards';
import Realm from 'realm';
import UserSchema from '../../schemas/UserSchema';
import NetInfo from '@react-native-community/netinfo';
import RNFS from 'react-native-fs';
import Toast from 'react-native-root-toast';

const realmOption = {
  path: 'tindertinderß.realm',
  schema: [UserSchema],
};

const HomeContainer = props => {
  const [userState, setUsers] = React.useState([]);
  const [networkConnected, setConnected] = React.useState([]);
  React.useEffect(() => {
    console.disableYellowBox = true;
    Orientation.lockToPortrait();
    NetInfo.fetch().then(state => {
      console.log('isConnected: ', state.isConnected);
      setConnected(state.isConnected);
      if (state.isConnected) {
        loadApiData();
      } else {
        loadLocalData();
      }
    });
  }, []);

  const loadLocalData = () => {
    Realm.open(realmOption)
      .then(realm => {
        console.log('Load: ', realm.objects('User'));
        if (realm.objects('User')) {
          let jsonData = [];
          for (let cat of realm.objects('User')) {
            jsonData.push(JSON.parse(JSON.stringify(cat)));
          }
          setUsers(jsonData);
        }
        realm.close();
      })
      .catch(e => console.log('Error: ', e));
  };

  const loadApiData = async () => {
    let newUsers = [];
    for (i = 0; i < 10; i++) {
      const data = await getUserData();
      if (data != null) {
        const cartData = data[0].user;
        const {
          username,
          picture,
          phone,
          password,
          gender,
          location,
        } = cartData;
        const userData = {
          username,
          picture,
          phone,
          password,
          gender,
          street: location.street,
        };

        newUsers.push(userData);
      }
    }
    setUsers([...userState, ...newUsers]);
  };

  const cardRemoved = index => {
    let CARD_REFRESH_LIMIT = 6;
    if (userState.length - index <= CARD_REFRESH_LIMIT) {
      loadApiData();
    }
  };

  

  const handleYup = card => {
    Realm.open(realmOption)
      .then(realm => {
        realm.write(() => {
          realm.create('User', card);
        });
        realm.close();
        Toast.show('Add to your favorite!', {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });
      })
      .catch(e => console.log('Error: ', e));
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {userState.length == 0 ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <SwipeCards
            cards={userState}
            renderCard={(card, index) => {
              return <CardItem data={card} key={index}/>;
            }}
            renderNoMoreCards={() => (
              <Text style={styles.noCard}>No more card!</Text>
            )}
            loop={!networkConnected}
            cardRemoved={index =>
              networkConnected ? cardRemoved(index) : null
            }
            handleYup={card => (networkConnected ? handleYup(card) : null)}
            showYup={false}
            showNope={false}
            onClickHandler={() => null}
          />
        )}
      </View>
    </>
  );
};

export default HomeContainer;
