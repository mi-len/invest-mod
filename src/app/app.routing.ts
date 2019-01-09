import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountsComponent } from './components/accounts-and-cards/accounts/accounts.component';
import { CardsComponent } from './components/accounts-and-cards/cards/cards.component';
import { CreditsComponent } from './components/credits/credits.component'
import { PortfolioComponent } from './components/savings-and-investments/portfolio/portfolio.component';
import { NewTransactionComponent } from './components/pay/new-transaction/new-transaction.component';

const routes : Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'accounts'},
    { path: 'accounts', component: AccountsComponent },
    { path: 'cards', component: CardsComponent },
    { path: 'credits', component: CreditsComponent },
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'new-transaction', component: NewTransactionComponent},
    { path: '**', component: AccountsComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
