import React, { useEffect } from 'react'
import axios from 'axios';

// export default function Api() {
//     axios.get('https://api.storerestapi.com/products/running-sneaker')
//         .then((response) => {
//             // handle success
//             console.log(response);
//         })
//         .catch((error) => {
//             // handle error
//             console.log(error);
//         })

//     return (
//         <div>
//             Api
//         </div>
//     )
// }
export default function Api() {
    // Define a state variable to store the API response data
    const [apiData, setApiData] = React.useState(null);

    // Define an async function to fetch data from the API
    const fetchData = async () => {
        try {
            const options = {
                method: 'GET',
                url: 'https://shoes-collections.p.rapidapi.com/shoes',
                headers: {
                    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
                    'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
                }
            };

            const response = await axios.request(options);
            // Update the component's state with the received data
            setApiData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Use the useEffect hook to fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>API Data</h1>
            {/* Display the API data */}
            {apiData ? (
                <pre>{JSON.stringify(apiData, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
