export interface Couple {
  groom: Person;
  bride: Person;
  address: string;
  whatsappNumber: string;
  instagram: string;
  twitter: string;
  bankAccounts: {
    [key: string]: string;
  };
}

export interface Person {
  name: string;
  birthPlaceDate: string;
  fatherName: string;
  motherName: string;
}

export interface EventDetails {
  akad: Event;
  reception: Event;
}

interface Event {
  date: string;
  location: string;
}