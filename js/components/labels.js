export default  {
  delimiters: ["[[", "]]"],
  props: ["title","labels"],
  methods: {
    addLabels: function() {
      console.log(Array.isArray(this.labels));
      this.labels.push({
        name: "",
        value: ""
      });
    },
    deleteLabels: function(index) {
      this.labels.splice(index, 1);
    }
  },
  template: `
        <div>
            <div class="form-group">
                <a href="javascript:void(0)" class="btn btn-primary btn-lg btn-block btn-sm" v-on:click="addLabels()">
                [[title]]</a>
            </div>
            <div class="form-row" v-for="(label,index) in labels">
                <div class="form-group col-5">
                    <input type="text" v-model="labels[index].name" class="form-control" placeholder="Key">
                </div>
                <div class="form-group col-6">
                    <input type="text" v-model="labels[index].value" class="form-control" placeholder="Value">
                </div>
                <div class="form-group col-1">
                    <a href="javascript:void(0)" v-on:click="deleteLabels(index)">
                      <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>
        </div>
    `
};