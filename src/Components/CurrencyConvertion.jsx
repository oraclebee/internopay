import React, { Fragment, useEffect, useState } from "react";
import { Form, Button, Spinner, Col, Row } from "react-bootstrap";
import {
  useGetConvertCurrencyQuery,
  useGetSymbolQuery,
} from "../api/authConvert";
import { IoSwapVerticalOutline } from "react-icons/io5";
import Flag from "../utils/currencies-with-flags.json";
import { Link, useNavigate } from "react-router-dom";


export default function CurrencyConversion() {
  const [amountTo, setAmountTo] = useState("");
  const [amountFrom, setAmountFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [flagFrom, setFlagFrom] = useState("");
  const [flagTo, setFlagTo] = useState("");


  const {
    isFetching: isFetchingSymbols,
    isLoading: isLoadingSymbols,
    data: symbolsData,
    error: symbolsError,
    isError: isSymbolsError,
  } = useGetSymbolQuery({});
  const {
    isFetching: isFetchingConversion,
    isLoading: isLoadingConversion,
    data: conversionData,
    error: conversionError,
    isError: isConversionError,
    refetch: refetchConversion,
  } = useGetConvertCurrencyQuery(
    {
      currencyFrom,
      currencyTo,
      amountFrom,
    },
    {
      skip: !currencyFrom || !currencyTo || !amountFrom,
    }
  );

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
    <section className="px-3 py-2 pb-4">
    <Form>
  <Row >
    <Col sm={3} className="mb-3">
      <Form.Group>
        <Form.Label className="fw-bold">Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Amount"
          min="0.01"
          onChange={(e) => setAmountFrom(e.target.value)}
          value={amountFrom}
        />
      </Form.Group>
    </Col>
    <Col sm={4} className="mb-3">
      <Form.Group>
        <Form.Label className="fw-bold">From</Form.Label>
        <div className="d-flex align-items-center border rounded">
          {flagFrom && (
            <img
              src={flagFrom}
              alt="flag"
              style={{ width: "20px", marginRight: "10px" }}
            />
          )}
          <Form.Select
            onChange={(e) =>
              handleCurrencyChange(e, setCurrencyFrom, setFlagFrom)
            }
            value={currencyFrom}
          >
            <option value="">Select Currency</option>
            {symbolsData &&
              Object.entries(symbolsData.symbols).map(([key, value]) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
          </Form.Select>
        </div>
      </Form.Group>
    </Col>
    <Col sm={1} className="d-flex justify-content-center align-items-end mb-3">
      <Button
        variant="light"
        className="rounded-pill"
        onClick={handleSwapCurrencies}
      >
        <IoSwapVerticalOutline size={30} />
      </Button>
    </Col>
    <Col sm={4} className="mb-3">
      <Form.Group>
        <Form.Label className="fw-bold">To</Form.Label>
        <div className="d-flex align-items-center border rounded">
          {flagTo && (
            <img
              src={flagTo}
              alt="flag"
              style={{ width: "20px", marginRight: "10px" }}
            />
          )}
          <Form.Select
            onChange={(e) =>
              handleCurrencyChange(e, setCurrencyTo, setFlagTo)
            }
            value={currencyTo}
          >
            <option value="">Select Currency</option>
            {symbolsData &&
              Object.entries(symbolsData.symbols).map(([key, value]) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
          </Form.Select>
        </div>
      </Form.Group>
    </Col>
  </Row>
  {(isLoadingConversion || isFetchingConversion) && (
    <div className="loading-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )}
</Form>
<Row>
  <Col><p className="fw-bold">{amountTo}</p></Col>
</Row>
<Row>
  <Col xs={12} sm={6}  >
    <div className="">
      <p className="text-start">
        We use the mid-market rate for our Converter. This is for
        informational purposes only. You won’t receive this rate when
        sending money.
      <Link to={"/register"}>Login to view send rates</Link>
      </p>
    </div>
  </Col>
  <Col xs={12} sm={6}  className="d-flex justify-content-end">
  <div>

    <Button
      variant="primary"
      className="px-4 py-2"
      onClick={() => refetchConversion()}
    >
      Convert
    </Button>
  </div>
  </Col>
</Row>
{isConversionError && <div>Error: {conversionError.message}</div>}
  </section>
  );
}
