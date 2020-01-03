declare namespace Rules {
    export function string(
        text: string,
        max?: number,
        min?: number,
        trigger?: string,
        required?: boolean
    ): {
        type: string
        required?: boolean
        message: string
        trigger: string
        validator?: any
        pattern?: any
    }[]
    export function select(
        text: string,
        multiple?: boolean
    ): {
        type: string
        required?: boolean
        message: string
        trigger: string
        validator?: any
        pattern?: any
    }[]
    export function url(
        text: string,
        required?: boolean
    ): {
        type: string
        required?: boolean
        message: string
        trigger: string
        validator?: any
        pattern?: any
    }[]
    export function integer(
        text: string,
        max?: number,
        min?: number,
        trigger?: string,
        required?: boolean
    ): {
        type: string
        required?: boolean
        message: string
        trigger: string
        validator?: any
        pattern?: any
    }[]
    export function money(
        text: string,
        max?: number,
        min?: number,
        trigger?: string,
        required?: boolean
    ): {
        type: string
        required?: boolean
        message: string
        trigger: string
        validator?: any
        pattern?: any
    }[]
    export function phone(
        text: string,
        required?: boolean
    ): {
        type: string
        required?: boolean
        message: string
        trigger: string
        validator?: any
        pattern?: any
    }[]
    export function bank_card(
        text: string,
        required?: boolean
    ): {
        type: string
        required?: boolean
        message: string
        trigger: string
        validator?: any
        pattern?: any
    }[]
    export function email(
        text: string,
        required?: boolean
    ): {
        type: string
        required?: boolean
        message: string
        trigger: string
        validator?: any
        pattern?: any
    }[]
    export function qq(
        text: string,
        required?: boolean
    ): {
        type: string
        required?: boolean
        message: string
        trigger: string
        validator?: any
        pattern?: any
    }[]
    export function idcard(
        text: string,
        required?: boolean
    ): {
        type: string
        required?: boolean
        message: string
        trigger: string
        validator?: any
        pattern?: any
    }[]
}
export = Rules;
