interface Person {
  name: string;
  birthPlaceDate: string;
  fatherName: string;
  motherName: string;
  image: string;
}

interface Couple {
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

export const couple: Couple = {
  groom: {
    name: "James Anderson",
    birthPlaceDate: "New York, April 15, 1990",
    fatherName: "Robert Anderson",
    motherName: "Mary Anderson",
    image: "/images/groom.jpeg",
  },
  bride: {
    name: "Emily Thompson",
    birthPlaceDate: "London, June 23, 1992",
    fatherName: "William Thompson",
    motherName: "Sarah Thompson",
    image: "/images/bride.jpeg",
  },
  address: "123 Wedding Lane, Garden City, NY 11530",
  whatsappNumber: "+1234567890",
  instagram: "@jamesemily2024",
  twitter: "@jamesemily2024",
  bankAccounts: {
    Chase: "1234567890",
    "Bank of America": "0987654321",
    "Wells Fargo": "5678901234",
  },
};
