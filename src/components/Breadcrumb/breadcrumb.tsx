import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadCrumb() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/users">User List</Breadcrumb.Item>
      <Breadcrumb.Item active>User Details</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumb;
