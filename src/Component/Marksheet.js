import React from "react";

const Marksheet = ({ data, matchId }) => {
  return (
    <>
      {data.map((e) => {
        if (matchId === true) {
          // Calculating Total and Percentage ---------------------------------------

          const total = e.physics + e.chemistry + e.maths;
          const percentage = (total / 3).toFixed(2);

          // Highlighting Marks ----------------------------------------------------------

          const perbg = {
            backgroundColor: "rgba(0, 128, 128, 0.212)",
            fontWeight: "bold",
            padding: ".3em",
            borderRadius: "10px",
          };

          const totalbg = {
            fontWeight: "bold",
          };

          // Collecting All Subject Marks --------------------------------

          const physics = e.physics;
          const chemistry = e.chemistry;
          const maths = e.maths;

          // Physics Grade Function ------------------------------------------

          const gradePhysics = () => {
            if (physics >= 91 && physics <= 100) {
              return <span>A1</span>;
            } else if (physics >= 81 && physics <= 90) {
              return <span>A2</span>;
            } else if (physics >= 71 && physics <= 80) {
              return <span>B1</span>;
            } else if (physics >= 61 && physics <= 70) {
              return <span>B2</span>;
            } else if (physics >= 51 && physics <= 60) {
              return <span>C1</span>;
            } else if (physics >= 41 && physics <= 50) {
              return <span>C2</span>;
            } else if (physics >= 33 && physics <= 40) {
              return <span>D</span>;
            } else if (physics >= 21 && physics <= 32) {
              return <span>E1</span>;
            } else if (physics <= 20) {
              return <span>E2</span>;
            }
          };

          // Chemistry Grade Function ------------------------------------------

          const gradeChemistry = () => {
            if (chemistry >= 91 && chemistry <= 100) {
              return <span>A1</span>;
            } else if (chemistry >= 81 && chemistry <= 90) {
              return <span>A2</span>;
            } else if (chemistry >= 71 && chemistry <= 80) {
              return <span>B1</span>;
            } else if (chemistry >= 61 && chemistry <= 70) {
              return <span>B2</span>;
            } else if (chemistry >= 51 && chemistry <= 60) {
              return <span>C1</span>;
            } else if (chemistry >= 41 && chemistry <= 50) {
              return <span>C2</span>;
            } else if (chemistry >= 33 && chemistry <= 40) {
              return <span>D</span>;
            } else if (chemistry >= 21 && chemistry <= 32) {
              return <span>E1</span>;
            } else if (chemistry <= 20) {
              return <span>E2</span>;
            }
          };

          // Maths Grade Function ------------------------------------------

          const gradeMaths = () => {
            if (maths >= 91 && maths <= 100) {
              return <span>A1</span>;
            } else if (maths >= 81 && maths <= 90) {
              return <span>A2</span>;
            } else if (maths >= 71 && maths <= 80) {
              return <span>B1</span>;
            } else if (maths >= 61 && maths <= 70) {
              return <span>B2</span>;
            } else if (maths >= 51 && maths <= 60) {
              return <span>C1</span>;
            } else if (maths >= 41 && maths <= 50) {
              return <span>C2</span>;
            } else if (maths >= 33 && maths <= 40) {
              return <span>D</span>;
            } else if (maths >= 21 && maths <= 32) {
              return <span>E1</span>;
            } else if (maths <= 20) {
              return <span>E2</span>;
            }
          };

          // Percentage Grade Function ------------------------------------------

          const gradePercentage = () => {
            if (percentage >= 91 && percentage <= 100) {
              return <span>A1</span>;
            } else if (percentage >= 81 && percentage <= 90) {
              return <span>A2</span>;
            } else if (percentage >= 71 && percentage <= 80) {
              return <span>B1</span>;
            } else if (percentage >= 61 && percentage <= 70) {
              return <span>B2</span>;
            } else if (percentage >= 51 && percentage <= 60) {
              return <span>C1</span>;
            } else if (percentage >= 41 && percentage <= 50) {
              return <span>C2</span>;
            } else if (percentage >= 33 && percentage <= 40) {
              return <span>D</span>;
            } else if (percentage >= 21 && percentage <= 32) {
              return <span>E1</span>;
            } else if (percentage <= 20) {
              return <span>E2</span>;
            }
          };

          return (
            <>
              <div className="markSheetsec" key={e.id}>
                <div className="stuinfosec">
                  <span>Name : {e.name}</span>
                  <span>ID : {e.id}</span>
                  <span>Std : 12</span>
                </div>
                <table className="msTablesec">
                  <tr className="partionsec">
                    <td>Subject</td>
                    <td>Total Marks</td>
                    <td>Obtained Marks</td>
                    <td>Grade</td>
                  </tr>
                  <tr className="physicssec">
                    <td>Physics</td>
                    <td>100</td>
                    <td>{e.physics}</td>
                    <td>{gradePhysics()}</td>
                  </tr>
                  <tr className="chemistrysec">
                    <td>Chemistry</td>
                    <td>100</td>
                    <td>{e.chemistry}</td>
                    <td>{gradeChemistry()}</td>
                  </tr>
                  <tr className="mathssec">
                    <td>Maths</td>
                    <td>100</td>
                    <td>{e.maths}</td>
                    <td>{gradeMaths()}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>300</td>
                    <td>
                      <span style={totalbg}>{total}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Percentage</td>
                    <td></td>
                    <td>
                      <span style={perbg}>{percentage}</span>
                    </td>
                    <td>{gradePercentage()}</td>
                  </tr>
                </table>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default Marksheet;
