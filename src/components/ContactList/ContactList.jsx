export default function ContactList({ contacts }) {
  return (
    <ol>
      {contacts.map(el => (
        <li key={el.id}>
          <p>
            <span>
              {el.name}: {el.number}
            </span>
            <button type="button">Delete</button>
          </p>
        </li>
      ))}
    </ol>
  );
}
