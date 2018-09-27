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
    ____2: rules.string('地址'),

    // 下拉框, 单选框, 复选框规则
    ____3: rules.select('城市'),

    // 网址规则
    ____4: rules.url('网址'),

    // 整数规则
    ____5: rules.integer('人数'),

    // 金额规则 rules.money_max_min('提示文字', 最大值, 最小值)
    ____6: rules.money_max_min('金额', 0.8, 0),

    // 手机号规则
    ____7: rules.phone('手机号码'),

    // 银行卡规则
    ____8: rules.back_card('银行卡'),
}
```

License

MIT
