import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BuyerMode from './BuyerMode';

const BuyerDashboard = ({ userId }) => {
  const [requests, setRequests] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);
  const [showVIP, setShowVIP] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}/requests`);
        setRequests(res.data.requests);

        const lp = await axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}/loyalty`);
        setLoyaltyPoints(lp.data.points);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Buyer Dashboard</h1>
        <p className="text-gray-600">Loyalty Points: {loyaltyPoints}</p>
      </div>

      <div className="mb-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showVIP}
            onChange={() => setShowVIP(!showVIP)}
          />
          <span className="text-gray-700">Show VIP Shoppers Only</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {requests.map(req => (
          <div key={req._id} className="p-4 border rounded shadow-sm bg-white">
            <h2 className="font-semibold">{req.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{req.description}</p>
            <p className="text-sm text-gray-500 mb-2">Budget: £{req.budget}</p>

            <div className="flex flex-col space-y-2">
              {req.quotes
                .filter(q => !showVIP || q.shopper.isVIP)
                .map(q => (
                  <button
                    key={q._id}
                    onClick={() => setSelectedQuote({
                      ...q,
                      requestTitle: req.title,
                      shopperName: q.shopper.name
                    })}
                    className="p-2 border rounded hover:bg-blue-50 text-left"
                  >
                    {q.shopper.name} - £{q.price} - {q.deliveryTime} days
                    {q.shopper.isVIP && <span className="ml-2 text-yellow-600 font-bold">VIP</span>}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>

      {selectedQuote && (
        <div className="mt-6">
          <BuyerMode selectedQuote={selectedQuote} />
          <button
            onClick={() => setSelectedQuote(null)}
            className="mt-2 text-red-600 hover:underline"
          >
            Cancel / Switch Quote
          </button>
        </div>
      )}
    </div>
  );
};

export default BuyerDashboard;
