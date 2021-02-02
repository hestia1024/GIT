<template>
  <div>
    <div class="fiMain">
      <el-menu
        default-active="0"
        @select="handleSelect"
        mode="horizontal"
        v-ref="ThreadType">
        <el-menu-item index="0" class="fiMain-item">
          <el-link type="primary" icon="el-icon-s-home" size="small">全部</el-link>
        </el-menu-item>
        <el-menu-item index="1" class="fiMain-item">
          <el-link type="primary" icon="el-icon-s-grid" size="small">{{ThreadType[0].type}}</el-link>
        </el-menu-item>
        <el-menu-item index="2" class="fiMain-item">
          <el-link type="primary" icon="el-icon-s-grid" size="small">{{ThreadType[1].type}}</el-link>
        </el-menu-item>
        <el-menu-item index="3" class="fiMain-item">
          <el-link type="primary" icon="el-icon-s-grid" size="small">{{ThreadType[2].type}}</el-link>
        </el-menu-item>
        <el-menu-item index="4" class="fiMain-item">
          <el-link type="primary" icon="el-icon-s-grid" size="small">{{ThreadType[3].type}}</el-link>
        </el-menu-item>
        <el-menu-item index="5" class="fiMain-item">
          <el-link type="primary" icon="el-icon-s-grid" size="small">{{ThreadType[4].type}}</el-link>
        </el-menu-item>
        <el-menu-item index="6" class="fiMain-item">
          <el-link type="primary" icon="el-icon-s-grid" size="small">{{ThreadType[5].type}}</el-link>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="flMain">
      <el-card class="table">
        <el-tabs
          v-model="activeName"
          type="card"
          @tab-click="handleClick">
          <el-tab-pane label="最新" name="first" @tab-click="handleClick">
            <table >
              <th class="th-title1">标题</th>
              <th class="th-title2">作者</th>
              <th class="th-title2">回复/查看</th>
<!--              <th class="th-title2">最后发言</th>-->
              <el-divider></el-divider>
              <tr v-for="item in NewThread.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                <td class="flMain-item-title1">
                  <el-link
                    :underline="false"
                    class="flMain-item-title"
                    v-on:click="detail(item.id)">
                    <i class="el-icon-document-copy"></i>
                    <span>{{item.title}}</span>
                  </el-link>
                </td>
                <td class="flMain-item-title2">
                  <span>{{item.user.username}}</span>
                  <br>
                  <span>{{ item.time | relativeTime }}</span>
                </td>
                <td class="flMain-item-title2">
                  <span>{{item.post}}</span>
                  <br>
                  <span>{{item.click}}</span>
                </td>
<!--                <td class="flMain-item-title2">-->
<!--                  <span></span>-->
<!--                  <br>-->
<!--                  <span></span>-->
<!--                </td>-->
              </tr>
            </table>
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="pagesize"
              layout="prev, pager, next, jumper"
              :total="NewThread.length">
            </el-pagination>
          </el-tab-pane >
          <el-tab-pane label="热门" name="second" @tab-click="handleClick">
            <table>
              <th class="th-title1">标题</th>
              <th class="th-title2">作者</th>
              <th class="th-title2">回复/查看</th>
              <th class="th-title2">最后发言</th>
              <el-divider></el-divider>
              <tr v-for="item in HotThread.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                <td class="flMain-item-title1">
                  <el-link
                    :underline="false"
                    class="flMain-item-title"
                    v-on:click="detail(item.id)">
                    <i class="el-icon-document-copy"></i>
                    <span>{{item.title}}</span>
                  </el-link>
                </td>
                <td class="flMain-item-title2">
                  <span>{{item.user.username}}</span>
                  <br>
                  <span>{{ item.time | relativeTime }}</span>
                </td>
                <td class="flMain-item-title2">
                  <span>{{item.post}}</span>
                  <br>
                  <span>{{item.click}}</span>
                </td>
                <td class="flMain-item-title2">
                  <span>user</span>
                  <br>
                  <span>time</span>
                </td>
              </tr>
            </table>
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="pagesize"
              layout="prev, pager, next, jumper"
              :total="NewThread.length">
            </el-pagination>
          </el-tab-pane >
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
    export default {
      name: "ForumList",
      data(){
          return{
            NewThread:[],
            HotThread:[],
            ThreadType:[],
            LastReply:[],
            activeName: 'first',
            currentPage:1,
            pagesize:3
          }
      },
      methods: {
        loadNewThread() {
          var _this = this
          this.$axios
            .get('/findThreadOrderByTime')
            .then(resp => {
              if (resp && resp.status === 200) {
                _this.NewThread = resp.data
              }
            })
        },
        loadHotThread() {
          var _this = this
          this.$axios
            .get('/findAllThreadOrderByCP')
            .then(resp => {
              if (resp && resp.status === 200) {
                _this.HotThread = resp.data
              }
            })
        },
        // loadLastReply(id){
        //   var _this = this
        //   this.$axios
        //     .post('/findAllReplyById',
        //       this.$qs.stringify({
        //         'threadId':id
        //       })
        //     )
        //     .then(resp => {
        //       if (resp && resp.status === 200) {
        //           _this.LastReply.push(resp.data)
        //       }
        //     })
        // },
        handleClick(){
          this.currentPage = 1;
        },
        handleSelect(key, keyPath) {
          var _this = this
          this.$axios
            .post('/findAllThreadByType',
              this.$qs.stringify({
                'typeId':key
              })
            )
            .then(resp => {
              if (resp && resp.status === 200) {
                if(key==0){
                  _this.loadNewThread()
                  _this.loadHotThread()
                }else{
                  _this.NewThread = resp.data
                  _this.HotThread = resp.data
                }
                this.handleClick()
              }
            })
        },
        detail(id){
          this.$axios
            .post('/increaseThreadClickNum',
              this.$qs.stringify({
                'id':id
              })
            )
          this.$router.push({
            path:'/forum_detail',
            query:{
              id:id
            }
          })
        },
        loadThreadType() {
          var _this = this
          this.$axios
            .get('/findAllThreadType')
            .then(resp => {
              if (resp && resp.status === 200) {
                _this.ThreadType = resp.data
              }
            })
        },
      },
      created() {
        this.loadThreadType()
        this.loadNewThread()
        this.loadHotThread()
      },
    }
</script>

<style scoped>
  .fiMain{
    float: left;
    margin-left: 20px;
    margin-bottom: 20px;
  }
  .fiMain-item{
    margin-right: 60px;
  }
  .flMain{
    padding-left: 20px;
  }
  .table{
    width: 100%;
  }
  .table th{
    font-size: 18px;
  }
  .th-title1{
    width: 800px;
    text-align: left;
  }
  .th-title2{
    text-align: left;
  }
  .flMain-item-title1{
    font-size: 16px;
    float: left;
    line-height: 50px;
  }
  .flMain-item-title2{
    width: 180px;
  }
  .flMain-item-title2 span{
    float: left;
  }
</style>
