type IconProps = {
  content: string;
};

/**
 * icon 깨짐 방지.
 * font-weight를 400으로 해야 pdf 생성시 깨지지 않는다.
 */
const Icon: React.FC<IconProps> = ({ content }) => {
  return <span style={{ fontWeight: 400 }}>{content}</span>;
};

export default Icon;
