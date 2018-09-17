import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircleOutlined, AccountCircleSharp } from '@material-ui/icons';
import { view, changeView } from '../../actions/ViewActions';
import { changeRoute } from '../../actions/RouteActions';

class AppBarItemAccount extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeViewToAccount();
    this.props.changeRoute('/account');
  }

  renderIcon() {
    if (this.props.view === view.ACCOUNT_VIEW) {
      return <AccountCircleSharp />;
    }
    return <AccountCircleOutlined />;
  }

  render() {
    return (
      <IconButton
        color='inherit'
        aria-label={this.props.label}
        onClick={this.handleClick}
      >
        {this.renderIcon()}
      </IconButton>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    changeViewToAccount: () => dispatch(changeView(view.ACCOUNT_VIEW)),
    changeRoute: routePath => dispatch(changeRoute(routePath)),
  })
)(AppBarItemAccount)