import { Fragment } from "react";
import CurrencyConvertion from "../Components/CurrencyConvertion";
import NewsFeed from "../Components/NewsFeeds";

export default function Home(){
    return (
        <Fragment>
            <CurrencyConvertion/>
            <h1>Financial Feeds</h1>
            {/* <StockMarketReports/> */}
            <NewsFeed/>
        </Fragment>
    )
}