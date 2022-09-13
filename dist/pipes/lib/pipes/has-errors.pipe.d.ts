import { PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class HasErrorsPipe implements PipeTransform {
    transform(formGroup: FormGroup, controlName: string): any;
}
