generate:
	cp docs/CNAME .
	yarn generate
	cp CNAME docs/

deploy:
	make generate
	git add docs
	git commit docs -m "building website"
	git push origin master
