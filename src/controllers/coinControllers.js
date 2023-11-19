const axios = require('axios');

const getCoinList = async (req, res) => {
    try {
        // Fetch coin list from external API
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=stablecoins&order=market_cap_desc&per_page=100&page=1&sparkline=false', {
            params: {
                vs_currency: 'usd',
                category: 'stablecoins',
                order: 'market_cap_desc',
                per_page: 100,
                page: 1,
                sparkline: false,
            },
        });

        // Send the coin list to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching coin list:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getCoinList,
};
