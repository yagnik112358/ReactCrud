echo 'builing react app...'
set -x
npm run build
set +x

echo 'starting react app...'
set -x
npm start &
sleep 1
echo $! > .pidfile
set +x

echo 'Visit http://localhost:3000 to see your Node.js/React application in action.'
