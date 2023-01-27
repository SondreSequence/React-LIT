import Translate from "../Translation/Translate";
import withAuth from "../Login/withAuth";

function TranslatePage() {
  return (
    <div>
      <Translate />
    </div>
  );
}

export default withAuth(TranslatePage);
