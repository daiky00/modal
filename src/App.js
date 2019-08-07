import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import ModalMedia from './components/Modal/ModalMedia';
import ModalContent from './components/Modal/ModalContent';
import ModalActions from './components/Modal/ModalActions';
import Button from './components/Button/Button';
import './App.scss';
import eventImage from './images/event.jpg';
import { FaExternalLinkAlt } from 'react-icons/fa';

const App = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () =>  {
    setOpen(false);
  }
  return (
    <React.Fragment>
      <div className="App">
       <Button color="secondary" size="md" onClick={handleClickOpen}>Open Modal</Button>
      </div>
      <Modal open={open} onClose={handleClose} closeIconInvert={true}>
        <ModalMedia image={eventImage} title="The Tech Interactive, San Jose" subtitle="San Jose Meetup"/>
        <ModalContent>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
              venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. 
              Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, 
              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. 
              Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. 
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed 
              ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt 
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros 
              faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, 
              leo eget bibendum sodales, augue velit cursus nunc,
            </p>
        </ModalContent>
        <ModalActions>
          <Button color="primary" size="md" fullWidth={true}>RSVP <FaExternalLinkAlt /></Button>
        </ModalActions>
      </Modal>
    </React.Fragment>
  );
}

export default App;
