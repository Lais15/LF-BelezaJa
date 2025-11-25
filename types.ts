export enum UserType {
  CLIENT = 'CLIENT',
  PROFESSIONAL = 'PROFESSIONAL'
}

export enum ServiceCategory {
  HAIR = 'Cabelo',
  BARBER = 'Barbearia',
  NAILS = 'Unhas',
  MAKEUP = 'Maquiagem',
  BROWS = 'Sobrancelhas',
  WAXING = 'Depilação',
  ESTHETICS = 'Estética',
  SPA = 'Spa & Massagem'
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  durationMinutes: number;
  description?: string;
}

export interface Professional {
  id: string;
  name: string;
  category: ServiceCategory;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  coverUrl: string;
  address: string;
  distanceKm: number;
  isAvailableNow: boolean; // For "Immediate Appointment"
  services: ServiceItem[];
  about: string;
  reviews: Review[];
  portfolio: string[];
}

export interface Appointment {
  id: string;
  professionalName: string;
  serviceName: string;
  date: string;
  time: string;
  price: number;
  status: 'CONFIRMED' | 'PENDING' | 'COMPLETED' | 'CANCELLED';
}

export interface UserState {
  type: UserType;
  name: string;
  location: { lat: number; lng: number } | null;
}