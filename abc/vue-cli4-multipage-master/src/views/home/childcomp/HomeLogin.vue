<!-- home登录页面 -->
<template>
  <div>
    <transition name="slide-fade">
      <div class="row login-index"  v-show="isshow">
        <!-- 登录界面 -->
        <!-- 菜单 -->
        <div class="login" v-if="detailindex == 0">
          <div class="detail">
            <div @click="detailclick(0)" :class="{ active: detailindex == 0 }">
              登录
            </div>
            <div @click="detailclick(1)" :class="{ active: detailindex == 1 }">
              注册
            </div>
            <div @click="detailclick(2)" :class="{ active: detailindex == 2 }">
              忘记密码
            </div>
          </div>

          <!-- 内容 -->
          <div class="content">
            <div class="col-md-12 text">
              海内存知己 天涯若比邻 欢迎公子回家~
            </div>
            <label class="email">
              <span></span>
              <input type="text" placeholder="您的邮箱" />
            </label>
            <!-- <input type="text" class="col-md-12 email" placeholder="您的邮箱" /> -->
            <label for="" class="password">
              <span></span>
              <input type="text" placeholder="您的密码" />
            </label>
            <!-- <input
            type="password"
            class="col-md-12 password"
            placeholder="密码"
          /> -->
            <label for="" class="yzm">
              <span></span>
              <input type="text" placeholder="验证码" />
            </label>
            <!-- <input type="text" class="col-md-12 yzm" placeholder="验证码" /> -->
            <!-- 字体图标 -->
            <!-- <span class="i-email icon-user"></span> -->
            <!-- <span class="i-password icon-lock"></span> -->
            <!-- <span class="i-yzm icon-shield"></span> -->
          </div>

          <div class="into">登录</div>
          <!-- 关闭登录页面按钮 -->
          <div class="icon-close close" @click="close"></div>
        </div>

        <!-- 注册界面 -->
        <!-- 菜单 -->
        <div class="register" v-if="detailindex == 1">
          <div class="detail">
            <div @click="detailclick(0)" :class="{ active: detailindex == 0 }">
              登录
            </div>
            <div @click="detailclick(1)" :class="{ active: detailindex == 1 }">
              注册
            </div>
            <div @click="detailclick(2)" :class="{ active: detailindex == 2 }">
              忘记密码
            </div>
          </div>

          <!-- 内容 -->
          <div class="row content">
            <div class="col-md-12 text">欢迎注册</div>
            <label class="name">
              <span></span>
              <input type="text" placeholder="您的昵称" />
            </label>
            <!-- <input type="text" class="col-md-12 email" placeholder="您的昵称" /> -->
            <div class="row group1">
              <div class="col-xs-12">
                <label for="">
                  <span></span>
                  <input
                    type="text"
                    class="col-md-12 password"
                    placeholder="您的邮箱"
                  />
                </label>
              </div>
              <div class="col-md-12">
                <label for="">
                  <span></span>
                  <input
                    type="password"
                    class="col-xs-12 password"
                    placeholder="密码"
                  />
                </label>
              </div>
            </div>

            <div class="row group2">
              <div class="col-xs-12">
                <label for="">
                  <span></span>
                  <input
                    type="text"
                    class="col-md-12 password"
                    placeholder="邮箱验证码"
                  />
                </label>
              </div>
              <div class="col-md-12">
                <label for="">
                  <span></span>
                  <button type="button" class="btn btn-info">发送验证码</button>
                </label>
              </div>
            </div>
          </div>

          <div class="into">注册</div>
          <!-- 关闭登录页面按钮 -->
          <div class="icon-close close" @click="close"></div>
        </div>

        <!-- 忘记密码界面 -->
        <div class="forget" v-if="detailindex == 2">
          <div class="detail">
            <div @click="detailclick(0)" :class="{ active: detailindex == 0 }">
              登录
            </div>
            <div @click="detailclick(1)" :class="{ active: detailindex == 1 }">
              注册
            </div>
            <div @click="detailclick(2)" :class="{ active: detailindex == 2 }">
              忘记密码
            </div>
          </div>

          <!-- 内容 -->
          <div class="row content">
            <div class="col-md-12 text">
              如果您忘记了账号密码，您可以通过账号邮箱来重置密码。请输入您的账号邮箱，我们将会发送一封确认邮件，并根据提示重置您的密码。
            </div>
            <label class="email">
              <span></span>
              <input type="text" placeholder="您的邮箱" />
            </label>

            <div class="row group1">
              <div class="col-xs-12">
                <label for="">
                  <span></span>
                  <input
                    type="text"
                    class="col-md-12 password"
                    placeholder="邮箱验证码"
                  />
                </label>
              </div>
              <div class="col-md-12">
                <label for="">
                  <span></span>
                  <button type="button" class="btn btn-info">发送验证码</button>
                </label>
              </div>
            </div>

            <label class="newpassword">
              <span></span>
              <input type="text" placeholder="您的新密码" />
            </label>
          </div>

          <div class="into">确认更改密码</div>
          <!-- 关闭登录页面按钮 -->
          <div class="icon-close close" @click="close"></div>
        </div>
      </div>
    </transition>

    <div class="bigcover" v-show="isshow"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      detailindex: 0,
      isshow: false,
    };
  },
  methods: {
    //菜单被点击，给相应的索引号
    detailclick(index) {
      this.detailindex = index;
    },

    //关闭
    close() {
      this.isshow = false;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.icon-user:before {
  content: "\e922";
  font-family: "icomoon";
  color: #999;
}

.icon-lock:before {
  content: "\e921";
  font-family: "icomoon";
  color: #999;
}

.icon-shield:before {
  content: "\f132";
  font-family: "icomoon";
  color: #999;
}

.icon-pencil:before {
  content: "\e923";
  font-family: "icomoon";
  color: #999;
}

.icon-at:before {
  content: "\e920";
  font-family: "icomoon";
  color: #999;
}
.icon-key:before {
  content: "\e924";
  font-family: "icomoon";
  color: #999;
}

.icon-nav:before {
  content: "\e90c";
  font-family: "icomoon";
  color: white;
}

.icon-close:before {
  content: "\f00d";
  font-family: "icomoon";
  color: black;
}

.login-index {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}

//登录界面
.login {
  position: relative;
  width: 45rem;
  background-color: #f6f6f5;
  border-radius: 10px;
  overflow: hidden;
  transition: all 1s;
  .detail {
    display: flex;
    width: 50%;
    height: 36px;
    line-height: 36px;
    background-color: #e3e3e3;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 10px;

    div {
      flex: 1;
      text-align: center;
    }
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width: 100%;

    .text {
      flex: 1;
      margin-left: 15px;
      margin-right: 15px;
      color: #717171;
      font-size: 1rem;
    }

    input {
      flex: 1;
      margin-top: 5px;
      height: 100%;
      border-radius: 10px;
      outline: none;
      transition: all 0.6s;
      border: 1px solid #e1e1e1;
      margin-left: 15px;
      margin-right: 15px;
      padding-left: 20px;
      font-size: 1rem;
      color: black;
    }

    input:focus {
      border: 1px solid #0099cc;
    }

    .email {
      position: relative;
      span {
        position: absolute;
        top: 3px;
        left: 2rem;
        font-family: "icomoon";
      }
    }

    .password {
      position: relative;
      span {
        position: absolute;
        top: 3px;
        left: 2rem;
        font-family: "icomoon";
      }
    }

    .yzm {
      position: relative;
      span {
        position: absolute;
        top: 3px;
        left: 2rem;
        font-family: "icomoon";
      }
    }

    .i-email {
      position: absolute;
      top: 21px;
      left: 20px;
    }
    .i-password {
      position: absolute;
      top: 44px;
      left: 20px;
    }
    .i-yzm {
      position: absolute;
      top: 67px;
      left: 21px;
    }
  }
  .into {
    width: 100%;
    text-align: center;
    color: white;
    background-color: #4caf50;
    margin-top: 15px;
    height: 36px;
    line-height: 36px;
  }
}

//注册界面
.register {
  position: relative;
  width: 45rem;
  background-color: #f6f6f5;
  border-radius: 10px;
  overflow: hidden;
  .detail {
    display: flex;
    width: 50%;
    height: 36px;
    line-height: 36px;
    background-color: #e3e3e3;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 10px;

    div {
      flex: 1;
      text-align: center;
    }
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width: 100%;

    .text {
      flex: 1;
      margin-left: 15px;
      margin-right: 15px;
      color: #717171;
      font-size: 1rem;
    }

    input {
      flex: 1;
      margin-top: 5px;
      height: 100%;
      border-radius: 10px;
      outline: none;
      transition: all 0.6s;
      border: 1px solid #e1e1e1;
      margin-left: 15px;
      margin-right: 15px;
      padding-left: 20px;
      font-size: 1rem;
      color: black;
    }

    input:focus {
      border: 1px solid #0099cc;
    }

    .name {
      position: relative;
      span {
        position: absolute;
        top: 3px;
        left: 2rem;
        font-family: "icomoon";
      }
    }

    .group1 {
      display: flex;
      div:nth-child(1) {
        flex: 50%;

        label {
          display: flex;
          position: relative;
          span {
            position: absolute;
            top: 5px;
            left: 2rem;
            font-family: "icomoon";
            z-index: 1;
          }
        }
      }
      div:nth-child(2) {
        flex: 50%;
        label {
          display: flex;
          position: relative;
          span {
            position: absolute;
            top: 5px;
            left: 2rem;
            font-family: "icomoon";
            z-index: 1;
          }
        }
      }
    }

    .group2 {
      display: flex;
      align-items: flex-start;
      height: 40px;
      div:nth-child(1) {
        flex: 50%;

        label {
          display: flex;
          position: relative;
          span {
            position: absolute;
            top: 5px;
            left: 2rem;
            font-family: "icomoon";
            z-index: 1;
          }
        }
      }
      div:nth-child(2) {
        flex: 50%;
        margin-top: 3px;
        label {
          display: flex;
          position: relative;
          span {
            position: absolute;
            top: 5px;
            left: 4rem;
            font-family: "icomoon";
            z-index: 1;
            color: white;
          }
          button {
            height: 27px;
            border-radius: 27px;
            line-height: 27px;
            flex: 1;
            padding: 0;
            outline: none;
            font-size: 1rem;
          }
        }
      }
    }
  }
  .into {
    width: 100%;
    text-align: center;
    color: white;
    background-color: #4caf50;
    margin-top: 15px;
    height: 36px;
    line-height: 36px;
  }
}

//忘记密码界面
.forget {
  position: relative;
  width: 45rem;
  background-color: #f6f6f5;
  border-radius: 10px;
  overflow: hidden;
  .detail {
    display: flex;
    width: 50%;
    height: 36px;
    line-height: 36px;
    background-color: #e3e3e3;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 10px;

    div {
      flex: 1;
      text-align: center;
    }
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width: 100%;

    .text {
      flex: 1;
      margin-left: 15px;
      margin-right: 15px;
      color: #717171;
      font-size: 1rem;
    }

    input {
      flex: 1;
      margin-top: 5px;
      height: 100%;
      border-radius: 10px;
      outline: none;
      transition: all 0.6s;
      border: 1px solid #e1e1e1;
      margin-left: 15px;
      margin-right: 15px;
      padding-left: 20px;
      font-size: 1rem;
      color: black;
    }

    input:focus {
      border: 1px solid #0099cc;
    }

    .email {
      position: relative;
      span {
        position: absolute;
        top: 3px;
        left: 2rem;
        font-family: "icomoon";
      }
    }

    .group1 {
      display: flex;
      align-items: flex-start;
      height: 40px;
      div:nth-child(1) {
        flex: 50%;

        label {
          display: flex;
          position: relative;
          span {
            position: absolute;
            top: 5px;
            left: 2rem;
            font-family: "icomoon";
            z-index: 1;
          }
        }
      }
      div:nth-child(2) {
        flex: 50%;
        margin-top: 3px;
        label {
          display: flex;
          position: relative;
          span {
            position: absolute;
            top: 5px;
            left: 4rem;
            font-family: "icomoon";
            z-index: 1;
            color: white;
          }
          button {
            height: 27px;
            border-radius: 27px;
            line-height: 27px;
            flex: 1;
            padding: 0;
            outline: none;
            font-size: 1rem;
          }
        }
      }
    }

    .newpassword {
      position: relative;
      span {
        position: absolute;
        top: 3px;
        left: 2rem;
        font-family: "icomoon";
      }
    }

    .icon-email {
      position: absolute;
      top: 3.8rem;
      left: 20px;
    }
    .icon-password {
      position: absolute;
      top: 66px;
      left: 20px;
    }
    .icon-yzm {
      position: absolute;
      top: 92px;
      left: 20px;
    }
    .i-senout {
      position: absolute;
      top: 67px;
      left: 280px;
    }
  }
  .into {
    width: 100%;
    text-align: center;
    color: white;
    background-color: #4caf50;
    margin-top: 15px;
    height: 36px;
    line-height: 36px;
  }
}
.aa {
  position: relative;
}
.close {
  position: absolute;
  z-index: 999;
  top: 3px;
  right: 5px;
}

.active {
  background-color: #0099cc;
}

//大遮罩
.bigcover {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  z-index: 998;
  height: 100%;
}

// vue的动画
.slide-fade-enter-active {
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.6s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(0);
  opacity: 0;
}
</style>