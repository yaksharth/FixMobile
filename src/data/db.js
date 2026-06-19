import { repairData as initialRepairData } from './repairData';

// Simulated DB Keys
const KEYS = {
  AUTH: 'fixmobile_admin_auth',
  BOOKINGS: 'fixmobile_bookings',
  PRICING: 'fixmobile_pricing'
};

// ---------------------------
// AUTHENTICATION
// ---------------------------
export const loginAdmin = (pin) => {
  if (pin === '1234') {
    sessionStorage.setItem(KEYS.AUTH, 'true');
    return true;
  }
  return false;
};

export const logoutAdmin = () => {
  sessionStorage.removeItem(KEYS.AUTH);
};

export const isAuthenticated = () => {
  return sessionStorage.getItem(KEYS.AUTH) === 'true';
};

// ---------------------------
// BOOKINGS
// ---------------------------
export const getBookings = () => {
  const data = localStorage.getItem(KEYS.BOOKINGS);
  return data ? JSON.parse(data) : [];
};

export const addBooking = (bookingData) => {
  const bookings = getBookings();
  const newBooking = {
    ...bookingData,
    id: Date.now().toString(),
    status: 'Pending',
    createdAt: new Date().toISOString()
  };
  bookings.push(newBooking);
  localStorage.setItem(KEYS.BOOKINGS, JSON.stringify(bookings));
  return newBooking;
};

export const updateBookingStatus = (id, newStatus) => {
  const bookings = getBookings();
  const updated = bookings.map(b => b.id === id ? { ...b, status: newStatus } : b);
  localStorage.setItem(KEYS.BOOKINGS, JSON.stringify(updated));
};

export const deleteBooking = (id) => {
  const bookings = getBookings();
  const filtered = bookings.filter(b => b.id !== id);
  localStorage.setItem(KEYS.BOOKINGS, JSON.stringify(filtered));
};

// ---------------------------
// PRICING DATA
// ---------------------------
export const getPricingData = () => {
  const data = localStorage.getItem(KEYS.PRICING);
  if (data) {
    return JSON.parse(data);
  }
  // If not found, seed with initial data
  localStorage.setItem(KEYS.PRICING, JSON.stringify(initialRepairData));
  return initialRepairData;
};

export const updatePrice = (brand, model, issue, newPrice) => {
  const data = getPricingData();
  if (data[brand] && data[brand][model]) {
    data[brand][model][issue] = parseInt(newPrice, 10);
    localStorage.setItem(KEYS.PRICING, JSON.stringify(data));
    return true;
  }
  return false;
};
