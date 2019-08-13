<template>
	<div id="invite">
		<div class="invite-header">
			<ul class="header-top">
				<li>
					<span>商家邀请码</span>
					<span>ZB358ANM</span>
					<button class="copy-btn" v-clipboard:copy="text" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</button>
				</li>
				<li>
					<div>
						<span>商家邀请链接</span>
						<button class="copy-btn" v-clipboard:copy="text" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</button>
					</div>
					<p>http://www.sumaifu.com/#/reg?inv=ZB358ANM</p>
				</li>
				<li>
					<span>买手邀请码</span>
					<span>ZB358ANM</span>
					<button class="copy-btn" v-clipboard:copy="text" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</button>
				</li>
				<li>
					<div>
						<span>商家邀请链接</span>
						<button class="copy-btn" v-clipboard:copy="text" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</button>
					</div>
					<p>http://www.sumaifu.com/#/reg?inv=ZB358ANM</p>
				</li>
			</ul>
			<ul class="header-bottom">
				<li>
					<div>
						<p>30人</p>
						<p>共邀请好友</p>
					</div>
					<router-link to="">邀请商家名单</router-link>
				</li>
				<li>
					<div>
						<p>3000金币</p>
						<p>已获得奖励</p>
					</div>
					<router-link to="">邀请买手名单</router-link>
				</li>
			</ul>
		</div>
		<div class="invite-content">
			<div class="reward-rules">
				<div>
					<p class="reward-rules-title">
						<span class="color-f64041">奖励一：</span>邀请买手徒弟做单赚佣金分成
					</p>
					<table>
						<tbody>
							<tr>
								<td class="first-td">邀请人数</td>
								<td class="other-td">佣金分成</td>
							</tr>
							<tr>
								<td class="first-td">邀请人数≤30人</td>
								<td class="other-td">可从好友佣金中抽取5%的分成，多邀多奖，无上限</td>
							</tr>
							<tr>
								<td class="first-td">邀请人数＞30人</td>
								<td class="other-td">可从好友佣金中抽取10%的分成，多邀多奖，无上限</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div>
					<p class="reward-rules-title">
						<span class="color-f64041">奖励二：</span>邀请商家、好友注册购买会员，即享福利
					</p>
					<table>
						<tbody>
							<tr>
								<td class="first-td">购买会员</td>
								<td class="other-td">3</td>
								<td class="other-td">6</td>
								<td class="other-td">12</td>
								<td class="other-td">24</td>
							</tr>
							<tr>
								<td class="first-td">赠送会员时长</td>
								<td class="other-td">1</td>
								<td class="other-td">3</td>
								<td class="other-td">6</td>
								<td class="other-td">12</td>
							</tr>
							<tr>
								<td class="first-td">赠送限制</td>
								<td class="other-td" colspan="4">只限邀请好友首次购买会员邀请人才可获得此福利</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div>
					<p class="reward-rules-title">
						<span class="color-f64041">奖励三：</span>邀请商家、好友充值，即享福利
					</p>
					<table>
						<tbody>
							<tr>
								<td class="first-td">充值金额</td>
								<td class="other-td">2000</td>
								<td class="other-td">5000</td>
								<td class="other-td">10000</td>
								<td class="other-td">20000</td>
								<td class="other-td">30000</td>
							</tr>
							<tr>
								<td class="first-td">返M币比例</td>
								<td class="other-td">100</td>
								<td class="other-td">240</td>
								<td class="other-td">500</td>
								<td class="other-td">960</td>
								<td class="other-td">1500</td>
							</tr>
							<tr>
								<td class="first-td">赠送限制</td>
								<td class="other-td" colspan="5">只限邀请好友首次购买会员邀请人才可获得此福利</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div>
					<p class="reward-rules-title">
						<span class="color-f64041">奖励四：</span>邀请商家，充值M币，送会员
					</p>
					<table>
						<tbody>
							<tr>
								<td class="first-td">充值金额</td>
								<td class="other-td">2000</td>
								<td class="other-td">5000</td>
								<td class="other-td">10000</td>
								<td class="other-td">20000</td>
								<td class="other-td">30000</td>
							</tr>
							<tr>
								<td class="first-td">赠送会员时长</td>
								<td class="other-td">3</td>
								<td class="other-td">6</td>
								<td class="other-td">9</td>
								<td class="other-td">12</td>
								<td class="other-td">24</td>
							</tr>
							<tr>
								<td class="first-td">赠送限制</td>
								<td class="other-td" colspan="5">只限邀请好友首次购买会员邀请人才可获得此福利</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="ranking-list">
				<p class="ranking-list-title">邀请奖励排行榜</p>
				<table>
					<thead>
						<tr>
							<td>排名</td>
							<td>用户名</td>
							<td>成功邀请人数</td>
							<td>累计奖励佣金</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>1586565985</td>
							<td>32人</td>
							<td>450金币</td>
						</tr>
						<tr>
							<td>2</td>
							<td>1586565985</td>
							<td>32人</td>
							<td>450金币</td>
						</tr>
						<tr>
							<td>3</td>
							<td>1586565985</td>
							<td>32人</td>
							<td>450金币</td>
						</tr>
						<tr>
							<td>4</td>
							<td>1586565985</td>
							<td>32人</td>
							<td>450金币</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="warm-prompt">
				<p>温馨提示：</p>
				<p>1. 所有奖励系统自动发放，若未返联系客服核实</p>
				<p>2. 邀请商家充值奖励为首次充值有效，商家充值的金币不可提现，邀请商家获得的金币奖励可以提现</p>
				<p>3. 师傅需对邀请的徒弟安全性负责，如徒弟出现跑单及恶意中差评等情况发生，师傅负责替徒弟赔偿对应的金额给平台</p>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'invite',
		data() {
			return {
				text: `ZB358ANM`
			}
		},
		components: {},
		mounted() {},
		methods: {
			//复制成功
			onCopy() {
				alert('复制成功')
			},
			//复制失败
			onError() {
				alert('复制失败')
			},
		}
	}
