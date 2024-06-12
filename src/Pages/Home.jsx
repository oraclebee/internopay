import { Fragment } from "react";
import CurrencyConvertion from "../Components/CurrencyConvertion";
import NewsFeed from "../Components/NewsFeeds";
import Hero from "../Components/Hero";

export default function Home(){
    return (
        <Fragment>
            <Hero/>
            <h1>Financial Feeds</h1>
            {/* <StockMarketReports/> */}
            <NewsFeed/>
        </Fragment>
    )
}