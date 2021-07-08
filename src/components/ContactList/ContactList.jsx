import PropTypes from 'prop-types';


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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

