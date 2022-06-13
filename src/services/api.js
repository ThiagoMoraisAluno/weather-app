const KEY = 'be2eac40a37f42e6b81192404221306';

const fetchData = async (city) => {

    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`

    const fecthResponse = await fetch(url);

    const data = await fecthResponse.json();

    return data;
}

export default fetchData;