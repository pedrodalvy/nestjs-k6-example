app_local:
	docker compose up -d app_local
.PHONY: app_local

app_prod:
	docker compose up -d app_prod
.PHONY: app_prod

down:
	docker compose rm -f -s -v
.PHONY: run
