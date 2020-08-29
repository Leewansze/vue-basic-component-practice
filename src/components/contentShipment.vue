<template>
	<div id="contentShipment">
		<el-form :label-position="labelPosition" ref="form" :model="form" label-width="-30px">
			<el-form-item label="">
				<el-checkbox-group v-model="form.type">
					<el-row>
						<el-col :span="12">
							<div class="grid-content">
								<el-checkbox label="Notify Party" name="type"></el-checkbox>
							</div>
						</el-col>
						<el-col :span="12">
							<div class="grid-content">
								<el-checkbox label="Booking Party" name="type"></el-checkbox>
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="12">
							<div class="grid-content">
								<el-checkbox label="Consignee" name="type"></el-checkbox>
							</div>
						</el-col>
						<el-col :span="12">
							<div class="grid-content">
								<el-checkbox label="Broker" name="type"></el-checkbox>
							</div>
						</el-col>
					</el-row>	
					<el-row>
						<el-col :span="12">
							<div class="grid-content">
								<el-checkbox label="Control Party" name="type"></el-checkbox>
							</div>
						</el-col>
						<el-col :span="12">
							<div class="grid-content">
								<el-checkbox label="Forwarder" name="type"></el-checkbox>
							</div>
						</el-col>
					</el-row>			
				</el-checkbox-group>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default{
		name:'contentShipment',
		data(){
			return{
        form: {
          		type:[],
        },
        labelPosition: 'left',
			};
		},
		 methods: {
      		onSubmit() {
        		console.log('submit!');
      		}
    	}
	};
</script>
<style lang="less" scoped>
	#contentShipment{
		width:412px;
		font-size: 16px;
		font-weight:bold;
		color: #000!important;
		letter-spacing: 1px;
		padding-top:200px;
	}
</style>