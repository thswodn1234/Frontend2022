import MyCom from "../components/MyCom";
import mvboxoffice from "../jsonData/mvboxoffice.json";
// import MvItem from "./MvItem";
import { useState, useRef, useEffect } from "react";
import MvItem from "./MvItem";
export default function MvList() {
  //object
  let mv = mvboxoffice.boxOfficeResult.dailyBoxOfficeList;
  console.log(mv);

  // const mvs = mv.map((m) => <MyCom key={m.movieCd} item={m} />);

  let [txt1, setTxt1] = useState([]);

  //form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(txtRef.current.value);
    setTxt1([
      <li ke={txtRef.current.value}>{txtRef.current.value}</li>,
      ...txt1,
    ]);
    let temp = mv.filter((m) => m.movieNm.includes(txtRef.current.value));
    setMvs(temp.map((m) => <MvItem key={m.movieCd} item={m} />));
  };

  //state 변수
  let [mvs, setMvs] = useState([]);

  //ref 변수 선언
  const txtRef = useRef();

  //useEffect
  useEffect(() => {
    txtRef.current.focus();

    // let temp = [];
    // for (let i = 0; i < mv.length; i++) {
    //   temp.push(mv[i]);
    // }
  }, []);

  return (
    <>
      <h1>박스오피스</h1>
      <div>
        <form className="mvForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="txt1"
            ref={txtRef}
            placeholder="영화명을 입력하세요."
          />
          <button type="submit">검색</button>
          <button type="reset">리셋</button>
        </form>
      </div>
      <div className="mvFormList">
        <ul>{/* <li>{txt1}</li> */}</ul>
      </div>
      <div>{mvs}</div>
    </>
  );
}
