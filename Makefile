test:
	./node_modules/.bin/mocha

cover test-cover:
	./node_modules/.bin/istanbul cover _mocha

.PHONY: test cover test-cover
