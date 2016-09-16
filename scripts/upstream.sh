#!/usr/bin/env bash

ORIGINAL_REPO=iris-dni/iris-frontend.git

IS_ORIGINAL=$(git config --get remote.origin.url | grep $ORIGINAL_REPO)
HAS_CONFIGURED_UPSTREAM=$(git config --get remote.upstream.url | grep $ORIGINAL_REPO)

if [ "$IS_ORIGINAL" -o "$HAS_CONFIGURED_UPSTREAM" ]; then
    echo "Already set correct upstream."
else
  echo "Adding upstream to pull future updates from..."
  git remote add upstream git://github.com/$ORIGINAL_REPO
fi
