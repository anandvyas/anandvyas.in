export default {
  delimiters: ["[[", "]]"],
  components: {
    keyvalue: () => import("./labels.js")
  },
  data() {
    return {
      examples: false,
      reclaimPolicy: ["Delete", "Retain"],
      volumeBindingMode: ["Immediate", "WaitForFirstConsumer"],
      output: {
        apiVersion: "",
        kind: "StorageClass",
        metadata: {
          name: "",
          annotations: []
        },
        provisioner: "",
        parameters: [],
        reclaimPolicy: "Delete",
        // mountOptions: {},
        volumeBindingMode: "Immediate"
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
    if (localStorage.getItem("storageClass") !== null) {
      this.output = JSON.parse(localStorage.getItem("storageClass"));
    }
  },
  computed: {
    StorageClassYaml: function() {
      let tmp = JSON.parse(JSON.stringify(this.output));
    
      tmp.metadata.annotations = this.cleankey(tmp.metadata.annotations);
      tmp.parameters = this.cleankey(tmp.parameters);
    
      // form value store in localstorage
      localStorage.setItem('storageClass', JSON.stringify(this.output));
      return jsyaml.dump(tmp);
    }
  },
  template: `
    <div>
        <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-6">
                <div class="form-group">
                    <label>Api Version</label>
                    <input v-model="output.apiVersion" type="text" class="form-control" placeholder="Api Version">
                </div>
                <fieldset>
                    <legend>Metadata</legend>
                    <div class="form-group">
                        <label>Metadata Name</label>
                        <input v-model="output.metadata.name" type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="form-group">
                        <keyvalue title="Add Annotations" :labels="output.metadata.annotations"></keyvalue>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Provisioner</legend>
                    <div class="form-group">
                        <input v-model="output.provisioner" type="text" class="form-control" placeholder="Provisioner">
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Parameters</legend>
                    <div class="form-group">
                        <keyvalue title="Add Parameters" :labels="output.parameters"></keyvalue>    
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Reclaim Policy</legend>
                    <div class="form-group">
                        <select v-model="output.reclaimPolicy" class="form-control">
                        <option v-for="n in reclaimPolicy" :value="n">[[n]]
                            </option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Volume Binding Mode</legend>
                    <div class="form-group">
                        <select v-model="output.volumeBindingMode" class="form-control">
                        <option v-for="n in volumeBindingMode" :value="n">[[n]]
                            </option>
                        </select>
                    </div>
                </fieldset>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6">
                <pre><code class="language-yaml hljs" download="StorageClass.yaml">[[StorageClassYaml]]</code></pre>
                <fieldset v-if="examples">
                    <legend>Examples</legend>
                </fieldset>
            </div>
        </div>
    </div>
    `
};
