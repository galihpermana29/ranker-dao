FROM nginx AS build

# Install essential tools
RUN apt-get -qq update && \
  apt-get -qq install sudo && \
  apt-get -qq install apt-transport-https && \
  apt-get -qq install build-essential && \
  apt-get -qq install git

# install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get -qq install -y yarn

ARG GITHUB_TOKEN
COPY ./ /tmp/guild-mint
COPY ./yarn.lock /tmp/guild-mint

WORKDIR /tmp/guild-mint
RUN npm install
RUN yarn build

FROM nginx

COPY --from=build /tmp/guild-mint/build /usr/www
COPY --from=build /tmp/guild-mint/build/index.html /usr/www
COPY operations/guild-mint/nginx.conf /etc/nginx/nginx.conf
