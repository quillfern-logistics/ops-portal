#!/bin/bash
# copies the portal to the ops server and restarts it (settings in .env)
set -e
source .env
sshpass -p "$DEPLOY_PASSWORD" rsync -az --exclude node_modules ./ "$DEPLOY_USER@$DEPLOY_HOST:/var/www/ops-portal/"
sshpass -p "$DEPLOY_PASSWORD" ssh "$DEPLOY_USER@$DEPLOY_HOST" "cd /var/www/ops-portal && npm install --omit=dev && pm2 restart ops-portal"
