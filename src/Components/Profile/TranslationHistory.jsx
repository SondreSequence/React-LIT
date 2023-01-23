import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTranslationAsync } from "../Reducers/translationReducer";

const TranslationHistory = () => {
  const dispatch = useDispatch();
  const translations = useSelector((state) => state.translations);

  useEffect(() => {
    dispatch(getTranslationAsync());
  }, [dispatch]);

  return <div>{}</div>;
};

export default TranslationHistory;
