import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './services/data.service'
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { HeaderComponent } from './components/main/header/header.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { AccountsComponent } from './components/accounts-and-cards/accounts/accounts.component';
import { CardsComponent } from './components/accounts-and-cards/cards/cards.component';
import { AccountComponent } from './components/accounts-and-cards/accounts/account/account.component';
import { NumPipe } from './shared/numPipe';
import { CreditsComponent } from './components/credits/credits.component';
import { NotificationComponent } from './components/main/notification/notification.component';
import { TransactionsComponent } from './components/accounts-and-cards/accounts/transactions/transactions.component';
import { PortfolioComponent } from './components/savings-and-investments/portfolio/portfolio.component';
import { NewTransactionComponent } from './components/pay/new-transaction/new-transaction.component';
import { NewAccountComponent } from './components/accounts-and-cards/accounts/new-account/new-account.component';
import { SideFooterComponent } from './components/main/side-footer/side-footer.component';
import { FooterComponent } from './components/main/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    AccountsComponent,
    CardsComponent,
    AccountComponent,
    NumPipe,
    CreditsComponent,
    NotificationComponent,
    TransactionsComponent,
    PortfolioComponent,
    NewTransactionComponent,
    NewAccountComponent,
    SideFooterComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
