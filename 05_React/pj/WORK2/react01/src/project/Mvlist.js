import MyCom from "../components/MyCom";
import mvboxoffice from "../jsonData/mvboxoffice.json";
import { useEffect, useState, useRef } from "react";
export default function MvList() {
  //object
  let mv = mvboxoffice.boxOfficeResult.dailyBoxOfficeList;
  console.log(mv);

  const mvs = mv.map((m) => <MyCom key={m.movieCd} item={m} />);

  let [txt1, setTxt1] = useState([]);
  let txtRef = useRef();
  //form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(txtRef.current.value);
    setTxt1([
      <li ke={txtRef.current.value}>{txtRef.current.value}</li>,
      ...txt1,
    ]);
  };

  const k = txt1;
  const mvF = mv.filter((m) => m.movieNm.includes(k)).map((m) => m);

  return (
    <>
      <h1>박스오피스</h1>
      <div>
        <form className="mvForm" onSubmit={handleSubmit}>
          <input type="text" ref={txtRef} placeholder="댓글을 입력하세요." />
          <button type="submit">검색</button>
          <button type="reset">리셋</button>
        </form>
      </div>
      <div className="mvFormList">
        <ul>
          <li>{mvF.movieNm}</li>
        </ul>
      </div>
      <div>{mvs}</div>
    </>
  );
}
