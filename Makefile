up:
	@cd .docker && \
	docker compose up -d --build

down:
	@cd .docker && \
	docker compose down && \
	docker rmi codhub-landing

logs:
	@docker logs -f codhub-landing

connect: 
	@docker exec -it codhub-landing /bin/sh

install:
	@docker exec -it codhub-landing npm install

build-prod:
	@docker build . -f .docker/dockerfile.prod -t ghcr.io/wassimzo/codhub-landing:latest

push-prod:
	@docker push ghcr.io/wassimzo/codhub-landing:latest

rm-prod:
	@docker rmi ghcr.io/wassimzo/codhub-landing:latest
