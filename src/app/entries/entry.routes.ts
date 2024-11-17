import { Routes } from "@angular/router";
import { AccessGlobalReportComponent } from "./components/entries_reports/entries-global-report/access-global-report.component";
import { AccessVehiclesViewComponent } from "./components/access_vehicles-register/access-vehicles-view/access-vehicles-view.component";
import { AccessVisitorRegistryComponent } from "./components/access_visitors/access-visitor-registry/access-visitor-registry.component";
import { AccessContainerVisitorsRegistrationComponent } from "./components/access_visitors/access_visitors_register/access-container-visitors-registration/access-container-visitors-registration.component";
import { MetricsComponent } from "./components/metrics/metrics.component";


export const ENTRY_ROUTES: Routes = [
    { path: 'visitors', component: AccessVisitorRegistryComponent },
    { path: 'reports', component: AccessGlobalReportComponent },
    //{ path: 'entry', component: AccessEntryComponent }, BORRAR
    //{ path: 'entry', component: AccessDailyFetchComponent }, BORRAR
    { path: 'dashboards', component: MetricsComponent },
    { path: 'visitor/register', component: AccessContainerVisitorsRegistrationComponent },
    { path: 'vehicle/register', component: AccessVehiclesViewComponent }
];