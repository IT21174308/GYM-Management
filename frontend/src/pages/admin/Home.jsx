import React, { useState } from 'react';
// Remove axios import and apiUrl import
import Divider from '@mui/material/Divider';
// Remove apiUrl import
// import { apiUrl } from '../../utils/Constants';

// Dummy data to simulate payment methods
const dummyCards = [
  { id: 1, cardType: 'Visa', lastFourDigits: '1234' },
  { id: 2, cardType: 'MasterCard', lastFourDigits: '5678' },
  { id: 3, cardType: 'American Express', lastFourDigits: '9012' },
  // Add more dummy data as needed
];

const Home = () => {
  const [cards] = useState(dummyCards); // Use dummyCards as initial state

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">All Payment Methods of Customers</h1>
      {/* <Divider/> */}

      {/* No need to show loading state as we're using dummy data */}
      {/* <PaymentTable cards={cards} /> */}
    </div>
  );
};

export default Home;
