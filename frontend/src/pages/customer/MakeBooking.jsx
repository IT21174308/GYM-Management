import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const MakeBooking = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [packageType, setPackageType] = useState('');

  // Dummy data
  const timeSlots = ['09:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '01:00 PM - 02:00 PM', '02:00 PM - 03:00 PM', '03:00 PM - 04:00 PM'];
  const workoutTypes = ['ZUMBA', 'Strength Training', 'Yoga', 'HIIT', 'Aerobics', 'Callisthenics', 'Body weight training'];
  const packages = ['Silver', 'Gold', 'Platinum'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can process the data here
    console.log({ date, timeSlot, workoutType, packageType });

    // Generate PDF
    generatePDF();

    // Redirect to scheduleView page
    navigate('/scheduleView'); // Replace '/scheduleView' with your desired route
  };

  const generatePDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Content for PDF
    const content = `
      Date: ${date}
      Time Slot: ${timeSlot}
      Workout Type: ${workoutType}
      Package: ${packageType}
    `;

    // Add content to PDF
    doc.text(content, 10, 10);

    // Save PDF
    doc.save('booking_details.pdf');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Make Booking</h2>
      <form id="booking-details" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block mb-1">Time Slot:</label>
          <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="">Select Time Slot</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">Workout Type:</label>
          <select value={workoutType} onChange={(e) => setWorkoutType(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="">Select Workout Type</option>
            {workoutTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">Package:</label>
          <select value={packageType} onChange={(e) => setPackageType(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="">Select Package</option>
            {packages.map((pkg, index) => (
              <option key={index} value={pkg}>{pkg}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Book Now</button>
      </form>
    </div>
  );
};

export default MakeBooking;
