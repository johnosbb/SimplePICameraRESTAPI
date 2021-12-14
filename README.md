# SimplePICameraRESTAPI
A very simple REST API for the Camera on the Raspberry PI

## Running the Apllication

npm start

## Testing with Postman

### Capture an Image

192.168.1.193:3010/captureJPG

JSON Body:

{ fileName = "capture.jpg", width = 1280, height = 1024 }


###  Retrieve the Image

192.168.1.193:3010/image

JSON Body:

{ fileName = "capture.jpg" }


## Running on Boot

### To run at start up use pm2
- sudo apt-get install pm2 # install the package
- pm2 start app.js # add it to the list of pm2 controlled processes
- pm2 startup # will cause to run on start up
- execute the link creation command provided by pm2 (for example - sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi)
- If you need to remove the linit script for pm2 with: pm2 unstartup systemd (in the case of systemd)
- For more information see [pm2 on Github](https://github.com/Unitech/pm2)
- 



