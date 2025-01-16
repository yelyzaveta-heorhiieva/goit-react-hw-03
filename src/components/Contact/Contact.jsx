import { FaUser, FaPhone } from "react-icons/fa6";

const Contact = ({ data: {name, number, id}, onDelete }) => {

  return (
      <>
        <p><FaUser />{name}</p>
        <a href={`tel:+${number.split('-').join('')}`}><FaPhone />{number}</a>
        <button type="button" onClick={() => onDelete(id)}>Delete</button>
    </>

  )
}

export default Contact

