import React from "react"
import styles from './TableBody.module.scss';
import { UserItem } from '../../../lib/types';
import { useNavigate } from "react-router-dom";


interface Props {
    users: UserItem[]
}

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

export const PlayerTableBody = ({users}: Props) => {
  
  let navigate = useNavigate();   
    
  const handleClick = (event: ButtonEvent, id: number): void => {
        event.preventDefault();
        navigate(`/user/${id}`, { replace: true });
    }

  return (
    <tbody className={styles.tbody}>
      {users.map(({ id, avatar, first_name, last_name, email }) => (
        <tr key={id}>
          <td>{id}</td>
          <td><img src={avatar ? avatar : "https://robohash.org/temporibusvelquo.png?size=100x100&set=set1"} width="50px" height="50px" /></td>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{email}</td>
          <td className={styles.buttonsBarContainer}>
            <button onClick={(event) => handleClick(event, id)}> <img src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1659983870/open_grsbws.svg" width="45px" height="45px" /> </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}