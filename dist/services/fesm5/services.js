import { Injectable, ɵɵdefineInjectable, Component, NgModule, ɵɵinject } from '@angular/core';
import { __assign, __read, __extends } from 'tslib';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { HttpRequestModel } from 'types';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ServicesService = /** @class */ (function () {
    function ServicesService() {
    }
    ServicesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ServicesService.ctorParameters = function () { return []; };
    /** @nocollapse */ ServicesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ServicesService_Factory() { return new ServicesService(); }, token: ServicesService, providedIn: "root" });
    return ServicesService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    /**
     * @return {?}
     */
    ServicesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ServicesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-services',
                    template: "\n    <p>\n      services works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ServicesComponent.ctorParameters = function () { return []; };
    return ServicesComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ServicesComponent],
                    imports: [],
                    exports: [ServicesComponent]
                },] }
    ];
    return ServicesModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-options.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetOptionsService = /** @class */ (function () {
    function GetOptionsService(http) {
        this.http = http;
    }
    //
    //
    /**
     * @param {?} path
     * @param {?} imagesPath
     * @return {?}
     */
    GetOptionsService.prototype.initService = 
    //
    /**
     * @param {?} path
     * @param {?} imagesPath
     * @return {?}
     */
    function (path, imagesPath) {
        var _this = this;
        console.log("============" + path);
        return this.http.get(path).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (__assign({}, item, { imgSource: imagesPath + "/" + item['img'] + ".png" })); })); })), tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.options = result; })), tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return console.log("**************" + { result: result }); }))).toPromise();
    };
    /**
     * @return {?}
     */
    GetOptionsService.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this.options;
    };
    /**
     * @param {?} img
     * @return {?}
     */
    GetOptionsService.prototype.getOptionByImage = /**
     * @param {?} img
     * @return {?}
     */
    function (img) {
        if (!this.options) {
            return '';
        }
        return (this.options.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.img === img; })) || { imgSource: 'notFound' }).imgSource;
    };
    GetOptionsService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    GetOptionsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ GetOptionsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GetOptionsService_Factory() { return new GetOptionsService(ɵɵinject(HttpClient)); }, token: GetOptionsService, providedIn: "root" });
    return GetOptionsService;
}());
if (false) {
    /** @type {?} */
    GetOptionsService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    GetOptionsService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ConfigurationService.prototype.initConfiguration = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var _this = this;
        return combineLatest(this.http.get(path + "/ipConfig.json"), this.http.get(path + "/settingsConfig.json")).pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            var _a;
            return _a = __read(response, 2), _this.ips = _a[0], _this.settingConfig = _a[1], response;
        }))).toPromise();
    };
    ConfigurationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(ɵɵinject(HttpClient)); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());
