const Json = {
  columns(that) {
    return [
      [
        {
          title: '序号',
          width: '10%',
          tip: true,
          key: 'index',
          rule (v) {
            return v.index
          }
        },
        {
          title: '姓名',
          width: '20%',
          tip: true,
          key: 'username',
          rule (v) {
            return v.username
          }
        },
        {
          title: '省份',
          width: '10%',
          key: 'province',
          rule (v) {
            return v.province
          }
        },{
          title: '城市',
          width: '10%',
          tip: true,
          key: 'city',
          rule (v) {
            return v.city
          }
        },
        {
          title: '地址',
          width: '20%',
          tip: true,
          key: 'adress',
          rule (v) {
            return v.adress
          }
        },
        {
          title: '邮编',
          width: '20%',
          key: 'email',
          rule (v) {
            return v.email
          }
        },
        {
          title: '操作',
          width: '10%',
          key: 'operation',
          render:[
            {
              name: '编辑',
              width: '50%',
              color: '#1977dc',
              action:function(v) {
                that.edit(v)
              }
            },
            {
              name: '新增',
              width: '50%',
              color: '#1977dc',
              action:function(v) {
                that.addData(v)
              }
            }
          ]
        }
      ]
    ]
  }
}

export {Json}