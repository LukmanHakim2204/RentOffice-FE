import z from "zod";

export const bookingSchema = z.object({
    name: z.string().min(1, "Name is Required"),
    phone_number: z.string().min(1, "Phone Number is Required"),
    started_at: z.string().refine((date)=> !isNaN(Date.parse(date)), "Invalid date"),
    office_space_id: z.number().min(1, "Office Space ID is Required"),
});

export const viewBookingSchema = z.object({
    booking_trx_id: z.string().min(1, "Booking Transaction ID is Required"),
    phone_number: z.string().min(1, "Phone Number is Required"),
});