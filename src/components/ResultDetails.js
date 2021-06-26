import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const ResultDetails = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imgStyle}
                source={{ uri: item.image_url }}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.rating} stars,{item.review_count} Reviews</Text>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginLeft : 10
    },
    imgStyle: {
        width: 200,
        height: 120,
        borderRadius: 5
    },
    iconStyle: {
        alignSelf: "center",
        marginHorizontal: 10
    },
    name: {
        fontWeight: "bold",

    }

});

export default ResultDetails;