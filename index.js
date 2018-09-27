export default {
    money: text => {
        text = text || "金额";
        return [
            {
                type: "string",
                required: true,
                message: "请输入" + text,
                trigger: "blur"
            },
            {
                pattern: /^(([1-9]\d{0,9})|([1-9]\d{0,9})(\.\d{1,2})|(0\.0[1-9])|(0\.[1-9][0-9]{0,1}))$/,
                message: text + "只能是数字和小数点后面两位",
                trigger: "blur"
            }
        ];
    },
    string: (text, max, min) => {
        const rules = {
            type: "string",
            required: true,
            message: "请输入" + text,
            trigger: "blur"
        }
        if (max) rules.max = max
        if (min) rules.min = min
        return [
            rules
        ];
    },
    select: text => {
        return [
            {
                required: true,
                message: "请选择" + text,
                trigger: "change"
            }
        ];
    },
    url: text => {
        return [
            {
                required: true,
                message: "请输入" + text,
                type: "url",
                trigger: "blur"
            }
        ];
    },
    integer: text => {
        return [
            {
                required: true,
                message: "请输入" + text,
                trigger: "blur"
            },
            {
                type: "string",
                pattern: /^[1-9][\d]*$/,
                message: text + "只能是整数",
                trigger: "blur"
            }
        ];
    },
    money_max_min: (text, max, min) => {
        return [
            {
                required: true,
                validator: (rule, value, callback) => {
                    const preg = /^(([1-9]\d{0,9})|([1-9]\d{0,9})(\.\d{1,2})|(0\.0[1-9])|(0\.[1-9][0-9]{0,1}))$/;
                    if (!value || value === "") {
                        callback(new Error("请填写" + text));
                    } else if (!preg.test(value)) {
                        callback(
                            new Error(text + "只能是数字和小数点后面两位")
                        );
                    } else if (max && Number(value) > max) {
                        callback(new Error(text + "不能大于" + max));
                    } else if (min && Number(value) < min) {
                        callback(new Error(text + "不能小于" + min));
                    } else {
                        callback();
                    }
                },
                trigger: "blur"
            }
        ];
    },
    phone: text => {
        return [
            {
                required: true,
                message: "请输入" + text,
                trigger: "blur"
            },
            {
                type: 'string',
                pattern: /^[1][3456789][0-9]{9}$/,
                message: text + '格式不正确',
                trigger: 'blur'
            }
        ];
    },
    bank_card: text => {
        return [
            {
                required: true,
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
};
