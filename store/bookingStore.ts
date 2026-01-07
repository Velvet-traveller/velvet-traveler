import { create } from "zustand";
import { sendBookingEmail } from "@/utils/email";

export interface BookingData {
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Trip Details
  tripType: "book_a_trip" | "plan_my_trip";
  destination: string;
  region?: string;
  price?: string; // Price per person
  totalAmount?: string; // Total amount (price × number of guests)
  description?: string;
  
  // Additional Details
  travelDate?: string;
  numberOfGuests?: number;
  specialRequests?: string;
  
  // Timestamp
  submittedAt?: Date;
}

interface BookingStore {
  bookings: BookingData[];
  addBooking: (booking: BookingData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export const useBookingStore = create<BookingStore>((set) => ({
  bookings: [],
  isLoading: false,
  error: null,
  
  addBooking: async (booking: BookingData) => {
    set({ isLoading: true, error: null });
    try {
      const newBooking = {
        ...booking,
        submittedAt: new Date(),
      };
      
      // Send email notification
      await sendBookingEmail(newBooking);
      
      // Store booking in state
      set((state) => ({
        bookings: [...state.bookings, newBooking],
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Failed to submit booking",
        isLoading: false,
      });
      throw error;
    }
  },
}));

