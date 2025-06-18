import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { UserComponent } from './components/user/user.component';
import { NewsComponent } from './components/news/news.component';
import { ReportComponent } from './components/report/report.component';
import { CreateNewsComponent } from './components/news/create-news/create-news.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateReportComponent } from './components/report/create-report/create-report.component';
import { ViewNewsComponent } from './components/news/view-news/view-news.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { DetailNewsComponent } from './components/news/detail-news/detail-news.component';
import { DetailReportComponent } from './components/report/detail-report/detail-report.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component'; 
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ListNewsComponent } from './components/news/list-news/list-news.component';
import { UpdateNewsComponent } from './components/news/update-news/update-news.component';
import { PolicyComponent } from './components/policy/policy.component';
import { AnalyzeComponent } from './components/analyze/analyze.component';
import { RankingComponent } from './components/ranking/ranking.component';



export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }, 

    {
        path: 'admin', 
        component: LayoutComponent,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
          { path: 'dashboard', component: DashboardComponent },
          { path: 'users', component: UserComponent },
          { path: 'create-user', component: CreateUserComponent },
          { path: 'news', component: NewsComponent }, 
          { path: 'create-news', component: CreateNewsComponent },
          { path: 'detail-news/:id', component: DetailNewsComponent }, 
          { path: 'update-news/:id', component: UpdateNewsComponent }, 
          { path: 'list-news', component: ListNewsComponent },
          { path: 'reports', component: ReportComponent }, 
          { path: 'create-report', component: CreateReportComponent }, 
          { path: 'detail-report/:id', component: DetailReportComponent }, 
        ],
    },
      
    { path: 'login', component: LoginComponent }, 
    { path: 'chatbox', component: ChatBoxComponent }, 
    { path: 'analyze', component: AnalyzeComponent }, 
    { path: 'ranking', component: RankingComponent }, 
    { path: 'list-news', component: ListNewsComponent }, 
    { path: 'view-news/:id', component: ViewNewsComponent }, 
    { path: 'create-report', component: CreateReportComponent }, 
    { path: 'about-us', component: AboutUsComponent },
    { path: 'privacy-policy', component: PolicyComponent },
    { path: '**', redirectTo: '' }, 
];