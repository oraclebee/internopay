// src/components/StockPrice.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Resources/CSS/StockPrice.css';

const StockPrice = ({ symbol }) => {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockPrice = async () => {
      try {
        let apiKey = "HA53OJJPI3KS5YXU";
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${apiKey}`
        );
        const data = response.data;
        const latestTime = data['Meta Data']['3. Last Refreshed'];
        const latestPrice = data['Time Series (1min)'][latestTime]['1. open'];
        setPrice(latestPrice);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchStockPrice();

    const intervalId = setInterval(fetchStockPrice, 60000); // Update every minute
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [symbol]);

  return (
    <div className='stockCard'>
      <b>{symbol} Stock Price</b>
      {error && <p>Error: {error}</p>}
      {price ? <p>Current Price: ${price}</p> : <p>Loading...</p>}
    </div>
  );
};

export default StockPrice;
