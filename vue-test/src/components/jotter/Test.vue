<template>
  <div class="test-table">
    <el-table :data="students" style="width: 100%">
      <el-table-column label="sno" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.sno}}</span>
        </template>
      </el-table-column>
      <el-table-column label="sname" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.sname}}</span>
        </template>
      </el-table-column>
      <el-table-column label="age" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.age}}</span>
        </template>
      </el-table-column>
      <el-table-column label="major" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.major}}</span>
        </template>
      </el-table-column>
      <el-table-column label="operation" width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="editStudent(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deleteStudent(scope.row.sno)">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot="header" slot-scope="scope">
          <el-button
            size="mini"
            icon="el-icon-plus"
            type="primary"
            circle
            @click="dialogVisible = true">
          </el-button>

          <el-dialog
            title="添加学生"
            :visible.sync="dialogVisible"
            class="student-dialog"
            :model="studentForm"
            append-to-body>
            <el-form>
              <el-form-item label="学生编号">
                <el-input type="text" v-model="studentForm.sno"
                          auto-complete="off" placeholder="学生编号" v-bind:disabled="disabled"></el-input>
              </el-form-item>
              <el-form-item label="学生姓名">
                <el-input type="text"  v-model="studentForm.sname"
                          auto-complete="off" placeholder="学生姓名"></el-input>
              </el-form-item>
              <el-form-item label="学生年龄">
                <el-input type="text" v-model="studentForm.age"
                          auto-complete="off" placeholder="学生年龄"></el-input>
              </el-form-item>
              <el-form-item label="学生专业">
                <el-input type="text" v-model="studentForm.major"
                          auto-complete="off" placeholder="学生专业"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary"  @click="onSubmit">提交</el-button>
            </div>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default{
      name: "Test",
      data(){
        return{
          dialogVisible:false,
          disabled:false,
          students:[],
          studentForm:{
            sno:'',
            sname:'',
            age:'',
            major:'',
          }
        }
      },

      mounted() {
        this.loadStudent();
      },

      methods:{
        loadStudent(){
          var _this = this
          this.$axios.get('/students').then(resp=>{
            if(resp && resp.status === 200){
              _this.students = resp.data;
            }
          })
        },
        deleteStudent(sno){
          this.$confirm('此操作将永久删除该学生信息，是否继续','提示',{
            confirmButtonText:'确定',
            cancelButtonText:'取消',
            type:'cancel'
          }).then(() =>{
            this.$axios
              .post('/deleteStudent',{sno:sno}).then(resp =>{
                console.log(resp.status)
                if(resp && resp.status === 200){
                  this.loadStudent()
                }
              })
          }).catch(()=>{
          })
        },
        onSubmit(){
          var _this = this
          this.disabled = false
          this.$axios.post("/students",{
            sno:this.studentForm.sno,
            sname:this.studentForm.sname,
            age:this.studentForm.age,
            major:this.studentForm.major
          }).then(resp =>{
            if(resp.status === 200){
              this.dialogVisible = false
              this.loadStudent()
            }
          }).catch(() =>{
          })
        },
        editStudent(scope){
          this.dialogVisible = true
          this.disabled=true
          this.studentForm={
            sno:scope.sno,
            sname:scope.sname,
            age:scope.age,
            major:scope.major,
          }
        }
      }
    }
</script>

<style scoped>
  .test-table{
    width: 65%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
  }
  .student-dialog{
    margin: 90px auto;
    width: 50%;
    height: 110%;
    margin: -40px auto;
  }
</style>
