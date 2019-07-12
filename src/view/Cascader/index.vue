<template>
  <div class="el-cascader">
    <div>
      <ul>
        <Items v-for="(model, index) in list" :model="model" :key="index"></Items>
      </ul>
    </div>
    <div class="Select">
      <h1>选择器</h1>
      <SelectDown :selectList="selectArr" attrVal='name' :defaultVal="defaultVal" @selectval="selectval"></SelectDown>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Items from './item'
export default {
  name: 'cascader',
  data() {
    return {
      selectArr:[
        {index:0,name:'平台场景管理'},
        {index:1,name:'渠道管理'},
        {index:2,name:'官网后台'},
        {index:3,name:'角色管理'},
        {index:4,name:'个人中心'}
      ],
      defaultVal: '',
      city: [
        {id: 2,name: "黑龙江省",next:[{id: 38,name: "大兴安岭地区",next: null},{id: 47,name: "七台河市",next: null}]},
        {id: 27,name: "陕西",next:[{id: 170,name: "渭南市",next: null},{id: 231,name: "榆林市",next: null}]},
        {id: 30,name: "河南省",next:[{id: 214,name: "信阳市",next: null},{id: 210,name: "开封市",next: null}]},
        {id: 31,name: "江西市",next:[{id: 163,name: "南昌市",next: null},{id: 365,name: "赣州市",next: null}]}
      ],
      list: [
      {
          "id": "1",
          "menuName": "项目管理",
          "childTree": [{
              "menuName": "项目进度",
              "childTree": [{
                  "menuName": "项目一",
                  "childTree": [
                    { "menuName": "详细信息",
                      "childTree":[
                        {
                          "menuName": "详细信555444444444息",
                          "menuName": "22",
                          "menuName": "3344",
                        }
                      ]
                    },
                    
                  ]
              }]
          }, {
              "menuName": "任务安排"
          }]
      }, 
      {
          "id": "2",
          "menuName": "数据统计"
      }, 
      {
          "id": "3",
          "menuName": "人员管理",
          "childTree":[
            {
              "menuName": "张三"
            },
            {
              "menuName": "李四"
            }
          ]
      }]
    }
  },
  created () {

  },
  methods: {
    selectval(data) {
      console.log(data)
    }
  },
  components: {
    Items
  }
}
</script>
<style lang="scss" scoped> 
.el-cascader {
  position: relative;
  margin: 100px;
  font-size: 12px;
  .cascader-input {
    width: 200px;
    height:34px;
    border-radius:4px;
    box-sizing: border-box;
    overflow: hidden;
    border:1px solid rgba(220,223,236,1);
    input {
      width: 90%;
      height: 34px;
      line-height: 34px;
      border: none;
      padding-left: 10px;
      font-size: 12px;
    }
    i {
      display: inline-block;
    }
  }
  .slide-menu {
    max-height:200px;
    position: relative;
    ul.menu-list {
      float: left;
      position: absolute;
      width:150px;
      min-height: 140px;
      max-height:200px;
      background:rgba(255,255,255,1);
      box-shadow:0px 4px 12px 0px rgba(54,68,123,0.22);
      border-radius:4px;
      overflow-y: scroll;
      overflow-x: hidden;
      li {
        width:148px;
        height:34px;
        line-height: 34px;
        padding: 0 6px;
        span {
          display: inline-block;
          width: 88%;
        }
        i {
          width: 10%;
        }
        &:hover {
          cursor: pointer;
          background:rgba(243,245,255,1);
        }
      }
    }
  }
  .Select {
    margin-top: 50px;
  }
}
</style>
