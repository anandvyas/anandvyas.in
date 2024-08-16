---
title: 'Kubernetes - Cheat Sheet'
date: 2024-02-01
draft:  false   
featured: false  
description: "Kubernetes - Cheat Sheet"
thumbnail: "/posts/kubernetes/images/k8.png"
featureImage: "/posts/kubernetes/images/k8.png" 
shareImage: "/posts/kubernetes/images/k8.png"
author: "Anand Vyas"
tags:
    - Kubernetes
    - Cheat Sheet
categories:     
    - Kubernetes
---

### Cluster Info

- Get clusters

```bash
kubectl config get-clusters
```

- Get cluster info.
```bash
kubectl cluster-info
Kubernetes master is running at https://172.17.0.58:8443
```

### Contexts

A context is a cluster, namespace and user.

- Get a list of contexts.
```bash 
kubectl config get-contexts
```

- Get the current context.
```bash
kubectl config current-context
```

- Switch current context.
```bash
kubectl config use-context docker-desktop
```

- Set default namesapce
```bash
kubectl config set-context $(kubectl config current-context) --namespace=my-namespace
```

### Get Commands

```bash
kubectl get all
kubectl get namespaces
kubectl get configmaps
kubectl get nodes
kubectl get pods
kubectl get rs
kubectl get svc kuard
kubectl get endpoints kuard
```

Additional switches that can be added to the above commands:

- `-o wide` - Show more information.
- `--watch` or `-w` - watch for changes.


### Namespaces

- `--namespace` - Get a resource for a specific namespace.

You can set the default namespace for the current context like so:

```bash
kubectl config set-context $(kubectl config current-context) --namespace=my-namespace
```

### Labels

- Get pods showing labels.
```bash
kubectl get pods --show-labels
```

- Get pods by label.
```bash
kubectl get pods -l environment=production,tier!=frontend
kubectl get pods -l 'environment in (production,test),tier notin (frontend,backend)'
```

### Describe Command

```bash
kubectl describe nodes [id]
kubectl describe pods [id]
kubectl describe rs [id]
kubectl describe svc kuard [id]
kubectl describe endpoints kuard [id]
```

### Delete Command

```bash
kubectl delete nodes [id]
kubectl delete pods [id]
kubectl delete rs [id]
kubectl delete svc kuard [id]
kubectl delete endpoints kuard [id]
```

Force a deletion of a pod without waiting for it to gracefully shut down
```bash
kubectl delete pod-name --grace-period=0 --force
```

### Create vs Apply

`kubectl create` can be used to create new resources while `kubectl apply` inserts or updates resources while maintaining any manual changes made like scaling pods.

- `--record` - Add the current command as an annotation to the resource.
- `--recursive` - Recursively look for yaml in the specified directory.

### Create Pod

```bash
kubectl run kuard --generator=run-pod/v1 --image=gcr.io/kuar-demo/kuard-amd64:1 --output yaml --export --dry-run > kuard-pod.yml
kubectl apply -f kuard-pod.yml
```

### Create Deployment

```bash
kubectl run kuard --image=gcr.io/kuar-demo/kuard-amd64:1 --output yaml --export --dry-run > kuard-deployment.yml
kubectl apply -f kuard-deployment.yml
```

### Create Service

```bash
kubectl expose deployment kuard --port 8080 --target-port=8080 --output yaml --export --dry-run > kuard-service.yml
kubectl apply -f kuard-service.yml
```

### Export YAML for New Pod

```bash
kubectl run my-cool-app —-image=me/my-cool-app:v1 --output yaml --export --dry-run > my-cool-app.yaml
```

### Export YAML for Existing Object

```bash
kubectl get deployment my-cool-app --output yaml --export > my-cool-app.yaml
```

## Logs
```bash
kubectl logs -l app=kuard

# Get logs for previously terminated container.
kubectl logs POD_NAME --previous

# Watch logs in real time.
kubectl attach POD_NAME

# Copy log files out of pod (Requires `tar` binary in container).
kubectl cp POD_NAME:/var/log .
```

## Port Forward

```bash 
kubectl port-forward deployment/kuard 8080:8080
```

## Scaling

- Update replicas.
```bash 
kubectl scale deployment nginx-deployment --replicas=10
```

## Autoscaling

- Set autoscaling config.
```bash 
kubectl autoscale deployment nginx-deployment --min=10 --max=15 --cpu-percent=80
```

## Rollout

```bash
# Get rollout status.
kubectl rollout status deployment/nginx-deployment

# Get rollout history.

kubectl rollout history deployment/nginx-deployment
kubectl rollout history deployment/nginx-deployment --revision=2

# Undo a rollout.

kubectl rollout undo deployment/nginx-deployment
kubectl rollout undo deployment/nginx-deployment --to-revision=2

# Pause/resume a rollout

kubectl rollout pause deployment/nginx-deployment
kubectl rollout resume deploy/nginx-deployment
```


### Examples of get commands

```bash
# Get commands with basic output
kubectl get services                          # List all services in the namespace
kubectl get pods --all-namespaces             # List all pods in all namespaces
kubectl get pods -o wide                      # List all pods in the namespace, with more details
kubectl get deployment my-dep                 # List a particular deployment
kubectl get pods --include-uninitialized      # List all pods in the namespace, including uninitialized ones

# Describe commands with verbose output
kubectl describe nodes my-node
kubectl describe pods my-pod

kubectl get services --sort-by=.metadata.name # List Services Sorted by Name

# List pods Sorted by Restart Count
kubectl get pods --sort-by='.status.containerStatuses[0].restartCount'

# Get the version label of all pods with label app=cassandra
kubectl get pods --selector=app=cassandra rc -o \
  jsonpath='{.items[*].metadata.labels.version}'

# Get all worker nodes (use a selector to exclude results that have a label
# named 'node-role.kubernetes.io/master')
kubectl get node --selector='!node-role.kubernetes.io/master'

# Get all running pods in the namespace
kubectl get pods --field-selector=status.phase=Running

# Get ExternalIPs of all nodes
kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="ExternalIP")].address}'

# List Names of Pods that belong to Particular RC
# "jq" command useful for transformations that are too complex for jsonpath, it can be found at https://stedolan.github.io/jq/
sel=${$(kubectl get rc my-rc --output=json | jq -j '.spec.selector | to_entries | .[] | "\(.key)=\(.value),"')%?}
echo $(kubectl get pods --selector=$sel --output=jsonpath={.items..metadata.name})

# Show labels for all pods (or any other Kubernetes object that supports labelling)
# Also uses "jq"
for item in $( kubectl get pod --output=name); do printf "Labels for %s\n" "$item" | grep --color -E '[^/]+$' && kubectl get "$item" --output=json | jq -r -S '.metadata.labels | to_entries | .[] | " \(.key)=\(.value)"' 2>/dev/null; printf "\n"; done

# Check which nodes are ready
JSONPATH='{range .items[*]}{@.metadata.name}:{range @.status.conditions[*]}{@.type}={@.status};{end}{end}' \
 && kubectl get nodes -o jsonpath="$JSONPATH" | grep "Ready=True"

# List all Secrets currently in use by a pod
kubectl get pods -o json | jq '.items[].spec.containers[].env[]?.valueFrom.secretKeyRef.name' | grep -v null | sort | uniq

# List Events sorted by timestamp
kubectl get events --sort-by=.metadata.creationTimestamp
```