<template>

  <div class="root">
    <div class="nav-div" :style="{width: left}">
      <ul class="nav">

        <li v-for="(menu, index) in menus" class="parItem" :key="index">
          <div @click="show(menu)" :class="['menuItem', menu.isOpen ? 'opened' : '']">
            <span>[{{index + 1}}] {{ menu.menuTitle }}</span>
            <!--fa-chevron-down 使用的网络第三方的样式-->
            <i :class="['fa', 'fa-chevron-down', menu.isOpen ? 'faOpen' : 'faClose']"></i>
          </div>

          <ul :class="[menu.isOpen === true ? 'submenuShow' : 'submenuClose']">
            <li v-for="subMenu in menu.subMenus"
                :key="subMenu.id"
                :title="subMenu.menuTitle"
                :class="['menu-item-common', menu.isOpen === true ? 'menuItemInner' : 'menuItemClose']"
                @click="onNavClick(subMenu)">
              [{{subMenu.id}}] {{ subMenu.menuTitle }}
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!--组件里的样式会给到组件的内容的跟div-->
    <main-content class="level1-route" :style="{paddingLeft: left}" @collapse="collapse"></main-content>

  </div>

</template>

<script>
  import mainContent from '../components/mainContent.vue'
  export default {
    components: {
      mainContent
    },
    data () {
      return {
        menus: [
          {
            menuTitle: '测试vue的特性',
            isOpen: false,
            subMenus: [
              {
                menuTitle: '子组件更改父组件的data属性',
                id: 101,
                goToPage: 'testChildModP'
              },
              {
                menuTitle: 'vue的生命周期方法',
                id: 102,
                goToPage: 'vueLifecycle'
              },
              {
                menuTitle: 'vue的transition动画',
                id: 103,
                goToPage: 'vueTransition'
              },
              {
                menuTitle: '非v-model的组件实现可编辑双向绑定',
                id: 104,
                goToPage: 'selfVModelEle'
              },
              {
                menuTitle: '自定义指令',
                id: 105,
                goToPage: 'selfDirective'
              }
            ]
          },
          {
            menuTitle: '测试CSS的属性',
            isOpen: false,
            subMenus: [
              {
                menuTitle: 'Transition过渡和Transform变换',
                id: 201,
                goToPage: 'testTransition'
              },
              {
                menuTitle: 'animation动画',
                id: 202,
                goToPage: 'testAnimation'
              },
              {
                menuTitle: 'css布局属性探索',
                goToPage: 'testCssStyle',
                id: 203
              },
              {
                menuTitle: 'flex布局',
                goToPage: 'testFlex',
                id: 204
              }
            ]
          },
          {
            menuTitle: '测试JavaScript属性',
            isOpen: false,
            subMenus: [
              {
                menuTitle: 'js对象的属性',
                id: 301,
                goToPage: 'testJsListAndMap'
              },
              {
                menuTitle: '集合操作',
                id: 302,
                goToPage: 'listOperate'
              },
              {
                menuTitle: '函数',
                id: 303,
                goToPage: 'func'
              },
              {
                menuTitle: '解构操作符',
                id: 304,
                goToPage: 'objectAnal'
              },
              {
                menuTitle: '特殊点',
                id: 305,
                goToPage: 'particle'
              }
            ]
          },
          {
            menuTitle: '工具的使用',
            isOpen: false,
            subMenus: [
              {
                menuTitle: '同步和异步的调用',
                id: 401,
                goToPage: 'testSyncAndAsync'
              },
              {
                menuTitle: '测试async和await的方法',
                id: 402,
                goToPage: 'asyncAndAwait'
              },
              {
                menuTitle: '日期的格式化',
                id: 403,
                goToPage: 'dateFormat'
              },
              {
                menuTitle: '字符串的处理',
                id: 404,
                goToPage: 'stringDealwith'
              },
              {
                menuTitle: 'Promise的使用',
                id: 405,
                goToPage: 'promiseUse'
              }
            ]
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
          },
          {
            menuTitle: '自定义控件',
            isOpen: false,
            subMenus: [
              {
                menuTitle: '画出索引视图',
                id: 601,
                goToPage: 'indexView'
              }
            ]
          }
        ],
        left: '18%'
      }
    },
    methods: {
      collapse (isShow) {
        if (isShow) {
          this.left = '18%'
        } else {
          this.left = '12%'
        }
      },
      onNavClick (obj) {
        if (obj.goToPage && obj.goToPage !== '') {
          this.$router.push('/' + obj.goToPage)
        }
      },
      show (menu) {
        this.menus.forEach(item => {
          if (item.menuTitle === menu.menuTitle) {
            item.isOpen = !item.isOpen
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
      console.log('home mounted ' + this.$el)

      this.$nextTick(function () {
        console.log('home mounted $nextTick --- ' + this.$el)
      })
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
    beforeUpdate () {
      // console.log('home beforeUpdate')
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
  /*可直接导入网路的css*/
  @import "http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css";

  @itemHeight: 40px;
  .fa {
    float: right;
    margin-right: 8px;
    line-height: @itemHeight;
  }

  /**
  在这里写的样式会往下传递，router-view里面的div会有该样式
  div{
    width: 100px;
  }
   */
  .root {
    width: 100%;
    height: 100vh;
    position: relative;

    // 在这里写的样式会往下传递，router-view里面的如果有引用level1-route会有该样式
    .level1-route {
      height: 100%;
      width: 100%;
      padding-left: 18%;
      position: absolute;
      transition: padding-left 0.5s ease;
    }

    .nav-div {
      width: 18%;
      height: 100%;
      background-color: var(--primiryColorDark);
      position: fixed;
      color: white;
      font-size: 0.75rem;
      z-index: 100;
      transition: all 0.5s ease;
      .nav::-webkit-scrollbar {
        width: 8px;
      }
      .nav::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: var(--colorInfo);
      }
      .nav::-webkit-scrollbar {
        border-radius: 5px;
        background: #F1F1F1;
      }
      .nav {
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;
        .parItem {
          .opened {
          }
          .faOpen {
            transition: all 0.5s;
            transform: rotate(0deg)
          }
          .faClose {
            transform: rotate(-90deg);
            transition: all 0.5s;
          }

          .submenuClose {
            display: block;
            transition: all 0.5s ease;
          }

          .submenuShow {
            width: 100%;
            display: block;
            transition: all 0.5s ease;
          }
          .menuItem {
            display: block;
            height: @itemHeight;
            line-height: @itemHeight;
            padding-left: 8px;
            transition: all 0.5s ease;
          }
          .menuItem:hover {
            background-color: var(--colorAccent);
          }
          .menu-item-common {
            cursor: pointer;
            background-color: var(--primiryColor);
            padding-left: 16px;
            line-height: @itemHeight;
            transition: all 0.5s ease;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis
          }
          /*text-wrap不被支持，用white-space来定义是否换行*/
          .menuItemInner {
            height: @itemHeight;
          }
          /*对于li元素高度为0是，如果文字还是出现并且重叠时，说明是overflow为可见时，这时需要将隐藏*/
          .menuItemClose {
            height: 0px;
          }
          .menuItemInner:hover {
            background-color: var(--colorAccent);
            margin-left: 1px;
            padding-top: 1px;
            font-size: 1.02em;
          }
        }

      }
    }

  }

</style>
