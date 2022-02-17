# jvspad

Personal Website

## Development Reqs

To git started, you will need to build the docker container. Todo this, run the following:

```
docker-compose build
```

This will build out the docker container and install the dependencies within it. If you are finding issues with modules/dependencies,
try to rebuild without the cache:

```
docker-compose build --no-cache
```

## Installing new dependencies

Everything is run in the docker container. We use pip to add the reqs and pip-compile to lock them and its related dependencies down.

First add the new package to the requirements.in file.
Next, run

```
docker-compose run web pip-compile
docker-compose run web python -m pip install -r requierments.txt
```
