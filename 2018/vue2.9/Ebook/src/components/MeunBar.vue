<template>
    <div class="meun-up">
      <transition name="slide-up">
        <div class="meun-wrapper" v-show="ifTitleAndMenuShow" :class="{'hide-box-shadow':ifSettingShow || !ifTitleAndMenuShow}">
          <div class="icon-wrapper">
            <span class="icon-caidan iconfont" @click="showSetting(3)"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-tiaoshi iconfont" @click="showSetting(2)"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-liangdu iconfont" @click="showSetting(1)"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-zitidaxiaoim iconfont" @click="showSetting(0)"></span>
          </div>
        </div>
      </transition>
      <transition name="slide-up">
        <div class="setting-wrapper" v-show="ifSettingShow">
          <!-- 设置字体 -->
          <div class="setting-font-size" v-if="showTag===0">
              <div class="preview" :style="{fontSize:fontSizeList[0].fontSize+'px'}">A</div>
              <div class="select">
                <div class="select-wrapper" v-for="(item,index) in fontSizeList" :key="index" @click="setFontSize(item.fontSize)">
                  <div class="line"></div>
                  <div class="point-wrapper">
                    <div class="point" v-show="deFaultFontSize===item.fontSize">
                      <div class="small-point"></div>
                    </div>
                  </div>
                  <div class="line"></div>
                </div>
              </div>
              <div class="preview" :style="{fontSize:fontSizeList[fontSizeList.length-1].fontSize+'px'}">A</div>

          </div>
          <!-- 设置皮肤 -->
          <div class="setting-theme" v-else-if="showTag===1">
            <div class="setting-theme-item" v-for="(item,index) in themeList" :key="index" @click="setTheme(index)">
              <div class="preview" :style="{background:item.style.body.background}" :class="{'no-border':item.style.body.background!=='#fff'}"></div>
              <div class="text" :class="{'selected':index===defaultTheme}">{{item.name}}</div>
            </div>
          </div>
          <!-- 设置进度 -->
          <div class="setting-progress" v-else-if="showTag===2">
              <div class="progress-wrapper">
                <input class="progress" type="range"
                                        max="100"
                                        min="0"
                                        step="1"
                                        @change="onProgressChange($event.target.value)"
                                        @input="onProgressInput($event.target.value)"
                                        :value="progress"
                                        :disabled="!bookAvailable"
                                        ref="progressBt" >
              </div>
              <div class="text-wrapper">
                <span>{{bookAvailable?progress+'%':'加载中...'}}</span>
              </div>
          </div>
        </div>
      </transition>

      <content-view :ifShowContent="ifShowContent"
                    v-show="ifShowContent"
                    :navigation="navigation"
                    :bookAvailable="bookAvailable"
                    @jumpTo="jumpTo">
      </content-view>

      <transition name="fade">
        <div class="content-mask" v-show="ifShowContent" @click="hideContent">
        </div>
      </transition>

    </div>

</template>

<script>
  import ContentView from '@/components/Content'
  export default {
    components:{
      ContentView
    },
    //props  子组件使用父组件数据
    props:{
      ifTitleAndMenuShow:{
        type:Boolean,
        default:false
      },
      fontSizeList:Array,
      deFaultFontSize:Number,
      themeList:Array,
      defaultTheme:Number,
      bookAvailable:false,
      navigation:{}

    },
    data(){
     return {
       ifSettingShow:false,
       showTag:0,
       progress:0,
       ifShowContent:false
     }
    },
    methods:{
      hideContent(){
        this.ifShowContent=false;
      },
      jumpTo(target){
        this.$emit('jumpTo',target)
        this.hideContent();
      },
      // 进度条拖动时触发事件
      onProgressInput(progress){
        this.progress=progress;
        this.$refs.progressBt.style.backgroundSize= `${this.progress}% 100%`;
      },
      // 进度条松开后触发事件,根据进度条数值转到指定位置
      onProgressChange(progress){
        this.$emit('onProgressChange',progress);
      },
      //设置皮肤
      setTheme(index){
        this.$emit("setTheme",index);
      },
      hideTitle(index){
        this.$emit("hideTitle");
      },
      showSetting(index){
        this.showTag=index;
        if(index===3){
          this.ifShowContent=true;
          this.ifSettingShow=false;
          this.$emit('hideTitle');
        }else{
          this.ifSettingShow=true;
        }
      },
      hideSetting(){
        this.ifSettingShow=false;
      },
      setFontSize(e){
        this.$emit("setFontSize",e);
      }
    },
    mounted(){
      console.log(this.navigation,"菜单页加载完");
    }
  }
