import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ItemList from "../components/itmList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const HomeScreen = () => {

    const [term, setTerm] = useState('pasta');
    const [searchApi, results] = useResults({ term });

    const filterResultByPrice = (price) => {
        return results.filter(res => {
            return res.price === price;
        });
    };
    return (
        <View style={{ marginLeft: 10, flex: 1 }}>
            <SearchBar
                term={term}
                changeTerm={(newTerm) => setTerm(newTerm)}
                submitTerm={searchApi}
            />
            <ScrollView>
                <ItemList results={filterResultByPrice("")} text="test0" />
                <ItemList results={filterResultByPrice("$")} text="test1" />
                <ItemList results={filterResultByPrice("$$")} text="test2" />
                <ItemList results={filterResultByPrice("$$")} text="test2" />
                <ItemList results={filterResultByPrice("$$$")} text="test3" />
                <ItemList results={filterResultByPrice("$$$$")} text="test4" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
