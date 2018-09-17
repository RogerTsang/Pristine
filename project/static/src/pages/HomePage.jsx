import React from 'react';
import { connect } from 'react-redux';
import PageBase from './PageBase';
import { BlogContainer } from '../containers';
import { view } from '../actions/ViewActions';

class Home extends PageBase {
  renderIf() {
    const renderOnView = [view.BLOG_VIEW];
    return renderOnView.includes(this.props.view);
  }

  renderComponent() {
    return <BlogContainer />;
  }
}

export const HomePage = connect(
  state => ({
    view: state.view.currentView
  })
)(Home);