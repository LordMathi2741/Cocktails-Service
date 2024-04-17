import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ApiFakeService} from "../../service/api-fake.service";
import {MatSort} from "@angular/material/sort";
import {Cocktail} from "../../model/cocktail.entity";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-cocktail-table',
  standalone: true,
  imports: [MatTableModule, MatPaginator, HttpClientModule],
  templateUrl: './cocktail-table.component.html',
  styleUrl: './cocktail-table.component.css'
})
export class CocktailTableComponent implements OnInit {
     dataSource= new MatTableDataSource();
     cocktails: Cocktail[] = [];
     cocktailData: Cocktail;
     displayedColumns: string[] = ['name', 'instruction', 'date', 'glass'];

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
     constructor(private cocktailService: ApiFakeService) {
       this.cocktailData = {} as Cocktail;
     }
     ngOnInit() {
          this.getCocktails();
          this.dataSource.sort = this.sort;
     }
    getCocktails() {
        this.cocktailService.getAll().subscribe((data: any) => {
        data.drinks.forEach((drink: any) => {
           this.cocktailData = new Cocktail(drink.strDrink, drink.strInstructions, drink.dateModified, drink.strGlass);
           this.cocktails.push(this.cocktailData);
        });
          this.dataSource.data = this.cocktails;
          this.dataSource.paginator = this.paginator;
    });
  }

}
