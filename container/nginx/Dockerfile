FROM nginx:latest

ENTRYPOINT ["/bin/start.sh"]
EXPOSE 80
ENV CONSUL_URL __YOUR_MACHINE_IP__:8500

ADD start.sh /bin/start.sh
RUN rm -v /etc/nginx/conf.d/*.conf

RUN apt-get update && apt-get install -y curl vim unzip

ADD https://releases.hashicorp.com/consul-template/0.15.0/consul-template_0.15.0_linux_amd64.zip /tmp

RUN unzip -d /usr/local/bin /tmp/consul-template_0.15.0_linux_amd64.zip

