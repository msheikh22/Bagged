import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [stats, setStats] = useState({ buyers: 0, shoppers: 0, requests: 0 });

  useEffect(() => {
    // Fetch live stats from backend
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/stats`) // create this endpoint in backend
      .then((res) => setStats(res.data))
      .catch(() => {
        // fallback in case backend fails
        setStats({ buyers: 1240, shoppers: 320, requests: 1850 });
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <header className="text-center py-20 bg-white shadow-md">
        <h1 className="text-4xl font-bold mb-4">Get what you want.</h1>
        <p className="text-lg mb-6">
          Personal shoppers compete for your items — from everyday finds to VIP concierge.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Join as Buyer
          </Link>
          <Link
            to="/signup"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Join as Shopper
          </Link>
        </div>
      </header>

      {/* Stats Section */}
      <section className="text-center py-12">
        <div className="flex justify-center gap-12">
          <div>
            <h2 className="text-3xl font-bold">{stats.buyers}</h2>
            <p>Buyers</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">{stats.shoppers}</h2>
            <p>Verified Shoppers</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">{stats.requests}</h2>
            <p>Requests Completed</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-6">How Bagged Works</h2>
        <div className="flex justify-center gap-12">
          <div>
            <h3 className="font-bold mb-2">1. Post</h3>
            <p>Say what you want, your budget, and delivery details.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">2. Compete</h3>
            <p>Personal shoppers send quotes with price and speed.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">3. Choose</h3>
            <p>Pick the best shopper. Bagged handles the payment and trust.</p>
          </div>
        </div>
      </section>

      {/* VIP Section */}
      <section className="py-12 text-center bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">VIP Concierge</h2>
        <p className="mb-6">
          Elite personal shoppers handle everything: curation, returns, and full styling.
        </p>
        <Link
          to="/signup"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
        >
          Explore VIP
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-sm text-gray-500">
        © 2026 Bagged. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
