import React, { useState } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';

const BookingRequest = () => {
  const [bookings, setBookings] = useState([
    {
      _id: 1,
      date: '2024-04-15',
      timeSlot: '09:00 AM - 10:00 AM',
      workoutType: 'Yoga',
      packageType: 'Silver',
      status: 'Pending', // Adding status field
    },
    {
      _id: 2,
      date: '2024-04-16',
      timeSlot: '10:00 AM - 11:00 AM',
      workoutType: 'HIIT',
      packageType: 'Gold',
      status: 'Pending', // Adding status field
    },
    // Add more dummy bookings as needed
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = (id) => {
    const updatedBookings = bookings.filter(booking => booking._id !== id);
    setBookings(updatedBookings);
  };

  // Function to approve a booking
  const approveBooking = (id) => {
    const updatedBookings = bookings.map(booking =>
      booking._id === id ? { ...booking, status: 'Confirmed' } : booking
    );
    setBookings(updatedBookings);
  };

  // Filtered bookings based on search query
  const filteredBookings = searchQuery
    ? bookings.filter(booking =>
        booking.workoutType.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : bookings;

  return (
    <div className="max-w-screen-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-3xl font-semibold text-center bg-gray-500 text-white py-4">Booking Requests</h2>
      <div className="flex justify-end px-4 py-2">
        <div className="flex items-center border border-gray-300 rounded-md px-4">
          <input
            type="text"
            placeholder="Search by Workout Type"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 px-4 py-2 focus:outline-none"
          />
          <SearchIcon className="text-gray-400" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white">
          {/* Table header */}
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Date</th>
              <th className="border border-gray-400 px-4 py-2">Time Slot</th>
              <th className="border border-gray-400 px-4 py-2">Workout Type</th>
              <th className="border border-gray-400 px-4 py-2">Package</th>
              <th className="border border-gray-400 px-4 py-2">Status</th>
              <th className="border border-gray-400 px-4 py-2"></th>
              <th className="border border-gray-400 px-4 py-2"></th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {filteredBookings.map((booking, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border border-gray-400 px-4 py-2">{booking.date}</td>
                <td className="border border-gray-400 px-4 py-2">{booking.timeSlot}</td>
                <td className="border border-gray-400 px-4 py-2">{booking.workoutType}</td>
                <td className="border border-gray-400 px-4 py-2">{booking.packageType}</td>
                <td className="border border-gray-400 px-4 py-2">{booking.status}</td> {/* Display status */}
                <td className="border border-gray-400 px-4 py-2">
                  {/* Approve button */}
                  {booking.status === 'Pending' && (
                    <button onClick={() => approveBooking(booking._id)} className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Approve</button>
                  )}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className={`bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 ${booking.status === 'Confirmed' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={booking.status === 'Confirmed'}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Show message if no bookings available */}
      {filteredBookings.length === 0 && (
        <div className="p-4 text-center">No bookings available.</div>
      )}
    </div>
  );
};

export default BookingRequest;
