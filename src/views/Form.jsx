import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <h1 className="form-heading">Form </h1>
      <div className="form-container">
        <form className="form">
          <ul className="list">
            <div className="list-item-conatiner">
              <div className="list-item">
                <label className="list-heading" for="fname">
                  Supervising District:
                </label>
                <input type="text" id="fname" name="fname" />
              </div>

              <div className="list-item">
                <label for="lname">Release Type</label>
                <input type="text" id="lname" name="lname" />
              </div>
            </div>

            <div className="list-item-conatiner">
              <div className="list-item">
                <label for="fname">Race Ethicity</label>
                <input type="text" id="fname" name="fname" />
              </div>

              <div className="list-item">
                <label for="lname">Age Released</label>
                <input type="text" id="lname" name="lname" />
              </div>
            </div>

            <div className="list-item-conatiner">
              <div className="list-item">
                {" "}
                <label for="lname">Sex</label>
                <input type="text" id="lname" name="lname" />
              </div>

              <div className="list-item">
                <label for="lname">Crime Class</label>
                <input type="text" id="lname" name="lname" />
              </div>
            </div>

            <div className="list-item-conatiner">
              <div className="list-item">
                <label for="lname">Crime type</label>
                <input type="text" id="lname" name="lname" />
              </div>

              <div className="list-item">
                <label for="lname">Crime Subtype</label>
                <input type="text" id="lname" name="lname" />
              </div>
            </div>

            <div className="list-item-conatiner">
              <div className="list-item">
                <label for="lname">Recidivist</label>
                <input type="text" id="lname" name="lname" />
              </div>

              <div className="list-item">
                <label for="lname">Target Pop</label>
                <input type="text" id="lname" name="lname" />
              </div>
            </div>
          </ul>

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
