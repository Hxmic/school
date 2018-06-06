<template>
	<el-row class="container">
		<el-header :span="24" class="header">
			
				<el-col style="width:230px" class="logo" >
					商场导购系统
				</el-col>
				<el-dropdown class="userinfo" @click.native="logout">
					<i class="el-icon-setting" ></i>
					<el-dropdown-menu slot="dropdown">
					<!-- <el-dropdown-item  >{{loginId}}</el-dropdown-item> -->
					</el-dropdown-menu>
				</el-dropdown>
				<span class="userinfo" >{{userName}}</span>
		</el-header>


		 <el-col :span="24" class="main">
			<aside >
				<!--导航菜单-->
				<el-menu  class="el-menu-vertical-demo" :default-active="$route.path" unique-opened router>
					<div v-for="(item, index) in dataNav.data" :key="index" >
						<el-menu >
							<div v-if="index == 0">
								<router-link :to="`${item.route}`">
									<el-menu-item index="1-1">
											<i class="el-icon-setting"></i>{{item.name}}
									</el-menu-item>
								</router-link>
							</div>

							<div v-else-if="index == 3">
								<router-link :to="{ path: `${item.route}`, query:{ nameTra : userName }}">
									<el-menu-item index="1-1">
											<i class="el-icon-setting"></i>{{item.name}}
									</el-menu-item>
								</router-link>
							</div>

							<el-submenu index="1" v-else>
								<template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template>
								<el-menu-item-group>
									
									<!-- <router-link :to="`${item.routeFirst}`"> -->
									<router-link :to="{ path: `${item.routeFirst}`, query:{ nameTra : userName }}">
										<el-menu-item index="1-1">
												{{item.first}}
										</el-menu-item>
									</router-link>
									<router-link :to="{ path: `${item.routeSecond}`, query:{ nameTra : userName }}">
										<el-menu-item index="1-2">
												{{item.second}}
										</el-menu-item>
									</router-link>
								</el-menu-item-group>
							</el-submenu>


						</el-menu>
					</div>
				</el-menu>
				
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
              			<router-view ></router-view>
							<!-- <router-view :id="id" :order-info="orderInfo"></router-view> -->
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>
<script type="text/ecmascript-6">
    export default {
      props: ['orderInfo'],
      data(){
            return {
            userName: '用户',
            collapsed: false,
			loginId: '返回登录',
            dataNav:{
              data:[
                {
                  name: '主页',
                  route: '/main'
				},
				{
                  name: '商品销售位置查询',
                  first: '楼层查询',
                  second: '商品位置查询',
                  routeFirst: '/floor',
                  routeSecond: '/location'
                },
                {
                  name: '商场管理',
                  first: '商场主页',
                  second: '商场',
                  routeFirst: '/market_table',
                  routeSecond: '/market_home'
                },

				{
                  name: '品牌商铺管理',
                  route: '/merchant'
				},
				 {
                  name: '商品管理',
                  first: '添加商品',
                  second: '管理商品',
                  route: '/main',
                  routeFirst: '/goods_add',
                  routeSecond: '/goods_table'
                  
                },
				 {
                  name: '人员管理',
                  first: '个人信息',
                  second: '用户管理',
                  routeFirst: '/person',
                  routeSecond: '/user_table'
                },

              ]
            }
            }
		},
		created() {
			this.getParams();
		},
		// props: ['userName'],
        methods:{
			// 获取参数
			getParams() {
				let name = this.$route.query.username;
				this.userName = name;
				if(name == '' || name == 'undefined' || name == '用户') {
					this.loginId = '返回登录'
				} else {
					this.loginId = '退出登录'
				}
			},

			// 退出登录
			logout() {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('userName');
					_this.$router.push('/login');
				}).catch(() => {

				});
			}
        },
    }
</script>

<style lang="less">
.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			background:  #20a0ff;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 15px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				//width:230px;
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				// border-right-style: solid;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color:#fff;
				}
			}
			.logo-width{
				width:230px;
			}
			.logo-collapse-width{
				width:60px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}
		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				.el-menu{
					height: 100%;
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex:0 0 230px;
				width: 230px;
			}
			.content-container {
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
