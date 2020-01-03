const isNumber = num => num === Number(num)

const isInteger =
    Number.isInteger ||
    function(value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value
    }

class Rules {
    // 字符串类型, 即一般文本框
    // eslint-disable-next-line max-params
    string(text, max, min, trigger, required = true) {
        const rules = [
            {
                type: 'string',
                required,
                message: '请输入' + text,
                trigger: trigger || 'blur'
            }
        ]
        if (isInteger(max) || isInteger(min)) {
            rules.push({
                required,
                validator: (rule, value, callback) => {
                    if (!required && (value === '' || value === null || value === undefined)) {
                        return callback()
                    }
                    if (isInteger(max) && value.length > max) {
                        return callback(new Error(text + '长度不能大于' + max))
                    }
                    if (isInteger(min) && value.length < min) {
                        return callback(new Error(text + '长度不能小于' + min))
                    }
                    callback()
                },
                trigger: trigger || 'blur'
            })
        }
        return rules
    }
    // 选择类型, 如 单选框, 复选框, 下拉框 之类的
    select(text, multiple) {
        const rules = {
            required: true,
            message: '请选择' + text,
            trigger: 'change'
        }
        if (multiple) {
            rules.type = 'array'
        }
        return [rules]
    }
    url(text, required = true) {
        return [
            {
                required,
                message: text + '格式不正确',
                type: 'url',
                trigger: 'blur'
            }
        ]
    }
    // 整数(包含0), 通过正则匹配, 可限制最大值最小值
    // eslint-disable-next-line max-params
    integer(text, max, min, trigger, required = true) {
        const rules = []
        rules.push({
            required,
            validator: (rule, value, callback) => {
                if (!required && (value === '' || value === null || value === undefined)) {
                    return callback()
                }
                if (required && value === '') {
                    return callback(new Error(text + '不能为空'))
                }
                const preg = /^(([0]{1})|([1-9][0-9]*))$/
                if (!preg.test(value)) {
                    return callback(new Error(text + '只能是整数'))
                }

                callback()
            },
            trigger: trigger || 'blur'
        })
        if (isInteger(max) || isInteger(min)) {
            rules.push({
                required,
                validator: (rule, value, callback) => {
                    if (!required && (value === '' || value === null || value === undefined)) {
                        return callback()
                    }
                    if (isInteger(max) && Number(value) > max) {
                        return callback(new Error(text + '不能大于' + max))
                    }
                    if (isInteger(min) && Number(value) < min) {
                        return callback(new Error(text + '不能小于' + min))
                    }
                    callback()
                },
                trigger: trigger || 'blur'
            })
        }
        return rules
    }
    // 金额类型, 通过正则验证, 支持小数点后两位, 且可以限制最大值和最小值
    // eslint-disable-next-line max-params
    money(text, max, min, trigger, required = true) {
        text = text || '金额'
        const rules = []
        rules.push({
            required,
            validator: (rule, value, callback) => {
                if (!required && (value === '' || value === null || value === undefined)) {
                    return callback()
                }
                if (required && value === '') {
                    return callback(new Error(text + '不能为空'))
                }
                const preg = /^(([0]{1})|([1-9]\d*)|([1-9]\d*)(\.\d{1,2})|(0\.0[1-9]{1})|(0\.[1-9][0-9]{0,1}))$/
                if (!preg.test(value)) {
                    return callback(new Error(text + '只能是数字和小数点后面两位'))
                }

                callback()
            },
            trigger: trigger || 'blur'
        })
        if (isNumber(max) || isNumber(min)) {
            rules.push({
                required,
                validator: (rule, value, callback) => {
                    if (!required && (value === '' || value === null || value === undefined)) {
                        return callback()
                    }
                    if (isNumber(max) && Number(value) > max) {
                        return callback(new Error(text + '不能大于' + max))
                    }
                    if (isNumber(min) && Number(value) < min) {
                        return callback(new Error(text + '不能小于' + min))
                    }
                    callback()
                },
                trigger: trigger || 'blur'
            })
        }
        return rules
    }
    // 国内通用手机号码
    phone(text, required = true) {
        return [
            {
                required,
                message: '请输入' + text,
                trigger: 'blur'
            },
            {
                type: 'string',
                pattern: /^[1][3456789][0-9]{9}$/,
                message: text + '格式不正确',
                trigger: 'blur'
            }
        ]
    }
    // 国内通用银行卡
    bank_card(text, required = true) {
        return [
            {
                required,
                message: '请输入' + text,
                trigger: 'blur'
            },
            {
                type: 'string',
                pattern: /^(\d{16}|\d{19})$/,
                message: text + '格式不正确',
                trigger: 'blur'
            }
        ]
    }
    // 邮箱验证
    email(text, required = true) {
        return [
            {
                required,
                message: text + '不能为空',
                trigger: 'blur'
            },
            {
                type: 'string',
                pattern: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                message: text + '格式不正确',
                trigger: 'blur'
            }
        ]
    }
    // QQ号
    qq(text, required = true) {
        return [
            {
                required,
                message: text + '不能为空',
                trigger: 'blur'
            },
            {
                type: 'string',
                pattern: /^[1-9][0-9]{4,10}$/,
                message: text + '格式不正确',
                trigger: 'blur'
            }
        ]
    }
    // 身份证号码验证
    // eslint-disable-next-line max-params
    idcard(text, required = true) {
        text = text || '身份证号码'
        const rules = []
        rules.push({
            required,
            validator: (rule, value, callback) => {
                if (!required && (value === '' || value === null || value === undefined)) {
                    return callback()
                }
                if (required && value === '') {
                    return callback(new Error(text + '不能为空'))
                }
                const city = {
                    11: '北京',
                    12: '天津',
                    13: '河北',
                    14: '山西',
                    15: '内蒙古',
                    21: '辽宁',
                    22: '吉林',
                    23: '黑龙江 ',
                    31: '上海',
                    32: '江苏',
                    33: '浙江',
                    34: '安徽',
                    35: '福建',
                    36: '江西',
                    37: '山东',
                    41: '河南',
                    42: '湖北 ',
                    43: '湖南',
                    44: '广东',
                    45: '广西',
                    46: '海南',
                    50: '重庆',
                    51: '四川',
                    52: '贵州',
                    53: '云南',
                    54: '西藏 ',
                    61: '陕西',
                    62: '甘肃',
                    63: '青海',
                    64: '宁夏',
                    65: '新疆',
                    71: '台湾',
                    81: '香港',
                    82: '澳门',
                    91: '国外 '
                }
                let tip = ''
                if (!value || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(value)) {
                    tip = '格式错误'
                } else if (!city[value.substr(0, 2)]) {
                    tip = '地址编码错误'
                } else {
                    //18位身份证需要验证最后一位校验位
                    if (value.length == 18) {
                        const arr_value = value.split('')
                        //∑(ai×Wi)(mod 11)
                        //加权因子
                        const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
                        //校验位
                        const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
                        let sum = 0
                        let ai = 0
                        let wi = 0
                        for (let i = 0; i < 17; i++) {
                            ai = arr_value[i]
                            wi = factor[i]
                            sum += ai * wi
                        }
                        if (parity[sum % 11] != arr_value[17]) {
                            tip = '校验位错误'
                        }
                    }
                }
                if (tip) {
                    return callback(new Error(text + tip))
                }
                callback()
            },
            trigger: 'blur'
        })
        return rules
    }
}
export default new Rules()
