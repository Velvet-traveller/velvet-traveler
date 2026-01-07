import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { GuestInfo } from "./GuestInputCard";

interface UseGuestManagementOptions {
  isOpen: boolean;
}

export function useGuestManagement({ isOpen }: UseGuestManagementOptions) {
  // All guests (first guest is the contact person)
  const [guests, setGuests] = useState<GuestInfo[]>([]);
  const [nextGuestId, setNextGuestId] = useState(1);

  // Initialize first guest when modal opens
  useEffect(() => {
    if (isOpen) {
      // Initialize with one guest form when modal opens
      if (guests.length === 0) {
        setGuests([
          {
            id: 1,
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            isVisible: true,
            isAdded: false,
            isEditing: false,
            isDetailsExpanded: false,
          },
        ]);
        setNextGuestId(2);
      }
    } else {
      // Reset when modal closes
      setGuests([]);
      setNextGuestId(1);
    }
  }, [isOpen]);

  // Calculate number of guests (only count added guests)
  const addedGuests = guests.filter((guest) => guest.isAdded);
  const numberOfGuests = addedGuests.length;

  // Add a new guest form (not yet added to count)
  const handleAddGuestForm = () => {
    const newGuest: GuestInfo = {
      id: nextGuestId,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      isVisible: true, // Always visible when not added
      isAdded: false, // Not added until user clicks "Submit Guest Details"
      isEditing: false,
      isDetailsExpanded: false,
    };
    setGuests([...guests, newGuest]);
    setNextGuestId(nextGuestId + 1);
  };

  // Mark a guest as added (count them in total)
  const handleAddGuestToCount = (id: number) => {
    const guest = guests.find((g) => g.id === id);
    if (
      guest &&
      guest.firstName &&
      guest.lastName &&
      guest.email &&
      guest.phone
    ) {
      // Update the guest to be added - set all states at once
      // Details card is collapsed by default
      setGuests((prevGuests) =>
        prevGuests.map((g) =>
          g.id === id
            ? {
                ...g,
                isAdded: true,
                isVisible: false,
                isEditing: false,
                isDetailsExpanded: false, // Collapsed by default
              }
            : g
        )
      );

      toast.success("Guest added successfully!");
    } else {
      toast.error("Please fill in all guest information before adding.");
    }
  };

  // Update guest information
  const handleUpdateGuest = (
    id: number,
    field: keyof GuestInfo,
    value: string | boolean
  ) => {
    setGuests(
      guests.map((guest) =>
        guest.id === id ? { ...guest, [field]: value } : guest
      )
    );
  };

  // Remove a guest
  const handleRemoveGuest = (id: number) => {
    setGuests(guests.filter((guest) => guest.id !== id));
  };

  // Toggle guest visibility
  const handleToggleGuestVisibility = (id: number) => {
    handleUpdateGuest(
      id,
      "isVisible",
      !guests.find((g) => g.id === id)?.isVisible
    );
  };

  // Toggle guest editing mode
  const handleToggleGuestEditing = (id: number) => {
    const guest = guests.find((g) => g.id === id);
    if (guest) {
      const willBeEditing = !guest.isEditing;
      handleUpdateGuest(id, "isEditing", willBeEditing);
      // When starting to edit, make inputs visible
      if (willBeEditing) {
        handleUpdateGuest(id, "isVisible", true);
      } else {
        // When canceling edit, hide inputs
        handleUpdateGuest(id, "isVisible", false);
      }
    }
  };

  // Toggle guest details expansion
  const handleToggleDetailsExpanded = (id: number) => {
    handleUpdateGuest(
      id,
      "isDetailsExpanded",
      !guests.find((g) => g.id === id)?.isDetailsExpanded
    );
  };

  // Reset guests to initial state (one empty guest)
  const resetGuests = () => {
    setGuests([
      {
        id: 1,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        isVisible: true,
        isAdded: false,
        isEditing: false,
        isDetailsExpanded: false,
      },
    ]);
    setNextGuestId(2);
  };

  return {
    guests,
    addedGuests,
    numberOfGuests,
    handleAddGuestForm,
    handleAddGuestToCount,
    handleUpdateGuest,
    handleRemoveGuest,
    handleToggleGuestVisibility,
    handleToggleGuestEditing,
    handleToggleDetailsExpanded,
    resetGuests,
  };
}

