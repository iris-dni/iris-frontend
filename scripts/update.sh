#!/usr/bin/env bash

ORIGINAL_REPO=iris-dni/iris-frontend.git
HAS_CONFIGURED_UPSTREAM=$(git config --get remote.upstream.url | grep $ORIGINAL_REPO)
IS_ORIGINAL=$(git config --get remote.origin.url | grep $ORIGINAL_REPO)
TIMESTAMP="$(date +%s)"

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
    echo "Checking out develop..."
    git checkout develop
    echo "Updating develop..."
    git pull origin develop
    echo "Fetching updates from upstream..."
    git fetch upstream
    echo "Creating update branch..."
    "$(git checkout -b iris-update/$TIMESTAMP)"
    echo "Merging with upstream..."
    git merge upstream/develop
    echo "Pushing to remote..."
    "$(git push -u origin iris-update/$TIMESTAMP)"
    echo "-----------------------------------------"
    echo "------------UPDATE FINISHED--------------"
    echo "Great, iris is now up to date on this branch!"
    echo "Now review your app and create a pull request to merge the update"
  fi
else
  echo "Nothing to do here."
fi
