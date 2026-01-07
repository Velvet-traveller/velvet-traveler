"use client";

import { toast } from "react-toastify";

export interface GuestInfo {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isVisible: boolean;
  isAdded: boolean; // Track if guest has been explicitly added
  isEditing: boolean; // Track if guest is being edited
  isDetailsExpanded: boolean; // Track if details card is expanded
}

interface GuestInputCardProps {
  guest: GuestInfo;
  index: number;
  onUpdateGuest: (
    id: number,
    field: keyof GuestInfo,
    value: string | boolean
  ) => void;
  onAddGuestToCount: (id: number) => void;
  onRemoveGuest: (id: number) => void;
  onToggleGuestEditing: (id: number) => void;
  onToggleGuestVisibility?: (id: number) => void;
  onToggleDetailsExpanded: (id: number) => void;
}

export default function GuestInputCard({
  guest,
  index,
  onUpdateGuest,
  onAddGuestToCount,
  onRemoveGuest,
  onToggleGuestEditing,
  onToggleGuestVisibility,
  onToggleDetailsExpanded,
}: GuestInputCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {guest.isAdded && guest.firstName && guest.lastName
              ? `${guest.firstName} ${guest.lastName}`
              : `Guest ${index + 1}`}
            {index === 0 && guest.isAdded && (
              <span className="text-sm text-[#8B6914] font-normal ml-2">
                (Contact Person)
              </span>
            )}
            {guest.isAdded && index > 0 && (
              <span className="text-sm text-green-600 font-normal ml-2">
                (Added)
              </span>
            )}
          </h3>
          {guest.isAdded && guest.email && (
            <p className="text-sm text-gray-600 mt-1">{guest.email}</p>
          )}
        </div>
        <div className="flex gap-2">
          {guest.isAdded && (
            <button
              type="button"
              onClick={() => onToggleGuestEditing(guest.id)}
              className="text-sm text-[#8B6914] hover:text-[#A67C1A] font-medium cursor-pointer"
            >
              {guest.isEditing ? "Cancel Edit" : "Edit"}
            </button>
          )}
          {/* Show/Hide button only for guests that are not added yet */}
          {!guest.isAdded && onToggleGuestVisibility && (
            <button
              type="button"
              onClick={() => onToggleGuestVisibility(guest.id)}
              className="text-sm text-[#8B6914] hover:text-[#A67C1A] font-medium cursor-pointer"
            >
              {guest.isVisible ? "Hide" : "Show"}
            </button>
          )}
          <button
            type="button"
            onClick={() => onRemoveGuest(guest.id)}
            className="text-sm text-red-600 hover:text-red-700 font-medium cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Accordion toggle button for added guests */}
      {guest.isAdded && !guest.isEditing && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => onToggleDetailsExpanded(guest.id)}
            className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-sm font-medium text-gray-700">
              {guest.isDetailsExpanded ? "Hide Details" : "Show Details"}
            </span>
            <svg
              className={`w-5 h-5 text-gray-600 transition-transform ${
                guest.isDetailsExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Show guest details when expanded */}
          {guest.isDetailsExpanded && (
            <div className="mt-2 p-3 bg-white rounded-lg border border-gray-200">
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Name:
                  </span>
                  <span className="text-sm text-gray-900 ml-2">
                    {guest.firstName} {guest.lastName}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Email:
                  </span>
                  <span className="text-sm text-gray-900 ml-2">
                    {guest.email}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Phone:
                  </span>
                  <span className="text-sm text-gray-900 ml-2">
                    {guest.phone}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Show input fields only when NOT added yet OR when editing */}
      {(!guest.isAdded || guest.isEditing) && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                required
                value={guest.firstName}
                onChange={(e) =>
                  onUpdateGuest(guest.id, "firstName", e.target.value)
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
                value={guest.lastName}
                onChange={(e) =>
                  onUpdateGuest(guest.id, "lastName", e.target.value)
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={guest.email}
                onChange={(e) =>
                  onUpdateGuest(guest.id, "email", e.target.value)
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
                value={guest.phone}
                onChange={(e) =>
                  onUpdateGuest(guest.id, "phone", e.target.value)
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
              />
            </div>
          </div>

          {/* Submit Guest Details Button - Only show if not already added */}
          {!guest.isAdded && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onAddGuestToCount(guest.id)}
                className="w-full bg-[#8B6914] hover:bg-[#A67C1A] text-white px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Submit Guest Details
              </button>
            </div>
          )}

          {/* Save Changes Button - Show when editing an added guest */}
          {guest.isAdded && guest.isEditing && (
            <div className="pt-2 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  // Save changes and exit edit mode
                  onUpdateGuest(guest.id, "isEditing", false);
                  onUpdateGuest(guest.id, "isVisible", false);
                  toast.success("Guest details updated successfully!");
                }}
                className="flex-1 bg-[#8B6914] hover:bg-[#A67C1A] text-white px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => {
                  // Cancel editing - exit edit mode
                  onUpdateGuest(guest.id, "isEditing", false);
                  onUpdateGuest(guest.id, "isVisible", false);
                }}
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
