import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockMarketReports = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_ALPHAVANTAGE_API_KEY; // Store your API key in an environment variable
  const stockSymbol = 'AAPL'; // Example stock symbol (Apple Inc.)

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(`https://www.alphavantage.co/query`, {
          params: {
            function: 'TIME_SERIES_INTRADAY',
            symbol: stockSymbol,
            interval: '1min',
            apikey: 'NVOXXCI31H7RQAKP',
            // apikey: apiKey,
          },
        });
        setStockData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchStockData();

    // Set an interval to fetch data every minute for real-time updates
    const intervalId = setInterval(fetchStockData, 60000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [apiKey, stockSymbol]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching stock data: {error.message}</div>;
  }

  if (!stockData || !stockData['Time Series (1min)']) {
    return <div>No data available</div>;
  }

  const latestTime = Object.keys(stockData['Time Series (1min)'])[0];
  const latestData = stockData['Time Series (1min)'][latestTime];

  return (
    <div className="stock-market-reports">
      <h2>Real-Time Stock Market Report for {stockSymbol}</h2>
      <p>Latest Update: {latestTime}</p>
      <table>
        <thead>
          <tr>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{latestData['1. open']}</td>
            <td>{latestData['2. high']}</td>
            <td>{latestData['3. low']}</td>
            <td>{latestData['4. close']}</td>
            <td>{latestData['5. volume']}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StockMarketReports;
