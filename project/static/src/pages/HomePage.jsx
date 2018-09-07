import React from 'react';
import Grid from '@material-ui/core/Grid';
import { AppbarContainer, BlogContainer } from '../containers';

export class HomePage extends React.PureComponent {
  render() {
    return (
      <Grid container spacing={24}>
        <AppbarContainer />
        <BlogContainer />
      </Grid>
    )
  }
}