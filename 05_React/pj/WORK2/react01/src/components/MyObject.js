import mv from "../jsonData/mvinfo.json";
export default function MyObject() {
  // object 순회 : 키값 가져오기
  //   for (let k in mv) {
  //     console.log("키 :", k);
  //     console.log("키 값", mv[k]);

  //     //값이 오브젝트임으로 반복 순회
  //     for (let chk in mv[k]) {
  //       console.log("자식키 :", chk);
  //       console.log("자식값", mv[k][chk]);
  //     }
  //   }

  const myInfo = mv.movieInfoResult.movieInfo;
  //   console.log(myInfo);

  //   //object 순회
  //   for (let k in myinfo) {
  //     console.log("키 :", k);
  //   }

  //Object.entries(오브젝트명) : 키와 값의 배열의 배열로 반환
  //   console.log(Object.entries(myinfo));

  //배열 순회
  //   for (let item of Object.entries(myinfo))  : item은 배열

  //   for (let [k, v] of Object.entries(myInfo)) {
  //     console.log(k, v);
  //   }

  //filter
  //   const com = myInfo.companys;
  //   console.log(com);

  //   //map() : 배열의 항목을 가지고 와서 새로운 배열 생성
  //   const mcom = com.map(
  //     (item) => item.companyNm + "(" + item.companyPartNm + ")"
  //   );

  //   filter(() => {}) : 배열의 항목을 가지고 와서 조건에 맞는 항목으로 새로운 배열 생성
  //   const fcom = com.filter((item) => item.companyPartNm === "배급사").map((item) => item.companyNm);
  //   console.log(fcom);

  const act = myInfo.actors;
  const lis = act.map((item) => (
    <li key={item.cast.replace(" ", "") + item.peopleNm}>
      {item.peopleNm} : {item.cast}
    </li>
  ));
  console.log(lis);

  return (
    <>
      <h1>오브젝트 연습</h1>
      <ul>{lis}</ul>
    </>
  );
}
