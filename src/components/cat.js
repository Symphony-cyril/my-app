import { Button } from "@symphony-ui/uitoolkit-components";
import React, { useEffect, useState } from "react";

function Cat() {
  const [showCat, setShowCat] = useState();

  function getCat() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("https://api.thecatapi.com/v1/images/search", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          setShowCat(data[0].url);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <div className="cat">
      <Button onClick={getCat}>Click REACT</Button>
      <br />
      <span>
        <img src={showCat} alt="" />
      </span>
    </div>
  );
}

export default Cat;
