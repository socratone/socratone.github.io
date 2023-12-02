/* eslint-disable @next/next/no-img-element */

import styled from '@emotion/styled';
import queryString from 'query-string';

type SkillTagProps = {
  /** https://github.com/simple-icons/simple-icons/blob/master/slugs.md */
  logo: string;
  label: string;
  logoColor?: string;
};

const StyledImage = styled.img`
  margin: 0 !important;
`;

/**
 * https://img.shields.io
 */
const SkillTag: React.FC<SkillTagProps> = ({ label, logo, logoColor }) => {
  const query = queryString.stringify({ logo, logoColor });

  return (
    <StyledImage
      src={`https://img.shields.io/badge/${label}-white?${query}`}
      alt={label}
    />
  );
};

export default SkillTag;
