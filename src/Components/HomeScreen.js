import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
import "./HomeScreen.css";

import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";

const HomeScreen = () => {
  const [statement1, setStatement1] = useState([
    "Today is a good day",
    "i remember my old friend's",
    "Never stop a man who is on the run",
 ]);
  const [name, setName] = useState("")
  
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(img4);

  const [page, setpage] = useState(0);

  const [myImage, setMyImg] = useState([img1, img2, img3]);

  const nextState = () => {
    setpage(page + 1);
  };

  const prevState = () => {
    if (page < 0) {
      setpage(statement1.length);
    } else {
      setpage(page - 1);
    }
  };

  const addStatement = () => {
    const file = {
      name,
    };
    setStatement1([...statement1,name]);
    setMyImg([...myImage,image]);
    setName("");
  };

  const imageUpload = (e) => {
    const file = e.target.files[0];
    const saveImage = URL.createObjectURL(file);
    console.log(saveImage);
    setImage(saveImage);
  };

  return (
    <div className="container">
      <div className="container_pix">
        <img className="container_HP" src={image} />
        <div className="container_Dell">
          <Input type="file" onChange={imageUpload} />
        </div>
      </div>

      <div className="input">
        <Input
          placeholder="Enter your Name"
          value={name}
          onChange={(event) => {
            setName (event.target.value);
          }}
        />

        <Button
          className="inputButton"
          type="primary"
          danger
          onClick={() => {
            console.log(name, email);
            addStatement();
          }}
        >
          Add
        </Button>
      </div>
      <div className="container_1">
        <div className="button">
          <BiLeftArrow onClick={prevState} />
        </div>
        <div>
          <div>{statement1[page % statement1.length]} </div>

          <img className="img" src={myImage[page % myImage.length]} />

        </div>
        <div className="button">
          <BiRightArrow onClick={nextState} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
