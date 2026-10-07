import { useState } from 'react';

export default function MeetingScheduler() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const meetingTypes = [
    { id: 1, title: 'Free Marketing Audit', duration: '30 min', description: 'Comprehensive review of your current marketing', color: 'from-blue-500 to-cyan-500' },
    { id: 2, title: 'Strategy Consultation', duration: '45 min', description: 'Deep dive into your marketing strategy', color: 'from-purple-500 to-pink-500' },
    { id: 3, title: 'Project Discussion', duration: '60 min', description: 'Detailed project scope and planning', color: 'from-green-500 to-emerald-500' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split('T')[0],
          day: date.toLocaleDateString('en-US', { weekday: 'short' }),
          dayNum: date.getDate(),
          month: date.toLocaleDateString('en-US', { month: 'short' })
        });
      }
    }
    return dates;
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('company', formData.company);
    formDataToSend.append('notes', formData.notes);
    formDataToSend.append('meeting_date', selectedDate);
    formDataToSend.append('meeting_time', selectedTime);
    formDataToSend.append('meeting_type', meetingTypes[0].title);
    formDataToSend.append('_subject', `Meeting Request: ${selectedDate} at ${selectedTime}`);
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_MEETING_FORM_ID', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
          setStep(1);
          setSelectedDate('');
          setSelectedTime('');
          setFormData({ name: '', email: '', phone: '', company: '', notes: '' });
        }, 3000);
      } else {
        alert('There was an error booking your meeting. Please try again.');
      }
    } catch (error) {
      alert('There was an error booking your meeting. Please try again.');
    }
  };

  return (
    <>
      {/* Schedule Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 left-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-110 transition-all duration-300 z-50 flex items-center gap-2 font-semibold"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="hidden md:inline">Book a Call</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-900 rounded-2xl border border-blue-500/20 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Schedule a Meeting</h2>
                <p className="text-white/80 text-sm mt-1">Book a free consultation with our team</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Progress Steps */}
            {!submitted && (
              <div className="px-6 py-4 border-b border-slate-800">
                <div className="flex items-center justify-between">
                  {['Meeting Type', 'Date & Time', 'Your Details', 'Confirm'].map((label, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step > idx + 1 ? 'bg-green-500 text-white' :
                        step === idx + 1 ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' :
                        'bg-slate-800 text-slate-500'
                      }`}>
                        {step > idx + 1 ? '✓' : idx + 1}
                      </div>
                      <span className={`ml-2 text-sm hidden md:inline ${step === idx + 1 ? 'text-white font-semibold' : 'text-slate-500'}`}>
                        {label}
                      </span>
                      {idx < 3 && <div className={`w-12 md:w-24 h-0.5 mx-2 ${step > idx + 1 ? 'bg-green-500' : 'bg-slate-800'}`}></div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {!submitted ? (
                <>
                  {/* Step 1: Meeting Type */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4">Select Meeting Type</h3>
                      {meetingTypes.map((type) => (
                        <div
                          key={type.id}
                          className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all cursor-pointer group"
                          onClick={() => setStep(2)}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${type.color} flex items-center justify-center text-white text-xl`}>
                              📅
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition">{type.title}</h4>
                              <p className="text-slate-400 text-sm mt-1">{type.description}</p>
                              <p className="text-blue-400 text-sm font-semibold mt-2">⏱ {type.duration}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Step 2: Date & Time */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Select Date</h3>
                        <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                          {generateDates().map((date) => (
                            <button
                              key={date.date}
                              onClick={() => setSelectedDate(date.date)}
                              className={`p-3 rounded-xl border transition-all ${
                                selectedDate === date.date
                                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-500 text-white'
                                  : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:border-blue-500/50'
                              }`}
                            >
                              <div className="text-xs font-semibold">{date.day}</div>
                              <div className="text-lg font-bold">{date.dayNum}</div>
                              <div className="text-xs">{date.month}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {selectedDate && (
                        <div>
                          <h3 className="text-xl font-bold text-white mb-4">Select Time</h3>
                          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`p-3 rounded-xl border transition-all text-sm font-semibold ${
                                  selectedTime === time
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-500 text-white'
                                    : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:border-blue-500/50'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedDate && selectedTime && (
                        <button
                          onClick={() => setStep(3)}
                          className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                        >
                          Continue →
                        </button>
                      )}
                    </div>
                  )}

                  {/* Step 3: Your Details */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4">Your Details</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name *</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-300 mb-2">Email *</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-300 mb-2">Phone</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-300 mb-2">Company</label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">Additional Notes</label>
                        <textarea
                          value={formData.notes}
                          onChange={(e) => setFormData({...formData, notes: e.target.value})}
                          rows={3}
                          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none resize-none"
                          placeholder="Tell us about your project or questions..."
                        />
                      </div>
                      <button
                        onClick={() => setStep(4)}
                        disabled={!formData.name || !formData.email}
                        className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Review Booking →
                      </button>
                    </div>
                  )}

                  {/* Step 4: Confirm */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white mb-4">Confirm Your Booking</h3>
                      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="text-blue-400">📅</span>
                          <div>
                            <div className="text-sm text-slate-400">Meeting Type</div>
                            <div className="text-white font-semibold">Free Marketing Audit (30 min)</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-blue-400">🗓️</span>
                          <div>
                            <div className="text-sm text-slate-400">Date & Time</div>
                            <div className="text-white font-semibold">
                              {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {selectedTime}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-blue-400">👤</span>
                          <div>
                            <div className="text-sm text-slate-400">Contact</div>
                            <div className="text-white font-semibold">{formData.name}</div>
                            <div className="text-slate-400 text-sm">{formData.email}</div>
                          </div>
                        </div>
                        {formData.company && (
                          <div className="flex items-center gap-3">
                            <span className="text-blue-400">🏢</span>
                            <div>
                              <div className="text-sm text-slate-400">Company</div>
                              <div className="text-white font-semibold">{formData.company}</div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={() => setStep(3)}
                          className="flex-1 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-all"
                        >
                          ← Back
                        </button>
                        <button
                          onClick={handleSubmit}
                          className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                        >
                          Confirm Booking ✓
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Meeting Booked!</h3>
                  <p className="text-slate-400 mb-6">We've sent a confirmation email to {formData.email}</p>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-left">
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">What's next?</strong><br />
                      Our team will prepare for your meeting and send you a calendar invite shortly. 
                      We look forward to speaking with you!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
