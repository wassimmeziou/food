import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization : 'Bearer zgf5J9sMp6LoUGynk1Bluh2RZ-XAta7Zsms_mZbsLOMGZ3U_OlmPLcEUiAsOjjbsyYBAe9JOAPux1OMIU-OggSnsxfPYi1ui7IxWfSIe8X6PvlaKkRmQvzujJ1DUYHYx'
    }
});