import React from "react";

const dummyMaker = () => {
  function fetchGet(url, navigate) {
    fetch(url, {
      method: "GET",
      headers: "application/json",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
      });
  }

  function fetchPostJson() {
    

    const url = "http://127.0.0.1:4600/goal"
    // const url = "http://192.168.5.96:4600/goals"

    const object = {
        section_give : "section",
        goals_give : "hi"
    }
    // console.log("object : ",JSON.stringify(object))
    console.log("object : ",JSON.stringify(object))
    fetch(url, {
      method: "POST",
      body: JSON.stringify(object)
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
    //    alert(data.msg)
       console.log(data.msg)
      })
  }
  

  return <div>
    <button onClick={fetchPostJson}>post btn</button>

  </div>;
};

export default dummyMaker;
