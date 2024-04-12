import React, { useState } from 'react';

const BookingDetails = () => {
  const [bookings, setBookings] = useState([
    {
      _id: 1,
      date: '2024-04-15',
      timeSlot: '09:00 AM - 10:00 AM',
      workoutType: 'Yoga',
      packageType: 'Silver',
    },
    {
      _id: 2,
      date: '2024-04-16',
      timeSlot: '10:00 AM - 11:00 AM',
      workoutType: 'HIIT',
      packageType: 'Gold',
    },
    // Add more dummy bookings as needed
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleDelete = (id) => {
    const updatedBookings = bookings.filter(booking => booking._id !== id);
    setBookings(updatedBookings);
  };

  const handleUpdate = (booking) => {
    setSelectedBooking(booking);
  };

  const updateBooking = (updatedBooking) => {
    const updatedBookings = bookings.map(booking =>
      booking._id === updatedBooking._id ? updatedBooking : booking
    );
    setBookings(updatedBookings);
    setSelectedBooking(null); // Reset selectedBooking state
  };

  return (
    <div className="max-w-screen-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-3xl font-semibold text-center bg-gray-500 text-white py-4">Booking Details</h2>
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
              <th className="border border-gray-400 px-4 py-2"> </th>
              <th className="border border-gray-400 px-4 py-2"> </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border border-gray-400 px-4 py-2">{booking.date}</td>
                <td className="border border-gray-400 px-4 py-2">{booking.timeSlot}</td>
                <td className="border border-gray-400 px-4 py-2">{booking.workoutType}</td>
                <td className="border border-gray-400 px-4 py-2">{booking.packageType}</td>
                <td className="border border-gray-400 px-4 py-2">Pending</td>
                <td className="border border-gray-400 px-4 py-2">
                  {/* Update button */}
                  <button onClick={() => handleUpdate(booking)} className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update</button>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {/* Delete button */}
                  <button onClick={() => handleDelete(booking._id)} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal for UpdateBookingForm */}
      {selectedBooking && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <UpdateBookingForm booking={selectedBooking} updateBooking={updateBooking} setSelectedBooking={setSelectedBooking} />
          </div>
        </div>
      )}
      {/* Show message if no bookings available */}
      {bookings.length === 0 && (
        <div className="p-4 text-center">No bookings available.</div>
      )}
    </div>
  );
};

// UpdateBookingForm component
const UpdateBookingForm = ({ booking, updateBooking, setSelectedBooking }) => {
    // State variables for form fields
    const [date, setDate] = useState(booking.date);
    const [timeSlot, setTimeSlot] = useState(booking.timeSlot);
    const [workoutType, setWorkoutType] = useState(booking.workoutType);
    const [packageType, setPackageType] = useState(booking.packageType);
  
    // Dummy data for dropdowns
    const timeSlots = ['09:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '01:00 PM - 02:00 PM', '02:00 PM - 03:00 PM', '03:00 PM - 04:00 PM'];
    const workoutTypes = ['ZUMBA', 'Strength Training', 'Yoga', 'HIIT', 'Aerobics', 'Callisthenics', 'Body weight training'];
    const packages = ['Silver', 'Gold', 'Platinum'];
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Create updated booking object
      const updatedBooking = { ...booking, date, timeSlot, workoutType, packageType };
      // Call updateBooking function from parent component
      updateBooking(updatedBooking);
      // Close modal
      setSelectedBooking(null);
    };
  
    return (
        <div className="w-full h-full overflow-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Update Booking</h2>
        {/* Booking update form */}
        <form onSubmit={handleSubmit} className="mx-auto max-w-md">
          {/* Date field */}
          <div className="mb-4">
            <label className="block mb-1">Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          {/* Time Slot dropdown */}
          <div className="mb-4">
            <label className="block mb-1">Time Slot:</label>
            <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select Time Slot</option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
          {/* Workout Type dropdown */}
          <div className="mb-4">
            <label className="block mb-1">Workout Type:</label>
            <select value={workoutType} onChange={(e) => setWorkoutType(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select Workout Type</option>
              {workoutTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          {/* Package dropdown */}
          <div className="mb-4">
            <label className="block mb-1">Package:</label>
            <select value={packageType} onChange={(e) => setPackageType(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select Package</option>
              {packages.map((pkg, index) => (
                <option key={index} value={pkg}>{pkg}</option>
              ))}
            </select>
          </div>
          {/* Submit and Cancel buttons */}
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Update</button>
            <button onClick={() => setSelectedBooking(null)} className="bg-gray-300 text-gray-700 py-2 px-4 ml-2 rounded-md hover:bg-gray-400 transition duration-300">Cancel</button>
          </div>
        </form>
      </div>
      
    );
  };
  

export default BookingDetails;
