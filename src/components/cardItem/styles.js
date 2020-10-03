import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 250,
    height: 270,
    overflow: 'hidden',
    borderRadius: 5
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  topContent: {
    borderBottomColor: '#D6D6D6',
    borderBottomWidth: 1,
    backgroundColor: '#F6F6F6',
    height: 110,
    marginBottom: 50,
  },
  bottomContent: {
    flex: 1,
    alignItems: 'center',
  },
  avatarBorder: {
    width: 130,
    height: 130,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D6D6D6',
    borderWidth: 1,
    position: 'absolute',
    backgroundColor: 'white',
  },
  avatarContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'red',
    top: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: '#AFAFAF',
    marginBottom: 5,
  },
  content: {
    fontSize: 18,
    color: 'black',
    marginBottom: 15,
  },
  tabContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
  },
  indicatorTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#84AE4B',
  },
  indicatorContainer: {
    alignItems: 'center',
    marginBottom: 5,
    height: 8,
  },
  indicatorLine: {
    height: 2,
    width: '100%',
    backgroundColor: '#84AE4B',
  },
  iconButton: {
    paddingHorizontal: 7
  }
});

export default styles;
