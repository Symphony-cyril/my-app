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
  Typography,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuDivider,
  Card,
} from "@symphony-ui/uitoolkit-components";
import "@symphony-ui/uitoolkit-styles/dist/css/uitoolkit.css";
import "./App.css";
import "./css/style.css";

function App() {
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

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
          <h1 className="tk-mb-2 tk-text-color--primary">Button and modal</h1>

          <Button
            onClick={() => {
              setVisible(true);
            }}
          >
            Click me!
          </Button>

          <Modal size="large" closeButton show={visible} onClose={handleClose}>
            <ModalTitle>Symphony</ModalTitle>
            <ModalBody>
              Nec piget dicere avide magis hanc insulam populum Romanum
              invasisse quam iuste. Ptolomaeo enim rege foederato nobis et socio
              ob aerarii nostri angustias iusso sine ulla culpa proscribi
              ideoque hausto veneno voluntaria morte deleto et tributaria facta
              est et velut hostiles eius exuviae classi inpositae in urbem
              advectae sunt per Catonem, nunc repetetur ordo gestorum.
            </ModalBody>
            <ModalFooter>
              <Button variant="primary-destructive">Send</Button>
            </ModalFooter>
          </Modal>
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
        <div className="dropdown-container">
          <div className="dropdown">
            <h3>Dropdown</h3>
            <Typography>This menu is always visible</Typography>
            <div className="tk-mb-1" />
            <DropdownMenu className="dropdownMenu">
              <DropdownMenuItem>New direct chat</DropdownMenuItem>
              <DropdownMenuItem>New room...</DropdownMenuItem>
              <DropdownMenuDivider />
              <DropdownMenuItem>
                <Icon iconName="minus-round" />
                Cut
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon iconName="copy" />
                Copy
                <i className="tk-dropdown-menu--selected" />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon iconName="forward" />
                Paste
              </DropdownMenuItem>
              <DropdownMenuDivider />
              <DropdownMenuItem>
                <Icon iconName="fullscreen-on" />
                Full screen
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon iconName="fullscreen-off" />
                Minimize
              </DropdownMenuItem>
            </DropdownMenu>
          </div>
          <div className="card">
            <Card>
              <div className="tk-m-1">
                <Typography variant="bold">Card title</Typography>
                <div className="tk-pb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <Button>Button</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
