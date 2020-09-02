import React, { useState } from "react";
import "./Feedback.css";
const Feedback = () => {
  const [experience, setExperience] = useState("");
  const [effort, setEffort] = useState();
  const [recommend, setRecommend] = useState();
  const experienceArray = [
    {
      label: "Not at all satisfied",
      imgInactive: "assets/img/us1.png",
      imgActive: "assets/img/s1.png",
    },
    {
      label: "Slightly satisfied",
      imgInactive: "assets/img/us2.png",
      imgActive: "assets/img/s2.png",
    },
    ,
    {
      label: "Moderately satisfied",
      imgInactive: "assets/img/us3.png",
      imgActive: "assets/img/s3.png",
    },
    ,
    {
      label: "Quite satisfied",
      imgInactive: "assets/img/us4.png",
      imgActive: "assets/img/s4.png",
    },
    ,
    {
      label: "Extremly satisfied",
      imgInactive: "assets/img/us5.png",
      imgActive: "assets/img/s5.png",
    },
  ];
  const effortArray = [1, 2, 3, 4, 5];
  const recommendArray = [];
  for (let i = 1; i <= 10; i++) {
    recommendArray.push(i);
  }
  const handleCurrentExperience = (activeExp) => {
    setExperience(activeExp);
    console.log(experience);
  };
  const handleEffort = (activeEff) => {
    setEffort(activeEff);
    console.log(effort);
  };
  const handleRecommend = (activeRecom) => {
    setRecommend(activeRecom);
    console.log(recommend);
  };
  return (
    <div className="container feedbackDontainer mt-5">
      <h1 className="pageTitle pt-4">Feedback</h1>
      <hr />
      <div className="row">
        <div className="col-12">
          <p>How would you rate your overall Snaxa.com experience?</p>
          <div className="col row justify-content-between">
            {experienceArray.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="d-flex align-items-center flex-column">
                    <img
                      alt={item.label}
                      src={`${
                        experience === item.label
                          ? item.imgActive
                          : item.imgInactive
                      }`}
                    />
                    <label
                      onClick={() => handleCurrentExperience(item.label)}
                      name={item}
                      className={`satisfiedTabs ${
                        experience === item.label && "activeExperience"
                      }`}
                    >
                      {item.label}
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <p>
            How much effort did you personally have to put forth to get your
            service done?
          </p>
          <div className="d-flex justify-content-between">
            <label className="maroonFont">Very low effort</label>
            <label className="maroonFont">Very high effort</label>
          </div>
          {/* <div className="row justify-content-between">
            {effortArray.map((item, i) => {
              return (
                <div key={i} className="col">
                  <label
                    onClick={() => handleEffort(item)}
                    name={item}
                    className={`effortTab ${effort === item && "activeEffort"}`}
                  >
                    {item}
                  </label>
                </div>
              );
            })}
          </div> */}
          <table style={{ minWidth: "100%" }}>
            <tr>
              {effortArray.map((item, i) => {
                return (
                  <td
                    key={i}
                    style={{ border: "solid 1px #ccc", textAlign: "center" }}
                    onClick={() => handleEffort(item)}
                    className={`effortTab ${effort === item && "activeEffort"}`}
                  >
                    {item}
                  </td>
                );
              })}
            </tr>
          </table>
          <hr />
          <p>
            How likely are you to recommend Snaxa.com to friend, family or
            colleagues?
          </p>
          <div className="d-flex justify-content-between">
            <label className="maroonFont">Not all likely</label>
            <label className="maroonFont">Extremly likely</label>
          </div>
          {/* <div className="row justify-content-between">
            {recommendArray.map((item, i) => {
              return (
                <div key={i} className="col">
                  <label
                    onClick={() => handleRecommend(item)}
                    name={item}
                    className={`recommendTab ${
                      recommend === item && "activeRecommed"
                    }`}
                  >
                    {item}
                  </label>
                </div>
              );
            })}
          </div> */}
          <table style={{ minWidth: "100%" }}>
            <tr style={{ display: "flex", flexWrap: "wrap" }}>
              {recommendArray.map((item, i) => {
                return (
                  <td
                    key={i}
                    onClick={() => handleRecommend(item)}
                    className={`recommendTab ${
                      recommend === item && "activeRecommed"
                    }`}
                  >
                    {item}
                  </td>
                );
              })}
            </tr>
          </table>
          <hr />
          {/* <p>Please provide any other feedback on your Snaxa.com experience.</p> */}
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Please provide any other feedback on your Snaxa.com experience.
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              style={{ resize: "none" }}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
