cd frontend
npm install
npm run build
rm -rf /home/hr/ReactReduxHR/frontend/build/backend/attendance/upload/*
cp -rf ../backend/ ./build/.
cp ../config.json ./build/.
cp ../connection.php ./build/.
cp -rf ../../public_html_old/attendance/uploaded_files/ ./build/backend/attendance
mkdir ./build/backend/attendance/upload
sudo chown www-data:www-data ./build/backend/attendance/upload
