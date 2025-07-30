import React, { useState } from 'react';

const PlasticImpactCalculator = () => {
    const [attendeesInput, setAttendeesInput] = useState('0');
    const [daysInput, setDaysInput] = useState('1');
    const [attendees, setAttendees] = useState(0);
    const [days, setDays] = useState(1);
    const [carbonImpact, setCarbonImpact] = useState(0);

    const handleAttendeesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/^0+(?=\d)/, ''); // Remove leading zeros except single 0
        if (value === '') value = '0';
        setAttendeesInput(value);
        const num = Number(value);
        setAttendees(num);
        calculateCarbonImpact(num, days);
    };

    const handleDaysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/^0+(?=\d)/, ''); // Remove leading zeros except single 0
        if (value === '') value = '0';
        setDaysInput(value);
        const num = Number(value);
        setDays(num);
        calculateCarbonImpact(attendees, num);
    };

    const calculateCarbonImpact = (attendeeCount: number, eventDays: number) => {
        // 1 attendee generates 7 pieces per day, 1 piece = 0.143 kg plastic, 1 kg plastic = 2 kg CO2
        const pieces = attendeeCount * 7 * eventDays;
        const plasticWaste = pieces * 0.2;
        const impact = plasticWaste * 2;
        setCarbonImpact(impact);
    };

    return (
        <section className="section bg-white">
            <div className="container-custom">
                <div className="text-center mb-8">
                    <h2 className="section-title">Environmental impact without Ecocrew</h2>
                    <p className="section-subtitle">
                        Estimate the environmental impact of your event based on the number of attendees and event days.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-20">
                    <div className="bg-white rounded-2xl shadow-lg p-8 order-2 lg:order-1 mb-8">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="attendees" className="block text-sm font-medium text-gray-700 mb-1">Number of Attendees</label>
                                <input
                                    type="number"
                                    id="attendees"
                                    min="0"
                                    value={attendeesInput}
                                    onChange={handleAttendeesChange}
                                    className="w-full bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 px-2"
                                />
                                <p className="mt-2 text-gray-700">You selected: <span className="font-bold">{attendees}</span></p>
                            </div>
                            <div>
                                <label htmlFor="days" className="block text-sm font-medium text-gray-700 mb-1">Number of Event Days</label>
                                <input
                                    type="number"
                                    id="days"
                                    min="0"
                                    max="100"
                                    value={daysInput}
                                    onChange={handleDaysChange}
                                    className="w-full bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 px-2"
                                />
                                <p className="mt-2 text-gray-700">Event duration: <span className="font-bold">{days}</span> day(s)</p>
                            </div>
                            <div>
                                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                                <select
                                    id="eventType"
                                    className="w-full bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 px-2"
                                >
                                    <option value="">Select event type</option>
                                    <option value="conference">Conference</option>
                                    <option value="festival">Festival</option>
                                    <option value="workshop">Workshop</option>
                                    <option value="seminar">Seminar</option>
                                    <option value="party">Party</option>
                                    <option value="marathon">Marathon</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-lg p-8 text-white mb-8">
                            <h3 className="text-xl font-bold mb-4">Estimated single-use plastic waste</h3>
                            <p className="text-2xl font-bold mb-2">
                                {Number(attendees * 5 * days).toLocaleString()} Pieces
                            </p>
                            <p className="text-white text-sm mb-6">Based on an average of 5 pieces per attendee per day.</p>
                            <h3 className="text-xl font-bold mb-4">Estimated Carbon Impact</h3>
                            <p className="text-2xl font-bold mb-2">
                                {carbonImpact.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kg of CO<sub>2</sub>
                            </p>
                            <p className="text-white text-sm">Calculated from plastic waste converted to CO<sub>2</sub> emissions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlasticImpactCalculator;