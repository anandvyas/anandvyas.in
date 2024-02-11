import  { commonArray, commonObj }  from "./common.js";

Vue.component("container-liveness", {
  delimiters: ["[[", "]]"],
  components: {
    keyvalue: commonArray
  },
  data: function() {
    return {
      picked: "",
      typeArray: ["httpGet", "exec", "tcpSocket"],
      type: "httpGet",
      tcpSocketPort: 0,
      httpGet: {
        path: "",
        port: "",
        httpHeaders: []
      },
      exec: {
        command: []
      },
      initialDelaySeconds: 0,
      periodSeconds: 15
    };
  },
  methods: {
    update: function() {
      this.$emit("updateFields", {
        name: "livenessProbe",
        value: this.ports
      });
    }
  },
  template: `
    <fieldset class="col-md-12">
        <legend>liveness - Probe</legend>
        <div class="form-group">
            <label>Probe - Type</label>
            <div class="form-row ml-3">
                <div class="col" v-for="node,index in typeArray">
                   <input  class="form-check-input" :value="node" type="radio" v-model="type" />
                    <label class="form-check-label">[[node]]</label>
                </div>
            </div>
        </div>
        <fieldset class="col-md-12" v-if="type == 'httpGet'">
            <legend>http - Get</legend>
            <div class="form-group">
                <label>Path</label>
                <input type="text"  class="form-control" placeholder="Path">
            </div>
            <div class="form-group">
                <label>Port</label>
                <input type="number" class="form-control" placeholder="Port">
            </div>
            <fieldset class="col-md-12">
                <legend>httpHeaders</legend>
                <keyvalue title="Add httpHeaders" :labels="httpGet.httpHeaders"></keyvalue>
            </fieldset>

        </fieldset>
        <fieldset class="col-md-12" v-if="type == 'tcpSocket'">
            <legend>TCP - Socket</legend>
            <div class="form-group">
                <input type="number" v-model.number="initialDelaySeconds" class="form-control"
                    placeholder="initialDelaySeconds">
            </div>
        </fieldset>
        <fieldset class="col-md-12" v-if="type == 'exec'">
            <legend>Exec - Command</legend>

        </fieldset>

        <div class="form-group mt-2">
            <label>initialDelaySeconds</label>
            <input type="number" v-model.number="initialDelaySeconds" class="form-control"
                placeholder="initialDelaySeconds">
        </div>
        <div class="form-group">
            <label>periodSeconds</label>
            <input type="number" v-model.number="periodSeconds" class="form-control" placeholder="periodSeconds">
        </div>
    </fieldset>
    `
});

Vue.component("container-port", {
  delimiters: ["[[", "]]"],
  data: function() {
    return {
      ports: []
    };
  },
  methods: {
    update: function() {
      this.$emit("updateFields", {
        name: "ports",
        value: this.ports
      });
    },
    addPort: function() {
      this.ports.push({ containerPort: 0 });
    },
    deletePort: function(index) {
      this.ports.splice(index, 1);
    }
  },
  template: `
    <fieldset class="col-md-12 mt-2">
        <legend>Container Port</legend>
        <div class="form-group">
            <a href="javascript:void(0)" class="btn btn-primary btn-lg btn-block btn-sm" v-on:click="addPort()">Add Port</a>
        </div>
        <div class="form-row" v-for="(port,index) in ports" >
            <div class="col-11">
                <input type="number" v-model.number="ports[index].containerPort" v-on:keyup="update()" class="form-control" placeholder="containerPort" />
            </div>
            <div class="col">
                <a href="javascript:void(0)" v-on:click="deletePort(index)">
                    <i class="fa fa-times"></i>
                </a>
            </div>
        </div>
    </fieldset>
    `
});

export default {
  delimiters: ["[[", "]]"],
  props: ["node"],
  data: function() {
    return {
      Configrutation: {
        ports: false,
        command: false,
        args: false,
        env: false,

        livenessProbe: false,
        readinessProbe: false,

        workingDir: false,
        stdin: false,
        stdinOnce: false,
        resources: false,
        volumeMounts: false,
        lifecycle: false,
        terminationMessagePath: false,
        imagePullPolicy: false,
        securityContext: false,

        tty: false
      },
      imagepullpolicy: ["Always", "IfNotPresent", "Never"]
    };
  },
  methods: {
    addRemoveField: function() {
      // console.log(this.Configrutation);
    },
    
    addPort: function(index) {
      this.containers[index].ports.push({ containerPort: 0 });
    },
    deletePort: function(index, portIndex) {
      this.containers[index].ports.splice(portIndex, 1);
    },
    updateFields: function(field) {
      
      this.node = ...{
        [field.name] : field.value
      }
      
      // console.log(this.node[field.name]);
      
      // if(this.node[field.name] === 'undefined'){
      //   console.log('nopeeeee');
      // }else{
        
      // }  

      // this.node = field.value;
    }
  },
  template: `
    <div>
      <div class="form-group">
          <label>Container Name</label>
          <input type="text" v-model="node.name" class="form-control" placeholder="Name">
      </div>
      <div class="form-group">
          <label>Container Image Path</label>
          <input type="text" v-model="node.image" class="form-control" placeholder="Path">
      </div>

      <button class="btn btn-primary btn-lg btn-block btn-sm" data-toggle="collapse" data-target="#demo">Enable/Disable Fields</button>

      <div id="demo" class="collapse">
        <div class="form-group m-2 row">            
            <div class="col-6" v-for="conf,key in Configrutation">
                <input type="checkbox" class="form-check-input" v-on:click="addRemoveField()" v-model="Configrutation[key]" />
                <label class="from-group">[[key]]</label>
            </div>
        </div>
      </div>

      <container-port v-if="Configrutation.ports" v-on:updateFields="updateFields($event)"></container-port>
      <container-liveness v-if="Configrutation.livenessProbe"></container-liveness>
  </div>
        `
};
