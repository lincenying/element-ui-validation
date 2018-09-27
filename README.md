# element-ui validation

element-ui 验证规则

##### install

```bash
yarn add element-ui-validation
# or
npm install element-ui-validation --save
```

```javascript
import rules from 'element-ui-validation'

rules: {
    // 金钱规格
    ____1: rules.money('金额'),

    // 输入框规则 rules.string('提示文字', 最大长度, 最小长度)
    string1: rules.string('地址'),
    string2: rules.string('密码', null, 6), // 最短6位
    string3: rules.string('密码', 16, 6), // 6-16位

    // 下拉框, 单选框, 复选框规则
    select1: rules.select('城市'),
    select2: rules.select('城市', true), // 多选

    // 网址规则
    url: rules.url('网址'),

    // 整数规则
    integer1: rules.integer('人数'),
    integer2: rules.integer('人数', 100), // 最大值
    integer3: rules.integer('人数', 100, 10), // 10-100

    // 金额规则 rules.money_max_min('提示文字', 最大值, 最小值)
    money: rules.money('金额', 0.8, 0),

    // 手机号规则
    phone: rules.phone('手机号码'),

    // 银行卡规则
    bank_card: rules.bank_card('银行卡'),

    // 邮箱
    email: rules.email('邮箱'),
}
```

License

MIT
