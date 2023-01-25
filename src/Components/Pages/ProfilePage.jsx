import LogoutButton from "../Profile/LogoutButton";
import ProfileHeader from "../Profile/ProfileHeader";
import TranslationHistory from "../Translation/TranslationHistory";

function ProfilePage() {
  return (
    <div>
      <ProfileHeader />
      <LogoutButton />
      <TranslationHistory />
    </div>
  );
}

export default ProfilePage;
