import React, { useState } from "react";
import {
  Button,
  Nav,
  Icon,
  Badge,
  StoryBackground,
  Modal,
  ModalTitle,
  ModalHeader,
  header,
  ModalBody,
  body,
  ModalFooter,
  footer,
} from "@symphony-ui/uitoolkit-components";
import "@symphony-ui/uitoolkit-styles/dist/css/uitoolkit.css";
import "./App.css";
import "./css/style.css";

function App() {
  const [show, setShow] = useState(false);

  function Modal() {
    if (show) {
      console.log("ok");
      return (
        <div>
          <StoryBackground>
            <Modal size="medium" closeButton show>
              <ModalTitle>Medium modal without header</ModalTitle>
              <ModalBody>{body}</ModalBody>
              <ModalFooter>{footer}</ModalFooter>
            </Modal>
          </StoryBackground>
        </div>
      );
    }
  }

  return (
    <div className="App">
      <header>
        <div className="Header">
          <div className="preview">
            <Icon iconName="symphony"></Icon>
            <br></br>
            <span>symphony</span>
          </div>
          <Nav
            items={[
              {
                id: 0,
                label: "Home",
              },
              {
                id: 1,
                label: "Products",
              },
              {
                id: 2,
                label: "Contact",
              },
            ]}
          />
        </div>
      </header>
      <div className="container">
        <div className="button-modal">
          <h1 class="tk-mb-2 tk-text-color--primary">Button and modal</h1>

          <Button
            onClick={() => {
              setShow(!show);
            }}
          >
            Click me!
          </Button>
          {Modal()}
        </div>

        <div className="badge">
          <h1 class="tk-mb-2 tk-text-color--primary">Badge</h1>
          <div>
            <h3>Default badge</h3>
            <Badge variant="default" className="tk-mr-h">
              Badge
            </Badge>
            <Badge variant="default">
              <Icon iconName="bot" className="tk-mr-h"></Icon>
              Badge
            </Badge>
            <h3>Positive badge</h3>
            <Badge variant="positive" className="tk-mr-h">
              Badge
            </Badge>
            <Badge variant="positive">
              <Icon iconName="announce" className="tk-mr-h"></Icon>
              Badge
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
