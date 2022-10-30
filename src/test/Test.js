const Test = () => {
  const fun1 = (e) => {
    console.log("fun1 e : ", e);
    fun2(e,"value")
  };


  const fun2 = (e,value) => {
    console.log("fun2 e : ", e);
    console.log("fun2 value : ", value);
  };

  

  return (
    <div>
      <button onClick={fun1}>btn1</button>
      {/* <button onClick={(e) => fun2(e,"value")}>btn2</button> */}
    </div>
  );
};
export default Test;
