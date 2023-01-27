import DeleteButton from "../Profile/DeleteTranslationHistory";
import LogoutButton from "../Profile/LogoutButton";
import TranslationHistory from "../Translation/TranslationHistory";
import withAuth from "../Login/withAuth";

function ProfilePage() {
  return (
    <div className="d-flex mx-auto flex-column justify-content-center  card-container ">
      <TranslationHistory />
      <div className="mx-auto d-flex">
        <LogoutButton />
        <DeleteButton />
      </div>
    </div>
  );
}

export default withAuth(ProfilePage);
