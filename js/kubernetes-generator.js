var app = new Vue({
  el: "#app",
  delimiters: ["[[", "]]"],
  components: {
    deployment: () => import("./components/deployment.js"),
    service: () => import("./components/service.js"),
    pod: () => import("./components/pod.js"),
    storageClass: () => import("./components/storageClass.js")
  },
  data: {
    tabs: [
      { id: "deployment", name: "Deployment" },
      { id: "services", name: "Services" },
      { id: "pod", name: "Pod" },
      // { id: "ConfigMap", name: "ConfigMap" },
      // { id: "Secret", name: "Secret" },
      // { id: "Daemonset", name: "Daemonset" },
      // { id: "StatefulSet", name: "StatefulSet" },
      
      // { id: "PersistentVolume", name: "PersistentVolume" },
      // { id: "PersistentVolumeClaim", name: "PersistentVolumeClaim" },
      // { id: "HorizontalPodAutoscaler", name: "HorizontalPodAutoscaler" },
      // { id: "PodDisruptionBudget", name: "PodDisruptionBudget" },

      // { id: "Ingress", name: "Ingress" },
      // { id: "CronJob", name: "CronJob" },    
      // { id: "Job", name: "Job" },
      // { id: "replicaSet", name: "ReplicaSet" },
      { id: "storageClass", name: "Storage Class" },
      
    ],
    service: {
      apiVersion: "",
      kind: "Service",
      metadata: {
        name: "",
        labels: []
      },
      spec: {
        selector: [],
        ports: []
      }
    }
  },
  methods: {
    cleanAll: function() {
      localStorage.clear();
      location.reload();
    }
  }
});
