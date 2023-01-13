import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './headerSelector.css'

function Nba_ButtonGroup() {
  return (
    <section className="data-selector">
        <div className="mr3">
          <ButtonGroup size="lg" className="mb-2">
            <Button>League</Button>
            <Button>Conference</Button>
            <Button>Division</Button>
          </ButtonGroup>
        </div>
        <section>
          <DropdownButton className="dropdown-basic-button mr3" title="Regular Season">
            <Dropdown.Item href="#/action-1">2022-2023</Dropdown.Item>
          </DropdownButton>
        </section>
    </section>
  );
}

export default Nba_ButtonGroup;