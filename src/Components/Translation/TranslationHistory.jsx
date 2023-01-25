import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Api/apiActions";

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

  return (
    <div>
      <h1>API Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default TranslationHistory;
