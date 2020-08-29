<template>
	<div id="contentNotifica">
		<el-form :label-position="labelPosition" label-width="200px" :model="form" size="mini">
			<el-form-item label="Business Registry:">
				<el-input v-model="formLabelAlign.business"></el-input>
			</el-form-item>
			<el-form-item label="Company Registry:">
				<el-input v-model="formLabelAlign.company"></el-input>
			</el-form-item>
			<el-form-item label="Reference Document:">
				<input type="file" v-on:change="showFile" id="fileField"/>
				<el-input v-model="formLabelAlign.reference" id="avatval" placeholder="please choose the files" readonly="readonly" >{{message}}</el-input>
				<el-button size="small" v-on:click="upLoad">Browse..</el-button>
			</el-form-item>
			<el-form-item label="EORI Number:">
				<el-input v-model="formLabelAlign.Number"></el-input>
			</el-form-item>
			<el-form-item label="Not Association:">
				<el-checkbox-group v-model="formLabelAlign.check">
					<el-checkbox label="Checkbox" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default{
		name:'contentNotifica',
		data(){
			return{
				labelPosition: 'left',
		        formLabelAlign: {
		          business: '',
		          company: '',
		          reference: '',
		          number:'',
		          check:'',
		          logo:''
		        },
		        message:''
		    	}
  		},
    	methods: {
			upLoad:function(){
				$("input[type='file']").trigger('click');
			},
			showFile:function(){
				var name=document.getElementById("fileField").value;
				document.getElementById("avatval").value=name;
			}
    }
};
</script>
<style lang="less" scoped>
	#contentNotifica{
		font-size: 16px;
		font-weight:bold;
		color: #000!important;
		letter-spacing: 1px;
		padding-top:160px;
	}
</style>