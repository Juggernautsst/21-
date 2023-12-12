<!-- /*<template>
    <div class="register-container">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="register-ruleForm"
      >
        <h2 class="register-title">注册</h2>
        <el-form-item label="账号" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="ruleForm.nickname"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="goLogin('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  import { register } from "@/api/login.js";
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          if (this.ruleForm.checkPass !== "") {
            this.$refs.ruleForm.validateField("checkPass");
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: "",
          nickname: "",
          pass: "",
          checkPass: "",
        },
        rules: {
          username: [{ required: true, message: "请输入账号", trigger: "blur" }],
          nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
          pass: [{ validator: validatePass, trigger: "blur" }],
          checkPass: [{ validator: validatePass2, trigger: "blur" }],
        },
      };
    },
    components: {},
  
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert("submit!");
            } 
      });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
    },
  };
  </script>
+ -->