const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('../models/Service');
const Trainer = require('../models/Trainer');
const Booking = require('../models/Booking');

dotenv.config();

const SERVICES = [
  { name: 'Morning Flow', description: 'Gentle energising sequence to start your day with clarity and calm.', price: '₹800', per: 'session', icon: '🌅', duration: '45 min', level: 'All levels', popular: true },
  { name: 'Power Vinyasa', description: 'Dynamic flow building strength, flexibility and breath awareness.', price: '₹1,200', per: 'session', icon: '🔥', duration: '60 min', level: 'Intermediate', popular: false },
  { name: 'Prenatal Yoga', description: 'Safe, adapted practice for every trimester with specialist guidance.', price: '₹1,000', per: 'session', icon: '🤰', duration: '50 min', level: 'Beginners', popular: false },
  { name: 'Monthly Package', description: '12 sessions a month — best value with priority trainer access.', price: '₹6,500', per: 'month', icon: '📆', duration: 'Flexible', level: 'All levels', popular: false },
  { name: 'Corporate Wellness', description: 'Group sessions at your workplace — from 5 to 50 people.', price: '₹4,000', per: 'session', icon: '🏢', duration: '60 min', level: 'All levels', popular: false },
  { name: 'Kids Yoga', description: 'Playful sessions for children aged 5–14, building focus and confidence.', price: '₹700', per: 'session', icon: '🧒', duration: '40 min', level: 'Kids', popular: false },
];

const TRAINERS = [
  { name: 'Priya Sharma', role: 'Lead Instructor', experience: '8 years', bio: 'RYT-500 certified, specialising in therapeutic yoga and pranayama. Trained at Rishikesh Yoga Institute.', tags: ['Vinyasa', 'Pranayama', 'Therapeutic'], rating: 4.9, reviews: 132, emoji: '🧘‍♀️', availability: 'Mon–Sat' },
  { name: 'Arjun Mehta', role: 'Power & Ashtanga', experience: '6 years', bio: 'Former athlete turned yoga practitioner. Brings discipline and precision to every class. Corporate wellness specialist.', tags: ['Ashtanga', 'Power', 'Corporate'], rating: 4.8, reviews: 89, emoji: '🧘‍♂️', availability: 'Tue–Sun' },
  { name: 'Deepa Nair', role: 'Prenatal Specialist', experience: '10 years', bio: 'Certified prenatal and postnatal yoga therapist. Gentle, nurturing approach tailored for every stage of motherhood.', tags: ['Prenatal', 'Restorative', 'Gentle'], rating: 5.0, reviews: 201, emoji: '👩‍⚕️', availability: 'Mon–Fri' },
  { name: 'Rohan Verma', role: 'Kids & Beginners', experience: '4 years', bio: 'Child development-trained instructor making yoga fun and accessible for young learners and absolute beginners.', tags: ['Kids', 'Beginners', 'Mindfulness'], rating: 4.7, reviews: 64, emoji: '🎯', availability: 'Wed–Sun' },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pure-yoga');
    console.log('✓ Connected to MongoDB');

    // Clear existing data
    await Service.deleteMany();
    await Trainer.deleteMany();
    console.log('✓ Cleared existing data');

    // Seed services
    await Service.insertMany(SERVICES);
    console.log('✓ Services seeded');

    // Seed trainers
    await Trainer.insertMany(TRAINERS);
    console.log('✓ Trainers seeded');

    console.log('✓ Database seeding complete');
    process.exit(0);
  } catch (error) {
    console.error('✗ Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();
