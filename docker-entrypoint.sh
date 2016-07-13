#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Symlink /tmp/node_modules if necessary
if [ ! -h 'node_modules' ]; then
  echo "Symlink preinstalled node_modules from /tmp"
  ln -s /tmp/node_modules /app/node_modules
fi

# Add pre-commit git hook
echo "Add pre-commit git hook"
echo "#!/bin/sh\n\ndocker exec `hostname` `pwd`/node_modules/pre-commit/hook" > .git/hooks/pre-commit
chmod a+x .git/hooks/pre-commit

exec "$@"
