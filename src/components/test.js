import React, { useEffect, useState } from "react";
import { Icon } from "@symphony-ui/uitoolkit-components";
import Test from "@symphony-ui/uitoolkit-styles/src/icons/tk-icons.codepoints.json";
import "@symphony-ui/uitoolkit-styles/dist/css/uitoolkit.css";

//export const Icons: React.FC = () => <div>{icone()}</div>; // supposed render my list here

function Icons() {
  const [test, setTest] = useState({});

  /*const takeKey = Object.keys(Test);
  //console.log(takeKey); // get an array with data

  const icone = takeKey.map((value) => (
    <div className="">
      <Icon iconName={value}></Icon>
      <br></br>
      <span>{value}</span>
    </div>
  ));*/

  useEffect(() => {
    getFetch();
  }, []);

  function getFetch() {
    fetch(
      "https://raw.githubusercontent.com/SymphonyPlatformSolutions/symphony-bdk-ui-toolkit-styles/master/package.json"
    )
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          setTest(data);
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <div className="flex">
      <div>
        {test.name}
        <br />
        {test.version}
        <br />
        {test.description}
        <br />

        <br />
        {test.main}
      </div>
      {/*<div>
        {takeKey.map((value, index) => {
          return (
            <div className="">
              <Icon iconName={value}></Icon>
              <br></br>
              <span>{value}</span>
            </div>
          );
        })}
      </div>*/}
    </div>
  );
}

export default Icons;
