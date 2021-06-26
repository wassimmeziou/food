import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default ({ term }) => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        searchApi();
    }, []);

    const searchApi = async () => {

        const response = await yelp.get('/search', {
            params: {
                term,
                limit: 50,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
        console.log("term" + term);
        console.log("call" + results.length);
    }
    return [searchApi, results];
}
