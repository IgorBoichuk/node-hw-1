const { program } = require("commander");
const contacts = require("./db/contacts.js");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const getContactById = await contacts.getContactById(id);
      console.log(getContactById);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "e6ywwRe4jcqxXfCZOj_1e" });
// invokeAction({
//   action: "add",
//   name: "Igor",
//   email: "f20@online.ua",
//   phone: "+380635559988",
// });
// invokeAction({ action: "remove", id: "aSvKTlhUopa5QU-Hn7NWB" });

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-n,--name, <type>")
  .option("-e,--email, <type>")
  .option("-ph,--phone, <type>");

program.parse();

const options = program.opts();
invokeAction(options);
