drop table if exists apartments;
drop table if exists offices;
drop table if exists storefronts;

CREATE TABLE apartment (
    id serial primary key,
    apartment_number int,
    number_of_bedrooms int,
    address text not null,
    tenant varchar,
    occupied_status boolean,
    square_footage int,
    price int
);

CREATE TABLE offices (
    id serial primary key,
    office_number int,
    number_of_floors int,
    square_footage int,
    number_of_cubicles int,
    number_of_bathrooms int,
    address text not null,
    company_name varchar,
    occuiped_status boolean,
    price int
);

CREATE TABLE storefronts (
    id serial primary key,
    address text not null,
    occuiped_status boolean,
    price int,
    kitchen boolean,
    square_footage int,
    owner varchar,
    outdoor_seating boolean DEFAULT false
);