import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  header: {
    height: 80,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    backgroundColor: 'green',
  },
  listView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  textInput: {
    marginTop: 130,
    paddingHorizontal: 15,
    width: 240,
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'olive',
  },
  createButton: {
    marginTop: 30,
    paddingHorizontal: 15,
    width: 80,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  texth: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});