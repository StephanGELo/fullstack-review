import React from 'react';
//import repoListEntry from './repoListEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;