# use an official node runtime as the base image
FROM node:17-alpine3.14

# set the (container) working directory
WORKDIR /app

# copy current (local) directory contents into the container
COPY package*.json ./

# copies new files , directories from <src>
# and adds them to the filesystem of the image
# at the path <dest>
ADD . .

# install dependencies
RUN npm install

# make port availabe to the world outside this container
EXPOSE 3000

# run when the container launches
CMD ["npm", "run", "dev"]