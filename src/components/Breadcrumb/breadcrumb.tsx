import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

function BreadCrumb() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item><Link to="/users">User List</Link></Breadcrumb.Item>
      <Breadcrumb.Item active>User Details</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumb;
