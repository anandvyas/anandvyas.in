export default {
  delimiters: ["[[", "]]"],
  props: ["pod"],
  components: {
    keyvalue: () => import("./labels.js"),
    containers: () => import("./containers.js")
  },
  data() {
    return {
      volumeType: [
        "awsElasticBlockStore",
        "azureDisk",
        "azureFile",
        "cephfs",
        "cinder",
        "configMap",
        "csi",
        "downwardAPI",
        "emptyDir",
        "fc (fibre channel)",
        "flexVolume",
        "flocker",
        "gcePersistentDisk",
        "glusterfs",
        "hostPath",
        "iscsi",
        "local",
        "nfs",
        "persistentVolumeClaim",
        "projected",
        "portworxVolume",
        "quobyte",
        "rbd",
        "scaleIO",
        "secret",
        "storageos",
        "vsphereVolume"
      ],
      apiVersion: "",
      kind: "Pod",
      metadata: {
        name: "",
        namespace: ""
      },
      spec: {
        containers: [],
        volumes: []
      }
    };
  },
  methods: {
    addContainer: function() {
      this.spec.containers.push({
        name: "",
        image: "",
        resources: {
          limits: {
            memory: ""
          },
          requests: {
            memory: ""
          }
        },
        commands: [],
        args: []
      });
    },
    addVolume: function() {
      this.spec.volumes.push({
        name: "",
        quobyte: {
          registry: "",
          volume: "",
          readOnly: "",
          user: "",
          group: ""
        }
      });
    }
  },
  template: `
    <div>
        <div class="form-group">
            <label>Api Version</label>
            <input v-model="apiVersion" type="text" class="form-control" placeholder="Api Version">
        </div>
        <fieldset>
            <legend>Metadata</legend>
            <div class="form-row">
                <div class="col">
                    <label>Name</label>
                    <input v-model="metadata.name" type="text" class="form-control" placeholder="Name">
                </div>
                <div class="col">
                    <label>NameSpace</label>
                    <input v-model="metadata.namespace" type="text" class="form-control" placeholder="Namespace">
                </div>
            </div>
        </fieldset>
        <fieldset>
            <legend>Spec - Volumes</legend>
            <div class="form-group">
                <a href="javascript:void(0)" class="btn btn-primary btn-lg btn-block btn-sm" v-on:click="addVolume()">Add
                Volumes</a>
            </div>
            <div class="form-row" v-for="(node,index) in spec.volumes">
                <fieldset class="col-md-12">
                <legend>Volume - [[index + 1]]</legend>
                    <div class="form-group row">
                        <div class="col">
                            <label>Name</label>
                            <input type="text" v-model="spec.volumes[index].name" class="form-control" placeholder="Name">
                        </div>
                        <div class="col">
                            <label>Volumn Type</label>
                            <select class="form-control" >
                                <option v-for="(node,volumeindex) in volumeType" :value="volumeType[volumeindex]">[[node]]</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                            <label>volumeID</label>
                            <input type="text" v-model="spec.volumes[index].name" class="form-control" placeholder="volumeID">
                        </div>
                        <div class="col">
                            <label>FileSystem Type</label>
                            <input type="text" v-model="spec.volumes[index].name" class="form-control" placeholder="fstype">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <a href="javascript:void(0)" class="btn btn-primary btn-lg btn-block btn-sm"
                                v-on:click="addPort(index)">Add
                                Port</a>
                        </div>
                        <div class="col">
                            <a href="javascript:void(0)" class="btn btn-danger btn-lg btn-block btn-sm"
                                v-on:click="deleteContainer(index)">delete</a>
                        </div>
                    </div>
                </fieldset>
            </div>
        </fieldset>    
        <fieldset>
            <legend>Spec - Containers</legend>
            <div class="form-group">
                <a href="javascript:void(0)" class="btn btn-primary btn-lg btn-block btn-sm" v-on:click="addContainer()">Add
                    Container</a>
            </div>
            <div class="form-row" v-for="(container,index) in spec.containers">
                <fieldset class="col-md-12">
                    <legend>Container - [[index + 1]]</legend>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" v-model="spec.containers[index].name" class="form-control" placeholder="Name">
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input type="text" v-model="spec.containers[index].image" class="form-control" placeholder="Image">
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label>Limit - Memory</label>
                            <input type="number" v-model="spec.containers[index].resources.limits.memory" class="form-control" placeholder="Image">
                        </div>
                        <div class="col">
                            <label>Request - Memory</label>
                            <input type="number" v-model="spec.containers[index].resources.requests.memory" class="form-control" placeholder="Image">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <a href="javascript:void(0)" class="btn btn-primary btn-lg btn-block btn-sm"
                                v-on:click="addPort(index)">Add
                                Port</a>
                        </div>
                        <div class="col">
                            <a href="javascript:void(0)" class="btn btn-primary btn-lg btn-block btn-sm"
                                v-on:click="deleteContainer(index)">delete</a>
                        </div>
                    </div>
                </fieldset>
            </div>
        </fieldset>
    </div>
    `
};
