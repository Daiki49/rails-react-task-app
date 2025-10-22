FROM --platform=linux/amd64 ruby:3.2.2
RUN apt-get update -qq && apt-get install -y nodejs default-mysql-client

FROM --platform=linux/amd64 ruby:3.2.2
# Postgres 用の開発ヘッダ & psql クライアント
RUN apt-get update -qq && apt-get install -y --no-install-recommends \
      nodejs \
      libpq-dev \
      postgresql-client \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN gem install bundler
RUN bundle install

COPY . /app

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3002

# CMDを変更してマイグレーションを実行
CMD ["bash", "-c", "bundle exec rails db:migrate && rails server -b 0.0.0.0"]
