import React from 'react';
import { Box, Grid, Typography, useTheme, useMediaQuery, Paper } from '@mui/material';
import coachingImage from '../assets/images/football-banner1.jpg';

const CoachIntroSection: React.FC = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: '#effcf6',
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 10 },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Text Content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Football Coaching <br />
            Designed to Maximise <br />
            Potential.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#555',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              maxWidth: 600,
            }}
          >
            Football should deliver a learning experience of unequivocal quality. Players deserve it.
            Parents demand it. We deliver it. The Coaching Manual is designed to make learning football
            an exceptional experience for coaches, players and families. With thousands of brilliant,
            easy to follow sessions from the best in the business and software tools which take all the
            stress out of planning and delivery, The Coaching Manual is a world-class one-stop shop
            for football education.
          </Typography>
        </Grid>

        {/* Image / Video Mockup */}
        <Grid item xs={12} md={6} sx={{ textAlign: isSmDown ? 'center' : 'right' }}>
          <Paper
            elevation={6}
            sx={{
              display: 'inline-block',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#000',
              width: '100%',
              maxWidth: 480,
            }}
          >
            <Box
              sx={{
                height: 'auto',
                aspectRatio: '16/9',
              }}
            >
              <img
                src={coachingImage}
                alt="Coaching Session"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoachIntroSection;
