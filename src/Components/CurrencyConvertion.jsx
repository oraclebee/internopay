import React, { Fragment, useEffect, useState } from 'react';
import { Form, Button, Spinner, Col } from 'react-bootstrap';
import { useGetConvertCurrencyQuery, useGetSymbolQuery } from '../api/authConvert';
import { IoSwapVerticalOutline } from "react-icons/io5";
import Flag from '../utils/currencies-with-flags.json';

export default function CurrencyConversion() {
    const [amountTo, setAmountTo] = useState("");
    const [amountFrom, setAmountFrom] = useState("");
    const [currencyTo, setCurrencyTo] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState("");
    const [flagFrom, setFlagFrom] = useState('');
    const [flagTo, setFlagTo] = useState('');

    const { isFetching: isFetchingSymbols, isLoading: isLoadingSymbols, data: symbolsData, error: symbolsError, isError: isSymbolsError } = useGetSymbolQuery({});
    const { isFetching: isFetchingConversion, isLoading: isLoadingConversion, data: conversionData, error: conversionError, isError: isConversionError, refetch: refetchConversion } = useGetConvertCurrencyQuery({
        currencyFrom, currencyTo, amountFrom
    }, {
        skip: !currencyFrom || !currencyTo || !amountFrom
    });

    const handleCurrencyChange = (event, setCurrency, setFlag) => {
        const selectedCurrency = event.target.value;
        setCurrency(selectedCurrency);
        const flagObject = Flag.find((value) => value.code === selectedCurrency);
        if (flagObject) {
            setFlag(flagObject.flag);
        }
    };

    useEffect(() => {
        if (conversionData?.result) {
            setAmountTo(conversionData.result.toFixed(2));
        }
    }, [conversionData]);

    const handleSwapCurrencies = () => {
        if (currencyFrom && currencyTo) {
            setCurrencyFrom(currencyTo);
            setCurrencyTo(currencyFrom);
            setFlagFrom(flagTo);
            setFlagTo(flagFrom);
            setAmountTo("");
        }
    };

    if (isSymbolsError) {
        return <div>Error: {symbolsError.message}</div>;
    }

    if (isLoadingSymbols || isFetchingSymbols) {
        return (
            <div className="loading-container">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <Fragment>
            <h1 className="text-center">Currency Conversion</h1>
            <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="d-flex flex-column gap-3 col-12 col-md-6 col-lg-4 mx-auto">
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label className="fw-bold">Amount</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Amount"
                            min="0.01"
                            onChange={(e) => setAmountFrom(e.target.value)}
                            value={amountFrom}
                        />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label className="fw-bold">From</Form.Label>
                        <div className="d-flex align-items-center border rounded">
                            {flagFrom && <img src={flagFrom} alt="flag" style={{ width: '20px', marginRight: '10px' }} />}
                            <Form.Select onChange={(e) => handleCurrencyChange(e, setCurrencyFrom, setFlagFrom)} value={currencyFrom}>
                                <option value="">Select Currency</option>
                                {symbolsData && Object.entries(symbolsData.symbols).map(([key, value]) => (
                                    <option key={key} value={key}>{key}</option>
                                ))}
                            </Form.Select>
                        </div>
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                        <Button variant="light" className='rounded-pill' onClick={handleSwapCurrencies}>
                            <IoSwapVerticalOutline size={30} />
                        </Button>
                    </div>
                    <Form.Group as={Col} className="mb3">
                        <Form.Label className="fw-bold">To</Form.Label>
                        <div className="d-flex align-items-center border rounded">
                            {flagTo && <img src={flagTo} alt="flag" style={{ width: '20px', marginRight: '10px' }} />}
                            <Form.Select onChange={(e) => handleCurrencyChange(e, setCurrencyTo, setFlagTo)} value={currencyTo}>
                                <option value="">Select Currency</option>
                                {symbolsData && Object.entries(symbolsData.symbols).map(([key, value]) => (
                                    <option key={key} value={key}>{key}</option>
                                ))}
                            </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label className="fw-bold">Converted Amount</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Converted Amount"
                            min="0.01"
                            value={amountTo}
                            readOnly
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={() => refetchConversion()}>Convert</Button>
                    {(isLoadingConversion || isFetchingConversion) && (
                        <div className="loading-container">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    )}
                    {isConversionError && <div>Error: {conversionError.message}</div>}
                </div>
            </div>
        </Fragment>
    );
}











 // async function convert() {
    //     let apiKey;
    //     // Check if running in localhost or deployed environment
    //     if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    //         // Localhost environment
    //         apiKey = "ZEOcbrQz5MhCJ7U7O5hlwaTrjICVjjtU"; // Replace with your local API key
    //     } else {
    //         // Deployed environment
    //         apiKey = process.env.REACT_APP_EXCHANGERATES_API_KEY; // Ensure your environment variable is properly prefixed
    //     }

    //     apiKey = process.env.REACT_APP_EXCHANGERATES_API_KEY;

    //     var myHeaders = new Headers();
    //     myHeaders.append("apikey", apiKey);

    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow',
    //         headers: myHeaders
    //     };

    //     try {
    //         let response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyTo}&from=${currencyFrom}&amount=${amountFrom}`, requestOptions);
    //         let result = await response.json();

    //         console.log(result);
    //         console.log('Conversion Rate:', result.info.rate);
    //         console.log('Converted Amount:', result.result);
    //         setAmountTo(result.result.toFixed(2)); // Set the converted amount to the state
    //     } catch (error) {
    //         console.log('error', error);
    //     }
    // }