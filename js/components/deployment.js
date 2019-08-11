import { commonArray, commonObj } from "./common.js";

export default {
  delimiters: ["[[", "]]"],
  components: {
    commonArray,
    commonObj,
    container: () => import("./container.js")
  },
  data() {
    return {
      output: {
        apiVersion: "",
        kind: "Deployment",
        metadata: {
          name: "",
          namespace: "default",
          labels: []
        },
        spec: {
          replicas: 1,
          selector: {
            matchLabels: []
          },
          template: {
            metadata: {
              labels: []
            },
            spec: {
              containers: []
            }
          }
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
    },
    randomString(length) {
      return Math.round(
        Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
      )
        .toString(36)
        .slice(1);
    },
    addContainer: function() {
      this.output.spec.template.spec.containers.push({
        name: "",
        image: ""
      });
    },
    deleteContainer: function(index) {
      this.output.spec.template.spec.containers.splice(index, 1);
    }
  },
  beforeMount: function() {
    if (localStorage.getItem("deployment") !== null) {
      this.output = JSON.parse(localStorage.getItem("deployment"));
    }
  },
  computed: {
    DeploymentYaml: function() {
      var tmp = JSON.parse(JSON.stringify(this.output));

      tmp.spec.template.metadata.labels = tmp.spec.template.metadata.labels.concat(
        tmp.spec.selector.matchLabels
      );

      //   tmp.metadata.name = tmp.metadata.name + "deployment-" + this.randomString(6);
      tmp.metadata.labels = this.cleankey(tmp.metadata.labels);
      tmp.spec.selector.matchLabels = this.cleankey(
        tmp.spec.selector.matchLabels
      );
      tmp.spec.template.metadata.labels = this.cleankey(
        tmp.spec.template.metadata.labels
      );

      // form value store in localstorage
      //   localStorage.setItem("deployment", JSON.stringify(this.output));
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
            <div class="form-group">
                <label>Metadata Name</label>
                <input v-model="output.metadata.name" type="text" class="form-control" placeholder="Metadata Name">
            </div>
            <div class="form-group">
                <label>NameSpace</label>
                <input v-model="output.metadata.namespace" type="text" class="form-control" placeholder="NameSpace">
            </div>
            <common-obj title="Add labels" :labels="output.metadata.labels"></common-obj>
        </fieldset>
        <fieldset>
            <legend>Spec</legend>
            <div class="form-group">
                <label>Replicas ([[output.spec.replicas]])</label>
                <input type="range" class="form-control-range col-md-12" v-model.number="output.spec.replicas" min="1" max="100" />
            </div>
        </fieldset>
        <fieldset>
            <legend>Selector - Match Labels</legend>
            <common-obj title="Add Labels" :labels="output.spec.selector.matchLabels"></common-obj>
        </fieldset>
        <fieldset>
            <legend>Template</legend>
            <div class="form-group">
                <label>Metadata</label>
                <input v-model="output.spec.template.metadata.name" type="text" class="form-control"
                    placeholder="Metadata">
            </div>
            <fieldset>
                <legend>Metadata - Labels</legend>
                <common-obj title="Add Labels" :labels="output.spec.template.metadata.labels"></common-obj>
            </fieldset>
            <fieldset>
                <legend>Spec - Container</legend>
                <div class="form-group mt-2">
                    <a href="javascript:void(0)" class="btn btn-primary btn-lg btn-block btn-sm" v-on:click="addContainer()">Add
                        Container</a>
                </div>
                <fieldset class="col-md-12" v-for="(el,index) in output.spec.template.spec.containers">
                    <legend>Container - [[index + 1]]</legend>
                    <container :node="output.spec.template.spec.containers[index]"></container>
                    <div class="form-group mt-2">
                        <a href="javascript:void(0)" class="btn btn-danger btn-lg btn-block btn-sm"
                            v-on:click="deleteContainer(index)">delete</a>
                    </div>
                </fieldset>
            </fieldset>
        </fieldset>
        </div>
        <div class="col-md-6 col-lg-6 col-sm-6">
            <pre><code class="language-yaml hljs" download="deployment.yaml">[[DeploymentYaml]]</code></pre>
        </div>
    </div>
    `
};
