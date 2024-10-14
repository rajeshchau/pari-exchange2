import Image from "next/image";
import Header from "./components/Header"
import Trending from "./components/Trending"
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import CMCTable from "./components/cmc-table/CmcTable"
import PriceTickerTable from '../app/context/PriceTickertable';
import Footer from '../app/context/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="mt-10"/>
      <Trending />

      <div className="mt-20"/>
      <PriceTickerTable />
      <Footer />
      
    </div>
  );
}
