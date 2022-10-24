import weather2 from "../db/weather2.json";
import item2 from "../db/item.json";
export default function WeatherMain2() {
  const w2 = weather2.response.body.items.item;
  //   console.log(w2);

  const pty = {
    0: "없음",
    1: "비",
    2: "비/눈",
    3: "눈",
    4: "소나기",
    5: "빗방울",
    6: "빗방울눈날림",
    7: "눈날림",
  };

  const sky = { 1: "맑음", 3: "구름많음", 4: "흐림" };
  // 새로운 배열 생성: for
  //   let lis = [];
  //   for (let m of w2) {
  //     lis.push(m);
  //   }
  //   console.log(lis);
  //   console.log(Object.entries(w2));
  //새로운 배열 생성 : map
  //   let lis = w2.map((m) => <li key={m.category}>{m.category}</li>);
  //   console.log("lis => ", lis);

  //   console.log(Object.entries(w2));
  //   console.log(m[1])

  const lis = Object.entries(w2).map((m) =>
    // <li> {item2[m[1].category][0]} {m[1].obsrValue} {item2[m[1].category][1]}</li>
    m[1].category === "PTY" ? (
      <li key={m[1].category}>
        {item2[m[1].category][0]}
        {pty[m[1].obsrValue]}
      </li>
    ) : m[1].category === "SKY" ? (
      <li key={m[1].category}>
        {item2[m[1].category][0]}
        {sky[m[1].obsrValue]}
      </li>
    ) : (
      <li key={m[1].category}>
        {item2[m[1].category][0]}
        {m[1].obsrValue}
        {item2[m[1].category][1]}
      </li>
    )
  );

  return (
    <>
      <h1>날씨예보 - 단기정보</h1>
      <form>
        <button className="myhome2">홈으로</button>
      </form>
      <ul>{lis}</ul>
    </>
  );
}

// const keys = [`category`, `obsrValue`];
//   let lis = [];
//   for (let w of w2) {
//     switch (w) {
//       case "POP":
//         lis.push(<li key={w.category}>"강수확률" : {w.obsrValue}</li>);
//         break;
//       case "PTY":
//         lis.push(<li key={w.category}>"강수형태" : {w.obsrValue}</li>);
//         break;
//       case "PCP":
//         lis.push(<li key={w.category}>"1시간 강수량" : {w.obsrValue}</li>);
//         break;
//       case "REH":
//         lis.push(<li key={w.category}>"습도" : {w.obsrValue}</li>);
//         break;
//       case "RN1":
//         lis.push(<li key={w.category}>"1시간 강수량" : {w.obsrValue}</li>);
//         break;
//       case "SNO":
//         lis.push(<li key={w.category}>"1시간 신적설" : {w.obsrValue}</li>);
//         break;
//       case "SKY":
//         lis.push(<li key={w.category}>"하늘상태" : {w.obsrValue}</li>);
//         break;
//       case "PCP":
//         lis.push(<li key={w.category}>"1시간 강수량" : {w.obsrValue}</li>);
//         break;
//     }

//     if (w.category === "PTY") {
//     } else if (w.category === "SKY") {
//     } else {
//       lis.push(
//         <li key={w.category}>
//           {w.category} : {w.obsrValue}
//         </li>
//       );
//     }

//     for (let k in w2) {
//   //     console.log(w2[k]);
//   //   }
//   for (let i of keys) {
//     console.log(i, w2[i]);
//     // items.push(w2[i]);
//   }

//   for (let j in items) {
//     console.log(items[j]);
//   }

//   console.log(k);
//   console.log(w2[k]);
