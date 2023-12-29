// import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// export default function AllProduct() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getAllProduct();
//   }, []);

//   const getAllProduct = () => {
//     axios
//       .get('https://fakestoreapi.com/products')
//       .then(function (response) {
//         setProducts(response.data);
//       })
//       .catch(function (error) {
//         alert(error.message);
//       })
//       .finally(function () {
//         alert('Finally called');
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.catetitle}>
//         <Text style={styles.titleText}>Sản phẩm</Text>
//         <TouchableOpacity>
//           <Text style={styles.viewMoreText}>Xem thêm</Text>
//         </TouchableOpacity>
        
//       </View>
//       <SafeAreaView style={styles.productContainer}>
//         {products.map((product) => (
//           <View style={styles.item} key={product.id}>
//             <View style={styles.imageContainer}>
//               <Image style={styles.image} source={{ uri: product.image }} resizeMode="cover" />
//             </View>
//             <View style={styles.descriptionContainer}>
//               <Text style={styles.title}>{product.title}</Text>
//               <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
//               <View style={styles.ratingContainer}>
//                 <Text style={styles.ratingText}>Rating: </Text>
//                 <FontAwesome name="star" style={styles.starIcon} />
//                 <Text style={styles.ratingValue}>{product.rating.rate.toFixed(1)}</Text>
//                 <Text style={styles.ratingCount}>({product.rating.count} reviews)</Text>
//               </View>
//             </View>
//           </View>
//         ))}
//       </SafeAreaView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//   },
//   catetitle: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 15,
//   },
//   titleText: {
//     fontSize: 30,
//     color: "black",
//     fontWeight: "650",
//   },
//   viewMoreText: {
//     fontSize: 15,
//   },
//   productContainer: {
//     flex: 1,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   item: {
//     width: '48%',
//     marginBottom: 10,
//     borderRadius: 10,
//     backgroundColor: "gray",
//     overflow: "hidden",
//   },
//   imageContainer: {
//     height: 200,
//     borderRadius: 10,
//     overflow: "hidden",
//   },
//   image: {
//     flex: 1,
//   },
//   descriptionContainer: {
//     padding: 8,
//   },
//   title: {
//     color: "white",
//     textAlign: "center",
//     marginBottom: 4,
//   },
//   price: {
//     color: "white",
//     textAlign: "center",
//     fontWeight: "bold",
//     marginBottom: 4,
//   },
//   ratingContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   ratingText: {
//     color: "white",
//   },
//   starIcon: {
//     color: "gold",
//     fontSize: 16,
//     marginRight: 2,
//   },
//   ratingValue: {
//     color: "white",
//     marginRight: 2,
//   },
//   ratingCount: {
//     color: "white",
//   },
// });

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProduct();
  }, []);
  const navigation = useNavigation();

  const getAllProduct = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');

      setProducts(response.data.products);
    } catch (error) {
      alert(error.message);
    }
  };

  const renderProduct = ({ item, navigation }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <Image source={{ uri: item.images[0] }} style={styles.productImage} />
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.catetitle}>
        <Text style={styles.titleText}>Sản phẩm</Text>
        <Text style={styles.viewMoreText}>Xem thêm</Text>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => renderProduct({ item, navigation })}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
        
      />
      



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  catetitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 20,
    color: 'red',
    fontWeight: '600',
  },
  viewMoreText: {
    fontSize: 15,
  },
  productItem: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    marginHorizontal: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productName: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 16,
  },
  productPrice: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 14,
  },
  productList: {
    paddingHorizontal: 5,
  },
});

export default AllProduct;