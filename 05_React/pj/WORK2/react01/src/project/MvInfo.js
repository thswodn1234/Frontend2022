import mv from "../jsonData/mvinfo.json";
import { useEffect, useState } from "react";
import "./Mv.css";
import MvTimer from "./MvTimer";

function MvInfo() {
  //json 데이터 가져오기
  const mvinfo = mv.movieInfoResult.movieInfo;
  console.log(mvinfo);
  // 화면에 출력할 정보를 오브젝트 생성
  let myinfo = {};
  const key1 = ["movieNm", "movieCd", "openDt", "prdtStatNm", "showTm"];
  const key2 = ["audits", "nations", "directors", "genres", "companys"];

  const keys = {
    movieNm: "영화명",
    movieCd: "영화코드",
    openDt: "개봉일자",
    prdtStatNm: "제작상태",
    showTm: "상영시간",
    audits: "관람등급",
    nations: " 제작국가",
    directors: "감독",
    genres: "장르",
    companys: "배급사",
  };

  //key1에 해당하는 값추출
  for (let k of key1) {
    myinfo[keys[k]] = mvinfo[k];
  }
  //key2에 해당하는 값추출 : 배열에서 추출
  for (let k of key2) {
    switch (k) {
      case "audits":
        myinfo[keys[k]] = mvinfo[k].map((item) => item.watchGradeNm);
        break;
      case "nations":
        myinfo[keys[k]] = mvinfo[k].map((item) => item.nationNm);
        break;
      case "directors":
        myinfo[keys[k]] = mvinfo[k].map((item) => item.peopleNm);
        break;
      case "genres":
        myinfo[keys[k]] = mvinfo[k].map((item) => item.genreNm);
        break;

      default:
        myinfo[keys[k]] = mvinfo[k].filter(
          (item) => item.companyPartNm === "배급사"
        );
        myinfo[keys[k]] = myinfo[keys[k]].map((item) => item.companyNm);
        break;
    }
  }
  console.log(myinfo);
  let lis = [];

  for (let [k, v] of Object.entries(myinfo)) {
    lis.push(
      <li className="li1" key={myinfo.movieCd + k}>
        <span className="k">{k}:</span>  <span className="v">{v}</span>
      </li>
    );
  }

  //count 제어

  //state변수
  let [cntUpSt, setCntUpSt] = useState(0);
  let [cntDownSt, setCntDownSt] = useState(0);
  let [flag, setFlag] = useState(true);

  const handleUp = () => {
    setCntUpSt(++cntUpSt);
  };
  const handleDown = () => {
    setCntDownSt(--cntDownSt);
  };
  const handleTimer = () => {
    setFlag(!flag);
  };

  // //useEffect Hook :랜더링시 매번 발생
  // useEffect(() => {
  //   console.log("useEffect 랜더링 발생 계속 수행");
  // });

  // //useEffect Hook :컴포넌트 생성시  한번 발생
  // useEffect(() => {
  //   console.log("useEffect 컴포넌트 생성시 한번 발생");
  // }, []);

  // //useEffect Hook :컴포넌트 생성시  한번 발생
  // useEffect(() => {
  //   console.log("useEffect 컴포넌트 생성시 한번 발생");
  // }, []);

  return (
    <>
      <div className="mvList1">
        <h1>영화상세</h1>
        <ul>{lis}</ul>
      </div>

      <div className="mvList2">
        <div onClick={handleUp}>👍</div>
        <div>{cntUpSt}</div>
        <div onClick={handleDown}>👎</div>
        <div>{cntDownSt}</div>
        <div onClick={handleTimer}>🕒</div>
      </div>

      <div className="mvList3"> {flag && <MvTimer />}</div>
    </>
  );
}

export default MvInfo;
