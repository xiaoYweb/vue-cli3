<template>
  <ul class="show-list">
    <li style="width: 920px;">
      <el-card shadow="always" style="width: 920px;">
        <div slot="header" class="clearfix">
          <span>表单demo</span>
        </div>
        <div style="height: 600px; overflow: auto;" class="scroll">
          <el-form :model="info" status-icon :rules="rules" ref="info" label-width="100px" class="form-init">

            <section class="content-wrap">
              <ul>
                <li class="content-item" v-for="(item, index) in info.list" :key="index">
                  <div class="subtitle">
                    <h4>
                      科研情况 {{index + 1}}
                    </h4>
                    <img src="./img/reduce.png" alt="" class="reduce" @click="sliceInfo(index)" v-if="info.list.length > 1">
                  </div>
                  <ul class="content">
                    <li class="item-wrap">
                      <!-- <h4 class="item-title">项目名称：</h4> -->
                      <div class="wrap">
                        <el-form-item label="项目名称" :prop="'list.'+ index +'.name'" :rules="rules.list.name">
                          <y-input v-model="item.name" :disabled="!editAllow"></y-input>
                        </el-form-item>
                      </div>
                    </li>
                    <li class="item-wrap">
                      <!-- <h4 class="item-title">项目来源：</h4> -->
                      <div class="wrap">
                        <el-form-item label="项目来源" :prop="'list.' + index+'.source'" :rules="rules.list.source">
                          <y-select v-model="item.source" :options="projectList" :disabled="!editAllow"></y-select>
                        </el-form-item>
                      </div>
                    </li>
                    <li class="item-wrap">
                      <!-- <h4 class="item-title">起止年月：</h4> -->
                      <div class="wrap">
                        <el-form-item label="起止年月" :prop="'list.' + index + '.startTm' && 'list.' + index + '.endTm'" :rules="rules.list.startTm">
                          <m-date-picker
                            :opt="{'disabled': !editAllow}"
                            :start="item.startTm"
                            :end="item.endTm"
                            @chaStart="startTimeHandle($event,index)"
                            @chaEnd="endTimeHandle($event,index)">
                          </m-date-picker>
                        </el-form-item>
                      </div>
                    </li>
                    <li class="item-wrap">
                      <!-- <h4 class="item-title">金额（万元）:</h4> -->
                      <div class="wrap">
                        <el-form-item label="金额（万元）" :prop="'list.'+ index + '.money'" :rules="rules.list.money">
                          <y-input v-model="item.money" :disabled="!editAllow" :contentType="{type: 'float'}"></y-input>
                        </el-form-item>
                      </div>
                    </li>
                    <li class="item-wrap">
                      <!-- <h4 class="item-title">本人排名：</h4> -->
                      <div class="wrap">
                        <el-form-item label="本人排名"  :prop="'list.' + index + '.rank' && 'list.' + index + '.total'" :rules="rules.list.rank && rules.list.total">
                            <m-ranking
                              :disabled="!editAllow"
                              :numerator="item.rank"
                              :denominator="item.total"
                              @numeratorHandle="numeratorHandle($event, index)"
                              @denominatorHandle="denominatorHandle($event, index)"
                            ></m-ranking>
                        </el-form-item>
                      </div>
                    </li>
                    <li class="item-wrap">
                      <!-- <h4 class="item-title">是否结题：</h4> -->
                      <div class="wrap">
                        <el-form-item label="是否结题" :prop="'list.'+ index +'.mark'" :rules="rules.list.mark">
                          <y-select v-model="item.mark" :options="endOrNot" :disabled="!editAllow"></y-select>
                        </el-form-item>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
            <section class="btn-wrap">
              <div class="btn-add" @click="add"><img src="./img/add.png" alt=""></div>
            </section>
            <section class="operate-wrap">
              <div class="operate">
                <el-button v-if="editAllow" @click="previous" class="btn">上一步</el-button>
                <el-button @click="submitForm('info')" v-if="editAllow && saveAllow" class="btn">保存</el-button>
                <el-button v-if="editAllow" class="next" @click="submitNext('info')" :class="{'disabled': !pass}">下一步</el-button>
                <el-button type="primary" class="next"  @click="next" v-else>下一页</el-button>
              </div>
            </section>
          </el-form>
        </div>
      </el-card>
    </li>
    <li>
      <el-card shadow="always">
        <div slot="header" class="clearfix">
          <span>注册表单demo</span>
        </div>
        <div style="height: 400px;">
          <el-form :model="loginInfo" ref="loginInfo" label-width="100px" class="form-init">
            <el-form-item label="用户名" prop="username" :rules="rule1">
              <y-input v-model="loginInfo.username"></y-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" :rules="rule2">
              <y-input v-model="loginInfo.password" :password="true"></y-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="again" :rules="rule3">
              <y-input v-model="loginInfo.again" :password="true"></y-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginInfo')" size="mini">提交</el-button>
              <el-button @click="resetForm('loginInfo')" size="mini">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </li>
    <li style="width: 500px;">
      <el-card shadow="always" style="height: 660px;">
        <div slot="header" class="clearfix">
          <span>典型表单</span>
        </div>
        <div style="height: 400px;">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </li>
    <li>
      <el-card shadow="always">
        <div slot="header" class="clearfix">
          <span>行内表单</span>
        </div>
        <div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="80px" size="mini">
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </li>
    <li>
      <el-card shadow="always">
        <div slot="header" class="clearfix">
          <span>对齐方式</span>
        </div>
        <div>
          <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
          </el-radio-group>
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" size="mini" class="align">
            <el-form-item label="名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </li>
    <li style="width: 500px;">
      <el-card shadow="always" style="height: 660px;">
        <div slot="header" class="clearfix">
          <span>表单验证</span>
        </div>
        <div>
          <el-form :model="ruleForm" :rules="rules3" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </li>
    <li>
      <el-card shadow="always">
        <div slot="header" class="clearfix">
          <span>自定义校验规则</span>
        </div>
        <div>
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="80px" class="demo-ruleForm">
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </li>
    <li style="width: 460px;">
      <el-card shadow="always">
        <div slot="header" class="clearfix">
          <span>动态增减表单项</span>
        </div>
        <div>
         <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
          <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ]"
          >
            <el-input v-model="dynamicValidateForm.email"></el-input>
          </el-form-item>
          <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label="'域名' + index"
            :key="domain.key"
            :prop="'domains.' + index + '.value'"

            :rules="testRule"
          >
          <!-- :rules="{ required: true, message: '域名不能为空', trigger: 'blur' }" -->
          <!-- :rules="[{ required: true, message: '域名不能为空', trigger: 'blur' }]" -->
            <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
            <el-button @click="addDomain">新增域名</el-button>
            <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>
        </div>
      </el-card>
    </li>
  </ul>
