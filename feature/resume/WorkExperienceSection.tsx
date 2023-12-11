import CircleIcon from '@mui/icons-material/Circle';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NotionStyleHtmlContent from 'components/NotionStyleHtmlContent';
import { Dayjs } from 'dayjs';
import DateRangeText from 'feature/resume/DateRangeText';
import DateRangeTypography from 'feature/resume/DateRangeTypography';
import React from 'react';

type WorkExperienceSectionProps = {
  title: string;
  totalCareerDuration: string;
  companies: {
    title: React.ReactNode;
    description?: string;
    start: Dayjs;
    end: Dayjs;
    experiences: {
      title: React.ReactNode;
      description: React.ReactNode;
      list: React.ReactNode[];
    }[];
  }[];
};

const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({
  title,
  totalCareerDuration,
  companies,
}) => {
  return (
    <Box component="section">
      <NotionStyleHtmlContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1.5}
        >
          <Typography variant="mh2">{title}</Typography>
          <DateRangeTypography>{totalCareerDuration}</DateRangeTypography>
        </Stack>

        <Stack>
          {companies.map((company, index) => (
            <Box key={index} display="grid" gridTemplateColumns="250px 1fr">
              {/* left */}
              <Stack pr={2}>
                <Typography variant="mh3">{company.title}</Typography>
                {company.description ? (
                  <Typography variant="mp" sx={{ whiteSpace: 'pre-line' }}>
                    {company.description}
                  </Typography>
                ) : null}
                <DateRangeTypography>
                  <DateRangeText start={company.start} end={company.end} />
                </DateRangeTypography>
              </Stack>

              {/* right */}
              <Stack
                pl={2}
                pb={2}
                gap={2}
                sx={{
                  borderLeft: '1px solid #e0e0e0',
                }}
              >
                {company.experiences.map((experience, index) => (
                  <Stack key={index}>
                    <Typography position="relative" variant="mh3">
                      <CircleIcon
                        sx={{
                          position: 'absolute',
                          color: '#e0e0e0',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          left: -21.5,
                          width: 10,
                          height: 10,
                        }}
                      />
                      {experience.title}
                    </Typography>
                    <Typography variant="mp">
                      {experience.description}
                    </Typography>
                    <ul>
                      {experience.list.map((listItem, index) => (
                        <li key={index}>{listItem}</li>
                      ))}
                    </ul>
                  </Stack>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </NotionStyleHtmlContent>
    </Box>
  );
};

export default WorkExperienceSection;
