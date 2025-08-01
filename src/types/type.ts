

interface Photo{
    id:number;
    photo:string;
}

interface Benefit{
    id:number;
    name:string;
}
export interface Office {
    id:number;
    price:number;
    duration:number;
    name:string;
    slug:string;
    thumbnail:string;
    city:City;
    photos:Photo[];
    benefits:Benefit[];
    about:string;
    address:string;
    // address:string;
}
export interface City {
    id:number;
    name:string;
    slug:string;
    photo:string;
    officeSpaces_count:number;
    officeSpaces:Office[];
}

export interface BookingDetails{
    id:number;
    name:string;
    phone_number:string;
    booking_trx_id:string;
    is_paid:boolean;
    duration:number;
    started_at:string;
    ended_at:string;
    total_amount:number;
    office:Office;
}