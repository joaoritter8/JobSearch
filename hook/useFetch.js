import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const axios = require('axios');

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
        'X-RapidAPI-Key': ,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {
        query: 'Python developer in Texas, USA',
        page: '1',
        num_pages: '1'
    },
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}