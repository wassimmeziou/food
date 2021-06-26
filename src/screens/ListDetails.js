import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text } from "react-native";
import yelp from "../api/yelp";


const ListDetails = ({ navigation }) => {
    let itemId = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        let resp = await yelp.get(`/${id}`);
        setResult(resp.data);
    }

    useEffect(() => {
        getResult(itemId);
    }, []);

    if (!result)
        return null;

    return (
        <>
            <Text style={styles.textStyle}>{result.name}</Text>

            <FlatList
                data={result.photos}
                keyExtractor={(red) => red}
                renderItem={({ item, index }) => {
                    console.log(index);
                    return <Image style={styles.imageStyle} source={{ uri: item }} />;
                }}
            >
            </FlatList>
        </>

    );
}

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 30
    },
    imageStyle: {
        height: 200, 
        width: 300
    }


});
export default ListDetails;