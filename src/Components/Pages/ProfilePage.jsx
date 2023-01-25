import LogoutButton from "../Profile/LogoutButton";
import ProfileHeader from "../Profile/ProfileHeader";
import TranslationHistory from "../Translation/TranslationHistory";
import withAuth from "../Login/withAuth";

function ProfilePage() {
  return (
    <div>
      <ProfileHeader />
      <LogoutButton />
      <TranslationHistory />
    </div>
  );
}

export default withAuth(ProfilePage);
