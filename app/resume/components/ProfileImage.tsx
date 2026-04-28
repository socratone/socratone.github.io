/* eslint-disable @next/next/no-img-element */
const ProfileImage = () => {
  return (
    <div
      style={{
        float: 'right',
        marginLeft: '1rem',
        marginBottom: '0.5rem',
        width: 190,
        height: 190,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <img
        src="images/resume/profile.webp"
        alt="프로필 사진"
        width={190}
        height={190}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default ProfileImage;
