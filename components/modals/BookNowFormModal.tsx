"use client";

import { useState } from "react";
import { useBookingStore } from "@/store/bookingStore";
import { toast } from "react-toastify";
import ProcessingModal from "./ProcessingModal";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";
import GuestInputCard from "@/components/shared/GuestInputCard";
import { useGuestManagement } from "@/components/shared/hooks/useGuestManagement";

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
  // Use guest management hook
  const {
    guests,
    addedGuests,
    numberOfGuests,
    handleAddGuestForm,
    handleAddGuestToCount,
    handleUpdateGuest,
    handleRemoveGuest,
    handleToggleDetailsExpanded,
    resetGuests,
  } = useGuestManagement({ isOpen });

  // Trip details
  const [travelDate, setTravelDate] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const [showProcessing, setShowProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { addBooking, isLoading } = useBookingStore();

  // Extract numeric value from price string (e.g., "$899" -> 899)
  const extractPriceNumber = (priceStr: string): number => {
    const cleaned = priceStr.replace(/[^0-9.]/g, "");
    return parseFloat(cleaned) || 0;
  };

  // Calculate total amount based on number of guests (only count added guests)
  const pricePerPerson = extractPriceNumber(price);
  const totalAmount = pricePerPerson * numberOfGuests;

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (!isOpen) return null;

  // Validation: Check if form is valid for submission
  const isFormValid = addedGuests.length > 0 && travelDate.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get all added guests
    const addedGuests = guests.filter((g) => g.isAdded);

    // Validate that at least one guest is added
    if (addedGuests.length === 0) {
      toast.error("Please add at least one guest before submitting.");
      return;
    }

    // First guest is the contact person
    const contactPerson = addedGuests[0];

    setShowProcessing(true);

    try {
      // Format all guests information for email with clear contact person indication
      const allGuestsInfo = addedGuests
        .map(
          (guest, index) =>
            `${index === 0 ? "👤 CONTACT PERSON" : `GUEST ${index + 1}`}:
👤 Full Name: ${guest.firstName} ${guest.lastName}
📧 Email: ${guest.email}
📱 Phone: ${guest.phone}`
        )
        .join("\n\n");

      await addBooking({
        firstName: contactPerson.firstName,
        lastName: contactPerson.lastName,
        email: contactPerson.email,
        phone: contactPerson.phone,
        numberOfGuests: numberOfGuests,
        tripType: "book_a_trip",
        destination,
        region,
        price, // Price per person
        totalAmount: totalAmount > 0 ? formatCurrency(totalAmount) : undefined,
        travelDate,
        specialRequests,
        // Include all guests information
        description: `All Guests Information:\n\n${allGuestsInfo}`,
      });

      setShowProcessing(false);
      setShowSuccess(true);
      toast.success("Your booking request has been submitted successfully!");

      // Reset form
      resetGuests();
      setTravelDate("");
      setSpecialRequests("");
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
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
            <h2 className="text-2xl font-bold text-gray-900">Book Now</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
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

          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              <div className="mb-6 p-4 bg-[#f9f3eb] rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1">{destination}</h3>
                <p className="text-sm text-gray-600 mb-2">{region}</p>
              </div>

              {/* Travel Information Header - Moved to top */}
              <div className="mb-6 pb-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Travel Information
                </h3>
                <p className="text-sm text-gray-600">
                  Please provide your booking information below before
                  confirming your trip. This helps us prepare the best
                  experience for you.
                </p>
              </div>

              <form
                id="booking-form"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Guest Instructions - Only show when no guests are visible */}
                {guests.length === 0 && (
                  <div className="mb-4 text-center">
                    <p className="text-base text-gray-700 leading-relaxed">
                      Click <strong>"Add a Guest"</strong> to fill in guest
                      details
                    </p>
                  </div>
                )}

                {/* All Guests */}
                {guests.map((guest, index) => (
                  <GuestInputCard
                    key={guest.id}
                    guest={guest}
                    index={index}
                    onUpdateGuest={handleUpdateGuest}
                    onAddGuestToCount={handleAddGuestToCount}
                    onRemoveGuest={handleRemoveGuest}
                    onToggleDetailsExpanded={handleToggleDetailsExpanded}
                  />
                ))}

                {/* Add More Guest Button - Right aligned */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleAddGuestForm}
                    className="px-6 py-2 border-2 border-dashed border-[#8B6914] text-[#8B6914] rounded-lg font-semibold hover:bg-[#8B6914] hover:text-white transition-colors cursor-pointer"
                  >
                    + Add a Guest
                  </button>
                </div>

                {/* Travel Information Form Fields */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Check-in Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kindly write more details or preference of your trip
                      </label>
                      <textarea
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
                        placeholder="Kindly write more details, special requirements or preference of your trip..."
                      />
                    </div>
                  </div>
                </div>

                {/* Summary Section - Moved before buttons */}
                <div className="mt-6 p-4 bg-[#f9f3eb] rounded-lg border-2 border-[#8B6914]">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Booking Summary
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Price per person:</span>
                      <span className="font-semibold text-[#8B6914]">
                        {price}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Number of guests:</span>
                      <span className="font-semibold text-gray-900">
                        {numberOfGuests}{" "}
                        {numberOfGuests === 1 ? "guest" : "guests"}
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-300">
                      <span className="text-lg font-bold text-gray-900">
                        Total Amount:
                      </span>
                      <span className="text-lg font-bold text-[#8B6914]">
                        {formatCurrency(totalAmount)}
                      </span>
                    </div>
                    {numberOfGuests > 1 && (
                      <p className="text-sm text-gray-600 mt-2">
                        ({numberOfGuests} guests ×{" "}
                        {formatCurrency(pricePerPerson)})
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Sticky Footer Buttons */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex gap-4 z-10">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="booking-form"
              disabled={isLoading || !isFormValid}
              className="flex-1 bg-[#8B6914] hover:bg-[#A67C1A] text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
              Confirm Booking
            </button>
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
