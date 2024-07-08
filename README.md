# revents-2024

mkdir node
cd node 
npm create vite@latest
cd events
code .
git config --global user.email "alain.delevingne@dxc.com"
git config --global user.name "ade585"
git remote -v
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ade585/revents-2024.git
git push -u origin main
npm install semantic-ui-react@3.0.0-beta.2 semantic-ui-css
npm install --save @paralleldrive/cuid2
npm install react-router-dom 
npm install @reduxjs/toolkit
npm install react-redux
npm install react-hook-form
npm install react-datepicker 


# on Chrome 
add react developper tools
add redux devtools

# run dev
npm run dev
