import w from "../db/weather.json";

export default function WeatherDay(probs) {
  const d = probs.d;
  //   const witem = w.response.body.items.item;

  const items = [];
  //   console.log(witem);
  const keys = [`rnst${d}am`, `rnst${d}pm`, `wf${d}am`, `wf${d}pm`];

  for (let k of keys) {
    items.push(witem[k]);
  }
  console.log(items);

  return (
    <>
      <h2>{probs.d}</h2>
      <ul>
        <li>{d}일후 오전 강수량</li>
        <li>{d}일후 오후 강수량</li>
        <li>{d}일후 오전 날씨예보</li>
        <li>{d}일후 오후 날씨예보</li>
      </ul>
    </>
  );
}
