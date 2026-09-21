import { Component, signal } from '@angular/core';
import { CustomerHttpService } from '../../service/customer-http-service';
import { CustomerType } from '../classes/customer';
@Component({
  selector: 'app-customer-http-component',
  standalone: false,
  styleUrl: './customer-http-component.css',
  templateUrl: './customer-http-component.html',
})
export class CustomerHttpComponent {
  customertype=signal<CustomerType[]>([])
  constructor(private _http: CustomerHttpService){}
  ngOnInit():void{
    this._http.getCustomer().subscribe({
      next:(data) =>{
        this.customertype.set(data)

      },
      error:(err) =>{
        alert("lỗi" + JSON.stringify(err))
      }
    })
  }
}
