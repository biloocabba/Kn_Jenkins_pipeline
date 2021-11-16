/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


import CreateCareMemberPage from "views/pages/users/CreateCareMemberPage";
import CareMembersPage from "views/pages/users/CareMembersPage.js";
import EditCareMemberPage from "views/pages/users/EditCareMemberPage.js";

import EmployeesPage from "views/pages/users/EmployeesPage.js"
import EmployeeDetailsPage from "views/pages/users/EmployeeDetailsPage.js";

import CreateGroupPage from "views/pages/groups/CreateGroupPage.js"
import EditGroupPage from "views/pages/groups/EditGroupPage";
import GroupsPage from "views/pages/groups/GroupsPage.js"

import CreateBestPracticePage from "views/pages/best-practices/CreateBestPracticePage.js"
import SearchBestPracticesPage from "views/pages/best-practices/SearchBestPracticesPage.js"
import BestPracticeDetailPage from "views/pages/best-practices/BestPracticeDetailPage";

import CreateNewEmailPage from "views/pages/communications/CreateNewEmailPage";
import EmailDetailsPage from "views/pages/communications/EmailDetailsPage";
import SearchEmailDraftsPage from "views/pages/communications/SearchEmailDraftPage";


import ChartsPage from "views/pages/dashboards/ChartsPage.js"
import WorldOverviewPage from "views/pages/dashboards/WorldOverviewPage.js"


import LoginPage from "views/pages/users/LoginPage"


const routes = [
  {
    collapse: true,
    name: "Users",
    icon: "ni ni-single-02 text-info",
    state: "usersCollapse",
    views: [
      {
        path: "/employees",
        name: "Employees",
        miniName: "E",
        component: EmployeesPage,
        layout: "/admin",
      },
      {
        path: "/care-members",
        name: "Care Members",
        miniName: "CM",
        component: CareMembersPage,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Groups",
    icon: "ni ni-circle-08 text-info",
    state: "groupsCollapse",
    views: [
      {
        path: "/new-group",
        name: "Create New",
        miniName: "NG",
        component: CreateGroupPage,
        layout: "/admin",
      },
      {
        path: "/search-groups",
        name: "Search",
        miniName: "SG",
        component: GroupsPage,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Best Practices",
    icon: "ni ni-compass-04 text-info",
    state: "bestPracticesCollapse",
    views: [
      {
        path: "/new-best-practice",
        name: "Create New",
        miniName: "NB",
        component: CreateBestPracticePage,
        layout: "/admin",
      },
      {
        path: "/search-best-practices",
        name: "Search",
        miniName: "SB",
        component: SearchBestPracticesPage,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Communications",
    icon: "ni ni-email-83 text-info",
    state: "communicationsCollapse",
    views: [
      {
        path: "/create-email",
        name: "Create Email",
        miniName: "CE",
        component: CreateNewEmailPage,
        layout: "/admin",
      },
      // {
      //   path: "/search-email",
      //   name: "Search Email",
      //   miniName: "SE",
      //   component: SearchEmailPage,
      //   layout: "/admin",
      // },
      {
        path: "/search-email-draft",
        name: "Search Email",
        miniName: "SED",
        component: SearchEmailDraftsPage,
        layout: "/admin",
      },
      // {
      //   path: "/create-notification",
      //   name: "Create Notification",
      //   miniName: "CN",
      //   component: SendNotificationPage,
      //   layout: "/admin",
      // },
      // {
      //   path: "/email-history",
      //   name: "Email History",
      //   miniName: "EH",
      //   component: EmailHistoryPage,
      //   layout: "/admin",
      // },
      // {
      //   path: "/email-create-template",
      //   name: "Create Template",
      //   miniName: "CT",
      //   component: CreateEmailTemplatePage,
      //   layout: "/admin",
      // },
      // {
      //   path: "/email-search-template",
      //   name: "Search Template",
      //   miniName: "ST",
      //   component: SearchTemplatePage,
      //   layout: "/admin",
      // },
      // {
      //   path: "/archive",
      //   name: "Archive",
      //   miniName: "CA",
      //   component: ArchivePage,
      //   layout: "/admin",
      // },
    ],
  },
  {
    collapse: true,
    name: "Dashboard",
    icon: "ni ni-chart-pie-35 text-info",
    state: "dashboardCollapse",
    views: [     
      {
        path: "/statistics",
        name: "Charts",
        miniName: "NB",
        component: ChartsPage,
        layout: "/admin",
      },
      {
        path: "/world-view",
        name: "World Overview",
        miniName: "WV",
        component: WorldOverviewPage,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: false,  
    global:true, 
    path: "/group-member-details/:id",
    component: EditGroupPage,
    layout: "/admin"
  },
  {
    collapse: false,  
    global:true, 
    path: "/login",
    component: LoginPage,
    layout: "/auth"
  },
  {
    collapse: false,
    global: true,
    path: "/email-details/:id",
    component: EmailDetailsPage,
    layout: "/admin"
  },
  {
    collapse: false,  
    global: true, 
    path: "/users/employee-details/:id",
    component: EmployeeDetailsPage,
    layout: "/admin"
  },
  {
    collapse: false,  
    global: true, 
    path: "/users/care-member-details/:id",
    component: EditCareMemberPage,
    layout: "/admin"
  },
  {
    collapse: false,  
    global:true, 
    path: "/users/new-care-member/:id",
    component: CreateCareMemberPage,
    layout: "/admin",
  },
  {
    collapse: false,  
    global:true, 
    path: "/best-practice/:id",
    component: BestPracticeDetailPage,
    layout: "/admin",
  },
  // {
  //   collapse: true,
  //   name: "Examples",
  //   icon: "ni ni-briefcase-24 text-info",
  //   state: "exampleCollapse",
  //   layout: "/admin",
  //   views: [
  //     {
  //       path: "/buttons",
  //       name: "Buttons demo",
  //       miniName: "NB",
  //       component: Buttons,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/calendars",
  //       name: "calendars",
  //       miniName: "WV",
  //       component: Calendar,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/cards",
  //       name: "cards",
  //       miniName: "WV",
  //       component: Cards,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/components",
  //       name: "components",
  //       miniName: "WV",
  //       component: Components,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/elements",
  //       name: "elements",
  //       miniName: "WV",
  //       component: Elements,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/validation",
  //       name: "validation",
  //       miniName: "WV",
  //       component: Validation,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/notifications",
  //       name: "notifications",
  //       miniName: "WV",
  //       component: Notifications,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/timeline",
  //       name: "timeline",
  //       miniName: "WV",
  //       component: Timeline,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/typography",
  //       name: "typography",
  //       miniName: "WV",
  //       component: Typography,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/comparePage",
  //       name: "compare page",
  //       miniName: "WV",
  //       component: Pricing,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/profilePage",
  //       name: "profile",
  //       miniName: "WV",
  //       component: Profile,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Roles",
  //   icon: "ni ni-circle-08 text-info",
  //   state: "rolesCollapse",
  //   views: [
  //     {
  //       path: "/new-role",
  //       name: "Create New",
  //       miniName: "NR",
  //       component: CreateRolePage,
  //       layout: "/admin",
  //     },
  //   ],
  // }

];

export default routes;
