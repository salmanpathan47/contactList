import * as genresAPI from "./fakeGenreService";

const contacts = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    firstname: "carl",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Family" },
    PhoneNumber: 7424125451,
    Email: "salman@gmail.com",
    age: 23,
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    firstname: "carl2",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Family" },
    PhoneNumber: 7424125451,
    Email: "salman@gmail.com",
    age: 23,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    firstname: "rick",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Family" },
    PhoneNumber: 7424125451,
    Email: "salman@gmail.com",
    age: 23,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    firstname: "sal",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Office" },
    PhoneNumber: 7424125451,
    Email: "salman@gmail.com",
    age: 23,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    firstname: "chuck",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Office" },
    PhoneNumber: 7424125451,
    Email: "salman@gmail.com",
    age: 23,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    firstname: "Rita",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Office" },
    PhoneNumber: 7424125451,
    Email: "salman@gmail.com",
    age: 23,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    firstname: "Harry",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Friends" },
    PhoneNumber: 7424125451,
    Email: "salman@gmail.com",
    age: 23,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    firstname: "Shiva",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Friends" },
    PhoneNumber: 7424125451,
    Email: "salman@gmail.com",
    age: 23,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    firstname: "Stark",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Friends" },
    PhoneNumber: 7424125451,
    Email: "salman@gmail.com",
    age: 23,
  }
];

export function getcontacts() {
  return contacts;
}

