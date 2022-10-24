import w from "../db/weather.json";

export default function WeatherDay(probs) {
  const d = probs.d;
  const witem = w.response.body.items.item[0];
  console.log(witem);

  const items = [];
  //   console.log(witem);
  const keys = [`rnst${d}am`, `rnst${d}pm`, `wf${d}am`, `wf${d}pm`];
  console.log(keys);
  console.log(witem["rnst3am"]);

  for (let k of keys) {
    items.push(witem[k]);
    console.log(k, items);
  }
  console.log(items);

  return (
    <>
      <h2>{probs.d}</h2>
      <ul>
        <li>
          {d}일후 오전 강수량{items[0]}%
        </li>
        <li>
          {d}일후 오후 강수량{items[1]}%
        </li>
        <li>
          {d}일후 오전 날씨예보{items[2]}
        </li>
        <li>
          {d}일후 오후 날씨예보{items[3]}
        </li>
      </ul>
    </>
  );
}
