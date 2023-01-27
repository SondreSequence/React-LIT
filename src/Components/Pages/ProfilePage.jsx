import DeleteButton from "../Profile/DeleteTranslationHistory";
import LogoutButton from "../Profile/LogoutButton";
import TranslationHistory from "../Translation/TranslationHistory";
import withAuth from "../Login/withAuth";

function ProfilePage() {
  return (
    <div className="d-flex mx-auto flex-column justify-content-center text-center text-light w-50 ">
      <TranslationHistory />
      <LogoutButton />
      <DeleteButton />
    </div>
  );
}

export default withAuth(ProfilePage);
