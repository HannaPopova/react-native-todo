import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fde1e2',
  },
  header: {
    height: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    backgroundColor: '#fda1e2',
  },
  listView: {
    width: '100%',
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    padding: 10,
    marginHorizontal: '5%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    marginLeft: 'auto',
  },
  buttonText: {
    fontSize: 20,
    color: 'red',
  }
});