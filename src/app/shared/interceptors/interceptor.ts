import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class Interceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token="adasdasdasd2eqadsasd2eaqea2easedasdasd"

    let reqClone=req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`,
        'X-Custom-Header': 'custom value'
      }
    });


    return next.handle(reqClone);

  }
}