</template>

<script>
import yInput from "_el/input";
import ySelect from "_el/select";
import mRanking from '@/components/input-items/m-ranking/m-ranking.vue'
import mDatePicker from '@/components/input-items/m-datePicker/m-datePicker.vue'
export default {
  components: { yInput, ySelect, mRanking, mDatePicker},
  data() {
    const pwdValidate = (rule, value, callback) => {
      // console.log('pwdValidate', value)
      if (value === '') return callback(new Error('密码不能为空'))
      if (this.loginInfo.again !== '') return this.$refs.loginInfo.validateField('again')
      callback()
    }
    const pwd2Validate = (rule, value, callback) => {
      // console.log('pwdValidate', value)
      if (value === '') return callback(new Error('请再次输入密码'))
      let { password } = this.loginInfo
      if (password === '') return this.$refs.loginInfo.validateField('password')
      if (value != password) return callback(new Error('两次输入密码不一致! 请重新输入'))
      callback()
    }
    // --
    const rankingValidate = (rule, value, callback) => {
      // console.log('rankingValidate', rule, value) // 若 期中一个为空不会执行
      let re = /\d+/;
      let index = rule.field.match(re)[0]
      let {rank, total} = this.info.list[index]
      if (rank == '') return callback(new Error('请输入个人排名'))
      if (total == '') return callback(new Error('请输入排名总人数'))
      if (rank*1 > total*1) return callback(new Error('排名不得大于总人数'))
      callback()
    }
    const moneyValidate = (rule, value, callback) => {
      // console.log('moneyValidate', rule, value)
      let re = /(.){2-}/
      let result = re.test(value)
      // console.log('result', result)
    }
    // -- 自定义校验规则
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    return {
      loginInfo: {
        username: '',
        password: '',
        again: ''
      },
      rule1: [
        { required: true, message: "用户名不能为空" },
      ],
      rule2: [
        { required: true, validator : pwdValidate, trigger: 'blur' },
      ],
      rule3: [
        { required: true, validator : pwd2Validate, trigger: 'blur' },
      ],
      //--  demo 2
      info: {
        list: [
          {
            // id: '', //新增不传  编辑需传
            name: '',// 项目名称
            source: '',// 项目来源
            money: '',// 金额,保留2位小数
            mark: '',// 是否结题 1-是 0-否
            startTm: '',
            endTm: '',
            rank: '',// 本人排名
            total: '',// 排名总人数
          }
        ]
      },
      delIdList: [],
      rules: {
        list: {
          name: [
          { required: true, message: '请输入项目名称', trigger: 'blur' }
          ],
          source: [
            { required: true, message: '请输入项目来源', trigger: 'change' }
          ],
          money: [
            { required: true, message: '请输入金额（万元）', trigger: 'blur' },
            // { required: true, validator: moneyValidate, trigger: 'blur'}
          ],
          mark: [
            { required: true, message: '请选择是否结题', trigger: 'change' }
          ],
          startTm: [
            {required: true, message: '请选择起止时间', trigger: 'change'},
          ],
          endTm: [
            {required: true, message: '请选择结束时间', trigger: 'change'},
          ],
          rank: [
            // { required: true, message: '请输入排名', trigger: 'blur' },
            { required: true, validator: rankingValidate, trigger: 'blur'}
          ],
          total: [
            // { required: true, message: '请输入排名总人数', trigger: 'blur' },
            { required: true, validator: rankingValidate, trigger: 'blur'}
          ],
        }
      },
      projectList: [
        {
          value: "xm1",
          label: "项目1"
        },
        {
          value: "xm2",
          label: "项目2"
        }
      ],
      endOrNot: [
        {
          value: '1',
          label: "是"
        },
        {
          value: '0',
          label: "否"
        }
      ],
      contentType: 'float',
      editAllow: true,
      saveAllow: true,
      pass: true,
      // -- 典型表单
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      // -- 行内表单
      formInline: {
        user: '',
        region: ''
      },
      // -- 对齐方式
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      // -- 表单验证
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules3: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      // -- 自定义校验规则
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      },
      // --
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: ''
      },
      testRule: { required: true, message: '域名不能为空', trigger: 'blur' }
    };
  },
  methods: {
    onSubmit() { console.log("submit!", this.form) },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("success submit!!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) { this.$refs[formName].resetFields() },
    removeDomain(item) {
      let index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      })
    },
    // ---
    numeratorHandle(ev, index) {// ev ? = val   //??
      console.log('numeratorHandle', ev, index)
      this.info.list[index].rank = ev
    },
    denominatorHandle(ev, index) {
      console.log('denominatorHandle', ev, index)
      this.info.list[index].total = ev
    },
    startTimeHandle(ev, index) {// ev ? = val   //??
      console.log('startTime', ev)
      // ev = this.formatDate(ev) //时间obj 格式化
      this.info.list[index].startTm = ev

    },
    endTimeHandle(ev, index) {
      console.log('endTime', ev)
      // ev == '至今' && ( ev = new Date() )        //时间obj 格式化
      // ev != '' && ( ev = this.formatDate(ev) )   //时间obj 格式化
      this.info.list[index].endTm = ev
      console.log('endTime -- ', ev)
    },
    add () {
      if (!this.editAllow) return this.$message.warning('查看状态下无法新增')
      this.info.list.push(
        {
          name: '',
          source: '',
          money: '',
          mark: '',
          startTm: '',
          endTm: '',
          rank: '',
          total: '',
        }
      )
    },
    formatDate (time) {
      // console.log('time', time)
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      month = month < 10 ? ('0' + month) : month
      return year + '-' + month
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.save()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitNext(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.save(true)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) { this.$refs[formName].resetFields() },
    getInfo () {
      let declareId = this.status.declareId
      // let declareId = 4350449116009472
      let url = `/job/scient/list`
      let query = {'w':[{'k':'declareId','v': declareId,'m':'EQ'}],'o':[],'p':{}}

      this.$http.get(url, {}, query).then(res => {
        console.log('res', res)
        if (res.list && res.list.length == 0) return this.add()
        if (res && res.list && res.list.length > 0) {

          this.info.list = res.list.map(item => {
            item.mark += ''
            return item
          })
        }

      }).catch(err => {console.log('err', err)})
    },
    sliceInfo (i) {
      if (!this.editAllow) return this.$message.warning('查看状态下无法删除')
      let { id } = this.info.list.splice(i,1)[0]
      console.log('id', id)
      this.delIdList.push(id)
    },
    save (next) { // 编辑修改传id  保存不传
      console.log('save info', this.info)
      console.log('save delIdList', this.delIdList)

      return
      let action = next ?  'next' : 'save'
      let delIdList = [...this.delIdList]
      let scientList = this.info.list.map(item => {
        let obj = {...item}
        return obj
      })
      console.log({action, scientList, delIdList})
      this.$http.post('/job/scient/edit', {action, scientList, delIdList}).then(res => {//走入then 及判判断成功
        console.log('res', res)
        this.getInfo()//sace success  => getInfo again
        this.delIdList = []
        next && this.saveNext(res.step)
      }).catch(err => {
        console.log(err)
      })
    },
    delHandle (i) {
      this.$confirm('是否删除该条记录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.delete(i)
      }).catch(() => { this.$message({ type: 'info', message: '已取消删除' }) })
    },
    delete (i) { //"delIdList": [4347560138658816,4347293044937738]  //删除示例  内部传  id
      //
      let action = 'save'
      let id = this.info.list[i].id
      if (!id) return this.info.list.splice(i,1)
      let delIdList = [id]
      this.$http.post('/job/scient/edit', {action, delIdList}).then(res => {//走入then 及判判断成功
        console.log('res', res)
        if (res && res.code == 0) {
          console.log('delete success')
          this.info.list.splice(i,1)
          this.$message({ type: 'success', message: '删除成功!' })
        }
      }).catch(err => {
        console.log('err',err)
      })
    },
    test () {
      console.log('test info', this.info)
      console.log('test delIdList', this.delIdList)
    },
    previous () {
      return this.$message('上一步')
      this.setNowStep(9)
      this.$router.push({name: 'page9'})
    },
    next () {
      return this.$message('下一步')
      this.setNowStep(11)
      this.$router.push({name: 'page11'})
    },
    saveNext (maxStep) {
      return this.$message('下一页')
      this.setStep(maxStep)
      this.setNowStep(11)
      this.$router.push({name: 'page11'})
    },
  }
};
</script>

