import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

import HomeSelector from '../selectors/HomeSelector';

const styles = theme => ({
  appbar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
  }
});

class ApplicationBarContainer extends Component {
  render() {
    const { classes, title } = this.props;
    return (
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            {title}
          </Typography>
        </Toolbar>
        {this.props.loading && <LinearProgress />}
        {this.props.loading && 'Loading..'}
      </AppBar>
    );
  }
}

const mapStateToProps = () => ({
  title: 'Pristine',
  loading: HomeSelector.uiSelector.loading,
});

const ApplicationBarRedux = connect(mapStateToProps)(ApplicationBarContainer);

export default withStyles(styles)(ApplicationBarRedux);