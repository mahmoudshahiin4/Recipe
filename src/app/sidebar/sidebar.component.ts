import { Component, ElementRef, inject, ViewChild, viewChild } from '@angular/core';
import { MealsService } from '../meals.service';
import { IMeals } from '../imeals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
private mealsService=inject(MealsService);
meals:IMeals[]=[]
@ViewChild('hamada') myElement!:ElementRef
@ViewChild('el') element!:ElementRef
@ViewChild('bg') back!:ElementRef
getAllmeals():void{
  this.mealsService.getAllMeals().subscribe({
    next:(res)=>{
      this.meals=res.meals;
 console.log(this.meals);

    },
    error:(err)=>{

console.log(err);

    }
  })
}
openBar():void{
  this.myElement.nativeElement.classList.remove('d-none')
   this.element.nativeElement.classList.add('d-none')
   this.back.nativeElement.classList.remove('d-none')
}
closeBar():void{
  this.myElement.nativeElement.classList.add('d-none')
  this.element.nativeElement.classList.remove('d-none')
  this.back.nativeElement.classList.add('d-none')

}
}
