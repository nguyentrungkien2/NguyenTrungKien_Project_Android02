// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View } from 'react-native';
// // import Header from './Component/Header';
// // import Footer from './Component/Footer';
// // import Main from './Component/Main';
// // import Home from './Component/Home';
// // import ProductDetail from './Component/detailProduct/ProductDetail';
// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //     <Header></Header>
// //     {/* <Main></Main> */}
// //     <Home/>

// //     <Footer></Footer>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',

// //   },
// // });
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import Header from './Component/Header';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Footer from './Component/Footer';
// import Home from './Component/Home';
// import ProductDetail from './Component/detailProduct/ProductDetail';
// import Login from './Component/Login';
// import Register from './Component/home/Register';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Header />
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="ProductDetail" component={ProductDetail} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Register" component={Register} />
//       </Stack.Navigator>

//       <Footer />
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

// export default App;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './Component/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from './Component/Footer';
import Home from './Component/Home';
import ProductDetail from './Component/detailProduct/ProductDetail';
import Login from './Component/Login';
import Register from './Component/home/Register';
import Settings from './Component/Settings';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>

      <Footer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;