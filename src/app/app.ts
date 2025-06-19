import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { LucideAngularModule, ShoppingCart, Search, User, Menu, Heart, Star, Plus, Minus, Trash2, ArrowRight, ArrowLeft, Filter, Grid, List } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'meu-ecommerce';
  
  readonly ShoppingCart = ShoppingCart;
  readonly Search = Search;
  readonly User = User;
  readonly Menu = Menu;
  readonly Heart = Heart;
  readonly Star = Star;
  readonly Plus = Plus;
  readonly Minus = Minus;
  readonly Trash2 = Trash2;
  readonly ArrowRight = ArrowRight;
  readonly ArrowLeft = ArrowLeft;
  readonly Filter = Filter;
  readonly Grid = Grid;
  readonly List = List;
}
