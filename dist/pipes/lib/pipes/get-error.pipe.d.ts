import { PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
export declare class GetErrorPipe implements PipeTransform {
    transform(errors: ValidationErrors): string[];
}
