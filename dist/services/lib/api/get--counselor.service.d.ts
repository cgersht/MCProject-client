import { Observable } from 'rxjs';
import { Cunselor } from 'types';
import { HttpServiceBase } from './http-service.base';
export declare class GetCounselorService extends HttpServiceBase {
    private readonly _serverUrl;
    getCounselorList$(counselorType: string): Observable<Cunselor[]>;
}
