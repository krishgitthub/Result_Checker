import React, { useState } from "react";
import Marksheet from "./Marksheet";
import Results from "./Result-Api";
import "../Css/Result.css";
import Button from "@mui/material/Button";
import Search from "@mui/icons-material/Search";
const Result_Checker = () => {
  // storing  input field Id ------------------

  const [id, setId] = useState("");

  // changing input field Id ----------------

  const idChange = (e) => {
    setId(e.target.value);
  };

  // Get id from input field and store in new element ---------------------

  const [newId, setNewId] = useState("");

  // Get data and store from Result Api ------------------

  const [data, setData] = useState(Results);

  // Match Id with Result Api ------------------

  const [matchId, setMatchId] = useState(false);

  // Convert Results id in Unique Id Array from ------------------

  const uniqueIdList = [
    ...new Set(
      Results.map((curItem) => {
        return curItem.id;
      })
    ),
  ];

  // Action after click on Search ------------------

  const searchResult = () => {
    if (id !== "") {
      setNewId(() => {
        return id;
      });

      if (uniqueIdList.includes(id)) {
        setMatchId(true);

        const markSheet = Results.filter((e) => {
          return e.id === id;
        });

        setData(markSheet);
      } else {
        setMatchId(false);

        alert("Please Enter a valid Id");
      }

      setId("");
    } else {
      setMatchId(false);

      alert("Please Enter Id");
    }
  };

  return (
    <>
      <h1 className="titlesec">Result Declaration</h1>
      <div className="resultsec">
        <input
          type="number"
          placeholder="Enter your Id"
          className="inputsec"
          value={id}
          onChange={idChange}
        />
        <Button className="btnsec" onClick={searchResult}>
          <Search className="searchBtn"></Search>
        </Button>
      </div>

      <Marksheet data={data} matchId={matchId} />
    </>
  );
};

export default Result_Checker;
