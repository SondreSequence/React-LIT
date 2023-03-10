import { setImageData } from "../Reducers/translationReducer";
export { mapEnglishSignsToHandEmojis, generateImages };
const englishSignsToHandEmojis = {
  A: require("./Individual_Signs/a.png"),
  B: require("./Individual_Signs/b.png"),
  C: require("./Individual_Signs/c.png"),
  D: require("./Individual_Signs/d.png"),
  E: require("./Individual_Signs/e.png"),
  F: require("./Individual_Signs/f.png"),
  G: require("./Individual_Signs/g.png"),
  H: require("./Individual_Signs/h.png"),
  I: require("./Individual_Signs/i.png"),
  J: require("./Individual_Signs/j.png"),
  K: require("./Individual_Signs/k.png"),
  L: require("./Individual_Signs/l.png"),
  M: require("./Individual_Signs/m.png"),
  N: require("./Individual_Signs/n.png"),
  O: require("./Individual_Signs/o.png"),
  P: require("./Individual_Signs/p.png"),
  Q: require("./Individual_Signs/q.png"),
  R: require("./Individual_Signs/r.png"),
  S: require("./Individual_Signs/s.png"),
  T: require("./Individual_Signs/t.png"),
  U: require("./Individual_Signs/u.png"),
  V: require("./Individual_Signs/v.png"),
  W: require("./Individual_Signs/w.png"),
  X: require("./Individual_Signs/x.png"),
  Y: require("./Individual_Signs/y.png"),
  Z: require("./Individual_Signs/z.png"),
};

function mapEnglishSignsToHandEmojis(signs, dispatch) {
  const imageSource = [];
  for (const sign of signs) {
    if (englishSignsToHandEmojis[sign]) {
      imageSource.push(englishSignsToHandEmojis[sign]);
    }
  }
  dispatch(setImageData(imageSource));
}

function generateImages(imageSource, output) {
  const randomanimations = [
    "animate__rollIn",
    "animate__zoomInRight",
    "animate__flip",
  ];
  let randomIndex = Math.floor(Math.random() * randomanimations.length);
  let randomanimationclass =
    "animate__animated " + randomanimations[randomIndex] + " animate__delay-0s";
  let images = [];

  //Easter egg
  if (output.includes("rick") || output.includes("Rick")) {
    images = imageSource.map((image, index) => (
      <img
        alt="rick"
        key={index}
        style={{ width: "150px", height: "100px" }}
        className={randomanimationclass}
        src={
          "https://media1.giphy.com/media/7B25Ol4JQ3IMwQ7cxG/200w.gif?cid=82a1493bl9whn39jxp0f5kmtuff7bloxkruehil8dmldc45l&rid=200w.gif&ct=s"
        }
      ></img>
    ));
    return images;
  }
  images = imageSource.map((image, index) => (
    <img alt="hands" style={{ width: "5vw", height: "5vw" }} key={index} src={image}></img>
  ));
  return images;
}
