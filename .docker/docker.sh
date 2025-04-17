#!/bin/sh

set -e

set -e
if [ ! -f package.json ]; then
    echo "No project detected, creating project..." && \
    npm create vite@latest app -- --template react-ts && \
    rm -rf public
    cd app && \
    mv * ../ && \
    mv .[^.]* ../ && \
    cd .. && \
    rm -rf app
    sed -i 's/"dev": "vite"/"dev": "vite --host"/' package.json
    echo "...Ok"
else
    echo "The package.json has been found, skipping project creation."; \
fi

echo " "
if [ ! -d "node_modules" ] || [ -z "$(ls -A node_modules)" ]; then
    echo "No dependencies have been detected, installing dependencies..." && \
	npm install --verbose
	echo "...Ok"
else
    echo "The node_modules folder has been found, skipping dependencies installation."; \
fi

chown -R node:node /app

echo " "
echo "=================================================================="
echo "                    APPLICATION READY TO USE "
echo "=================================================================="

#/bin/sleep infinity
npm run dev
