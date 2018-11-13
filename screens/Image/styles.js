import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'grey',
  },
  header: {
    backgroundColor: 'yellow',
    height: 80,
    width: DEVICE_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textimg: {
    width: DEVICE_WIDTH,
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    top: '40%',
    fontWeight: 'bold',
    color: '#ffebcd',
    fontSize: 30,
  },

})