</script>

<style scoped>
	#invite {
		background: #fff;
		padding-bottom: 1rem;
	}
	.invite-header {
		padding-top: 3.4rem;
		box-sizing: border-box;
		/* width: 7.5rem; */
		height: 9.09rem;
		background: url(../../assets/image/person/invite/banner.png) no-repeat;
		background-size: 7.5rem 9.09rem;
	}
	.header-top {
		margin: 0 auto;
		width: 6.04rem;
		font-size: .2rem;
		color: 333;
	}
	.header-top li+li {
		margin-top: .2rem;
	}
	.header-top span {
		margin-right: .2rem;
	}
	.header-top p {
		margin-top: .1rem;
	}
	.header-top .copy-btn {
		width: .82rem;
		height: auto;
		padding: 0;
		background: #fff;
		border-radius: .12rem;
		font-size: .18rem;
		color: #e94230;
		border: .01rem solid #e94230;
	}
	.header-bottom {
		margin: 1.2rem auto 0;
		width: 7rem;
		display: flex;
		justify-content: center;
		align-items: center;

	}
	.header-bottom li {
		flex: 1;
		text-align: center;
	}
	.header-bottom li div {
		font-size: .3rem;
		color: #666;
	}
	.header-bottom li:first-child div {
		border-right: .04rem solid #ff7e57;
	}
	.header-bottom li div p:first-child {
		color: #e94230;
	}
	.header-bottom li div p+p {
		margin-top: .2rem;
	}
	.header-bottom li a {
		margin-top: .4rem;
		padding: .04rem 0;
		display: inline-block;
		width: 1.7rem;
		font-size: .2rem;
		color: #e94230;
		border: .01rem solid #f64041;
		border-radius: .2rem;
	}
	.invite-content {
		padding: 0 .33rem;
	}
	.reward-rules {}
	.color-f64041 {
		color: #f64041;
	}
	.reward-rules-title {
		padding: .3rem 0;
		font-size: .22rem;
		color: #333;
		letter-spacing: .02rem;
	}
	.reward-rules table, .ranking-list table {
		width: 100%;
		border-collapse: separate;
		border: .02rem solid #f7544c;
		border-radius: .06rem;
		font-size: .2rem;
		color: #666;
		text-align: center;
	}
	.reward-rules table tr, .ranking-list table tr {
		display: flex;
		align-items: center;
	}
	.reward-rules table td, .ranking-list table thead td {
		padding: .2rem 0;
	}
	.reward-rules table tr:not(:first-child) td, .ranking-list table tbody tr {
		border-top: .02rem solid #f7544c;
	}
	.reward-rules table tr td:not(:last-child) {
		border-right: .02rem solid #f7544c;
	}
	.first-td {
		width: 1.8rem;
	}
	.other-td {
		flex: 1;
	}
	.ranking-list {}
	.ranking-list-title {
		padding: .2rem 0;
		font-size: .3rem;
		color: #333;
		text-align: center;
		letter-spacing: .02rem;
	}
	.ranking-list table {
		font-size: .24rem;
		color: #333;
	}
	.ranking-list table thead {
		background: #fafafa;
	}
	.ranking-list table td:first-child {
		flex: .5;
	}
	.ranking-list table td {
		padding: .14rem 0;
		flex: 1;
	}
	.warm-prompt {
		margin-top: .4rem;
		line-height: .36rem;
		font-size: .2rem;
		color: #333;
	}
</style>
