import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Trainers from './pages/Trainers';
import Booking from './pages/Booking';
import Admin from './pages/Admin';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [services, setServices] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchServices();
    fetchTrainers();
    fetchBookings();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTrainers = async () => {
    try {
      const response = await axios.get('/api/trainers');
      setTrainers(response.data);
    } catch (error) {
      console.error('Error fetching trainers:', error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get('/api/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleBookingCreated = (newBooking) => {
    setBookings([...bookings, newBooking]);
    setCurrentPage('home');
  };

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="main-content">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'services' && <Services services={services} onNavigate={handleNavigate} />}
        {currentPage === 'trainers' && <Trainers trainers={trainers} />}
        {currentPage === 'booking' && (
          <Booking 
            services={services} 
            trainers={trainers}
            onBookingCreated={handleBookingCreated}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'admin' && (
          <Admin 
            bookings={bookings}
            onRefresh={fetchBookings}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
