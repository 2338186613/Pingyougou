var headertxt=`
<header>
    <!-- 快捷导航栏 -->
    <div class="shortcut">
      <div class="shortcut-content center">
        <div class="shortcut-left fl">
          <div class="welcome">品优购欢迎您！请
            <a href="./login.html">登录</a>
            <a href="./reqister.html">免费注册</a>
          </div>
        </div>
        <div class="shortcut-right fr">
          <ul>
            <li>
              <a href="./login.html">我的订单</a>
              <span>|</span>
            </li>
            <li>
              <a href="./../pages/login.html">个人中心</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Logo区 -->
    <div class="logo-area center">
      <!--  -->
      <h1 class="fl">
        <a href="./../index.html">
          <img src="./../images/logo.png" alt="logo">
        </a>
      </h1>
      <!-- 搜索 -->
      <div class="search fl">
        <input type="text" placeholder="请输入内容...">
        <button>搜索</button>
      </div>
      <!-- 购物车 -->
      <div class="cart fr">
        <a href="">
          <i class="iconfont icon-gouwuche"></i>
          我的购物车
          <span>0</span><!-- 徽章 -->
          <i class="iconfont icon-xiangyoujiantou"> </i>
        </a>

      </div>
    </div>
    <div class="nav-banner">
      <!-- 主导航栏 -->
      <nav>
        <div class="nav-content center">
          <div class="nav-classic fl">
            <div class="nav-title">全部商品分类</div>
            <ul class="nav-classic-list">
              <li>
                <div class="classic-name">手机<span class="iconfont icon-xiangyoujiantou icon"></span></div>
                <ul class="nav-classic-item">
                  <li>
                    <a href="#">
                      <img src="./../images/手机1.png" alt="商品">
                      <span class="goods-name">HUAWEI&nbsp;P系列</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./../images/手机2.png" alt="商品">
                      <span class="goods-name">HUAWEI&nbsp;Mate系列</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./../images/手机3.png" alt="商品">
                      <span class="goods-name">HUAWEI&nbsp;Mate系列</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="classic-name">笔记本<span class="iconfont icon-xiangyoujiantou"></span></div>
                <ul class="nav-classic-item">
                  <li>
                    <a href="#">
                      <img src="./../images/笔记本1.png" alt="商品">
                      <span class="goods-name">华为MateBoox&nbsp;X系列</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./../images/笔记本2.png" alt="商品">
                      <span class="goods-name">华为MateBoox&nbsp;系列</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./../images/笔记本3.png" alt="商品">
                      <span class="goods-name">华为MateBoox&nbsp;D系列</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="classic-name">平板<span class="iconfont icon-xiangyoujiantou"></span></div>
                <ul class="nav-classic-item">
                  <li>
                    <a href="#">
                      <img src="./../images/平板1.png" alt="商品">
                      <span class="goods-name">华为MatePad&nbsp;系列</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./../images/平板2.png" alt="商品">
                      <span class="goods-name">华为畅享系列</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="classic-name">智能穿戴<span class="iconfont icon-xiangyoujiantou"></span></div>
                <ul class="nav-classic-item">
                  <li>
                    <a href="#">
                      <img src="./../images/智能穿戴1.png" alt="商品">
                      <span class="goods-name">智能手表</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./../images/智能穿戴2.png" alt="商品">
                      <span class="goods-name">智能手环</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="classic-name">智能家居<span class="iconfont icon-xiangyoujiantou"></span></div>
                <ul class="nav-classic-item">
                  <li>
                    <a href="#">
                      <img src="./../images/智能家居1.png" alt="商品">
                      <span class="goods-name">智能路由</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./../images/智能家居2.png" alt="商品">
                      <span class="goods-name">智能音箱</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="classic-name">电视<span class="iconfont icon-xiangyoujiantou"></span></div>
                <ul class="nav-classic-item">
                  <li>
                    <a href="#">
                      <img src="./../images/电视1.png" alt="商品">
                      <span class="goods-name">华为智能屏</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./../images/电视2.png" alt="商品">
                      <span class="goods-name">荣耀智能屏</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <ul class="nav-main fl">
            <li>
              <a href="./classify/phone.html">手机</a>
            </li>
            <li>
              <a href="./classify/notebook.html">笔记本</a>
            </li>
            <li>
              <a href="./classify/ipad.html">平板</a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  </header>
`
document.write(headertxt);