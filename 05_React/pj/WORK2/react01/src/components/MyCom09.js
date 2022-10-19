// 해당 컴포넌트에서만 사용하는 스타일 시트 정의

//useState Hook 사용
import { useState } from "react";

function MyCom(probs) {
  const myMv = { ...probs.item };

  const keys = ["rank", "movieNm"];

  const lis = keys.map((k) => (
    <li className="mvLi" key={k}>
      <span className={k}>{myMv[k]}</span>
    </li>
  ));

  //state 변수
  let [cnt, setCnt] = useState(0);

  const upCnt = () => {
    setCnt(++cnt);
    console.log(cnt);
  };

  return (
    <div className="mainDiv">
      <ul>{lis}</ul>
      <div>
        {/* <span
          onClick={() => {
            cnt++;
            console.log(cnt);
          }}
        >
          🧡+
        </span> */}
        <span onClick={upCnt}>🧡+</span>
        <span>{cnt}</span>
      </div>
    </div>
  );
}

export default MyCom;
