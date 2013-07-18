
test: node_modules
	@./node_modules/mocha/bin/_mocha \
		--require should \
		--reporter dot \
		--bail

node_modules: package.json
	@npm install
	@touch node_modules

clean:
	rm -r build components node_modules

.PHONY: clean test
