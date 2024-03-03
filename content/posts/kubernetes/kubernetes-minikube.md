---
title: 'Kubernetes - Minikube'
date: 2024-02-01
draft:  true   
featured: false  
description: "Kubernetes - Minikube"
thumbnail: "/posts/kubernetes/images/minikube.png"
featureImage: "/posts/kubernetes/images/minikube.png" 
shareImage: "/posts/kubernetes/images/minikube.png"
author: "Anand Vyas"
tags:
    - Kubernetes
categories:     
    - Kubernetes
---     

Minikube is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster.

### Installation of Minikube on Ubuntu
```bash
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube
sudo cp minikube /usr/local/bin && rm minikube
```

### Cheat sheet
```bash
minikube version #Get minikube version

minikube start          # Start Minikube Service
minikube start --cpus 4 --memory 8192         # Start Minikube Service with 4 cpus and 8192 of memory
minikube stop         # Stop Mikikube Service
minikube delete         # Clean the configurations and start clean (maybe also you need rm -rf ./minikube)
minikube get-k8s-versions         # List of Kubernetes versions Minikube currently supports
minikube start --kubernetes-version v1.7.5          # Start with a specific version of k8s

minikube ssh # SSH to minikube vm
minikube update-check # Minikube check latest version

minikube dashboard         # Open the Dashboard
minikube dashboard --url   # Get the Dashboard URL
minikube ip                # View ip of Cluster
minikube logs              # Get minikube log

minikube addons list # List addons
minikube addons enable heapster  # Install addon after creating minikube env
minikube addons disable heapster # Disable addon 
minikube mount /host-mount-path:/vm-mount-path # Mount host OS’s folder to minikube VM

minikube service --url SERVICE   # Get the URL of service
minikube status                  # View the status of minikube, cluster and kubectl (Something ips change)
minikube update-context          # Fix ips change, kubectl misconfigured
```