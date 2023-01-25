import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../api/apiActions";

function TranslationHistory() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.api.data);
  const loading = useSelector((state) => state.api.loading);
  const error = useSelector((state) => state.api.error);

  useEffect(() => {
    dispatch(fetchData("https://glaze-thankful-wombat.glitch.me/translations"));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const localUserArray = JSON.parse(localStorage.getItem("translation-user"));
  return (
    <Card>
      <div className="card-header text-dark ">Translations</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {JSON.stringify(data[localUserArray.id - 1].translations, null, 2)}
        </li>
      </ul>
    </Card>
  );
}

export default TranslationHistory;
