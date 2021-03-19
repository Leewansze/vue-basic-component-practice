<template>
  <el-container class="container">
    <el-main>
      <div class="login_panel">
        <div class="login_head">
          <p>登录</p>
        </div>
        <div class="login_content">
          <el-form ref="form" :model="form" :rules="rules" status-icon :show-message="false" @keyup.enter.native="submitForm('form')">
            <el-row :gutter="20">
              <el-col :span="16" :offset="4">
                <el-form-item prop="username">
                  <el-input placeholder="用户名" prefix-icon="el-icon-user-solid"
                            v-model="form.username"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="gap">
              <el-col :span="16" :offset="4">
                <el-form-item prop="password">
                  <el-input type="password" placeholder="密码" prefix-icon="el-icon-lock"
                            v-model="form.password" prop="password"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="gap">
              <el-col :span="16" :offset="4">
                <el-button type="primary" class="login_btn" @click="submitForm('form')">Login</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="gap" v-if="isError">
              <el-col :span="18" :offset="3">
                <p class="errorMessage">{{ errorMessage }}</p>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      isError: true,
      errorMessage: '',
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入用户密码',
            trigger: 'blur'
          }
        ]
      }

    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid, errors) => {
        if (valid) {
          this.errorMessage = ''
          this.login()
        } else {
          this.errorMessage = errors[Object.keys(errors)[0]][0].message
          return false
        }
      })
    },
    login () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  background: url("/src/assets/background.jpg") no-repeat;
  background-size: cover;
}

.container > .el-main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_panel {
  width: 605px;
  border-radius: 15px;
  background: rgba(41, 64, 88, 0.8);
  padding: 30px 0;
}

.login_head {
  height: 50px;
  font-size: 34px;
  color: #fff;
  text-align: center;
}

.login_content {
  padding: 30px 0;
}

.gap {
  margin-top: 20px;
}

.login_btn {
  width: 100%;
  font-size: 18px;
}

.errorMessage {
  color: #e03535;
}

</style>
