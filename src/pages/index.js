import React from 'react';
import { Typography, Box, Container } from '@material-ui/core';
import Samples from '../pages/Samples';
import 'fontsource-roboto';

const IndexPage = () =>
  <Container component="main" p={5}>
    <Box mt={8} py={3} textAlign="center">
      <Typography variant="h2" paragraph>
        S-Dimorph
      </Typography>

      <Samples />
    </Box>
  </Container>

export default IndexPage;
