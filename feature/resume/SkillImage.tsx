type SkillImageProps = { skills: string[] };

/**
 * https://skillicons.dev
 */
const SkillImage: React.FC<SkillImageProps> = ({ skills }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={skills.join(', ')}
      src={`https://skillicons.dev/icons?i=${skills.join(',')}`}
      style={{ height: 24 }}
    />
  );
};

export default SkillImage;
