<template>
	<div id="contentLegal">
		<el-form :label-position="labelPosition" label-width="200px" :model="form" size="mini">
			<el-form-item label="Business Registry:">
				<el-input v-model="formLabelAlign.business"></el-input>
			</el-form-item>
			<el-form-item label="Company Registry:">
				<el-input v-model="formLabelAlign.company"></el-input>
			</el-form-item>
			<el-form-item label="Reference Document:">
				<input type="file" v-on:change="showFile" id="fileField"/>
				<el-input v-model="formLabelAlign.reference" id="avatval" placeholder="please choose the files" readonly="readonly"></el-input>
				<el-button size="small" v-on:click="upLoad">Browse..</el-button>
				<!-- <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
					  :on-preview="handlePreview"
					  :on-remove="handleRemove"
					  :on-success="success_handle"
					  :file-list="fileList"
					  multiple>
					  <el-button size="small" type="primary">点击上传</el-button>
				</el-upload> -->
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
		name:'contentLegal',
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
		  }
  	},
    	methods: {
			upLoad:function(){
				$("input[type='file']").trigger('click');
			},
			showFile:function(){
				var name = document.getElementById("fileField").value;//仅获取上传的文件名
				document.getElementById("avatval").value= name; //为输入框赋值上传的文件名

			}
      // handleRemove(file, fileList) {
      //   console.log(file, fileList);
      // },
      // handlePreview(file) {
      //   console.log(file);
      // },
      // success_handle(file) {
      // 	this.reference=file.name;
      // }
    }
};
</script>
<style lang="less" scoped>
	#contentLegal{
		font-size: 16px;
		font-weight:bold;
		color: #000!important;
		letter-spacing: 1px;
		padding-top:160px;
		transition: all .1s ease .1s;
	}
</style>