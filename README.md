# codenames-express
My version of joshporter1's codenames app, but using Node.js + Express on the backend!

Link to original project: https://github.com/joshporter1/codenames

This is my attempt at learning WebSockets while brushing up on my Express and Vue skills.

The **server/** directory contains code for hosting the Express + WebSockets server. This mostly acts as an API server, but could be used to serve the static frontend files.

The **client/** directory contains code for the Vue.js frontend. This also contains the client-side Socket.io interface that will talk to the server.


Currently there isn't really a production/deployable mode for this code. In the future I may package everything up in a docker container so that it is easy to deploy. 