</script>

<style lang='scss' scoped>
  @import '../assets/style/global';
  .meun-up{
    .meun-wrapper{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.96rem;
      z-index: 102;
      display: flex;
      background: #fff;
      box-shadow: 0 -0.16rem 0.16rem rgba(0,0,0,0.2);
      .icon-wrapper{
        flex: 1;
        @include center();
      }
      &.hide-box-shadow{
        box-shadow: none;
      }
    }
    .setting-wrapper{
      position: absolute;
      left: 0;
      bottom:0.96rem;
      height:1.2rem;
      width: 100%;
      background: white;
      z-index: 101;
      box-shadow: 0 -0.16rem 0.16rem rgba(0,0,0,0.2);
      .setting-font-size{
        display: flex;
        width: 100%;
        height: 100%;
        .preview{
          flex: 0 0 0.8rem;
          @include center();
        }
        .select{
          display: flex;
          flex: 1;
          .select-wrapper{
            flex: 1;
            display: flex;
            align-items: center;
            &:first-child{
              .line{
                &:first-child{
                  border-top: none;
                }
              }
            }
            &:last-child{
              .line{
                &:last-child{
                  border-top:none;
                }
              }
            }
            .line{
              flex: 1;
              height: 0;
              border-top: 1px solid #ccc;

            }
            .point-wrapper{
              flex: 0 0 0;
              width: 0;
              height: 0.14rem;
              border-left: 1px solid #ccc;
              position: relative;
              .point{
                position: absolute;
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 100%;
                background: #fff;
                border:1px solid #eee;
                box-shadow: 0 0.04rem 0.04rem rgba(0,0,0,0.2);
                left: -0.2rem;
                top:-0.1rem;
                @include center();
                .small-point{
                  display: flex;
                  width: 0.1rem;
                  height: 0.1rem;
                  background: black;
                  border-radius: 50%;
                }
              }
            }

          }
        }

      }
      .setting-theme{
        width: 100%;
        height: 100%;
        display: flex;
        .setting-theme-item{
            flex: 1;
            width: 100%;
            height: 100%;
            padding:0.1rem;
            flex-direction: column;
            display: flex;
            box-sizing: border-box;
          .preview{
            flex: 1;
            border: 1px solid #eee;
          }
          .no-border{
            border: none;
          }
          .text{
            flex: 0 0 0.4rem;
            font-size: 0.28rem;
            color:#ccc;
            @include center();
            &.selected{
              color: #333;
            }
          }
        }
      }
      .setting-progress{
        position: relative;
        width: 100%;
        height: 100%;
        .progress-wrapper{
          display: flex;
          width: 100%;
          height: 100%;
          @include center();
          padding: 0 0.6rem;
          box-sizing: border-box;
          .progress{
            width: 100%;
            -webkit-appearance: none;
            height: 0.04rem;
            background: -webkit-linear-gradient(#999,#999) no-repeat,#ddd;
            background-size: 0% 100%;
            &:focus{
              outline: none;
            }
            &::-webkit-slider-thumb{
              -webkit-appearance: none;
              height: 0.4rem;
              width: 0.4rem;
              border-radius: 50%;
              background:white;
              box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
              border:1px solid #ddd;
            }
          }
        }
        .text-wrapper{
          display: flex;
          flex: 0 0 0.2rem;
          font-size: 0.28rem;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 0.4rem;
          @include center();
        }


      }
    }
    .content-mask{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 101;
      display: flex;
      width: 100%;
      height: 100%;
      background: rgba(51, 51, 51, .8)
    }
  }

</style>
