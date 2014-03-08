#!/bin/bash

cd ~/node/eurow/eurow_api
git pull origin develop > ~/node/eurow/log.txt
forever stop all
forever start ~/node/eurow/eurow_api/app.js 
