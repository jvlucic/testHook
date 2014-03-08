#!/bin/bash

cd ~/node/eurow/eurow_api
git pull origin develop > ~/node/eurow/log.txt
forever stop 1
forever start ~/node/eurow/eurow_api/app.js
