import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { UserComponent } from './components/user/user.component';
import { NewsComponent } from './components/news/news.component';
import { ReportComponent } from './components/report/report.component';
import { CreateNewsComponent } from './components/news/create-news/create-news.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { LoginComponent } from './components/login/login.component';
import { CreateReportComponent } from './components/report/create-report/create-report.component';
import { ViewNewsComponent } from './components/news/view-news/view-news.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'users', component: UserComponent },
          { path: 'create-user', component: CreateUserComponent },
          { path: 'create-news', component: CreateNewsComponent },
          { path: 'news', component: NewsComponent },
          { path: 'reports', component: ReportComponent },
          { path: '', redirectTo: '/chatbot', pathMatch: 'full' },
        ],
      },
      { path: 'chatbot', component: ChatbotComponent }, 
      { path: 'login', component: LoginComponent }, 
      { path: 'create-report', component: CreateReportComponent }, 
      { path: 'view-news', component: ViewNewsComponent }, 
      { path: '**', redirectTo: '/chatbot' },
];

