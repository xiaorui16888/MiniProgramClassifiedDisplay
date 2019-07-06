//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 一级分类名称及二级分类名称
    kinds: [{
        name: '初中',
        names: [{
          name: '语文课程',
          message: '初中语文课程',
          cover: '/images/cover (1).jpg'
        }, {
          name: '数学课程',
          message: '初中数学课程',
          cover: '/images/cover (2).jpg'
        }, {
          name: '英语课程',
          message: '初中英语课程',
          cover: '/images/cover (3).jpg'
        }],
        selected: true
      },
      {
        name: '高中',
        names: [{
          name: '语文',
          message: '高中语文课程',
          cover: '/images/cover (4).jpg'
        }, {
          name: '数学',
          message: '高中数学课程',
            cover: '/images/cover (5).jpg'
        }, {
          name: '英语',
          message: '高中英语课程',
            cover: '/images/cover (6).jpg'
        }, {
          name: '物理',
          message: '高中物理课程',
            cover: '/images/cover (7).jpg'
        }, {
          name: '化学',
          message: '高中化学课程',
            cover: '/images/cover (8).jpg'
        }, {
          name: '生物',
          message: '高中生物课程',
            cover: '/images/cover (9).jpg'
        }],
        selected: false
      },
      {
        name: '大学',
        names: [{
            name: '高等数学',
            message: '高等数学课程',
          cover: '/images/cover (7).jpg'
          },
          {
            name: '英语',
            message: '大学英语课程',
            cover: '/images/cover (8).jpg'
          },
          {
            name: '计算机应用基础',
            message: '计算机应用基础课程',
            cover: '/images/cover (3).jpg'
          },
          {
            name: '数字电子技术',
            message: '数字电子技术课程',
            cover: '/images/cover (4).jpg'
          }
        ],
        selected: false

      }
    ],
    // 被选中的分类子项名称
    selected_kind_names: {
      names: [{
        name: '语文课程',
        message: '初中语文课程',
        cover: '/images/cover (1).jpg'
      }, {
        name: '数学课程',
        message: '初中数学课程',
        cover: '/images/cover (2).jpg'
      }, {
        name: '英语课程',
        message: '初中英语课程',
        cover: '/images/cover (3).jpg'
      }]
    }
  },
  //点击一级分类处理函数
  kinds_onclick: function(e) {
    var that = this;
    var kind_index = e.currentTarget.dataset.index; //通过点击获取下标，得到点击的一级分类
    switch (kind_index) {
      case 0:
        that.data.kinds[0].selected = true;
        that.data.kinds[1].selected = false;
        that.data.kinds[2].selected = false;
        break;
      case 1:
        that.data.kinds[0].selected = false;
        that.data.kinds[1].selected = true;
        that.data.kinds[2].selected = false;
        break;
      case 2:
        that.data.kinds[0].selected = false;
        that.data.kinds[1].selected = false;
        that.data.kinds[2].selected = true;
        break;
    }
    that.setData({
      selected_kind_names: that.data.kinds[kind_index], //动态改变二级分类内容 
      kinds: that.data.kinds //动态改变一级分类的样式
    })
  },
  //点击二级分类的处理函数
  kind_onclick: function(e) {
    var that = this;
    var kind_index = e.currentTarget.dataset.index; //获取二级分类的下标
    console.log(that.data.selected_kind_names.names[kind_index].name); //获取点击的二级分类内容
  },
})