<style lang="less">
.show-list {
  display: flex;
  flex-wrap: wrap;
  & > li {
    width: 400px;
    margin: 0 20px 20px 0;
    text-align: left;
  }
}
.form-init {
  .el-form-item { // el-form-item标签
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    .el-form-item__label {//title
      float: none;  width: auto!important; text-align: left; height: 26px; line-height: 26px;
    }
    .el-form-item__content {//输入 内容
      margin-left: 0!important; line-height: 32px; height: 32px;
      .el-form-item__error {//输入err  文字提醒
        top: 32px; left: 4px;
      }
    }
  }
}
.align { // 对齐方式
  .el-form-item {
    margin-bottom: 10px;
    .el-form-item__label {//title
      padding-bottom: 0;
    }
  }
}

// --
.content-wrap { margin-bottom: 17px;
    .content-item {border-bottom: 1px dashed #ddd; margin-bottom: 50px; padding-bottom: 13px;}
    .content-item:last-child {border-bottom: 0; margin-bottom: 0px;}
    .subtitle {
      font-size:16px; font-family:MicrosoftYaHei-Bold; font-weight:bold; color:rgba(51,51,51,1); margin-bottom: 21px; position: relative;
      .reduce {position: absolute; right: 25px; top: -1px;}
    }
    .content {
      display: flex;  flex-wrap: wrap;
      .item-wrap {
        width: 250px; margin-right: 20px; margin-bottom: 5px;
        .item-title {font-size:14px; font-family:MicrosoftYaHei-Bold; font-weight:bold; color:rgba(51,51,51,1); margin-bottom: 9px;}
      }
      .item-wrap:nth-child(3n){margin-right: 0;}
    }
  }
  .btn-wrap {
    display: flex; justify-content: center;
    .btn-add {width: 40px; height: 40px; border-radius: 50%;}
  }
  .operate-wrap {
    padding-top: 60px; display: flex; justify-content: center;
    .operate{
      display: flex;
      button.disabled {pointer-events: none; cursor: no-drop; border: none; background:rgba(221,221,221,1); color:#fff;}
      button {cursor: pointer; text-align: center; box-sizing: border-box; background: #fff; border: 1px solid #b3d8ff; color: #b3d8ff;width: 100px; height: 40px; margin-right: 10px;}
      .next {background:linear-gradient(150deg,rgba(80,212,248,1),rgba(0,134,254,1)); color: #fff; border: 0;}
      .next.el-button {background:linear-gradient(150deg,rgba(80,212,248,1),rgba(0,134,254,1)); color: #fff; border: 0;}
      .next.el-button:hover {background:linear-gradient(150deg,rgba(0,134,254,1),rgba(80,212,248,1));}
      .el-button:last-child {margin-right: 0;}
      .btn:hover {background: #b3d8ff; color: #fff;}
      .el-button.disabled {background:rgba(221,221,221,1)}
    }
  }

</style>
