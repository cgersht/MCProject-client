import { Observable } from 'rxjs';
import { Cunselor } from 'types';
import { HttpServiceBase } from './http-service.base';
export declare class GetCounselorService extends HttpServiceBase {
    private readonly _serverUrl;
    getCounselorOfficeTypeList$(): Observable<Cunselor[]>;
    getCounselorList$(counselorType: string): Observable<Cunselor[]>;
    addCounselor$(counselor: Cunselor): Observable<boolean>;
}
