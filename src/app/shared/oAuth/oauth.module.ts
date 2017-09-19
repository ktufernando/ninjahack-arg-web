import { Component,NgModule} from '@angular/core';
import { CommonModule }       from '@angular/common';
import { AuthService } from './auth.service';
import { ServerURLInterceptor } from './interceptor';
import { InterceptorService } from 'ng2-interceptors';
import { HttpModule,XHRBackend, RequestOptions  } from '@angular/http';

export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, serverURLInterceptor:ServerURLInterceptor){ // Add it here
  let service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(serverURLInterceptor); // Add it here
  return service;
}

@NgModule({
    imports :[CommonModule],
    providers:[
        AuthService,
        ServerURLInterceptor,
        {
      provide: InterceptorService,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions, ServerURLInterceptor] }

        ]
})
export class OAuthModule{

}