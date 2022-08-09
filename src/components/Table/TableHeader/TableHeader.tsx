import cn from 'classnames';
import styles from './TableHeader.module.scss';

export default function PlayerTableHeader() {
  return (
    <thead>
      <tr>
        <th> # </th>
        <th> Avatar </th>
        <th>
        First Name
        </th>
        <th>
        Last Name
        </th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
  );
}