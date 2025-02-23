import { Component, ElementRef, inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MealsService } from '../meals.service';
import { IMeals } from '../imeals';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ICategory } from '../icategory';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-meals',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent {
private readonly mealsService=inject(MealsService);
private readonly categoryService=inject(CategoryService);
meals:IMeals[]=[]
category:ICategory[]=[]
@ViewChild ('el') option!:ElementRef
getAllmeals():void{
  this.mealsService.getAllMeals().subscribe({
    next:(res)=>{
      this.meals=res.meals;


    },
    error:(err)=>{

console.log(err);

    }
  })
}
getCategory(name:string):void{
  this.categoryService.getCategory(name).subscribe({
    next:(res)=>{
      this.meals=res.meals;


    },
    error:(err)=>{

console.log(err);

    }
  })
}
getvalue():void{
console.log(this.option.nativeElement.value)
this.getCategory(this.option.nativeElement.value)

}
ngOnInit(): void {
 this.getAllmeals();
}

}
