import contacts from "../contacts.json";

export default function ContactList() {
  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact._id}>{contact.name}</div>
      ))}
    </div>
  );
}
