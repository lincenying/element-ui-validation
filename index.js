const isNumber = num => num === Number(num)

const isInteger = Number.isInteger || function(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

const Rules = {
    // 字符串类型, 即一般文本框
    string: (text, max, min, trigger) => {
        const rules = [{
            type: "string",
            required: true,
            message: "请输入" + text,
            trigger: "blur"
        }];
        if (isInteger(max) || isInteger(min)) {
            rules.push({
                required: true,
                validator: (rule, value, callback) => {
                    if (isInteger(max) && value.length > max) {
                        return callback(new Error(text + "长度不能大于" + max));
                    }
                    if (isInteger(min) && value.length < min) {
                        return callback(new Error(text + "长度不能小于" + min));
                    }
                    callback();
                },
                trigger: "blur"
            });
        }
        return rules;
    },
    // 选择类型, 如 单选框, 复选框, 下拉框 之类的
    select: (text, multiple) => {
        const rules = {
            required: true,
            message: "请选择" + text,
            trigger: "change"
        };
        if (multiple) {
            rules.type = "array";
        }
        return [rules];
    },
    url: text => {
        return [
            {
                required: true,
                message: text + '格式不正确',
                type: "url",
                trigger: "blur"
            }
        ];
    },
    // 整数(包含0), 通过正则匹配, 可限制最大值最小值
    integer: (text, max, min, trigger) => {
        const rules = []
        rules.push({
            required: true,
            validator: (rule, value, callback) => {
                if (value === '') {
                    return callback(new Error(text + "不能为空"));
                } else {
                    const preg = /^(([0]{1})|([1-9][0-9]*))$/
                    if (!preg.test(value)) {
                        return callback(new Error(text + "只能是整数"));
                    }
                }
                callback();
            },
            trigger: trigger || "blur"
        });
        if (isInteger(max) || isInteger(min)) {
            rules.push({
                required: true,
                validator: (rule, value, callback) => {
                    if (isInteger(max) && Number(value) > max) {
                        return callback(new Error(text + "不能大于" + max));
                    }
                    if (isInteger(min) && Number(value) < min) {
                        return callback(new Error(text + "不能小于" + min));
                    }
                    callback();
                },
                trigger: trigger || "blur"
            });
        }
        return rules;
    },
    // 金额类型, 通过正则验证, 支持小数点后两位, 且可以限制最大值和最小值
    money: (text, max, min, trigger) => {
        text = text || "金额";
        const rules = []
        rules.push({
            required: true,
            validator: (rule, value, callback) => {
                if (value === '') {
                    return callback(new Error(text + "不能为空"));
                } else {
                    const preg = /^(([0]{1})|([1-9]\d*)|([1-9]\d*)(\.\d{1,2})|(0\.0[1-9]{1})|(0\.[1-9][0-9]{0,1}))$/
                    if (!preg.test(value)) {
                        return callback(new Error(text + "只能是数字和小数点后面两位"));
                    }
                }
                callback();
            },
            trigger: trigger || "blur"
        });
        if (isNumber(max) || isNumber(min)) {
            rules.push({
                required: true,
                validator: (rule, value, callback) => {
                    if (isNumber(max) && Number(value) > max) {
                        return callback(new Error(text + "不能大于" + max));
                    }
                    if (isNumber(min) && Number(value) < min) {
                        return callback(new Error(text + "不能小于" + min));
                    }
                    callback();
                },
                trigger: trigger || "blur"
            });
        }
        return rules;
    },
    // 国内通用手机号码
    phone: text => {
        return [
            {
                required: true,
                message: "请输入" + text,
                trigger: "blur"
            },
            {
                type: "string",
                pattern: /^[1][3456789][0-9]{9}$/,
                message: text + "格式不正确",
                trigger: "blur"
            }
        ];
    },
    // 国内通用银行卡
    bank_card: text => {
        return [
            {
                required: true,
                message: "请输入" + text,
                trigger: "blur"
            },
            {
                type: "string",
                pattern: /^(\d{16}|\d{19})$/,
                message: text + "格式不正确",
                trigger: "blur"
            }
        ];
    },
    // 邮箱验证
    email: text => {
        return [
            {
                required: true,
                message: text + "不能为空",
                trigger: "blur"
            },
            {
                type: "string",
                pattern: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                message: text + "格式不正确",
                trigger: "blur"
            }
        ];
    },
    // QQ号
    qq: text => {
        return [
            {
                required: true,
                message: text + "不能为空",
                trigger: "blur"
            },
            {
                type: "string",
                pattern: /^[1-9][0-9]{4,10}$/,
                message: text + "格式不正确",
                trigger: "blur"
            }
        ];
    }
};
export default Rules
