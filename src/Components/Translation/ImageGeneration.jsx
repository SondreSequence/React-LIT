import { useSelector, useDispatch } from "react-redux";
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

function randomizer(min, max) {
  let previousNumbers = [];
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  while (previousNumbers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  }
  previousNumbers.push(randomNumber);
  return randomNumber;
}

function generateImages(imageSource) {
  const images = imageSource.map((image) => (
    <img
      key={randomizer(1, 1000)}
      className="animate__animated animate__flip animate__delay-0s"
      src={image}
    ></img>
  ));
  return images;
}
