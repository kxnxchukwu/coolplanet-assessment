import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { PlayerTableBody } from './TableBody/TableBody';
import PlayerTableHeader from './TableHeader/TableHeader';
import Table from 'react-bootstrap/Table';
import Loading from '../Loading/loading';

export default function PlayerTable() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getAllUsers() {
      try {
        const response = await fetch(`/.netlify/functions/fetchAllPersons`, {
          method: 'GET',
        });
        const usersData = await response.json();
        if (usersData) {
            setIsLoading(false);
            setUsers(usersData);
        }

      } catch (error) {
          console.error("Error retrieving all Users: ", { error });
      }
    }
    
    getAllUsers();

  }, []);
  


  return isLoading ? <Loading /> : (
    <Container fluid className="m-5 mx-auto">
    <Table striped bordered hover>
      <PlayerTableHeader />
      <PlayerTableBody users={users}/>
    </Table>
    </Container>
  );
}