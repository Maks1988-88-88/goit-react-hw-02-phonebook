export default function ContactList({ contacts, onDelete }) {
  return (
    <ol>
      {contacts.map(el => (
        <li key={el.id}>
          <p>
            <span>
              {el.name}: {el.number}
            </span>
            <button type="button" onClick={() => onDelete(el.id)}>
              Delete
            </button>
          </p>
        </li>
      ))}
    </ol>
  );
}
