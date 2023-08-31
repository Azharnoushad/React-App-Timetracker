import React from "react";

const profile = ({ setTime,time }) => {
  let interval = ["Daily", "Weekly", "Monthly"];

  const getTime = (times) => {
    setTime(times);
  };
  return (
    <div className="profile">
      <div className="profile-info">
        <img src="images/image-jeremy.png" alt="" />
        <div className="profile-title">
          <p>Report For</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>

      <div className="interval-list">
        {interval.map((item, i) => {
          return (
            <div
              className={` interval-item ${time === item.toLowerCase() ? "active" : ""}` }
              key={i}
              onClick={() => getTime(item.toLowerCase())}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default profile;
