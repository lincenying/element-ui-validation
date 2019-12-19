interface retruns {
    type: string
    required?: boolean
    message: string
    trigger: string
    validator?: any
    pattern?: any
}

export interface Rules {
    string(text: string, max?: number, min?: number, trigger?: string, required?: boolean): retruns[]
    select(text: string, multiple?: boolean): retruns[]
    url(text: string, required?: boolean): retruns[]
    integer(text: string, max?: number, min?: number, trigger?: string, required?: boolean): retruns[]
    money(text: string, max?: number, min?: number, trigger?: string, required?: boolean): retruns[]
    phone(text: string, required?: boolean): retruns[]
    bank_card(text: string, required?: boolean): retruns[]
    email(text: string, required?: boolean): retruns[]
    qq(text: string, required?: boolean): retruns[]

}
