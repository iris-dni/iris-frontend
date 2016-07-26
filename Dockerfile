FROM node:argon

WORKDIR /tmp
ADD package.json /tmp/
RUN npm install

RUN mkdir /app
WORKDIR /app

ENTRYPOINT ["sh", "docker-entrypoint.sh"]
CMD ["bash"]
