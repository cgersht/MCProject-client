export declare class ValidatorsService {
    constructor();
    textValidators(control: any): {
        invalidPhone: boolean;
    };
    phoneValidator(control: any): {
        invalidPhone: boolean;
    };
    emailValidator(control: any): {
        invalidEmailAddress: boolean;
    };
}
