# NestJS and K6 with Docker

This project is designed for testing NestJS and K6 within a Docker environment.

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
3. [Running the Application](#running-the-application)
    - [Production Mode](#production-mode)
    - [Local Mode](#local-mode)
4. [Running Tests with K6](#running-tests-with-k6)
    - [Running K6 Tests](#running-k6-tests)
    - [K6 Documentation](#k6-documentation)
5. [Directory Structure](#directory-structure)

## 1. Introduction <a name="introduction"></a>

This repository focuses on the testing of NestJS and K6 within a Dockerized environment. 
The Docker Compose configuration has been optimized to facilitate precise local testing while respecting specified resource limitations.
Please note that this doesn't guarantee consistent system-level resource allocation.

## 2. Getting Started <a name="getting-started"></a>

### Prerequisites <a name="prerequisites"></a>

Before starting, make sure you have the following tools and dependencies installed:

- [Docker](https://docs.docker.com) - To containerize and manage your application.
- [Make](https://www.gnu.org/software/make) - For convenient project management using the Makefile.

### Installation <a name="installation"></a>

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/pedrodalvy/nestjs-k6-example.git
   ```

2. Change to the project directory:

   ```bash
   cd nestjs-k6-example
   ```

## 3. Running the Application <a name="running-the-application"></a>

### Production Mode <a name="production-mode"></a>

To run the NestJS application in production mode, run:

```bash
make app_prod
# OR
docker-compose up -d app_prod
```

### Local Mode <a name="local-mode"></a>

To run the NestJS application locally for development purposes, run:

```bash
make app_local
# OR
docker-compose up -d app_local
```

## 4. Running Tests with K6 <a name="running-tests-with-k6"></a>

### Running K6 Tests <a name="running-k6-tests"></a>

You can run K6 tests to evaluate the performance and scalability of your NestJS application. Execute the following command:

```bash
make k6 run scripts/hello-world.k6.js
# OR
docker compose run k6 run scripts/hello-world.k6.js
```

### K6 Documentation <a name="k6-documentation"></a>

For more details on how to create and customize K6 tests, refer to the [K6 documentation](https://k6.io/docs/).

## 5. Directory Structure <a name="directory-structure"></a>

The project directory structure is organized as follows:

- `k6/scripts`: Contains K6 test scripts.
- Add more directories and files as needed to structure your NestJS application.
