import React from 'react';
import { Link } from 'react-router-dom';

function ScheduleView() {
  // Dummy data with some bookings and some available slots
  const availableTimeSlots = [
    { time: '09:00 AM - 10:00 AM', bookings: { Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [], Sunday: [] } },
    { time: '10:00 AM - 11:00 AM', bookings: { Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [], Sunday: [] } },
    { time: '11:00 AM - 12:00 PM', bookings: { Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [], Sunday: [] } },
    { time: '01:00 PM - 02:00 PM', bookings: { Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [], Sunday: [] } },
    { time: '02:00 PM - 03:00 PM', bookings: { Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [], Sunday: [] } },
    { time: '03:00 PM - 04:00 PM', bookings: { Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [], Sunday: [] } },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Time Slots</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Time Slot</th>
              <th className="px-4 py-2">Monday</th>
              <th className="px-4 py-2">Tuesday</th>
              <th className="px-4 py-2">Wednesday</th>
              <th className="px-4 py-2">Thursday</th>
              <th className="px-4 py-2">Friday</th>
              <th className="px-4 py-2">Saturday</th>
              <th className="px-4 py-2">Sunday</th>
            </tr>
          </thead>
          <tbody>
            {/* Time slots */}
            {availableTimeSlots.map((timeSlot, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{timeSlot.time}</td>
                {/* Days and bookings */}
                {Object.entries(timeSlot.bookings).map(([day, bookingsForDay], i) => (
                  <td key={i} className={`border px-4 py-2 ${bookingsForDay.length >= 10 ? 'bg-red-200' : (bookingsForDay.length > 0 ? 'bg-gray-100' : 'bg-white')}`}>
                    {bookingsForDay.length > 0 ? bookingsForDay.join(', ') : 'Available'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Button at the bottom center */}
      <div className="flex justify-center mt-8">
        <Link to="/MakeBooking">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Make Booking
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ScheduleView;
