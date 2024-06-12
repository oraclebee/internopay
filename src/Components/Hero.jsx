import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCurrencyExchange } from "react-icons/bs";
import CurrencyConversion from "./CurrencyConvertion";
import { Button } from "react-bootstrap";

export default function Hero() {
    const  [activeTab, setActiveTab] = useState(1)
    const navigate = useNavigate()
    const renderContent = () => {
        switch (activeTab) {
          case 1:
            return <CurrencyConversion/>
                      case 2:
            return navigate('send_money')
          case 3:
            return <h1>Charts</h1>;
          case 4:
            return <h1>Alerts</h1>;
          default:
            return<CurrencyConversion/>;
        }
      };
  return (
    <Fragment>
      <h1 className="text-center">Currency Conversion</h1>
      <section className="text-center border shadow-lg rounded-4 w-100">
        <div className="d-flex  justify-content-between gap-0 gap-sm-1  w-100">
          {[
            { name: "Convert", icon: <BsCurrencyExchange className="fs-6"/> },
            { name: "Send", icon: <BsCurrencyExchange className="fs-6"/> },
            { name: "Chart", icon: <BsCurrencyExchange className="fs-6"/> },
            { name: "Alerts", icon: <BsCurrencyExchange className="fs-6"/> },
          ].map((tab, index) => (
            <Button 
              size="small"
              key={index}
              className={`d-flex flex-column flex-sm-row gap-1 gap-sm-2 justify-content-center  p-1 p-sm-2 py-1 py-sm-3 align-items-center btn w-100 rounded-1 btn-light shadow-lg ${activeTab === index + 1 ? "active rounded-2" : ""}`}
              onClick={() => setActiveTab(index + 1)}
            >
              {tab.icon}
              <span className={`${activeTab === index + 1 ? "text-wrap fw-bold" : "fw-normal"} text-truncate`}>{tab.name}</span>
            </Button>
          ))}
        </div>
        {renderContent()}
      </section>
    </Fragment>
  )
}
