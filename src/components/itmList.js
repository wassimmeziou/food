import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetails from "./ResultDetails";

const ItemList = ({ text, results, navigation }) => {
    if (results.length === 0) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{text}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
                            <ResultDetails item={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 5
    },
    iconStyle: {
        alignSelf: "center",
        marginHorizontal: 10
    },
    container: {
        marginBottom: 7,
        //  marginHorizontal: 10,
    }

});

export default withNavigation(ItemList);
