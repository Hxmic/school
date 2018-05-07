<template>

	<el-row class="container">
		<!-- <el-col :span="24" class="header">
			<el-col style="width:230px" class="logo" >
				商场导购系统
			</el-col>
			<el-col :span="10">
				
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img src="../assets/group-head-img.png" /> 张三</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col> -->

		<!-- <el-col :span="24" class="header">
			<el-col style="width:230px" class="logo" >
				商场导购系统
			</el-col>
			
		</el-col> -->


		<el-header :span="24" class="header">
			
				<el-col style="width:230px" class="logo" >
					商场导购系统
				</el-col>
				<el-dropdown class="userinfo">
					<i class="el-icon-setting" ></i>
					<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>个人中心</el-dropdown-item>
					<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<span class="userinfo">王小虎</span>
		</el-header>


		 <el-row style="margin-top:5px">
            <el-row :gutter="10" class="el-menu-vertical-demo">
                <el-col style="width:240px">
					<!-- :default-openeds="['1', '3']" 设置默认打开 -->
                    <el-menu  style="min-height:auto" 
						v-for="(item, index) in dataNav.data"
						:key="index"
					>
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
						<!-- <el-menu-item-group>
						<template slot="title">分组一</template>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group> -->
						<el-menu-item index="1-1">{{item.first}}</el-menu-item>
						<el-menu-item index="1-2">{{item.second}}</el-menu-item>
						
					</el-submenu>
					<!-- <el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>导航二</template>
						<el-menu-item-group>
						<template slot="title">分组一</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
						<el-menu-item index="2-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="2-4">
						<template slot="title">选项4</template>
						<el-menu-item index="2-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu> -->
					
					</el-menu>
                </el-col>
                  <el-main>
						<!-- <el-table >
							<el-table-column prop="date" label="日期" width="140">
							</el-table-column>
							<el-table-column prop="name" label="姓名" width="120">
							</el-table-column>
							<el-table-column prop="address" label="地址">
							</el-table-column>
						</el-table> -->
						<router-view></router-view>
					</el-main>
				</el-row>
        </el-row>
		

	</el-row>

    
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                searchCriteria: '',
                breadcrumbItems: ['导航一'],
				dataNav:{
					data:[
						{
							name: '主页',
							first: '第一个',
							second: '第二个'
						},
						{
							name: '人员管理',
							first: '第一个',
							second: '第二个'
						},
						{
							name: '商品管理',
							first: '第一个',
							second: '第二个'
						},
						{
							name: '商品销售位置查询',
							first: '第一个',
							second: '第二个'
						},
						{
							name: '商品打折促销管理',
							first: '第一个',
							second: '第二个'
						},
						{
							name: '商场活动推介管理',
							first: '第一个',
							second: '第二个'
						},
						{
							name: '商场管理',
							first: '第一个',
							second: '第二个'
						},
					]
				}
            }
        },

        methods:{
            handleIconClick(ev) {
                console.log(ev);
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
