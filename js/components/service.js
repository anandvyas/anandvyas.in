Vue.component("service-port", {
  delimiters: ["[[", "]]"],
  props: ["title", "ports"],
  data: function() {
    return {
        protocols: ["TCP","UDP","SCTP"]
    };
  },
  methods: {
    addPort: function() {
      this.ports.push({
        name: "",
        protocol: "TCP",
        port: "",
        targetPort: ""
      });
    },
    deletePort: function(index) {
      this.ports.splice(index, 1);
    }
  },
  template: `
    <div>
        <div class="form-group">
            <a href="javascript:void(0)" class="btn btn-primary btn-lg btn-block btn-sm" v-on:click="addPort()">
            [[title]]</a>
        </div>
        <div v-for="(port,index) in ports">
            <fieldset>
                <legend>Port - [[index + 1]]</legend>
                <div class="form-row">
                    <div class="form-group col-6">
                        <input type="text" v-model="ports[index].name" class="form-control" placeholder="Name">
                    </div>
                    <div class="form-group col-6">
                        <select class="form-control" v-model="ports[index].protocol">
                            <option v-for="(val) in protocols">[[val]]</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-6">
                        <input type="number" v-model.number="ports[index].port"  class="form-control" placeholder="Port">
                    </div>
                    <div class="form-group col-6">
                        <input type="number" v-model.number="ports[index].targetPort" class="form-control" placeholder="Target Port">
                    </div>
                </div>

                <div class="form-group text-right">
                    <a href="javascript:void(0)" class="btn btn-danger btn-sm" v-on:click="deletePort(index)">
                        delete
                    </a>
                </div>
            </fieldset>
        </div>
    </div>
    `
});

export default {
  delimiters: ["[[", "]]"],
  props: ["service"],
  components: {
    keyvalue: () => import("./labels.js")
  },
  data() {
    return {
      output: {
        apiVersion: "",
        kind: "service",
        metadata: {
          name: "",
          labels: []
        },
        spec: {
          selector: [],
          ports: []
        }
      }
    };
  },
  methods: {
    cleankey: function(objArray) {
      var tmp = {};
      for (var index in objArray) {
        if (objArray[index].name == "") continue;
        tmp[objArray[index].name] = objArray[index].value;
      }
      return tmp;
    }
  },
  beforeMount: function() {
    if (localStorage.getItem("service") !== null) {
      this.output = JSON.parse(localStorage.getItem("service"));
    }
  },
  computed: {
    ServiceYaml: function() {
      var tmp = JSON.parse(JSON.stringify(this.output));

      tmp.metadata.labels = this.cleankey(tmp.metadata.labels);
      tmp.spec.selector = this.cleankey(tmp.spec.selector);

      // form value store in localstorage
      localStorage.setItem("service", JSON.stringify(this.output));
      return jsyaml.dump(tmp);
    }
  },
  template: `
  <div class="row">
    <div class="col-md-6 col-lg-6 col-sm-6">
        <div class="form-group">
            <label>Api Version</label>
            <input v-model="output.apiVersion" type="text" class="form-control" placeholder="Api Version">
        </div>
        <fieldset>
            <legend>Metadata</legend>
            <div class="form-row">
                <div class="form-group col-md-12">
                    <label>Metadata Name</label>
                    <input v-model="output.metadata.name" type="text" class="form-control" placeholder="Metadata Name">
                </div>
            </div>
            <keyvalue title="Add labels" :labels="output.metadata.labels"></keyvalue>
        </fieldset>
        <fieldset>
            <legend>Spec - Selector</legend>
            <keyvalue title="Add Selector" :labels="output.spec.selector"></keyvalue>
        </fieldset>
        <fieldset>
            <legend>Spec - Ports</legend>
            <service-port title="Add Port" :ports="output.spec.ports"></service-port>
        </fieldset>
    </div>
        <div class="col-md-6 col-lg-6 col-sm-6">
            <pre><code class="language-yaml hljs" download="service.yaml">[[ServiceYaml]]</code></pre>
        </div>
    </div>
    `
};
