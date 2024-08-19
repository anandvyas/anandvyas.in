---
title: 'Kubernetes'
date: 2024-02-01
draft:  false   
featured: false  
description: "Kubernetes"
thumbnail: "/posts/kubernetes/images/k8.png"
featureImage: "/posts/kubernetes/images/k8-arch.png" 
shareImage: "/posts/kubernetes/images/k8-arch.png"
author: "Anand Vyas"
tags:
    - Kubernetes
categories:         
    - Kubernetes
---     

Kubernetes (K8s in short) is an open-source container orchestration platform introduced by Google in 2014. It is a successor of Borg, Google’s in-house orchestration system that accumulated over a decade of the tech giant’s experience of running large enterprise workloads in production. In 2014, Google decided to further container ecosystem by sharing Kubernetes with the cloud native community. Kubernetes became the first graduated project of the newly created Cloud Native Community Foundation (CNCF), an organization conceived by Google and the Linux Foundation as the main driver of the emerging cloud native movement.

### Kubernetes Master Node

A Kubernetes master runs Control Plane, responsible for maintaining the desired state of the cluster, 


| Component | Description |
| --------- | ----------- |
| Etcd | This is a data store used by Kubernetes to store all information about the cluster. It’s critical for keeping everything up to date |
| kube-apiserver | This component exposes Kubernetes API to users allowing them to create API resources, run applications, and configure various parameters of the cluster.|
| kube-controller-manager | The component that manages API objects created by users. It makes sure that the actual state of the cluster always matches the desired state |
| kube-scheduler | This component is responsible for scheduling user workloads on the right infrastructure. When scheduling applications, kube-scheduler considers various factors such as available node resources, node health, and availability, as well as user-defined constraints.|
| cloud-controller-manager | This component embraces various controllers, all of which interact with the cloud providers’ APIs.|
    

### Kubernetes Worker Node

It is a physical server or you can say a VM which runs the applications using Pods which is controlled by the master node.

| Component | Description |
| --------- | ----------- |
| kubelet | The Kubelet is responsible for managing the deployment of pods to Kubernetes nodes. It receives commands from the API server and instructs the container runtime to start or stop containers as needed. |
| kube-proxy  | A network proxy running on each Kubernetes node. It is responsible for maintaining network rules on each node. Network rules enable network communication between nodes and pods. Kube-proxy can directly forward traffic or use the operating system packet filter layer.|
| Container runtime  | The software layer responsible for running containers. There are several container runtimes supported by Kubernetes, including Containerd, CRI-O, Docker, and other Kubernetes Container Runtime Interface (CRI) implementations. |

### Kubernetes Resource Objects  

Kubernetes Objects are persistent entities in the Kubernetes system that represent an intent (desired state) and the status (actual state) of the cluster.   

> The kubectl api-resources command actually lists not API resources but known types of Kubernetes Objects.

```bash
kubectl api-resources

# output 
NAME                 SHORTNAMES   APIVERSION    NAMESPACED   KIND
bindings                          v1            true         Binding
componentstatuses    cs           v1            false        ComponentStatus
configmaps           cm           v1            true         ConfigMap
endpoints            ep           v1            true         Endpoints
events               ev           v1            true         Event
limitranges          limits       v1            true         LimitRange
```

#### Kubernetes Resource Objects defination 

![Kubernetes Object Schema](/posts/kubernetes/images/k8-object.png)


| Field | Description |
| --------- | ----------- |
| API version | Specifies the version of the Kubernetes API that you are using to create this object. For example, apps/v1 for Deployments. (Alpha - v1alpha1/ Beta - v2beta3 /Stable - v1 ) |
| Kind  | Defines the type of Kubernetes resource you are creating. |
| Metadata  | Metadata describes higher-level information about the object — e.g., its name, what namespace it lives in, or whether it defines labels and annotations. |
| Spec | The specification (“spec” for short) declares the desired state |
| Status | The status describes the actual state of an object. The Kubernetes controllers and their reconcilliation loops constantly try to transition a Kubernetes object from the desired state into the actual state.|


#### Kubernetes Resource Objects defination approach

Imperative Approach
```bash
kubectl run frontend --image=nginx --restart=Never --port=80
```

Declarative Approach
```bash
vim pod.yaml
kubectl create -f pod.yaml
```

Hybrid Approach
```bash
kubectl run frontend --image=nginx --restart=Never --port=80 -o yaml --dry-run=client > pod.yaml
kubectl create -f pod.yaml
```


#### Kubernetes Comman Resource Objects

- `ReplicaSets`: Ensures that a specified number of pod replicas are running at any given time.
- `Pods`: The smallest deployable units in Kubernetes, which encapsulate one or more containers.
- `Deployments`: Manages ReplicaSets and provides declarative updates for Pods.
- `StatefulSets`: Manages stateful applications, providing guarantees about the ordering and uniqueness of Pods.
- `DaemonSets`: Ensures that a copy of a Pod is running on all (or some) nodes in the cluster.
- `Jobs`: Creates one or more Pods and ensures that a specified number of them successfully terminate.
- `CronJobs`: Runs Jobs on a time-based schedule.
- `Services`: Defines a logical set of Pods and a policy by which to access them, enabling network access to Pods.
- `Ingress`: Manages external access to services, typically HTTP, and provides load balancing, SSL termination, and name-based virtual hosting.
- `NetworkPolicies`: Controls the communication between Pods and/or Services based on rules.
- `ConfigMaps`: Provides a way to inject configuration data into Pods.
- `Secrets`: Stores sensitive information, such as passwords, OAuth tokens, and SSH keys, and makes it available to Pods.
- `Volumes`: Manages storage resources that Pods can use, including persistent and ephemeral storage options.
- `PersistentVolumes (PVs)`: Represents a piece of storage in the cluster that has been provisioned by an administrator.
- `PersistentVolumeClaims (PVCs)`: A request for storage by a user.
- `Namespaces`: Provides a mechanism for isolating resources within the cluster.
- `ResourceQuotas`: Limits the amount of resources (e.g., CPU, memory) that can be consumed by resources in a namespace.
- `LimitRanges`: Sets constraints on the resource requests and limits for Pods and Containers within a namespace.
- `ServiceAccounts`: Provides an identity for Pods to interact with the Kubernetes API and other resources.
- `Roles and RoleBindings`: Define and bind sets of permissions to users or ServiceAccounts for access control within a namespace.
- `ClusterRoles and ClusterRoleBindings`: Define and bind sets of permissions cluster-wide.
- `HorizontalPodAutoscalers (HPAs)`: Automatically scales the number of Pods in a Deployment or ReplicaSet based on CPU utilization or other select metrics.
- `VerticalPodAutoscalers (VPAs)`: Adjusts the resource requests and limits of Pods based on usage patterns.
- `PodDisruptionBudgets (PDBs)`: Ensures that a certain number or percentage of Pods remain available during voluntary disruptions.
- `Endpoints`: Represents a set of network endpoints (i.e., IP addresses and ports) for a Service.
- `CustomResourceDefinitions (CRDs)`: Allows users to define and manage custom resources in the Kubernetes API.
- `Helm Charts`: While not a native Kubernetes resource, Helm is a package manager for Kubernetes that uses charts to define, install, and manage Kubernetes applications.
