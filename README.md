# element-ui validation

element-ui 验证规则

```
更新日志:

v1.2.2
+ 新增了d.ts文件, 在vscode中可以提示方法和参数
+ 新增required参数, 为空时不检测, 不为空时自动检测
```


##### install

```bash
yarn add element-ui-validation
# or
npm install element-ui-validation --save
```

```javascript
// api:

// 主要验证普通文本框
rules.string(text: String, max?: Number, min?: Number, trigger?: String, required?: Boolean)
// text: 提示文本
// max: (默认: '') 被验证字符串最大长度
// min: (默认: '') 被验证字符串最小长度
// trigger: (默认: 'blur') 触发事件: 默认为`blur`
// required: (默认: true) 是否允许为空, 当为true时, 不能为空, 且必须符合其他验证规则, 当为false时, 可以为空, 但是不为空时, 需符合其他验证规则

// 主要验证下拉框, 复选框, 单选框之类
rules.select(text: String, multiple?: Boolean)
// text: 提示文本
// multiple: 是否为数组

// 验证网址类
rules.url(text: String, required?: Boolean)
// text: 提示文本
// required: (默认: true) 是否允许为空, 当为true时, 不能为空, 且必须符合Url规则, 当为false时, 可以为空, 但是不为空时, 需符合Url规则

// 整数(包含0), 通过正则匹配, 可限制最大值最小值
rules.integer(text: String, max?: Number, min?: Number, trigger?: String, required?: Boolean)
// text: 提示文本
// max: (默认: '') 被验证数值最大值 (注意: 非长度)
// min: (默认: '') 被验证数值最小值 (注意: 非长度)
// trigger: (默认: 'blur') 触发事件: 可以改成`change`
// required: (默认: true) 是否允许为空, 当为true时, 不能为空, 且必须符合其他验证规则, 当为false时, 可以为空, 但是不为空时, 需符合其他验证规则

// 金额类型, 通过正则验证, 支持小数点后两位, 且可以限制最大值和最小值
rules.money(text: String, max?: Number, min?: Number, trigger?: String, required?: Boolean)
// text: 提示文本
// max: (默认: '') 被验证数值最大值 (注意: 非长度)
// min: (默认: '') 被验证数值最小值 (注意: 非长度)
// trigger: (默认: 'blur') 触发事件: 可以改成`change`
// required: (默认: true) 是否允许为空, 当为true时, 不能为空, 且必须符合其他验证规则, 当为false时, 可以为空, 但是不为空时, 需符合其他验证规则

// 国内通用手机号码
rules.phone(text: String, required?: Boolean)
// text: 提示文本
// required: (默认: true) 是否允许为空, 当为true时, 不能为空, 且必须符合手机号码规则, 当为false时, 可以为空, 但是不为空时, 需符合手机号码规则

// 国内通用银行卡
rules.bank_card(text: String, required?: Boolean)
// text: 提示文本
// required: (默认: true) 是否允许为空, 当为true时, 不能为空, 且必须符合银行卡规则, 当为false时, 可以为空, 但是不为空时, 需符合银行卡规则

// 邮箱验证
rules.email(text: String, required?: Boolean)
// text: 提示文本
// required: (默认: true) 是否允许为空, 当为true时, 不能为空, 且必须符合邮箱规则, 当为false时, 可以为空, 但是不为空时, 需符合邮箱规则

// QQ号
rules.qq(text: String, required?: Boolean)
// text: 提示文本
// required: (默认: true) 是否允许为空, 当为true时, 不能为空, 且必须符合QQ号规则, 当为false时, 可以为空, 但是不为空时, 需符合QQ号规则

// 身份证号码
rules.idcard(text: String, required?: Boolean)
// text: 提示文本
// required: (默认: true) 是否允许为空, 当为true时, 不能为空, 且必须符合身份证号码规则, 当为false时, 可以为空, 但是不为空时, 需符合QQ号规则


```

```html
<el-form :model="data.form" :rules="data.rules" ref="ref">
    <el-form-item label="地址：" label-width="120px" prop="string1">
        <el-input v-model="data.form.string1" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码：" label-width="120px" prop="string2">
        <el-input v-model="data.form.string2" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码：" label-width="120px" prop="string3">
        <el-input v-model="data.form.string3" auto-complete="off"></el-input>
    </el-form-item>
</el-form>
```

```javascript
import rules from 'element-ui-validation'

export default {
    data() {
        // 自定义规则
        const validator = (rule, value, callback) => {
            if (Number(this.int2) < Number(this.int1)) {
                return callback(new Error('int2不能小于int1'))
            }
            callback()
        }
        return {
            form: {
                string1: '',
                string2: '',
                string3: '',
                int1: '',
                int2: ''
            },
            data: {
                rules: {
                    // 输入框规则 rules.string('提示文字', 最大长度, 最小长度)
                    string1: rules.string('地址'),
                    string2: rules.string('密码', null, 6), // 最短6位
                    string3: rules.string('密码', 16, 6), // 6-16位

                    // 下拉框, 单选框, 复选框规则
                    select1: rules.select('城市'),
                    select2: rules.select('城市', true), // 多选

                    // 网址规则
                    url: rules.url('网址'),

                    // 整数规则(包含0)
                    integer1: rules.integer('人数'),
                    integer2: rules.integer('人数', 100), // 最大值100
                    integer3: rules.integer('人数', 100, 10), // 10-100
                    // 自行新增规则
                    integer4: [
                        ...rules.integer('人数'),
                        {
                            validator,
                            trigger: 'blur'
                        }
                    ],

                    // 金额规则 rules.money('提示文字', 最大值, 最小值)
                    money: rules.money('金额', 0.8, 0),

                    // 手机号规则
                    phone: rules.phone('手机号码'),

                    // 银行卡规则
                    bank_card: rules.bank_card('银行卡'),

                    // 邮箱
                    email: rules.email('邮箱'),

                    // QQ
                    email: rules.qq('QQ号码'),
                }
            }
        }
    }
}
```

License

MIT
