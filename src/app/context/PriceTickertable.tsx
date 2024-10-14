"use client";

// Import necessary modules
import { useState, useEffect } from "react";
import { getCryptoPrices } from "../lib/api";

// Declare the CryptoPrice type
type CryptoPrice = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
};

// Main component
const PriceTickerTable = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);
  const [page, setPage] = useState(1); // Track the current page
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  // Fetch cryptocurrency prices
  const fetchPrices = async () => {
    setIsLoading(true); // Show loading state
    const data = await getCryptoPrices(page); // Fetch data for the current page
    
    // Ensure no duplicates by filtering out existing IDs
    setPrices((prevPrices) => {
      const existingIds = new Set(prevPrices.map((crypto) => crypto.id));
      const newPrices = data.filter((crypto: { id: string; }) => !existingIds.has(crypto.id));
      return [...prevPrices, ...newPrices]; // Append unique data to the existing data
    });
    
    setIsLoading(false); // Hide loading state
  };

  useEffect(() => {
    fetchPrices();
  }, [page]); // Re-fetch when the page changes

  // Handle "Load More" button click
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Increase the page number to load more data
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-[#323546] shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-[#323546]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                24h Change
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#323546] divide-y divide-gray-700">
            {prices.map((crypto) => (
              <tr key={crypto.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={crypto.image}
                      alt={`${crypto.name} logo`}
                      loading="lazy"
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-100">{crypto.name}</div>
                      <div className="text-sm text-gray-400">{crypto.symbol.toUpperCase()}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-100">
                    ${crypto.current_price.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    className={`text-sm ${
                      crypto.price_change_percentage_24h > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {crypto.price_change_percentage_24h > 0
                      ? `+${crypto.price_change_percentage_24h.toFixed(2)}%`
                      : `${crypto.price_change_percentage_24h.toFixed(2)}%`}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-100">
                    ${crypto.market_cap.toLocaleString()}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Load More Button */}
      <div className="text-center mt-4">
        {isLoading ? (
          <p className="text-gray-300">Loading...</p>
        ) : (
          <button
            onClick={handleLoadMore}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default PriceTickerTable;
