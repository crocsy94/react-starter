Starter repository for a react-redux project styled with materialUI.
Includes custom font loading and CSS baseline.

### Local development:
start in local dev mode:
> yarn start

open http://localhost:3000

### Test docker image:
build project: 
> yarn build

use built source code and create docker image of it:
> docker build -t <image_name> . 

start docker image in detached mode:
> docker run -d -p 80:80 <image_name>

Open browser at http://localhost