set -e
. ./.env.production
# yarn build
singularity run ~/projects/Containers/reContainer.sif yarn build

tar -czf build.tar.gz build/
scp build.tar.gz macmorris:/fastscratch/projects/

ssh macmorris /bin/bash << EOF
set -e

echo "Extracting tarball..."
cd /fastscratch/projects/
rm -rf build
tar -xzf build.tar.gz
echo "Extracting tarball done"

echo "Replacing frontend folder..."
rm -rf macmorris_frontend && mv build macmorris_frontend
echo "Replaced extracted frontend folder successfully"

echo "Restarting docker..."
cd /fastscratch/projects/macmorris_backend/
docker compose down
docker compose up -d
echo "Restarting docker done"

echo "Removing tarball..."
rm /fastscratch/projects/build.tar.gz
echo "Removing tarball done"
echo "Deploy successful"
EOF
