import React from 'react';

function ManagerScheduleView() {
  // Dummy data with some bookings and some available slots
  const availableTimeSlots = [
    { time: '09:00 AM - 10:00 AM', bookings: { Monday: ['John', 'Emma'], Tuesday: '', Wednesday: '', Thursday: '', Friday: ['Alice'], Saturday: '', Sunday: '' } },
    { time: '10:00 AM - 11:00 AM', bookings: { Monday: '', Tuesday: '', Wednesday: '', Thursday: ['Bob', 'Sophia'], Friday: '', Saturday: '', Sunday: ['Eva'] } },
    { time: '11:00 AM - 12:00 PM', bookings: { Monday: '', Tuesday: '', Wednesday: ['Charlie', 'Olivia', 'James'], Thursday: '', Friday: '', Saturday: '', Sunday: '' } },
    { time: '01:00 PM - 02:00 PM', bookings: { Monday: '', Tuesday: ['Grace', 'Liam'], Wednesday: '', Thursday: '', Friday: '', Saturday: '', Sunday: '' } },
    { time: '02:00 PM - 03:00 PM', bookings: { Monday: '', Tuesday: '', Wednesday: '', Thursday: '', Friday: '', Saturday: '', Sunday: '' } },
    { time: '03:00 PM - 04:00 PM', bookings: { Monday: '', Tuesday: '', Wednesday: '', Thursday: '', Friday: '', Saturday: '', Sunday: '' } },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Booking Schedule</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2"></th>
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
              <React.Fragment key={index}>
                <tr>
                  <td className="border px-4 py-2">{timeSlot.time}</td>
                  {/* Days and bookings */}
                  {Object.entries(timeSlot.bookings).map(([day, bookingsForDay], i) => (
                    <td key={i} className={`border px-4 py-2 ${bookingsForDay.length >= 10 ? 'bg-red-200' : (bookingsForDay.length > 0 ? 'bg-gray-100' : 'bg-white')}`}>
                      {bookingsForDay.length > 0 ? bookingsForDay.join(', ') : 'Available'}
                    </td>
                  ))}
                </tr>
                {/* Insert an empty row after '11:00 AM - 12:00 PM' */}
                {timeSlot.time === '11:00 AM - 12:00 PM' && (
                  <tr key={`empty_${index}`} className="h-8">
                    <td className="border px-4 py-2"></td>
                    <td className="border px-4 py-2 col-span-7"></td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManagerScheduleView;
