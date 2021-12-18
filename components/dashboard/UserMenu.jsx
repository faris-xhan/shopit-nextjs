import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Person as PersonIcon } from 'react-bootstrap-icons';

export const UserMenu = (props) => {
  return (
    <DropdownButton
      id="user-menu"
      variant="none"
      align="end"
      title={<PersonIcon fontSize={20} />}
      {...props}
    >
      <Dropdown.Item button>Profile</Dropdown.Item>
      <Dropdown.Item button>Logout</Dropdown.Item>
    </DropdownButton>
  );
};
