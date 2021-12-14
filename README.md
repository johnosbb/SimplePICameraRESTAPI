# SimplePICameraRESTAPI
A very simple REST API for the Camera on the Raspberry PI


## Testing with Postman

### Capture an Image

192.168.1.193:3010/captureJPG

JSON Body:

{ fileName = "capture.jpg", width = 1280, height = 1024 }


###  Retrieve the Image

192.168.1.193:3010/image

JSON Body:

{ fileName = "capture.jpg" }