if (false) {
    /** @type {?} */
    ConfigurationService.prototype.ips;
    /** @type {?} */
    ConfigurationService.prototype.settingConfig;
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/project-details.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProjectDetailsService = /** @class */ (function () {
    function ProjectDetailsService() {
        this.project = {
            ProjectName: '',
            ProjectCompany: '',
            ProjectAdress: '',
            ProjectType: 0,
            EntrepreneurId: '',
            ProjectRova: ''
        };
    }
    ProjectDetailsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ProjectDetailsService.ctorParameters = function () { return []; };
    /** @nocollapse */ ProjectDetailsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProjectDetailsService_Factory() { return new ProjectDetailsService(); }, token: ProjectDetailsService, providedIn: "root" });
    return ProjectDetailsService;
}());
if (false) {
    /** @type {?} */
    ProjectDetailsService.prototype.project;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/http-service.base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var HttpServiceBase = /** @class */ (function () {
    function HttpServiceBase(http, config) {
        this.http = http;
        this.config = config;
        this.index = 0;
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.get$ = /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        if (httpRequest.isText) {
            return this._get$(httpRequest);
        }
        return this.http.get(httpRequest.fullUrl, { params: __assign({}, httpRequest.fullParams) });
    };
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.delete$ = /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.delete(httpRequest.fullUrl, { params: __assign({}, httpRequest.fullParams) });
    };
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.post$ = /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        if (httpRequest.isText) {
            return this._post$(httpRequest);
        }
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { headers: httpRequest.headers, params: __assign({}, httpRequest.fullParams) });
    };
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.request$ = /**
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.request('GET', httpRequest.fullUrl, {
            params: __assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    };
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.requestPost$ = /**
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.request('POST', httpRequest.fullUrl, {
            body: __assign({}, httpRequest.body),
            params: __assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    };
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype._get$ = /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.get(httpRequest.fullUrl, { params: __assign({}, httpRequest.fullParams), responseType: 'text' });
    };
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype._post$ = /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { params: __assign({}, httpRequest.fullParams), responseType: 'text' });
    };
    HttpServiceBase.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpServiceBase.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigurationService }
    ]; };
    return HttpServiceBase;
}());
if (false) {
    /** @type {?} */
    HttpServiceBase.prototype.index;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get--counselor.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetCounselorService = /** @class */ (function (_super) {
    __extends(GetCounselorService, _super);
    function GetCounselorService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GetCounselorService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "counselor/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GetCounselorService.prototype.getCounselorOfficeTypeList$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCounselorOfficeType',
        }));
        // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');
    };
    /**
     * @param {?} counselorType
     * @return {?}
     */
    GetCounselorService.prototype.getCounselorList$ = /**
     * @param {?} counselorType
     * @return {?}
     */
    function (counselorType) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCounselor',
            params: { counselorType: counselorType }
        }));
        // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');
    };
    /**
     * @param {?} counselor
     * @return {?}
     */
    GetCounselorService.prototype.addCounselor$ = /**
     * @param {?} counselor
     * @return {?}
     */
    function (counselor) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addCounselor',
            body: counselor
        }));
    };
    GetCounselorService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ GetCounselorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GetCounselorService_Factory() { return new GetCounselorService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: GetCounselorService, providedIn: "root" });
    return GetCounselorService;
}(HttpServiceBase));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-project.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetProjectService = /** @class */ (function (_super) {
    __extends(GetProjectService, _super);
    function GetProjectService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GetProjectService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "project/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GetProjectService.prototype.getProjectList$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getProject',
        }));
        // return this.http.get<Project[]>('localhost:3030/project/getProject');
    };
    /**
     * @param {?} project
     * @return {?}
     */
    GetProjectService.prototype.addProject$ = /**
     * @param {?} project
     * @return {?}
     */
    function (project) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addProject',
            body: project
        }));
    };
    GetProjectService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ GetProjectService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GetProjectService_Factory() { return new GetProjectService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: GetProjectService, providedIn: "root" });
    return GetProjectService;
}(HttpServiceBase));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-entrepreneur.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetEntrepreneurService = /** @class */ (function (_super) {
    __extends(GetEntrepreneurService, _super);
    function GetEntrepreneurService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GetEntrepreneurService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "entrepreneur/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GetEntrepreneurService.prototype.getEntrepreneurList$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getEntrepreneur',
        }));
        // return this.http.get<Entrepreneur[]>('http://localhost:3030/entrepreneur/getEntrepreneur');
    };
    /**
     * @param {?} entrepreneur
     * @return {?}
     */
    GetEntrepreneurService.prototype.addEntrepreneur$ = /**
     * @param {?} entrepreneur
     * @return {?}
     */
    function (entrepreneur) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addEntrepreneur',
            body: entrepreneur
        }));
    };
    GetEntrepreneurService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ GetEntrepreneurService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GetEntrepreneurService_Factory() { return new GetEntrepreneurService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: GetEntrepreneurService, providedIn: "root" });
    return GetEntrepreneurService;
}(HttpServiceBase));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/entrepreneur-details.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntrepreneurDetailsService = /** @class */ (function () {
    // :Entrepreneur={
    //   EntrepreneurCompany: '',
    //   EntrepreneurName: '',
    //   EntrepreneurPhone: '',
    //   EntrepreneurMail: '',
    //   EntrepreneurSecretary: ''
    // }
    function EntrepreneurDetailsService() {
        this.entrepreneur = {};
    }
    EntrepreneurDetailsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EntrepreneurDetailsService.ctorParameters = function () { return []; };
    /** @nocollapse */ EntrepreneurDetailsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EntrepreneurDetailsService_Factory() { return new EntrepreneurDetailsService(); }, token: EntrepreneurDetailsService, providedIn: "root" });
    return EntrepreneurDetailsService;
}());
if (false) {
    /** @type {?} */
    EntrepreneurDetailsService.prototype.entrepreneur;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: services.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ConfigurationService, EntrepreneurDetailsService, GetCounselorService, GetEntrepreneurService, GetOptionsService, GetProjectService, ProjectDetailsService, ServicesComponent, ServicesModule, ServicesService, HttpServiceBase as ɵa };
//# sourceMappingURL=services.js.map
