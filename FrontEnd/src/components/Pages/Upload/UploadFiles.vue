<template>
  <section class="content">
      <div class="row">
        <div class="col-sm-12">
          <div class="box box-info">
            <div class="box-header">
              <h3 class="box-title">Activity Log Item</h3>
            </div>
            <div class="box-body">
                <!-- Files -->
                <div class="form-group">
                  <label for="picker2" class="col-sm-2 control-label">
                    Upload Files:
                  </label>
                  <div class="col-sm-10">
                    <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
                      <div class="dropbox">
                        <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="input-file">
                          <p v-if="isInitial">
                            Drag your file(s) here to begin<br> or click to browse
                          </p>
                          <p v-if="isSaving">
                            Uploading {{ fileCount }} files...
                          </p>
                      </div>
                    </form>
                    <!--SUCCESS-->
                    <div v-if="isSuccess">
                      <h2>Uploaded {{ uploadedFiles.length }} file(s) successfully.</h2>
                      <p>
                        <a href="javascript:void(0)" @click="reset()">Upload again</a>
                      </p>
                      <ul class="list-unstyled">
                        <li v-for="item in uploadedFiles">
                          <img :src="item.url" class="img-responsive img-thumbnail" :alt="item.originalName">
                        </li>
                      </ul>
                    </div>
                    <!--FAILED-->
                    <div v-if="isFailed">
                      <h2>Uploaded failed.</h2>
                      <p>
                        <a href="javascript:void(0)" @click="reset()">Try again</a>
                      </p>
                      <pre>{{ uploadError }}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
    </div>
  </section>
<!-- /.content -->
</template>

<script>
import Upload from '../../../api/file-upload.service.js'

export default {
  data () {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos',
      responseSuccess: false,
      responseError: false
    }
  },
  computed: {
    isInitial () {
      return this.currentStatus === 0
    },
    isSaving () {
      return this.currentStatus === 1
    },
    isSuccess () {
      return this.currentStatus === 2
    },
    isFailed () {
      return this.currentStatus === 3
    }
  },
  methods: {
    reset () {
      // reset form to initial state
      this.currentStatus = 0
      this.uploadedFiles = []
      this.uploadError = null
    },
    save (formData) {
      // upload data to the server
      this.currentStatus = 1

      Upload.uploadFile(formData)
       .then(x => {
         this.uploadedFiles = [].concat(x)
         this.currentStatus = 2
       })
       .catch(err => {
         this.uploadError = err.response
         this.currentStatus = 3
       })
    },
    filesChange (fieldName, fileList) {
     // handle file changes
      const formData = new FormData()

      if (!fileList.length) return

     // append the files to FormData
      Array
       .from(Array(fileList.length).keys())
       .map(x => {
         formData.append(fieldName, fileList[x], fileList[x].name)
       })

     // save it
      console.log(formData)
      this.save(formData)
    }
  },
  mounted () {
    this.reset()
  },
  created () {

  }
}
</script>

<!-- SASS styling -->
<style lang="scss">
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>
