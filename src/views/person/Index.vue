<template>
	<div id="person">
		<div class="person-header">
			<div class="person-title">个人中心</div>
			<ul class="person-info">
				<li>
					<img src="../../assets/image/person/index/header.jpg" alt="">
				</li>
				<li class="info-content">
					<p>15865656985</p>
					<div>
						<span>普通会员</span>
						<router-link to="">充值会员</router-link>
					</div>
				</li>
				<li>
					<router-link to="">
						<img src="../../assets/image/person/index/arrow.png" alt="">
					</router-link>
				</li>
			</ul>
		</div>
		<div class="person-content">
			<ul class="content-top common-style">
				<li>
					<span class="money-style">20</span>
					<p class="color-666">可提现金额</p>
				</li>
				<li>
					<span class="money-style">20</span>
					<p class="color-666">待发放金额</p>
				</li>
				<li>
					<span class="money-style">2120</span>
					<p class="color-666">总计金额</p>
				</li>
				<li>
					<i class="icon-style icon-withdraw"></i>
					<p class="color-333">我要提现</p>
				</li>
			</ul>
			<ul class="content-middle common-style m-t-20">
				<li>
					<i class="icon-style icon-middle-1"></i>
					<p>添加买号</p>
				</li>
				<li>
					<i class="icon-style icon-middle-2"></i>
					<p>买号列表</p>
				</li>
				<li>
					<i class="icon-style icon-middle-3"></i>
					<p>资金明细</p>
				</li>
				<li>
					<i class="icon-style icon-middle-4"></i>
					<p>推荐有奖</p>
				</li>
				<li>
					<i class="icon-style icon-middle-5"></i>
					<p>提现记录</p>
				</li>
				<li>
					<i class="icon-style icon-middle-6"></i>
					<p>提现密码管理</p>
				</li>
				<li>
					<i class="icon-style icon-middle-7"></i>
					<p>提现账户设置</p>
				</li>
				<li>
					<i class="icon-style icon-middle-8"></i>
					<p>我的消息</p>
				</li>
				<li></li>
			</ul>
			<ul class="content-bottom common-style m-t-20">
				<li>
					<icon class="icon-style icon-server"></icon>
					<span>在线客服</span>
				</li>
				<li>
					<p>在线时间：9点-21点</p>
					<p>QQ在线客服：2596149104</p>
					<p>进群：加管理员QQ- (2596149104) 认证进群</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'person',
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped>
	.person-header {
		/* width: 7.5rem; */
		height: 3.82rem;
		background: url(../../assets/image/person/index/banner.png) no-repeat;
		background-size: 7.5rem 3.82rem;
	}
	.person-title {
		padding: .25rem 0;
		font-size: .36rem;
		color: #fff;
		text-align: center;
		letter-spacing: .02rem;
	}
	.person-info {
		margin-top: .2rem;
		padding: 0 .3rem;
		display: flex;
		align-items: center;
	}
	.person-info li:first-child img {
		display: inline-block;
		width: 1.3rem;
		height: 1.3rem;
		border-radius: .65rem;
	}
	.info-content {
		margin-left: .4rem;
		flex: 1;
		font-size: .3rem;
		color: #fff;
		letter-spacing: .02rem;
	}
	.info-content>div {
		margin-top: .2rem;
		display: flex;
	}
	.info-content a {
		margin-left: .15rem;
		display: inline-block;
		padding: .07rem .15rem;
		background: #fff;
		border-radius: .2rem;
		font-size: .2rem;
		color: #e94230;
	}
	.person-info li:last-child img {
		display: inline-block;
		width: .18rem;
		height: .33rem;
	}
	.person-content {
		margin-top: -.8rem;
		padding: 0 .3rem;	
	}
	.common-style {
		background: #fff;
		border-radius: .08rem;
	}
	.m-t-20 {
		margin-top: .2rem;
	}
	.money-style {
		font-size: .36rem;
		color: #e94230;
	}
	.content-top {
		padding: .4rem 0;
		display: flex;
		align-items: center;
		text-align: center;
	}
	.content-top li {
		flex: 1
	}
	.content-top li+li {
		border-left: .02rem solid #efefef;
	}
	.content-top p {
		margin-top: .15rem;
		font-size: .22rem;
		letter-spacing: .03rem;
		color: #666;
	}
	.content-top li:last-child p {
		color: #333;
	}
	.icon-style {
		display: inline-block;
		width: .31rem;
		height: .31rem;
		background: url('../../assets/image/person/index/icon.png') no-repeat;
		background-size: 2.8rem 2rem;
	}
	.icon-withdraw {
		margin-top: .14rem;
		height: .26rem;
		background-position:  -.29rem -.42rem;
	}
	.content-middle {
		display: flex;
		flex-wrap: wrap;
	}
	.icon-middle-1 {
		background-position:  -.93rem -.37rem;
	}
	.icon-middle-2 {
		width: .37rem;
		background-position:  -1.53rem -.38rem;
	}
	.icon-middle-3 {
		/* width: .27rem; */
		background-position:  -2.2rem -.39rem;
	}
	.icon-middle-4 {
		width: .29rem;
		background-position:  -.31rem -.86rem;
	}
	.icon-middle-5 {
		width: .37rem;
		background-position:  -.9rem -.86rem;
	}
	.icon-middle-6 {
		width: .29rem;
		background-position:  -1.57rem -.86rem;
	}
	.icon-middle-7 {
		width: .35rem;
		background-position:  -2.16rem -.86rem;
	}
	.icon-middle-8 {
		width: .32rem;
		background-position:  -.31rem -1.33rem;
	}
	.content-middle li {
		padding: .27rem 0;
		width: 33%;
		border-left: .02rem solid #efefef;
		border-top: .02rem solid #efefef;
		text-align: center;
	}
	.content-middle li:nth-child(3n+1) {
		border-left-color: #fff;
	}
	.content-middle li:nth-child(-n+3) {
		border-top-color: #fff;
	}
	.content-middle p {
		margin-top: .1rem;
		font-size: .2rem;
		color: 333;
		letter-spacing: .01rem;
	}
	.content-bottom {
		padding: .3rem;
		display: flex;
		align-items: center;
	}
	.icon-server {
		background-position: -.94rem -1.33rem;
		vertical-align: middle;
	}
	.content-bottom li:first-child {
		font-size: .28rem;
		color: #222;
	}
	.content-bottom span {
		margin-left: .2rem;
	}
	.content-bottom li:last-child {
		margin-left: .35rem;
		font-size: .2rem;
		color: #959595;
	}
	.content-bottom p+p {
		margin-top: .1rem;
	}
</style>
