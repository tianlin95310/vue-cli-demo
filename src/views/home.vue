<template>

  <div class="root">
    <ul class="nav">

      <li v-for="menu in menus" class="parItem">
        <div @click="show(menu)" :class="['menuItem', menu.isOpen ? 'selected' : '']">
          <span class="menuTitle">{{menu.menuTitle}}</span>
          <i :class="['fa', 'fa-chevron-down', menu.isOpen ? 'faOpen' : 'faClose']"></i>
        </div>

        <ul :class="menu.isOpen === true ? 'submenuShow' : 'submenuClose'">
          <li v-for="subMenu in menu.subMenus" :key="subMenu.id" @click="onNavClick(subMenu)">
            <div :class="menu.isOpen === true ? 'menuItem' : 'menuItemClose'">
              <span class="menuTitle">{{subMenu.menuTitle}}</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>

    <div class="level1-route">
      <router-view>
      </router-view>
    </div>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        menus: [
          {
            menuTitle: '测试vue的特性',
            isOpen: false,
            subMenus: [{
              menuTitle: '子组件更改父组件的data属性',
              id: 101,
              goToPage: 'testChildModP'
            }, {
              menuTitle: 'vue的生命周期方法',
              id: 102,
              goToPage: 'vueLifecycle'
            }, {
              menuTitle: 'vue的transition动画',
              id: 103,
              goToPage: 'vueTransition'
            }, {
              menuTitle: 'add',
              id: 104
            }]
          },
          {
            menuTitle: '测试CSS的属性',
            isOpen: false,
            subMenus: [{
              menuTitle: 'Transition过渡和Transform变换',
              id: 202,
              goToPage: 'testTransition'
            }, {
              menuTitle: 'animation动画',
              id: 203,
              goToPage: 'testAnimation'
            }, {
              menuTitle: 'css属性探索',
              goToPage: 'testCssStyle',
              id: 201
            }]
          },
          {
            menuTitle: '测试JavaScript属性',
            isOpen: false,
            subMenus: [{
              menuTitle: 'js对象的属性',
              id: 301,
              goToPage: 'testJsListAndMap'
            }, {
              menuTitle: '集合操作',
              id: 302,
              goToPage: 'listOperate'
            }, {
              menuTitle: '函数',
              id: 303,
              goToPage: 'func'
            }, {
              menuTitle: 'add',
              id: 304
            }]
          },
          {
            menuTitle: '工具的使用',
            isOpen: false,
            subMenus: [{
              menuTitle: '同步和异步的调用',
              id: 401,
              goToPage: 'testSyncAndAsync'
            }, {
              menuTitle: '测试async和await的方法',
              id: 402,
              goToPage: 'asyncAndAwait'
            }, {
              menuTitle: '日期的格式化',
              id: 403,
              goToPage: 'dateFormat'
            }, {
              menuTitle: '字符串的处理',
              id: 404,
              goToPage: 'stringDealwith'
            }]
          },
          {
            menuTitle: '练手小项目',
            isOpen: false,
            subMenus: [
              {
                menuTitle: '画出扑克牌',
                id: 501,
                goToPage: 'drawPuke'
              },
              {
                menuTitle: '画出扑克牌用Canvas',
                id: 502,
                goToPage: 'drawPukeInCanvas'
              },
              {
                menuTitle: '金字塔扑克牌游戏',
                id: 503,
                goToPage: 'pukegame1'
              },
              {
                menuTitle: '斗地主',
                id: 504,
                goToPage: 'pukegame2'
              }
            ]
          }
        ]
      }
    },
    methods: {
      onNavClick (obj) {
        if (obj.goToPage && obj.goToPage !== '') {
          this.$router.push('/' + obj.goToPage)
        }
      },
      show (menu) {
        this.menus.forEach(item => {
          if (item.menuTitle === menu.menuTitle) {
            item.isOpen = !item.isOpen
          } else {
            item.isOpen = false
          }
        })
      }
    },
    beforeCreate: function () {
      console.log('home beforeCreate')
    },
    created () {
      console.log('home created')
    },
    beforeMount () {
      console.log('home beforeMount')
    },
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内
    mounted () {
      console.log('home mounted')
      console.log('home mounted ' + this.$el)

      this.$nextTick(function () {
        console.log('home mounted $nextTick --- ' + this.$el)
      })
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
    beforeUpdate () {
      console.log('home beforeUpdate')
    },
    updated () {
      console.log('home updated')
    },
    // keep-alive 组件激活时调用,该钩子在服务器端渲染期间不被调用
    activated () {
      console.log('home activated')
    },
    // keep-alive 组件停用时调用。该钩子在服务器端渲染期间不被调用。
    deactivated () {
      console.log('home deactivated')
    },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy () {
      console.log('home beforeDestroy')
    },
    destroyed () {
      console.log('home destroyed')
    },
    errorCaptured () {
      console.log('home errorCaptured')

      return false
    }
  }
</script>

<style lang="less" scoped>

  @import "../assets/css/anim.css";
  @import "http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css";

  .faOpen {

    transition: all 0.5s;
    -moz-transition: all 0.5s; /* Firefox 4 */
    -webkit-transition: all 0.5s; /* Safari and Chrome */
    -o-transition: all 0.5s; /* Opera */
  }

  .faClose {

    transform: rotate(-180deg);
    -ms-transform: rotate(-180deg); /* IE 9 */
    -webkit-transform: rotate(-180deg); /* Safari and Chrome */
    -o-transform: rotate(-180deg); /* Opera */
    -moz-transform: rotate(-180deg); /* Firefox */

    transition: all 0.5s;
    -moz-transition: all 0.5s; /* Firefox 4 */
    -webkit-transition: all 0.5s; /* Safari and Chrome */
    -o-transition: all 0.5s; /* Opera */

  }

  .submenuClose {
    height: 0px;
    display: block;
    animation: fadeinB;
    animation-duration: 2s;
  }

  .submenuShow {
    height: auto;
    width: 100%;
    display: block;
    animation: fadeinB;
    animation-duration: 2s;
  }

  .selected {
    background-color: aqua;
  }

  .menuTitle {
    font-size: 12px;
    text-align: center;
  }

  .fa {
    opacity: 0.8;
    float: right;
  }

  /**
  在这里写的样式会往下传递，router-view里面的div会有该样式
  div{
    width: 100px;
  }
   */

  .root {
    width: 100%;

    // 在这里写的样式会往下传递，router-view里面的如果有引用level1-route会有该样式
    .level1-route {
      padding: 20px;
      height: 100%;
      width: 85%;
      float: right;
    }

    .nav {
      float: left; /*元素脱离文档流，不存在块行属性，只要行内剩余的控件足够就在该行显示，不换行*/
      /*display: inline-block;*/ /*左边的块作为行内块元素，他不进行换行*/
      width: 15%;
      height: 100%;
      background-color: lightgrey;

      .parItem {
        list-style: none;
        display: list-item;

        .menuItem {
          padding: 8px;
          display: block;
        }

        .menuItemClose {
          display: none;
        }

        .menuItem:hover {
          padding: 8px;
          background-color: aqua;
        }
      }

    }
  }

</style>
