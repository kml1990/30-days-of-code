# Docker

## What is Docker?

* Virtualization software.
* Makes developing and deploying applications much easier.
* Packages application with all necessary dependencies, configuraion, system ools and runtime.
* Portable artifact, easily shared and distributed

### Development process before containers

* Each dev needs to install and configure all services diectly on their OS on thei local machine
* Installation process different for each OS enviroment
* Many steps, where something go wrong
* If the app uses 10 services, each dev needs to install those 10 services

### Development process with containers

* Own isolated enviroment
* Postgres packaged with all dependencies and configs
* Start service as a Docker container using 1 docker command
* Docker command same for all OS
* Commans same for all services
* Standardizes process of running any service on any local dev enviroment
* Easy to run differen versions of the same app without conflicts

### Deployment process before containers

* Artifact and instructions handed over to ops team
* Ops team handles installing and configuring apps and its dependencies
* Installations and configuration done directly on the server OS which can cause issues
  * Dependency version conflicts etc
* Miscomunications - textual guide of deployment

### Deployment process with containers

* Docker artifact includes everything that app needs
* Instead of textual, everything is packaged inside the Docker artifact
* No configurations needed on the server
  * (except Docker runtime)
* Run Docker command to fetch and run the Docker artifacts

## How does Docker run ts containers?

### How an OS is made up?

* OS Application Layer
  * Software that can be run on OS
* OS Kernel
  * Kernel is at the core of every operating system
  * Kernel interacts between hardware & software components

### Docker

* Uses Applications Layer only
* Services and apps installed on top of that layer


### VM

* Uses Application and Kernel Layers


### What affects has this difference?

#### Containers

* Docker images are much smaller
  * Couple of MB
* Containers take seconds to start
  * Reuses the host kernel
* Compatible only with Linux distros
* Docker desktop made it possible to run containers on Windows and Mac os.

#### VMs
* VM images are large
  * Couple of GB
* VMs take minutes to start
  * Needs to boot up a kernel in order to start
* VM is compatible with all OS