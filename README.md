# Event application

https://revents-2024-67f54.web.app/events


# Features

Event Creation

Live Streaming

Event subscription 

User managment



# revents-2024 installation

mkdir node

cd node 

npm create vite@latest

cd events

code .

# Git installation

git config --global user.email "mail"

git config --global user.name "ade585"

git remote -v

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/ade585/revents-2024.git

git push -u origin main


# npm module used

npm install semantic-ui-react@3.0.0-beta.2 semantic-ui-css

npm install --save @paralleldrive/cuid2

npm install react-router-dom 

npm install @reduxjs/toolkit

npm install react-redux

npm install react-hook-form

npm install react-datepicker 

npm install firebase

npm install react-toastify

npm install react-filepond filepond filepond-plugin-image-crop filepond-plugin-image-preview filepond-plugin-image-transform

npm install react-calendar

npm install date-fns

npm i react-infinite-scroller

npm i @types/react-infinite-scroller -D

# publish on web
npm install -g firebase-tools

Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force

firebase login 

firebase.ps1 init hosting 

? What do you want to use as your public directory? dist

? Configure as a single-page app (rewrite all urls to /index.html)? Yes

? Set up automatic builds and deploys with GitHub? No

npm run build

firebase deploy

change reCAPTCHA and console.cloud.google.com/ site name -if changed

# on vsCode install 

eslint

es7+ react/redux/React-Native snippets 

html css support 

material Icon Theme 

# on Chrome 

add react developper tools

add redux devtools

# run dev

npm run dev

# on firebase

create a Database called revents-2024

create a Realtime database

create mail/passwd user bruce@test.com pa$$sw0rd pa$$sw0r2

create authentification method email/Password

create authentification method google

create authentification method github

create storage # to store images and other files

configure security rules with firebase.sec file content

configure APP check by reenforcing database 

declare API revents-2024 debug token given by runiing apps

# On run phase and on firebase

create 2 index in firebase with the link given in chrome log 

# On google link https://console.cloud.google.com/

create api application key for website and report it on .env.production file

# deeper code error 

npm run lint


# deploy through github

firebase init hosting:github

GitHub workflow? (format: user/repository) ade585/revents-2024

-->  before every deploy? Yes

--> un before every deploy? enter npm ci && npm run build

-->  channel when a PR is merged? Yes

--> with your site's live channel? main

on github allow Workflow permissions read/write 

# deploy a new branch and then pubhish to main branches

git checkout -b abranchname 

publish on github your update 

go on github

--> compare & pull request 

--> merge 

--> check the new preview application

--> Merge pull to main branch 

--> production version deployed
