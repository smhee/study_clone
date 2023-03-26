import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.danawa.com%2Fprod_img%2F500000%2F830%2F590%2Fimg%2F5590830_1.jpg%3Fshrink%3D500%3A500%26_v%3D20210111143615&tbnid=0GZ3Ua6sVllewM&vet=12ahUKEwjtnOn9qPn9AhW6mFYBHdDfB7gQMygBegUIARDZAg..i&imgrefurl=https%3A%2F%2Fprod.danawa.com%2Finfo%2F%3Fpcode%3D5590830&docid=DuuxKPT2SgwAOM&w=500&h=500&q=%EA%B9%80%EC%B9%98&ved=2ahUKEwjtnOn9qPn9AhW6mFYBHdDfB7gQMygBegUIARDZAg",
  },
  {
    name: "Samgyeopsal",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsrc.hidoc.co.kr%2Fimage%2Flib%2F2021%2F8%2F27%2F1630049987719_0.jpg&tbnid=XSHrWFg78v8dvM&vet=12ahUKEwirvqO8qvn9AhW1gVYBHU28BgEQMygAegUIARCLAw..i&imgrefurl=https%3A%2F%2Fwww.hidoc.co.kr%2Fhealthstory%2Fnews%2FC0000629775&docid=lsop8KgHaFp-ZM&w=530&h=338&q=%EC%82%BC%EA%B2%B9%EC%82%B4&ved=2ahUKEwirvqO8qvn9AhW1gVYBHU28BgEQMygAegUIARCLAw",
  },
  {
    name: "Bibimbap",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.bonif.co.kr%2Fcmdt%2F20220628_M7O_1656371902441_626Kb.jpg&tbnid=OylFpxRJ9smdDM&vet=12ahUKEwjXmMHKqvn9AhVNzjQHHSyXDZYQMygAegUIARCuAg..i&imgrefurl=https%3A%2F%2Fm.bonif.co.kr%2Fmenu%2Fdetail%3FbrdCd%3DBF102%26cmdtIdx%3D485&docid=JYWyE9U-Uw8QpM&w=750&h=750&q=%EB%B9%84%EB%B9%94%EB%B0%A5&ved=2ahUKEwjXmMHKqvn9AhVNzjQHHSyXDZYQMygAegUIARCuAg",
  },
  {
    name: "Doncasu",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F62%2FTonkatsu_by_ayustety_in_Tokyo.jpg%2F250px-Tonkatsu_by_ayustety_in_Tokyo.jpg&tbnid=mVSZ61vedvYslM&vet=12ahUKEwjylojXqvn9AhWIgFYBHSjIA5gQMygBegUIARDKAg..i&imgrefurl=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25EB%258F%2588%25EA%25B0%2580%25EC%258A%25A4&docid=wSDB0BPDdctn-M&w=250&h=187&q=%EB%8F%88%EA%B0%80%EC%8A%A4&ved=2ahUKEwjylojXqvn9AhWIgFYBHSjIA5gQMygBegUIARDKAg",
  },
  {
    name: "Kimbap",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2022%2F06%2F18%2Fa789980b2cb47c5c7242082759259ded1.jpg&tbnid=Rqyrnqx2vZD91M&vet=12ahUKEwi20ZHkqvn9AhWogFYBHcsHCL0QMygBegUIARCmAg..i&imgrefurl=https%3A%2F%2Fm.10000recipe.com%2Frecipe%2F6981671&docid=6B1cAHdoVymVXM&w=1440&h=1081&q=%EA%B9%80%EB%B0%A5&ved=2ahUKEwi20ZHkqvn9AhWogFYBHcsHCL0QMygBegUIARCmAg",
  },
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
