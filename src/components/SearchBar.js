import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({ term, changeTerm, submitTerm }) => {
    return (
        <View style={styles.searchBar}>
            <Feather style={styles.iconStyle} name="search" size={34} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                //onChangeText={(newTerm) => changeTerm(newTerm)}
                onChangeText={changeTerm}
                style={styles.textStyle}
                placeholder="Search"
                onEndEditing={submitTerm}
            />
        </View>);
};

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 15,
        backgroundColor: "#ebebe4",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection: "row",
        marginBottom:10
    },
    textStyle: {
        flex: 1,
        fontSize: 30
    },
    iconStyle: {
        alignSelf: "center",
        marginHorizontal: 10
    }

});

export default SearchBar;
