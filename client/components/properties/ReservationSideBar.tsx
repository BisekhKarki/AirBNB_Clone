"use client";

import { Property } from "@/app/properties/[id]/page";
import React, { useState, useEffect } from "react";
import { Range } from "react-date-range";
import { differenceInDays, eachDayOfInterval, format } from "date-fns";
import apiService from "../services/apiService";
import useLoginModal from "@/hooks/useLoginModal";
import DatePicker from "../forms/Calendar";

interface Props {
  property: Property;
  userId: string | null;
}

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const ReservationSideBar = ({ property, userId }: Props) => {
  const loginModal = useLoginModal();

  const [fee, setFee] = useState<number>(0);
  const [nights, setNights] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [minDate, setMinDate] = useState<Date>(new Date());
  const [guests, setGuests] = useState<string>("1");
  const guestsRange = Array.from(
    {
      length: property.guests,
    },
    (_, index) => index + 1
  );

  const _setDateRange = (selection: any) => {
    const newStartDate = new Date(selection.startDate);
    const newEndDate = new Date(selection.endDate);

    if (newEndDate <= newStartDate) {
      newEndDate.setDate(newStartDate.getDate() + 1);
    }

    setDateRange({
      ...dateRange,
      startDate: newStartDate,
      endDate: newEndDate,
    });
  };

  const performBooking = async () => {
    if (userId) {
      if (dateRange.startDate && dateRange.endDate) {
        const formData = new FormData();
        formData.append("guests", guests);
        formData.append(
          "start_date",
          format(dateRange.startDate, "yyyy-MM-dd")
        );
        formData.append("end_date", format(dateRange.endDate, "yyyy-MM-dd"));
        formData.append("number_of_nights", nights.toString());
        formData.append("total_price", totalPrice.toString());

        const response = await apiService.createBooking(
          `/api/properties/${property.id}/book/`,
          formData
        );
        if (response.success) {
          console.log("Booking successfull");
        } else {
          console.log("Something went wrong");
        }
      }
    } else {
      loginModal.open();
    }
  };

  const getReservations = async () => {
    const reservations = await apiService.get(
      `/api/properties/${property.id}/reservations/`
    );

    let dates: Date[] = [];

    reservations.forEach((reservation: any) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.start_date),
        end: new Date(reservation.end_date),
      });
      dates = [...dates, ...range];
    });

    setBookedDates(dates);
  };

  useEffect(() => {
    getReservations();
    if (dateRange.startDate && dateRange.endDate) {
      const dateCount = differenceInDays(
        dateRange.endDate,
        dateRange.startDate
      );

      if (dateCount && property.price_per_night) {
        const _fee = ((dateCount * property.price_per_night) / 100) * 5;
        setFee(_fee);
        setTotalPrice(dateCount * property.price_per_night + _fee);
        setNights(dateCount);
      } else {
        const _fee = (property.price_per_night / 100) * 5;
        setFee(_fee);
        setTotalPrice(property.price_per_night + _fee);
        setNights(1);
      }
    }
  }, [dateRange]);

  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h2 className="mb-5 text-2xl">${property.price_per_night}/ per night</h2>

      <DatePicker
        value={dateRange}
        bookedDates={bookedDates}
        onChange={(value) => _setDateRange(value.selection)}
      />

      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="block font-bold text-xs mb-2">Guests</label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full -ml-1 text-sm"
          aria-label="Select An Option"
        >
          {guestsRange.map((number, index) => (
            <option key={index} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
      <div
        onClick={() => performBooking()}
        className="w-full mb-6 py-6 text-center text-white bg-red-400 rounded-xl hover:bg-red-500"
      >
        Book
      </div>
      <div className="mb-4 flex justify-between align-middle ">
        <p>
          {property.price_per_night} * {nights} nights
        </p>
        <p>{property.price_per_night * nights}</p>
      </div>
      <div className="mb-4 flex justify-between align-middle ">
        <p>Airbnb Fee</p>
        <p>${fee}</p>
      </div>
      <hr />
      <div className="mt-4 flex justify-between align-middle font-bold">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
    </aside>
  );
};

export default ReservationSideBar;
