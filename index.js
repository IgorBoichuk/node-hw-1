// const { program } = require("commander");

const contacts = require("./db/contacts.js");
console.log(contacts);

// Крок 3
// Зроби імпорт модуля contacts.js в файлі index.js та перевір працездатність функції для роботи з контактами.

// index.js
// const argv = require("yargs").argv;

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "get":
      // ... id
      const getContactById = await contacts.getContactById(id);
      console.log(getContactById);
      break;

    case "add":
      // ... name email phone
      const addContact = await contacts.addContact();
      // console.log(addContact);
      break;

    case "remove":
      // ... id
      const removeContact = await contacts.removeContact();
      // console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction(argv);
invokeAction({ action: "list" });
invokeAction({ action: "get", id: "e6ywwRe4jcqxXfCZOj_1e" });
// invokeAction({ action: "add" });
// invokeAction({ action: "remove" });
