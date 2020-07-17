<template>
  <div class="home" >
    <div style="height: 100%; width: 100%; position: fixed; top: 0; left: 0;z-index: 99;" @click="showMobileNav = false" v-if="showMobileNav"></div>
    <div class="weixin-tips" v-if="isWeixin">
      <p class="text">点击···，选择在浏览器中打开，即可安装</p>
      <img src="static/img/download-tip.png" class="arrow">
    </div>
    <div class="part1">
      <nav class="nav text-muted">
        <a class="logo"></a>
        <span class="pc-nav">
          <a class="nav-item">{{$t('home.walletName')}}</a>
          <a class="nav-item" href="#part4">{{$t('home.ecoPartners')}}</a>
          <a class="nav-item" @click="openCourse">{{$t('home.course')}}</a>
          <a class="nav-item" @click="changeLocale">{{$t('home.lang')}}</a>
        </span>
        <button type="button" @click="showMobileNav = !showMobileNav" class="navbar-toggle mobile-nav-btn">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span v-if="showMobileNav" class="mobile-nav" @click="showMobileNav = false">
          <a class="nav-item">{{$t('home.walletName')}}</a>
          <a class="nav-item" href="#part4">{{$t('home.ecoPartners')}}</a>
          <a class="nav-item" @click="openCourse">{{$t('home.course')}}</a>
          <a class="nav-item" @click="changeLocale">{{$t('home.lang')}}</a>
        </span>
      </nav>
      <div class="part1-content">
        <div class="left">
          <h2 class="wallet-title x-x-large-font text-muted">{{$t('home.title1')}}</h2>
          <p class="desc normal-font text-muted">{{$t('home.tip1')}}</p>
          <div class="download">
            <download @click.native="downloadIos">
              <img src="static/img/app-store2.png" width="29"  height="32" alt="appstore" slot="icon"/>
              <div>
                <p>{{$t('home.iOSDownload')}}</p>
              </div>
            </download>
            &nbsp;
            <download @click.native="downloadAndroid">
              <img src="static/img/play-store2.png" width="29" height="32" alt="appstore" slot="icon"/>
              <div>
                <p>{{$t('home.androidDownload')}}</p>
              </div>
            </download>
          </div>
          <div class="qrcode">
            <img src="static/img/qrcode.png" alt="qrcode"/>
            <p class="text-center qrcode-tip">{{$t('home.scanTip')}}</p>
          </div>
        </div>
        <div class="right">
          <img :src="$i18n.locale === 'en' ? 'static/img/part1_phone_en.png' : 'static/img/part1_phone_zh.png'" alt="utoken_wallet"/>
        </div>
      </div>
    </div>
    <div class="part2">
      <div class="pull-left left">
        <img src="static/img/pic1.png" alt="utoken_assets"/>
      </div>
      <div class="pull-right right">
        <div class="content">
          <h2 class="wallet-title x-x-large-font text-muted">{{$t('home.title2')}}</h2>
          <p class="normal-font text-muted">{{$t('home.tip2_1')}}</p>
          <p class="normal-font text-muted">{{$t('home.tip2_2')}}</p>
        </div>
      </div>
    </div>
    <div class="part3">
      <div class="pull-right right">
        <img src="static/img/pic2.png" alt="utoken_security"/>
      </div>
      <div class="pull-left left">
        <div class="content">
          <h2 class="wallet-title x-x-large-font text-muted">{{$t('home.title3')}}</h2>
          <p class="normal-font text-muted">{{$t('home.tip3_1')}}</p>
          <p class="normal-font text-muted">{{$t('home.tip3_2')}}</p>
        </div>
      </div>
    </div>
    <div class="part4" id="part4">
      <div class="part4-content">
        <h2 class="part4-content-title x-x-large-font">{{$t('home.ecoPartners')}}</h2>
        <div class="partners">
          <a href="https://bitcoin.org"> 
            <img src="static/img/Bitcoin.png" class="partner" alt="Bitcoin"/>
          </a>
          <a href="https://ripple.com/">
             <img src="static/img/Ripple.png" class="partner" alt="Ripple"/>
          </a>
          <a href="https://ethereum.org/">
             <img src="static/img/ETH.png" class="partner" alt="ETH"/>
          </a>
          <a href="https://www.stellar.org/">
            <img src="static/img/Stellar.png" class="partner" alt="Stellar"/>
          </a>
          <a href="https://ripplefox.com/">
            <img src="static/img/Ripplefox.png" class="partner" alt="Ripplefox"/>
          </a>
          <!--<a href="https://www.ultiledger.io/">
            <img src="static/img/ult.svg" class="partner" alt="Ultiledger"/>
          </a>-->
        </div>
      </div>
    </div>
    <div class="part5 text-muted">
      Copyright&nbsp;©&nbsp;2018 Ultiledger, All rights Reserved.
    </div>
    <div class="totop" @click="totop">
      <img src="static/img/totop.png" alt="回到顶部"/>
    </div>
  </div>
