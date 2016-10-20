#!/usr/bin/env bash

ORIGINAL_REPO=iris-dni/iris-frontend.git
HAS_CONFIGURED_UPSTREAM=$(git config --get remote.upstream.url | grep $ORIGINAL_REPO)
IS_ORIGINAL=$(git config --get remote.origin.url | grep $ORIGINAL_REPO)

if [ "$IS_ORIGINAL" -o "$HAS_CONFIGURED_UPSTREAM" ]; then
    echo # blank line
else
  echo "Adding upstream to pull future updates from..."
  git remote add upstream git://github.com/$ORIGINAL_REPO
fi

if [ "$HAS_CONFIGURED_UPSTREAM" ]; then
  read -p "You should definitely stash any changes before doing this. Continue? [y/n] " -n 1 -r
  echo # blank line
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Fetching updates from upstream..."
    git fetch upstream
    git checkout master
    git rebase upstream/master
    git checkout develop
    git merge upstream/develop
  fi
else
  echo "Nothing to do here."
fi
