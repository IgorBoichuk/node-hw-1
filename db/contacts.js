const fs = require("fs/promises");
const path = require("path");
// const { nanoid } = require("nanoid");

// Крок 2

const contactsPath = path.join(__dirname, "contacts.json");

// TODO: задокументувати кожну функцію
const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const singleContact = contacts.find((item) => item.id === contactId);
  return singleContact;
};

const removeContact = async (contactId) => {
  // ...твій код
  console.log("removeContact");
};

const addContact = async (name, email, phone) => {
  // ...твій код
  console.log("addContact");
};

module.exports = {
  listContacts,
  getContactById,
  // addContact,
  // removeContact,
};
