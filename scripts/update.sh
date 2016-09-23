#!/usr/bin/env bash

ORIGINAL_REPO=iris-dni/iris-frontend.git
HAS_CONFIGURED_UPSTREAM=$(git config --get remote.upstream.url | grep $ORIGINAL_REPO)

if [ "$HAS_CONFIGURED_UPSTREAM" ]; then
  read -p "You should definitely stash any changes before doing this. Continue? [y/n] " -n 1 -r
  echo # blank line
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Fetching updates from upstream..."
    git fetch upstream
    git checkout master
    git rebase upstream/master
  fi
else
  echo "Nothing to do here. Probably the original repo."
fi
