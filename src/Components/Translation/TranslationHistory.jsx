import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../api/apiActions";
function TranslationHistory() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.api.data);
  const loading = useSelector((state) => state.api.loading);
  const error = useSelector((state) => state.api.error);
  const localUserArray = JSON.parse(localStorage.getItem("translation-user"));

  useEffect(() => {
    dispatch(fetchData("https://glaze-thankful-wombat.glitch.me/translations"));
  }, [dispatch]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  function returnTranslation() {
    return (
      data &&
      data[localUserArray.id - 1] &&
      data[localUserArray.id - 1].translations &&
      data[localUserArray.id - 1].translations.map((translation, index) => {
        return (
          <li key={index} className="list-group-item text-left">
            {translation}
          </li>
        );
      })
    );
  }
  return (
    <Card className="mt-5">
      <div className="card-header text-dark  ">
        <h5>Translation History</h5>
      </div>
      <ul className="list-group list-group-flush ">
        {data && !loading && !error ? returnTranslation() : null}
      </ul>
    </Card>
  );
}
export default TranslationHistory;
