import React from "react";
import PropTypes from "prop-types";
import { ContactListStyle } from "./ContactListStyle";

const ContactList = ({ contactsToRender, onDelete }) => {
  return (
    <ContactListStyle>
      <ul>
        {contactsToRender.map((props) => {
          const { name, number, id } = props;
          return (
            <li className="contactItem" key={id} data-id={id}>
              {`${name}: ${number}`}
              <button type="button" onClick={onDelete}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </ContactListStyle>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contactsToRender: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
export default ContactList;
