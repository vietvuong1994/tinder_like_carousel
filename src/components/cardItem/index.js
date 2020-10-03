import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FastImage from 'react-native-fast-image';

const CardItem = props => {
  const {data} = props;
  const {username, picture, phone, password, street, gender} = data;
  const [tabIndex, setTabIndex] = React.useState(2);
  const tabIds = [0, 1, 2, 3, 4];

  const getTitle = () => {
    switch (tabIndex) {
      case 0:
        return 'name';
      case 1:
        return 'gender';
      case 2:
        return 'address';
      case 3:
        return 'phone number';
      case 4:
        return 'password';
      default:
        return null;
    }
  };

  const getContent = () => {
    switch (tabIndex) {
      case 0:
        return username;
      case 1:
        return gender;
      case 2:
        return street;
      case 3:
        return phone;
      case 4:
        return password;
      default:
        return null;
    }
  };

  const getIcon = index => {
    switch (index) {
      case 0:
        return 'user';
      case 1:
        return 'venus-mars';
      case 2:
        return 'map-marked-alt';
      case 3:
        return 'phone';
      case 4:
        return 'lock';
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContent} />
      <View style={styles.bottomContent}>
        <Text style={styles.title}>My {getTitle()} is</Text>
        <Text style={styles.content}>{getContent()}</Text>
        <View style={styles.tabContainer}>
          {tabIds.map((item, index) => (
            <Pressable
              onPress={() => setTabIndex(item)}
              key={index}
              style={styles.iconButton}>
              <Indicator active={tabIndex == item} />
              <FontAwesome5
                color={tabIndex == item ? '#84AE4B' : 'black'}
                size={20}
                name={getIcon(index)}
                solid
              />
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.avatarContainer}>
        <View style={styles.avatarBorder}>
          <FastImage source={{uri: picture}} style={styles.avatar} />
        </View>
      </View>
    </View>
  );
};

const Indicator = props => {
  const {active} = props;
  return active ? (
    <View style={styles.indicatorContainer}>
      <View style={styles.indicatorTriangle} />
      <View style={styles.indicatorLine} />
    </View>
  ) : (
    <View style={styles.indicatorContainer} />
  );
};

export default CardItem;
