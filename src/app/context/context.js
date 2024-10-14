'use client';

import { createContext, useState, useEffect } from 'react';
// import {getData} from "../lib/index"
export const CoinMarketContext = createContext();

export const CoinMarketProvider = ({ children }) => {
  const getTopTenCoins = async () => {
    try {
     const res = await fetch('/api/getTopTen');
     
    console.log(res)
      return res.data;
    } catch (e) {
      console.log(e.message);
      return [];
    }
  };

  return (
    <CoinMarketContext.Provider
      value={{
        getTopTenCoins,
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  )
}
