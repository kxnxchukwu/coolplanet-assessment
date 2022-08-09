import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { UserItem } from "../../lib/types";
import Loading from "../Loading/loading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import NotFound from "../NotFound/notfound";

const UserProfile = () => {
  let { id: userId } = useParams();

  const [user, setUser] = useState<UserItem>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getUserById() {
      try {
        const response = await fetch(
          `/.netlify/functions/fetchUserById?user=${userId}`,
          {
            method: "GET",
          }
        );

        const userData = await response.json();

        if (userData) {
          setIsLoading(false);
          setUser(userData[0]);
        }
      } catch (error) {
        console.error("Error retrieving all Users: ", { error });
      }
    }

    getUserById();
  }, []);

  const userDetails = user?.first_name ? (
    <Container className="m-4 mx-auto">
      <h1 className="h1 text-center text-success"> User Details </h1>
      <Row>
        <Col sm={5}>
          <img
            className="rounded mx-auto d-block"
            src={user?.avatar ? user?.avatar : "https://robohash.org/temporibusvelquo.png?size=100x100&set=set1"}
            width="500px"
            height="400px"
            alt={user?.first_name}
          />
        </Col>
        <Col sm={7}>
          <Form>
            <Form.Group className="mb-3" controlId="id">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" value={user?.id} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" value={user?.first_name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" value={user?.last_name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={user?.email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailVerified">
              <Form.Label>Email Verified</Form.Label>
              <Form.Control
                type="text"
                value={user?.emailVerified ? "True" : "False"}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="text" value={user?.dob} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" value={user?.company.name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" value={user?.company.department} />
            </Form.Group>
            <h3 className="h4">
              Skills:{" "}
              {user?.skills
                ? user?.skills?.map((skill: string, idx: number) => (
                    <Badge bg="success" className="m-1" key={idx}>
                      {skill}
                    </Badge>
                  ))
                : ""}
            </h3>
          </Form>
        </Col>
      </Row>
    </Container>
  ) : (
    <NotFound />
  );
  return isLoading ? <Loading /> : userDetails;
};

export default UserProfile;
