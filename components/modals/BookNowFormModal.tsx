"use client";

import { useState } from "react";
import { useBookingStore } from "@/store/bookingStore";
import { toast } from "react-toastify";
import ProcessingModal from "./ProcessingModal";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

interface BookNowFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: string;
  region: string;
  price: string;
}

export default function BookNowFormModal({
  isOpen,
  onClose,
  destination,
  region,
  price,
}: BookNowFormModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelDate: "",
    numberOfGuests: "",
    specialRequests: "",
  });
  const [showProcessing, setShowProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { addBooking, isLoading } = useBookingStore();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowProcessing(true);

    try {
      await addBooking({
        ...formData,
        numberOfGuests: formData.numberOfGuests
          ? parseInt(formData.numberOfGuests)
          : undefined,
        tripType: "hotel",
        destination,
        region,
        price,
      });

      setShowProcessing(false);
      setShowSuccess(true);
      toast.success("Your booking request has been submitted successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        travelDate: "",
        numberOfGuests: "",
        specialRequests: "",
      });
    } catch (error) {
      setShowProcessing(false);
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to submit request"
      );
      setShowError(true);
      toast.error("Failed to submit your booking. Please try again.");
    }
  };

  const handleClose = () => {
    onClose();
    setShowSuccess(false);
    setShowError(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Book Now</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-6">
            <div className="mb-6 p-4 bg-[#f9f3eb] rounded-lg">
              <h3 className="font-bold text-gray-900 mb-1">{destination}</h3>
              <p className="text-sm text-gray-600 mb-2">{region}</p>
              <p className="text-lg font-bold text-gray-900">
                Price: <span className="text-[#8B6914]">{price}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) =>
                      setFormData({ ...formData, travelDate: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={formData.numberOfGuests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        numberOfGuests: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
                    placeholder="e.g., 2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      specialRequests: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
                  placeholder="Any special requests or preferences for your stay..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-[#8B6914] hover:bg-[#A67C1A] text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showProcessing && <ProcessingModal />}
      <SuccessModal
        isOpen={showSuccess}
        onClose={handleClose}
        message="Your booking request has been submitted successfully! We'll send you a confirmation email shortly."
      />
      <ErrorModal
        isOpen={showError}
        onClose={() => setShowError(false)}
        message={errorMessage}
      />
    </>
  );
}
