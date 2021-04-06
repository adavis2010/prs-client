import { Pipe, PipeTransform } from '@angular/core';
import { RequestListComponent } from './request-list/request-list.component';
import { Request } from './request.class'

@Pipe({
  name: 'Requestsearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests:Request[], searchCriteria): Request[] {
    if(requests==null || searchCriteria == null || searchCriteria=='')return requests;
    let selRequests: Request[]=[];
    searchCriteria=searchCriteria.toLowerCase();
    for(let request of requests) {
      if(
        request.id.toString().includes(searchCriteria)
        || request.description.toString().includes(searchCriteria.toLowerCase())
        || request.justification.toString().includes(searchCriteria.toLowerCase())
        || request.rejectionReason != null &&
           request.rejectionReason.toString().includes(searchCriteria.toLowerCase())

        || request.deliveryMode.toString().includes(searchCriteria.toLowerCase())
        || request.status.toString().includes(searchCriteria.toLowerCase())
        || request.total.toString().includes(searchCriteria.toLowerCase())
        || request.username.toString().includes(searchCriteria.toLowerCase()))
              {selRequests.push(request)}
    }
    return selRequests;
  }












  
}
