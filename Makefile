install:
		npm ci
		brain-games

publish:
	npm publish --dry-run

lint:
	npx eslint .


lint-fix:
	npx eslint . --fix

brain-even: 
	node ./bin/brain-even.js

brain-calc:
	node ./bin/brain-calc.js