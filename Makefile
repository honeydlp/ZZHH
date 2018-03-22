NPM_REGISTRY = "--registry=http://registry.npm.taobao.org"

install:
	@yarn $(NPM_REGISTRY)

build: install
	@yarn run build

start: install build
	@NODE_ENV=production ./node_modules/.bin/pm2 start ecosystem.config.js

restart: install build
	@NODE_ENV=production ./node_modules/.bin/pm2 reload ecosystem.config.js

reload:
	@NODE_ENV=production ./node_modules/.bin/pm2 reload ecosystem.config.js

.PHONY: install build start restart reload