</template>

<script>
import download from '../components/download.vue';
export default {
  components: {
    download,
  },
  data () {
    return {
      showMobileNav: false,
      isWeixin: false
    };
  },
  methods: {
    openCourse () {
      window.open('https://tutorial.utoken.cash');
    },
    totop () {
      window.scroll(0, 0);
    },
    changeLocale () {
      let locale = this.$i18n.locale
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
    },
    is_weixin(){
      let ua = navigator.userAgent.toLowerCase();
      if(ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
      } else {
        return false;
      }
    },
    downloadIos () {
      this.isWeixin = this.is_weixin();
      if (this.isWeixin) {
        return;
      }
      window.location.href = "https://testflight.apple.com/join/Lx0DJvCm";
      // window.open("itms-services:///?action=download-manifest&url=https://raw.githubusercontent.com/0hewj0/ultitoken/master/ios.plist", "_blank");
    },
    downloadAndroid () {
      this.isWeixin = this.is_weixin();
      if (this.isWeixin) {
        return;
      }
      window.open("/Utoken.apk", "_self");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";
.weixin-tips{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  background: #343434;
  padding-top: 20px;
  padding-bottom: 20px;
  -webkit-box-shadow: rgba(22,22,23,.62) 0 -10px 16px inset;
  box-shadow: inset 0 -10px 16px rgba(22,22,23,.62);
  .text {
    color: #7f7e7e;
    text-align: center;
    padding: 0 30px;
  }
  .arrow{
    position: absolute;
    top: 5px;
    right: 15px;
    width: 22px;
  }
}
.totop{
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 9999;
  background: #fff;
  cursor: pointer;
  border: 1px solid #e5e5e5;
  padding:10px;
  /**
  *  mobile
  */
  @media only screen
  and (max-device-width: 1024px) {
    right: 16px;
    bottom: 40px;
    padding: 6px;
    img{
      max-width: 18px;
    }
  }
}
.wallet-title{
  padding: 20px 0;
}
.desc{
  margin-bottom: 20px;
  line-height: 20px;
}
.part1 {
  height: 600px;
  background: url("../../static/img/part1_bg.png") no-repeat left top / 129px,
              url("../../static/img/part1_bg2.png") no-repeat right top / 429px;
  .mobile-nav-btn{
    display: none;
  }
  /**
  *  mobile
  */
  @media only screen
  and (max-device-width: 1024px) {
    background: url("../../static/img/part1_bg.png") no-repeat left top / 50px,
              url("../../static/img/part1_bg2.png") no-repeat right top / 190px;
  }
  .nav{
    display: block;
    padding-top: 40px;
    position: relative;
    margin-left: 18%;
    .logo{
      background: url('../../static/img/logo1.png') no-repeat;
      background-size: 100%;
      background-position: left bottom;
      display: inline-block;
      width: 120px;
      height: 28px;
      vertical-align: bottom;
      margin-right: 18px;
    }
    .nav-item{
      cursor: pointer;
      margin: 0 18px;
      text-decoration: none;
      color: $muted-color !important;
    }
    /**
    *  mobile
    */
    @media only screen
    and (max-device-width: 1024px) {
      .mobile-nav-btn{
        display: inline-block;
        position: relative;
        float: right;
        margin-right: 15px;
        margin-bottom: 8px;
        background-color: transparent;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
        .icon-bar {
          display: block;
          width: 22px;
          height: 2px;
          border-radius: 1px;
          background-color: #fff;
          margin-top: 4px;
        }
      }
      .pc-nav{
        display: none;
      }
      .mobile-nav{
        display: inline-block;
        background: $download-color;
        position: absolute;
        width: 130px;
        right: 15px;
        top: 70px;
        z-index: 9999;
        float: right;
        .nav-item{
          text-align: center;
          width: 100%;
          float: left;
          padding: 10px 0;
          margin: 0 !important;
        }
      }
    }
  }
  .part1-content{
    margin-top: 200px;
    .left{
      display: inline-block;
      margin-left: 20%;
      max-width: 26%;
      .download{
        display: none;
      }
      .qrcode{
        padding: 20px 20px 4px;
        box-shadow: 0 0 6px #e5e5e5;
        border-radius: 8px;
        display: inline-block;
        transition: all ease 0.4s; 
        img{
          max-width: 200px;
        }
        &:hover{
          transform: scale(1.03);
        }
        .qrcode-tip{
          padding-top: 8px;
        }
      }
      /**
      *  mobile
      */
      @media only screen
      and (max-device-width: 1024px) {
        margin-left: 10%;
        max-width: 100%;
        .download{
          text-align: center;
          margin-left: -10%;
          padding-top: 20px;
          display: block;
        }
        .qrcode{
          display: none;
        }
      }
    }
    .right{
      float: right;
      margin-right: 13%;
      margin-top: -100px;
      text-align: center;
      /**
      *  mobile
      */
      @media only screen
      and (max-device-width: 1024px) {
        margin-top: 20px;
        margin-right: 0;
        img{
          max-width: 90%;
          margin: 0 auto;
        }
      }
      /**
      *  低分屏
      */
      @media only screen
      and (max-device-width: 1366px) and (min-device-width: 1024px) {
        margin-right: 7%;
        margin-top: -70px;
      }
    }
  }
}
.part2{
  background: #f8fafa;
  overflow: hidden;
  width: 100%;
  padding: 70px 0;
  .left{
    position: relative;
    width: 50%;
    height: 220px;
    img{
      max-width:220px;
      position: absolute;
      right: 20%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .right{
    text-align: right;
    position: relative;
    overflow: hidden;
    width: 50%;
    height: 220px;
    .content{
      position: absolute;
      left: 10%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  /**
  *  mobile
  */
  @media only screen
  and (max-device-width: 1024px) {
    height: auto;
    .right{
      width: 100%;
      .content{
        width: 100%;
        left: 0;
        text-align: center;
      }
    }
    .left{
      width: 100%;
      img{
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
.part3{
  background: #fff;
  overflow: hidden;
  width: 100%;
  padding: 70px 0;
  .right{
    position: relative;
    width: 50%;
    height: 220px;
    img{
      max-width:220px;
      position: absolute;
      left: 15%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .left{
    text-align: left;
    position: relative;
    overflow: hidden;
    width: 50%;
    height: 220px;
    .content{
      position: absolute;
      right: 15%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  /**
  *  mobile
  */
  @media only screen
  and (max-device-width: 1024px) {
    height: auto;
    .right{
      width: 100%;
      img{
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .left{
      width: 100%;
      .content{
        width: 90%;
        line-height: 20px;
        right: 5%;
        text-align: center;
      }
    }
  }
}
.part4{
  background: #748592;
  width: 100%;
  padding-bottom: 40px;
  .part4-content{
    width: 80%;
    margin: 0 auto;
    .part4-content-title{
      text-align: center;
      color: #fff;
      padding: 30px 0;
    }
  }
  .partners{
    text-align: center;
    .partner{
      max-width: 100px;
      margin: 0px 30px 20px;
    }
  }
}
.part5{
  padding: 10px 0;
  text-align: center;
}
</style>
