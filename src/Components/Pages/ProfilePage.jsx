import LogoutButton from "../Profile/LogoutButton";
import ProfileHeader from "../Profile/ProfileHeader";
import TranslationHistory from "../Translation/TranslationHistory";

function ProfilePage() {
  return (
    <div className="d-flex mx-auto flex-column justify-content-center text-center text-light w-50 ">
      <ProfileHeader />
      <TranslationHistory />
      <LogoutButton />
    </div>
  );
}

export default ProfilePage;
