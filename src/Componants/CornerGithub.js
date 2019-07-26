import React, { Component } from 'react';
import GithubCorner from 'react-github-corner';

export default class CornerGithub extends Component {
  render() {
    return (
      <div>
        <GithubCorner
         target='_blank'
        href="https://github.com/Samk13"
        bannerColor="#61dafb"
        />
      </div>
    );
  }
}