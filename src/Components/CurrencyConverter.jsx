// src/components/CurrencyConverter.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import currencies from '../Resources/Json/currencies.json'; // Import the currencies data
import '../Resources/CSS/CurrencyConverter.css'; // Import CSS file

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [fromFlag, setFromFlag] = useState('https://flagcdn.com/us.svg');
    const [toFlag, setToFlag] = useState('https://flagcdn.com/eu.svg');
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        var apiKey = 'ZEOcbrQz5MhCJ7U7O5hlwaTrjICVjjtU'; // Replace with your actual API key
        
        // Check if running in localhost or deployed environment
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            // Localhost environment
            apiKey = "ZEOcbrQz5MhCJ7U7O5hlwaTrjICVjjtU"; // Replace with your local API key
        } else {
            // Deployed environment
            apiKey = process.env.REACT_APP_EXCHANGERATES_API_KEY; // Ensure your environment variable is properly prefixed
        }

        const fetchConversionRate = async () => {
            try {
                const response = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, {
                    headers: {
                        'apikey': apiKey
                    }
                });

                if (response.status === 200) {
                    const result = response.data.result;
                    setConvertedAmount(result.toFixed(2));
                    setError(null);
                } else {
                    setError(`Error: Received status code ${response.status}`);
                }
            } catch (err) {
                setError(`Error: ${err.message}`);
            }
        };

        fetchConversionRate();
    }, [fromCurrency, toCurrency, amount]);

    useEffect(() => {
        const fromCurrencyData = currencies.find(currency => currency.code === fromCurrency);
        const toCurrencyData = currencies.find(currency => currency.code === toCurrency);

        if (fromCurrencyData) {
        setFromFlag(fromCurrencyData.flag);
        }

        if (toCurrencyData) {
        setToFlag(toCurrencyData.flag);
        }
    }, [fromCurrency, toCurrency]);

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <div className="currency-converter">
        <h2>Currency Converter</h2>
        {error && <p className="error">{error}</p>}
        <div className="input-container">
            <label>Amount:</label>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder='Amount'
            />
        </div>
        <div className="currency-select">
            <label>From</label>
            <div className="currency-option">
            <img src={fromFlag} alt={`${fromCurrency} flag`} className="currency-flag" />
            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                {currencies.map(currency => (
                <option key={currency.code} value={currency.code}>
                    {currency.name}
                </option>
                ))}
            </select>
            </div>
        </div>
        <button onClick={handleSwap} className="swap-button">
            &#8646;
        </button>
        <div className="currency-select">
            <label>To</label>
            <div className="currency-option">
            <img src={toFlag} alt={`${toCurrency} flag`} className="currency-flag" />
            <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
            >
                {currencies.map(currency => (
                <option key={currency.code} value={currency.code}>
                    {currency.name}
                </option>
                ))}
            </select>
            </div>
        </div>
        {/* <button onClick={fetchConversionRate} className="convert-button"> */}
        <button className="convert-button">
            Convert
        </button>
        {convertedAmount !== null && (
            <p className="result">
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
            </p>
        )}
        </div>
    );
};

export default CurrencyConverter;