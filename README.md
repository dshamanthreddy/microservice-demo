#### Micro-service Demo

This simple micro-service demonstation utilises the following technologies:

 * [Consul](https://consul.io) 
 * [Registrator](http://gliderlabs.com/registrator/latest/)
 * [Nginx](https://www.nginx.com)
 * [Docker](https://www.docker.com)
 * [Docker-Compose](https://github.com/docker/compose)

This demo has 3 microservice api endpoints which you can connect to via making requests to the nginx container.

 * http://127.0.0.1/hello/
   * This endpoint has 2 containers associated with it providing loadbalancing and automatic failover if one stopped.
 * http://127.0.0.1/secure/
   * This endpoint is secure, requiring a valid HTTP header `API-KEY` before the request is handled by the upstream micro-service. `curl --header "API-KEY:demo123" http://127.0.0.1/secure/`

#### Design and Topology

In the diagram below you can see how the docker containers interact with one another.

![Design and Topology](/diagram.png)

#### Installation & Configuration

The following steps assume that you already have docker and docker-compose installed on your system.

 1. Edit `/container/nginx/Dockerfile` replacing `__YOUR_MACHINE_IP__` with your machines IP address.
 2. Run `docker-compose build` to build all the container images.
 3. Run the microservice stack with `docker-compose up`



