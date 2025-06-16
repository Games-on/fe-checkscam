import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/main.ts
import { bootstrapApplication } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_platform-browser.js?v=e44b7f9a";

// src/app/app.config.ts
import { provideZoneChangeDetection } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { provideRouter } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";

// src/app/components/layout/layout.component.ts
import { Component, HostListener } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { RouterModule } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import { CommonModule } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i03 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";

// src/app/services/user.service.ts
var user_service_exports = {};
__export(user_service_exports, {
  UserService: () => UserService
});
import { Injectable as Injectable2 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";

// src/app/environments/environment.ts
var environment = {
  apiBaseUrl: "http://localhost:8080/api/v1"
};

// src/app/services/user.service.ts
import * as i02 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i1 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common_http.js?v=e44b7f9a";

// src/app/services/http.util.service.ts
import { Injectable } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { HttpHeaders } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common_http.js?v=e44b7f9a";
import * as i0 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
var HttpUtilService = class _HttpUtilService {
  createHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Accept-Language": "vi"
    });
  }
  static \u0275fac = function HttpUtilService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpUtilService)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _HttpUtilService, factory: _HttpUtilService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(HttpUtilService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/user.service.ts
var UserService = class _UserService {
  http;
  httpUtilService;
  apiLogin = `${environment.apiBaseUrl}/auth/login`;
  apiCreateUser = `${environment.apiBaseUrl}/users`;
  apiUpdateUser = `${environment.apiBaseUrl}/users`;
  apiLogout = `${environment.apiBaseUrl}/auth/logout`;
  constructor(http, httpUtilService) {
    this.http = http;
    this.httpUtilService = httpUtilService;
  }
  getApiConfig() {
    return {
      headers: this.httpUtilService.createHeaders()
    };
  }
  login(loginDTO) {
    return this.http.post(this.apiLogin, loginDTO, this.getApiConfig());
  }
  logout() {
    return this.http.post(this.apiLogout, this.getApiConfig());
  }
  getListUsers() {
    return this.http.get(`${environment.apiBaseUrl}/users`);
  }
  createUser(userDTO) {
    return this.http.post(this.apiCreateUser, userDTO, this.getApiConfig());
  }
  deleteUser(id) {
    return this.http.delete(`${environment.apiBaseUrl}/users/${id}`);
  }
  updateUser(id, userDTO) {
    return this.http.put(`${this.apiUpdateUser}/${id}`, userDTO, this.getApiConfig());
  }
  saveUserData(token) {
    try {
      const rawToken = typeof token === "string" ? token : token?.access_token;
      if (!rawToken || typeof rawToken !== "string") {
        console.error("Token kh\xF4ng h\u1EE3p l\u1EC7:", token);
        return;
      }
      const payload = JSON.parse(atob(rawToken.split(".")[1]));
      const userData = {
        role: payload?.roles || [],
        token: rawToken
      };
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("L\u1ED7i khi ph\xE2n t\xEDch token:", error);
    }
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(i02.\u0275\u0275inject(i1.HttpClient), i02.\u0275\u0275inject(HttpUtilService));
  };
  static \u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(UserService, [{
    type: Injectable2,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: i1.HttpClient }, { type: HttpUtilService }], null);
})();

// src/app/components/layout/layout.component.ts
import * as i2 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i3 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
var _c0 = () => ({ exact: true });
function LayoutComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementContainerStart(0);
    i03.\u0275\u0275elementStart(1, "li", 6)(2, "a", 42);
    i03.\u0275\u0275element(3, "i", 43);
    i03.\u0275\u0275elementStart(4, "span");
    i03.\u0275\u0275text(5, "Qu\u1EA3n l\xFD t\xE0i kho\u1EA3n");
    i03.\u0275\u0275elementEnd()()();
    i03.\u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275property("routerLinkActiveOptions", i03.\u0275\u0275pureFunction0(1, _c0));
  }
}
var LayoutComponent = class _LayoutComponent {
  userService;
  router;
  userRole = [];
  isAdmin = false;
  isCollaborator = false;
  isDropdownOpen = false;
  currentUser = {
    name: "",
    email: ""
  };
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
  }
  ngOnInit() {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      this.userRole = user.role || [];
      this.isAdmin = this.userRole.includes("ROLE_ADMIN");
      this.isCollaborator = this.userRole.includes("ROLE_COLLAB");
      const token = localStorage.getItem("jwt_token");
      if (token) {
        const tokenData = JSON.parse(atob(token.split(".")[1]));
        this.currentUser = {
          name: tokenData.checkscam?.principal?.username || "",
          email: tokenData.sub || ""
        };
      }
    }
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest("#userDropdown")) {
      this.isDropdownOpen = false;
    }
  }
  logout() {
    this.userService.logout().subscribe({
      next: () => {
        debugger;
        localStorage.removeItem("jwt_token");
        localStorage.removeItem("user");
        this.router.navigate(["/login"]);
      },
      error: (error) => {
        debugger;
        alert(error?.error);
      }
    });
  }
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)(i03.\u0275\u0275directiveInject(UserService), i03.\u0275\u0275directiveInject(i2.Router));
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], hostBindings: function LayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275listener("click", function LayoutComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, i03.\u0275\u0275resolveDocument);
    }
  }, decls: 57, vars: 13, consts: [["id", "wrapper"], ["id", "accordionSidebar", 1, "navbar-nav", "bg-gradient-primary", "sidebar", "sidebar-dark", "accordion"], ["routerLink", "/users", "routerLinkActive", "active", 1, "sidebar-brand", "d-flex", "align-items-center", "justify-content-center"], [1, "sidebar-brand-icon", "rotate-n-15"], [1, "fa-solid", "fa-shield-halved"], [1, "sidebar-divider", "my-0"], [1, "nav-item"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fas", "fa-fw", "fa-tachometer-alt"], [4, "ngIf"], ["routerLink", "/admin/news", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fa-solid", "fa-newspaper"], ["routerLink", "/admin/reports", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fa-solid", "fa-scroll"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"], [1, "navbar", "navbar-expand", "navbar-light", "bg-white", "topbar", "mb-4", "static-top", "shadow"], ["id", "sidebarToggleTop", 1, "btn", "btn-link", "d-md-none", "rounded-circle", "mr-3"], [1, "fa", "fa-bars"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "no-arrow", "d-sm-none"], ["href", "#", "id", "searchDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-search", "fa-fw"], ["aria-labelledby", "searchDropdown", 1, "dropdown-menu", "dropdown-menu-right", "p-3", "shadow", "animated--grow-in"], [1, "form-inline", "mr-auto", "w-100", "navbar-search"], [1, "input-group"], ["type", "text", "placeholder", "Search for...", "aria-label", "Search", "aria-describedby", "basic-addon2", 1, "form-control", "bg-light", "border-0", "small"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary"], [1, "fas", "fa-search", "fa-sm"], [1, "nav-item", "dropdown", "no-arrow"], ["id", "userDropdown", "role", "button", "aria-haspopup", "true", 1, "nav-link", "dropdown-toggle", 3, "click"], [1, "user-info"], [1, "user-email"], [1, "user-profile"], ["src", "/assets/img/undraw_profile.svg", 1, "img-profile", "rounded-circle"], ["aria-labelledby", "userDropdown", 1, "dropdown-menu", "dropdown-menu-right", "shadow", "animated--grow-in"], [1, "dropdown-item"], [1, "fa-solid", "fa-address-card"], [1, "dropdown-item", 3, "click"], [1, "fa-solid", "fa-right-from-bracket"], [1, "container-fluid"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fa-solid", "fa-users"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "ul", 1)(3, "a", 2)(4, "div", 3);
      i03.\u0275\u0275element(5, "i", 4);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275text(6, " CheckScam ");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275element(7, "hr", 5);
      i03.\u0275\u0275elementStart(8, "li", 6)(9, "a", 7);
      i03.\u0275\u0275element(10, "i", 8);
      i03.\u0275\u0275elementStart(11, "span");
      i03.\u0275\u0275text(12, "Dashboard");
      i03.\u0275\u0275elementEnd()()();
      i03.\u0275\u0275element(13, "hr", 5);
      i03.\u0275\u0275template(14, LayoutComponent_ng_container_14_Template, 6, 2, "ng-container", 9);
      i03.\u0275\u0275elementStart(15, "li", 6)(16, "a", 10);
      i03.\u0275\u0275element(17, "i", 11);
      i03.\u0275\u0275elementStart(18, "span");
      i03.\u0275\u0275text(19, "Qu\u1EA3n l\xFD tin t\u1EE9c");
      i03.\u0275\u0275elementEnd()()();
      i03.\u0275\u0275elementStart(20, "li", 6)(21, "a", 12);
      i03.\u0275\u0275element(22, "i", 13);
      i03.\u0275\u0275elementStart(23, "span");
      i03.\u0275\u0275text(24, "Qu\u1EA3n l\xFD b\xE1o c\xE1o");
      i03.\u0275\u0275elementEnd()()()()();
      i03.\u0275\u0275elementStart(25, "div", 14)(26, "div", 15)(27, "nav", 16)(28, "button", 17);
      i03.\u0275\u0275element(29, "i", 18);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(30, "ul", 19)(31, "li", 20)(32, "a", 21);
      i03.\u0275\u0275element(33, "i", 22);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(34, "div", 23)(35, "form", 24)(36, "div", 25);
      i03.\u0275\u0275element(37, "input", 26);
      i03.\u0275\u0275elementStart(38, "div", 27)(39, "button", 28);
      i03.\u0275\u0275element(40, "i", 29);
      i03.\u0275\u0275elementEnd()()()()()();
      i03.\u0275\u0275elementStart(41, "li", 30)(42, "a", 31);
      i03.\u0275\u0275listener("click", function LayoutComponent_Template_a_click_42_listener() {
        return ctx.toggleDropdown();
      });
      i03.\u0275\u0275elementStart(43, "div", 32)(44, "span", 33);
      i03.\u0275\u0275text(45);
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(46, "div", 34);
      i03.\u0275\u0275element(47, "img", 35);
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(48, "div", 36)(49, "a", 37);
      i03.\u0275\u0275element(50, "i", 38);
      i03.\u0275\u0275text(51, " Th\xF4ng tin t\xE0i kho\u1EA3n ");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(52, "a", 39);
      i03.\u0275\u0275listener("click", function LayoutComponent_Template_a_click_52_listener() {
        return ctx.logout();
      });
      i03.\u0275\u0275element(53, "i", 40);
      i03.\u0275\u0275text(54, " \u0110\u0103ng xu\u1EA5t ");
      i03.\u0275\u0275elementEnd()()()()();
      i03.\u0275\u0275elementStart(55, "div", 41);
      i03.\u0275\u0275element(56, "router-outlet");
      i03.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      i03.\u0275\u0275advance(9);
      i03.\u0275\u0275property("routerLinkActiveOptions", i03.\u0275\u0275pureFunction0(10, _c0));
      i03.\u0275\u0275advance(5);
      i03.\u0275\u0275property("ngIf", ctx.isAdmin);
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275property("routerLinkActiveOptions", i03.\u0275\u0275pureFunction0(11, _c0));
      i03.\u0275\u0275advance(5);
      i03.\u0275\u0275property("routerLinkActiveOptions", i03.\u0275\u0275pureFunction0(12, _c0));
      i03.\u0275\u0275advance(21);
      i03.\u0275\u0275classProp("show", ctx.isDropdownOpen);
      i03.\u0275\u0275attribute("aria-expanded", ctx.isDropdownOpen);
      i03.\u0275\u0275advance(3);
      i03.\u0275\u0275textInterpolate(ctx.currentUser.email);
      i03.\u0275\u0275advance(3);
      i03.\u0275\u0275classProp("show", ctx.isDropdownOpen);
    }
  }, dependencies: [RouterModule, i2.RouterOutlet, i2.RouterLink, i2.RouterLinkActive, i2.\u0275EmptyOutletComponent, CommonModule, i3.NgClass, i3.NgComponentOutlet, i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i3.NgStyle, i3.NgSwitch, i3.NgSwitchCase, i3.NgSwitchDefault, i3.NgPlural, i3.NgPluralCase, i3.AsyncPipe, i3.UpperCasePipe, i3.LowerCasePipe, i3.JsonPipe, i3.SlicePipe, i3.DecimalPipe, i3.PercentPipe, i3.TitleCasePipe, i3.CurrencyPipe, i3.DatePipe, i3.I18nPluralPipe, i3.I18nSelectPipe, i3.KeyValuePipe], styles: ['\n\n.navbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.bg-gradient-primary[_ngcontent-%COMP%] {\n  background-color: #4e73df;\n  background-image:\n    linear-gradient(\n      180deg,\n      #4e73df 10%,\n      #224abe 100%);\n  background-size: cover;\n}\n.accordion[_ngcontent-%COMP%] {\n  overflow-anchor: none;\n}\n.topbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  height: 4.375rem;\n  display: flex;\n  align-items: center;\n  padding: 0 0.75rem;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-item.dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after, \n.topbar[_ngcontent-%COMP%]   .nav-item.dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  width: 1rem;\n  text-align: center;\n  float: right;\n  vertical-align: 0;\n  border: 0;\n  font-weight: 900;\n  content: "\\f105";\n  font-family: "Font Awesome 5 Free";\n}\n.sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  position: relative;\n  color: rgba(255, 255, 255, 0.8);\n  transition: all 0.3s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.2);\n  font-weight: 700;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 4px;\n  background-color: #fff;\n  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);\n}\n.sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n  width: 1.25rem;\n  text-align: center;\n}\n.sidebar-divider[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: 1rem;\n  text-align: right;\n}\n.user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #4e73df;\n  font-size: 0.9rem;\n}\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.user-profile[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.user-profile[_ngcontent-%COMP%]   .img-profile[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  object-fit: cover;\n  border: 2px solid #fff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.dropdown-menu.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.dropdown-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0.75rem 1.5rem;\n  color: #5a5c69;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s ease;\n}\n.dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  margin-right: 0.75rem;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fc;\n  color: #4e73df;\n}\n.dropdown-item[_ngcontent-%COMP%]:active {\n  background-color: #4e73df;\n  color: #fff;\n}\n.animated--grow-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_growIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_growIn {\n  0% {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", imports: [
      RouterModule,
      CommonModule
    ], template: '  <div id="wrapper">\n    <div>\n      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">\n        <a class="sidebar-brand d-flex align-items-center justify-content-center" routerLink="/users"\n          routerLinkActive="active">\n          <div class="sidebar-brand-icon rotate-n-15">\n            <i class="fa-solid fa-shield-halved"></i>\n          </div>\n          CheckScam\n        </a>\n        <!-- Divider -->\n        <hr class="sidebar-divider my-0">\n        <!-- Nav Item - Dashboard -->\n        <li class="nav-item">\n          <a class="nav-link" routerLink="/admin/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">\n            <i class="fas fa-fw fa-tachometer-alt"></i>\n            <span>Dashboard</span>\n          </a>\n        </li>\n        <hr class="sidebar-divider my-0">\n        <!-- Admin only menu items -->\n        <ng-container *ngIf="isAdmin">\n          <li class="nav-item">\n            <a class="nav-link" routerLink="/admin/users" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">\n              <i class="fa-solid fa-users"></i>\n              <span>Qu\u1EA3n l\xFD t\xE0i kho\u1EA3n</span>\n            </a>\n          </li>\n        </ng-container>\n\n        <!-- Common menu items for both Admin and Collaborator -->\n        <li class="nav-item">\n          <a class="nav-link" routerLink="/admin/news" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">\n            <i class="fa-solid fa-newspaper"></i>\n            <span>Qu\u1EA3n l\xFD tin t\u1EE9c</span>\n          </a>\n        </li>\n\n        <li class="nav-item">\n          <a class="nav-link" routerLink="/admin/reports" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">\n            <i class="fa-solid fa-scroll"></i>\n            <span>Qu\u1EA3n l\xFD b\xE1o c\xE1o</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <!-- Content Wrapper -->\n    <div id="content-wrapper" class="d-flex flex-column">\n\n      <!-- Main Content -->\n      <div id="content">\n\n        <!-- Topbar -->\n        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">\n\n          <!-- Sidebar Toggle (Topbar) -->\n          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">\n            <i class="fa fa-bars"></i>\n          </button>\n\n          <!-- Topbar Navbar -->\n          <ul class="navbar-nav ml-auto">\n\n            <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n            <li class="nav-item dropdown no-arrow d-sm-none">\n              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown"\n                aria-haspopup="true" aria-expanded="false">\n                <i class="fas fa-search fa-fw"></i>\n              </a>\n              <!-- Dropdown - Messages -->\n              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"\n                aria-labelledby="searchDropdown">\n                <form class="form-inline mr-auto w-100 navbar-search">\n                  <div class="input-group">\n                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."\n                      aria-label="Search" aria-describedby="basic-addon2">\n                    <div class="input-group-append">\n                      <button class="btn btn-primary" type="button">\n                        <i class="fas fa-search fa-sm"></i>\n                      </button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </li>\n\n            <!-- Nav Item - User Information -->\n            <li class="nav-item dropdown no-arrow">\n              <a class="nav-link dropdown-toggle" id="userDropdown" role="button" (click)="toggleDropdown()"\n                [class.show]="isDropdownOpen" aria-haspopup="true" [attr.aria-expanded]="isDropdownOpen">\n                <div class="user-info">\n                  <span class="user-email">{{currentUser.email}}</span>\n                </div>\n                <div class="user-profile">\n                  <img class="img-profile rounded-circle" src="/assets/img/undraw_profile.svg">\n                </div>\n              </a>\n              <!-- Dropdown - User Information -->\n              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" [class.show]="isDropdownOpen"\n                aria-labelledby="userDropdown">\n                <a class="dropdown-item">\n                  <i class="fa-solid fa-address-card"></i>\n                  Th\xF4ng tin t\xE0i kho\u1EA3n\n                </a>\n                <a class="dropdown-item" (click)="logout()">\n                  <i class="fa-solid fa-right-from-bracket"></i>\n                  \u0110\u0103ng xu\u1EA5t\n                </a>\n              </div>\n            </li>\n\n          </ul>\n\n        </nav>\n        <!-- End of Topbar -->\n\n        <!-- Begin Page Content -->\n        <div class="container-fluid">\n\n          <router-outlet></router-outlet>\n        </div>\n        <!-- /.container-fluid -->\n\n      </div>\n      <!-- End of Main Content -->\n\n      <!-- Footer -->\n      <!-- <footer class="sticky-footer bg-white">\n        <div class="container my-auto">\n          <div class="copyright text-center my-auto">\n            <span>Copyright \xA9 Your Website 2021</span>\n          </div>\n        </div>\n      </footer> -->\n      <!-- End of Footer -->\n\n    </div>\n\n  </div>', styles: ['/* src/app/components/layout/layout.component.scss */\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.bg-gradient-primary {\n  background-color: #4e73df;\n  background-image:\n    linear-gradient(\n      180deg,\n      #4e73df 10%,\n      #224abe 100%);\n  background-size: cover;\n}\n.accordion {\n  overflow-anchor: none;\n}\n.topbar .nav-item .nav-link {\n  height: 4.375rem;\n  display: flex;\n  align-items: center;\n  padding: 0 0.75rem;\n}\n.sidebar .nav-item.dropdown .dropdown-toggle::after,\n.topbar .nav-item.dropdown .dropdown-toggle::after {\n  width: 1rem;\n  text-align: center;\n  float: right;\n  vertical-align: 0;\n  border: 0;\n  font-weight: 900;\n  content: "\\f105";\n  font-family: "Font Awesome 5 Free";\n}\n.sidebar .nav-item .nav-link {\n  position: relative;\n  color: rgba(255, 255, 255, 0.8);\n  transition: all 0.3s ease;\n}\n.sidebar .nav-item .nav-link:hover {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.sidebar .nav-item .nav-link.active {\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.2);\n  font-weight: 700;\n}\n.sidebar .nav-item .nav-link.active::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 4px;\n  background-color: #fff;\n  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);\n}\n.sidebar .nav-item .nav-link i {\n  margin-right: 0.75rem;\n  width: 1.25rem;\n  text-align: center;\n}\n.sidebar-divider {\n  color: #fff;\n}\n.user-info {\n  display: flex;\n  flex-direction: column;\n  margin-right: 1rem;\n  text-align: right;\n}\n.user-info .user-email {\n  font-weight: 600;\n  color: #4e73df;\n  font-size: 0.9rem;\n}\n.user-profile {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.user-profile:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.user-profile .img-profile {\n  width: 2.5rem;\n  height: 2.5rem;\n  object-fit: cover;\n  border: 2px solid #fff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.dropdown-menu {\n  display: none;\n}\n.dropdown-menu.show {\n  display: block;\n}\n.dropdown-toggle {\n  cursor: pointer;\n}\n.dropdown-toggle::after {\n  display: none;\n}\n.dropdown-item {\n  cursor: pointer;\n  padding: 0.75rem 1.5rem;\n  color: #5a5c69;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s ease;\n}\n.dropdown-item i {\n  width: 1.25rem;\n  margin-right: 0.75rem;\n}\n.dropdown-item:hover {\n  background-color: #f8f9fc;\n  color: #4e73df;\n}\n.dropdown-item:active {\n  background-color: #4e73df;\n  color: #fff;\n}\n.animated--grow-in {\n  animation: growIn 0.2s ease-out;\n}\n@keyframes growIn {\n  0% {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */\n'] }]
  }], () => [{ type: UserService }, { type: i2.Router }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/components/layout/layout.component.ts", lineNumber: 15 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Flayout%2Flayout.component.ts%40LayoutComponent";
  function LayoutComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i03.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(LayoutComponent, m.default, [i03, i2, i3, user_service_exports], [RouterModule, CommonModule, Component, HostListener], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && LayoutComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LayoutComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/user/user.component.ts
import { Component as Component4 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { CommonModule as CommonModule4 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { RouterModule as RouterModule2 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import { FormsModule as FormsModule3 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";

// src/app/components/user/create-user/create-user.component.ts
import { CommonModule as CommonModule2 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { Component as Component2 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { FormsModule } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import { MatButtonModule } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_button.js?v=e44b7f9a";
import { MatDialogModule } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_dialog.js?v=e44b7f9a";
import { MatFormFieldModule } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_form-field.js?v=e44b7f9a";
import { MatInputModule } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_input.js?v=e44b7f9a";
import * as i04 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i22 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i32 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_dialog.js?v=e44b7f9a";
import * as i4 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i5 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import * as i6 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_cdk_bidi.js?v=e44b7f9a";
import * as i7 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_form-field.js?v=e44b7f9a";
import * as i8 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_input.js?v=e44b7f9a";
import * as i9 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_cdk_text-field.js?v=e44b7f9a";
import * as i10 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_button.js?v=e44b7f9a";
var CreateUserComponent = class _CreateUserComponent {
  userService;
  router;
  dialogRef;
  name = "";
  email = "";
  password = "";
  constructor(userService, router, dialogRef) {
    this.userService = userService;
    this.router = router;
    this.dialogRef = dialogRef;
  }
  ngOnInit() {
  }
  createUser() {
    const userDTO = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    this.userService.createUser(userDTO).subscribe({
      next: () => {
        debugger;
        this.dialogRef.close(true);
      },
      error: (error) => {
        debugger;
        alert(error.error);
      }
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static \u0275fac = function CreateUserComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateUserComponent)(i04.\u0275\u0275directiveInject(UserService), i04.\u0275\u0275directiveInject(i22.Router), i04.\u0275\u0275directiveInject(i32.MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _CreateUserComponent, selectors: [["app-create-user"]], decls: 25, vars: 3, consts: [[1, "container-fluid"], [1, "content"], [1, "header"], [1, "close-button", 3, "click"], [1, "body"], [1, "form-group", "mb-3"], ["type", "text", "placeholder", "Nh\u1EADp t\xEAn", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "Nh\u1EADp email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Nh\u1EADp m\u1EADt kh\u1EA9u", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function CreateUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      i04.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
      i04.\u0275\u0275text(4, "Th\xEAm t\xE0i kho\u1EA3n");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(5, "button", 3);
      i04.\u0275\u0275listener("click", function CreateUserComponent_Template_button_click_5_listener() {
        return ctx.closeDialog();
      });
      i04.\u0275\u0275text(6, "\xD7");
      i04.\u0275\u0275elementEnd()();
      i04.\u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      i04.\u0275\u0275text(10, "T\xEAn");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(11, "input", 6);
      i04.\u0275\u0275twoWayListener("ngModelChange", function CreateUserComponent_Template_input_ngModelChange_11_listener($event) {
        i04.\u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return $event;
      });
      i04.\u0275\u0275elementEnd()();
      i04.\u0275\u0275elementStart(12, "div", 5)(13, "label");
      i04.\u0275\u0275text(14, "Email");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(15, "input", 7);
      i04.\u0275\u0275twoWayListener("ngModelChange", function CreateUserComponent_Template_input_ngModelChange_15_listener($event) {
        i04.\u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      i04.\u0275\u0275elementEnd()();
      i04.\u0275\u0275elementStart(16, "div", 5)(17, "label");
      i04.\u0275\u0275text(18, "M\u1EADt kh\u1EA9u");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(19, "input", 8);
      i04.\u0275\u0275twoWayListener("ngModelChange", function CreateUserComponent_Template_input_ngModelChange_19_listener($event) {
        i04.\u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      i04.\u0275\u0275elementEnd()()();
      i04.\u0275\u0275elementStart(20, "div", 9)(21, "button", 10);
      i04.\u0275\u0275listener("click", function CreateUserComponent_Template_button_click_21_listener() {
        return ctx.closeDialog();
      });
      i04.\u0275\u0275text(22, "H\u1EE7y");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(23, "button", 11);
      i04.\u0275\u0275listener("click", function CreateUserComponent_Template_button_click_23_listener() {
        return ctx.createUser();
      });
      i04.\u0275\u0275text(24, "T\u1EA1o");
      i04.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      i04.\u0275\u0275advance(11);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.name);
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.email);
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.password);
    }
  }, dependencies: [CommonModule2, i4.NgClass, i4.NgComponentOutlet, i4.NgForOf, i4.NgIf, i4.NgTemplateOutlet, i4.NgStyle, i4.NgSwitch, i4.NgSwitchCase, i4.NgSwitchDefault, i4.NgPlural, i4.NgPluralCase, i4.AsyncPipe, i4.UpperCasePipe, i4.LowerCasePipe, i4.JsonPipe, i4.SlicePipe, i4.DecimalPipe, i4.PercentPipe, i4.TitleCasePipe, i4.CurrencyPipe, i4.DatePipe, i4.I18nPluralPipe, i4.I18nSelectPipe, i4.KeyValuePipe, FormsModule, i5.\u0275NgNoValidate, i5.NgSelectOption, i5.\u0275NgSelectMultipleOption, i5.DefaultValueAccessor, i5.NumberValueAccessor, i5.RangeValueAccessor, i5.CheckboxControlValueAccessor, i5.SelectControlValueAccessor, i5.SelectMultipleControlValueAccessor, i5.RadioControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.MinLengthValidator, i5.MaxLengthValidator, i5.PatternValidator, i5.CheckboxRequiredValidator, i5.EmailValidator, i5.MinValidator, i5.MaxValidator, i5.NgModel, i5.NgModelGroup, i5.NgForm, MatDialogModule, i6.Dir, i32.MatDialogContainer, i32.MatDialogClose, i32.MatDialogTitle, i32.MatDialogActions, i32.MatDialogContent, MatFormFieldModule, i7.MatFormField, i7.MatLabel, i7.MatHint, i7.MatError, i7.MatPrefix, i7.MatSuffix, MatInputModule, i8.MatInput, i9.CdkAutofill, i9.CdkTextareaAutosize, MatButtonModule, i10.MatAnchor, i10.MatButton, i10.MatIconAnchor, i10.MatIconButton, i10.MatMiniFabAnchor, i10.MatMiniFabButton, i10.MatFabAnchor, i10.MatFabButton], styles: ["\n\n  .cdk-overlay-pane .mat-mdc-dialog-container {\n  border-radius: 5px !important;\n  overflow: hidden !important;\n}\n  .mat-mdc-dialog-container {\n  border-radius: 12px !important;\n  overflow: hidden !important;\n}\n  .mat-mdc-dialog-component-host .container-fluid {\n  padding: 0;\n  background: #FFF;\n}\n[_ngcontent-%COMP%]:ng-deep   .mat-mdc-dialog-surface[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  overflow: hidden !important;\n}\n  .mat-mdc-dialog-content {\n  max-height: 80vh !important;\n  overflow-y: auto !important;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n  .mat-mdc-dialog-content::-webkit-scrollbar {\n  display: none;\n}\n.body[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n.content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  width: 100%;\n  animation: slideIn 0.3s ease-out;\n  box-sizing: border-box;\n}\n.close-button[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  font-size: 24px;\n  color: #666;\n  cursor: pointer;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 15px;\n  border-top: 1px solid #eee;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=create-user.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(CreateUserComponent, [{
    type: Component2,
    args: [{ selector: "app-create-user", imports: [
      CommonModule2,
      FormsModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
    ], template: '  <div class="container-fluid">\r\n    <div class="content">\r\n      <div class="header">\r\n        <h5>Th\xEAm t\xE0i kho\u1EA3n</h5>\r\n        <button class="close-button" (click)="closeDialog()">\xD7</button>\r\n      </div>\r\n      <div class="body">\r\n        <div class="form-group mb-3">\r\n          <label>T\xEAn</label>\r\n          <input type="text" class="form-control" placeholder="Nh\u1EADp t\xEAn" [(ngModel)]="name" >\r\n        </div>\r\n        <div class="form-group mb-3">\r\n          <label>Email</label>\r\n          <input type="email" class="form-control" placeholder="Nh\u1EADp email" [(ngModel)]="email">\r\n        </div>\r\n        <div class="form-group mb-3">\r\n          <label>M\u1EADt kh\u1EA9u</label>\r\n          <input type="password" class="form-control" placeholder="Nh\u1EADp m\u1EADt kh\u1EA9u" [(ngModel)]="password">\r\n        </div>\r\n      </div>\r\n      <div class="footer">\r\n        <button class="btn btn-secondary" (click)="closeDialog()">H\u1EE7y</button>\r\n        <button class="btn btn-primary" (click)="createUser()">T\u1EA1o</button>\r\n      </div>\r\n    </div>\r\n  </div>', styles: ["/* src/app/components/user/create-user/create-user.component.scss */\n::ng-deep .cdk-overlay-pane .mat-mdc-dialog-container {\n  border-radius: 5px !important;\n  overflow: hidden !important;\n}\n::ng-deep .mat-mdc-dialog-container {\n  border-radius: 12px !important;\n  overflow: hidden !important;\n}\n::ng-deep .mat-mdc-dialog-component-host .container-fluid {\n  padding: 0;\n  background: #FFF;\n}\n:ng-deep .mat-mdc-dialog-surface {\n  border-radius: 12px !important;\n  overflow: hidden !important;\n}\n::ng-deep .mat-mdc-dialog-content {\n  max-height: 80vh !important;\n  overflow-y: auto !important;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n::ng-deep .mat-mdc-dialog-content::-webkit-scrollbar {\n  display: none;\n}\n.body {\n  margin-bottom: 20px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n.content {\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  width: 100%;\n  animation: slideIn 0.3s ease-out;\n  box-sizing: border-box;\n}\n.close-button {\n  border: none;\n  background: none;\n  font-size: 24px;\n  color: #666;\n  cursor: pointer;\n}\n.footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 15px;\n  border-top: 1px solid #eee;\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.form-control {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=create-user.component.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: i22.Router }, { type: i32.MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(CreateUserComponent, { className: "CreateUserComponent", filePath: "src/app/components/user/create-user/create-user.component.ts", lineNumber: 26 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fuser%2Fcreate-user%2Fcreate-user.component.ts%40CreateUserComponent";
  function CreateUserComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i04.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i04.\u0275\u0275replaceMetadata(CreateUserComponent, m.default, [i04, i4, i5, i6, i32, i7, i8, i9, i10, user_service_exports, i22], [CommonModule2, FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, Component2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && CreateUserComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && CreateUserComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/user/update-user/update-user.component.ts
import { CommonModule as CommonModule3 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { Component as Component3, Inject } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { FormsModule as FormsModule2 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import { MatButtonModule as MatButtonModule2 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_button.js?v=e44b7f9a";
import { MatDialogModule as MatDialogModule2, MAT_DIALOG_DATA } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_dialog.js?v=e44b7f9a";
import { MatFormFieldModule as MatFormFieldModule2 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_form-field.js?v=e44b7f9a";
import { MatInputModule as MatInputModule2 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_input.js?v=e44b7f9a";
import * as i05 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i23 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_dialog.js?v=e44b7f9a";
import * as i33 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i42 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import * as i52 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_cdk_bidi.js?v=e44b7f9a";
import * as i62 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_form-field.js?v=e44b7f9a";
import * as i72 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_input.js?v=e44b7f9a";
import * as i82 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_cdk_text-field.js?v=e44b7f9a";
import * as i92 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_button.js?v=e44b7f9a";
var UpdateUserComponent = class _UpdateUserComponent {
  userService;
  dialogRef;
  data;
  name = "";
  email = "";
  password = "";
  userId;
  showPassword = false;
  constructor(userService, dialogRef, data) {
    this.userService = userService;
    this.dialogRef = dialogRef;
    this.data = data;
  }
  ngOnInit() {
    if (this.data) {
      console.log("User data:", this.data);
      this.userId = this.data.id;
      this.name = this.data.name;
      this.email = this.data.email;
      this.password = this.data.password || "";
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  updateUser() {
    if (!this.userId) {
      alert("Kh\xF4ng t\xECm th\u1EA5y th\xF4ng tin ng\u01B0\u1EDDi d\xF9ng");
      return;
    }
    const userDTO = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    this.userService.updateUser(this.userId, userDTO).subscribe({
      next: () => {
        debugger;
        this.dialogRef.close(true);
      },
      error: (error) => {
        debugger;
        alert(error.error);
      }
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static \u0275fac = function UpdateUserComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpdateUserComponent)(i05.\u0275\u0275directiveInject(UserService), i05.\u0275\u0275directiveInject(i23.MatDialogRef), i05.\u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _UpdateUserComponent, selectors: [["app-update-user"]], decls: 25, vars: 3, consts: [[1, "container-fluid"], [1, "content"], [1, "header"], [1, "close-button", 3, "click"], [1, "body"], [1, "form-group", "mb-3"], ["type", "text", "name", "name", "placeholder", "Nh\u1EADp t\xEAn", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "Nh\u1EADp email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "placeholder", "Nh\u1EADp m\u1EADt kh\u1EA9u", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function UpdateUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
      i05.\u0275\u0275text(4, "C\u1EADp nh\u1EADt t\xE0i kho\u1EA3n");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(5, "button", 3);
      i05.\u0275\u0275listener("click", function UpdateUserComponent_Template_button_click_5_listener() {
        return ctx.closeDialog();
      });
      i05.\u0275\u0275text(6, "\xD7");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      i05.\u0275\u0275text(10, "T\xEAn");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(11, "input", 6);
      i05.\u0275\u0275twoWayListener("ngModelChange", function UpdateUserComponent_Template_input_ngModelChange_11_listener($event) {
        i05.\u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return $event;
      });
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(12, "div", 5)(13, "label");
      i05.\u0275\u0275text(14, "Email");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(15, "input", 7);
      i05.\u0275\u0275twoWayListener("ngModelChange", function UpdateUserComponent_Template_input_ngModelChange_15_listener($event) {
        i05.\u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(16, "div", 5)(17, "label");
      i05.\u0275\u0275text(18, "M\u1EADt kh\u1EA9u");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(19, "input", 8);
      i05.\u0275\u0275twoWayListener("ngModelChange", function UpdateUserComponent_Template_input_ngModelChange_19_listener($event) {
        i05.\u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      i05.\u0275\u0275elementEnd()()();
      i05.\u0275\u0275elementStart(20, "div", 9)(21, "button", 10);
      i05.\u0275\u0275listener("click", function UpdateUserComponent_Template_button_click_21_listener() {
        return ctx.closeDialog();
      });
      i05.\u0275\u0275text(22, "H\u1EE7y");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(23, "button", 11);
      i05.\u0275\u0275listener("click", function UpdateUserComponent_Template_button_click_23_listener() {
        return ctx.updateUser();
      });
      i05.\u0275\u0275text(24, "C\u1EADp nh\u1EADt");
      i05.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      i05.\u0275\u0275advance(11);
      i05.\u0275\u0275twoWayProperty("ngModel", ctx.name);
      i05.\u0275\u0275advance(4);
      i05.\u0275\u0275twoWayProperty("ngModel", ctx.email);
      i05.\u0275\u0275advance(4);
      i05.\u0275\u0275twoWayProperty("ngModel", ctx.password);
    }
  }, dependencies: [CommonModule3, i33.NgClass, i33.NgComponentOutlet, i33.NgForOf, i33.NgIf, i33.NgTemplateOutlet, i33.NgStyle, i33.NgSwitch, i33.NgSwitchCase, i33.NgSwitchDefault, i33.NgPlural, i33.NgPluralCase, i33.AsyncPipe, i33.UpperCasePipe, i33.LowerCasePipe, i33.JsonPipe, i33.SlicePipe, i33.DecimalPipe, i33.PercentPipe, i33.TitleCasePipe, i33.CurrencyPipe, i33.DatePipe, i33.I18nPluralPipe, i33.I18nSelectPipe, i33.KeyValuePipe, FormsModule2, i42.\u0275NgNoValidate, i42.NgSelectOption, i42.\u0275NgSelectMultipleOption, i42.DefaultValueAccessor, i42.NumberValueAccessor, i42.RangeValueAccessor, i42.CheckboxControlValueAccessor, i42.SelectControlValueAccessor, i42.SelectMultipleControlValueAccessor, i42.RadioControlValueAccessor, i42.NgControlStatus, i42.NgControlStatusGroup, i42.RequiredValidator, i42.MinLengthValidator, i42.MaxLengthValidator, i42.PatternValidator, i42.CheckboxRequiredValidator, i42.EmailValidator, i42.MinValidator, i42.MaxValidator, i42.NgModel, i42.NgModelGroup, i42.NgForm, MatDialogModule2, i52.Dir, i23.MatDialogContainer, i23.MatDialogClose, i23.MatDialogTitle, i23.MatDialogActions, i23.MatDialogContent, MatFormFieldModule2, i62.MatFormField, i62.MatLabel, i62.MatHint, i62.MatError, i62.MatPrefix, i62.MatSuffix, MatInputModule2, i72.MatInput, i82.CdkAutofill, i82.CdkTextareaAutosize, MatButtonModule2, i92.MatAnchor, i92.MatButton, i92.MatIconAnchor, i92.MatIconButton, i92.MatMiniFabAnchor, i92.MatMiniFabButton, i92.MatFabAnchor, i92.MatFabButton], styles: ["\n\n  .cdk-overlay-pane .mat-mdc-dialog-container {\n  border-radius: 5px !important;\n  overflow: hidden !important;\n}\n  .mat-mdc-dialog-container {\n  border-radius: 12px !important;\n  overflow: hidden !important;\n}\n  .mat-mdc-dialog-component-host .container-fluid {\n  padding: 0;\n  background: #FFF;\n}\n[_ngcontent-%COMP%]:ng-deep   .mat-mdc-dialog-surface[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  overflow: hidden !important;\n}\n  .mat-mdc-dialog-content {\n  max-height: 80vh !important;\n  overflow-y: auto !important;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n  .mat-mdc-dialog-content::-webkit-scrollbar {\n  display: none;\n}\n.body[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n.content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  width: 100%;\n  animation: slideIn 0.3s ease-out;\n  box-sizing: border-box;\n}\n.close-button[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  font-size: 24px;\n  color: #666;\n  cursor: pointer;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 15px;\n  border-top: 1px solid #eee;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n.password-input[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 40px;\n}\n.password-input[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #666;\n  cursor: pointer;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.password-input[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%]:hover {\n  color: #4e73df;\n}\n.password-input[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=update-user.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(UpdateUserComponent, [{
    type: Component3,
    args: [{ selector: "app-update-user", imports: [
      CommonModule3,
      FormsModule2,
      MatDialogModule2,
      MatFormFieldModule2,
      MatInputModule2,
      MatButtonModule2
    ], template: '    <div class="container-fluid">\n        <div class="content">\n            <div class="header">\n                <h5>C\u1EADp nh\u1EADt t\xE0i kho\u1EA3n</h5>\n                <button class="close-button" (click)="closeDialog()">\xD7</button>\n            </div>\n            <div class="body">\n                <div class="form-group mb-3">\n                    <label>T\xEAn</label>\n                    <input type="text" class="form-control" name="name" placeholder="Nh\u1EADp t\xEAn" [(ngModel)]="name">\n                </div>\n                <div class="form-group mb-3">\n                    <label>Email</label>\n                    <input type="email" class="form-control" name="email" placeholder="Nh\u1EADp email" [(ngModel)]="email">\n                </div>\n                <div class="form-group mb-3">\n                    <label>M\u1EADt kh\u1EA9u</label>\n                    <input type="password" class="form-control" name="password" placeholder="Nh\u1EADp m\u1EADt kh\u1EA9u" [(ngModel)]="password">\n                </div>\n            </div>\n            <div class="footer">\n                <button class="btn btn-secondary" (click)="closeDialog()">H\u1EE7y</button>\n                <button class="btn btn-primary" (click)="updateUser()">C\u1EADp nh\u1EADt</button>\n            </div>\n        </div>\n    </div>', styles: ["/* src/app/components/user/update-user/update-user.component.scss */\n::ng-deep .cdk-overlay-pane .mat-mdc-dialog-container {\n  border-radius: 5px !important;\n  overflow: hidden !important;\n}\n::ng-deep .mat-mdc-dialog-container {\n  border-radius: 12px !important;\n  overflow: hidden !important;\n}\n::ng-deep .mat-mdc-dialog-component-host .container-fluid {\n  padding: 0;\n  background: #FFF;\n}\n:ng-deep .mat-mdc-dialog-surface {\n  border-radius: 12px !important;\n  overflow: hidden !important;\n}\n::ng-deep .mat-mdc-dialog-content {\n  max-height: 80vh !important;\n  overflow-y: auto !important;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n::ng-deep .mat-mdc-dialog-content::-webkit-scrollbar {\n  display: none;\n}\n.body {\n  margin-bottom: 20px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n.content {\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  width: 100%;\n  animation: slideIn 0.3s ease-out;\n  box-sizing: border-box;\n}\n.close-button {\n  border: none;\n  background: none;\n  font-size: 24px;\n  color: #666;\n  cursor: pointer;\n}\n.footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 15px;\n  border-top: 1px solid #eee;\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.form-control {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n.password-input {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-input .form-control {\n  padding-right: 40px;\n}\n.password-input .toggle-password {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #666;\n  cursor: pointer;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.password-input .toggle-password:hover {\n  color: #4e73df;\n}\n.password-input .toggle-password i {\n  font-size: 16px;\n}\n/*# sourceMappingURL=update-user.component.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: i23.MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(UpdateUserComponent, { className: "UpdateUserComponent", filePath: "src/app/components/user/update-user/update-user.component.ts", lineNumber: 31 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fuser%2Fupdate-user%2Fupdate-user.component.ts%40UpdateUserComponent";
  function UpdateUserComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i05.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i05.\u0275\u0275replaceMetadata(UpdateUserComponent, m.default, [i05, i33, i42, i52, i23, i62, i72, i82, i92, user_service_exports], [CommonModule3, FormsModule2, MatDialogModule2, MatFormFieldModule2, MatInputModule2, MatButtonModule2, MAT_DIALOG_DATA, Component3, Inject], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && UpdateUserComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && UpdateUserComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/user/user.component.ts
import * as i06 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i24 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i34 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_material_dialog.js?v=e44b7f9a";
import * as i43 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i53 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
function UserComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i06.\u0275\u0275getCurrentView();
    i06.\u0275\u0275elementStart(0, "tr", 23)(1, "td", 24);
    i06.\u0275\u0275text(2);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(3, "td");
    i06.\u0275\u0275text(4);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(5, "td");
    i06.\u0275\u0275text(6);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(7, "td")(8, "button", 25);
    i06.\u0275\u0275listener("click", function UserComponent_tr_32_Template_button_click_8_listener() {
      const account_r2 = i06.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i06.\u0275\u0275nextContext();
      return i06.\u0275\u0275resetView(ctx_r2.openDialogUpdateUser(account_r2));
    });
    i06.\u0275\u0275element(9, "i", 26);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(10, "button", 27);
    i06.\u0275\u0275listener("click", function UserComponent_tr_32_Template_button_click_10_listener() {
      const account_r2 = i06.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i06.\u0275\u0275nextContext();
      return i06.\u0275\u0275resetView(ctx_r2.deleteUser(account_r2.id));
    });
    i06.\u0275\u0275element(11, "i", 28);
    i06.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const account_r2 = ctx.$implicit;
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275textInterpolate(account_r2.id);
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275textInterpolate(account_r2.name);
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275textInterpolate(account_r2.email);
  }
}
var UserComponent = class _UserComponent {
  userService;
  router;
  dialog;
  name = "";
  email = "";
  password = "";
  isPopupVisible;
  accounts = [];
  selectedUser = null;
  isEditMode = false;
  constructor(userService, router, dialog) {
    this.userService = userService;
    this.router = router;
    this.dialog = dialog;
  }
  ngOnInit() {
    this.loadListUsers();
  }
  loadListUsers() {
    this.userService.getListUsers().subscribe({
      next: (response) => {
        this.accounts = response.map((user) => __spreadProps(__spreadValues({}, user), {
          password: user.password || ""
          // Đảm bảo có trường password
        }));
      },
      error: (error) => {
        alert(error.error);
      }
    });
  }
  deleteUser(id) {
    if (confirm("B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a ng\u01B0\u1EDDi d\xF9ng n\xE0y?")) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.loadListUsers();
        },
        error: (error) => {
          alert(error.error);
        }
      });
    }
  }
  openDialogCreateUser() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: "400px"
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.loadListUsers();
      }
    });
  }
  openDialogUpdateUser(user) {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      width: "400px",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password || ""
        // Truyền password vào dialog
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.loadListUsers();
      }
    });
  }
  unlockAccount(userId) {
    console.log("Unlock account:", userId);
  }
  static \u0275fac = function UserComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserComponent)(i06.\u0275\u0275directiveInject(UserService), i06.\u0275\u0275directiveInject(i24.Router), i06.\u0275\u0275directiveInject(i34.MatDialog));
  };
  static \u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _UserComponent, selectors: [["app-user"]], decls: 33, vars: 1, consts: [[1, "container-fluid"], [1, "header-actions"], [1, "h3", "mb-2", "text-gray-800"], ["id", "dataTable_length", 1, "dataTables_length"], [1, "btn", "btn-primary", "bg-gradient-primary", 3, "click"], [1, "fas", "fa-plus"], [1, "card", "shadow", "mb-4"], [1, "card-header", "py-3"], [1, "m-0", "font-weight-bold", "text-primary"], [1, "card-body"], [1, "table-responsive"], ["id", "dataTable_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4"], [1, "row"], [1, "col-sm-12", "col-md-6"], ["id", "dataTable_filter", 1, "dataTables_filter"], [1, "col-sm-12"], ["id", "dataTable", "width", "100%", "cellspacing", "0", "role", "grid", "aria-describedby", "dataTable_info", 1, "table", "table-bordered", "dataTable", 2, "width", "100%"], ["role", "row"], ["aria-controls", "dataTable", "rowspan", "1", "colspan", "1", "aria-sort", "ascending", 2, "width", "20px"], ["tabindex", "0", "rowspan", "1", "colspan", "1", 1, "sorting", 2, "width", "247.7px"], ["tabindex", "0", "aria-controls", "dataTable", "rowspan", "1", "colspan", "1", 1, "sorting", 2, "width", "247.7px"], ["tabindex", "0", "aria-controls", "dataTable", "rowspan", "1", "colspan", "1", 1, "sorting", 2, "width", "78.2px"], ["class", "odd", 4, "ngFor", "ngForOf"], [1, "odd"], [1, "sorting_1"], [1, "btn", "edit-btn", 3, "click"], [1, "fa-solid", "fa-pen-to-square"], [1, "btn", "delete-btn", 3, "click"], [1, "fa-solid", "fa-trash"]], template: function UserComponent_Template(rf, ctx) {
    if (rf & 1) {
      i06.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      i06.\u0275\u0275text(3, "Qu\u1EA3n l\xFD t\xE0i kho\u1EA3n");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
      i06.\u0275\u0275listener("click", function UserComponent_Template_button_click_5_listener() {
        return ctx.openDialogCreateUser();
      });
      i06.\u0275\u0275element(6, "i", 5);
      i06.\u0275\u0275text(7, " Th\xEAm");
      i06.\u0275\u0275elementEnd()()();
      i06.\u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "h6", 8);
      i06.\u0275\u0275text(11, "Danh s\xE1ch t\xE0i kho\u1EA3n");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13);
      i06.\u0275\u0275element(17, "div", 14);
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(18, "div", 12)(19, "div", 15)(20, "table", 16)(21, "thead")(22, "tr", 17)(23, "th", 18);
      i06.\u0275\u0275text(24, "ID ");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(25, "th", 19);
      i06.\u0275\u0275text(26, "T\xEAn ng\u01B0\u1EDDi d\xF9ng");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(27, "th", 20);
      i06.\u0275\u0275text(28, "Email");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(29, "th", 21);
      i06.\u0275\u0275text(30, "H\xE0nh \u0111\u1ED9ng");
      i06.\u0275\u0275elementEnd()()();
      i06.\u0275\u0275elementStart(31, "tbody");
      i06.\u0275\u0275template(32, UserComponent_tr_32_Template, 12, 3, "tr", 22);
      i06.\u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      i06.\u0275\u0275advance(32);
      i06.\u0275\u0275property("ngForOf", ctx.accounts);
    }
  }, dependencies: [CommonModule4, i43.NgClass, i43.NgComponentOutlet, i43.NgForOf, i43.NgIf, i43.NgTemplateOutlet, i43.NgStyle, i43.NgSwitch, i43.NgSwitchCase, i43.NgSwitchDefault, i43.NgPlural, i43.NgPluralCase, i43.AsyncPipe, i43.UpperCasePipe, i43.LowerCasePipe, i43.JsonPipe, i43.SlicePipe, i43.DecimalPipe, i43.PercentPipe, i43.TitleCasePipe, i43.CurrencyPipe, i43.DatePipe, i43.I18nPluralPipe, i43.I18nSelectPipe, i43.KeyValuePipe, RouterModule2, i24.RouterOutlet, i24.RouterLink, i24.RouterLinkActive, i24.\u0275EmptyOutletComponent, FormsModule3, i53.\u0275NgNoValidate, i53.NgSelectOption, i53.\u0275NgSelectMultipleOption, i53.DefaultValueAccessor, i53.NumberValueAccessor, i53.RangeValueAccessor, i53.CheckboxControlValueAccessor, i53.SelectControlValueAccessor, i53.SelectMultipleControlValueAccessor, i53.RadioControlValueAccessor, i53.NgControlStatus, i53.NgControlStatusGroup, i53.RequiredValidator, i53.MinLengthValidator, i53.MaxLengthValidator, i53.PatternValidator, i53.CheckboxRequiredValidator, i53.EmailValidator, i53.MinValidator, i53.MaxValidator, i53.NgModel, i53.NgModelGroup, i53.NgForm], styles: ['@charset "UTF-8";\n\n\n\n.mb-4[_ngcontent-%COMP%], \n.my-4[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem !important;\n}\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid #e3e6f0;\n  border-radius: 0.35rem;\n}\n*[_ngcontent-%COMP%], \n[_ngcontent-%COMP%]::after, \n[_ngcontent-%COMP%]::before {\n  box-sizing: border-box;\n}\ndiv[_ngcontent-%COMP%] {\n  display: block;\n  unicode-bidi: isolate;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family:\n    Nunito,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol",\n    "Noto Color Emoji";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #858796;\n  text-align: left;\n  background-color: #fff;\n}\n.bg-gradient-primary[_ngcontent-%COMP%] {\n  background-color: #4e73df;\n  background-image:\n    linear-gradient(\n      180deg,\n      #4e73df 10%,\n      #224abe 100%);\n  background-size: cover;\n}\n.edit-btn[_ngcontent-%COMP%]:hover, \n.delete-btn[_ngcontent-%COMP%]:hover {\n  cursor: circle;\n  opacity: 0.7;\n  transition: cursor 0.2s ease-in-out, opacity 0.2s ease-in-out;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.header-actions[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 400px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateY(-100px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n.popup-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: #333;\n}\n.close-button[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  font-size: 24px;\n  color: #666;\n  cursor: pointer;\n}\n.popup-body[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  color: #555;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n.checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #666;\n}\n.popup-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 15px;\n  border-top: 1px solid #eee;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: hidden !important;\n}\n.table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  width: 100%;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background-color: #f8f9fc;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.edit-btn[_ngcontent-%COMP%], \n.delete-btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  margin: 0 0.25rem;\n}\n.edit-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=user.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(UserComponent, [{
    type: Component4,
    args: [{ selector: "app-user", imports: [
      CommonModule4,
      RouterModule2,
      FormsModule3
    ], template: '\r\n  <div class="container-fluid">\r\n    <div class="header-actions">\r\n      <h1 class="h3 mb-2 text-gray-800">Qu\u1EA3n l\xFD t\xE0i kho\u1EA3n</h1>\r\n      <div class="dataTables_length" id="dataTable_length">\r\n        <button class="btn btn-primary bg-gradient-primary" (click)="openDialogCreateUser()"><i class="fas fa-plus"></i>\r\n          Th\xEAm</button>\r\n      </div>\r\n    </div>\r\n    <div class="card shadow mb-4">\r\n      <div class="card-header py-3">\r\n        <h6 class="m-0 font-weight-bold text-primary">Danh s\xE1ch t\xE0i kho\u1EA3n</h6>\r\n      </div>\r\n      <div class="card-body">\r\n        <div class="table-responsive">\r\n          <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">\r\n            <div class="row">\r\n              <div class="col-sm-12 col-md-6">\r\n                <div id="dataTable_filter" class="dataTables_filter"></div>\r\n              </div>\r\n            </div>\r\n            <div class="row">\r\n              <div class="col-sm-12">\r\n                <table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid"\r\n                  aria-describedby="dataTable_info" style="width: 100%;">\r\n                  <thead>\r\n                    <tr role="row">\r\n                      <th aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" style="width: 20px;">ID\r\n                      </th>\r\n                      <th class="sorting" tabindex="0" rowspan="1" colspan="1" style="width: 247.7px;">T\xEAn ng\u01B0\u1EDDi d\xF9ng</th>\r\n                      <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"\r\n                        style="width: 247.7px;">Email</th>\r\n                      <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"\r\n                        style="width: 78.2px;">H\xE0nh \u0111\u1ED9ng</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr class="odd" *ngFor="let account of accounts">\r\n                      <td class="sorting_1">{{ account.id }}</td>\r\n                      <td>{{ account.name }}</td>\r\n                      <td>{{ account.email }}</td>\r\n                      <td>\r\n                        <button class="btn edit-btn" (click)="openDialogUpdateUser(account)">\r\n                          <i class="fa-solid fa-pen-to-square"></i>\r\n                        </button>\r\n                        <button class="btn delete-btn" (click)="deleteUser(account.id)"><i\r\n                            class="fa-solid fa-trash"></i></button>\r\n                      </td>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n', styles: ['@charset "UTF-8";\n\n/* src/app/components/user/user.component.scss */\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n.shadow {\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;\n}\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid #e3e6f0;\n  border-radius: 0.35rem;\n}\n*,\n::after,\n::before {\n  box-sizing: border-box;\n}\ndiv {\n  display: block;\n  unicode-bidi: isolate;\n}\nbody {\n  margin: 0;\n  font-family:\n    Nunito,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol",\n    "Noto Color Emoji";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #858796;\n  text-align: left;\n  background-color: #fff;\n}\n.bg-gradient-primary {\n  background-color: #4e73df;\n  background-image:\n    linear-gradient(\n      180deg,\n      #4e73df 10%,\n      #224abe 100%);\n  background-size: cover;\n}\n.edit-btn:hover,\n.delete-btn:hover {\n  cursor: circle;\n  opacity: 0.7;\n  transition: cursor 0.2s ease-in-out, opacity 0.2s ease-in-out;\n}\n.header-actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.header-actions h1 {\n  margin-bottom: 0;\n}\n.popup-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.popup-content {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 400px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  animation: slideIn 0.3s ease-out;\n}\n@keyframes slideIn {\n  from {\n    transform: translateY(-100px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n.popup-header h5 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: #333;\n}\n.close-button {\n  border: none;\n  background: none;\n  font-size: 24px;\n  color: #666;\n  cursor: pointer;\n}\n.popup-body {\n  margin-bottom: 20px;\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 5px;\n  color: #555;\n}\n.form-control {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n.checkbox-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #666;\n}\n.popup-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 15px;\n  border-top: 1px solid #eee;\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.btn-secondary {\n  background: #f5f5f5;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.table-responsive {\n  overflow-x: hidden !important;\n}\n.table {\n  margin-bottom: 0;\n  width: 100%;\n}\n.table thead th {\n  white-space: nowrap;\n  background-color: #f8f9fc;\n}\n.table tbody td {\n  white-space: nowrap;\n}\n.edit-btn,\n.delete-btn {\n  padding: 0.25rem 0.5rem;\n  margin: 0 0.25rem;\n}\n.edit-btn i,\n.delete-btn i {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=user.component.css.map */\n'] }]
  }], () => [{ type: UserService }, { type: i24.Router }, { type: i34.MatDialog }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(UserComponent, { className: "UserComponent", filePath: "src/app/components/user/user.component.ts", lineNumber: 22 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fuser%2Fuser.component.ts%40UserComponent";
  function UserComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i06.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i06.\u0275\u0275replaceMetadata(UserComponent, m.default, [i06, i43, i24, i53, user_service_exports, i34], [CommonModule4, RouterModule2, FormsModule3, Component4], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && UserComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && UserComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/news/news.component.ts
import { CommonModule as CommonModule5 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { Component as Component5, ViewChild } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { RouterModule as RouterModule3 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import { FormsModule as FormsModule4 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import * as i08 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";

// src/app/services/news.service.ts
var news_service_exports = {};
__export(news_service_exports, {
  NewsService: () => NewsService
});
import { Injectable as Injectable3 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i07 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i12 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common_http.js?v=e44b7f9a";
var NewsService = class _NewsService {
  http;
  httpUtilService;
  apiNews = `${environment.apiBaseUrl}/news`;
  apiUpdateNews = `${environment.apiBaseUrl}/news`;
  constructor(http, httpUtilService) {
    this.http = http;
    this.httpUtilService = httpUtilService;
  }
  getApiConfig() {
    return {
      headers: this.httpUtilService.createHeaders()
    };
  }
  getAllNews(page = 0, size = 5) {
    return this.http.get(`${this.apiNews}?page=${page}&size=${size}`);
  }
  getListNews() {
    return this.http.get(`${environment.apiBaseUrl}/news`);
  }
  getNewsById(id) {
    return this.http.get(`${environment.apiBaseUrl}/news/${id}`);
  }
  createNews(newsDTO) {
    return this.http.post(this.apiNews, newsDTO, this.getApiConfig());
  }
  deleteNewsById(id) {
    return this.http.delete(`${environment.apiBaseUrl}/news/${id}`);
  }
  uploadFiles(newsId, formData) {
    return this.http.post(`${environment.apiBaseUrl}/news/uploads/${newsId}`, formData);
  }
  updateNews(id, newsDTO) {
    return this.http.put(`${environment.apiBaseUrl}/news/${id}`, newsDTO);
  }
  static \u0275fac = function NewsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NewsService)(i07.\u0275\u0275inject(i12.HttpClient), i07.\u0275\u0275inject(HttpUtilService));
  };
  static \u0275prov = /* @__PURE__ */ i07.\u0275\u0275defineInjectable({ token: _NewsService, factory: _NewsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassMetadata(NewsService, [{
    type: Injectable3,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: i12.HttpClient }, { type: HttpUtilService }], null);
})();

// src/app/components/news/news.component.ts
import * as i25 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i35 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i44 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
var _c02 = ["fileInput"];
var _c1 = (a0) => ["/admin/detail-news", a0];
function NewsComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i08.\u0275\u0275getCurrentView();
    i08.\u0275\u0275elementStart(0, "tr")(1, "td");
    i08.\u0275\u0275text(2);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(3, "td")(4, "a", 15);
    i08.\u0275\u0275text(5);
    i08.\u0275\u0275elementEnd()();
    i08.\u0275\u0275elementStart(6, "td");
    i08.\u0275\u0275text(7);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(8, "td", 16)(9, "button", 17);
    i08.\u0275\u0275element(10, "i", 18);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(11, "button", 19);
    i08.\u0275\u0275listener("click", function NewsComponent_tr_24_Template_button_click_11_listener() {
      const post_r2 = i08.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i08.\u0275\u0275nextContext();
      return i08.\u0275\u0275resetView(ctx_r2.deleteNews(post_r2.id));
    });
    i08.\u0275\u0275element(12, "i", 20);
    i08.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r2 = ctx.$implicit;
    i08.\u0275\u0275advance(2);
    i08.\u0275\u0275textInterpolate(post_r2.id);
    i08.\u0275\u0275advance(2);
    i08.\u0275\u0275property("routerLink", i08.\u0275\u0275pureFunction1(6, _c1, post_r2.id));
    i08.\u0275\u0275advance();
    i08.\u0275\u0275textInterpolate(post_r2.name);
    i08.\u0275\u0275advance(2);
    i08.\u0275\u0275textInterpolate(post_r2.shortDescription);
    i08.\u0275\u0275advance(2);
    i08.\u0275\u0275propertyInterpolate1("routerLink", "/amdin/update-news/", post_r2.id, "");
  }
}
function NewsComponent_div_25_div_27_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "div", 35)(1, "label", 36);
    i08.\u0275\u0275text(2, "\u1EA2nh \u0111\xE3 ch\u1ECDn:");
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(3, "div");
    i08.\u0275\u0275text(4);
    i08.\u0275\u0275pipe(5, "number");
    i08.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = i08.\u0275\u0275nextContext(2);
    i08.\u0275\u0275advance(4);
    i08.\u0275\u0275textInterpolate2("", ctx_r2.selectedFile.name, " (", i08.\u0275\u0275pipeBind1(5, 2, ctx_r2.selectedFile.size), " bytes)");
  }
}
function NewsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i08.\u0275\u0275getCurrentView();
    i08.\u0275\u0275elementStart(0, "div", 21);
    i08.\u0275\u0275listener("click", function NewsComponent_div_25_Template_div_click_0_listener($event) {
      i08.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i08.\u0275\u0275nextContext();
      return i08.\u0275\u0275resetView(ctx_r2.closePopup($event));
    });
    i08.\u0275\u0275elementStart(1, "div", 22)(2, "div", 23)(3, "h5");
    i08.\u0275\u0275text(4, "Th\xEAm tin t\u1EE9c");
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(5, "button", 24);
    i08.\u0275\u0275listener("click", function NewsComponent_div_25_Template_button_click_5_listener() {
      i08.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i08.\u0275\u0275nextContext();
      return i08.\u0275\u0275resetView(ctx_r2.togglePopup());
    });
    i08.\u0275\u0275text(6, "\xD7");
    i08.\u0275\u0275elementEnd()();
    i08.\u0275\u0275elementStart(7, "div", 25)(8, "div", 26)(9, "label");
    i08.\u0275\u0275text(10, "T\xEAn");
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(11, "input", 27);
    i08.\u0275\u0275twoWayListener("ngModelChange", function NewsComponent_div_25_Template_input_ngModelChange_11_listener($event) {
      i08.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i08.\u0275\u0275nextContext();
      i08.\u0275\u0275twoWayBindingSet(ctx_r2.name, $event) || (ctx_r2.name = $event);
      return i08.\u0275\u0275resetView($event);
    });
    i08.\u0275\u0275elementEnd()();
    i08.\u0275\u0275elementStart(12, "div", 26)(13, "label");
    i08.\u0275\u0275text(14, "M\xF4 t\u1EA3");
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(15, "input", 27);
    i08.\u0275\u0275twoWayListener("ngModelChange", function NewsComponent_div_25_Template_input_ngModelChange_15_listener($event) {
      i08.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i08.\u0275\u0275nextContext();
      i08.\u0275\u0275twoWayBindingSet(ctx_r2.shortDescription, $event) || (ctx_r2.shortDescription = $event);
      return i08.\u0275\u0275resetView($event);
    });
    i08.\u0275\u0275elementEnd()();
    i08.\u0275\u0275elementStart(16, "div", 26)(17, "label");
    i08.\u0275\u0275text(18, "N\u1ED9i dung");
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(19, "input", 27);
    i08.\u0275\u0275twoWayListener("ngModelChange", function NewsComponent_div_25_Template_input_ngModelChange_19_listener($event) {
      i08.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i08.\u0275\u0275nextContext();
      i08.\u0275\u0275twoWayBindingSet(ctx_r2.content, $event) || (ctx_r2.content = $event);
      return i08.\u0275\u0275resetView($event);
    });
    i08.\u0275\u0275elementEnd()();
    i08.\u0275\u0275elementStart(20, "div", 26)(21, "label", 28);
    i08.\u0275\u0275text(22, "\u1EA2nh \u0111\xEDnh k\xE8m");
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(23, "button", 29);
    i08.\u0275\u0275listener("click", function NewsComponent_div_25_Template_button_click_23_listener() {
      i08.\u0275\u0275restoreView(_r4);
      const fileInput_r5 = i08.\u0275\u0275reference(26);
      return i08.\u0275\u0275resetView(fileInput_r5.click());
    });
    i08.\u0275\u0275text(24, " Ch\u1ECDn \u1EA3nh\u2026 ");
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(25, "input", 30, 0);
    i08.\u0275\u0275listener("change", function NewsComponent_div_25_Template_input_change_25_listener($event) {
      i08.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i08.\u0275\u0275nextContext();
      return i08.\u0275\u0275resetView(ctx_r2.onFileSelect($event));
    });
    i08.\u0275\u0275elementEnd()();
    i08.\u0275\u0275template(27, NewsComponent_div_25_div_27_Template, 6, 4, "div", 31);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(28, "div", 32)(29, "button", 33);
    i08.\u0275\u0275listener("click", function NewsComponent_div_25_Template_button_click_29_listener() {
      i08.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i08.\u0275\u0275nextContext();
      return i08.\u0275\u0275resetView(ctx_r2.togglePopup());
    });
    i08.\u0275\u0275text(30, "H\u1EE7y");
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(31, "button", 34);
    i08.\u0275\u0275listener("click", function NewsComponent_div_25_Template_button_click_31_listener() {
      i08.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i08.\u0275\u0275nextContext();
      return i08.\u0275\u0275resetView(ctx_r2.createNews());
    });
    i08.\u0275\u0275text(32, "T\u1EA1o");
    i08.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = i08.\u0275\u0275nextContext();
    i08.\u0275\u0275advance(11);
    i08.\u0275\u0275twoWayProperty("ngModel", ctx_r2.name);
    i08.\u0275\u0275advance(4);
    i08.\u0275\u0275twoWayProperty("ngModel", ctx_r2.shortDescription);
    i08.\u0275\u0275advance(4);
    i08.\u0275\u0275twoWayProperty("ngModel", ctx_r2.content);
    i08.\u0275\u0275advance(8);
    i08.\u0275\u0275property("ngIf", ctx_r2.selectedFile);
  }
}
var NewsComponent = class _NewsComponent {
  newsService;
  router;
  /* danh sách */
  posts = [];
  /* popup state + form */
  isPopupVisible = false;
  name = "";
  shortDescription = "";
  content = "";
  selectedFile = null;
  fileInput;
  constructor(newsService, router) {
    this.newsService = newsService;
    this.router = router;
  }
  /* ---------- lifecycle ---------- */
  ngOnInit() {
    this.loadAllNews();
  }
  /* ---------- lấy danh sách ---------- */
  loadAllNews() {
    this.newsService.getListNews().subscribe({
      next: (res) => this.posts = res,
      error: (err) => alert(err.error || "Kh\xF4ng l\u1EA5y \u0111\u01B0\u1EE3c danh s\xE1ch")
    });
  }
  /* ---------- xóa ---------- */
  deleteNews(id) {
    if (!confirm("B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a b\xE0i \u0111\u0103ng n\xE0y?")) {
      return;
    }
    this.newsService.deleteNewsById(id).subscribe({
      next: () => this.loadAllNews(),
      error: (err) => alert(err.error || "X\xF3a th\u1EA5t b\u1EA1i")
    });
  }
  /* ---------- popup ---------- */
  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
    if (!this.isPopupVisible) {
      this.name = this.shortDescription = this.content = "";
      this.selectedFile = null;
      if (this.fileInput) {
        this.fileInput.nativeElement.value = "";
      }
    }
  }
  openAssignPopup() {
    this.togglePopup();
  }
  closePopup(evt) {
    if (evt.target.classList.contains("popup-overlay")) {
      this.togglePopup();
    }
  }
  /* ---------- file ---------- */
  onFileSelect(evt) {
    const input = evt.target;
    this.selectedFile = input.files && input.files[0] ? input.files[0] : null;
  }
  /* ---------- tạo tin ---------- */
  createNews() {
    const dto = {
      name: this.name,
      shortDescription: this.shortDescription,
      content: this.content
    };
    this.newsService.createNews(dto).subscribe({
      next: (res) => {
        const id = res?.data?.id ?? res?.id;
        if (!id) {
          alert("Kh\xF4ng nh\u1EADn \u0111\u01B0\u1EE3c ID b\xE0i vi\u1EBFt");
          return;
        }
        if (this.selectedFile) {
          this.uploadFile(id);
        } else {
          alert("T\u1EA1o b\xE0i vi\u1EBFt th\xE0nh c\xF4ng!");
          this.afterCreate();
        }
      },
      error: (e) => alert(e.error?.message || "T\u1EA1o b\xE0i vi\u1EBFt th\u1EA5t b\u1EA1i")
    });
  }
  uploadFile(newsId) {
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append("files", this.selectedFile, this.selectedFile.name);
    }
    this.newsService.uploadFiles(newsId, formData).subscribe({
      next: () => {
        alert("T\u1EA1o b\xE0i vi\u1EBFt & upload \u1EA3nh th\xE0nh c\xF4ng!");
        this.afterCreate();
      },
      error: (e) => alert(e.error?.message || "Upload \u1EA3nh th\u1EA5t b\u1EA1i")
    });
  }
  afterCreate() {
    this.togglePopup();
    this.loadAllNews();
  }
  static \u0275fac = function NewsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NewsComponent)(i08.\u0275\u0275directiveInject(NewsService), i08.\u0275\u0275directiveInject(i25.Router));
  };
  static \u0275cmp = /* @__PURE__ */ i08.\u0275\u0275defineComponent({ type: _NewsComponent, selectors: [["app-news"]], viewQuery: function NewsComponent_Query(rf, ctx) {
    if (rf & 1) {
      i08.\u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      i08.\u0275\u0275queryRefresh(_t = i08.\u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, decls: 26, vars: 2, consts: [["fileInput", ""], [1, "container-fluid"], [1, "header-actions"], [1, "h3", "mb-2", "text-gray-800"], ["routerLink", "/admin/create-news", 1, "btn", "btn-primary", "bg-gradient-primary"], [1, "fas", "fa-plus"], [1, "card", "shadow", "mb-4"], [1, "card-header", "py-3"], [1, "m-0", "font-weight-bold", "text-primary"], [1, "card-body", "table-responsive"], [1, "table", "table-bordered"], [2, "width", "60px"], [2, "width", "110px"], [4, "ngFor", "ngForOf"], ["class", "popup-overlay", 3, "click", 4, "ngIf"], [3, "routerLink"], [1, "text-center"], [1, "btn", "btn-sm", "edit-btn", 3, "routerLink"], [1, "fa-solid", "fa-pen-to-square"], [1, "btn", "btn-sm", "delete-btn", 3, "click"], [1, "fa-solid", "fa-trash"], [1, "popup-overlay", 3, "click"], [1, "popup-content"], [1, "popup-header"], [1, "close-button", 3, "click"], [1, "popup-body"], [1, "form-group", "mb-3"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-block"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["class", "mb-3", 4, "ngIf"], [1, "popup-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "mb-3"], [1, "form-label"]], template: function NewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i08.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
      i08.\u0275\u0275text(3, "Qu\u1EA3n l\xFD tin t\u1EE9c");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(4, "button", 4);
      i08.\u0275\u0275element(5, "i", 5);
      i08.\u0275\u0275text(6, " Th\xEAm ");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "h6", 8);
      i08.\u0275\u0275text(10, "Danh s\xE1ch tin t\u1EE9c");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(11, "div", 9)(12, "table", 10)(13, "thead")(14, "tr")(15, "th", 11);
      i08.\u0275\u0275text(16, "ID");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(17, "th");
      i08.\u0275\u0275text(18, "T\xEAn");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(19, "th");
      i08.\u0275\u0275text(20, "M\xF4 t\u1EA3");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(21, "th", 12);
      i08.\u0275\u0275text(22, "H\xE0nh\xA0\u0111\u1ED9ng");
      i08.\u0275\u0275elementEnd()()();
      i08.\u0275\u0275elementStart(23, "tbody");
      i08.\u0275\u0275template(24, NewsComponent_tr_24_Template, 13, 8, "tr", 13);
      i08.\u0275\u0275elementEnd()()()()();
      i08.\u0275\u0275template(25, NewsComponent_div_25_Template, 33, 4, "div", 14);
    }
    if (rf & 2) {
      i08.\u0275\u0275advance(24);
      i08.\u0275\u0275property("ngForOf", ctx.posts);
      i08.\u0275\u0275advance();
      i08.\u0275\u0275property("ngIf", ctx.isPopupVisible);
    }
  }, dependencies: [CommonModule5, i35.NgClass, i35.NgComponentOutlet, i35.NgForOf, i35.NgIf, i35.NgTemplateOutlet, i35.NgStyle, i35.NgSwitch, i35.NgSwitchCase, i35.NgSwitchDefault, i35.NgPlural, i35.NgPluralCase, i35.AsyncPipe, i35.UpperCasePipe, i35.LowerCasePipe, i35.JsonPipe, i35.SlicePipe, i35.DecimalPipe, i35.PercentPipe, i35.TitleCasePipe, i35.CurrencyPipe, i35.DatePipe, i35.I18nPluralPipe, i35.I18nSelectPipe, i35.KeyValuePipe, RouterModule3, i25.RouterOutlet, i25.RouterLink, i25.RouterLinkActive, i25.\u0275EmptyOutletComponent, FormsModule4, i44.\u0275NgNoValidate, i44.NgSelectOption, i44.\u0275NgSelectMultipleOption, i44.DefaultValueAccessor, i44.NumberValueAccessor, i44.RangeValueAccessor, i44.CheckboxControlValueAccessor, i44.SelectControlValueAccessor, i44.SelectMultipleControlValueAccessor, i44.RadioControlValueAccessor, i44.NgControlStatus, i44.NgControlStatusGroup, i44.RequiredValidator, i44.MinLengthValidator, i44.MaxLengthValidator, i44.PatternValidator, i44.CheckboxRequiredValidator, i44.EmailValidator, i44.MinValidator, i44.MaxValidator, i44.NgModel, i44.NgModelGroup, i44.NgForm], styles: ['@charset "UTF-8";\n\n\n\n.news-page-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #f4f7f6;\n  padding-top: 75px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.news-page-container[_ngcontent-%COMP%]   .page-content-area[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.news-page-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.news-page-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #333;\n  margin-bottom: 30px;\n  font-size: 2em;\n  font-weight: bold;\n  width: 100%;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n  gap: 20px;\n  width: 80%;\n  max-width: 600px;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  width: 100%;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1em;\n  flex-grow: 1;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 15px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  cursor: pointer;\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  color: #007bff;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  width: 80%;\n  max-width: 1200px;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #fff;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  padding: 15px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 1.1em;\n  font-weight: bold;\n  line-height: 1.4;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333;\n  transition: color 0.3s ease;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 0.9em;\n  line-height: 1.5;\n  margin-bottom: 10px;\n  flex-grow: 1;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  color: #777;\n  font-size: 0.8em;\n}\n.news-page-container[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  color: #555;\n  width: 100%;\n}\n/*# sourceMappingURL=news.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassMetadata(NewsComponent, [{
    type: Component5,
    args: [{ selector: "app-news", standalone: true, imports: [CommonModule5, RouterModule3, FormsModule4], template: `<!-- QU\u1EA2N L\xDD TIN T\u1EE8C -->\r
<div class="container-fluid">\r
  <div class="header-actions">\r
    <h1 class="h3 mb-2 text-gray-800">Qu\u1EA3n l\xFD tin t\u1EE9c</h1>\r
\r
    <button class="btn btn-primary bg-gradient-primary"\r
           routerLink="/admin/create-news" >\r
      <i class="fas fa-plus"></i> Th\xEAm\r
    </button>\r
  </div>\r
\r
  <div class="card shadow mb-4">\r
    <div class="card-header py-3">\r
      <h6 class="m-0 font-weight-bold text-primary">Danh s\xE1ch tin t\u1EE9c</h6>\r
    </div>\r
\r
    <div class="card-body table-responsive">\r
      <table class="table table-bordered">\r
        <thead>\r
          <tr>\r
            <th style="width:60px">ID</th>\r
            <th>T\xEAn</th>\r
            <th>M\xF4 t\u1EA3</th>\r
            <th style="width:110px">H\xE0nh&nbsp;\u0111\u1ED9ng</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let post of posts">\r
            <td>{{ post.id }}</td>\r
            <td>\r
              <a [routerLink]="['/admin/detail-news', post.id]">{{ post.name }}</a>\r
            </td>\r
            <td>{{ post.shortDescription }}</td>\r
            <td class="text-center">\r
              <button class="btn btn-sm edit-btn" routerLink="/amdin/update-news/{{post.id}}">\r
                <i class="fa-solid fa-pen-to-square"></i>\r
              </button>\r
              <button class="btn btn-sm delete-btn"\r
                      (click)="deleteNews(post.id)">\r
                <i class="fa-solid fa-trash"></i>\r
              </button>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ========== POPUP ========== -->\r
<div class="popup-overlay"\r
     *ngIf="isPopupVisible"\r
     (click)="closePopup($event)">\r
\r
  <div class="popup-content">\r
    <div class="popup-header">\r
      <h5>Th\xEAm tin t\u1EE9c</h5>\r
      <button class="close-button" (click)="togglePopup()">\xD7</button>\r
    </div>\r
\r
    <div class="popup-body">\r
      <!-- t\xEAn -->\r
      <div class="form-group mb-3">\r
        <label>T\xEAn</label>\r
        <input type="text"\r
               class="form-control"\r
               [(ngModel)]="name">\r
      </div>\r
\r
      <!-- m\xF4 t\u1EA3 -->\r
      <div class="form-group mb-3">\r
        <label>M\xF4 t\u1EA3</label>\r
        <input type="text"\r
               class="form-control"\r
               [(ngModel)]="shortDescription">\r
      </div>\r
\r
      <!-- n\u1ED9i dung -->\r
      <div class="form-group mb-3">\r
        <label>N\u1ED9i dung</label>\r
        <input type="text"\r
               class="form-control"\r
               [(ngModel)]="content">\r
      </div>\r
\r
      <!-- \u1EA3nh \u0111\xEDnh k\xE8m (ch\u1EC9 1) -->\r
      <div class="form-group mb-3">\r
        <label class="d-block">\u1EA2nh \u0111\xEDnh k\xE8m</label>\r
        <button type="button"\r
                class="btn btn-outline-primary btn-sm"\r
                (click)="fileInput.click()">\r
          Ch\u1ECDn \u1EA3nh\u2026\r
        </button>\r
\r
        <input #fileInput\r
               type="file"\r
               accept="image/*"\r
               hidden\r
               (change)="onFileSelect($event)">\r
      </div>\r
\r
      <!-- hi\u1EC3n th\u1ECB file -->\r
      <div *ngIf="selectedFile" class="mb-3">\r
        <label class="form-label">\u1EA2nh \u0111\xE3 ch\u1ECDn:</label>\r
        <div>{{ selectedFile.name }} ({{ selectedFile.size | number }} bytes)</div>\r
      </div>\r
    </div>\r
\r
    <div class="popup-footer">\r
      <button class="btn btn-secondary" (click)="togglePopup()">H\u1EE7y</button>\r
      <button class="btn btn-primary" (click)="createNews()">T\u1EA1o</button>\r
    </div>\r
  </div>\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/components/news/news.component.scss */\n.news-page-container {\n  min-height: 100vh;\n  background-color: #f4f7f6;\n  padding-top: 75px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.news-page-container .page-content-area {\n  padding: 20px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.news-page-container .container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.news-page-container .page-title {\n  text-align: center;\n  color: #333;\n  margin-bottom: 30px;\n  font-size: 2em;\n  font-weight: bold;\n  width: 100%;\n}\n.news-page-container .search-and-pagination {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n  gap: 20px;\n  width: 80%;\n  max-width: 600px;\n}\n.news-page-container .search-and-pagination .search-bar {\n  display: flex;\n  gap: 5px;\n  width: 100%;\n}\n.news-page-container .search-and-pagination .search-bar input[type=text] {\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1em;\n  flex-grow: 1;\n}\n.news-page-container .search-and-pagination .search-bar button {\n  padding: 8px 15px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.news-page-container .search-and-pagination .search-bar button:hover {\n  background-color: #0056b3;\n}\n.news-page-container .search-and-pagination .pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.news-page-container .search-and-pagination .pagination-controls button {\n  padding: 5px 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.news-page-container .search-and-pagination .pagination-controls button:hover {\n  background-color: #f0f0f0;\n}\n.news-page-container .search-and-pagination .pagination-controls span {\n  font-weight: bold;\n  cursor: pointer;\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.news-page-container .search-and-pagination .pagination-controls span.active {\n  border-color: #007bff;\n  color: #007bff;\n}\n.news-page-container .news-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  width: 80%;\n  max-width: 1200px;\n}\n.news-page-container .news-grid .news-card {\n  border: 1px solid #eee;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #fff;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n}\n.news-page-container .news-grid .news-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.news-page-container .news-grid .news-card .card-image {\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n}\n.news-page-container .news-grid .news-card .card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.news-page-container .news-grid .news-card .card-content {\n  padding: 15px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n.news-page-container .news-grid .news-card .card-content .card-title {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 1.1em;\n  font-weight: bold;\n  line-height: 1.4;\n}\n.news-page-container .news-grid .news-card .card-content .card-title a {\n  text-decoration: none;\n  color: #333;\n  transition: color 0.3s ease;\n}\n.news-page-container .news-grid .news-card .card-content .card-title a:hover {\n  color: #007bff;\n}\n.news-page-container .news-grid .news-card .card-content .card-description {\n  color: #555;\n  font-size: 0.9em;\n  line-height: 1.5;\n  margin-bottom: 10px;\n  flex-grow: 1;\n}\n.news-page-container .news-grid .news-card .card-content .card-footer {\n  display: flex;\n  justify-content: flex-end;\n  color: #777;\n  font-size: 0.8em;\n}\n.news-page-container .pagination-info {\n  text-align: center;\n  margin-top: 20px;\n  color: #555;\n  width: 100%;\n}\n/*# sourceMappingURL=news.component.css.map */\n'] }]
  }], () => [{ type: NewsService }, { type: i25.Router }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassDebugInfo(NewsComponent, { className: "NewsComponent", filePath: "src/app/components/news/news.component.ts", lineNumber: 17 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fnews%2Fnews.component.ts%40NewsComponent";
  function NewsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i08.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i08.\u0275\u0275replaceMetadata(NewsComponent, m.default, [i08, i35, i25, i44, news_service_exports], [CommonModule5, RouterModule3, FormsModule4, Component5, ViewChild], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && NewsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && NewsComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/report/report.component.ts
import { CommonModule as CommonModule6 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { Component as Component6 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { RouterModule as RouterModule4 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import { FormsModule as FormsModule5 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";

// src/app/components/shareds/pipes/report-status-to-string.pipe.ts
import { Pipe } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";

// src/app/components/shareds/enums/report-status.enum.ts
var ReportStatus;
(function(ReportStatus2) {
  ReportStatus2[ReportStatus2["PENDING"] = 1] = "PENDING";
  ReportStatus2[ReportStatus2["APPROVED"] = 2] = "APPROVED";
  ReportStatus2[ReportStatus2["REJECTED"] = 3] = "REJECTED";
})(ReportStatus || (ReportStatus = {}));

// src/app/components/shareds/pipes/report-status-to-string.pipe.ts
import * as i09 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
var ReportStatusToStringPipe = class _ReportStatusToStringPipe {
  transform(value) {
    switch (value) {
      case ReportStatus.PENDING:
        return "Ch\u1EDD x\u1EED l\xFD";
      case ReportStatus.APPROVED:
        return "\u0110\xE3 x\xE1c nh\u1EADn";
      case ReportStatus.REJECTED:
        return "\u0110\xE3 t\u1EEB ch\u1ED1i";
      default:
        return "Tr\u1EA1ng th\xE1i kh\xF4ng x\xE1c \u0111\u1ECBnh";
    }
  }
  static \u0275fac = function ReportStatusToStringPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportStatusToStringPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ i09.\u0275\u0275definePipe({ name: "reportStatusToString", type: _ReportStatusToStringPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassMetadata(ReportStatusToStringPipe, [{
    type: Pipe,
    args: [{
      name: "reportStatusToString"
    }]
  }], null, null);
})();

// src/app/components/shareds/pipes/information-type-to-string.pipe.ts
import { Pipe as Pipe2 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";

// src/app/components/shareds/enums/information-type.enum.ts
var InformationType;
(function(InformationType2) {
  InformationType2[InformationType2["PhoneNumber"] = 1] = "PhoneNumber";
  InformationType2[InformationType2["Bank"] = 2] = "Bank";
  InformationType2[InformationType2["URL"] = 3] = "URL";
})(InformationType || (InformationType = {}));

// src/app/components/shareds/pipes/information-type-to-string.pipe.ts
import * as i010 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
var InformationTypeToStringPipe = class _InformationTypeToStringPipe {
  transform(value) {
    switch (value) {
      case InformationType.PhoneNumber:
        return "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i";
      case InformationType.Bank:
        return "S\u1ED1 t\xE0i kho\u1EA3n";
      case InformationType.URL:
        return "URL";
      default:
        return "Lo\u1EA1i th\xF4ng tin kh\xF4ng x\xE1c \u0111\u1ECBnh";
    }
  }
  static \u0275fac = function InformationTypeToStringPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InformationTypeToStringPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ i010.\u0275\u0275definePipe({ name: "informationTypeToString", type: _InformationTypeToStringPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(InformationTypeToStringPipe, [{
    type: Pipe2,
    args: [{
      name: "informationTypeToString",
      standalone: true
    }]
  }], null, null);
})();

// src/app/components/report/report.component.ts
import * as i013 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";

// src/app/services/report.service.ts
var report_service_exports = {};
__export(report_service_exports, {
  ReportService: () => ReportService
});
import { HttpParams } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common_http.js?v=e44b7f9a";
import { Injectable as Injectable4 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i011 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i13 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common_http.js?v=e44b7f9a";
var ReportService = class _ReportService {
  http;
  httpUtilService;
  apiCreateReport = `${environment.apiBaseUrl}/report`;
  constructor(http, httpUtilService) {
    this.http = http;
    this.httpUtilService = httpUtilService;
  }
  getApiConfig() {
    return {
      headers: this.httpUtilService.createHeaders()
    };
  }
  createReport(reportDTO) {
    return this.http.post(this.apiCreateReport, reportDTO, this.getApiConfig());
  }
  getListReports() {
    return this.http.get(`${environment.apiBaseUrl}/report/all`);
  }
  getReportById(id) {
    return this.http.get(`${environment.apiBaseUrl}/report/${id}`);
  }
  uploadFiles(reportId, formData) {
    return this.http.post(`${environment.apiBaseUrl}/report/uploads/${reportId}`, formData);
  }
  handleReport(body) {
    return this.http.post(`${environment.apiBaseUrl}/report/handle`, body);
  }
  getMonthlyStats(year) {
    const params = new HttpParams().set("year", year.toString());
    return this.http.get(`${environment.apiBaseUrl}/report/monthly`, { params });
  }
  getYearlyStats() {
    return this.http.get(`${environment.apiBaseUrl}/report/yearly`);
  }
  static \u0275fac = function ReportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportService)(i011.\u0275\u0275inject(i13.HttpClient), i011.\u0275\u0275inject(HttpUtilService));
  };
  static \u0275prov = /* @__PURE__ */ i011.\u0275\u0275defineInjectable({ token: _ReportService, factory: _ReportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassMetadata(ReportService, [{
    type: Injectable4,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: i13.HttpClient }, { type: HttpUtilService }], null);
})();

// src/app/services/scam-type.service.ts
var scam_type_service_exports = {};
__export(scam_type_service_exports, {
  ScamTypeService: () => ScamTypeService
});
import { Injectable as Injectable5 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { map } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/rxjs_operators.js?v=e44b7f9a";
import * as i012 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i14 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common_http.js?v=e44b7f9a";
var ScamTypeService = class _ScamTypeService {
  http;
  BASE = "http://localhost:8080/api/v1/scam-types";
  constructor(http) {
    this.http = http;
  }
  /** GET /batch */
  getAll() {
    return this.http.get(`${this.BASE}/batch`).pipe(map((res) => res.data));
  }
  /** POST /  */
  create(body) {
    return this.http.post(this.BASE, body).pipe(map((res) => res.data));
  }
  static \u0275fac = function ScamTypeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScamTypeService)(i012.\u0275\u0275inject(i14.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i012.\u0275\u0275defineInjectable({ token: _ScamTypeService, factory: _ScamTypeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i012.\u0275setClassMetadata(ScamTypeService, [{
    type: Injectable5,
    args: [{ providedIn: "root" }]
  }], () => [{ type: i14.HttpClient }], null);
})();

// src/app/components/report/report.component.ts
import * as i36 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i45 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i54 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
function ReportComponent_tr_32_div_19_option_4_Template(rf, ctx) {
  if (rf & 1) {
    i013.\u0275\u0275elementStart(0, "option", 31);
    i013.\u0275\u0275text(1);
    i013.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    i013.\u0275\u0275property("ngValue", s_r5.id);
    i013.\u0275\u0275advance();
    i013.\u0275\u0275textInterpolate2(" ", s_r5.name, " (", s_r5.code, ") ");
  }
}
function ReportComponent_tr_32_div_19_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = i013.\u0275\u0275getCurrentView();
    i013.\u0275\u0275elementStart(0, "div", 35)(1, "input", 36);
    i013.\u0275\u0275twoWayListener("ngModelChange", function ReportComponent_tr_32_div_19_div_7_Template_input_ngModelChange_1_listener($event) {
      i013.\u0275\u0275restoreView(_r6);
      const ctx_r2 = i013.\u0275\u0275nextContext(3);
      i013.\u0275\u0275twoWayBindingSet(ctx_r2.newScamType.name, $event) || (ctx_r2.newScamType.name = $event);
      return i013.\u0275\u0275resetView($event);
    });
    i013.\u0275\u0275elementEnd();
    i013.\u0275\u0275elementStart(2, "input", 37);
    i013.\u0275\u0275twoWayListener("ngModelChange", function ReportComponent_tr_32_div_19_div_7_Template_input_ngModelChange_2_listener($event) {
      i013.\u0275\u0275restoreView(_r6);
      const ctx_r2 = i013.\u0275\u0275nextContext(3);
      i013.\u0275\u0275twoWayBindingSet(ctx_r2.newScamType.code, $event) || (ctx_r2.newScamType.code = $event);
      return i013.\u0275\u0275resetView($event);
    });
    i013.\u0275\u0275elementEnd();
    i013.\u0275\u0275elementStart(3, "button", 38);
    i013.\u0275\u0275listener("click", function ReportComponent_tr_32_div_19_div_7_Template_button_click_3_listener() {
      i013.\u0275\u0275restoreView(_r6);
      const report_r2 = i013.\u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = i013.\u0275\u0275nextContext();
      return i013.\u0275\u0275resetView(ctx_r2.createScamTypeAndConfirm(report_r2.id));
    });
    i013.\u0275\u0275text(4, "L\u01B0u & x\xE1c nh\u1EADn");
    i013.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = i013.\u0275\u0275nextContext(3);
    i013.\u0275\u0275advance();
    i013.\u0275\u0275twoWayProperty("ngModel", ctx_r2.newScamType.name);
    i013.\u0275\u0275advance();
    i013.\u0275\u0275twoWayProperty("ngModel", ctx_r2.newScamType.code);
  }
}
function ReportComponent_tr_32_div_19_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = i013.\u0275\u0275getCurrentView();
    i013.\u0275\u0275elementStart(0, "div")(1, "button", 38);
    i013.\u0275\u0275listener("click", function ReportComponent_tr_32_div_19_div_8_Template_button_click_1_listener() {
      i013.\u0275\u0275restoreView(_r7);
      const report_r2 = i013.\u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = i013.\u0275\u0275nextContext();
      return i013.\u0275\u0275resetView(ctx_r2.confirmReport(report_r2.id));
    });
    i013.\u0275\u0275text(2, "X\xE1c nh\u1EADn");
    i013.\u0275\u0275elementEnd()();
  }
}
function ReportComponent_tr_32_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i013.\u0275\u0275getCurrentView();
    i013.\u0275\u0275elementStart(0, "div", 27);
    i013.\u0275\u0275listener("click", function ReportComponent_tr_32_div_19_Template_div_click_0_listener($event) {
      i013.\u0275\u0275restoreView(_r4);
      return i013.\u0275\u0275resetView($event.stopPropagation());
    });
    i013.\u0275\u0275elementStart(1, "select", 28);
    i013.\u0275\u0275twoWayListener("ngModelChange", function ReportComponent_tr_32_div_19_Template_select_ngModelChange_1_listener($event) {
      i013.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i013.\u0275\u0275nextContext(2);
      i013.\u0275\u0275twoWayBindingSet(ctx_r2.selectedScamTypeId, $event) || (ctx_r2.selectedScamTypeId = $event);
      return i013.\u0275\u0275resetView($event);
    });
    i013.\u0275\u0275elementStart(2, "option", 29);
    i013.\u0275\u0275text(3, "-- Ch\u1ECDn h\xECnh th\u1EE9c --");
    i013.\u0275\u0275elementEnd();
    i013.\u0275\u0275template(4, ReportComponent_tr_32_div_19_option_4_Template, 2, 3, "option", 30);
    i013.\u0275\u0275elementStart(5, "option", 31);
    i013.\u0275\u0275text(6, "\u2795 Th\xEAm m\u1EDBi\u2026");
    i013.\u0275\u0275elementEnd()();
    i013.\u0275\u0275template(7, ReportComponent_tr_32_div_19_div_7_Template, 5, 2, "div", 32)(8, ReportComponent_tr_32_div_19_div_8_Template, 3, 0, "div", 33);
    i013.\u0275\u0275elementStart(9, "button", 34);
    i013.\u0275\u0275listener("click", function ReportComponent_tr_32_div_19_Template_button_click_9_listener() {
      i013.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i013.\u0275\u0275nextContext(2);
      return i013.\u0275\u0275resetView(ctx_r2.closeDropdown());
    });
    i013.\u0275\u0275text(10, "\u2715");
    i013.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = i013.\u0275\u0275nextContext(2);
    i013.\u0275\u0275advance();
    i013.\u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedScamTypeId);
    i013.\u0275\u0275advance();
    i013.\u0275\u0275property("ngValue", null);
    i013.\u0275\u0275advance(2);
    i013.\u0275\u0275property("ngForOf", ctx_r2.scamTypes);
    i013.\u0275\u0275advance();
    i013.\u0275\u0275property("ngValue", 0);
    i013.\u0275\u0275advance(2);
    i013.\u0275\u0275property("ngIf", ctx_r2.selectedScamTypeId === 0);
    i013.\u0275\u0275advance();
    i013.\u0275\u0275property("ngIf", ctx_r2.selectedScamTypeId && ctx_r2.selectedScamTypeId !== 0);
  }
}
function ReportComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i013.\u0275\u0275getCurrentView();
    i013.\u0275\u0275elementStart(0, "tr")(1, "td");
    i013.\u0275\u0275text(2);
    i013.\u0275\u0275elementEnd();
    i013.\u0275\u0275elementStart(3, "td")(4, "a", 20);
    i013.\u0275\u0275text(5);
    i013.\u0275\u0275elementEnd()();
    i013.\u0275\u0275elementStart(6, "td");
    i013.\u0275\u0275text(7);
    i013.\u0275\u0275elementEnd();
    i013.\u0275\u0275elementStart(8, "td");
    i013.\u0275\u0275text(9);
    i013.\u0275\u0275pipe(10, "reportStatusToString");
    i013.\u0275\u0275elementEnd();
    i013.\u0275\u0275elementStart(11, "td");
    i013.\u0275\u0275text(12);
    i013.\u0275\u0275pipe(13, "informationTypeToString");
    i013.\u0275\u0275elementEnd();
    i013.\u0275\u0275elementStart(14, "td", 21)(15, "button", 22);
    i013.\u0275\u0275listener("click", function ReportComponent_tr_32_Template_button_click_15_listener() {
      const report_r2 = i013.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i013.\u0275\u0275nextContext();
      return i013.\u0275\u0275resetView(ctx_r2.openDropdown(report_r2.id));
    });
    i013.\u0275\u0275element(16, "i", 23);
    i013.\u0275\u0275elementEnd();
    i013.\u0275\u0275elementStart(17, "button", 24);
    i013.\u0275\u0275listener("click", function ReportComponent_tr_32_Template_button_click_17_listener() {
      const report_r2 = i013.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i013.\u0275\u0275nextContext();
      return i013.\u0275\u0275resetView(ctx_r2.rejectReport(report_r2.id));
    });
    i013.\u0275\u0275element(18, "i", 25);
    i013.\u0275\u0275elementEnd();
    i013.\u0275\u0275template(19, ReportComponent_tr_32_div_19_Template, 11, 6, "div", 26);
    i013.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const report_r2 = ctx.$implicit;
    const ctx_r2 = i013.\u0275\u0275nextContext();
    i013.\u0275\u0275advance(2);
    i013.\u0275\u0275textInterpolate(report_r2.id);
    i013.\u0275\u0275advance(2);
    i013.\u0275\u0275propertyInterpolate1("routerLink", "/admin/detail-report/", report_r2.id, "");
    i013.\u0275\u0275advance();
    i013.\u0275\u0275textInterpolate(report_r2.info);
    i013.\u0275\u0275advance(2);
    i013.\u0275\u0275textInterpolate(report_r2.description);
    i013.\u0275\u0275advance(2);
    i013.\u0275\u0275textInterpolate(i013.\u0275\u0275pipeBind1(10, 8, report_r2.status));
    i013.\u0275\u0275advance(3);
    i013.\u0275\u0275textInterpolate(i013.\u0275\u0275pipeBind1(13, 10, report_r2.type));
    i013.\u0275\u0275advance(7);
    i013.\u0275\u0275property("ngIf", ctx_r2.dropdownOpenForId === report_r2.id);
  }
}
var ReportComponent = class _ReportComponent {
  reportService;
  scamTypeService;
  reports = [];
  /* ------------ state dropdown ------------ */
  dropdownOpenForId = null;
  scamTypes = [];
  selectedScamTypeId = null;
  newScamType = { name: "", code: "" };
  constructor(reportService, scamTypeService) {
    this.reportService = reportService;
    this.scamTypeService = scamTypeService;
  }
  /* ===== lifecycle ===== */
  ngOnInit() {
    this.loadAllReports();
  }
  /* ===== gọi API danh sách ===== */
  loadAllReports() {
    this.reportService.getListReports().subscribe({
      next: (res) => this.reports = res.data || [],
      error: (err) => alert(err.error?.message || err.message || "L\u1ED7i t\u1EA3i danh s\xE1ch")
    });
  }
  /* ===== mở dropdown ===== */
  openDropdown(reportId) {
    this.dropdownOpenForId = reportId;
    this.selectedScamTypeId = null;
    this.newScamType = { name: "", code: "" };
    if (this.scamTypes.length === 0) {
      this.scamTypeService.getAll().subscribe({
        next: (list) => this.scamTypes = list,
        error: () => alert("Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c danh s\xE1ch h\xECnh th\u1EE9c l\u1EEBa \u0111\u1EA3o")
      });
    }
  }
  closeDropdown() {
    this.dropdownOpenForId = null;
  }
  /* ===== xác nhận với id có sẵn ===== */
  confirmReport(reportId) {
    if (!this.selectedScamTypeId)
      return;
    this.reportService.handleReport({
      idReport: reportId,
      status: 2,
      idScamTypeAfterHandle: this.selectedScamTypeId
    }).subscribe({
      next: () => {
        alert("X\xE1c nh\u1EADn th\xE0nh c\xF4ng");
        this.afterHandle();
      },
      error: () => alert("L\u1ED7i x\xE1c nh\u1EADn")
    });
  }
  /* ===== tạo mới + xác nhận ===== */
  createScamTypeAndConfirm(reportId) {
    const { name, code } = this.newScamType;
    if (!name.trim() || !code.trim()) {
      alert("Nh\u1EADp t\xEAn & m\xE3!");
      return;
    }
    this.scamTypeService.create({ name: name.trim(), code: code.trim() }).subscribe({
      next: (created) => {
        this.scamTypes.push(created);
        this.selectedScamTypeId = created.id;
        this.confirmReport(reportId);
      },
      error: () => alert("L\u1ED7i t\u1EA1o m\u1EDBi Scam\u2011type")
    });
  }
  /* ===== từ chối ===== */
  rejectReport(reportId) {
    this.reportService.handleReport({
      idReport: reportId,
      status: 3,
      idScamTypeAfterHandle: null
    }).subscribe({
      next: () => {
        alert("T\u1EEB ch\u1ED1i th\xE0nh c\xF4ng");
        this.afterHandle();
      },
      error: () => alert("L\u1ED7i t\u1EEB ch\u1ED1i")
    });
  }
  afterHandle() {
    this.closeDropdown();
    this.loadAllReports();
  }
  static \u0275fac = function ReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportComponent)(i013.\u0275\u0275directiveInject(ReportService), i013.\u0275\u0275directiveInject(ScamTypeService));
  };
  static \u0275cmp = /* @__PURE__ */ i013.\u0275\u0275defineComponent({ type: _ReportComponent, selectors: [["app-report"]], decls: 33, vars: 1, consts: [[1, "container-fluid"], [1, "header-actions"], [1, "h3", "mb-2", "text-gray-800"], [1, "card", "shadow", "mb-4"], [1, "card-header", "py-3"], [1, "m-0", "font-weight-bold", "text-primary"], [1, "card-body"], [1, "table-responsive"], ["id", "dataTable_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4"], [1, "row"], [1, "col-sm-12", "col-md-6"], ["id", "dataTable_filter", 1, "dataTables_filter"], [1, "col-sm-12"], ["id", "dataTable", "width", "100%", "cellspacing", "0", "role", "grid", "aria-describedby", "dataTable_info", 1, "table", "table-bordered", "dataTable", 2, "width", "100%"], ["role", "row"], ["aria-controls", "dataTable", "rowspan", "1", "colspan", "1", "aria-sort", "ascending", 2, "width", "20px"], ["tabindex", "0", "rowspan", "1", "colspan", "1", 1, "sorting", 2, "width", "150px"], ["tabindex", "0", "aria-controls", "dataTable", "rowspan", "1", "colspan", "1", 1, "sorting", 2, "width", "250px"], ["tabindex", "0", "aria-controls", "dataTable", "rowspan", "1", "colspan", "1", 1, "sorting", 2, "width", "78.2px"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "action-cell"], ["title", "X\xE1c nh\u1EADn", 1, "icon-button", 3, "click"], [1, "fa-solid", "fa-check"], ["title", "T\u1EEB ch\u1ED1i", 1, "icon-button", 3, "click"], [1, "fa-solid", "fa-xmark"], ["class", "dropdown-card", 3, "click", 4, "ngIf"], [1, "dropdown-card", 3, "click"], [3, "ngModelChange", "ngModel"], ["disabled", "", "selected", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["class", "new-box", 4, "ngIf"], [4, "ngIf"], [1, "close-btn", 3, "click"], [1, "new-box"], ["type", "text", "placeholder", "T\xEAn", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "M\xE3", 3, "ngModelChange", "ngModel"], [3, "click"]], template: function ReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      i013.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      i013.\u0275\u0275text(3, "Qu\u1EA3n l\xFD b\xE1o c\xE1o");
      i013.\u0275\u0275elementEnd()();
      i013.\u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h6", 5);
      i013.\u0275\u0275text(7, "Danh s\xE1ch b\xE1o c\xE1o");
      i013.\u0275\u0275elementEnd()();
      i013.\u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10);
      i013.\u0275\u0275element(13, "div", 11);
      i013.\u0275\u0275elementEnd()();
      i013.\u0275\u0275elementStart(14, "div", 9)(15, "div", 12)(16, "table", 13)(17, "thead")(18, "tr", 14)(19, "th", 15);
      i013.\u0275\u0275text(20, "ID ");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(21, "th", 16);
      i013.\u0275\u0275text(22, "Th\xF4ng tin");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(23, "th", 17);
      i013.\u0275\u0275text(24, "M\xF4 t\u1EA3");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(25, "th", 18);
      i013.\u0275\u0275text(26, "Tr\u1EA1ng th\xE1i");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(27, "th", 18);
      i013.\u0275\u0275text(28, "Lo\u1EA1i");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(29, "th", 18);
      i013.\u0275\u0275text(30, "Duy\u1EC7t");
      i013.\u0275\u0275elementEnd()()();
      i013.\u0275\u0275elementStart(31, "tbody");
      i013.\u0275\u0275template(32, ReportComponent_tr_32_Template, 20, 12, "tr", 19);
      i013.\u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      i013.\u0275\u0275advance(32);
      i013.\u0275\u0275property("ngForOf", ctx.reports);
    }
  }, dependencies: [
    CommonModule6,
    i36.NgClass,
    i36.NgComponentOutlet,
    i36.NgForOf,
    i36.NgIf,
    i36.NgTemplateOutlet,
    i36.NgStyle,
    i36.NgSwitch,
    i36.NgSwitchCase,
    i36.NgSwitchDefault,
    i36.NgPlural,
    i36.NgPluralCase,
    i36.AsyncPipe,
    i36.UpperCasePipe,
    i36.LowerCasePipe,
    i36.JsonPipe,
    i36.SlicePipe,
    i36.DecimalPipe,
    i36.PercentPipe,
    i36.TitleCasePipe,
    i36.CurrencyPipe,
    i36.DatePipe,
    i36.I18nPluralPipe,
    i36.I18nSelectPipe,
    i36.KeyValuePipe,
    RouterModule4,
    i45.RouterOutlet,
    i45.RouterLink,
    i45.RouterLinkActive,
    i45.\u0275EmptyOutletComponent,
    FormsModule5,
    i54.\u0275NgNoValidate,
    i54.NgSelectOption,
    i54.\u0275NgSelectMultipleOption,
    i54.DefaultValueAccessor,
    i54.NumberValueAccessor,
    i54.RangeValueAccessor,
    i54.CheckboxControlValueAccessor,
    i54.SelectControlValueAccessor,
    i54.SelectMultipleControlValueAccessor,
    i54.RadioControlValueAccessor,
    i54.NgControlStatus,
    i54.NgControlStatusGroup,
    i54.RequiredValidator,
    i54.MinLengthValidator,
    i54.MaxLengthValidator,
    i54.PatternValidator,
    i54.CheckboxRequiredValidator,
    i54.EmailValidator,
    i54.MinValidator,
    i54.MaxValidator,
    i54.NgModel,
    i54.NgModelGroup,
    i54.NgForm,
    ReportStatusToStringPipe,
    InformationTypeToStringPipe
  ], styles: ["\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #333;\n  font-size: 1.5em;\n}\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n}\n.search-bar[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px 0 0 4px;\n  outline: none;\n  background-color: #f8f8f8;\n}\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #555;\n  border: 1px solid #ccc;\n  padding: 8px 12px;\n  border-radius: 0 4px 4px 0;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n}\n.search-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.add-btn[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n  border: none;\n  padding: 8px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.add-btn[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  overflow: hidden;\n  background-color: #fff;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border-bottom: 1px solid #ddd;\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  font-weight: bold;\n  color: #555;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9f9f9;\n}\n.action-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.icon-button[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  font-size: 1.1rem;\n  padding: 4px 8px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n}\n.icon-button[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.icon-button[_ngcontent-%COMP%]:nth-child(1) {\n  color: #28a745;\n}\n.icon-button[_ngcontent-%COMP%]:nth-child(2) {\n  color: #dc3545;\n}\n.icon-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.icon-button[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n  color: #007bff;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n  padding: 10px 0;\n  border-top: 1px solid #eee;\n  color: #555;\n  font-size: 0.9em;\n}\n.records-per-page[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.records-per-page[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: #f8f8f8;\n  color: #555;\n}\n.page-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: 1px solid #ccc;\n  padding: 6px 10px;\n  margin: 0 5px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  color: #555;\n}\n.page-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n.page-navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.dropdown-card[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #fff;\n  border: 1px solid #ddd;\n  padding: 12px;\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 100;\n  width: 240px;\n}\n.dropdown-card[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.dropdown-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 8px;\n  margin-bottom: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.dropdown-card[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=report.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i013.\u0275setClassMetadata(ReportComponent, [{
    type: Component6,
    args: [{ selector: "app-report", standalone: true, imports: [
      CommonModule6,
      RouterModule4,
      FormsModule5,
      ReportStatusToStringPipe,
      InformationTypeToStringPipe
    ], template: '  <div class="container-fluid">\r\n    <div class="header-actions">\r\n      <h1 class="h3 mb-2 text-gray-800">Qu\u1EA3n l\xFD b\xE1o c\xE1o</h1>\r\n    </div>\r\n    <div class="card shadow mb-4">\r\n      <div class="card-header py-3">\r\n        <h6 class="m-0 font-weight-bold text-primary">Danh s\xE1ch b\xE1o c\xE1o</h6>\r\n      </div>\r\n      <div class="card-body">\r\n        <div class="table-responsive">\r\n          <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">\r\n            <div class="row">\r\n              <div class="col-sm-12 col-md-6">\r\n                <div id="dataTable_filter" class="dataTables_filter"></div>\r\n              </div>\r\n            </div>\r\n            <div class="row">\r\n              <div class="col-sm-12">\r\n                <table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid"\r\n                  aria-describedby="dataTable_info" style="width: 100%;">\r\n                  <thead>\r\n                    <tr role="row">\r\n                      <th aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" style="width: 20px;">ID\r\n                      </th>\r\n                      <th class="sorting" tabindex="0" rowspan="1" colspan="1" style="width: 150px;">Th\xF4ng tin</th>\r\n                      <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"\r\n                        style="width: 250px;">M\xF4 t\u1EA3</th>\r\n                      <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"\r\n                        style="width: 78.2px;">Tr\u1EA1ng th\xE1i</th>\r\n                      <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"\r\n                        style="width: 78.2px;">Lo\u1EA1i</th>\r\n                      <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"\r\n                        style="width: 78.2px;">Duy\u1EC7t</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor="let report of reports">\r\n\r\n                      <td>{{ report.id }}</td>\r\n\r\n                      <td>\r\n                        <a routerLink="/admin/detail-report/{{ report.id }}">{{ report.info }}</a>\r\n                      </td>\r\n\r\n                      <td>{{ report.description }}</td>\r\n\r\n                      <td>{{ report.status | reportStatusToString }}</td>\r\n\r\n                      <td>{{ report.type | informationTypeToString }}</td>\r\n\r\n                      <td class="action-cell">\r\n                        <!-- N\xDAT X\xC1C NH\u1EACN -->\r\n                        <button class="icon-button" title="X\xE1c nh\u1EADn" (click)="openDropdown(report.id)">\r\n                          <i class="fa-solid fa-check"></i>\r\n                        </button>\r\n\r\n                        <!-- N\xDAT T\u1EEA CH\u1ED0I -->\r\n                        <button class="icon-button" title="T\u1EEB ch\u1ED1i" (click)="rejectReport(report.id)">\r\n                          <i class="fa-solid fa-xmark"></i>\r\n                        </button>\r\n\r\n                        <div *ngIf="dropdownOpenForId === report.id" class="dropdown-card"\r\n                          (click)="$event.stopPropagation()">\r\n\r\n                          <select [(ngModel)]="selectedScamTypeId">\r\n                            <option [ngValue]="null" disabled selected>-- Ch\u1ECDn h\xECnh th\u1EE9c --</option>\r\n                            <option *ngFor="let s of scamTypes" [ngValue]="s.id">\r\n                              {{ s.name }} ({{ s.code }})\r\n                            </option>\r\n                            <option [ngValue]="0">\u2795 Th\xEAm m\u1EDBi\u2026</option>\r\n                          </select>\r\n\r\n                          <div *ngIf="selectedScamTypeId === 0" class="new-box">\r\n                            <input type="text" placeholder="T\xEAn" [(ngModel)]="newScamType.name">\r\n                            <input type="text" placeholder="M\xE3" [(ngModel)]="newScamType.code">\r\n                            <button (click)="createScamTypeAndConfirm(report.id)">L\u01B0u & x\xE1c nh\u1EADn</button>\r\n                          </div>\r\n\r\n                          <div *ngIf="selectedScamTypeId && selectedScamTypeId !== 0">\r\n                            <button (click)="confirmReport(report.id)">X\xE1c nh\u1EADn</button>\r\n                          </div>\r\n\r\n                          <button class="close-btn" (click)="closeDropdown()">\u2715</button>\r\n                        </div>\r\n                      </td>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>', styles: ["/* src/app/components/report/report.component.scss */\nh2 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #333;\n  font-size: 1.5em;\n}\n.controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.search-bar {\n  display: flex;\n}\n.search-bar input[type=text] {\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px 0 0 4px;\n  outline: none;\n  background-color: #f8f8f8;\n}\n.search-bar button {\n  background-color: transparent;\n  color: #555;\n  border: 1px solid #ccc;\n  padding: 8px 12px;\n  border-radius: 0 4px 4px 0;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.search-bar button:hover {\n  background-color: #eee;\n}\n.search-bar i {\n  margin-right: 5px;\n}\n.add-btn {\n  background-color: #28a745;\n  color: white;\n  border: none;\n  padding: 8px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.add-btn:hover {\n  background-color: #218838;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  overflow: hidden;\n  background-color: #fff;\n}\n.data-table th,\n.data-table td {\n  padding: 12px 15px;\n  border-bottom: 1px solid #ddd;\n  text-align: left;\n}\n.data-table th {\n  background-color: #f0f0f0;\n  font-weight: bold;\n  color: #555;\n}\n.data-table tbody tr:hover {\n  background-color: #f9f9f9;\n}\n.action-icons {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.icon-button {\n  border: none;\n  background: none;\n  font-size: 1.1rem;\n  padding: 4px 8px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n}\n.icon-button:hover {\n  background: #f0f0f0;\n}\n.icon-button:nth-child(1) {\n  color: #28a745;\n}\n.icon-button:nth-child(2) {\n  color: #dc3545;\n}\n.icon-button i {\n  font-size: 1em;\n}\n.icon-button:hover {\n  background-color: #eee;\n  color: #007bff;\n}\n.pagination {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n  padding: 10px 0;\n  border-top: 1px solid #eee;\n  color: #555;\n  font-size: 0.9em;\n}\n.records-per-page label {\n  margin-right: 10px;\n}\n.records-per-page select {\n  padding: 6px 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: #f8f8f8;\n  color: #555;\n}\n.page-navigation button {\n  background-color: #eee;\n  border: 1px solid #ccc;\n  padding: 6px 10px;\n  margin: 0 5px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  color: #555;\n}\n.page-navigation button:hover {\n  background-color: #ddd;\n}\n.page-navigation span {\n  margin: 0 10px;\n}\n.dropdown-card {\n  position: absolute;\n  background: #fff;\n  border: 1px solid #ddd;\n  padding: 12px;\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 100;\n  width: 240px;\n}\n.dropdown-card select,\n.dropdown-card input {\n  width: 100%;\n  padding: 6px 8px;\n  margin-bottom: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.dropdown-card .close-btn {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=report.component.css.map */\n"] }]
  }], () => [{ type: ReportService }, { type: ScamTypeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i013.\u0275setClassDebugInfo(ReportComponent, { className: "ReportComponent", filePath: "src/app/components/report/report.component.ts", lineNumber: 25 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Freport%2Freport.component.ts%40ReportComponent";
  function ReportComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i013.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i013.\u0275\u0275replaceMetadata(ReportComponent, m.default, [i013, i36, i45, i54, report_service_exports, scam_type_service_exports], [CommonModule6, RouterModule4, FormsModule5, ReportStatusToStringPipe, InformationTypeToStringPipe, Component6], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ReportComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ReportComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/news/create-news/create-news.component.ts
import { CommonModule as CommonModule7 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { Component as Component7 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { FormsModule as FormsModule6 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import { EditorModule } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@tinymce_tinymce-angular.js?v=e44b7f9a";
import * as i014 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i26 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i37 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i46 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import * as i55 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@tinymce_tinymce-angular.js?v=e44b7f9a";
function CreateNewsComponent_div_18_li_4_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "li");
    i014.\u0275\u0275text(1);
    i014.\u0275\u0275pipe(2, "number");
    i014.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    i014.\u0275\u0275advance();
    i014.\u0275\u0275textInterpolate2(" ", f_r1.name, " (", i014.\u0275\u0275pipeBind1(2, 2, f_r1.size), " bytes) ");
  }
}
function CreateNewsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "div", 0)(1, "label", 1);
    i014.\u0275\u0275text(2, "C\xE1c t\u1EC7p \u0111\xE3 ch\u1ECDn:");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(3, "ul", 9);
    i014.\u0275\u0275template(4, CreateNewsComponent_div_18_li_4_Template, 3, 4, "li", 10);
    i014.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i014.\u0275\u0275nextContext();
    i014.\u0275\u0275advance(4);
    i014.\u0275\u0275property("ngForOf", ctx_r1.selectedFiles);
  }
}
var CreateNewsComponent = class _CreateNewsComponent {
  newsService;
  router;
  name = "";
  shortDescription = "";
  content = "";
  selectedFiles = [];
  constructor(newsService, router) {
    this.newsService = newsService;
    this.router = router;
  }
  onFileSelect(event) {
    const input = event.target;
    this.selectedFiles = input.files ? Array.from(input.files) : [];
  }
  createNews() {
    const dto = {
      name: this.name,
      shortDescription: this.shortDescription,
      content: this.content
    };
    this.newsService.createNews(dto).subscribe({
      next: (res) => {
        const id = res?.data?.id ?? res?.id;
        if (!id) {
          alert("Kh\xF4ng nh\u1EADn \u0111\u01B0\u1EE3c ID b\xE0i vi\u1EBFt t\u1EEB server");
          return;
        }
        if (this.selectedFiles.length) {
          this.uploadFiles(id);
        } else {
          alert("T\u1EA1o b\xE0i vi\u1EBFt th\xE0nh c\xF4ng!");
          this.router.navigate(["/news"]);
        }
      },
      error: (err) => alert(`L\u1ED7i khi t\u1EA1o b\xE0i vi\u1EBFt: ${err.error?.message || err.message}`)
    });
  }
  uploadFiles(newsId) {
    const formData = new FormData();
    this.selectedFiles.forEach((f) => formData.append("files", f, f.name));
    this.newsService.uploadFiles(newsId, formData).subscribe({
      next: () => {
        alert("T\u1EA1o b\xE0i vi\u1EBFt & t\u1EA3i \u1EA3nh th\xE0nh c\xF4ng!");
        this.router.navigate(["/news"]);
      },
      error: (err) => alert(`L\u1ED7i upload: ${err.error?.message || err.message}`)
    });
  }
  static \u0275fac = function CreateNewsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateNewsComponent)(i014.\u0275\u0275directiveInject(NewsService), i014.\u0275\u0275directiveInject(i26.Router));
  };
  static \u0275cmp = /* @__PURE__ */ i014.\u0275\u0275defineComponent({ type: _CreateNewsComponent, selectors: [["app-create-news"]], decls: 21, vars: 4, consts: [[1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "Nh\u1EADp t\xEAn", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Nh\u1EADp m\xF4 t\u1EA3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Nh\u1EADp n\u1ED9i dung", "rows", "10", 1, "form-control", 2, "min-height", "200px", "resize", "vertical", 3, "ngModelChange", "ngModel"], ["for", "files", 1, "form-label"], ["id", "files", "type", "file", "accept", "image/*", "multiple", "", 1, "form-control", 3, "change"], ["class", "mb-3", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "mb-0"], [4, "ngFor", "ngForOf"]], template: function CreateNewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i014.\u0275\u0275elementStart(0, "h2");
      i014.\u0275\u0275text(1, "Th\xEAm tin t\u1EE9c");
      i014.\u0275\u0275elementEnd();
      i014.\u0275\u0275elementStart(2, "div", 0)(3, "label", 1);
      i014.\u0275\u0275text(4, "T\xEAn");
      i014.\u0275\u0275elementEnd();
      i014.\u0275\u0275elementStart(5, "input", 2);
      i014.\u0275\u0275twoWayListener("ngModelChange", function CreateNewsComponent_Template_input_ngModelChange_5_listener($event) {
        i014.\u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return $event;
      });
      i014.\u0275\u0275elementEnd()();
      i014.\u0275\u0275elementStart(6, "div", 0)(7, "label", 1);
      i014.\u0275\u0275text(8, "M\xF4 t\u1EA3");
      i014.\u0275\u0275elementEnd();
      i014.\u0275\u0275elementStart(9, "input", 3);
      i014.\u0275\u0275twoWayListener("ngModelChange", function CreateNewsComponent_Template_input_ngModelChange_9_listener($event) {
        i014.\u0275\u0275twoWayBindingSet(ctx.shortDescription, $event) || (ctx.shortDescription = $event);
        return $event;
      });
      i014.\u0275\u0275elementEnd()();
      i014.\u0275\u0275elementStart(10, "div", 0)(11, "label", 1);
      i014.\u0275\u0275text(12, "N\u1ED9i dung");
      i014.\u0275\u0275elementEnd();
      i014.\u0275\u0275elementStart(13, "textarea", 4);
      i014.\u0275\u0275twoWayListener("ngModelChange", function CreateNewsComponent_Template_textarea_ngModelChange_13_listener($event) {
        i014.\u0275\u0275twoWayBindingSet(ctx.content, $event) || (ctx.content = $event);
        return $event;
      });
      i014.\u0275\u0275elementEnd()();
      i014.\u0275\u0275elementStart(14, "div", 0)(15, "label", 5);
      i014.\u0275\u0275text(16, "\u1EA2nh \u0111\xEDnh k\xE8m (PNG, JPG, GIF)");
      i014.\u0275\u0275elementEnd();
      i014.\u0275\u0275elementStart(17, "input", 6);
      i014.\u0275\u0275listener("change", function CreateNewsComponent_Template_input_change_17_listener($event) {
        return ctx.onFileSelect($event);
      });
      i014.\u0275\u0275elementEnd()();
      i014.\u0275\u0275template(18, CreateNewsComponent_div_18_Template, 5, 1, "div", 7);
      i014.\u0275\u0275elementStart(19, "button", 8);
      i014.\u0275\u0275listener("click", function CreateNewsComponent_Template_button_click_19_listener() {
        return ctx.createNews();
      });
      i014.\u0275\u0275text(20, " T\u1EA1o\n");
      i014.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      i014.\u0275\u0275advance(5);
      i014.\u0275\u0275twoWayProperty("ngModel", ctx.name);
      i014.\u0275\u0275advance(4);
      i014.\u0275\u0275twoWayProperty("ngModel", ctx.shortDescription);
      i014.\u0275\u0275advance(4);
      i014.\u0275\u0275twoWayProperty("ngModel", ctx.content);
      i014.\u0275\u0275advance(5);
      i014.\u0275\u0275property("ngIf", ctx.selectedFiles.length);
    }
  }, dependencies: [CommonModule7, i37.NgClass, i37.NgComponentOutlet, i37.NgForOf, i37.NgIf, i37.NgTemplateOutlet, i37.NgStyle, i37.NgSwitch, i37.NgSwitchCase, i37.NgSwitchDefault, i37.NgPlural, i37.NgPluralCase, i37.AsyncPipe, i37.UpperCasePipe, i37.LowerCasePipe, i37.JsonPipe, i37.SlicePipe, i37.DecimalPipe, i37.PercentPipe, i37.TitleCasePipe, i37.CurrencyPipe, i37.DatePipe, i37.I18nPluralPipe, i37.I18nSelectPipe, i37.KeyValuePipe, FormsModule6, i46.\u0275NgNoValidate, i46.NgSelectOption, i46.\u0275NgSelectMultipleOption, i46.DefaultValueAccessor, i46.NumberValueAccessor, i46.RangeValueAccessor, i46.CheckboxControlValueAccessor, i46.SelectControlValueAccessor, i46.SelectMultipleControlValueAccessor, i46.RadioControlValueAccessor, i46.NgControlStatus, i46.NgControlStatusGroup, i46.RequiredValidator, i46.MinLengthValidator, i46.MaxLengthValidator, i46.PatternValidator, i46.CheckboxRequiredValidator, i46.EmailValidator, i46.MinValidator, i46.MaxValidator, i46.NgModel, i46.NgModelGroup, i46.NgForm, EditorModule, i55.EditorComponent], styles: ["\n\n.news-form-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.news-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n  font-size: 1rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #2c3e50;\n  font-weight: 600;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  color: #3498db;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  transition: 0.2s ease;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.15);\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .content-textarea[_ngcontent-%COMP%] {\n  min-height: 150px;\n  resize: vertical;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .file-upload-container[_ngcontent-%COMP%]   .file-hint[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  color: #95a5a6;\n  font-size: 0.85rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%] {\n  background: #f4f6f8;\n  padding: 1rem;\n  border-radius: 6px;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3498db;\n  margin-right: 0.5rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-size[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n  font-size: 0.85rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 1rem;\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%] {\n  background: #ecf0f1;\n  color: #2c3e50;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #dcdde1;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2980b9;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #bdc3c7;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=create-news.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i014.\u0275setClassMetadata(CreateNewsComponent, [{
    type: Component7,
    args: [{ selector: "app-create-news", standalone: true, imports: [CommonModule7, FormsModule6, EditorModule], template: '<h2>Th\xEAm tin t\u1EE9c</h2>\r\n\r\n<div class="mb-3">\r\n  <label class="form-label">T\xEAn</label>\r\n  <input type="text"\r\n         class="form-control"\r\n         placeholder="Nh\u1EADp t\xEAn"\r\n         [(ngModel)]="name" />\r\n</div>\r\n\r\n<div class="mb-3">\r\n  <label class="form-label">M\xF4 t\u1EA3</label>\r\n  <input type="text"\r\n         class="form-control"\r\n         placeholder="Nh\u1EADp m\xF4 t\u1EA3"\r\n         [(ngModel)]="shortDescription" />\r\n</div>\r\n\r\n<div class="mb-3">\r\n  <label class="form-label">N\u1ED9i dung</label>\r\n  <textarea class="form-control"\r\n            placeholder="Nh\u1EADp n\u1ED9i dung"\r\n            [(ngModel)]="content"\r\n            rows="10" style="min-height: 200px; resize: vertical;" ></textarea>\r\n</div>\r\n\r\n<div class="mb-3">\r\n  <label class="form-label" for="files">\u1EA2nh \u0111\xEDnh k\xE8m (PNG, JPG, GIF)</label>\r\n  <input id="files"\r\n         type="file"\r\n         class="form-control"\r\n         accept="image/*"\r\n         multiple\r\n         (change)="onFileSelect($event)" />\r\n</div>\r\n\r\n<div *ngIf="selectedFiles.length" class="mb-3">\r\n  <label class="form-label">C\xE1c t\u1EC7p \u0111\xE3 ch\u1ECDn:</label>\r\n  <ul class="mb-0">\r\n    <li *ngFor="let f of selectedFiles">\r\n      {{ f.name }} ({{ f.size | number }} bytes)\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<button type="button"\r\n        class="btn btn-primary w-100"\r\n        (click)="createNews()">\r\n  T\u1EA1o\r\n</button>', styles: ["/* src/app/components/news/create-news/create-news.component.scss */\n.news-form-container {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.news-form-container .form-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.news-form-container .form-header h2 {\n  color: #2c3e50;\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n}\n.news-form-container .form-header .subtitle {\n  color: #7f8c8d;\n  font-size: 1rem;\n}\n.news-form-container .news-form .form-group {\n  margin-bottom: 1.5rem;\n}\n.news-form-container .news-form .form-group .form-label {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #2c3e50;\n  font-weight: 600;\n}\n.news-form-container .news-form .form-group .form-label i {\n  margin-right: 0.5rem;\n  color: #3498db;\n}\n.news-form-container .news-form .form-group .form-control {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  transition: 0.2s ease;\n}\n.news-form-container .news-form .form-group .form-control:focus {\n  border-color: #3498db;\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.15);\n}\n.news-form-container .news-form .form-group .content-textarea {\n  min-height: 150px;\n  resize: vertical;\n}\n.news-form-container .news-form .file-upload-container .file-hint {\n  margin-top: 0.25rem;\n  color: #95a5a6;\n  font-size: 0.85rem;\n}\n.news-form-container .news-form .selected-files {\n  background: #f4f6f8;\n  padding: 1rem;\n  border-radius: 6px;\n}\n.news-form-container .news-form .selected-files .file-list {\n  margin-top: 0.5rem;\n}\n.news-form-container .news-form .selected-files .file-list .file-item {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.news-form-container .news-form .selected-files .file-list .file-item i {\n  color: #3498db;\n  margin-right: 0.5rem;\n}\n.news-form-container .news-form .selected-files .file-list .file-item .file-name {\n  flex: 1;\n}\n.news-form-container .news-form .selected-files .file-list .file-item .file-size {\n  color: #7f8c8d;\n  font-size: 0.85rem;\n}\n.news-form-container .news-form .form-actions {\n  display: flex;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n.news-form-container .news-form .form-actions button {\n  flex: 1;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 1rem;\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n.news-form-container .news-form .form-actions button i {\n  margin-right: 0.5rem;\n}\n.news-form-container .news-form .form-actions button.btn-secondary {\n  background: #ecf0f1;\n  color: #2c3e50;\n}\n.news-form-container .news-form .form-actions button.btn-secondary:hover {\n  background: #dcdde1;\n}\n.news-form-container .news-form .form-actions button.btn-primary {\n  background: #3498db;\n  color: white;\n}\n.news-form-container .news-form .form-actions button.btn-primary:hover {\n  background: #2980b9;\n}\n.news-form-container .news-form .form-actions button.btn-primary:disabled {\n  background: #bdc3c7;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=create-news.component.css.map */\n"] }]
  }], () => [{ type: NewsService }, { type: i26.Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i014.\u0275setClassDebugInfo(CreateNewsComponent, { className: "CreateNewsComponent", filePath: "src/app/components/news/create-news/create-news.component.ts", lineNumber: 18 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fnews%2Fcreate-news%2Fcreate-news.component.ts%40CreateNewsComponent";
  function CreateNewsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i014.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i014.\u0275\u0275replaceMetadata(CreateNewsComponent, m.default, [i014, i37, i46, i55, news_service_exports, i26], [CommonModule7, FormsModule6, EditorModule, Component7], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && CreateNewsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && CreateNewsComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/chatbot/chatbot.component.ts
import { Component as Component11 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { CommonModule as CommonModule11 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { FormsModule as FormsModule8 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import { RouterModule as RouterModule5 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";

// src/app/components/header/header.component.ts
import { Component as Component8, EventEmitter, Output, Input } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { RouterLink as RouterLink5 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import { CommonModule as CommonModule8 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { NavigationEnd } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i015 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i15 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i27 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
var HeaderComponent = class _HeaderComponent {
  router;
  // isHeaderHidden là một @Input để nhận giá trị từ component cha (AppComponent)
  isHeaderHidden = false;
  // Biến để quản lý trạng thái mở/đóng của menu mobile (hamburger)
  isMenuOpen = false;
  // Đã khởi tạo giá trị ban đầu là false
  aiTuVanClicked = new EventEmitter();
  constructor(router) {
    this.router = router;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
        document.body.classList.remove("no-scroll");
      }
    });
  }
  ngOnInit() {
  }
  // Phương thức để mở/đóng menu mobile
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }
  // Phương thức khi click vào 'AI Tư vấn'
  onAiTuVanClick() {
    this.isMenuOpen = false;
    document.body.classList.remove("no-scroll");
    this.aiTuVanClicked.emit();
  }
  // Các phương thức khác cho các routerLink nếu bạn muốn đóng menu sau khi click
  // Ví dụ:
  onNavLinkClick() {
    this.isMenuOpen = false;
    document.body.classList.remove("no-scroll");
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)(i015.\u0275\u0275directiveInject(i15.Router));
  };
  static \u0275cmp = /* @__PURE__ */ i015.\u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], inputs: { isHeaderHidden: "isHeaderHidden" }, outputs: { aiTuVanClicked: "aiTuVanClicked" }, decls: 18, vars: 10, consts: [[1, "header-nav"], [1, "container"], ["href", "", 1, "brand"], [1, "menu-toggle", 3, "click"], [1, "hamburger-icon"], [1, "nav-links"], [3, "click"], ["routerLink", "/list-news"], ["routerLink", "/create-report"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      i015.\u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
      i015.\u0275\u0275text(3, "CheckScam");
      i015.\u0275\u0275elementEnd();
      i015.\u0275\u0275elementStart(4, "button", 3);
      i015.\u0275\u0275listener("click", function HeaderComponent_Template_button_click_4_listener() {
        return ctx.toggleMenu();
      });
      i015.\u0275\u0275element(5, "span", 4)(6, "span", 4)(7, "span", 4);
      i015.\u0275\u0275elementEnd();
      i015.\u0275\u0275elementStart(8, "ul", 5)(9, "li")(10, "a", 6);
      i015.\u0275\u0275listener("click", function HeaderComponent_Template_a_click_10_listener() {
        return ctx.onAiTuVanClick();
      });
      i015.\u0275\u0275text(11, "AI T\u01B0 v\u1EA5n");
      i015.\u0275\u0275elementEnd()();
      i015.\u0275\u0275elementStart(12, "li")(13, "a", 7);
      i015.\u0275\u0275text(14, "Tin t\u1EE9c");
      i015.\u0275\u0275elementEnd()();
      i015.\u0275\u0275elementStart(15, "li")(16, "a", 8);
      i015.\u0275\u0275text(17, "B\xE1o c\xE1o");
      i015.\u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      i015.\u0275\u0275classProp("hidden", ctx.isHeaderHidden);
      i015.\u0275\u0275advance(5);
      i015.\u0275\u0275classProp("open", ctx.isMenuOpen);
      i015.\u0275\u0275advance();
      i015.\u0275\u0275classProp("open", ctx.isMenuOpen);
      i015.\u0275\u0275advance();
      i015.\u0275\u0275classProp("open", ctx.isMenuOpen);
      i015.\u0275\u0275advance();
      i015.\u0275\u0275classProp("menu-open", ctx.isMenuOpen);
    }
  }, dependencies: [
    RouterLink5,
    CommonModule8,
    i27.NgClass,
    i27.NgComponentOutlet,
    i27.NgForOf,
    i27.NgIf,
    i27.NgTemplateOutlet,
    i27.NgStyle,
    i27.NgSwitch,
    i27.NgSwitchCase,
    i27.NgSwitchDefault,
    i27.NgPlural,
    i27.NgPluralCase,
    i27.AsyncPipe,
    i27.UpperCasePipe,
    i27.LowerCasePipe,
    i27.JsonPipe,
    i27.SlicePipe,
    i27.DecimalPipe,
    i27.PercentPipe,
    i27.TitleCasePipe,
    i27.CurrencyPipe,
    i27.DatePipe,
    i27.I18nPluralPipe,
    i27.I18nSelectPipe,
    i27.KeyValuePipe
  ], styles: ['@charset "UTF-8";\n\n\n\n.header-nav[_ngcontent-%COMP%] {\n  background-color: #1a313a;\n  height: 64px;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s ease-in-out;\n}\n.header-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n  height: 100%;\n}\n.header-nav[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.8rem;\n  font-weight: bold;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.header-nav[_ngcontent-%COMP%]   .menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n.header-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  gap: 24px;\n  align-items: center;\n  margin: 0px;\n}\n.header-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  padding: 8px 14px;\n  border-radius: 6px;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.header-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #38bdf8;\n  box-shadow: 0 4px 10px rgba(56, 189, 248, 0.4);\n  transform: translateY(-2px);\n}\n.header-nav.hidden[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\n@media (max-width: 768px) {\n  .header-nav[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n  .header-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .header-nav[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .header-nav[_ngcontent-%COMP%]   .menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 10px;\n    position: relative;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    z-index: 101;\n  }\n  .header-nav[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 2px;\n    background-color: #fff;\n    border-radius: 2px;\n    transition: all 0.3s ease;\n  }\n  .header-nav[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%]:nth-child(1).open {\n    transform: translateY(10px) rotate(45deg);\n  }\n  .header-nav[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%]:nth-child(2).open {\n    opacity: 0;\n  }\n  .header-nav[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%]:nth-child(3).open {\n    transform: translateY(-10px) rotate(-45deg);\n  }\n  .header-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    right: -100%;\n    width: 250px;\n    height: 100vh;\n    background-color: #1a313a;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding-top: 80px;\n    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);\n    transition: right 0.3s ease-in-out;\n    z-index: 99;\n  }\n  .header-nav[_ngcontent-%COMP%]   .nav-links.menu-open[_ngcontent-%COMP%] {\n    right: 0;\n  }\n  .header-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  .header-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .header-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n    width: 100%;\n    box-sizing: border-box;\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i015.\u0275setClassMetadata(HeaderComponent, [{
    type: Component8,
    args: [{ selector: "app-header", standalone: true, imports: [
      RouterLink5,
      CommonModule8
    ], template: '<nav class="header-nav" [class.hidden]="isHeaderHidden">\r\n  <div class="container">\r\n    <a class="brand" href="">CheckScam</a>\r\n\r\n    <button class="menu-toggle" (click)="toggleMenu()">\r\n      <span class="hamburger-icon" [class.open]="isMenuOpen"></span>\r\n      <span class="hamburger-icon" [class.open]="isMenuOpen"></span>\r\n      <span class="hamburger-icon" [class.open]="isMenuOpen"></span>\r\n    </button>\r\n\r\n    <ul class="nav-links" [class.menu-open]="isMenuOpen">\r\n      <li><a (click)="onAiTuVanClick()">AI T\u01B0 v\u1EA5n</a></li>\r\n      <li><a routerLink="/list-news">Tin t\u1EE9c</a></li>\r\n      <li><a routerLink="/create-report">B\xE1o c\xE1o</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n', styles: ['@charset "UTF-8";\n\n/* src/app/components/header/header.component.scss */\n.header-nav {\n  background-color: #1a313a;\n  height: 64px;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s ease-in-out;\n}\n.header-nav .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n  height: 100%;\n}\n.header-nav .brand {\n  color: #fff;\n  font-size: 1.8rem;\n  font-weight: bold;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.header-nav .menu-toggle {\n  display: none;\n}\n.header-nav .nav-links {\n  display: flex;\n  list-style: none;\n  gap: 24px;\n  align-items: center;\n  margin: 0px;\n}\n.header-nav .nav-links li a {\n  color: #fff;\n  text-decoration: none;\n  padding: 8px 14px;\n  border-radius: 6px;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.header-nav .nav-links li a:hover {\n  background-color: #38bdf8;\n  box-shadow: 0 4px 10px rgba(56, 189, 248, 0.4);\n  transform: translateY(-2px);\n}\n.header-nav.hidden {\n  transform: translateY(-100%);\n}\n@media (max-width: 768px) {\n  .header-nav {\n    height: 60px;\n  }\n  .header-nav .container {\n    padding: 0 10px;\n  }\n  .header-nav .brand {\n    font-size: 1.6rem;\n  }\n  .header-nav .menu-toggle {\n    display: block;\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 10px;\n    position: relative;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    z-index: 101;\n  }\n  .header-nav .hamburger-icon {\n    display: block;\n    width: 100%;\n    height: 2px;\n    background-color: #fff;\n    border-radius: 2px;\n    transition: all 0.3s ease;\n  }\n  .header-nav .hamburger-icon:nth-child(1).open {\n    transform: translateY(10px) rotate(45deg);\n  }\n  .header-nav .hamburger-icon:nth-child(2).open {\n    opacity: 0;\n  }\n  .header-nav .hamburger-icon:nth-child(3).open {\n    transform: translateY(-10px) rotate(-45deg);\n  }\n  .header-nav .nav-links {\n    position: fixed;\n    top: 0;\n    right: -100%;\n    width: 250px;\n    height: 100vh;\n    background-color: #1a313a;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding-top: 80px;\n    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);\n    transition: right 0.3s ease-in-out;\n    z-index: 99;\n  }\n  .header-nav .nav-links.menu-open {\n    right: 0;\n  }\n  .header-nav .nav-links li {\n    width: 100%;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  .header-nav .nav-links li:last-child {\n    border-bottom: none;\n  }\n  .header-nav .nav-links li a {\n    padding: 15px 20px;\n    width: 100%;\n    box-sizing: border-box;\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */\n'] }]
  }], () => [{ type: i15.Router }], { isHeaderHidden: [{
    type: Input
  }], aiTuVanClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i015.\u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/components/header/header.component.ts", lineNumber: 17 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fheader%2Fheader.component.ts%40HeaderComponent";
  function HeaderComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i015.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i015.\u0275\u0275replaceMetadata(HeaderComponent, m.default, [i015, i27, i15], [RouterLink5, CommonModule8, Component8, Input, Output], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && HeaderComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && HeaderComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/footer/footer.component.ts
import { Component as Component9 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { CommonModule as CommonModule9 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i016 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i16 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
var FooterComponent = class _FooterComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i016.\u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 21, vars: 0, consts: [[1, "app-footer"], [1, "container"], [1, "footer-left"], [1, "footer-item"], [1, "language-scroll"], [1, "scroll-to-top", 3, "click"], ["src", "path/to/your/arrow-up-icon.png", "alt", "Scroll to top"], [1, "footer-item", "contact-info"], ["href", "#"], [1, "footer-right"], [1, "footer-item", "design-info"], ["routerLink", "/about-us", 1, "btn-about-us"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      i016.\u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
      i016.\u0275\u0275listener("click", function FooterComponent_Template_span_click_5_listener() {
        return ctx.scrollToTop();
      });
      i016.\u0275\u0275element(6, "img", 6);
      i016.\u0275\u0275elementEnd()()();
      i016.\u0275\u0275elementStart(7, "div", 7)(8, "p");
      i016.\u0275\u0275text(9, "\xA9 B\u1EA3n quy\u1EC1n \xA9 2025");
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275elementStart(10, "p");
      i016.\u0275\u0275text(11, "Th\xF4ng tin li\xEAn h\u1EC7 ");
      i016.\u0275\u0275element(12, "a", 8);
      i016.\u0275\u0275elementEnd()()();
      i016.\u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "p");
      i016.\u0275\u0275text(16, "Thi\u1EBFt k\u1EBF b\u1EDFi ");
      i016.\u0275\u0275element(17, "a", 11);
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275elementStart(18, "p");
      i016.\u0275\u0275text(19, "L\u1EADp tr\xECnh b\u1EDFi ");
      i016.\u0275\u0275element(20, "a", 11);
      i016.\u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [CommonModule9, i16.NgClass, i16.NgComponentOutlet, i16.NgForOf, i16.NgIf, i16.NgTemplateOutlet, i16.NgStyle, i16.NgSwitch, i16.NgSwitchCase, i16.NgSwitchDefault, i16.NgPlural, i16.NgPluralCase, i16.AsyncPipe, i16.UpperCasePipe, i16.LowerCasePipe, i16.JsonPipe, i16.SlicePipe, i16.DecimalPipe, i16.PercentPipe, i16.TitleCasePipe, i16.CurrencyPipe, i16.DatePipe, i16.I18nPluralPipe, i16.I18nSelectPipe, i16.KeyValuePipe], styles: ["\n\n.app-footer[_ngcontent-%COMP%] {\n  background-color: #1a313a;\n  color: #ffffff;\n  padding: 20px 0;\n  font-size: 0.9em;\n}\n.app-footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.app-footer[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], \n.app-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.app-footer[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%] {\n  flex-basis: 60%;\n  gap: 40px;\n}\n@media (max-width: 768px) {\n  .app-footer[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    justify-content: center;\n    gap: 20px;\n    margin-bottom: 20px;\n  }\n}\n.app-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  flex-basis: 35%;\n}\n@media (max-width: 768px) {\n  .app-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    text-align: center;\n  }\n}\n.app-footer[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n@media (min-width: 769px) {\n  .app-footer[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n.app-footer[_ngcontent-%COMP%]   .footer-item.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.app-footer[_ngcontent-%COMP%]   .footer-item.design-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  color: #b0c0c0;\n}\n.app-footer[_ngcontent-%COMP%]   .footer-item.contact-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.app-footer[_ngcontent-%COMP%]   .footer-item.design-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.app-footer[_ngcontent-%COMP%]   .footer-item.contact-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.app-footer[_ngcontent-%COMP%]   .footer-item.design-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #4caf50;\n}\n.app-footer[_ngcontent-%COMP%]   .language-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.app-footer[_ngcontent-%COMP%]   .language-scroll[_ngcontent-%COMP%]   .flag-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.app-footer[_ngcontent-%COMP%]   .language-scroll[_ngcontent-%COMP%]   .scroll-to-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n.app-footer[_ngcontent-%COMP%]   .language-scroll[_ngcontent-%COMP%]   .scroll-to-top[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.app-footer[_ngcontent-%COMP%]   .language-scroll[_ngcontent-%COMP%]   .flag-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.app-footer[_ngcontent-%COMP%]   .language-scroll[_ngcontent-%COMP%]   .scroll-to-top[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.app-footer[_ngcontent-%COMP%]   .chat-icon[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background-color: #4CAF50;\n  color: white;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n}\n.app-footer[_ngcontent-%COMP%]   .chat-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.app-footer[_ngcontent-%COMP%]   .chat-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i016.\u0275setClassMetadata(FooterComponent, [{
    type: Component9,
    args: [{ selector: "app-footer", imports: [
      CommonModule9
    ], template: '<footer class="app-footer">\r\n  <div class="container">\r\n    <div class="footer-left">\r\n      <div class="footer-item">\r\n        <div class="language-scroll">\r\n            <span class="scroll-to-top" (click)="scrollToTop()">\r\n                <img src="path/to/your/arrow-up-icon.png" alt="Scroll to top">\r\n            </span>\r\n        </div>\r\n      </div>\r\n       <div class="footer-item contact-info">\r\n          <p>&copy; B\u1EA3n quy\u1EC1n \xA9 2025</p>\r\n          <p>Th\xF4ng tin li\xEAn h\u1EC7 <a href="#"></a></p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="footer-right">\r\n      <div class="footer-item design-info">\r\n        <p>Thi\u1EBFt k\u1EBF b\u1EDFi <a routerLink="/about-us" class="btn-about-us"></a></p> \r\n        <p>L\u1EADp tr\xECnh b\u1EDFi <a routerLink="/about-us" class="btn-about-us"></a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>', styles: ["/* src/app/components/footer/footer.component.scss */\n.app-footer {\n  background-color: #1a313a;\n  color: #ffffff;\n  padding: 20px 0;\n  font-size: 0.9em;\n}\n.app-footer .container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.app-footer .footer-left,\n.app-footer .footer-right {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.app-footer .footer-left {\n  flex-basis: 60%;\n  gap: 40px;\n}\n@media (max-width: 768px) {\n  .app-footer .footer-left {\n    flex-basis: 100%;\n    justify-content: center;\n    gap: 20px;\n    margin-bottom: 20px;\n  }\n}\n.app-footer .footer-right {\n  flex-basis: 35%;\n}\n@media (max-width: 768px) {\n  .app-footer .footer-right {\n    flex-basis: 100%;\n    text-align: center;\n  }\n}\n.app-footer .footer-item {\n  margin-bottom: 10px;\n}\n@media (min-width: 769px) {\n  .app-footer .footer-item {\n    margin-bottom: 0;\n  }\n}\n.app-footer .footer-item.contact-info p,\n.app-footer .footer-item.design-info p {\n  margin: 5px 0;\n  color: #b0c0c0;\n}\n.app-footer .footer-item.contact-info a,\n.app-footer .footer-item.design-info a {\n  color: #ffffff;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.app-footer .footer-item.contact-info a:hover,\n.app-footer .footer-item.design-info a:hover {\n  color: #4caf50;\n}\n.app-footer .language-scroll {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.app-footer .language-scroll .flag-icon img,\n.app-footer .language-scroll .scroll-to-top img {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n.app-footer .language-scroll .scroll-to-top {\n  cursor: pointer;\n}\n.app-footer .language-scroll .flag-icon i,\n.app-footer .language-scroll .scroll-to-top i {\n  font-size: 2em;\n}\n.app-footer .chat-icon {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background-color: #4CAF50;\n  color: white;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n}\n.app-footer .chat-icon img {\n  width: 30px;\n  height: 30px;\n}\n.app-footer .chat-icon i {\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i016.\u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/components/footer/footer.component.ts", lineNumber: 13 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Ffooter%2Ffooter.component.ts%40FooterComponent";
  function FooterComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i016.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i016.\u0275\u0275replaceMetadata(FooterComponent, m.default, [i016, i16], [CommonModule9, Component9], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && FooterComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && FooterComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/chat-box/chat-box.component.ts
import { CommonModule as CommonModule10 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { Component as Component10, EventEmitter as EventEmitter2, Output as Output2 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { FormsModule as FormsModule7 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import * as i018 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";

// src/app/services/check-scam.service.ts
var check_scam_service_exports = {};
__export(check_scam_service_exports, {
  CheckScamService: () => CheckScamService
});
import { Injectable as Injectable6 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i017 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i17 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common_http.js?v=e44b7f9a";
var CheckScamService = class _CheckScamService {
  http;
  httpUtilService;
  apiCheckScam = `${environment.apiBaseUrl}/check-scam`;
  apiChat = `${environment.apiBaseUrl}/check-scam/chat`;
  constructor(http, httpUtilService) {
    this.http = http;
    this.httpUtilService = httpUtilService;
  }
  getApiConfig() {
    return {
      headers: this.httpUtilService.createHeaders()
    };
  }
  checkScam(checkScamRequestDTO) {
    return this.http.post(this.apiCheckScam, checkScamRequestDTO, this.getApiConfig());
  }
  chat(message) {
    return this.http.post(this.apiChat, message, this.getApiConfig());
  }
  static \u0275fac = function CheckScamService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckScamService)(i017.\u0275\u0275inject(i17.HttpClient), i017.\u0275\u0275inject(HttpUtilService));
  };
  static \u0275prov = /* @__PURE__ */ i017.\u0275\u0275defineInjectable({ token: _CheckScamService, factory: _CheckScamService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i017.\u0275setClassMetadata(CheckScamService, [{
    type: Injectable6,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: i17.HttpClient }, { type: HttpUtilService }], null);
})();

// src/app/components/chat-box/chat-box.component.ts
import * as i28 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i38 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
function ChatBoxComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    i018.\u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    i018.\u0275\u0275text(3);
    i018.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    i018.\u0275\u0275classProp("user-message", message_r1.isUser)("bot-message", !message_r1.isUser);
    i018.\u0275\u0275advance(3);
    i018.\u0275\u0275textInterpolate(message_r1.text);
  }
}
var ChatBoxComponent = class _ChatBoxComponent {
  checkScamService;
  close = new EventEmitter2();
  messages = [];
  messageText = "";
  constructor(checkScamService) {
    this.checkScamService = checkScamService;
  }
  sendMessage() {
    if (this.messageText.trim()) {
      this.messages.push({
        text: this.messageText,
        isUser: true
      });
      this.checkScamService.chat(this.messageText).subscribe({
        next: (response) => {
          debugger;
          if (response.code === 0) {
            this.messages.push({
              text: response.message,
              isUser: false
            });
          } else {
            this.messages.push({
              text: "Xin l\u1ED7i, t\xF4i kh\xF4ng th\u1EC3 x\u1EED l\xFD y\xEAu c\u1EA7u c\u1EE7a b\u1EA1n l\xFAc n\xE0y.",
              isUser: false
            });
          }
        },
        error: (error) => {
          debugger;
          this.messages.push({
            text: "\u0110\xE3 x\u1EA3y ra l\u1ED7i khi k\u1EBFt n\u1ED1i v\u1EDBi server.",
            isUser: false
          });
          console.error("Chat API Error:", error);
        }
      });
      this.messageText = "";
    }
  }
  static \u0275fac = function ChatBoxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatBoxComponent)(i018.\u0275\u0275directiveInject(CheckScamService));
  };
  static \u0275cmp = /* @__PURE__ */ i018.\u0275\u0275defineComponent({ type: _ChatBoxComponent, selectors: [["app-chat-box"]], outputs: { close: "close" }, decls: 12, vars: 2, consts: [[1, "chat-box-wrapper"], [1, "chat-header"], [1, "close-button", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "chat-body"], ["class", "message-wrapper", 3, "user-message", "bot-message", 4, "ngFor", "ngForOf"], [1, "chat-input"], ["type", "text", "placeholder", "Nh\u1EADp tin nh\u1EAFn...", 3, "ngModelChange", "keydown.enter", "ngModel"], [3, "click"], [1, "message-wrapper"], [1, "message-content"], [1, "message-text"]], template: function ChatBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      i018.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span");
      i018.\u0275\u0275text(3, "T\u01B0 v\u1EA5n AI");
      i018.\u0275\u0275elementEnd();
      i018.\u0275\u0275elementStart(4, "button", 2);
      i018.\u0275\u0275listener("click", function ChatBoxComponent_Template_button_click_4_listener() {
        return ctx.close.emit();
      });
      i018.\u0275\u0275element(5, "i", 3);
      i018.\u0275\u0275elementEnd()();
      i018.\u0275\u0275elementStart(6, "div", 4);
      i018.\u0275\u0275template(7, ChatBoxComponent_div_7_Template, 4, 5, "div", 5);
      i018.\u0275\u0275elementEnd();
      i018.\u0275\u0275elementStart(8, "div", 6)(9, "input", 7);
      i018.\u0275\u0275twoWayListener("ngModelChange", function ChatBoxComponent_Template_input_ngModelChange_9_listener($event) {
        i018.\u0275\u0275twoWayBindingSet(ctx.messageText, $event) || (ctx.messageText = $event);
        return $event;
      });
      i018.\u0275\u0275listener("keydown.enter", function ChatBoxComponent_Template_input_keydown_enter_9_listener() {
        return ctx.sendMessage();
      });
      i018.\u0275\u0275elementEnd();
      i018.\u0275\u0275elementStart(10, "button", 8);
      i018.\u0275\u0275listener("click", function ChatBoxComponent_Template_button_click_10_listener() {
        return ctx.sendMessage();
      });
      i018.\u0275\u0275text(11, "G\u1EEDi");
      i018.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i018.\u0275\u0275advance(7);
      i018.\u0275\u0275property("ngForOf", ctx.messages);
      i018.\u0275\u0275advance(2);
      i018.\u0275\u0275twoWayProperty("ngModel", ctx.messageText);
    }
  }, dependencies: [CommonModule10, i28.NgClass, i28.NgComponentOutlet, i28.NgForOf, i28.NgIf, i28.NgTemplateOutlet, i28.NgStyle, i28.NgSwitch, i28.NgSwitchCase, i28.NgSwitchDefault, i28.NgPlural, i28.NgPluralCase, i28.AsyncPipe, i28.UpperCasePipe, i28.LowerCasePipe, i28.JsonPipe, i28.SlicePipe, i28.DecimalPipe, i28.PercentPipe, i28.TitleCasePipe, i28.CurrencyPipe, i28.DatePipe, i28.I18nPluralPipe, i28.I18nSelectPipe, i28.KeyValuePipe, FormsModule7, i38.\u0275NgNoValidate, i38.NgSelectOption, i38.\u0275NgSelectMultipleOption, i38.DefaultValueAccessor, i38.NumberValueAccessor, i38.RangeValueAccessor, i38.CheckboxControlValueAccessor, i38.SelectControlValueAccessor, i38.SelectMultipleControlValueAccessor, i38.RadioControlValueAccessor, i38.NgControlStatus, i38.NgControlStatusGroup, i38.RequiredValidator, i38.MinLengthValidator, i38.MaxLengthValidator, i38.PatternValidator, i38.CheckboxRequiredValidator, i38.EmailValidator, i38.MinValidator, i38.MaxValidator, i38.NgModel, i38.NgModelGroup, i38.NgForm], styles: ["\n\n.chat-box-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 350px;\n  height: 500px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  z-index: 1000;\n}\n.chat-header[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #00796b;\n  color: white;\n  border-radius: 10px 10px 0 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.chat-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n}\n.chat-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 18px;\n  cursor: pointer;\n  padding: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n}\n.chat-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.chat-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 15px;\n  background-color: #f5f5f5;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 8px;\n}\n.message-wrapper.user-message[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.message-wrapper.bot-message[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.message-content[_ngcontent-%COMP%] {\n  max-width: 80%;\n  padding: 10px 15px;\n  border-radius: 15px;\n  word-wrap: break-word;\n}\n.user-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background-color: #00796b;\n  color: white;\n  border-radius: 15px 15px 0 15px;\n}\n.bot-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  color: #212529;\n  border-radius: 15px 15px 15px 0;\n}\n.chat-input[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #fff;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  gap: 10px;\n}\n.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 20px;\n  outline: none;\n}\n.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #00796b;\n}\n.chat-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 15px;\n  background-color: #00796b;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.chat-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #00695c;\n}\n/*# sourceMappingURL=chat-box.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i018.\u0275setClassMetadata(ChatBoxComponent, [{
    type: Component10,
    args: [{ selector: "app-chat-box", standalone: true, imports: [
      CommonModule10,
      FormsModule7
    ], template: '  <div class="chat-box-wrapper">\r\n    <div class="chat-header">\r\n      <span>T\u01B0 v\u1EA5n AI</span>\r\n      <button class="close-button" (click)="close.emit()"><i class="fa-solid fa-xmark"></i></button>\r\n    </div>\r\n    <div class="chat-body">\r\n      <div *ngFor="let message of messages" \r\n          class="message-wrapper"\r\n          [class.user-message]="message.isUser"\r\n          [class.bot-message]="!message.isUser">\r\n        <div class="message-content">\r\n          <div class="message-text">{{ message.text }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="chat-input">\r\n      <input type="text" placeholder="Nh\u1EADp tin nh\u1EAFn..." [(ngModel)]="messageText" (keydown.enter)="sendMessage()">\r\n      <button (click)="sendMessage()">G\u1EEDi</button>\r\n    </div>\r\n  </div>\r\n', styles: ["/* src/app/components/chat-box/chat-box.component.scss */\n.chat-box-wrapper {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 350px;\n  height: 500px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  z-index: 1000;\n}\n.chat-header {\n  padding: 15px;\n  background-color: #00796b;\n  color: white;\n  border-radius: 10px 10px 0 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.chat-header span {\n  font-weight: 500;\n  font-size: 16px;\n}\n.chat-header .close-button {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 18px;\n  cursor: pointer;\n  padding: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n}\n.chat-header .close-button:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.chat-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 15px;\n  background-color: #f5f5f5;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.message-wrapper {\n  display: flex;\n  margin-bottom: 8px;\n}\n.message-wrapper.user-message {\n  justify-content: flex-end;\n}\n.message-wrapper.bot-message {\n  justify-content: flex-start;\n}\n.message-content {\n  max-width: 80%;\n  padding: 10px 15px;\n  border-radius: 15px;\n  word-wrap: break-word;\n}\n.user-message .message-content {\n  background-color: #00796b;\n  color: white;\n  border-radius: 15px 15px 0 15px;\n}\n.bot-message .message-content {\n  background-color: #e9ecef;\n  color: #212529;\n  border-radius: 15px 15px 15px 0;\n}\n.chat-input {\n  padding: 15px;\n  background-color: #fff;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  gap: 10px;\n}\n.chat-input input {\n  flex: 1;\n  padding: 8px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 20px;\n  outline: none;\n}\n.chat-input input:focus {\n  border-color: #00796b;\n}\n.chat-input button {\n  padding: 8px 15px;\n  background-color: #00796b;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.chat-input button:hover {\n  background-color: #00695c;\n}\n/*# sourceMappingURL=chat-box.component.css.map */\n"] }]
  }], () => [{ type: CheckScamService }], { close: [{
    type: Output2
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i018.\u0275setClassDebugInfo(ChatBoxComponent, { className: "ChatBoxComponent", filePath: "src/app/components/chat-box/chat-box.component.ts", lineNumber: 21 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fchat-box%2Fchat-box.component.ts%40ChatBoxComponent";
  function ChatBoxComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i018.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i018.\u0275\u0275replaceMetadata(ChatBoxComponent, m.default, [i018, i28, i38, check_scam_service_exports], [CommonModule10, FormsModule7, Component10, Output2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ChatBoxComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ChatBoxComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/chatbot/chatbot.component.ts
import * as i019 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i29 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i39 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import * as i47 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
function ChatbotComponent_app_chat_box_202_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i019.\u0275\u0275getCurrentView();
    i019.\u0275\u0275elementStart(0, "app-chat-box", 73);
    i019.\u0275\u0275listener("close", function ChatbotComponent_app_chat_box_202_Template_app_chat_box_close_0_listener() {
      i019.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i019.\u0275\u0275nextContext();
      return i019.\u0275\u0275resetView(ctx_r1.closeChatbox());
    });
    i019.\u0275\u0275elementEnd();
  }
}
var ChatbotComponent = class _ChatbotComponent {
  checkScamService;
  currentTypeText;
  onTypeChange() {
    throw new Error("Method not implemented.");
  }
  messages = [];
  info = "";
  selectedType = 1;
  showChatbox = false;
  scamReports;
  usersProtected;
  checkedItems;
  currentIcon;
  constructor(checkScamService) {
    this.checkScamService = checkScamService;
  }
  sendMessage() {
    const value = this.info.trim();
    if (!value) {
      return;
    }
    if (this.selectedType === 1 && !this.isPhoneNumber(value)) {
      alert("S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng 0 v\xE0 g\u1ED3m 10 ch\u1EEF s\u1ED1.");
      return;
    }
    if (this.selectedType === 2 && !this.isBankNumber(value)) {
      alert("S\u1ED1 t\xE0i kho\u1EA3n ch\u1EC9 \u0111\u01B0\u1EE3c ch\u1EE9a k\xFD t\u1EF1 s\u1ED1.");
      return;
    }
    if (this.selectedType === 3 && !this.isUrl(value)) {
      alert("URL kh\xF4ng h\u1EE3p l\u1EC7 (v\xED d\u1EE5 h\u1EE3p l\u1EC7: https://example.com ho\u1EB7c example.vn).");
      return;
    }
    this.messages.push({ sender: "user", text: value, isUser: true });
    this.checkScam(value, this.selectedType);
    this.info = "";
  }
  checkScam(query, type) {
    const requestBody = {
      info: query,
      type
    };
    this.checkScamService.checkScam(requestBody).subscribe({
      next: (response) => {
        let botResponseText = "";
        if (response?.code === 200 && response?.data) {
          botResponseText = response.data;
        } else {
          botResponseText = response?.message ? " Chi ti\u1EBFt: " + response.message : "Kh\xF4ng nh\u1EADn \u0111\u01B0\u1EE3c ph\u1EA3n h\u1ED3i t\u1EEB bot.";
        }
        this.messages.push({ sender: "bot", text: botResponseText, isUser: false });
      },
      error: (error) => {
        const errorMessage = error?.error || "\u0110\xE3 x\u1EA3y ra l\u1ED7i khi tra c\u1EE9u.";
        alert(errorMessage);
        this.messages.push({ sender: "bot", text: "L\u1ED7i: " + errorMessage, isUser: false });
      }
    });
  }
  isPhoneNumber(value) {
    return /^0\d{9}$/.test(value.trim());
  }
  isBankNumber(value) {
    return /^\d+$/.test(value.trim());
  }
  isUrl(value) {
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\\S*)?$/i;
    return urlRegex.test(value.trim());
  }
  onAiTuVanClicked() {
    this.showChatbox = true;
  }
  closeChatbox() {
    this.showChatbox = false;
  }
  static \u0275fac = function ChatbotComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatbotComponent)(i019.\u0275\u0275directiveInject(CheckScamService));
  };
  static \u0275cmp = /* @__PURE__ */ i019.\u0275\u0275defineComponent({ type: _ChatbotComponent, selectors: [["app-chatbot"]], decls: 204, vars: 7, consts: [[3, "aiTuVanClicked"], [1, "main-section"], [1, "background-elements"], [1, "square", "green-square", "top-left"], [1, "square", "yellow-square", "bottom-right"], [1, "square", "green-square", "mid-left"], [1, "square", "yellow-square", "mid-right"], [1, "square", "green-square", "bottom-left-small"], [1, "square", "yellow-square", "top-right-small"], [1, "content-wrapper"], [1, "main-content"], [1, "main-title"], [1, "safe-text"], [1, "subtitle"], [1, "search-box-container"], [1, "input-type-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "text", "placeholder", "Nh\u1EADp th\xF4ng tin c\u1EA7n ki\u1EC3m tra...", 1, "search-input", 3, "ngModelChange", "keydown.enter", "ngModel"], ["type", "submit", 1, "search-button", 3, "click", "disabled"], [1, "fas", "fa-paper-plane"], [1, "stats-section"], [1, "stats-grid"], [1, "stat-item"], [1, "counter-number"], [1, "stat-label"], [1, "community-section-new"], [1, "community-title"], [1, "community-desc"], [1, "social-links"], ["href", "#", 1, "social-button", "facebook"], ["src", "../../../assets/img/facebook.png", "alt", "Facebook"], ["href", "#", 1, "social-button", "telegram"], ["src", "../../../assets/img/telegram.png", "alt", "Telegram"], ["href", "#", 1, "social-button", "zalo"], ["src", "../../../assets/img/zalo.png", "alt", "Zalo"], [1, "features-section"], [1, "container"], [1, "section-header"], [1, "section-label"], [1, "section-main-title"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon"], [1, "feature-title"], [1, "feature-description"], [1, "about-us-section"], [1, "about-us-content"], [1, "graphic-column"], ["src", "https://chongluadao.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faboutus.c9f1d232.png&w=750&q=75", "alt", "About Us Graphic"], [1, "text-column"], [1, "section-description"], ["routerLink", "/about-us", 1, "btn-about-us"], [1, "arrow-icon"], [1, "footer-links-section"], [1, "footer-grid"], [1, "footer-column"], ["routerLink", "/check-phone"], ["routerLink", "/check-bank"], ["routerLink", "/check-website"], ["routerLink", "/extension"], ["routerLink", "/useful-info/scam-types"], ["routerLink", "/useful-info/email-scam"], ["routerLink", "/useful-info/bank-security"], ["routerLink", "/useful-info/online-shopping"], ["routerLink", "/support/faq"], ["routerLink", "/support/guide"], ["routerLink", "/support/report"], ["routerLink", "/support/contact"], ["routerLink", "/terms"], ["routerLink", "/privacy-policy"], ["routerLink", "/useful-info"], ["routerLink", "/about-us"], [3, "close", 4, "ngIf"], [3, "close"]], template: function ChatbotComponent_Template(rf, ctx) {
    if (rf & 1) {
      i019.\u0275\u0275elementStart(0, "app-header", 0);
      i019.\u0275\u0275listener("aiTuVanClicked", function ChatbotComponent_Template_app_header_aiTuVanClicked_0_listener() {
        return ctx.onAiTuVanClicked();
      });
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
      i019.\u0275\u0275element(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "h1", 11);
      i019.\u0275\u0275text(12, "B\u1EA0N C\xD3 \u0110ANG ");
      i019.\u0275\u0275element(13, "br");
      i019.\u0275\u0275text(14, " L\u01AF\u1EDAT WEB ");
      i019.\u0275\u0275elementStart(15, "span", 12);
      i019.\u0275\u0275text(16, "AN TO\xC0N?");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(17, "p", 13);
      i019.\u0275\u0275text(18, "Ki\u1EC3m tra ngay s\u1ED1 \u0111i\u1EC7n tho\u1EA1i, t\xE0i kho\u1EA3n ng\xE2n h\xE0ng v\xE0 website c\xF3 an to\xE0n hay kh\xF4ng");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(19, "div", 14)(20, "select", 15);
      i019.\u0275\u0275twoWayListener("ngModelChange", function ChatbotComponent_Template_select_ngModelChange_20_listener($event) {
        i019.\u0275\u0275twoWayBindingSet(ctx.selectedType, $event) || (ctx.selectedType = $event);
        return $event;
      });
      i019.\u0275\u0275elementStart(21, "option", 16);
      i019.\u0275\u0275text(22, "\u{1F4F1} S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(23, "option", 16);
      i019.\u0275\u0275text(24, "\u{1F3E6} S\u1ED1 t\xE0i kho\u1EA3n");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(25, "option", 16);
      i019.\u0275\u0275text(26, "\u{1F310} URL");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(27, "input", 17);
      i019.\u0275\u0275twoWayListener("ngModelChange", function ChatbotComponent_Template_input_ngModelChange_27_listener($event) {
        i019.\u0275\u0275twoWayBindingSet(ctx.info, $event) || (ctx.info = $event);
        return $event;
      });
      i019.\u0275\u0275listener("keydown.enter", function ChatbotComponent_Template_input_keydown_enter_27_listener() {
        return ctx.sendMessage();
      });
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(28, "button", 18);
      i019.\u0275\u0275listener("click", function ChatbotComponent_Template_button_click_28_listener() {
        return ctx.sendMessage();
      });
      i019.\u0275\u0275element(29, "i", 19);
      i019.\u0275\u0275elementEnd()()()();
      i019.\u0275\u0275elementStart(30, "div", 20)(31, "div", 21)(32, "div", 22)(33, "div", 23);
      i019.\u0275\u0275text(34, "325");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(35, "div", 24);
      i019.\u0275\u0275text(36, "B\xE1o c\xE1o l\u1EEBa \u0111\u1EA3o");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(37, "div", 22)(38, "div", 23);
      i019.\u0275\u0275text(39, "1000");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(40, "div", 24);
      i019.\u0275\u0275text(41, "Ng\u01B0\u1EDDi d\xF9ng \u0111\u01B0\u1EE3c b\u1EA3o v\u1EC7");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(42, "div", 22)(43, "div", 23);
      i019.\u0275\u0275text(44, "875");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(45, "div", 24);
      i019.\u0275\u0275text(46, "M\u1EE5c \u0111\xE3 ki\u1EC3m tra");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(47, "div", 22)(48, "div", 23);
      i019.\u0275\u0275text(49, "98,4%");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(50, "div", 24);
      i019.\u0275\u0275text(51, "\u0110\u1ED9 ch\xEDnh x\xE1c");
      i019.\u0275\u0275elementEnd()()()();
      i019.\u0275\u0275elementStart(52, "div", 25)(53, "h3", 26);
      i019.\u0275\u0275text(54, "Tham gia c\u1ED9ng \u0111\u1ED3ng Checkscam");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(55, "p", 27);
      i019.\u0275\u0275text(56, "K\u1EBFt n\u1ED1i v\u1EDBi c\u1ED9ng \u0111\u1ED3ng \u0111\u1EC3 c\u1EADp nh\u1EADt th\xF4ng tin b\u1EA3o m\u1EADt m\u1EDBi nh\u1EA5t");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(57, "div", 28)(58, "a", 29);
      i019.\u0275\u0275element(59, "img", 30);
      i019.\u0275\u0275text(60, " Facebook ");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(61, "a", 31);
      i019.\u0275\u0275element(62, "img", 32);
      i019.\u0275\u0275text(63, " Telegram ");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(64, "a", 33);
      i019.\u0275\u0275element(65, "img", 34);
      i019.\u0275\u0275text(66, " Zalo ");
      i019.\u0275\u0275elementEnd()()()();
      i019.\u0275\u0275elementStart(67, "div", 35)(68, "div", 36)(69, "div", 37)(70, "p", 38);
      i019.\u0275\u0275text(71, "T\xCDNH N\u0102NG");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(72, "h2", 39);
      i019.\u0275\u0275text(73, "B\u1EA3o v\u1EC7 to\xE0n di\u1EC7n kh\u1ECFi l\u1EEBa \u0111\u1EA3o");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(74, "div", 40)(75, "div", 41)(76, "div", 42);
      i019.\u0275\u0275text(77, "\u{1F6E1}\uFE0F");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(78, "h3", 43);
      i019.\u0275\u0275text(79, "Ki\u1EC3m tra s\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(80, "p", 44);
      i019.\u0275\u0275text(81, "X\xE1c minh danh t\xEDnh ng\u01B0\u1EDDi g\u1ECDi, ph\xE1t hi\u1EC7n c\xE1c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i l\u1EEBa \u0111\u1EA3o \u0111\xE3 \u0111\u01B0\u1EE3c b\xE1o c\xE1o b\u1EDFi c\u1ED9ng \u0111\u1ED3ng.");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(82, "div", 41)(83, "div", 42);
      i019.\u0275\u0275text(84, "\u{1F3E6}");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(85, "h3", 43);
      i019.\u0275\u0275text(86, "X\xE1c th\u1EF1c t\xE0i kho\u1EA3n ng\xE2n h\xE0ng");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(87, "p", 44);
      i019.\u0275\u0275text(88, "Ki\u1EC3m tra t\xEDnh h\u1EE3p l\u1EC7 c\u1EE7a s\u1ED1 t\xE0i kho\u1EA3n ng\xE2n h\xE0ng tr\u01B0\u1EDBc khi th\u1EF1c hi\u1EC7n giao d\u1ECBch chuy\u1EC3n ti\u1EC1n.");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(89, "div", 41)(90, "div", 42);
      i019.\u0275\u0275text(91, "\u{1F310}");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(92, "h3", 43);
      i019.\u0275\u0275text(93, "Qu\xE9t website an to\xE0n");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(94, "p", 44);
      i019.\u0275\u0275text(95, "Ph\xE2n t\xEDch website \u0111\u1EC3 ph\xE1t hi\u1EC7n c\xE1c trang web gi\u1EA3 m\u1EA1o, l\u1EEBa \u0111\u1EA3o ho\u1EB7c ch\u1EE9a m\xE3 \u0111\u1ED9c.");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(96, "div", 41)(97, "div", 42);
      i019.\u0275\u0275text(98, "\u{1F916}");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(99, "h3", 43);
      i019.\u0275\u0275text(100, "AI T\u01B0 v\u1EA5n th\xF4ng minh");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(101, "p", 44);
      i019.\u0275\u0275text(102, "Chatbot AI h\u1ED7 tr\u1EE3 24/7, t\u01B0 v\u1EA5n v\xE0 gi\u1EA3i \u0111\xE1p c\xE1c th\u1EAFc m\u1EAFc v\u1EC1 an to\xE0n th\xF4ng tin.");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(103, "div", 41)(104, "div", 42);
      i019.\u0275\u0275text(105, "\u{1F4CA}");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(106, "h3", 43);
      i019.\u0275\u0275text(107, "C\u01A1 s\u1EDF d\u1EEF li\u1EC7u c\u1EADp nh\u1EADt");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(108, "p", 44);
      i019.\u0275\u0275text(109, "D\u1EEF li\u1EC7u l\u1EEBa \u0111\u1EA3o \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt li\xEAn t\u1EE5c t\u1EEB c\xE1c ngu\u1ED3n uy t\xEDn v\xE0 b\xE1o c\xE1o t\u1EEB c\u1ED9ng \u0111\u1ED3ng.");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(110, "div", 41)(111, "div", 42);
      i019.\u0275\u0275text(112, "\u{1F514}");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(113, "h3", 43);
      i019.\u0275\u0275text(114, "C\u1EA3nh b\xE1o th\u1EDDi gian th\u1EF1c");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(115, "p", 44);
      i019.\u0275\u0275text(116, "Nh\u1EADn th\xF4ng b\xE1o ngay l\u1EADp t\u1EE9c khi ph\xE1t hi\u1EC7n c\xE1c m\u1ED1i \u0111e d\u1ECDa m\u1EDBi ho\u1EB7c chi\xEAu tr\xF2 l\u1EEBa \u0111\u1EA3o.");
      i019.\u0275\u0275elementEnd()()()()();
      i019.\u0275\u0275elementStart(117, "div", 45)(118, "div", 36)(119, "div", 46)(120, "div", 47);
      i019.\u0275\u0275element(121, "img", 48);
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(122, "div", 49)(123, "p", 38);
      i019.\u0275\u0275text(124, "V\u1EC0 CH\xDANG T\xD4I");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(125, "h2", 39);
      i019.\u0275\u0275text(126, "V\xCC M\u1ED8T INTERNET ");
      i019.\u0275\u0275element(127, "br");
      i019.\u0275\u0275text(128, " AN TO\xC0N H\u01A0N");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(129, "p", 50);
      i019.\u0275\u0275text(130, " CheckScam l\xE0 n\u1EC1n t\u1EA3ng h\xE0ng \u0111\u1EA7u t\u1EA1i Vi\u1EC7t Nam trong vi\u1EC7c b\u1EA3o v\u1EC7 ng\u01B0\u1EDDi d\xF9ng kh\u1ECFi c\xE1c h\xECnh th\u1EE9c l\u1EEBa \u0111\u1EA3o tr\u1EF1c tuy\u1EBFn. Ch\xFAng t\xF4i s\u1EED d\u1EE5ng c\xF4ng ngh\u1EC7 AI ti\xEAn ti\u1EBFn v\xE0 c\u01A1 s\u1EDF d\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt li\xEAn t\u1EE5c \u0111\u1EC3 mang l\u1EA1i s\u1EF1 an to\xE0n t\u1ED1i \u0111a cho ng\u01B0\u1EDDi d\xF9ng internet Vi\u1EC7t Nam. ");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(131, "a", 51);
      i019.\u0275\u0275text(132, " Xem th\xEAm v\u1EC1 ch\xFAng t\xF4i ");
      i019.\u0275\u0275elementStart(133, "span", 52);
      i019.\u0275\u0275text(134, "\u2192");
      i019.\u0275\u0275elementEnd()()()()()();
      i019.\u0275\u0275elementStart(135, "div", 53)(136, "div", 36)(137, "div", 54)(138, "div", 55)(139, "h3");
      i019.\u0275\u0275text(140, "S\u1EA3n ph\u1EA9m");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(141, "ul")(142, "li")(143, "a", 56);
      i019.\u0275\u0275text(144, "Ki\u1EC3m tra s\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(145, "li")(146, "a", 57);
      i019.\u0275\u0275text(147, "X\xE1c th\u1EF1c t\xE0i kho\u1EA3n ng\xE2n h\xE0ng");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(148, "li")(149, "a", 58);
      i019.\u0275\u0275text(150, "Qu\xE9t website an to\xE0n");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(151, "li")(152, "a", 59);
      i019.\u0275\u0275text(153, "Ti\u1EC7n \xEDch m\u1EDF r\u1ED9ng");
      i019.\u0275\u0275elementEnd()()()();
      i019.\u0275\u0275elementStart(154, "div", 55)(155, "h3");
      i019.\u0275\u0275text(156, "Th\xF4ng tin h\u1EEFu \xEDch");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(157, "ul")(158, "li")(159, "a", 60);
      i019.\u0275\u0275text(160, "C\xE1c ki\u1EC3u l\u1EEBa \u0111\u1EA3o ph\u1ED5 bi\u1EBFn");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(161, "li")(162, "a", 61);
      i019.\u0275\u0275text(163, "Nh\u1EADn bi\u1EBFt email l\u1EEBa \u0111\u1EA3o");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(164, "li")(165, "a", 62);
      i019.\u0275\u0275text(166, "B\u1EA3o m\u1EADt t\xE0i kho\u1EA3n ng\xE2n h\xE0ng");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(167, "li")(168, "a", 63);
      i019.\u0275\u0275text(169, "Mua s\u1EAFm online an to\xE0n");
      i019.\u0275\u0275elementEnd()()()();
      i019.\u0275\u0275elementStart(170, "div", 55)(171, "h3");
      i019.\u0275\u0275text(172, "H\u1ED7 tr\u1EE3");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(173, "ul")(174, "li")(175, "a", 64);
      i019.\u0275\u0275text(176, "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(177, "li")(178, "a", 65);
      i019.\u0275\u0275text(179, "H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(180, "li")(181, "a", 66);
      i019.\u0275\u0275text(182, "B\xE1o c\xE1o l\u1EEBa \u0111\u1EA3o");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(183, "li")(184, "a", 67);
      i019.\u0275\u0275text(185, "Li\xEAn h\u1EC7 h\u1ED7 tr\u1EE3");
      i019.\u0275\u0275elementEnd()()()();
      i019.\u0275\u0275elementStart(186, "div", 55)(187, "h3");
      i019.\u0275\u0275text(188, "Xem th\xEAm");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(189, "ul")(190, "li")(191, "a", 68);
      i019.\u0275\u0275text(192, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(193, "li")(194, "a", 69);
      i019.\u0275\u0275text(195, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(196, "li")(197, "a", 70);
      i019.\u0275\u0275text(198, "Th\xF4ng tin h\u1EEFu \xEDch");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(199, "li")(200, "a", 71);
      i019.\u0275\u0275text(201, "V\u1EC1 ch\xFAng t\xF4i");
      i019.\u0275\u0275elementEnd()()()()()()();
      i019.\u0275\u0275template(202, ChatbotComponent_app_chat_box_202_Template, 1, 0, "app-chat-box", 72);
      i019.\u0275\u0275element(203, "app-footer");
    }
    if (rf & 2) {
      i019.\u0275\u0275advance(20);
      i019.\u0275\u0275twoWayProperty("ngModel", ctx.selectedType);
      i019.\u0275\u0275advance();
      i019.\u0275\u0275property("ngValue", 1);
      i019.\u0275\u0275advance(2);
      i019.\u0275\u0275property("ngValue", 2);
      i019.\u0275\u0275advance(2);
      i019.\u0275\u0275property("ngValue", 3);
      i019.\u0275\u0275advance(2);
      i019.\u0275\u0275twoWayProperty("ngModel", ctx.info);
      i019.\u0275\u0275advance();
      i019.\u0275\u0275property("disabled", !ctx.info.trim());
      i019.\u0275\u0275advance(174);
      i019.\u0275\u0275property("ngIf", ctx.showChatbox);
    }
  }, dependencies: [
    CommonModule11,
    i29.NgClass,
    i29.NgComponentOutlet,
    i29.NgForOf,
    i29.NgIf,
    i29.NgTemplateOutlet,
    i29.NgStyle,
    i29.NgSwitch,
    i29.NgSwitchCase,
    i29.NgSwitchDefault,
    i29.NgPlural,
    i29.NgPluralCase,
    i29.AsyncPipe,
    i29.UpperCasePipe,
    i29.LowerCasePipe,
    i29.JsonPipe,
    i29.SlicePipe,
    i29.DecimalPipe,
    i29.PercentPipe,
    i29.TitleCasePipe,
    i29.CurrencyPipe,
    i29.DatePipe,
    i29.I18nPluralPipe,
    i29.I18nSelectPipe,
    i29.KeyValuePipe,
    FormsModule8,
    i39.\u0275NgNoValidate,
    i39.NgSelectOption,
    i39.\u0275NgSelectMultipleOption,
    i39.DefaultValueAccessor,
    i39.NumberValueAccessor,
    i39.RangeValueAccessor,
    i39.CheckboxControlValueAccessor,
    i39.SelectControlValueAccessor,
    i39.SelectMultipleControlValueAccessor,
    i39.RadioControlValueAccessor,
    i39.NgControlStatus,
    i39.NgControlStatusGroup,
    i39.RequiredValidator,
    i39.MinLengthValidator,
    i39.MaxLengthValidator,
    i39.PatternValidator,
    i39.CheckboxRequiredValidator,
    i39.EmailValidator,
    i39.MinValidator,
    i39.MaxValidator,
    i39.NgModel,
    i39.NgModelGroup,
    i39.NgForm,
    RouterModule5,
    i47.RouterOutlet,
    i47.RouterLink,
    i47.RouterLinkActive,
    i47.\u0275EmptyOutletComponent,
    HeaderComponent,
    FooterComponent,
    ChatBoxComponent
  ], styles: [`@charset "UTF-8";



html[_ngcontent-%COMP%], 
body[_ngcontent-%COMP%] {
  margin: 0;
  padding: 0;
  height: 100%;
}
body[_ngcontent-%COMP%] {
  font-family:
    "Segoe UI",
    Tahoma,
    Geneva,
    Verdana,
    sans-serif;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
}
app-header[_ngcontent-%COMP%] {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
@media (max-width: 768px) {
  app-header[_ngcontent-%COMP%] {
    height: 60px;
    padding: 10px 15px;
  }
}
.main-section[_ngcontent-%COMP%] {
  position: relative;
  min-height: calc(100vh - 80px);
  background:
    linear-gradient(
      135deg,
      #0b2241 0%,
      #1e3a5f 100%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 0;
}
@media (max-width: 768px) {
  .main-section[_ngcontent-%COMP%] {
    padding-top: 60px;
    padding-bottom: 30px;
    padding-left: 15px;
    padding-right: 15px;
    min-height: calc(100vh - 60px);
  }
}
@media (max-width: 480px) {
  .main-section[_ngcontent-%COMP%] {
    padding-top: 60px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
.background-elements[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
.square[_ngcontent-%COMP%] {
  position: absolute;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  opacity: 0.2;
  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;
}
@media (max-width: 768px) {
  .square[_ngcontent-%COMP%] {
    width: 60px;
    height: 60px;
  }
}
@media (max-width: 480px) {
  .square[_ngcontent-%COMP%] {
    width: 40px;
    height: 40px;
  }
}
@keyframes _ngcontent-%COMP%_float {
  0%, 100% {
    transform: rotate(45deg) translateY(0px);
  }
  50% {
    transform: rotate(45deg) translateY(-20px);
  }
}
.green-square[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      45deg,
      #3b9055,
      #4CAF50);
}
.yellow-square[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      45deg,
      #f7b32b,
      #FFC107);
}
.top-left[_ngcontent-%COMP%] {
  top: 5%;
  left: 10%;
  animation-delay: 0s;
}
@media (max-width: 768px) {
  .top-left[_ngcontent-%COMP%] {
    top: 8%;
    left: 5%;
  }
}
.bottom-right[_ngcontent-%COMP%] {
  bottom: 10%;
  right: 5%;
  animation-delay: 2s;
}
@media (max-width: 768px) {
  .bottom-right[_ngcontent-%COMP%] {
    bottom: 15%;
    right: 8%;
  }
}
.mid-left[_ngcontent-%COMP%] {
  top: 40%;
  left: -20px;
  animation-delay: 1s;
}
@media (max-width: 768px) {
  .mid-left[_ngcontent-%COMP%] {
    left: -10px;
  }
}
.mid-right[_ngcontent-%COMP%] {
  top: 60%;
  right: -20px;
  animation-delay: 3s;
}
@media (max-width: 768px) {
  .mid-right[_ngcontent-%COMP%] {
    right: -10px;
  }
}
.bottom-left-small[_ngcontent-%COMP%] {
  bottom: 20%;
  left: 20%;
  width: 50px;
  height: 50px;
  animation-delay: 4s;
}
@media (max-width: 768px) {
  .bottom-left-small[_ngcontent-%COMP%] {
    width: 30px;
    height: 30px;
    bottom: 25%;
    left: 15%;
  }
}
.top-right-small[_ngcontent-%COMP%] {
  top: 15%;
  right: 25%;
  width: 50px;
  height: 50px;
  animation-delay: 1.5s;
}
@media (max-width: 768px) {
  .top-right-small[_ngcontent-%COMP%] {
    width: 30px;
    height: 30px;
    top: 20%;
    right: 20%;
  }
}
.content-wrapper[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  flex-wrap: wrap;
  z-index: 1;
}
@media (max-width: 768px) {
  .content-wrapper[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
}
.main-content[_ngcontent-%COMP%] {
  text-align: center;
  flex-basis: 50%;
  min-width: 300px;
}
@media (max-width: 768px) {
  .main-content[_ngcontent-%COMP%] {
    flex-basis: 100%;
    min-width: auto;
  }
}
.main-title[_ngcontent-%COMP%] {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: white;
  margin-bottom: 20px;
  line-height: 1.1;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
@media (max-width: 480px) {
  .main-title[_ngcontent-%COMP%] {
    font-size: 2rem;
    margin-bottom: 20px;
    margin-top: 30px;
  }
}
.safe-text[_ngcontent-%COMP%] {
  color: #3b9055;
}
.subtitle[_ngcontent-%COMP%] {
  color: #ccc;
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 30px;
  font-weight: 300;
  line-height: 1.4;
}
@media (max-width: 480px) {
  .subtitle[_ngcontent-%COMP%] {
    margin-bottom: 20px;
  }
}
.search-box-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 50px;
  padding: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
}
@media (max-width: 768px) {
  .search-box-container[_ngcontent-%COMP%] {
    padding: 10px;
    border-radius: 30px;
    gap: 8px;
  }
}
@media (max-width: 480px) {
  .search-box-container[_ngcontent-%COMP%] {
    padding: 8px;
    border-radius: 25px;
    gap: 5px;
  }
}
.input-type-select[_ngcontent-%COMP%] {
  border: none;
  padding: 12px 30px 12px 15px;
  border-radius: 50px;
  background:
    linear-gradient(
      45deg,
      #4CAF50,
      #45a049);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  outline: none;
  min-width: 140px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  z-index: 2;
  box-sizing: border-box;
  height: 50px;
}
@media (max-width: 768px) {
  .input-type-select[_ngcontent-%COMP%] {
    width: auto;
    min-width: 130px;
    padding: 10px 25px 10px 12px;
    font-size: 0.95rem;
    height: 40px;
  }
}
@media (max-width: 480px) {
  .input-type-select[_ngcontent-%COMP%] {
    min-width: 110px;
    padding: 8px 20px 8px 10px;
    font-size: 0.85rem;
    height: 35px;
  }
}
.input-type-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  color: #333 !important;
  background-color: white !important;
}
.input-type-select[_ngcontent-%COMP%]   option[disabled][selected][_ngcontent-%COMP%] {
  color: white !important;
  background-color: transparent !important;
}
.input-container[_ngcontent-%COMP%] {
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
  height: 50px;
  min-width: 150px;
}
@media (max-width: 768px) {
  .input-container[_ngcontent-%COMP%] {
    min-width: 100px;
    height: 40px;
  }
}
@media (max-width: 480px) {
  .input-container[_ngcontent-%COMP%] {
    min-width: 80px;
    height: 35px;
  }
}
.selected-type-prefix[_ngcontent-%COMP%] {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 1rem;
  color: #333;
  padding-right: 5px;
  z-index: 1;
  pointer-events: none;
}
@media (max-width: 768px) {
  .selected-type-prefix[_ngcontent-%COMP%] {
    left: 10px;
    font-size: 0.9rem;
  }
}
@media (max-width: 480px) {
  .selected-type-prefix[_ngcontent-%COMP%] {
    left: 8px;
    font-size: 0.8rem;
  }
}
.selected-type-icon[_ngcontent-%COMP%] {
  margin-right: 5px;
  font-size: 1.2em;
}
@media (max-width: 480px) {
  .selected-type-icon[_ngcontent-%COMP%] {
    font-size: 1em;
  }
}
.selected-type-text[_ngcontent-%COMP%] {
  font-weight: 500;
}
@media (max-width: 480px) {
  .selected-type-text[_ngcontent-%COMP%] {
    display: none;
  }
}
.search-input[_ngcontent-%COMP%] {
  flex-grow: 1;
  border: none;
  background-color: transparent;
  border-radius: 50px;
  outline: none;
  font-size: 1.1em;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  padding: 12px 15px 12px 15px;
}
.search-input.has-prefix[_ngcontent-%COMP%] {
  padding-left: 160px;
}
@media (max-width: 768px) {
  .search-input[_ngcontent-%COMP%] {
    padding: 10px 10px 10px 10px;
    font-size: 1rem;
  }
  .search-input.has-prefix[_ngcontent-%COMP%] {
    padding-left: 130px;
  }
}
@media (max-width: 480px) {
  .search-input[_ngcontent-%COMP%] {
    padding: 8px 8px 8px 8px;
  }
  .search-input.has-prefix[_ngcontent-%COMP%] {
    padding-left: 38px;
  }
}
.search-input[_ngcontent-%COMP%]::placeholder {
  color: #666;
}
.search-button[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      45deg,
      #4CAF50,
      #45a049);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}
@media (max-width: 768px) {
  .search-button[_ngcontent-%COMP%] {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
}
@media (max-width: 480px) {
  .search-button[_ngcontent-%COMP%] {
    width: 35px;
    height: 35px;
    min-width: 35px;
    min-height: 35px;
  }
}
.search-button[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
}
.search-button[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
.search-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
}
@media (max-width: 768px) {
  .search-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
    width: 20px;
    height: 20px;
  }
}
@media (max-width: 480px) {
  .search-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
    width: 18px;
    height: 18px;
  }
}
.stats-section[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  margin: 60px 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  max-width: 1000px;
}
@media (max-width: 768px) {
  .stats-section[_ngcontent-%COMP%] {
    padding: 30px 20px;
    margin: 40px 0;
    border-radius: 15px;
  }
}
@media (max-width: 480px) {
  .stats-section[_ngcontent-%COMP%] {
    padding: 25px 15px;
    margin: 30px 0;
  }
}
.stats-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  text-align: center;
  color: white;
}
@media (max-width: 768px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
@media (max-width: 480px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}
.stat-item[_ngcontent-%COMP%] {
  color: white;
}
.counter-number[_ngcontent-%COMP%] {
  font-size: clamp(2.5rem, 4vw, 3rem);
  font-weight: 700;
  color: #4CAF50;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
.stat-label[_ngcontent-%COMP%] {
  font-size: clamp(1rem, 2vw, 1.1rem);
  opacity: 0.9;
  font-weight: 500;
}
.community-section-new[_ngcontent-%COMP%] {
  text-align: center;
  color: white;
  margin: 40px 0;
  width: 100%;
  max-width: 800px;
}
@media (max-width: 768px) {
  .community-section-new[_ngcontent-%COMP%] {
    margin: 30px 0;
  }
}
.community-title[_ngcontent-%COMP%] {
  font-size: clamp(1.3rem, 3vw, 1.5rem);
  margin-bottom: 10px;
  font-weight: 600;
}
.community-desc[_ngcontent-%COMP%] {
  color: #ccc;
  margin-bottom: 25px;
  font-size: clamp(0.9rem, 2vw, 1rem);
}
@media (max-width: 480px) {
  .community-desc[_ngcontent-%COMP%] {
    margin-bottom: 20px;
  }
}
.social-links[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
@media (max-width: 480px) {
  .social-links[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
}
.social-button[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 12px 20px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
@media (max-width: 480px) {
  .social-button[_ngcontent-%COMP%] {
    width: 200px;
    justify-content: center;
    padding: 12px 25px;
  }
}
.social-button[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
.social-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], 
.social-button[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  font-size: 1.2rem;
}
.social-button.facebook[_ngcontent-%COMP%]:hover {
  background-color: #1877F2;
  color: white;
}
.social-button.telegram[_ngcontent-%COMP%]:hover {
  background-color: #0088CC;
  color: white;
}
.social-button.zalo[_ngcontent-%COMP%]:hover {
  background-color: #0180C7;
  color: white;
}
.features-section[_ngcontent-%COMP%] {
  background: #fff;
  padding: 80px 0;
}
@media (max-width: 768px) {
  .features-section[_ngcontent-%COMP%] {
    padding: 60px 0;
  }
}
@media (max-width: 480px) {
  .features-section[_ngcontent-%COMP%] {
    padding: 40px 0;
  }
}
.features-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
@media (max-width: 480px) {
  .features-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
    padding: 0 15px;
  }
}
.features-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 60px;
}
@media (max-width: 768px) {
  .features-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {
    margin-bottom: 40px;
  }
}
.features-section[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%] {
  font-size: 0.9em;
  color: #555;
  margin-bottom: 5px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.features-section[_ngcontent-%COMP%]   .section-main-title[_ngcontent-%COMP%] {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.2;
}
.features-section[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%] {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}
.features-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}
@media (max-width: 768px) {
  .features-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }
}
@media (max-width: 480px) {
  .features-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}
.feature-card[_ngcontent-%COMP%] {
  background: #fff;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}
@media (max-width: 480px) {
  .feature-card[_ngcontent-%COMP%] {
    padding: 30px 20px;
    border-radius: 15px;
  }
}
.feature-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}
.feature-icon[_ngcontent-%COMP%] {
  width: 80px;
  height: 80px;
  background:
    linear-gradient(
      45deg,
      #4CAF50,
      #45a049);
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.2);
  font-size: 3em;
  color: white;
}
@media (max-width: 480px) {
  .feature-icon[_ngcontent-%COMP%] {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
    font-size: 2.5em;
  }
}
.feature-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], 
.feature-icon[_ngcontent-%COMP%]   .icon-svg[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  color: white;
  filter: brightness(0) invert(1);
}
.feature-title[_ngcontent-%COMP%] {
  font-size: clamp(1.2rem, 2.5vw, 1.4rem);
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}
@media (max-width: 480px) {
  .feature-title[_ngcontent-%COMP%] {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
}
.feature-description[_ngcontent-%COMP%] {
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #666;
  line-height: 1.6;
}
.about-us-section[_ngcontent-%COMP%] {
  background-color: #f8fbfd;
  padding: 80px 0;
  text-align: center;
}
@media (max-width: 768px) {
  .about-us-section[_ngcontent-%COMP%] {
    padding: 60px 0;
  }
}
@media (max-width: 480px) {
  .about-us-section[_ngcontent-%COMP%] {
    padding: 40px 0;
  }
}
.container[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
@media (max-width: 768px) {
  .container[_ngcontent-%COMP%] {
    padding: 0 15px;
  }
}
.about-us-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}
@media (max-width: 992px) {
  .about-us-content[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 40px;
  }
}
@media (max-width: 480px) {
  .about-us-content[_ngcontent-%COMP%] {
    gap: 30px;
  }
}
.graphic-column[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.graphic-column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.graphic-column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
@media (max-width: 992px) {
  .graphic-column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
    max-width: 70%;
  }
}
@media (max-width: 480px) {
  .graphic-column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
    max-width: 90%;
  }
}
.text-column[_ngcontent-%COMP%] {
  flex: 1;
  max-width: 600px;
  text-align: left;
}
@media (max-width: 992px) {
  .text-column[_ngcontent-%COMP%] {
    text-align: center;
    padding: 0 20px;
  }
}
.section-label[_ngcontent-%COMP%] {
  font-size: 1.1em;
  color: #4CAF50;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 15px;
}
.section-main-title[_ngcontent-%COMP%] {
  font-size: 3em;
  color: #2c3e50;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 25px;
}
.section-main-title[_ngcontent-%COMP%]   .safe-text-highlight[_ngcontent-%COMP%] {
  color: #4CAF50;
}
@media (max-width: 768px) {
  .section-main-title[_ngcontent-%COMP%] {
    font-size: 2.2em;
    margin-bottom: 20px;
  }
}
@media (max-width: 480px) {
  .section-main-title[_ngcontent-%COMP%] {
    font-size: 1.8em;
    margin-bottom: 15px;
  }
}
.section-description[_ngcontent-%COMP%] {
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
  margin-bottom: 40px;
}
@media (max-width: 768px) {
  .section-description[_ngcontent-%COMP%] {
    font-size: 1em;
    margin-bottom: 30px;
  }
}
@media (max-width: 480px) {
  .section-description[_ngcontent-%COMP%] {
    font-size: 0.95em;
    margin-bottom: 25px;
  }
}
.btn-about-us[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  background:
    linear-gradient(
      45deg,
      #4CAF50,
      #66BB6A);
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05em;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
}
.btn-about-us[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(76, 175, 80, 0.4);
  background:
    linear-gradient(
      45deg,
      #45a049,
      #5cb860);
}
.btn-about-us[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {
  margin-left: 10px;
  font-size: 1.2em;
  transition: margin-left 0.3s ease;
}
.btn-about-us[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%] {
  margin-left: 15px;
}
@media (max-width: 480px) {
  .btn-about-us[_ngcontent-%COMP%] {
    padding: 12px 25px;
    font-size: 1em;
  }
}
.extension-section[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #1e3a5f 0%,
      #0b2241 100%);
  padding: 80px 0;
  color: white;
  text-align: center;
}
@media (max-width: 768px) {
  .extension-section[_ngcontent-%COMP%] {
    padding: 60px 0;
  }
}
@media (max-width: 480px) {
  .extension-section[_ngcontent-%COMP%] {
    padding: 40px 0;
  }
}
.extension-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}
@media (max-width: 480px) {
  .extension-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
    padding: 0 15px;
  }
}
.extension-section[_ngcontent-%COMP%]   .extension-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.extension-section[_ngcontent-%COMP%]   .extension-text[_ngcontent-%COMP%] {
  max-width: 800px;
  margin-bottom: 30px;
}
.extension-section[_ngcontent-%COMP%]   .extension-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 15px;
}
.extension-section[_ngcontent-%COMP%]   .extension-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: clamp(1rem, 2vw, 1.1rem);
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 25px;
}
.extension-section[_ngcontent-%COMP%]   .extension-buttons[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
@media (max-width: 480px) {
  .extension-section[_ngcontent-%COMP%]   .extension-buttons[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
}
.extension-section[_ngcontent-%COMP%]   .extension-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: #0b2241;
  padding: 12px 25px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
@media (max-width: 480px) {
  .extension-section[_ngcontent-%COMP%]   .extension-btn[_ngcontent-%COMP%] {
    width: 200px;
    justify-content: center;
  }
}
.extension-section[_ngcontent-%COMP%]   .extension-btn[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
.extension-section[_ngcontent-%COMP%]   .extension-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
}
.footer-links-section[_ngcontent-%COMP%] {
  background-color: #f8f8f8;
  padding: 60px 0;
  color: #333;
}
@media (max-width: 768px) {
  .footer-links-section[_ngcontent-%COMP%] {
    padding: 40px 0;
  }
}
@media (max-width: 480px) {
  .footer-links-section[_ngcontent-%COMP%] {
    padding: 30px 0;
  }
}
.footer-links-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
@media (max-width: 480px) {
  .footer-links-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
    padding: 0 15px;
  }
}
.footer-links-section[_ngcontent-%COMP%]   .footer-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}
@media (max-width: 768px) {
  .footer-links-section[_ngcontent-%COMP%]   .footer-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
  }
}
@media (max-width: 480px) {
  .footer-links-section[_ngcontent-%COMP%]   .footer-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 25px;
    text-align: center;
  }
}
.footer-links-section[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 20px;
  color: #0b2241;
}
@media (max-width: 480px) {
  .footer-links-section[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
    margin-bottom: 15px;
  }
}
.footer-links-section[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-links-section[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  margin-bottom: 10px;
}
.footer-links-section[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
.footer-links-section[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #555;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95em;
}
.footer-links-section[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: #4CAF50;
}
app-chat-box[_ngcontent-%COMP%] {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
}
app-footer[_ngcontent-%COMP%] {
  background-color: #0b2241;
  color: white;
  padding: 20px 0;
  text-align: center;
  font-size: 0.9em;
}
/*# sourceMappingURL=chatbot.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i019.\u0275setClassMetadata(ChatbotComponent, [{
    type: Component11,
    args: [{ selector: "app-chatbot", standalone: true, imports: [
      CommonModule11,
      FormsModule8,
      RouterModule5,
      HeaderComponent,
      FooterComponent,
      ChatBoxComponent
    ], template: '<app-header (aiTuVanClicked)="onAiTuVanClicked()"></app-header>\r\n\r\n<div class="main-section">\r\n  <div class="background-elements">\r\n    <div class="square green-square top-left"></div>\r\n    <div class="square yellow-square bottom-right"></div>\r\n    <div class="square green-square mid-left"></div>\r\n    <div class="square yellow-square mid-right"></div>\r\n    <div class="square green-square bottom-left-small"></div>\r\n    <div class="square yellow-square top-right-small"></div>\r\n  </div>\r\n\r\n  <div class="content-wrapper">\r\n    <div class="main-content">\r\n      <h1 class="main-title">B\u1EA0N C\xD3 \u0110ANG <br> L\u01AF\u1EDAT WEB <span class="safe-text">AN TO\xC0N?</span></h1>\r\n      <p class="subtitle">Ki\u1EC3m tra ngay s\u1ED1 \u0111i\u1EC7n tho\u1EA1i, t\xE0i kho\u1EA3n ng\xE2n h\xE0ng v\xE0 website c\xF3 an to\xE0n hay kh\xF4ng</p>\r\n      \r\n      <div class="search-box-container">\r\n        <select [(ngModel)]="selectedType" class="input-type-select">\r\n          <option [ngValue]="1">\u{1F4F1} S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</option>\r\n          <option [ngValue]="2">\u{1F3E6} S\u1ED1 t\xE0i kho\u1EA3n</option>\r\n          <option [ngValue]="3">\u{1F310} URL</option>\r\n        </select>\r\n        <input class="search-input" type="text" placeholder="Nh\u1EADp th\xF4ng tin c\u1EA7n ki\u1EC3m tra..."\r\n          [(ngModel)]="info" (keydown.enter)="sendMessage()">\r\n        <button class="search-button" type="submit" (click)="sendMessage()" [disabled]="!info.trim()">\r\n  <i class="fas fa-paper-plane"></i>\r\n  </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Stats Section -->\r\n  <div class="stats-section">\r\n    <div class="stats-grid">\r\n      <div class="stat-item">\r\n        <div class="counter-number">325</div>\r\n        <div class="stat-label">B\xE1o c\xE1o l\u1EEBa \u0111\u1EA3o</div>\r\n      </div>\r\n      <div class="stat-item">\r\n        <div class="counter-number">1000</div>\r\n        <div class="stat-label">Ng\u01B0\u1EDDi d\xF9ng \u0111\u01B0\u1EE3c b\u1EA3o v\u1EC7</div>\r\n      </div>\r\n      <div class="stat-item">\r\n        <div class="counter-number">875</div>\r\n        <div class="stat-label">M\u1EE5c \u0111\xE3 ki\u1EC3m tra</div>\r\n      </div>\r\n      <div class="stat-item">\r\n        <div class="counter-number">98,4%</div>\r\n        <div class="stat-label">\u0110\u1ED9 ch\xEDnh x\xE1c</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Community Section -->\r\n  <div class="community-section-new">\r\n    <h3 class="community-title">Tham gia c\u1ED9ng \u0111\u1ED3ng Checkscam</h3>\r\n    <p class="community-desc">K\u1EBFt n\u1ED1i v\u1EDBi c\u1ED9ng \u0111\u1ED3ng \u0111\u1EC3 c\u1EADp nh\u1EADt th\xF4ng tin b\u1EA3o m\u1EADt m\u1EDBi nh\u1EA5t</p>\r\n    <div class="social-links">\r\n      <a href="#" class="social-button facebook">\r\n        <img src="../../../assets/img/facebook.png" alt="Facebook"> Facebook\r\n      </a>\r\n      <a href="#" class="social-button telegram">\r\n        <img src="../../../assets/img/telegram.png" alt="Telegram"> Telegram\r\n      </a>\r\n      <a href="#" class="social-button zalo">\r\n        <img src="../../../assets/img/zalo.png" alt="Zalo"> Zalo\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Features Section -->\r\n<div class="features-section">\r\n  <div class="container">\r\n    <div class="section-header">\r\n      <p class="section-label">T\xCDNH N\u0102NG</p>\r\n      <h2 class="section-main-title">B\u1EA3o v\u1EC7 to\xE0n di\u1EC7n kh\u1ECFi l\u1EEBa \u0111\u1EA3o</h2>\r\n    </div>\r\n    \r\n    <div class="features-grid">\r\n      <div class="feature-card">\r\n        <div class="feature-icon">\u{1F6E1}\uFE0F</div>\r\n        <h3 class="feature-title">Ki\u1EC3m tra s\u1ED1 \u0111i\u1EC7n tho\u1EA1i</h3>\r\n        <p class="feature-description">X\xE1c minh danh t\xEDnh ng\u01B0\u1EDDi g\u1ECDi, ph\xE1t hi\u1EC7n c\xE1c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i l\u1EEBa \u0111\u1EA3o \u0111\xE3 \u0111\u01B0\u1EE3c b\xE1o c\xE1o b\u1EDFi c\u1ED9ng \u0111\u1ED3ng.</p>\r\n      </div>\r\n      <div class="feature-card">\r\n        <div class="feature-icon">\u{1F3E6}</div>\r\n        <h3 class="feature-title">X\xE1c th\u1EF1c t\xE0i kho\u1EA3n ng\xE2n h\xE0ng</h3>\r\n        <p class="feature-description">Ki\u1EC3m tra t\xEDnh h\u1EE3p l\u1EC7 c\u1EE7a s\u1ED1 t\xE0i kho\u1EA3n ng\xE2n h\xE0ng tr\u01B0\u1EDBc khi th\u1EF1c hi\u1EC7n giao d\u1ECBch chuy\u1EC3n ti\u1EC1n.</p>\r\n      </div>\r\n      <div class="feature-card">\r\n        <div class="feature-icon">\u{1F310}</div>\r\n        <h3 class="feature-title">Qu\xE9t website an to\xE0n</h3>\r\n        <p class="feature-description">Ph\xE2n t\xEDch website \u0111\u1EC3 ph\xE1t hi\u1EC7n c\xE1c trang web gi\u1EA3 m\u1EA1o, l\u1EEBa \u0111\u1EA3o ho\u1EB7c ch\u1EE9a m\xE3 \u0111\u1ED9c.</p>\r\n      </div>\r\n      <div class="feature-card">\r\n        <div class="feature-icon">\u{1F916}</div>\r\n        <h3 class="feature-title">AI T\u01B0 v\u1EA5n th\xF4ng minh</h3>\r\n        <p class="feature-description">Chatbot AI h\u1ED7 tr\u1EE3 24/7, t\u01B0 v\u1EA5n v\xE0 gi\u1EA3i \u0111\xE1p c\xE1c th\u1EAFc m\u1EAFc v\u1EC1 an to\xE0n th\xF4ng tin.</p>\r\n      </div>\r\n      <div class="feature-card">\r\n        <div class="feature-icon">\u{1F4CA}</div>\r\n        <h3 class="feature-title">C\u01A1 s\u1EDF d\u1EEF li\u1EC7u c\u1EADp nh\u1EADt</h3>\r\n        <p class="feature-description">D\u1EEF li\u1EC7u l\u1EEBa \u0111\u1EA3o \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt li\xEAn t\u1EE5c t\u1EEB c\xE1c ngu\u1ED3n uy t\xEDn v\xE0 b\xE1o c\xE1o t\u1EEB c\u1ED9ng \u0111\u1ED3ng.</p>\r\n      </div>\r\n      <div class="feature-card">\r\n        <div class="feature-icon">\u{1F514}</div>\r\n        <h3 class="feature-title">C\u1EA3nh b\xE1o th\u1EDDi gian th\u1EF1c</h3>\r\n        <p class="feature-description">Nh\u1EADn th\xF4ng b\xE1o ngay l\u1EADp t\u1EE9c khi ph\xE1t hi\u1EC7n c\xE1c m\u1ED1i \u0111e d\u1ECDa m\u1EDBi ho\u1EB7c chi\xEAu tr\xF2 l\u1EEBa \u0111\u1EA3o.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="about-us-section">\r\n  <div class="container">\r\n    <div class="about-us-content">\r\n      <div class="graphic-column">\r\n        <img src="https://chongluadao.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faboutus.c9f1d232.png&w=750&q=75" alt="About Us Graphic">\r\n      </div>\r\n      <div class="text-column">\r\n        <p class="section-label">V\u1EC0 CH\xDANG T\xD4I</p>\r\n        <h2 class="section-main-title">V\xCC M\u1ED8T INTERNET <br> AN TO\xC0N H\u01A0N</h2>\r\n        <p class="section-description">\r\n          CheckScam l\xE0 n\u1EC1n t\u1EA3ng h\xE0ng \u0111\u1EA7u t\u1EA1i Vi\u1EC7t Nam trong vi\u1EC7c b\u1EA3o v\u1EC7 ng\u01B0\u1EDDi d\xF9ng kh\u1ECFi c\xE1c h\xECnh th\u1EE9c l\u1EEBa \u0111\u1EA3o tr\u1EF1c tuy\u1EBFn. \r\n          Ch\xFAng t\xF4i s\u1EED d\u1EE5ng c\xF4ng ngh\u1EC7 AI ti\xEAn ti\u1EBFn v\xE0 c\u01A1 s\u1EDF d\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt li\xEAn t\u1EE5c \u0111\u1EC3 mang l\u1EA1i s\u1EF1 an to\xE0n t\u1ED1i \u0111a cho ng\u01B0\u1EDDi d\xF9ng internet Vi\u1EC7t Nam.\r\n        </p>\r\n        <a routerLink="/about-us" class="btn-about-us">\r\n          Xem th\xEAm v\u1EC1 ch\xFAng t\xF4i\r\n          <span class="arrow-icon">\u2192</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Extension Info Section -->\r\n<!-- <div class="extension-section">\r\n  <div class="container">\r\n    <div class="extension-content">\r\n      <div class="extension-text">\r\n        <h3>Ti\u1EC7n \xEDch m\u1EDF r\u1ED9ng tr\xECnh duy\u1EC7t</h3>\r\n        <p><strong>CheckScam</strong> \u0111\xE3 c\xF3 s\u1EB5n tr\xEAn c\u1EEDa h\xE0ng ti\u1EC7n \xEDch m\u1EDF r\u1ED9ng c\u1EE7a c\xE1c tr\xECnh duy\u1EC7t sau: Microsoft Edge, Chrome, C\u1ED1c C\u1ED1c, Brave v\xE0 Firefox. Ngo\xE0i ra, ch\xFAng t\xF4i \u0111\xE3 t\xEDch h\u1EE3p d\u1EEF li\u1EC7u danh s\xE1ch ch\u1EB7n c\u1EE7a m\xECnh v\xE0o OpenDNS, NextDNS, Twitter v\xE0 nhi\u1EC1u nh\xE0 cung c\u1EA5p ph\u1EA7n m\u1EC1m di\u1EC7t virus ph\u1ED5 bi\u1EBFn.</p>\r\n        <div class="extension-buttons">\r\n          <a href="#" class="extension-btn chrome">\r\n            <img src="assets/icons/chrome-icon.png" alt="Chrome"> Chrome\r\n          </a>\r\n          <a href="#" class="extension-btn edge">\r\n            <img src="assets/icons/edge-icon.png" alt="Edge"> Edge\r\n          </a>\r\n          <a href="#" class="extension-btn firefox">\r\n            <img src="assets/icons/firefox-icon.png" alt="Firefox"> Firefox\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- Footer Links Section -->\r\n<div class="footer-links-section">\r\n  <div class="container">\r\n    <div class="footer-grid">\r\n      <div class="footer-column">\r\n        <h3>S\u1EA3n ph\u1EA9m</h3>\r\n        <ul>\r\n          <li><a routerLink="/check-phone">Ki\u1EC3m tra s\u1ED1 \u0111i\u1EC7n tho\u1EA1i</a></li>\r\n          <li><a routerLink="/check-bank">X\xE1c th\u1EF1c t\xE0i kho\u1EA3n ng\xE2n h\xE0ng</a></li>\r\n          <li><a routerLink="/check-website">Qu\xE9t website an to\xE0n</a></li>\r\n          <li><a routerLink="/extension">Ti\u1EC7n \xEDch m\u1EDF r\u1ED9ng</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class="footer-column">\r\n        <h3>Th\xF4ng tin h\u1EEFu \xEDch</h3>\r\n        <ul>\r\n          <li><a routerLink="/useful-info/scam-types">C\xE1c ki\u1EC3u l\u1EEBa \u0111\u1EA3o ph\u1ED5 bi\u1EBFn</a></li>\r\n          <li><a routerLink="/useful-info/email-scam">Nh\u1EADn bi\u1EBFt email l\u1EEBa \u0111\u1EA3o</a></li>\r\n          <li><a routerLink="/useful-info/bank-security">B\u1EA3o m\u1EADt t\xE0i kho\u1EA3n ng\xE2n h\xE0ng</a></li>\r\n          <li><a routerLink="/useful-info/online-shopping">Mua s\u1EAFm online an to\xE0n</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class="footer-column">\r\n        <h3>H\u1ED7 tr\u1EE3</h3>\r\n        <ul>\r\n          <li><a routerLink="/support/faq">C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p</a></li>\r\n          <li><a routerLink="/support/guide">H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng</a></li>\r\n          <li><a routerLink="/support/report">B\xE1o c\xE1o l\u1EEBa \u0111\u1EA3o</a></li>\r\n          <li><a routerLink="/support/contact">Li\xEAn h\u1EC7 h\u1ED7 tr\u1EE3</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class="footer-column">\r\n        <h3>Xem th\xEAm</h3>\r\n        <ul>\r\n          <li><a routerLink="/terms">\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng</a></li>\r\n          <li><a routerLink="/privacy-policy">Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt</a></li>\r\n          <li><a routerLink="/useful-info">Th\xF4ng tin h\u1EEFu \xEDch</a></li>\r\n          <li><a routerLink="/about-us">V\u1EC1 ch\xFAng t\xF4i</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-chat-box *ngIf="showChatbox" (close)="closeChatbox()"></app-chat-box> \r\n<app-footer></app-footer>', styles: [`@charset "UTF-8";

/* src/app/components/chatbot/chatbot.component.scss */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  font-family:
    "Segoe UI",
    Tahoma,
    Geneva,
    Verdana,
    sans-serif;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
}
app-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
@media (max-width: 768px) {
  app-header {
    height: 60px;
    padding: 10px 15px;
  }
}
.main-section {
  position: relative;
  min-height: calc(100vh - 80px);
  background:
    linear-gradient(
      135deg,
      #0b2241 0%,
      #1e3a5f 100%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 0;
}
@media (max-width: 768px) {
  .main-section {
    padding-top: 60px;
    padding-bottom: 30px;
    padding-left: 15px;
    padding-right: 15px;
    min-height: calc(100vh - 60px);
  }
}
@media (max-width: 480px) {
  .main-section {
    padding-top: 60px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
.background-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
.square {
  position: absolute;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  opacity: 0.2;
  animation: float 6s ease-in-out infinite;
}
@media (max-width: 768px) {
  .square {
    width: 60px;
    height: 60px;
  }
}
@media (max-width: 480px) {
  .square {
    width: 40px;
    height: 40px;
  }
}
@keyframes float {
  0%, 100% {
    transform: rotate(45deg) translateY(0px);
  }
  50% {
    transform: rotate(45deg) translateY(-20px);
  }
}
.green-square {
  background:
    linear-gradient(
      45deg,
      #3b9055,
      #4CAF50);
}
.yellow-square {
  background:
    linear-gradient(
      45deg,
      #f7b32b,
      #FFC107);
}
.top-left {
  top: 5%;
  left: 10%;
  animation-delay: 0s;
}
@media (max-width: 768px) {
  .top-left {
    top: 8%;
    left: 5%;
  }
}
.bottom-right {
  bottom: 10%;
  right: 5%;
  animation-delay: 2s;
}
@media (max-width: 768px) {
  .bottom-right {
    bottom: 15%;
    right: 8%;
  }
}
.mid-left {
  top: 40%;
  left: -20px;
  animation-delay: 1s;
}
@media (max-width: 768px) {
  .mid-left {
    left: -10px;
  }
}
.mid-right {
  top: 60%;
  right: -20px;
  animation-delay: 3s;
}
@media (max-width: 768px) {
  .mid-right {
    right: -10px;
  }
}
.bottom-left-small {
  bottom: 20%;
  left: 20%;
  width: 50px;
  height: 50px;
  animation-delay: 4s;
}
@media (max-width: 768px) {
  .bottom-left-small {
    width: 30px;
    height: 30px;
    bottom: 25%;
    left: 15%;
  }
}
.top-right-small {
  top: 15%;
  right: 25%;
  width: 50px;
  height: 50px;
  animation-delay: 1.5s;
}
@media (max-width: 768px) {
  .top-right-small {
    width: 30px;
    height: 30px;
    top: 20%;
    right: 20%;
  }
}
.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  flex-wrap: wrap;
  z-index: 1;
}
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
}
.main-content {
  text-align: center;
  flex-basis: 50%;
  min-width: 300px;
}
@media (max-width: 768px) {
  .main-content {
    flex-basis: 100%;
    min-width: auto;
  }
}
.main-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: white;
  margin-bottom: 20px;
  line-height: 1.1;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
@media (max-width: 480px) {
  .main-title {
    font-size: 2rem;
    margin-bottom: 20px;
    margin-top: 30px;
  }
}
.safe-text {
  color: #3b9055;
}
.subtitle {
  color: #ccc;
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 30px;
  font-weight: 300;
  line-height: 1.4;
}
@media (max-width: 480px) {
  .subtitle {
    margin-bottom: 20px;
  }
}
.search-box-container {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 50px;
  padding: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
}
@media (max-width: 768px) {
  .search-box-container {
    padding: 10px;
    border-radius: 30px;
    gap: 8px;
  }
}
@media (max-width: 480px) {
  .search-box-container {
    padding: 8px;
    border-radius: 25px;
    gap: 5px;
  }
}
.input-type-select {
  border: none;
  padding: 12px 30px 12px 15px;
  border-radius: 50px;
  background:
    linear-gradient(
      45deg,
      #4CAF50,
      #45a049);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  outline: none;
  min-width: 140px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  z-index: 2;
  box-sizing: border-box;
  height: 50px;
}
@media (max-width: 768px) {
  .input-type-select {
    width: auto;
    min-width: 130px;
    padding: 10px 25px 10px 12px;
    font-size: 0.95rem;
    height: 40px;
  }
}
@media (max-width: 480px) {
  .input-type-select {
    min-width: 110px;
    padding: 8px 20px 8px 10px;
    font-size: 0.85rem;
    height: 35px;
  }
}
.input-type-select option {
  color: #333 !important;
  background-color: white !important;
}
.input-type-select option[disabled][selected] {
  color: white !important;
  background-color: transparent !important;
}
.input-container {
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
  height: 50px;
  min-width: 150px;
}
@media (max-width: 768px) {
  .input-container {
    min-width: 100px;
    height: 40px;
  }
}
@media (max-width: 480px) {
  .input-container {
    min-width: 80px;
    height: 35px;
  }
}
.selected-type-prefix {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 1rem;
  color: #333;
  padding-right: 5px;
  z-index: 1;
  pointer-events: none;
}
@media (max-width: 768px) {
  .selected-type-prefix {
    left: 10px;
    font-size: 0.9rem;
  }
}
@media (max-width: 480px) {
  .selected-type-prefix {
    left: 8px;
    font-size: 0.8rem;
  }
}
.selected-type-icon {
  margin-right: 5px;
  font-size: 1.2em;
}
@media (max-width: 480px) {
  .selected-type-icon {
    font-size: 1em;
  }
}
.selected-type-text {
  font-weight: 500;
}
@media (max-width: 480px) {
  .selected-type-text {
    display: none;
  }
}
.search-input {
  flex-grow: 1;
  border: none;
  background-color: transparent;
  border-radius: 50px;
  outline: none;
  font-size: 1.1em;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  padding: 12px 15px 12px 15px;
}
.search-input.has-prefix {
  padding-left: 160px;
}
@media (max-width: 768px) {
  .search-input {
    padding: 10px 10px 10px 10px;
    font-size: 1rem;
  }
  .search-input.has-prefix {
    padding-left: 130px;
  }
}
@media (max-width: 480px) {
  .search-input {
    padding: 8px 8px 8px 8px;
  }
  .search-input.has-prefix {
    padding-left: 38px;
  }
}
.search-input::placeholder {
  color: #666;
}
.search-button {
  background:
    linear-gradient(
      45deg,
      #4CAF50,
      #45a049);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}
@media (max-width: 768px) {
  .search-button {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
}
@media (max-width: 480px) {
  .search-button {
    width: 35px;
    height: 35px;
    min-width: 35px;
    min-height: 35px;
  }
}
.search-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
}
.search-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
.search-button img {
  width: 24px;
  height: 24px;
}
@media (max-width: 768px) {
  .search-button img {
    width: 20px;
    height: 20px;
  }
}
@media (max-width: 480px) {
  .search-button img {
    width: 18px;
    height: 18px;
  }
}
.stats-section {
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  margin: 60px 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  max-width: 1000px;
}
@media (max-width: 768px) {
  .stats-section {
    padding: 30px 20px;
    margin: 40px 0;
    border-radius: 15px;
  }
}
@media (max-width: 480px) {
  .stats-section {
    padding: 25px 15px;
    margin: 30px 0;
  }
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  text-align: center;
  color: white;
}
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}
.stat-item {
  color: white;
}
.counter-number {
  font-size: clamp(2.5rem, 4vw, 3rem);
  font-weight: 700;
  color: #4CAF50;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
.stat-label {
  font-size: clamp(1rem, 2vw, 1.1rem);
  opacity: 0.9;
  font-weight: 500;
}
.community-section-new {
  text-align: center;
  color: white;
  margin: 40px 0;
  width: 100%;
  max-width: 800px;
}
@media (max-width: 768px) {
  .community-section-new {
    margin: 30px 0;
  }
}
.community-title {
  font-size: clamp(1.3rem, 3vw, 1.5rem);
  margin-bottom: 10px;
  font-weight: 600;
}
.community-desc {
  color: #ccc;
  margin-bottom: 25px;
  font-size: clamp(0.9rem, 2vw, 1rem);
}
@media (max-width: 480px) {
  .community-desc {
    margin-bottom: 20px;
  }
}
.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
@media (max-width: 480px) {
  .social-links {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
}
.social-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 12px 20px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
@media (max-width: 480px) {
  .social-button {
    width: 200px;
    justify-content: center;
    padding: 12px 25px;
  }
}
.social-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
.social-button img,
.social-button .social-icon {
  width: 20px;
  height: 20px;
  font-size: 1.2rem;
}
.social-button.facebook:hover {
  background-color: #1877F2;
  color: white;
}
.social-button.telegram:hover {
  background-color: #0088CC;
  color: white;
}
.social-button.zalo:hover {
  background-color: #0180C7;
  color: white;
}
.features-section {
  background: #fff;
  padding: 80px 0;
}
@media (max-width: 768px) {
  .features-section {
    padding: 60px 0;
  }
}
@media (max-width: 480px) {
  .features-section {
    padding: 40px 0;
  }
}
.features-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
@media (max-width: 480px) {
  .features-section .container {
    padding: 0 15px;
  }
}
.features-section .section-header {
  text-align: center;
  margin-bottom: 60px;
}
@media (max-width: 768px) {
  .features-section .section-header {
    margin-bottom: 40px;
  }
}
.features-section .section-label {
  font-size: 0.9em;
  color: #555;
  margin-bottom: 5px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.features-section .section-main-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.2;
}
.features-section .section-description {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }
}
@media (max-width: 480px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}
.feature-card {
  background: #fff;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}
@media (max-width: 480px) {
  .feature-card {
    padding: 30px 20px;
    border-radius: 15px;
  }
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}
.feature-icon {
  width: 80px;
  height: 80px;
  background:
    linear-gradient(
      45deg,
      #4CAF50,
      #45a049);
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.2);
  font-size: 3em;
  color: white;
}
@media (max-width: 480px) {
  .feature-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
    font-size: 2.5em;
  }
}
.feature-icon img,
.feature-icon .icon-svg {
  width: 40px;
  height: 40px;
  color: white;
  filter: brightness(0) invert(1);
}
.feature-title {
  font-size: clamp(1.2rem, 2.5vw, 1.4rem);
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}
@media (max-width: 480px) {
  .feature-title {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
}
.feature-description {
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #666;
  line-height: 1.6;
}
.about-us-section {
  background-color: #f8fbfd;
  padding: 80px 0;
  text-align: center;
}
@media (max-width: 768px) {
  .about-us-section {
    padding: 60px 0;
  }
}
@media (max-width: 480px) {
  .about-us-section {
    padding: 40px 0;
  }
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
}
.about-us-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}
@media (max-width: 992px) {
  .about-us-content {
    flex-direction: column;
    gap: 40px;
  }
}
@media (max-width: 480px) {
  .about-us-content {
    gap: 30px;
  }
}
.graphic-column {
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.graphic-column img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.graphic-column img:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
@media (max-width: 992px) {
  .graphic-column img {
    max-width: 70%;
  }
}
@media (max-width: 480px) {
  .graphic-column img {
    max-width: 90%;
  }
}
.text-column {
  flex: 1;
  max-width: 600px;
  text-align: left;
}
@media (max-width: 992px) {
  .text-column {
    text-align: center;
    padding: 0 20px;
  }
}
.section-label {
  font-size: 1.1em;
  color: #4CAF50;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 15px;
}
.section-main-title {
  font-size: 3em;
  color: #2c3e50;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 25px;
}
.section-main-title .safe-text-highlight {
  color: #4CAF50;
}
@media (max-width: 768px) {
  .section-main-title {
    font-size: 2.2em;
    margin-bottom: 20px;
  }
}
@media (max-width: 480px) {
  .section-main-title {
    font-size: 1.8em;
    margin-bottom: 15px;
  }
}
.section-description {
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
  margin-bottom: 40px;
}
@media (max-width: 768px) {
  .section-description {
    font-size: 1em;
    margin-bottom: 30px;
  }
}
@media (max-width: 480px) {
  .section-description {
    font-size: 0.95em;
    margin-bottom: 25px;
  }
}
.btn-about-us {
  display: inline-flex;
  align-items: center;
  background:
    linear-gradient(
      45deg,
      #4CAF50,
      #66BB6A);
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05em;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
}
.btn-about-us:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(76, 175, 80, 0.4);
  background:
    linear-gradient(
      45deg,
      #45a049,
      #5cb860);
}
.btn-about-us .arrow-icon {
  margin-left: 10px;
  font-size: 1.2em;
  transition: margin-left 0.3s ease;
}
.btn-about-us:hover .arrow-icon {
  margin-left: 15px;
}
@media (max-width: 480px) {
  .btn-about-us {
    padding: 12px 25px;
    font-size: 1em;
  }
}
.extension-section {
  background:
    linear-gradient(
      135deg,
      #1e3a5f 0%,
      #0b2241 100%);
  padding: 80px 0;
  color: white;
  text-align: center;
}
@media (max-width: 768px) {
  .extension-section {
    padding: 60px 0;
  }
}
@media (max-width: 480px) {
  .extension-section {
    padding: 40px 0;
  }
}
.extension-section .container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}
@media (max-width: 480px) {
  .extension-section .container {
    padding: 0 15px;
  }
}
.extension-section .extension-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.extension-section .extension-text {
  max-width: 800px;
  margin-bottom: 30px;
}
.extension-section .extension-text h3 {
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 15px;
}
.extension-section .extension-text p {
  font-size: clamp(1rem, 2vw, 1.1rem);
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 25px;
}
.extension-section .extension-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
@media (max-width: 480px) {
  .extension-section .extension-buttons {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
}
.extension-section .extension-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: #0b2241;
  padding: 12px 25px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
@media (max-width: 480px) {
  .extension-section .extension-btn {
    width: 200px;
    justify-content: center;
  }
}
.extension-section .extension-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
.extension-section .extension-btn img {
  width: 20px;
  height: 20px;
}
.footer-links-section {
  background-color: #f8f8f8;
  padding: 60px 0;
  color: #333;
}
@media (max-width: 768px) {
  .footer-links-section {
    padding: 40px 0;
  }
}
@media (max-width: 480px) {
  .footer-links-section {
    padding: 30px 0;
  }
}
.footer-links-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
@media (max-width: 480px) {
  .footer-links-section .container {
    padding: 0 15px;
  }
}
.footer-links-section .footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}
@media (max-width: 768px) {
  .footer-links-section .footer-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
  }
}
@media (max-width: 480px) {
  .footer-links-section .footer-grid {
    grid-template-columns: 1fr;
    gap: 25px;
    text-align: center;
  }
}
.footer-links-section .footer-column h3 {
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 20px;
  color: #0b2241;
}
@media (max-width: 480px) {
  .footer-links-section .footer-column h3 {
    margin-bottom: 15px;
  }
}
.footer-links-section .footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-links-section .footer-column ul li {
  margin-bottom: 10px;
}
.footer-links-section .footer-column ul li:last-child {
  margin-bottom: 0;
}
.footer-links-section .footer-column ul li a {
  color: #555;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95em;
}
.footer-links-section .footer-column ul li a:hover {
  color: #4CAF50;
}
app-chat-box {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
}
app-footer {
  background-color: #0b2241;
  color: white;
  padding: 20px 0;
  text-align: center;
  font-size: 0.9em;
}
/*# sourceMappingURL=chatbot.component.css.map */
`] }]
  }], () => [{ type: CheckScamService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i019.\u0275setClassDebugInfo(ChatbotComponent, { className: "ChatbotComponent", filePath: "src/app/components/chatbot/chatbot.component.ts", lineNumber: 31 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fchatbot%2Fchatbot.component.ts%40ChatbotComponent";
  function ChatbotComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i019.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i019.\u0275\u0275replaceMetadata(ChatbotComponent, m.default, [i019, i29, i39, i47, check_scam_service_exports], [CommonModule11, FormsModule8, RouterModule5, HeaderComponent, FooterComponent, ChatBoxComponent, Component11], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ChatbotComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ChatbotComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/login/login.component.ts
import { Component as Component12, ViewChild as ViewChild2 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { FormsModule as FormsModule9 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import { RouterModule as RouterModule6 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i021 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i18 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";

// src/app/services/token.service.ts
var token_service_exports = {};
__export(token_service_exports, {
  TokenService: () => TokenService
});
import { Injectable as Injectable7 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i020 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
var TokenService = class _TokenService {
  TOKEN_KEY = "jwt_token";
  USER_KEY = "user";
  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  clearToken() {
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
  }
  getDecodedToken() {
    const token = this.getToken();
    if (!token)
      return null;
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      console.error("Token kh\xF4ng h\u1EE3p l\u1EC7:", e);
      return null;
    }
  }
  static \u0275fac = function TokenService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TokenService)();
  };
  static \u0275prov = /* @__PURE__ */ i020.\u0275\u0275defineInjectable({ token: _TokenService, factory: _TokenService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i020.\u0275setClassMetadata(TokenService, [{
    type: Injectable7,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/components/login/login.component.ts
import * as i48 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
var _c03 = ["loginForm"];
var LoginComponent = class _LoginComponent {
  router;
  userService;
  tokenService;
  loginForm;
  username = "admin@gmail.com";
  password = "123456";
  constructor(router, userService, tokenService) {
    this.router = router;
    this.userService = userService;
    this.tokenService = tokenService;
  }
  login() {
    this.tokenService.clearToken();
    const loginDTO = {
      username: this.username,
      password: this.password
    };
    this.userService.login(loginDTO).subscribe({
      next: (response) => {
        debugger;
        const token = response.access_token;
        this.tokenService.saveToken(token);
        this.userService.saveUserData(response);
        this.router.navigate(["/admin"]);
      },
      error: (error) => {
        debugger;
        alert(error?.error);
      }
    });
  }
  forgotPassword(event) {
    event.preventDefault();
    alert("Vui l\xF2ng li\xEAn h\u1EC7 qu\u1EA3n tr\u1ECB vi\xEAn \u0111\u1EC3 \u0111\u01B0\u1EE3c c\u1EA5p l\u1EA1i m\u1EADt kh\u1EA9u.");
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(i021.\u0275\u0275directiveInject(i18.Router), i021.\u0275\u0275directiveInject(UserService), i021.\u0275\u0275directiveInject(TokenService));
  };
  static \u0275cmp = /* @__PURE__ */ i021.\u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      i021.\u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      i021.\u0275\u0275queryRefresh(_t = i021.\u0275\u0275loadQuery()) && (ctx.loginForm = _t.first);
    }
  }, decls: 29, vars: 3, consts: [["loginForm", "ngForm"], [1, "container", "d-flex", "justify-content-center", "align-items-center", "vh-100"], [1, "card", "p-5", "shadow-lg", "rounded-3", "custom-card-style"], [1, "text-center", "mb-4", "text-primary"], [1, "mb-4"], ["for", "phoneNumber", 1, "form-label"], [1, "input-group"], [1, "input-group-text"], [1, "bi", "bi-person-fill"], ["type", "text", "id", "phoneNumber", "placeholder", "Nh\u1EADp t\xEAn \u0111\u0103ng nh\u1EADp", "name", "phoneNumber", "required", "", 1, "form-control", "form-control-lg", 3, "ngModelChange", "ngModel"], ["for", "password", 1, "form-label"], [1, "bi", "bi-lock-fill"], ["type", "password", "id", "password", "placeholder", "Nh\u1EADp m\u1EADt kh\u1EA9u", "name", "password", "required", "", 1, "form-control", "form-control-lg", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-between", "mb-4"], [1, "form-check"], ["type", "checkbox", "id", "rememberMe", 1, "form-check-input"], ["for", "rememberMe", 1, "form-check-label"], ["href", "#", 1, "text-muted", "forgot-password-link", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "w-100", "bg-gradient-primary", 3, "click", "disabled"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = i021.\u0275\u0275getCurrentView();
      i021.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
      i021.\u0275\u0275text(3, "\u0110\u0103ng nh\u1EADp");
      i021.\u0275\u0275elementEnd();
      i021.\u0275\u0275elementStart(4, "form", null, 0)(6, "div", 4)(7, "label", 5);
      i021.\u0275\u0275text(8, "T\xEAn \u0111\u0103ng nh\u1EADp");
      i021.\u0275\u0275elementEnd();
      i021.\u0275\u0275elementStart(9, "div", 6)(10, "span", 7);
      i021.\u0275\u0275element(11, "i", 8);
      i021.\u0275\u0275elementEnd();
      i021.\u0275\u0275elementStart(12, "input", 9);
      i021.\u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
        i021.\u0275\u0275restoreView(_r1);
        i021.\u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return i021.\u0275\u0275resetView($event);
      });
      i021.\u0275\u0275elementEnd()()();
      i021.\u0275\u0275elementStart(13, "div", 4)(14, "label", 10);
      i021.\u0275\u0275text(15, "M\u1EADt kh\u1EA9u");
      i021.\u0275\u0275elementEnd();
      i021.\u0275\u0275elementStart(16, "div", 6)(17, "span", 7);
      i021.\u0275\u0275element(18, "i", 11);
      i021.\u0275\u0275elementEnd();
      i021.\u0275\u0275elementStart(19, "input", 12);
      i021.\u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
        i021.\u0275\u0275restoreView(_r1);
        i021.\u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return i021.\u0275\u0275resetView($event);
      });
      i021.\u0275\u0275elementEnd()()();
      i021.\u0275\u0275elementStart(20, "div", 13)(21, "div", 14);
      i021.\u0275\u0275element(22, "input", 15);
      i021.\u0275\u0275elementStart(23, "label", 16);
      i021.\u0275\u0275text(24, "Nh\u1EDB t\xE0i kho\u1EA3n");
      i021.\u0275\u0275elementEnd()();
      i021.\u0275\u0275elementStart(25, "a", 17);
      i021.\u0275\u0275listener("click", function LoginComponent_Template_a_click_25_listener($event) {
        i021.\u0275\u0275restoreView(_r1);
        return i021.\u0275\u0275resetView(ctx.forgotPassword($event));
      });
      i021.\u0275\u0275text(26, "Qu\xEAn m\u1EADt kh\u1EA9u?");
      i021.\u0275\u0275elementEnd()();
      i021.\u0275\u0275elementStart(27, "button", 18);
      i021.\u0275\u0275listener("click", function LoginComponent_Template_button_click_27_listener() {
        i021.\u0275\u0275restoreView(_r1);
        return i021.\u0275\u0275resetView(ctx.login());
      });
      i021.\u0275\u0275text(28, " \u0110\u0103ng nh\u1EADp ");
      i021.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const loginForm_r2 = i021.\u0275\u0275reference(5);
      i021.\u0275\u0275advance(12);
      i021.\u0275\u0275twoWayProperty("ngModel", ctx.username);
      i021.\u0275\u0275advance(7);
      i021.\u0275\u0275twoWayProperty("ngModel", ctx.password);
      i021.\u0275\u0275advance(8);
      i021.\u0275\u0275property("disabled", loginForm_r2.invalid);
    }
  }, dependencies: [FormsModule9, i48.\u0275NgNoValidate, i48.NgSelectOption, i48.\u0275NgSelectMultipleOption, i48.DefaultValueAccessor, i48.NumberValueAccessor, i48.RangeValueAccessor, i48.CheckboxControlValueAccessor, i48.SelectControlValueAccessor, i48.SelectMultipleControlValueAccessor, i48.RadioControlValueAccessor, i48.NgControlStatus, i48.NgControlStatusGroup, i48.RequiredValidator, i48.MinLengthValidator, i48.MaxLengthValidator, i48.PatternValidator, i48.CheckboxRequiredValidator, i48.EmailValidator, i48.MinValidator, i48.MaxValidator, i48.NgModel, i48.NgModelGroup, i48.NgForm, RouterModule6, i18.RouterOutlet, i18.RouterLink, i18.RouterLinkActive, i18.\u0275EmptyOutletComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #f8f9fa;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.custom-card-style[_ngcontent-%COMP%] {\n  width: 450px;\n  background-color: #f8f9fa;\n}\n.forgot-password-link[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.forgot-password-link[_ngcontent-%COMP%]:hover {\n  color: #34495e;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i021.\u0275setClassMetadata(LoginComponent, [{
    type: Component12,
    args: [{ selector: "app-login", standalone: true, imports: [FormsModule9, RouterModule6], template: '  <div class="container d-flex justify-content-center align-items-center vh-100">\r\n    <div class="card p-5 shadow-lg rounded-3 custom-card-style">\r\n      <h2 class="text-center mb-4 text-primary">\u0110\u0103ng nh\u1EADp</h2>\r\n      <form #loginForm="ngForm">\r\n        <div class="mb-4">\r\n          <label for="phoneNumber" class="form-label">T\xEAn \u0111\u0103ng nh\u1EADp</label>\r\n          <div class="input-group">\r\n            <span class="input-group-text"><i class="bi bi-person-fill"></i></span>\r\n            <input\r\n              type="text"\r\n              class="form-control form-control-lg"\r\n              id="phoneNumber"\r\n              placeholder="Nh\u1EADp t\xEAn \u0111\u0103ng nh\u1EADp"\r\n              name="phoneNumber"\r\n              [(ngModel)]="username"\r\n              required\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class="mb-4">\r\n          <label for="password" class="form-label">M\u1EADt kh\u1EA9u</label>\r\n          <div class="input-group">\r\n            <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>\r\n            <input\r\n              type="password"\r\n              class="form-control form-control-lg"\r\n              id="password"\r\n              placeholder="Nh\u1EADp m\u1EADt kh\u1EA9u"\r\n              name="password"\r\n              [(ngModel)]="password"\r\n              required\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class="d-flex justify-content-between mb-4">\r\n          <div class="form-check">\r\n            <input\r\n              type="checkbox"\r\n              class="form-check-input"\r\n              id="rememberMe"\r\n            />\r\n            <label class="form-check-label" for="rememberMe"\r\n              >Nh\u1EDB t\xE0i kho\u1EA3n</label\r\n            >\r\n          </div>\r\n          <a href="#" class="text-muted forgot-password-link" (click)="forgotPassword($event)">Qu\xEAn m\u1EADt kh\u1EA9u?</a>\r\n        </div>\r\n        <button\r\n          type="submit"\r\n          class="btn btn-primary btn-lg w-100 bg-gradient-primary"\r\n          (click)="login()"\r\n          [disabled]="loginForm.invalid"\r\n        >\r\n          \u0110\u0103ng nh\u1EADp\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n', styles: ["/* src/app/components/login/login.component.scss */\n.container {\n  height: 100vh;\n  background-color: #f8f9fa;\n}\n.card {\n  border-radius: 10px;\n}\n.custom-card-style {\n  width: 450px;\n  background-color: #f8f9fa;\n}\n.forgot-password-link {\n  color: #6c757d;\n}\n.forgot-password-link:hover {\n  color: #34495e;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: i18.Router }, { type: UserService }, { type: TokenService }], { loginForm: [{
    type: ViewChild2,
    args: ["loginForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i021.\u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/components/login/login.component.ts", lineNumber: 15 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Flogin%2Flogin.component.ts%40LoginComponent";
  function LoginComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i021.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i021.\u0275\u0275replaceMetadata(LoginComponent, m.default, [i021, i48, i18, user_service_exports, token_service_exports], [FormsModule9, RouterModule6, Component12, ViewChild2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && LoginComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LoginComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/report/create-report/create-report.component.ts
import { CommonModule as CommonModule12 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { Component as Component13 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { FormsModule as FormsModule10 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import { RouterModule as RouterModule7 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import { RecaptchaModule } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/ng-recaptcha.js?v=e44b7f9a";
import * as i022 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i210 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i310 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i49 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import * as i56 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/ng-recaptcha.js?v=e44b7f9a";
function CreateReportComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i022.\u0275\u0275getCurrentView();
    i022.\u0275\u0275elementStart(0, "div", 8)(1, "label", 35);
    i022.\u0275\u0275text(2, "T\xEAn ch\u1EE7 t\xE0i kho\u1EA3n:");
    i022.\u0275\u0275elementEnd();
    i022.\u0275\u0275elementStart(3, "input", 36);
    i022.\u0275\u0275twoWayListener("ngModelChange", function CreateReportComponent_div_23_Template_input_ngModelChange_3_listener($event) {
      i022.\u0275\u0275restoreView(_r2);
      const ctx_r2 = i022.\u0275\u0275nextContext();
      i022.\u0275\u0275twoWayBindingSet(ctx_r2.accountHolderName, $event) || (ctx_r2.accountHolderName = $event);
      return i022.\u0275\u0275resetView($event);
    });
    i022.\u0275\u0275elementEnd();
    i022.\u0275\u0275elementStart(4, "label", 37);
    i022.\u0275\u0275text(5, "Ng\xE2n h\xE0ng:");
    i022.\u0275\u0275elementEnd();
    i022.\u0275\u0275elementStart(6, "input", 38);
    i022.\u0275\u0275twoWayListener("ngModelChange", function CreateReportComponent_div_23_Template_input_ngModelChange_6_listener($event) {
      i022.\u0275\u0275restoreView(_r2);
      const ctx_r2 = i022.\u0275\u0275nextContext();
      i022.\u0275\u0275twoWayBindingSet(ctx_r2.bankName, $event) || (ctx_r2.bankName = $event);
      return i022.\u0275\u0275resetView($event);
    });
    i022.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = i022.\u0275\u0275nextContext();
    i022.\u0275\u0275advance(3);
    i022.\u0275\u0275twoWayProperty("ngModel", ctx_r2.accountHolderName);
    i022.\u0275\u0275advance(3);
    i022.\u0275\u0275twoWayProperty("ngModel", ctx_r2.bankName);
  }
}
function CreateReportComponent_div_36_li_4_Template(rf, ctx) {
  if (rf & 1) {
    i022.\u0275\u0275elementStart(0, "li");
    i022.\u0275\u0275text(1);
    i022.\u0275\u0275pipe(2, "number");
    i022.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    i022.\u0275\u0275advance();
    i022.\u0275\u0275textInterpolate2("", f_r4.name, " (", i022.\u0275\u0275pipeBind1(2, 2, f_r4.size), " bytes)");
  }
}
function CreateReportComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    i022.\u0275\u0275elementStart(0, "div", 8)(1, "label");
    i022.\u0275\u0275text(2, "C\xE1c t\u1EC7p \u0111\xE3 ch\u1ECDn:");
    i022.\u0275\u0275elementEnd();
    i022.\u0275\u0275elementStart(3, "ul");
    i022.\u0275\u0275template(4, CreateReportComponent_div_36_li_4_Template, 3, 4, "li", 39);
    i022.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = i022.\u0275\u0275nextContext();
    i022.\u0275\u0275advance(4);
    i022.\u0275\u0275property("ngForOf", ctx_r2.selectedFiles);
  }
}
function CreateReportComponent_app_chat_box_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = i022.\u0275\u0275getCurrentView();
    i022.\u0275\u0275elementStart(0, "app-chat-box", 40);
    i022.\u0275\u0275listener("close", function CreateReportComponent_app_chat_box_81_Template_app_chat_box_close_0_listener() {
      i022.\u0275\u0275restoreView(_r5);
      const ctx_r2 = i022.\u0275\u0275nextContext();
      return i022.\u0275\u0275resetView(ctx_r2.closeChatbox());
    });
    i022.\u0275\u0275elementEnd();
  }
}
var CreateReportComponent = class _CreateReportComponent {
  reportService;
  router;
  info = "";
  type = 1;
  emailAuthorReport = "";
  reason = "";
  infoDescription = "";
  accountHolderName = "";
  bankName = "";
  showChatbox = false;
  // >> Bổ sung: Thêm thuộc tính pageToReport
  pageToReport = "";
  // >> Bổ sung: Thêm thuộc tính agreeTerms cho checkbox
  agreeTerms = false;
  selectedFiles = [];
  captchaToken = "";
  constructor(reportService, router) {
    this.reportService = reportService;
    this.router = router;
  }
  ngOnInit() {
  }
  onFileSelect(event) {
    const input = event.target;
    this.selectedFiles = input.files ? Array.from(input.files) : [];
  }
  handleCaptchaResponse(token) {
    this.captchaToken = token ?? "";
  }
  createReport() {
    if (!this.captchaToken) {
      alert("Vui l\xF2ng ho\xE0n th\xE0nh CAPTCHA");
      return;
    }
    const info2 = this.type === 2 ? this.accountHolderName : void 0;
    const info3 = this.type === 2 ? this.bankName : void 0;
    const reportDTO = {
      info: this.info,
      pageToReport: this.pageToReport,
      // << Thêm trường này
      emailAuthorReport: this.emailAuthorReport,
      type: this.type,
      reason: this.reason,
      infoDescription: this.infoDescription,
      captchaToken: this.captchaToken,
      info2,
      info3
      // Bạn có thể không cần gửi agreeTerms lên backend, tùy yêu cầu
      // agreeTerms: this.agreeTerms
    };
    this.reportService.createReport(reportDTO).subscribe({
      next: (res) => {
        alert("G\u1EEDi th\xF4ng tin b\xE1o c\xE1o th\xE0nh c\xF4ng!");
        const reportId = res.data?.id ?? res.id;
        if (!reportId) {
          alert("Kh\xF4ng nh\u1EADn \u0111\u01B0\u1EE3c ID b\xE1o c\xE1o t\u1EEB server.");
          return;
        }
        if (this.selectedFiles.length) {
          this.uploadFiles(reportId);
        } else {
          this.router.navigate(["/bao-cao-thanh-cong"]);
        }
      },
      error: (err) => {
        console.error("L\u1ED7i khi t\u1EA1o b\xE1o c\xE1o:", err);
        alert(`L\u1ED7i: ${err.error?.message || err.message}`);
      }
    });
  }
  uploadFiles(reportId) {
    const formData = new FormData();
    this.selectedFiles.forEach((f) => formData.append("files", f, f.name));
    this.reportService.uploadFiles(reportId, formData).subscribe({
      next: () => {
        alert("T\u1EA3i l\xEAn t\u1EC7p th\xE0nh c\xF4ng!");
        this.router.navigate(["/bao-cao-thanh-cong"]);
      },
      error: (err) => {
        console.error("L\u1ED7i khi t\u1EA3i l\xEAn t\u1EC7p:", err);
        alert(`L\u1ED7i: ${err.error?.message || err.message}`);
        this.router.navigate(["/bao-cao-loi"]);
      }
    });
  }
  isFormInvalid() {
    const basicInvalid = !this.info || !this.reason || !this.pageToReport || !this.emailAuthorReport || !this.infoDescription;
    const extraInvalidForType2 = this.type === 2 && (!this.accountHolderName || !this.bankName);
    const captchaInvalid = !this.captchaToken;
    const termsNotAgreed = !this.agreeTerms;
    return basicInvalid || extraInvalidForType2 || captchaInvalid || termsNotAgreed;
  }
  // >> Bổ sung: Phương thức reset form sau khi gửi thành công/thất bại (tùy logic)
  resetForm() {
    this.info = "";
    this.type = 1;
    this.emailAuthorReport = "";
    this.reason = "";
    this.infoDescription = "";
    this.accountHolderName = "";
    this.bankName = "";
    this.pageToReport = "";
    this.agreeTerms = false;
    this.selectedFiles = [];
    this.captchaToken = "";
  }
  onAiTuVanClicked() {
    this.showChatbox = true;
  }
  closeChatbox() {
    this.showChatbox = false;
  }
  static \u0275fac = function CreateReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateReportComponent)(i022.\u0275\u0275directiveInject(ReportService), i022.\u0275\u0275directiveInject(i210.Router));
  };
  static \u0275cmp = /* @__PURE__ */ i022.\u0275\u0275defineComponent({ type: _CreateReportComponent, selectors: [["app-create-report"]], decls: 83, vars: 11, consts: [["reportForm", "ngForm"], ["infoCtrl", "ngModel"], [3, "aiTuVanClicked"], [1, "report-page-container"], [1, "two-column-layout"], [1, "left-column"], ["novalidate", "", 1, "report-form", 3, "ngSubmit"], [1, "info-box-title"], [1, "form-group"], ["for", "info"], ["id", "info", "type", "text", "name", "info", "placeholder", "Nh\u1EADp s\u1ED1 th\xF4ng tin nghi ng\u1EDD", "required", "", 3, "ngModelChange", "ngModel"], ["for", "type"], ["id", "type", "name", "type", "required", "", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["class", "form-group", 4, "ngIf"], ["for", "email"], ["id", "email", "type", "email", "name", "emailAuthorReport", "placeholder", "Nh\u1EADp email", "required", "", 3, "ngModelChange", "ngModel"], ["for", "description"], ["id", "description", "name", "infoDescription", "rows", "5", "required", "", "placeholder", "M\xF4 t\u1EA3 chi ti\u1EBFt v\u1EC1 v\u1EE5 vi\u1EC7c", 3, "ngModelChange", "ngModel"], ["for", "files"], ["id", "files", "type", "file", "accept", "image/*", "multiple", "", 3, "change"], ["siteKey", "6LfG6TArAAAAAD3M_YLwgUHuC6QPL7I7ATnWE4Xl", 3, "resolved"], ["type", "submit", 1, "submit-button", 3, "disabled"], [1, "right-column"], [1, "info-box"], [1, "info-section"], [1, "section-title"], [1, "info-icon", "warning"], [1, "highlight-text"], [1, "info-icon", "info"], [1, "reference-links"], ["href", "https://chongluadao.vn/", "target", "_blank"], [1, "link-icon"], ["href", "https://tinnhiemmang.vn/", "target", "_blank"], [3, "close", 4, "ngIf"], ["for", "accountHolderName"], ["id", "accountHolderName", "name", "accountHolderName", "type", "text", 3, "ngModelChange", "ngModel"], ["for", "bankName"], ["id", "bankName", "name", "bankName", "type", "text", 3, "ngModelChange", "ngModel"], [4, "ngFor", "ngForOf"], [3, "close"]], template: function CreateReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = i022.\u0275\u0275getCurrentView();
      i022.\u0275\u0275elementStart(0, "app-header", 2);
      i022.\u0275\u0275listener("aiTuVanClicked", function CreateReportComponent_Template_app_header_aiTuVanClicked_0_listener() {
        i022.\u0275\u0275restoreView(_r1);
        return i022.\u0275\u0275resetView(ctx.onAiTuVanClicked());
      });
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "form", 6, 0);
      i022.\u0275\u0275listener("ngSubmit", function CreateReportComponent_Template_form_ngSubmit_4_listener() {
        i022.\u0275\u0275restoreView(_r1);
        return i022.\u0275\u0275resetView(ctx.createReport());
      });
      i022.\u0275\u0275elementStart(6, "h3", 7);
      i022.\u0275\u0275text(7, "B\xC1O C\xC1O L\u1EEAA \u0110\u1EA2O");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(8, "div", 8)(9, "label", 9);
      i022.\u0275\u0275text(10, "Th\xF4ng tin li\xEAn quan:");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(11, "input", 10, 1);
      i022.\u0275\u0275twoWayListener("ngModelChange", function CreateReportComponent_Template_input_ngModelChange_11_listener($event) {
        i022.\u0275\u0275restoreView(_r1);
        i022.\u0275\u0275twoWayBindingSet(ctx.info, $event) || (ctx.info = $event);
        return i022.\u0275\u0275resetView($event);
      });
      i022.\u0275\u0275elementEnd()();
      i022.\u0275\u0275elementStart(13, "div", 8)(14, "label", 11);
      i022.\u0275\u0275text(15, "Lo\u1EA1i th\xF4ng tin:");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(16, "select", 12);
      i022.\u0275\u0275twoWayListener("ngModelChange", function CreateReportComponent_Template_select_ngModelChange_16_listener($event) {
        i022.\u0275\u0275restoreView(_r1);
        i022.\u0275\u0275twoWayBindingSet(ctx.type, $event) || (ctx.type = $event);
        return i022.\u0275\u0275resetView($event);
      });
      i022.\u0275\u0275elementStart(17, "option", 13);
      i022.\u0275\u0275text(18, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(19, "option", 13);
      i022.\u0275\u0275text(20, "S\u1ED1 t\xE0i kho\u1EA3n");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(21, "option", 13);
      i022.\u0275\u0275text(22, "URL");
      i022.\u0275\u0275elementEnd()()();
      i022.\u0275\u0275template(23, CreateReportComponent_div_23_Template, 7, 2, "div", 14);
      i022.\u0275\u0275elementStart(24, "div", 8)(25, "label", 15);
      i022.\u0275\u0275text(26, "Email ng\u01B0\u1EDDi b\xE1o c\xE1o");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(27, "input", 16);
      i022.\u0275\u0275twoWayListener("ngModelChange", function CreateReportComponent_Template_input_ngModelChange_27_listener($event) {
        i022.\u0275\u0275restoreView(_r1);
        i022.\u0275\u0275twoWayBindingSet(ctx.emailAuthorReport, $event) || (ctx.emailAuthorReport = $event);
        return i022.\u0275\u0275resetView($event);
      });
      i022.\u0275\u0275elementEnd()();
      i022.\u0275\u0275elementStart(28, "div", 8)(29, "label", 17);
      i022.\u0275\u0275text(30, "M\xF4 t\u1EA3 chi ti\u1EBFt:");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(31, "textarea", 18);
      i022.\u0275\u0275twoWayListener("ngModelChange", function CreateReportComponent_Template_textarea_ngModelChange_31_listener($event) {
        i022.\u0275\u0275restoreView(_r1);
        i022.\u0275\u0275twoWayBindingSet(ctx.infoDescription, $event) || (ctx.infoDescription = $event);
        return i022.\u0275\u0275resetView($event);
      });
      i022.\u0275\u0275elementEnd()();
      i022.\u0275\u0275elementStart(32, "div", 8)(33, "label", 19);
      i022.\u0275\u0275text(34, "T\xE0i li\u1EC7u \u0111\xEDnh k\xE8m (PNG, JPG, GIF):");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(35, "input", 20);
      i022.\u0275\u0275listener("change", function CreateReportComponent_Template_input_change_35_listener($event) {
        i022.\u0275\u0275restoreView(_r1);
        return i022.\u0275\u0275resetView(ctx.onFileSelect($event));
      });
      i022.\u0275\u0275elementEnd()();
      i022.\u0275\u0275template(36, CreateReportComponent_div_36_Template, 5, 1, "div", 14);
      i022.\u0275\u0275elementStart(37, "div", 8)(38, "re-captcha", 21);
      i022.\u0275\u0275listener("resolved", function CreateReportComponent_Template_re_captcha_resolved_38_listener($event) {
        i022.\u0275\u0275restoreView(_r1);
        return i022.\u0275\u0275resetView(ctx.handleCaptchaResponse($event));
      });
      i022.\u0275\u0275elementEnd()();
      i022.\u0275\u0275elementStart(39, "button", 22);
      i022.\u0275\u0275text(40, " G\u1EEDi B\xE1o C\xE1o ");
      i022.\u0275\u0275elementEnd()()();
      i022.\u0275\u0275elementStart(41, "div", 23)(42, "div", 24)(43, "div", 25)(44, "h4", 26)(45, "i", 27);
      i022.\u0275\u0275text(46, "!");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275text(47, " Ch\xFA \xFD");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(48, "p");
      i022.\u0275\u0275text(49, "Th\xF4ng B\xE1o v\u1EC1 Vi\u1EC7c B\xE1o C\xE1o c\xE1c Trang Web C\xE1 \u0110\u1ED9, C\u1EDD B\u1EA1c, 18+,...");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(50, "p");
      i022.\u0275\u0275text(51, "Theo \u0111\xE1nh gi\xE1 v\xE0 th\u1ED1ng k\xEA t\u1EEB c\u1ED9ng \u0111\u1ED3ng, c\xE1c trang web c\xF3 n\u1ED9i dung 18+, c\xE1 \u0111\u1ED9 b\xF3ng \u0111\xE1, c\u1EDD b\u1EA1c tr\u1EF1c tuy\u1EBFn \u0111\u1EC1u vi ph\u1EA1m ph\xE1p lu\u1EADt Vi\u1EC7t Nam v\u1EDBi m\u1EE9c \u0111\u1ED9 100%.");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(52, "p", 28)(53, "i", 27);
      i022.\u0275\u0275text(54, "!");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275text(55, " V\xEC v\u1EADy, b\u1EA1n ");
      i022.\u0275\u0275elementStart(56, "strong");
      i022.\u0275\u0275text(57, "KH\xD4NG C\u1EA6N");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275text(58, " ph\u1EA3i g\u1EEDi b\xE1o c\xE1o c\xE1c trang web d\u1EA1ng n\xE0y l\xEAn h\u1EC7 th\u1ED1ng c\u1EE7a ch\xFAng t\xF4i.");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(59, "p");
      i022.\u0275\u0275text(60, "Ch\xFAng t\xF4i lu\xF4n tr\xE2n tr\u1ECDng \u0111\xF3ng g\xF3p qu\xFD b\xE1u t\u1EEB c\u1ED9ng \u0111\u1ED3ng. Vi\u1EC7c kh\xF4ng c\u1EA7n b\xE1o c\xE1o nh\u1EEFng trang vi ph\u1EA1m ph\xE1p lu\u1EADt r\xF5 r\xE0ng gi\xFAp ch\xFAng t\xF4i t\u1EADp trung ngu\u1ED3n l\u1EF1c v\xE0o vi\u1EC7c x\u1EED l\xFD c\xE1c trang web l\u1EEBa \u0111\u1EA3o tinh vi v\xE0 g\xE2y h\u1EA1i \u0111\u1EBFn ng\u01B0\u1EDDi d\xF9ng.");
      i022.\u0275\u0275elementEnd()();
      i022.\u0275\u0275elementStart(61, "div", 25)(62, "h4", 26)(63, "i", 29);
      i022.\u0275\u0275text(64, "i");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275text(65, " Th\xF4ng tin quan tr\u1ECDng");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(66, "p");
      i022.\u0275\u0275text(67, "Tr\u01B0\u1EDBc khi b\xE1o c\xE1o, vui l\xF2ng ki\u1EC3m tra th\xF4ng tin tr\xEAn h\u1EC7 th\u1ED1ng c\u1EE7a ch\xFAng t\xF4i. N\u1EBFu kh\xF4ng c\xF3, h\xE3y theo c\xE1c b\u01B0\u1EDBc \u0111\u1EC3 b\xE1o c\xE1o. CheckScam s\u1EBD x\xE9t duy\u1EC7t k\u1EF9 l\u01B0\u1EE1ng v\xE0 quy\u1EBFt \u0111\u1ECBnh cu\u1ED1i c\xF9ng.");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(68, "p");
      i022.\u0275\u0275text(69, "Ngo\xE0i ra b\u1EA1n c\xF3 th\u1EC3 tham kh\u1EA3o th\xF4ng tin h\u1EEFu \xEDch kh\xE1c:");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(70, "ul", 30)(71, "li")(72, "a", 31);
      i022.\u0275\u0275text(73, "Ch\u1ED1ng l\u1EEBa \u0111\u1EA3o");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(74, "i", 32);
      i022.\u0275\u0275text(75, "\u2197");
      i022.\u0275\u0275elementEnd()();
      i022.\u0275\u0275elementStart(76, "li")(77, "a", 33);
      i022.\u0275\u0275text(78, "T\xEDn nhi\u1EC7m m\u1EA1ng");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(79, "i", 32);
      i022.\u0275\u0275text(80, "\u2197");
      i022.\u0275\u0275elementEnd()()()()()()()();
      i022.\u0275\u0275template(81, CreateReportComponent_app_chat_box_81_Template, 1, 0, "app-chat-box", 34);
      i022.\u0275\u0275element(82, "app-footer");
    }
    if (rf & 2) {
      const reportForm_r6 = i022.\u0275\u0275reference(5);
      i022.\u0275\u0275advance(11);
      i022.\u0275\u0275twoWayProperty("ngModel", ctx.info);
      i022.\u0275\u0275advance(5);
      i022.\u0275\u0275twoWayProperty("ngModel", ctx.type);
      i022.\u0275\u0275advance();
      i022.\u0275\u0275property("ngValue", 1);
      i022.\u0275\u0275advance(2);
      i022.\u0275\u0275property("ngValue", 2);
      i022.\u0275\u0275advance(2);
      i022.\u0275\u0275property("ngValue", 3);
      i022.\u0275\u0275advance(2);
      i022.\u0275\u0275property("ngIf", ctx.type === 2);
      i022.\u0275\u0275advance(4);
      i022.\u0275\u0275twoWayProperty("ngModel", ctx.emailAuthorReport);
      i022.\u0275\u0275advance(4);
      i022.\u0275\u0275twoWayProperty("ngModel", ctx.infoDescription);
      i022.\u0275\u0275advance(5);
      i022.\u0275\u0275property("ngIf", ctx.selectedFiles.length);
      i022.\u0275\u0275advance(3);
      i022.\u0275\u0275property("disabled", reportForm_r6.invalid || !ctx.captchaToken);
      i022.\u0275\u0275advance(42);
      i022.\u0275\u0275property("ngIf", ctx.showChatbox);
    }
  }, dependencies: [CommonModule12, i310.NgClass, i310.NgComponentOutlet, i310.NgForOf, i310.NgIf, i310.NgTemplateOutlet, i310.NgStyle, i310.NgSwitch, i310.NgSwitchCase, i310.NgSwitchDefault, i310.NgPlural, i310.NgPluralCase, i310.AsyncPipe, i310.UpperCasePipe, i310.LowerCasePipe, i310.JsonPipe, i310.SlicePipe, i310.DecimalPipe, i310.PercentPipe, i310.TitleCasePipe, i310.CurrencyPipe, i310.DatePipe, i310.I18nPluralPipe, i310.I18nSelectPipe, i310.KeyValuePipe, RouterModule7, i210.RouterOutlet, i210.RouterLink, i210.RouterLinkActive, i210.\u0275EmptyOutletComponent, FormsModule10, i49.\u0275NgNoValidate, i49.NgSelectOption, i49.\u0275NgSelectMultipleOption, i49.DefaultValueAccessor, i49.NumberValueAccessor, i49.RangeValueAccessor, i49.CheckboxControlValueAccessor, i49.SelectControlValueAccessor, i49.SelectMultipleControlValueAccessor, i49.RadioControlValueAccessor, i49.NgControlStatus, i49.NgControlStatusGroup, i49.RequiredValidator, i49.MinLengthValidator, i49.MaxLengthValidator, i49.PatternValidator, i49.CheckboxRequiredValidator, i49.EmailValidator, i49.MinValidator, i49.MaxValidator, i49.NgModel, i49.NgModelGroup, i49.NgForm, RecaptchaModule, i56.RecaptchaComponent, FooterComponent, HeaderComponent, ChatBoxComponent], styles: ['@charset "UTF-8";\n\n\n\n.report-page-container[_ngcontent-%COMP%] {\n  padding-top: 70px;\n  background-color: #f8f9fa;\n  min-height: calc(100vh - 70px - 50px);\n}\n.two-column-layout[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1100px;\n  margin: 0 auto;\n  gap: 30px;\n  padding: 0 15px;\n  flex-wrap: wrap;\n  align-items: stretch;\n}\n.left-column[_ngcontent-%COMP%] {\n  flex-basis: 60%;\n  flex-grow: 1;\n  min-width: 300px;\n}\n@media (max-width: 768px) {\n  .left-column[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n}\n.right-column[_ngcontent-%COMP%] {\n  flex-basis: 35%;\n  flex-grow: 1;\n  min-width: 250px;\n}\n@media (max-width: 768px) {\n  .right-column[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n}\n.report-form[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n.report-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #333;\n  margin-bottom: 20px;\n  font-size: 1.8em;\n}\n.report-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.report-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n  color: #555;\n}\n.report-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.report-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], \n.report-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.report-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1em;\n  box-sizing: border-box;\n}\n.report-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.report-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.report-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.report-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline;\n  font-weight: normal;\n  color: #333;\n}\n.report-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n}\n.report-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.report-form[_ngcontent-%COMP%]   .captcha-placeholder[_ngcontent-%COMP%] {\n  border: 1px dashed #ccc;\n  padding: 15px;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  color: #777;\n}\n.report-form[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 12px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-size: 1.1em;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  margin-top: 20px;\n}\n.report-form[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]:hover {\n  background-color: rgb(30.1449275362, 125.8550724638, 52);\n}\n.report-form[_ngcontent-%COMP%]   .btn[routerLink="/chatbot"][_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n  padding: 12px;\n  background-color: #6c757d;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-size: 1.1em;\n  font-weight: bold;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background-color 0.3s ease;\n}\n.report-form[_ngcontent-%COMP%]   .btn[routerLink="/chatbot"][_ngcontent-%COMP%]:hover {\n  background-color: rgb(84.3605150215, 91.3905579399, 97.6394849785);\n}\n.info-box-title[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #d9534f;\n  margin-top: 0;\n  margin-bottom: 20px;\n  font-size: 1.5em;\n  font-weight: bold;\n}\n.info-box[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #0275d8;\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 1.2em;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 1.1em;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .info-icon.warning[_ngcontent-%COMP%] {\n  color: #f0ad4e;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .info-icon.info[_ngcontent-%COMP%] {\n  color: #0275d8;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 10px;\n  line-height: 1.6;\n  color: #333;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   p.highlight-text[_ngcontent-%COMP%] {\n  color: #d9534f;\n  font-weight: bold;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .reference-links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .reference-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .reference-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .reference-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.info-box[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .reference-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 0.9em;\n  color: #555;\n}\n/*# sourceMappingURL=create-report.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i022.\u0275setClassMetadata(CreateReportComponent, [{
    type: Component13,
    args: [{ selector: "app-create-report", standalone: true, imports: [CommonModule12, RouterModule7, FormsModule10, RecaptchaModule, FooterComponent, HeaderComponent, ChatBoxComponent], template: '<app-header (aiTuVanClicked)="onAiTuVanClicked()"></app-header>\r\n\r\n<div class="report-page-container">\r\n  <div class="two-column-layout">\r\n\r\n    <!-- ========== LEFT COLUMN ========= -->\r\n    <div class="left-column">\r\n      <form class="report-form" #reportForm="ngForm" (ngSubmit)="createReport()" novalidate>\r\n        <h3 class="info-box-title">B\xC1O C\xC1O L\u1EEAA \u0110\u1EA2O</h3>\r\n\r\n        <!-- Th\xF4ng tin li\xEAn quan -->\r\n        <div class="form-group">\r\n          <label for="info">Th\xF4ng tin li\xEAn quan:</label>\r\n          <input\r\n            id="info"\r\n            type="text"\r\n            name="info"\r\n            placeholder="Nh\u1EADp s\u1ED1 th\xF4ng tin nghi ng\u1EDD"\r\n            required\r\n            [(ngModel)]="info"\r\n            #infoCtrl="ngModel"\r\n          />\r\n        </div>\r\n\r\n        <!-- Lo\u1EA1i th\xF4ng tin + Ng\xE2n h\xE0ng (ch\u1EC9 hi\u1EC3n th\u1ECB khi l\xE0 STK) -->\r\n        <div class="form-group">\r\n          <label for="type">Lo\u1EA1i th\xF4ng tin:</label>\r\n          <select id="type" name="type" required [(ngModel)]="type">\r\n            <option [ngValue]="1">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</option>\r\n            <option [ngValue]="2">S\u1ED1 t\xE0i kho\u1EA3n</option>\r\n            <option [ngValue]="3">URL</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class="form-group" *ngIf="type === 2">\r\n          <label for="accountHolderName">T\xEAn ch\u1EE7 t\xE0i kho\u1EA3n:</label>\r\n          <input id="accountHolderName" name="accountHolderName" type="text" [(ngModel)]="accountHolderName" />\r\n\r\n          <label for="bankName">Ng\xE2n h\xE0ng:</label>\r\n          <input id="bankName" name="bankName" type="text" [(ngModel)]="bankName" />\r\n        </div>\r\n\r\n        <!-- Email -->\r\n        <div class="form-group">\r\n          <label for="email">Email ng\u01B0\u1EDDi b\xE1o c\xE1o</label>\r\n          <input\r\n            id="email"\r\n            type="email"\r\n            name="emailAuthorReport"\r\n            placeholder="Nh\u1EADp email"\r\n            required\r\n            [(ngModel)]="emailAuthorReport"\r\n          />\r\n        </div>\r\n\r\n        <!-- M\xF4 t\u1EA3 -->\r\n        <div class="form-group">\r\n          <label for="description">M\xF4 t\u1EA3 chi ti\u1EBFt:</label>\r\n          <textarea\r\n            id="description"\r\n            name="infoDescription"\r\n            rows="5"\r\n            required\r\n            placeholder="M\xF4 t\u1EA3 chi ti\u1EBFt v\u1EC1 v\u1EE5 vi\u1EC7c"\r\n            [(ngModel)]="infoDescription"\r\n          ></textarea>\r\n        </div>\r\n\r\n        <!-- File upload -->\r\n        <div class="form-group">\r\n          <label for="files">T\xE0i li\u1EC7u \u0111\xEDnh k\xE8m (PNG, JPG, GIF):</label>\r\n          <input id="files" type="file" accept="image/*" multiple (change)="onFileSelect($event)" />\r\n        </div>\r\n\r\n        <div class="form-group" *ngIf="selectedFiles.length">\r\n          <label>C\xE1c t\u1EC7p \u0111\xE3 ch\u1ECDn:</label>\r\n          <ul>\r\n            <li *ngFor="let f of selectedFiles">{{ f.name }} ({{ f.size | number }} bytes)</li>\r\n          </ul>\r\n        </div>\r\n\r\n        <!-- Captcha -->\r\n        <div class="form-group">\r\n          <re-captcha siteKey="6LfG6TArAAAAAD3M_YLwgUHuC6QPL7I7ATnWE4Xl" (resolved)="handleCaptchaResponse($event)"></re-captcha>\r\n        </div>\r\n\r\n        <button class="submit-button" type="submit" [disabled]="reportForm.invalid || !captchaToken">\r\n          G\u1EEDi B\xE1o C\xE1o\r\n        </button>\r\n      </form>\r\n    </div>\r\n\r\n    <!-- ========== RIGHT COLUMN ========= -->\r\n    <div class="right-column">\r\n      <div class="info-box">\r\n        <div class="info-section">\r\n          <h4 class="section-title"><i class="info-icon warning">!</i> Ch\xFA \xFD</h4>\r\n          <p>Th\xF4ng B\xE1o v\u1EC1 Vi\u1EC7c B\xE1o C\xE1o c\xE1c Trang Web C\xE1 \u0110\u1ED9, C\u1EDD B\u1EA1c, 18+,...</p>\r\n          <p>Theo \u0111\xE1nh gi\xE1 v\xE0 th\u1ED1ng k\xEA t\u1EEB c\u1ED9ng \u0111\u1ED3ng, c\xE1c trang web c\xF3 n\u1ED9i dung 18+, c\xE1 \u0111\u1ED9 b\xF3ng \u0111\xE1, c\u1EDD b\u1EA1c tr\u1EF1c tuy\u1EBFn \u0111\u1EC1u vi ph\u1EA1m ph\xE1p lu\u1EADt Vi\u1EC7t Nam v\u1EDBi m\u1EE9c \u0111\u1ED9 100%.</p>\r\n          <p class="highlight-text"><i class="info-icon warning">!</i> V\xEC v\u1EADy, b\u1EA1n <strong>KH\xD4NG C\u1EA6N</strong> ph\u1EA3i g\u1EEDi b\xE1o c\xE1o c\xE1c trang web d\u1EA1ng n\xE0y l\xEAn h\u1EC7 th\u1ED1ng c\u1EE7a ch\xFAng t\xF4i.</p>\r\n          <p>Ch\xFAng t\xF4i lu\xF4n tr\xE2n tr\u1ECDng \u0111\xF3ng g\xF3p qu\xFD b\xE1u t\u1EEB c\u1ED9ng \u0111\u1ED3ng. Vi\u1EC7c kh\xF4ng c\u1EA7n b\xE1o c\xE1o nh\u1EEFng trang vi ph\u1EA1m ph\xE1p lu\u1EADt r\xF5 r\xE0ng gi\xFAp ch\xFAng t\xF4i t\u1EADp trung ngu\u1ED3n l\u1EF1c v\xE0o vi\u1EC7c x\u1EED l\xFD c\xE1c trang web l\u1EEBa \u0111\u1EA3o tinh vi v\xE0 g\xE2y h\u1EA1i \u0111\u1EBFn ng\u01B0\u1EDDi d\xF9ng.</p>\r\n        </div>\r\n\r\n        <div class="info-section">\r\n          <h4 class="section-title"><i class="info-icon info">i</i> Th\xF4ng tin quan tr\u1ECDng</h4>\r\n          <p>Tr\u01B0\u1EDBc khi b\xE1o c\xE1o, vui l\xF2ng ki\u1EC3m tra th\xF4ng tin tr\xEAn h\u1EC7 th\u1ED1ng c\u1EE7a ch\xFAng t\xF4i. N\u1EBFu kh\xF4ng c\xF3, h\xE3y theo c\xE1c b\u01B0\u1EDBc \u0111\u1EC3 b\xE1o c\xE1o. CheckScam s\u1EBD x\xE9t duy\u1EC7t k\u1EF9 l\u01B0\u1EE1ng v\xE0 quy\u1EBFt \u0111\u1ECBnh cu\u1ED1i c\xF9ng.</p>\r\n          <p>Ngo\xE0i ra b\u1EA1n c\xF3 th\u1EC3 tham kh\u1EA3o th\xF4ng tin h\u1EEFu \xEDch kh\xE1c:</p>\r\n          <ul class="reference-links">\r\n            <li><a href="https://chongluadao.vn/" target="_blank">Ch\u1ED1ng l\u1EEBa \u0111\u1EA3o</a> <i class="link-icon">\u2197</i></li>\r\n            <li><a href="https://tinnhiemmang.vn/" target="_blank">T\xEDn nhi\u1EC7m m\u1EA1ng</a> <i class="link-icon">\u2197</i></li>\r\n            <!-- <li><a href="https://khonggianmang.vn/" target="_blank">Kh\xF4ng gian m\u1EA1ng</a> <i class="link-icon">\u2197</i></li> -->\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<app-chat-box *ngIf="showChatbox" (close)="closeChatbox()"></app-chat-box>\r\n<app-footer></app-footer>\r\n', styles: ['@charset "UTF-8";\n\n/* src/app/components/report/create-report/create-report.component.scss */\n.report-page-container {\n  padding-top: 70px;\n  background-color: #f8f9fa;\n  min-height: calc(100vh - 70px - 50px);\n}\n.two-column-layout {\n  display: flex;\n  max-width: 1100px;\n  margin: 0 auto;\n  gap: 30px;\n  padding: 0 15px;\n  flex-wrap: wrap;\n  align-items: stretch;\n}\n.left-column {\n  flex-basis: 60%;\n  flex-grow: 1;\n  min-width: 300px;\n}\n@media (max-width: 768px) {\n  .left-column {\n    flex-basis: 100%;\n  }\n}\n.right-column {\n  flex-basis: 35%;\n  flex-grow: 1;\n  min-width: 250px;\n}\n@media (max-width: 768px) {\n  .right-column {\n    flex-basis: 100%;\n  }\n}\n.report-form {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n.report-form h2 {\n  text-align: center;\n  color: #333;\n  margin-bottom: 20px;\n  font-size: 1.8em;\n}\n.report-form .form-group {\n  margin-bottom: 15px;\n}\n.report-form .form-group label {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n  color: #555;\n}\n.report-form .form-group input[type=text],\n.report-form .form-group input[type=email],\n.report-form .form-group select,\n.report-form .form-group textarea {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1em;\n  box-sizing: border-box;\n}\n.report-form .form-group textarea {\n  resize: vertical;\n}\n.report-form .form-group .checkbox-group {\n  display: flex;\n  align-items: center;\n}\n.report-form .form-group .checkbox-group input[type=checkbox] {\n  margin-right: 10px;\n}\n.report-form .form-group .checkbox-group label {\n  display: inline;\n  font-weight: normal;\n  color: #333;\n}\n.report-form .form-group .checkbox-group label a {\n  color: #007bff;\n  text-decoration: none;\n}\n.report-form .form-group .checkbox-group label a:hover {\n  text-decoration: underline;\n}\n.report-form .captcha-placeholder {\n  border: 1px dashed #ccc;\n  padding: 15px;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  color: #777;\n}\n.report-form .submit-button {\n  display: block;\n  width: 100%;\n  padding: 12px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-size: 1.1em;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  margin-top: 20px;\n}\n.report-form .submit-button:hover {\n  background-color: rgb(30.1449275362, 125.8550724638, 52);\n}\n.report-form .btn[routerLink="/chatbot"] {\n  display: block;\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n  padding: 12px;\n  background-color: #6c757d;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-size: 1.1em;\n  font-weight: bold;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background-color 0.3s ease;\n}\n.report-form .btn[routerLink="/chatbot"]:hover {\n  background-color: rgb(84.3605150215, 91.3905579399, 97.6394849785);\n}\n.info-box-title {\n  text-align: center;\n  color: #d9534f;\n  margin-top: 0;\n  margin-bottom: 20px;\n  font-size: 1.5em;\n  font-weight: bold;\n}\n.info-box {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.info-box .info-section {\n  margin-bottom: 20px;\n}\n.info-box .info-section .section-title {\n  color: #0275d8;\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 1.2em;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n}\n.info-box .info-section .section-title .info-icon {\n  margin-right: 8px;\n  font-size: 1.1em;\n}\n.info-box .info-section .section-title .info-icon.warning {\n  color: #f0ad4e;\n}\n.info-box .info-section .section-title .info-icon.info {\n  color: #0275d8;\n}\n.info-box .info-section p {\n  margin-top: 0;\n  margin-bottom: 10px;\n  line-height: 1.6;\n  color: #333;\n}\n.info-box .info-section p a {\n  color: #007bff;\n  text-decoration: none;\n}\n.info-box .info-section p a:hover {\n  text-decoration: underline;\n}\n.info-box .info-section p.highlight-text {\n  color: #d9534f;\n  font-weight: bold;\n}\n.info-box .info-section .reference-links {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.info-box .info-section .reference-links li {\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n}\n.info-box .info-section .reference-links li a {\n  color: #007bff;\n  text-decoration: none;\n}\n.info-box .info-section .reference-links li a:hover {\n  text-decoration: underline;\n}\n.info-box .info-section .reference-links li .link-icon {\n  margin-left: 8px;\n  font-size: 0.9em;\n  color: #555;\n}\n/*# sourceMappingURL=create-report.component.css.map */\n'] }]
  }], () => [{ type: ReportService }, { type: i210.Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i022.\u0275setClassDebugInfo(CreateReportComponent, { className: "CreateReportComponent", filePath: "src/app/components/report/create-report/create-report.component.ts", lineNumber: 23 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Freport%2Fcreate-report%2Fcreate-report.component.ts%40CreateReportComponent";
  function CreateReportComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i022.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i022.\u0275\u0275replaceMetadata(CreateReportComponent, m.default, [i022, i310, i210, i49, i56, report_service_exports], [CommonModule12, RouterModule7, FormsModule10, RecaptchaModule, FooterComponent, HeaderComponent, ChatBoxComponent, Component13], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && CreateReportComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && CreateReportComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/news/view-news/view-news.component.ts
import { CommonModule as CommonModule13 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { Component as Component14, HostListener as HostListener2 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { RouterModule as RouterModule8 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import { FontAwesomeModule } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@fortawesome_angular-fontawesome.js?v=e44b7f9a";
import { faFacebookF } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@fortawesome_free-brands-svg-icons.js?v=e44b7f9a";
import { faClock, faArrowLeft, faEnvelope } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@fortawesome_free-solid-svg-icons.js?v=e44b7f9a";
import * as i023 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i211 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i311 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i410 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@fortawesome_angular-fontawesome.js?v=e44b7f9a";
var _c04 = (a0) => ["/view-news", a0];
function ViewNewsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i023.\u0275\u0275getCurrentView();
    i023.\u0275\u0275elementStart(0, "div", 24)(1, "img", 25);
    i023.\u0275\u0275listener("click", function ViewNewsComponent_div_19_Template_img_click_1_listener() {
      i023.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i023.\u0275\u0275nextContext();
      return i023.\u0275\u0275resetView(ctx_r1.openImage(ctx_r1.getImageUrl(ctx_r1.attachmentDto[0])));
    })("error", function ViewNewsComponent_div_19_Template_img_error_1_listener($event) {
      i023.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i023.\u0275\u0275nextContext();
      return i023.\u0275\u0275resetView(ctx_r1.onImageError($event));
    });
    i023.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i023.\u0275\u0275nextContext();
    i023.\u0275\u0275advance();
    i023.\u0275\u0275property("src", ctx_r1.getImageUrl(ctx_r1.attachmentDto[0]), i023.\u0275\u0275sanitizeUrl)("alt", ctx_r1.getFileName(ctx_r1.attachmentDto[0]));
  }
}
function ViewNewsComponent_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i023.\u0275\u0275getCurrentView();
    i023.\u0275\u0275elementStart(0, "div", 29)(1, "img", 30);
    i023.\u0275\u0275listener("click", function ViewNewsComponent_div_21_div_4_Template_img_click_1_listener() {
      const attachment_r4 = i023.\u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = i023.\u0275\u0275nextContext(2);
      return i023.\u0275\u0275resetView(ctx_r1.openImage(ctx_r1.getImageUrl(attachment_r4)));
    })("error", function ViewNewsComponent_div_21_div_4_Template_img_error_1_listener($event) {
      i023.\u0275\u0275restoreView(_r3);
      const ctx_r1 = i023.\u0275\u0275nextContext(2);
      return i023.\u0275\u0275resetView(ctx_r1.onImageError($event));
    });
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(2, "p", 31);
    i023.\u0275\u0275text(3);
    i023.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attachment_r4 = ctx.$implicit;
    const ctx_r1 = i023.\u0275\u0275nextContext(2);
    i023.\u0275\u0275advance();
    i023.\u0275\u0275property("src", ctx_r1.getImageUrl(attachment_r4), i023.\u0275\u0275sanitizeUrl)("alt", ctx_r1.getFileName(attachment_r4));
    i023.\u0275\u0275advance(2);
    i023.\u0275\u0275textInterpolate(ctx_r1.getFileName(attachment_r4));
  }
}
function ViewNewsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    i023.\u0275\u0275elementStart(0, "div", 26)(1, "h3");
    i023.\u0275\u0275text(2, "H\xECnh \u1EA3nh kh\xE1c");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(3, "div", 27);
    i023.\u0275\u0275template(4, ViewNewsComponent_div_21_div_4_Template, 4, 3, "div", 28);
    i023.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i023.\u0275\u0275nextContext();
    i023.\u0275\u0275advance(4);
    i023.\u0275\u0275property("ngForOf", ctx_r1.attachmentDto.slice(1))("ngForTrackBy", ctx_r1.trackById);
  }
}
function ViewNewsComponent_li_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = i023.\u0275\u0275getCurrentView();
    i023.\u0275\u0275elementStart(0, "li")(1, "a", 32);
    i023.\u0275\u0275listener("click", function ViewNewsComponent_li_27_Template_a_click_1_listener() {
      const relatedNewsItem_r6 = i023.\u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = i023.\u0275\u0275nextContext();
      return i023.\u0275\u0275resetView(ctx_r1.loadNewsById(relatedNewsItem_r6.id));
    });
    i023.\u0275\u0275element(2, "img", 33);
    i023.\u0275\u0275elementStart(3, "div", 34)(4, "h4", 35);
    i023.\u0275\u0275text(5);
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(6, "p", 36);
    i023.\u0275\u0275text(7);
    i023.\u0275\u0275pipe(8, "date");
    i023.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const relatedNewsItem_r6 = ctx.$implicit;
    const ctx_r1 = i023.\u0275\u0275nextContext();
    i023.\u0275\u0275advance();
    i023.\u0275\u0275property("routerLink", i023.\u0275\u0275pureFunction1(8, _c04, relatedNewsItem_r6.id));
    i023.\u0275\u0275advance();
    i023.\u0275\u0275propertyInterpolate("alt", relatedNewsItem_r6.name);
    i023.\u0275\u0275property("src", ctx_r1.getImageUrlForRelated(relatedNewsItem_r6), i023.\u0275\u0275sanitizeUrl);
    i023.\u0275\u0275advance(3);
    i023.\u0275\u0275textInterpolate(relatedNewsItem_r6.name);
    i023.\u0275\u0275advance(2);
    i023.\u0275\u0275textInterpolate(i023.\u0275\u0275pipeBind2(8, 5, relatedNewsItem_r6.publishedDate, "M/d/yyyy"));
  }
}
function ViewNewsComponent_li_28_Template(rf, ctx) {
  if (rf & 1) {
    i023.\u0275\u0275elementStart(0, "li")(1, "p", 37);
    i023.\u0275\u0275text(2, "Kh\xF4ng c\xF3 tin t\u1EE9c li\xEAn quan.");
    i023.\u0275\u0275elementEnd()();
  }
}
function ViewNewsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = i023.\u0275\u0275getCurrentView();
    i023.\u0275\u0275elementStart(0, "div", 38);
    i023.\u0275\u0275listener("click", function ViewNewsComponent_div_29_Template_div_click_0_listener() {
      i023.\u0275\u0275restoreView(_r7);
      const ctx_r1 = i023.\u0275\u0275nextContext();
      return i023.\u0275\u0275resetView(ctx_r1.closeImage());
    });
    i023.\u0275\u0275element(1, "img", 39);
    i023.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i023.\u0275\u0275nextContext();
    i023.\u0275\u0275advance();
    i023.\u0275\u0275property("src", ctx_r1.selectedImageUrl, i023.\u0275\u0275sanitizeUrl);
  }
}
var ViewNewsComponent = class _ViewNewsComponent {
  newsService;
  route;
  location;
  router;
  post = {};
  // Khởi tạo để tránh lỗi undefined
  attachmentDto = [];
  selectedImageUrl = null;
  currentUrl = "";
  relatedNews = [];
  // Mảng để lưu trữ tin tức liên quan
  imageBaseUrl = "http://localhost:8080/api/v1/report/image/";
  constructor(newsService, route, location, router, library) {
    this.newsService = newsService;
    this.route = route;
    this.location = location;
    this.router = router;
    library.addIcons(faFacebookF, faClock, faArrowLeft, faEnvelope);
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const postId = Number(params.get("id"));
      if (postId) {
        this.loadNewsById(postId);
      }
    });
    this.currentUrl = window.location.href;
    this.loadRelatedNews();
  }
  loadNewsById(id) {
    this.newsService.getNewsById(id).subscribe({
      next: (res) => {
        console.log("attachments from API", res.attachments);
        this.post = res;
        this.attachmentDto = res.attachments ?? [];
        window.scrollTo(0, 0);
      },
      error: (err) => {
        alert(err?.error?.message || "L\u1ED7i khi t\u1EA3i b\xE0i vi\u1EBFt");
        console.error("L\u1ED7i khi t\u1EA3i b\xE0i vi\u1EBFt:", err);
      }
    });
  }
  loadRelatedNews() {
    this.newsService.getAllNews(0, 5).subscribe({
      next: (res) => {
        this.relatedNews = res.filter((newsItem) => newsItem.id !== this.post.id);
        this.relatedNews = this.relatedNews.slice(0, 5);
      },
      error: (err) => {
        console.error("L\u1ED7i khi t\u1EA3i tin t\u1EE9c li\xEAn quan:", err);
      }
    });
  }
  /* ---------- Helpers ---------- */
  getImageUrl(attachment) {
    if (!attachment.url) {
      return "assets/img/placeholder.png";
    }
    if (attachment.url.startsWith("http")) {
      return attachment.url;
    }
    const fileName = attachment.url.split("/").pop();
    return fileName ? `${this.imageBaseUrl}${encodeURIComponent(fileName)}` : "assets/img/placeholder.png";
  }
  // Sửa lỗi trong phương thức này: 'mainAttachment.url' is possibly 'null' or 'undefined'.
  getImageUrlForRelated(newsItem) {
    if (newsItem.attachments && newsItem.attachments.length > 0) {
      const mainAttachment = newsItem.attachments[0];
      if (mainAttachment && mainAttachment.url) {
        if (mainAttachment.url.startsWith("http")) {
          return mainAttachment.url;
        }
        const fileName = mainAttachment.url.split("/").pop();
        return fileName ? `${this.imageBaseUrl}${encodeURIComponent(fileName)}` : "assets/img/placeholder.png";
      }
    }
    return "assets/img/placeholder.png";
  }
  // Dùng `any` cho `item` trong `trackById` để linh hoạt với cả Post và AttachmentDto
  trackById(_, item) {
    return item.id;
  }
  getFileName(att) {
    return att.url?.split("/").pop() ?? "\u0110\xEDnh k\xE8m";
  }
  /* ---------- Navigation ---------- */
  goBack() {
    this.location.back();
  }
  /* ---------- Lightbox ---------- */
  openImage(url) {
    this.selectedImageUrl = url;
    document.body.style.overflow = "hidden";
  }
  closeImage() {
    this.selectedImageUrl = null;
    document.body.style.overflow = "";
  }
  onEscKey() {
    if (this.selectedImageUrl)
      this.closeImage();
  }
  onImageError(ev) {
    ev.target.src = "assets/img/error-placeholder.png";
  }
  static \u0275fac = function ViewNewsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewNewsComponent)(i023.\u0275\u0275directiveInject(NewsService), i023.\u0275\u0275directiveInject(i211.ActivatedRoute), i023.\u0275\u0275directiveInject(i311.Location), i023.\u0275\u0275directiveInject(i211.Router), i023.\u0275\u0275directiveInject(i410.FaIconLibrary));
  };
  static \u0275cmp = /* @__PURE__ */ i023.\u0275\u0275defineComponent({ type: _ViewNewsComponent, selectors: [["app-view-news"]], hostBindings: function ViewNewsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      i023.\u0275\u0275listener("keydown.escape", function ViewNewsComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscKey();
      }, false, i023.\u0275\u0275resolveWindow);
    }
  }, decls: 31, vars: 14, consts: [[1, "main-content-area"], [1, "container", "news-page-container"], [1, "news-main-column"], [1, "card", "news-detail-card"], [1, "back-button-container"], [1, "btn", "btn-back", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "news-title"], [1, "news-meta"], [1, "news-date"], [1, "far", "fa-clock"], ["target", "_blank", 1, "social-share-icon", "facebook", 3, "href"], [1, "fab", "fa-facebook-f"], [1, "news-divider"], ["class", "main-image-container", 4, "ngIf"], [1, "news-content", 3, "innerHTML"], ["class", "attachments-section mt-4", 4, "ngF"], [1, "news-sidebar-column"], [1, "card", "sidebar-card"], [1, "sidebar-title"], [1, "related-news-list"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["class", "lightbox", 3, "click", 4, "ngIf"], [1, "main-image-container"], [1, "main-news-image", 3, "click", "error", "src", "alt"], [1, "attachments-section", "mt-4"], [1, "other-attachments-grid"], ["class", "attachment-item-small", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "attachment-item-small"], [1, "small-attachment-image", 3, "click", "error", "src", "alt"], [1, "attachment-name"], [1, "related-news-link", 3, "click", "routerLink"], [1, "related-news-thumbnail", 3, "src", "alt"], [1, "related-news-info"], [1, "related-news-title"], [1, "related-news-date"], [1, "no-related-news"], [1, "lightbox", 3, "click"], ["alt", "Xem \u1EA3nh", 3, "src"]], template: function ViewNewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i023.\u0275\u0275element(0, "app-header");
      i023.\u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "button", 5);
      i023.\u0275\u0275listener("click", function ViewNewsComponent_Template_button_click_6_listener() {
        return ctx.goBack();
      });
      i023.\u0275\u0275element(7, "i", 6);
      i023.\u0275\u0275text(8, " Quay l\u1EA1i ");
      i023.\u0275\u0275elementEnd()();
      i023.\u0275\u0275elementStart(9, "h1", 7);
      i023.\u0275\u0275text(10);
      i023.\u0275\u0275elementEnd();
      i023.\u0275\u0275elementStart(11, "div", 8)(12, "span", 9);
      i023.\u0275\u0275element(13, "i", 10);
      i023.\u0275\u0275text(14);
      i023.\u0275\u0275pipe(15, "date");
      i023.\u0275\u0275elementEnd();
      i023.\u0275\u0275elementStart(16, "a", 11);
      i023.\u0275\u0275element(17, "i", 12);
      i023.\u0275\u0275elementEnd()();
      i023.\u0275\u0275element(18, "hr", 13);
      i023.\u0275\u0275template(19, ViewNewsComponent_div_19_Template, 2, 2, "div", 14);
      i023.\u0275\u0275element(20, "div", 15);
      i023.\u0275\u0275template(21, ViewNewsComponent_div_21_Template, 5, 2, "div", 16);
      i023.\u0275\u0275elementEnd()();
      i023.\u0275\u0275elementStart(22, "div", 17)(23, "div", 18)(24, "h3", 19);
      i023.\u0275\u0275text(25, "Xem th\xEAm");
      i023.\u0275\u0275elementEnd();
      i023.\u0275\u0275elementStart(26, "ul", 20);
      i023.\u0275\u0275template(27, ViewNewsComponent_li_27_Template, 9, 10, "li", 21)(28, ViewNewsComponent_li_28_Template, 3, 0, "li", 22);
      i023.\u0275\u0275elementEnd()()()()();
      i023.\u0275\u0275template(29, ViewNewsComponent_div_29_Template, 2, 1, "div", 23);
      i023.\u0275\u0275element(30, "app-footer");
    }
    if (rf & 2) {
      i023.\u0275\u0275advance(10);
      i023.\u0275\u0275textInterpolate(ctx.post.name);
      i023.\u0275\u0275advance(4);
      i023.\u0275\u0275textInterpolate1(" ", i023.\u0275\u0275pipeBind2(15, 11, ctx.post.publishedDate, "M/d/yyyy, h:mm a"), " ");
      i023.\u0275\u0275advance(2);
      i023.\u0275\u0275propertyInterpolate1("href", "https://www.facebook.com/sharer/sharer.php?u=", ctx.currentUrl, "", i023.\u0275\u0275sanitizeUrl);
      i023.\u0275\u0275advance(3);
      i023.\u0275\u0275property("ngIf", ctx.attachmentDto && ctx.attachmentDto.length > 0);
      i023.\u0275\u0275advance();
      i023.\u0275\u0275property("innerHTML", ctx.post.content, i023.\u0275\u0275sanitizeHtml);
      i023.\u0275\u0275advance();
      i023.\u0275\u0275property("ngF", (ctx.attachmentDto == null ? null : ctx.attachmentDto.length) && ctx.attachmentDto.length > 1);
      i023.\u0275\u0275advance(6);
      i023.\u0275\u0275property("ngForOf", ctx.relatedNews)("ngForTrackBy", ctx.trackById);
      i023.\u0275\u0275advance();
      i023.\u0275\u0275property("ngIf", ctx.relatedNews.length === 0);
      i023.\u0275\u0275advance();
      i023.\u0275\u0275property("ngIf", ctx.selectedImageUrl);
    }
  }, dependencies: [
    CommonModule13,
    i311.NgClass,
    i311.NgComponentOutlet,
    i311.NgForOf,
    i311.NgIf,
    i311.NgTemplateOutlet,
    i311.NgStyle,
    i311.NgSwitch,
    i311.NgSwitchCase,
    i311.NgSwitchDefault,
    i311.NgPlural,
    i311.NgPluralCase,
    i311.AsyncPipe,
    i311.UpperCasePipe,
    i311.LowerCasePipe,
    i311.JsonPipe,
    i311.SlicePipe,
    i311.DecimalPipe,
    i311.PercentPipe,
    i311.TitleCasePipe,
    i311.CurrencyPipe,
    i311.DatePipe,
    i311.I18nPluralPipe,
    i311.I18nSelectPipe,
    i311.KeyValuePipe,
    HeaderComponent,
    FooterComponent,
    // Đảm bảo FooterComponent được import và thêm vào đây
    FontAwesomeModule,
    i410.FaIconComponent,
    i410.FaDuotoneIconComponent,
    i410.FaLayersComponent,
    i410.FaLayersTextComponent,
    i410.FaLayersCounterComponent,
    i410.FaStackComponent,
    i410.FaStackItemSizeDirective,
    // Thêm FontAwesomeModule
    RouterModule8,
    i211.RouterOutlet,
    i211.RouterLink,
    i211.RouterLinkActive,
    i211.\u0275EmptyOutletComponent
  ], styles: ['@charset "UTF-8";\n\n\n\n.news-page-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  padding: 20px 0;\n}\n.news-main-column[_ngcontent-%COMP%] {\n  flex: 3;\n  min-width: 0;\n}\n.news-sidebar-column[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n  max-width: 350px;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  padding: 25px;\n  margin-bottom: 20px;\n}\n.back-button-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  margin-top: 25px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  padding: 5px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: background-color 0.3s ease;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.news-title[_ngcontent-%COMP%] {\n  font-size: 2.2em;\n  color: #2c3e50;\n  margin-bottom: 15px;\n  line-height: 1.3;\n}\n.news-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  color: #7f8c8d;\n  font-size: 0.9em;\n  margin-bottom: 15px;\n}\n.news-meta[_ngcontent-%COMP%]   .news-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.social-share-icon[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: #7f8c8d;\n  transition: color 0.3s ease;\n}\n.social-share-icon.facebook[_ngcontent-%COMP%]:hover {\n  color: #3b5998;\n}\n.news-divider[_ngcontent-%COMP%] {\n  border: 0;\n  height: 1px;\n  background-color: #eee;\n  margin: 20px 0;\n}\n.main-image-container[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  text-align: center;\n}\n.main-news-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n.news-content[_ngcontent-%COMP%] {\n  line-height: 1.7;\n  font-size: 1.05rem;\n  color: #444;\n  margin-bottom: 30px;\n  font-family: "Arial", sans-serif;\n}\n.news-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.2em;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  text-align: justify;\n}\n.news-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.news-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.news-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.news-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.news-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], \n.news-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  margin-bottom: 0.8em;\n  font-weight: bold;\n  line-height: 1.2;\n  color: #2c3e50;\n}\n.news-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.2em;\n}\n.news-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.9em;\n}\n.news-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n}\n.news-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n}\n.news-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.news-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 1.2em;\n  padding-left: 2.5em;\n}\n.news-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.6em;\n}\n.news-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 1.5em auto;\n  border-radius: 8px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.news-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: underline;\n  transition: color 0.3s ease;\n}\n.news-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n.news-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.news-content[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #222;\n}\n.news-content[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], \n.news-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #555;\n}\n.news-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 5px solid #bdc3c7;\n  padding: 1em 1.5em;\n  margin: 1.5em 0;\n  font-style: italic;\n  color: #555;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n}\n.news-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #ecf0f1;\n  padding: 1.2em;\n  border-radius: 6px;\n  overflow-x: auto;\n  font-family:\n    "Menlo",\n    "Monaco",\n    "Consolas",\n    "Courier New",\n    monospace;\n  font-size: 0.9em;\n  line-height: 1.5;\n}\n.news-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Menlo",\n    "Monaco",\n    "Consolas",\n    "Courier New",\n    monospace;\n  background-color: #e0e0e0;\n  padding: 2px 5px;\n  border-radius: 4px;\n  font-size: 0.9em;\n}\n.attachments-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  color: #2c3e50;\n  margin-bottom: 15px;\n}\n.other-attachments-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 15px;\n}\n.attachment-item-small[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 1px solid #eee;\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 10px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  cursor: pointer;\n}\n.attachment-item-small[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.small-attachment-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 5px;\n  margin-bottom: 8px;\n}\n.attachment-name[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  color: #555;\n  word-break: break-all;\n}\n.sidebar-card[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  color: #2c3e50;\n  margin-bottom: 20px;\n}\n.related-news-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.related-news-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.related-news-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease;\n}\n.related-news-link[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n.related-news-thumbnail[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 60px;\n  object-fit: cover;\n  border-radius: 5px;\n  flex-shrink: 0;\n}\n.related-news-info[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.related-news-title[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin: 0;\n  line-height: 1.4;\n  color: #333;\n}\n.related-news-link[_ngcontent-%COMP%]:hover   .related-news-title[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.related-news-date[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  color: #7f8c8d;\n  margin-top: 5px;\n}\n.no-related-news[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #7f8c8d;\n  text-align: center;\n  padding: 10px;\n}\n.lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  cursor: pointer;\n}\n.lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 90%;\n  max-height: 90%;\n  border-radius: 8px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n}\n@media (max-width: 768px) {\n  .news-page-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 15px;\n  }\n  .news-main-column[_ngcontent-%COMP%], \n   .news-sidebar-column[_ngcontent-%COMP%] {\n    flex: auto;\n    min-width: unset;\n    max-width: unset;\n  }\n  .news-title[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n  }\n  .news-content[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .other-attachments-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  }\n  .sidebar-card[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=view-news.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i023.\u0275setClassMetadata(ViewNewsComponent, [{
    type: Component14,
    args: [{ selector: "app-view-news", standalone: true, imports: [
      CommonModule13,
      HeaderComponent,
      FooterComponent,
      // Đảm bảo FooterComponent được import và thêm vào đây
      FontAwesomeModule,
      // Thêm FontAwesomeModule
      RouterModule8
      // THÊM DÒNG NÀY ĐỂ KHẮC PHỤC LỖI routerLink
    ], template: `<app-header></app-header>\r
\r
<div class="main-content-area">\r
    <div class="container news-page-container">\r
        <div class="news-main-column">\r
            <div class="card news-detail-card">\r
                <div class="back-button-container">\r
                    <button class="btn btn-back" (click)="goBack()">\r
                        <i class="fas fa-arrow-left"></i> Quay l\u1EA1i\r
                    </button>\r
                </div>\r
\r
                <h1 class="news-title">{{ post.name }}</h1>\r
                <div class="news-meta">\r
                    <span class="news-date">\r
                        <i class="far fa-clock"></i> {{ post.publishedDate | date:'M/d/yyyy, h:mm a' }}\r
                    </span> \r
                    <a href="https://www.facebook.com/sharer/sharer.php?u={{ currentUrl }}" target="_blank" class="social-share-icon facebook">\r
                        <i class="fab fa-facebook-f"></i>\r
                    </a>\r
                </div>\r
                <hr class="news-divider">\r
\r
                <div *ngIf="attachmentDto && attachmentDto.length > 0" class="main-image-container">\r
                    <img [src]="getImageUrl(attachmentDto[0])" \r
                         [alt]="getFileName(attachmentDto[0])"\r
                         class="main-news-image"\r
                         (click)="openImage(getImageUrl(attachmentDto[0]))"\r
                         (error)="onImageError($event)">\r
                </div>\r
\r
                <div class="news-content" [innerHTML]="post.content">\r
                    </div>\r
\r
                <div class="attachments-section mt-4" *ngF="attachmentDto?.length && attachmentDto.length > 1">\r
                    <h3>H\xECnh \u1EA3nh kh\xE1c</h3>\r
                    <div class="other-attachments-grid">\r
                        <div *ngFor="let attachment of attachmentDto.slice(1); trackBy: trackById" \r
                             class="attachment-item-small">\r
                            <img [src]="getImageUrl(attachment)"\r
                                 [alt]="getFileName(attachment)"\r
                                 class="small-attachment-image"\r
                                 (click)="openImage(getImageUrl(attachment))"\r
                                 (error)="onImageError($event)">\r
                            <p class="attachment-name">{{ getFileName(attachment) }}</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="news-sidebar-column">\r
            <div class="card sidebar-card">\r
                <h3 class="sidebar-title">Xem th\xEAm</h3>\r
                <ul class="related-news-list">\r
                    <li *ngFor="let relatedNewsItem of relatedNews; trackBy: trackById">\r
                        <a [routerLink]="['/view-news', relatedNewsItem.id]" class="related-news-link" (click)="loadNewsById(relatedNewsItem.id)">\r
                            <img [src]="getImageUrlForRelated(relatedNewsItem)" alt="{{ relatedNewsItem.name }}" class="related-news-thumbnail">\r
                            <div class="related-news-info">\r
                                <h4 class="related-news-title">{{ relatedNewsItem.name }}</h4>\r
                                <p class="related-news-date">{{ relatedNewsItem.publishedDate | date:'M/d/yyyy' }}</p>\r
                            </div>\r
                        </a>\r
                    </li>\r
                    <li *ngIf="relatedNews.length === 0">\r
                        <p class="no-related-news">Kh\xF4ng c\xF3 tin t\u1EE9c li\xEAn quan.</p>\r
                    </li>\r
                </ul>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<div class="lightbox" *ngIf="selectedImageUrl" (click)="closeImage()">\r
  <img [src]="selectedImageUrl" alt="Xem \u1EA3nh">\r
</div>\r
\r
<app-footer></app-footer>`, styles: ['@charset "UTF-8";\n\n/* src/app/components/news/view-news/view-news.component.scss */\n.news-page-container {\n  display: flex;\n  gap: 20px;\n  padding: 20px 0;\n}\n.news-main-column {\n  flex: 3;\n  min-width: 0;\n}\n.news-sidebar-column {\n  flex: 1;\n  min-width: 250px;\n  max-width: 350px;\n}\n.card {\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  padding: 25px;\n  margin-bottom: 20px;\n}\n.back-button-container {\n  margin-bottom: 20px;\n  margin-top: 25px;\n}\n.btn-back {\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  padding: 5px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: background-color 0.3s ease;\n}\n.btn-back:hover {\n  background-color: #0056b3;\n}\n.news-title {\n  font-size: 2.2em;\n  color: #2c3e50;\n  margin-bottom: 15px;\n  line-height: 1.3;\n}\n.news-meta {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  color: #7f8c8d;\n  font-size: 0.9em;\n  margin-bottom: 15px;\n}\n.news-meta .news-date {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.social-share-icon {\n  font-size: 1.1em;\n  color: #7f8c8d;\n  transition: color 0.3s ease;\n}\n.social-share-icon.facebook:hover {\n  color: #3b5998;\n}\n.news-divider {\n  border: 0;\n  height: 1px;\n  background-color: #eee;\n  margin: 20px 0;\n}\n.main-image-container {\n  margin-bottom: 25px;\n  text-align: center;\n}\n.main-news-image {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n.news-content {\n  line-height: 1.7;\n  font-size: 1.05rem;\n  color: #444;\n  margin-bottom: 30px;\n  font-family: "Arial", sans-serif;\n}\n.news-content p {\n  margin-bottom: 1.2em;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  text-align: justify;\n}\n.news-content h1,\n.news-content h2,\n.news-content h3,\n.news-content h4,\n.news-content h5,\n.news-content h6 {\n  margin-top: 2em;\n  margin-bottom: 0.8em;\n  font-weight: bold;\n  line-height: 1.2;\n  color: #2c3e50;\n}\n.news-content h1 {\n  font-size: 2.2em;\n}\n.news-content h2 {\n  font-size: 1.9em;\n}\n.news-content h3 {\n  font-size: 1.6em;\n}\n.news-content h4 {\n  font-size: 1.4em;\n}\n.news-content ul,\n.news-content ol {\n  margin-bottom: 1.2em;\n  padding-left: 2.5em;\n}\n.news-content li {\n  margin-bottom: 0.6em;\n}\n.news-content img {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 1.5em auto;\n  border-radius: 8px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.news-content a {\n  color: #007bff;\n  text-decoration: underline;\n  transition: color 0.3s ease;\n}\n.news-content a:hover {\n  color: #0056b3;\n}\n.news-content strong,\n.news-content b {\n  font-weight: bold;\n  color: #222;\n}\n.news-content em,\n.news-content i {\n  font-style: italic;\n  color: #555;\n}\n.news-content blockquote {\n  border-left: 5px solid #bdc3c7;\n  padding: 1em 1.5em;\n  margin: 1.5em 0;\n  font-style: italic;\n  color: #555;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n}\n.news-content pre {\n  background-color: #ecf0f1;\n  padding: 1.2em;\n  border-radius: 6px;\n  overflow-x: auto;\n  font-family:\n    "Menlo",\n    "Monaco",\n    "Consolas",\n    "Courier New",\n    monospace;\n  font-size: 0.9em;\n  line-height: 1.5;\n}\n.news-content code {\n  font-family:\n    "Menlo",\n    "Monaco",\n    "Consolas",\n    "Courier New",\n    monospace;\n  background-color: #e0e0e0;\n  padding: 2px 5px;\n  border-radius: 4px;\n  font-size: 0.9em;\n}\n.attachments-section h3 {\n  font-size: 1.4em;\n  color: #2c3e50;\n  margin-bottom: 15px;\n}\n.other-attachments-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 15px;\n}\n.attachment-item-small {\n  text-align: center;\n  border: 1px solid #eee;\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 10px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  cursor: pointer;\n}\n.attachment-item-small:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.small-attachment-image {\n  max-width: 100%;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 5px;\n  margin-bottom: 8px;\n}\n.attachment-name {\n  font-size: 0.85em;\n  color: #555;\n  word-break: break-all;\n}\n.sidebar-card .sidebar-title {\n  font-size: 1.6em;\n  color: #2c3e50;\n  margin-bottom: 20px;\n}\n.related-news-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.related-news-list li {\n  margin-bottom: 15px;\n}\n.related-news-link {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease;\n}\n.related-news-link:hover {\n  color: #007bff;\n}\n.related-news-thumbnail {\n  width: 80px;\n  height: 60px;\n  object-fit: cover;\n  border-radius: 5px;\n  flex-shrink: 0;\n}\n.related-news-info {\n  flex-grow: 1;\n}\n.related-news-title {\n  font-size: 1.1em;\n  margin: 0;\n  line-height: 1.4;\n  color: #333;\n}\n.related-news-link:hover .related-news-title {\n  color: #007bff;\n}\n.related-news-date {\n  font-size: 0.85em;\n  color: #7f8c8d;\n  margin-top: 5px;\n}\n.no-related-news {\n  font-style: italic;\n  color: #7f8c8d;\n  text-align: center;\n  padding: 10px;\n}\n.lightbox {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  cursor: pointer;\n}\n.lightbox img {\n  max-width: 90%;\n  max-height: 90%;\n  border-radius: 8px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n}\n@media (max-width: 768px) {\n  .news-page-container {\n    flex-direction: column;\n    padding: 15px;\n  }\n  .news-main-column,\n  .news-sidebar-column {\n    flex: auto;\n    min-width: unset;\n    max-width: unset;\n  }\n  .news-title {\n    font-size: 1.8em;\n  }\n  .news-content {\n    font-size: 1rem;\n  }\n  .other-attachments-grid {\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  }\n  .sidebar-card {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=view-news.component.css.map */\n'] }]
  }], () => [{ type: NewsService }, { type: i211.ActivatedRoute }, { type: i311.Location }, { type: i211.Router }, { type: i410.FaIconLibrary }], { onEscKey: [{
    type: HostListener2,
    args: ["window:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i023.\u0275setClassDebugInfo(ViewNewsComponent, { className: "ViewNewsComponent", filePath: "src/app/components/news/view-news/view-news.component.ts", lineNumber: 41 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fnews%2Fview-news%2Fview-news.component.ts%40ViewNewsComponent";
  function ViewNewsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i023.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i023.\u0275\u0275replaceMetadata(ViewNewsComponent, m.default, [i023, i311, i410, i211, news_service_exports], [CommonModule13, HeaderComponent, FooterComponent, FontAwesomeModule, RouterModule8, Component14, HostListener2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ViewNewsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ViewNewsComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/news/detail-news/detail-news.component.ts
import { CommonModule as CommonModule14 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { Component as Component15, HostListener as HostListener3 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i024 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i212 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i312 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
function DetailNewsComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i024.\u0275\u0275getCurrentView();
    i024.\u0275\u0275elementStart(0, "div", 11)(1, "img", 12);
    i024.\u0275\u0275listener("click", function DetailNewsComponent_div_18_div_1_Template_img_click_1_listener() {
      const attachment_r2 = i024.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i024.\u0275\u0275nextContext(2);
      return i024.\u0275\u0275resetView(ctx_r2.openImage(ctx_r2.getImageUrl(attachment_r2)));
    })("error", function DetailNewsComponent_div_18_div_1_Template_img_error_1_listener($event) {
      i024.\u0275\u0275restoreView(_r1);
      const ctx_r2 = i024.\u0275\u0275nextContext(2);
      return i024.\u0275\u0275resetView(ctx_r2.onImageError($event));
    });
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(2, "p", 13);
    i024.\u0275\u0275text(3);
    i024.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attachment_r2 = ctx.$implicit;
    const ctx_r2 = i024.\u0275\u0275nextContext(2);
    i024.\u0275\u0275advance();
    i024.\u0275\u0275property("src", ctx_r2.getImageUrl(attachment_r2), i024.\u0275\u0275sanitizeUrl)("alt", ctx_r2.getFileName(attachment_r2));
    i024.\u0275\u0275advance(2);
    i024.\u0275\u0275textInterpolate1(" ", ctx_r2.getFileName(attachment_r2), " ");
  }
}
function DetailNewsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    i024.\u0275\u0275elementStart(0, "div", 9);
    i024.\u0275\u0275template(1, DetailNewsComponent_div_18_div_1_Template, 4, 3, "div", 10);
    i024.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = i024.\u0275\u0275nextContext();
    i024.\u0275\u0275advance();
    i024.\u0275\u0275property("ngForOf", ctx_r2.attachmentDto)("ngForTrackBy", ctx_r2.trackById);
  }
}
function DetailNewsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    i024.\u0275\u0275elementStart(0, "p", 14);
    i024.\u0275\u0275text(1, "Kh\xF4ng c\xF3 t\u1EC7p \u0111\xEDnh k\xE8m.");
    i024.\u0275\u0275elementEnd();
  }
}
function DetailNewsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i024.\u0275\u0275getCurrentView();
    i024.\u0275\u0275elementStart(0, "div", 15);
    i024.\u0275\u0275listener("click", function DetailNewsComponent_div_21_Template_div_click_0_listener() {
      i024.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i024.\u0275\u0275nextContext();
      return i024.\u0275\u0275resetView(ctx_r2.closeImage());
    });
    i024.\u0275\u0275element(1, "img", 16);
    i024.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = i024.\u0275\u0275nextContext();
    i024.\u0275\u0275advance();
    i024.\u0275\u0275property("src", ctx_r2.selectedImageUrl, i024.\u0275\u0275sanitizeUrl);
  }
}
var DetailNewsComponent = class _DetailNewsComponent {
  newsService;
  route;
  post = {};
  attachmentDto = [];
  selectedImageUrl = null;
  imageBaseUrl = "http://localhost:8080/api/v1/report/image/";
  constructor(newsService, route) {
    this.newsService = newsService;
    this.route = route;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.loadNewsById(id);
  }
  loadNewsById(id) {
    this.newsService.getNewsById(id).subscribe({
      next: (res) => {
        console.log("attachments from API", res.attachments);
        this.post = res;
        this.attachmentDto = res.attachments ?? [];
      },
      error: (err) => {
        alert(err?.error || "L\u1ED7i khi t\u1EA3i b\xE0i vi\u1EBFt");
      }
    });
  }
  /* ---------- Helpers ---------- */
  getImageUrl({ url }) {
    if (!url)
      return "assets/img/placeholder.png";
    if (url.startsWith("http"))
      return url;
    const fileName = url.split("/").pop();
    return fileName ? `${this.imageBaseUrl}${encodeURIComponent(fileName)}` : "assets/img/placeholder.png";
  }
  trackById(_, item) {
    return item.id;
  }
  getFileName(att) {
    return att.url?.split("/").pop() ?? "\u0110\xEDnh k\xE8m";
  }
  /* ---------- Lightbox ---------- */
  openImage(url) {
    this.selectedImageUrl = url;
    document.body.style.overflow = "hidden";
  }
  closeImage() {
    this.selectedImageUrl = null;
    document.body.style.overflow = "";
  }
  onEscKey() {
    if (this.selectedImageUrl)
      this.closeImage();
  }
  onImageError(ev) {
    ev.target.src = "assets/img/placeholder.png";
  }
  static \u0275fac = function DetailNewsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetailNewsComponent)(i024.\u0275\u0275directiveInject(NewsService), i024.\u0275\u0275directiveInject(i212.ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ i024.\u0275\u0275defineComponent({ type: _DetailNewsComponent, selectors: [["app-detail-news"]], hostBindings: function DetailNewsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      i024.\u0275\u0275listener("keydown.escape", function DetailNewsComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscKey();
      }, false, i024.\u0275\u0275resolveWindow);
    }
  }, decls: 22, vars: 6, consts: [["noAttachments", ""], [1, "container", "mt-4"], [1, "card", "p-4"], ["for", "text"], [1, "fw-bold"], [1, "report-section"], ["for", "attachments-section"], ["id", "attachments-section", "class", "attachments-container mt-2", 4, "ngIf", "ngIfElse"], ["class", "lightbox", 3, "click", 4, "ngIf"], ["id", "attachments-section", 1, "attachments-container", "mt-2"], ["class", "attachment-item mb-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "attachment-item", "mb-3"], [1, "img-fluid", "rounded", "report-image", 3, "click", "error", "src", "alt"], [1, "text-muted", "small", "mt-1"], [1, "report-value"], [1, "lightbox", 3, "click"], ["alt", "Xem \u1EA3nh", 3, "src"]], template: function DetailNewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i024.\u0275\u0275element(0, "app-header");
      i024.\u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "label", 3);
      i024.\u0275\u0275text(4, "T\xEAn");
      i024.\u0275\u0275elementEnd();
      i024.\u0275\u0275elementStart(5, "h4", 4);
      i024.\u0275\u0275text(6);
      i024.\u0275\u0275elementEnd();
      i024.\u0275\u0275elementStart(7, "label", 3);
      i024.\u0275\u0275text(8, "M\xF4 t\u1EA3");
      i024.\u0275\u0275elementEnd();
      i024.\u0275\u0275elementStart(9, "p");
      i024.\u0275\u0275text(10);
      i024.\u0275\u0275elementEnd();
      i024.\u0275\u0275elementStart(11, "label", 3);
      i024.\u0275\u0275text(12, "N\u1ED9i dung");
      i024.\u0275\u0275elementEnd();
      i024.\u0275\u0275elementStart(13, "p");
      i024.\u0275\u0275text(14);
      i024.\u0275\u0275elementEnd();
      i024.\u0275\u0275elementStart(15, "div", 5)(16, "label", 6);
      i024.\u0275\u0275text(17, "T\u1EC7p \u0111\xEDnh k\xE8m");
      i024.\u0275\u0275elementEnd();
      i024.\u0275\u0275template(18, DetailNewsComponent_div_18_Template, 2, 2, "div", 7)(19, DetailNewsComponent_ng_template_19_Template, 2, 0, "ng-template", null, 0, i024.\u0275\u0275templateRefExtractor)(21, DetailNewsComponent_div_21_Template, 2, 1, "div", 8);
      i024.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const noAttachments_r5 = i024.\u0275\u0275reference(20);
      i024.\u0275\u0275advance(6);
      i024.\u0275\u0275textInterpolate(ctx.post.name);
      i024.\u0275\u0275advance(4);
      i024.\u0275\u0275textInterpolate(ctx.post.shortDescription);
      i024.\u0275\u0275advance(4);
      i024.\u0275\u0275textInterpolate(ctx.post.content);
      i024.\u0275\u0275advance(4);
      i024.\u0275\u0275property("ngIf", ctx.attachmentDto == null ? null : ctx.attachmentDto.length)("ngIfElse", noAttachments_r5);
      i024.\u0275\u0275advance(3);
      i024.\u0275\u0275property("ngIf", ctx.selectedImageUrl);
    }
  }, dependencies: [CommonModule14, i312.NgClass, i312.NgComponentOutlet, i312.NgForOf, i312.NgIf, i312.NgTemplateOutlet, i312.NgStyle, i312.NgSwitch, i312.NgSwitchCase, i312.NgSwitchDefault, i312.NgPlural, i312.NgPluralCase, i312.AsyncPipe, i312.UpperCasePipe, i312.LowerCasePipe, i312.JsonPipe, i312.SlicePipe, i312.DecimalPipe, i312.PercentPipe, i312.TitleCasePipe, i312.CurrencyPipe, i312.DatePipe, i312.I18nPluralPipe, i312.I18nSelectPipe, i312.KeyValuePipe, HeaderComponent], styles: ["\n\n.container.mt-4[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 75px;\n}\n.card.p-4[_ngcontent-%COMP%] {\n  max-width: 800px;\n  width: 100%;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n  background-color: #f9f9f9;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n  color: #555;\n}\nh4.fw-bold[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n  border-bottom: 2px solid #ccc;\n  padding-bottom: 0.5rem;\n}\np[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  color: #444;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=detail-news.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i024.\u0275setClassMetadata(DetailNewsComponent, [{
    type: Component15,
    args: [{ selector: "app-detail-news", standalone: true, imports: [
      CommonModule14,
      HeaderComponent
      // FooterComponent                         
    ], template: '<app-header></app-header>\n<div class="container mt-4">\n    <div class="card p-4">\n        <label for="text">T\xEAn</label>\n        <h4 class="fw-bold">{{ post.name }}</h4>\n        <label for="text">M\xF4 t\u1EA3</label>\n        <p>{{ post.shortDescription }}</p>\n        <label for="text">N\u1ED9i dung</label>\n        <p>{{ post.content }}</p>\n        <div class="report-section">\n            <label for="attachments-section">T\u1EC7p \u0111\xEDnh k\xE8m</label>\n          \n            <div id="attachments-section"\n                 class="attachments-container mt-2"\n                 *ngIf="attachmentDto?.length; else noAttachments">\n          \n              <div *ngFor="let attachment of attachmentDto; trackBy: trackById"\n                   class="attachment-item mb-3">\n          \n                   <img  [src]="getImageUrl(attachment)"\n                   [alt]="getFileName(attachment)"\n                   class="img-fluid rounded report-image"\n                   (click)="openImage(getImageUrl(attachment))"\n                   (error)="onImageError($event)">\n             \n             <p class="text-muted small mt-1">\n               {{ getFileName(attachment) }}\n             </p>\n              </div>\n            </div>\n          \n            <ng-template #noAttachments>\n              <p class="report-value">Kh\xF4ng c\xF3 t\u1EC7p \u0111\xEDnh k\xE8m.</p>\n            </ng-template>\n          \n            <!-- Lightbox -->\n            <div class="lightbox" *ngIf="selectedImageUrl" (click)="closeImage()">\n              <img [src]="selectedImageUrl" alt="Xem \u1EA3nh">\n            </div>\n          </div>\n          \n    </div>\n</div>\n\n<!-- <app-footer></app-footer> -->', styles: ["/* src/app/components/news/detail-news/detail-news.component.scss */\n.container.mt-4 {\n  display: flex;\n  justify-content: center;\n  padding-top: 75px;\n}\n.card.p-4 {\n  max-width: 800px;\n  width: 100%;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n  background-color: #f9f9f9;\n}\nlabel {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n  color: #555;\n}\nh4.fw-bold {\n  color: #333;\n  margin-bottom: 1rem;\n  border-bottom: 2px solid #ccc;\n  padding-bottom: 0.5rem;\n}\np {\n  line-height: 1.8;\n  color: #444;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=detail-news.component.css.map */\n"] }]
  }], () => [{ type: NewsService }, { type: i212.ActivatedRoute }], { onEscKey: [{
    type: HostListener3,
    args: ["window:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i024.\u0275setClassDebugInfo(DetailNewsComponent, { className: "DetailNewsComponent", filePath: "src/app/components/news/detail-news/detail-news.component.ts", lineNumber: 27 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fnews%2Fdetail-news%2Fdetail-news.component.ts%40DetailNewsComponent";
  function DetailNewsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i024.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i024.\u0275\u0275replaceMetadata(DetailNewsComponent, m.default, [i024, i312, news_service_exports, i212], [CommonModule14, HeaderComponent, Component15, HostListener3], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && DetailNewsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && DetailNewsComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/report/detail-report/detail-report.component.ts
import { Component as Component16, HostListener as HostListener4 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { RouterModule as RouterModule9 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import { CommonModule as CommonModule15 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i025 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i213 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i313 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
function DetailReportComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    i025.\u0275\u0275elementStart(0, "div", 7)(1, "p");
    i025.\u0275\u0275text(2, "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u b\xE1o c\xE1o...");
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275elementStart(3, "div", 8)(4, "span", 9);
    i025.\u0275\u0275text(5, "Loading...");
    i025.\u0275\u0275elementEnd()()();
  }
}
function DetailReportComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    i025.\u0275\u0275elementStart(0, "div", 10);
    i025.\u0275\u0275text(1);
    i025.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i025.\u0275\u0275nextContext();
    i025.\u0275\u0275advance();
    i025.\u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function DetailReportComponent_ng_container_3_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i025.\u0275\u0275getCurrentView();
    i025.\u0275\u0275elementStart(0, "div", 27)(1, "img", 28);
    i025.\u0275\u0275listener("click", function DetailReportComponent_ng_container_3_div_31_div_1_Template_img_click_1_listener() {
      const attachment_r3 = i025.\u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = i025.\u0275\u0275nextContext(3);
      return i025.\u0275\u0275resetView(ctx_r0.openImage(ctx_r0.getImageUrl(attachment_r3)));
    })("error", function DetailReportComponent_ng_container_3_div_31_div_1_Template_img_error_1_listener($event) {
      i025.\u0275\u0275restoreView(_r2);
      const ctx_r0 = i025.\u0275\u0275nextContext(3);
      return i025.\u0275\u0275resetView(ctx_r0.onImageError($event));
    });
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275elementStart(2, "p", 29);
    i025.\u0275\u0275text(3);
    i025.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attachment_r3 = ctx.$implicit;
    const ctx_r0 = i025.\u0275\u0275nextContext(3);
    i025.\u0275\u0275advance();
    i025.\u0275\u0275property("src", ctx_r0.getImageUrl(attachment_r3), i025.\u0275\u0275sanitizeUrl)("alt", attachment_r3.url.split("/").pop() || "\u0110\xEDnh k\xE8m");
    i025.\u0275\u0275advance(2);
    i025.\u0275\u0275textInterpolate1(" ", attachment_r3.url.split("/").pop(), " ");
  }
}
function DetailReportComponent_ng_container_3_div_31_Template(rf, ctx) {
  if (rf & 1) {
    i025.\u0275\u0275elementStart(0, "div", 25);
    i025.\u0275\u0275template(1, DetailReportComponent_ng_container_3_div_31_div_1_Template, 4, 3, "div", 26);
    i025.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i025.\u0275\u0275nextContext(2);
    i025.\u0275\u0275advance();
    i025.\u0275\u0275property("ngForOf", ctx_r0.report.attachmentDto);
  }
}
function DetailReportComponent_ng_container_3_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    i025.\u0275\u0275elementStart(0, "p", 30);
    i025.\u0275\u0275text(1, "Kh\xF4ng c\xF3 t\u1EC7p \u0111\xEDnh k\xE8m.");
    i025.\u0275\u0275elementEnd();
  }
}
function DetailReportComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    i025.\u0275\u0275elementContainerStart(0);
    i025.\u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "label", 13);
    i025.\u0275\u0275text(4, "Th\xF4ng tin li\xEAn quan");
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275elementStart(5, "h4", 14);
    i025.\u0275\u0275text(6);
    i025.\u0275\u0275elementEnd()();
    i025.\u0275\u0275elementStart(7, "div", 12)(8, "label", 15);
    i025.\u0275\u0275text(9, "Lo\u1EA1i th\xF4ng tin");
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275elementStart(10, "p", 16);
    i025.\u0275\u0275text(11);
    i025.\u0275\u0275pipe(12, "informationTypeToString");
    i025.\u0275\u0275elementEnd()();
    i025.\u0275\u0275elementStart(13, "div", 12)(14, "label", 17);
    i025.\u0275\u0275text(15, "Ng\u01B0\u1EDDi g\u1EEDi");
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275elementStart(16, "p", 18);
    i025.\u0275\u0275text(17);
    i025.\u0275\u0275elementEnd()();
    i025.\u0275\u0275elementStart(18, "div", 12)(19, "label", 19);
    i025.\u0275\u0275text(20, "H\xECnh th\u1EE9c l\u1EEBa \u0111\u1EA3o");
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275elementStart(21, "p", 20);
    i025.\u0275\u0275text(22);
    i025.\u0275\u0275elementEnd()();
    i025.\u0275\u0275elementStart(23, "div", 12)(24, "label", 21);
    i025.\u0275\u0275text(25, "M\xF4 t\u1EA3 chi ti\u1EBFt");
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275elementStart(26, "p", 22);
    i025.\u0275\u0275text(27);
    i025.\u0275\u0275elementEnd()();
    i025.\u0275\u0275elementStart(28, "div", 12)(29, "label", 23);
    i025.\u0275\u0275text(30, "T\u1EC7p \u0111\xEDnh k\xE8m");
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275template(31, DetailReportComponent_ng_container_3_div_31_Template, 2, 1, "div", 24)(32, DetailReportComponent_ng_container_3_ng_template_32_Template, 2, 0, "ng-template", null, 0, i025.\u0275\u0275templateRefExtractor);
    i025.\u0275\u0275elementEnd()();
    i025.\u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noAttachments_r4 = i025.\u0275\u0275reference(33);
    const ctx_r0 = i025.\u0275\u0275nextContext();
    i025.\u0275\u0275advance(6);
    i025.\u0275\u0275textInterpolate(ctx_r0.report.info);
    i025.\u0275\u0275advance(5);
    i025.\u0275\u0275textInterpolate1(" ", i025.\u0275\u0275pipeBind1(12, 7, ctx_r0.reportTypeEnum), " ");
    i025.\u0275\u0275advance(6);
    i025.\u0275\u0275textInterpolate(ctx_r0.report.emailAuthorReport);
    i025.\u0275\u0275advance(5);
    i025.\u0275\u0275textInterpolate(ctx_r0.report.reason);
    i025.\u0275\u0275advance(5);
    i025.\u0275\u0275textInterpolate(ctx_r0.report.infoDescription);
    i025.\u0275\u0275advance(4);
    i025.\u0275\u0275property("ngIf", ctx_r0.report.attachmentDto.length > 0)("ngIfElse", noAttachments_r4);
  }
}
function DetailReportComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = i025.\u0275\u0275getCurrentView();
    i025.\u0275\u0275elementStart(0, "div", 31);
    i025.\u0275\u0275listener("click", function DetailReportComponent_div_6_Template_div_click_0_listener() {
      i025.\u0275\u0275restoreView(_r5);
      const ctx_r0 = i025.\u0275\u0275nextContext();
      return i025.\u0275\u0275resetView(ctx_r0.closeImage());
    });
    i025.\u0275\u0275elementStart(1, "div", 32);
    i025.\u0275\u0275listener("click", function DetailReportComponent_div_6_Template_div_click_1_listener($event) {
      i025.\u0275\u0275restoreView(_r5);
      return i025.\u0275\u0275resetView($event.stopPropagation());
    });
    i025.\u0275\u0275elementStart(2, "button", 33);
    i025.\u0275\u0275listener("click", function DetailReportComponent_div_6_Template_button_click_2_listener() {
      i025.\u0275\u0275restoreView(_r5);
      const ctx_r0 = i025.\u0275\u0275nextContext();
      return i025.\u0275\u0275resetView(ctx_r0.closeImage());
    });
    i025.\u0275\u0275text(3, "\xD7");
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275element(4, "img", 34);
    i025.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = i025.\u0275\u0275nextContext();
    i025.\u0275\u0275advance(4);
    i025.\u0275\u0275property("src", ctx_r0.selectedImageUrl, i025.\u0275\u0275sanitizeUrl);
  }
}
var DetailReportComponent = class _DetailReportComponent {
  reportService;
  route;
  report = {
    id: 0,
    info: "",
    type: 0,
    emailAuthorReport: "",
    reason: "",
    infoDescription: "",
    attachmentDto: []
  };
  isLoading = true;
  errorMessage = null;
  selectedImageUrl = null;
  /** URL gốc lấy ảnh (thay bằng domain thực tế của bạn) */
  imageBaseUrl = "http://localhost:8080/api/v1/report/image/";
  constructor(reportService, route) {
    this.reportService = reportService;
    this.route = route;
  }
  /* ---------------- life‑cycle ---------------- */
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get("id");
    if (!idParam) {
      this.errorMessage = "Kh\xF4ng t\xECm th\u1EA5y ID b\xE1o c\xE1o trong URL.";
      this.isLoading = false;
      return;
    }
    const id = Number(idParam);
    if (isNaN(id)) {
      this.errorMessage = "ID b\xE1o c\xE1o kh\xF4ng h\u1EE3p l\u1EC7.";
      this.isLoading = false;
      return;
    }
    this.loadReportById(id);
  }
  /* ---------------- getter / helper ---------------- */
  /** Ép kiểu `report.type` → enum; nếu sai thì trả về PhoneNumber mặc định */
  get reportTypeEnum() {
    const val = Number(this.report.type);
    return isNaN(val) ? InformationType.PhoneNumber : val;
  }
  /** Lấy URL ảnh gốc từ attachment */
  getImageUrl(attachment) {
    if (!attachment?.url)
      return "assets/img/placeholder.png";
    const fileName = attachment.url.split("/").pop();
    if (!fileName)
      return "assets/img/placeholder.png";
    return `${this.imageBaseUrl}${encodeURIComponent(fileName)}`;
  }
  /* ---------------- call API ---------------- */
  loadReportById(id) {
    this.isLoading = true;
    this.errorMessage = null;
    this.reportService.getReportById(id).subscribe({
      next: ({ data }) => {
        if (!data) {
          this.errorMessage = "Kh\xF4ng nh\u1EADn \u0111\u01B0\u1EE3c d\u1EEF li\u1EC7u b\xE1o c\xE1o h\u1EE3p l\u1EC7 t\u1EEB API.";
          return;
        }
        data.attachmentDto = Array.isArray(data.attachmentDto) ? data.attachmentDto : [];
        data.type = Number(data.type);
        this.report = data;
      },
      error: (err) => {
        this.errorMessage = `L\u1ED7i khi t\u1EA3i b\xE1o c\xE1o: ${err.error?.message || err.message || "L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh"}`;
      },
      complete: () => this.isLoading = false
    });
  }
  /* ---------------- lightbox ---------------- */
  openImage(url) {
    this.selectedImageUrl = url;
    document.body.style.overflow = "hidden";
  }
  closeImage() {
    this.selectedImageUrl = null;
    document.body.style.overflow = "";
  }
  onEscKey() {
    if (this.selectedImageUrl)
      this.closeImage();
  }
  /* ---------------- image error ---------------- */
  onImageError(ev) {
    ev.target.classList.add("image-error-placeholder");
  }
  static \u0275fac = function DetailReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetailReportComponent)(i025.\u0275\u0275directiveInject(ReportService), i025.\u0275\u0275directiveInject(i213.ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ i025.\u0275\u0275defineComponent({ type: _DetailReportComponent, selectors: [["app-detail-report"]], hostBindings: function DetailReportComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      i025.\u0275\u0275listener("keydown.escape", function DetailReportComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscKey();
      }, false, i025.\u0275\u0275resolveWindow);
    }
  }, decls: 7, vars: 4, consts: [["noAttachments", ""], [1, "container", "mt-4", "d-flex", "flex-column", "gap-2", "centered-container"], ["class", "text-center p-5", 4, "ngIf"], ["class", "alert alert-danger w-100", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["routerLink", "/admin/reports", 1, "btn", "btn-primary", "align-self-end", "mt-3", "mb-3"], ["class", "image-overlay", 3, "click", 4, "ngIf"], [1, "text-center", "p-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], ["role", "alert", 1, "alert", "alert-danger", "w-100"], [1, "card", "p-4", "w-100"], [1, "report-section"], ["for", "info-text"], ["id", "info-text", 1, "fw-bold", "report-value"], ["for", "type-text"], ["id", "type-text", 1, "report-value"], ["for", "author-email"], ["id", "author-email", 1, "report-value"], ["for", "reason-text"], ["id", "reason-text", 1, "report-value"], ["for", "description-text"], ["id", "description-text", 1, "report-value"], ["for", "attachments-section"], ["id", "attachments-section", "class", "attachments-container mt-2", 4, "ngIf", "ngIfElse"], ["id", "attachments-section", 1, "attachments-container", "mt-2"], ["class", "attachment-item mb-3", 4, "ngFor", "ngForOf"], [1, "attachment-item", "mb-3"], [1, "img-fluid", "rounded", "report-image", 3, "click", "error", "src", "alt"], [1, "text-muted", "small", "mt-1"], [1, "report-value"], [1, "image-overlay", 3, "click"], [1, "image-overlay__content", 3, "click"], ["type", "button", "aria-label", "\u0110\xF3ng", 1, "image-overlay__close", 3, "click"], ["alt", "\u1EA2nh ph\xF3ng to", 1, "image-overlay__img", 3, "src"]], template: function DetailReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      i025.\u0275\u0275elementStart(0, "div", 1);
      i025.\u0275\u0275template(1, DetailReportComponent_div_1_Template, 6, 0, "div", 2)(2, DetailReportComponent_div_2_Template, 2, 1, "div", 3)(3, DetailReportComponent_ng_container_3_Template, 34, 9, "ng-container", 4);
      i025.\u0275\u0275elementStart(4, "button", 5);
      i025.\u0275\u0275text(5, " Tr\u1EDF l\u1EA1i ");
      i025.\u0275\u0275elementEnd()();
      i025.\u0275\u0275template(6, DetailReportComponent_div_6_Template, 5, 1, "div", 6);
    }
    if (rf & 2) {
      i025.\u0275\u0275advance();
      i025.\u0275\u0275property("ngIf", ctx.isLoading);
      i025.\u0275\u0275advance();
      i025.\u0275\u0275property("ngIf", !ctx.isLoading && ctx.errorMessage);
      i025.\u0275\u0275advance();
      i025.\u0275\u0275property("ngIf", !ctx.isLoading && !ctx.errorMessage && ctx.report.id);
      i025.\u0275\u0275advance(3);
      i025.\u0275\u0275property("ngIf", ctx.selectedImageUrl);
    }
  }, dependencies: [CommonModule15, i313.NgClass, i313.NgComponentOutlet, i313.NgForOf, i313.NgIf, i313.NgTemplateOutlet, i313.NgStyle, i313.NgSwitch, i313.NgSwitchCase, i313.NgSwitchDefault, i313.NgPlural, i313.NgPluralCase, i313.AsyncPipe, i313.UpperCasePipe, i313.LowerCasePipe, i313.JsonPipe, i313.SlicePipe, i313.DecimalPipe, i313.PercentPipe, i313.TitleCasePipe, i313.CurrencyPipe, i313.DatePipe, i313.I18nPluralPipe, i313.I18nSelectPipe, i313.KeyValuePipe, RouterModule9, i213.RouterOutlet, i213.RouterLink, i213.RouterLinkActive, i213.\u0275EmptyOutletComponent, InformationTypeToStringPipe], styles: ['@charset "UTF-8";\n\n\n\n.container.mt-4.centered-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  min-height: calc(100vh - 50px);\n  justify-content: flex-start;\n  padding: 1rem 1rem 70px;\n}\n.card.p-4[_ngcontent-%COMP%] {\n  max-width: 800px;\n  width: 100%;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n  background-color: #fff;\n}\n.report-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.35rem;\n  font-weight: 600;\n  color: #4a5568;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n}\nh4.report-value[_ngcontent-%COMP%], \np.report-value[_ngcontent-%COMP%] {\n  color: #2d3748;\n  margin: 0;\n  line-height: 1.6;\n}\nh4.report-value[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\np.report-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.attachments-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.attachment-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid #edf2f7;\n  border-radius: 6px;\n  padding: 0.75rem;\n  background-color: #f8fafc;\n  width: calc(33.333% - 1rem);\n  min-width: 150px;\n}\n@media (max-width: 768px) {\n  .attachment-item[_ngcontent-%COMP%] {\n    width: calc(50% - 0.5rem);\n  }\n}\n@media (max-width: 576px) {\n  .attachment-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.report-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n  background-color: #e2e8f0;\n  cursor: zoom-in;\n}\n.image-error-placeholder[_ngcontent-%COMP%] {\n  border: 2px dashed #cbd5e0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #a0aec0;\n  font-size: 0.8rem;\n}\n.image-error-placeholder[_ngcontent-%COMP%]::after {\n  content: "\\1ea2nh l\\1ed7i";\n}\n.image-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n}\n.image-overlay__content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 90vw;\n  max-height: 90vh;\n  animation: _ngcontent-%COMP%_zoomIn 0.25s ease-out;\n}\n.image-overlay__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 6px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);\n}\n.image-overlay__close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  right: -12px;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 50%;\n  background: #fff;\n  color: #333;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);\n}\n.image-overlay__close[_ngcontent-%COMP%]:hover {\n  background: #f1f1f1;\n}\n@keyframes _ngcontent-%COMP%_zoomIn {\n  from {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=detail-report.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i025.\u0275setClassMetadata(DetailReportComponent, [{
    type: Component16,
    args: [{ selector: "app-detail-report", standalone: true, imports: [
      CommonModule15,
      RouterModule9,
      InformationTypeToStringPipe
    ], template: `<div class="container mt-4 d-flex flex-column gap-2 centered-container">\r
    <!-- Loading -->\r
    <div *ngIf="isLoading" class="text-center p-5">\r
        <p>\u0110ang t\u1EA3i d\u1EEF li\u1EC7u b\xE1o c\xE1o...</p>\r
        <div class="spinner-border text-primary" role="status">\r
            <span class="visually-hidden">Loading...</span>\r
        </div>\r
    </div>\r
\r
    <!-- L\u1ED7i -->\r
    <div *ngIf="!isLoading && errorMessage" class="alert alert-danger w-100" role="alert">\r
        {{ errorMessage }}\r
    </div>\r
\r
    <!-- N\u1ED9i dung -->\r
    <ng-container *ngIf="!isLoading && !errorMessage && report.id">\r
        <div class="card p-4 w-100">\r
\r
            <div class="report-section">\r
                <label for="info-text">Th\xF4ng tin li\xEAn quan</label>\r
                <h4 id="info-text" class="fw-bold report-value">{{ report.info }}</h4>\r
            </div>\r
\r
            <div class="report-section">\r
                <label for="type-text">Lo\u1EA1i th\xF4ng tin</label>\r
                <p id="type-text" class="report-value">\r
                    {{ reportTypeEnum | informationTypeToString }}\r
                </p>\r
            </div>\r
\r
            <div class="report-section">\r
                <label for="author-email">Ng\u01B0\u1EDDi g\u1EEDi</label>\r
                <p id="author-email" class="report-value">{{ report.emailAuthorReport }}</p>\r
            </div>\r
\r
            <div class="report-section">\r
                <label for="reason-text">H\xECnh th\u1EE9c l\u1EEBa \u0111\u1EA3o</label>\r
                <p id="reason-text" class="report-value">{{ report.reason }}</p>\r
            </div>\r
\r
            <div class="report-section">\r
                <label for="description-text">M\xF4 t\u1EA3 chi ti\u1EBFt</label>\r
                <p id="description-text" class="report-value">{{ report.infoDescription }}</p>\r
            </div>\r
\r
            <div class="report-section">\r
                <label for="attachments-section">T\u1EC7p \u0111\xEDnh k\xE8m</label>\r
\r
                <div id="attachments-section" class="attachments-container mt-2"\r
                    *ngIf="report.attachmentDto.length > 0; else noAttachments">\r
\r
                    <div *ngFor="let attachment of report.attachmentDto" class="attachment-item mb-3">\r
\r
                        <img [src]="getImageUrl(attachment)" [alt]="attachment.url.split('/').pop() || '\u0110\xEDnh k\xE8m'"\r
                            class="img-fluid rounded report-image" (click)="openImage(getImageUrl(attachment))"\r
                            (error)="onImageError($event)">\r
\r
                        <p class="text-muted small mt-1">\r
                            {{ attachment.url.split('/').pop() }}\r
                        </p>\r
                    </div>\r
                </div>\r
\r
                <ng-template #noAttachments>\r
                    <p class="report-value">Kh\xF4ng c\xF3 t\u1EC7p \u0111\xEDnh k\xE8m.</p>\r
                </ng-template>\r
            </div>\r
\r
        </div> <!-- /.card -->\r
    </ng-container>\r
\r
    <button class="btn btn-primary align-self-end mt-3 mb-3" routerLink="/admin/reports">\r
        Tr\u1EDF l\u1EA1i\r
    </button>\r
</div>\r
\r
<!-- Overlay xem \u1EA3nh l\u1EDBn -->\r
<div class="image-overlay" *ngIf="selectedImageUrl" (click)="closeImage()">\r
    <div class="image-overlay__content" (click)="$event.stopPropagation()">\r
        <button type="button" class="image-overlay__close" aria-label="\u0110\xF3ng" (click)="closeImage()">&times;</button>\r
\r
        <img [src]="selectedImageUrl" alt="\u1EA2nh ph\xF3ng to" class="image-overlay__img">\r
    </div>\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/components/report/detail-report/detail-report.component.scss */\n.container.mt-4.centered-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  min-height: calc(100vh - 50px);\n  justify-content: flex-start;\n  padding: 1rem 1rem 70px;\n}\n.card.p-4 {\n  max-width: 800px;\n  width: 100%;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n  background-color: #fff;\n}\n.report-section {\n  margin-bottom: 1.25rem;\n}\nlabel {\n  display: block;\n  margin-bottom: 0.35rem;\n  font-weight: 600;\n  color: #4a5568;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n}\nh4.report-value,\np.report-value {\n  color: #2d3748;\n  margin: 0;\n  line-height: 1.6;\n}\nh4.report-value {\n  font-size: 1.125rem;\n}\np.report-value {\n  font-size: 1rem;\n}\n.attachments-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.attachment-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid #edf2f7;\n  border-radius: 6px;\n  padding: 0.75rem;\n  background-color: #f8fafc;\n  width: calc(33.333% - 1rem);\n  min-width: 150px;\n}\n@media (max-width: 768px) {\n  .attachment-item {\n    width: calc(50% - 0.5rem);\n  }\n}\n@media (max-width: 576px) {\n  .attachment-item {\n    width: 100%;\n  }\n}\n.report-image {\n  max-width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n  background-color: #e2e8f0;\n  cursor: zoom-in;\n}\n.image-error-placeholder {\n  border: 2px dashed #cbd5e0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #a0aec0;\n  font-size: 0.8rem;\n}\n.image-error-placeholder::after {\n  content: "\\1ea2nh l\\1ed7i";\n}\n.image-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n}\n.image-overlay__content {\n  position: relative;\n  max-width: 90vw;\n  max-height: 90vh;\n  animation: zoomIn 0.25s ease-out;\n}\n.image-overlay__img {\n  width: 100%;\n  height: auto;\n  border-radius: 6px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);\n}\n.image-overlay__close {\n  position: absolute;\n  top: -12px;\n  right: -12px;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 50%;\n  background: #fff;\n  color: #333;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);\n}\n.image-overlay__close:hover {\n  background: #f1f1f1;\n}\n@keyframes zoomIn {\n  from {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=detail-report.component.css.map */\n'] }]
  }], () => [{ type: ReportService }, { type: i213.ActivatedRoute }], { onEscKey: [{
    type: HostListener4,
    args: ["window:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i025.\u0275setClassDebugInfo(DetailReportComponent, { className: "DetailReportComponent", filePath: "src/app/components/report/detail-report/detail-report.component.ts", lineNumber: 40 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Freport%2Fdetail-report%2Fdetail-report.component.ts%40DetailReportComponent";
  function DetailReportComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i025.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i025.\u0275\u0275replaceMetadata(DetailReportComponent, m.default, [i025, i313, i213, report_service_exports], [CommonModule15, RouterModule9, InformationTypeToStringPipe, Component16, HostListener4], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && DetailReportComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && DetailReportComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/dashboard/dashboard.component.ts
import { CommonModule as CommonModule16 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { Component as Component17 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { FormsModule as FormsModule11 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import { NgChartsModule } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/ng2-charts.js?v=e44b7f9a";
import * as i026 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i214 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i314 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import * as i411 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/ng2-charts.js?v=e44b7f9a";
function DashboardComponent_option_5_Template(rf, ctx) {
  if (rf & 1) {
    i026.\u0275\u0275elementStart(0, "option", 8);
    i026.\u0275\u0275text(1);
    i026.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r1 = ctx.$implicit;
    i026.\u0275\u0275property("value", y_r1);
    i026.\u0275\u0275advance();
    i026.\u0275\u0275textInterpolate1("N\u0103m ", y_r1, "");
  }
}
var DashboardComponent = class _DashboardComponent {
  reportService;
  yearlyChartType = "bar";
  yearlyChartData;
  yearlyChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => `B\xE1o c\xE1o: ${ctx.parsed.y}` } }
    },
    scales: {
      x: { title: { display: true, text: "N\u0103m" }, grid: { display: false }, border: { display: false } },
      y: { title: { display: true, text: "S\u1ED1 b\xE1o c\xE1o" }, beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: "rgba(0,0,0,0.05)" }, border: { display: false } }
    }
  };
  monthlyChartType = "line";
  monthlyChartData;
  monthlyChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => `B\xE1o c\xE1o: ${ctx.parsed.y}` } }
    },
    scales: {
      x: { title: { display: true, text: "Th\xE1ng" }, grid: { display: false }, border: { display: false } },
      y: { title: { display: true, text: "S\u1ED1 b\xE1o c\xE1o" }, beginAtZero: true, ticks: { stepSize: 1 }, grid: { display: true, color: "rgba(0,0,0,0.1)", lineWidth: 1, drawTicks: false }, border: { display: false } }
    }
  };
  availableYears = [];
  selectedYear;
  constructor(reportService) {
    this.reportService = reportService;
  }
  ngOnInit() {
    this.reportService.getYearlyStats().subscribe((stats) => {
      stats.sort((a, b) => a.year - b.year);
      this.availableYears = stats.map((s) => s.year);
      this.selectedYear = this.availableYears[this.availableYears.length - 1];
      const recentStats = stats.slice(-5);
      this.loadYearlyChart(recentStats);
      this.loadMonthlyChart(this.selectedYear);
    });
  }
  loadYearlyChart(stats) {
    const labels = stats.map((s) => s.year.toString());
    const data = stats.map((s) => s.count);
    const ds = { data, label: "S\u1ED1 b\xE1o c\xE1o", backgroundColor: "#38bdf8", borderColor: "#0ea5e9", borderWidth: 1, borderRadius: 4 };
    this.yearlyChartData = { labels, datasets: [ds] };
  }
  loadMonthlyChart(year) {
    this.reportService.getMonthlyStats(year).subscribe((stats) => {
      const map2 = /* @__PURE__ */ new Map();
      stats.forEach((s) => map2.set(s.month, s.count));
      const labels = [];
      const data = [];
      for (let m = 1; m <= 12; m++) {
        labels.push(`Th\xE1ng ${m}`);
        data.push(map2.get(m) ?? 0);
      }
      const ds = { data, label: "S\u1ED1 b\xE1o c\xE1o", fill: false, borderColor: "#38bdf8", tension: 0.3, pointBackgroundColor: "#38bdf8" };
      this.monthlyChartData = { labels, datasets: [ds] };
    });
  }
  onYearChange(year) {
    this.selectedYear = +year;
    this.loadMonthlyChart(this.selectedYear);
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(i026.\u0275\u0275directiveInject(ReportService));
  };
  static \u0275cmp = /* @__PURE__ */ i026.\u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 14, vars: 8, consts: [[1, "card", "shadow", "mb-4"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center", "py-3"], [1, "m-0", "font-weight-bold", "text-primary"], [1, "form-select", "w-auto", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "card-body", 2, "position", "relative", "height", "300px"], ["baseChart", "", 3, "data", "options", "type"], [1, "card-header", "py-3"], [3, "value"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      i026.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h6", 2);
      i026.\u0275\u0275text(3, "B\xE1o c\xE1o theo Th\xE1ng");
      i026.\u0275\u0275elementEnd();
      i026.\u0275\u0275elementStart(4, "select", 3);
      i026.\u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Template_select_ngModelChange_4_listener($event) {
        i026.\u0275\u0275twoWayBindingSet(ctx.selectedYear, $event) || (ctx.selectedYear = $event);
        return $event;
      });
      i026.\u0275\u0275listener("ngModelChange", function DashboardComponent_Template_select_ngModelChange_4_listener($event) {
        return ctx.onYearChange($event);
      });
      i026.\u0275\u0275template(5, DashboardComponent_option_5_Template, 2, 2, "option", 4);
      i026.\u0275\u0275elementEnd()();
      i026.\u0275\u0275elementStart(6, "div", 5);
      i026.\u0275\u0275element(7, "canvas", 6);
      i026.\u0275\u0275elementEnd()();
      i026.\u0275\u0275elementStart(8, "div", 0)(9, "div", 7)(10, "h6", 2);
      i026.\u0275\u0275text(11, "B\xE1o c\xE1o theo N\u0103m");
      i026.\u0275\u0275elementEnd()();
      i026.\u0275\u0275elementStart(12, "div", 5);
      i026.\u0275\u0275element(13, "canvas", 6);
      i026.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i026.\u0275\u0275advance(4);
      i026.\u0275\u0275twoWayProperty("ngModel", ctx.selectedYear);
      i026.\u0275\u0275advance();
      i026.\u0275\u0275property("ngForOf", ctx.availableYears);
      i026.\u0275\u0275advance(2);
      i026.\u0275\u0275property("data", ctx.monthlyChartData)("options", ctx.monthlyChartOptions)("type", ctx.monthlyChartType);
      i026.\u0275\u0275advance(6);
      i026.\u0275\u0275property("data", ctx.yearlyChartData)("options", ctx.yearlyChartOptions)("type", ctx.yearlyChartType);
    }
  }, dependencies: [CommonModule16, i214.NgClass, i214.NgComponentOutlet, i214.NgForOf, i214.NgIf, i214.NgTemplateOutlet, i214.NgStyle, i214.NgSwitch, i214.NgSwitchCase, i214.NgSwitchDefault, i214.NgPlural, i214.NgPluralCase, i214.AsyncPipe, i214.UpperCasePipe, i214.LowerCasePipe, i214.JsonPipe, i214.SlicePipe, i214.DecimalPipe, i214.PercentPipe, i214.TitleCasePipe, i214.CurrencyPipe, i214.DatePipe, i214.I18nPluralPipe, i214.I18nSelectPipe, i214.KeyValuePipe, FormsModule11, i314.\u0275NgNoValidate, i314.NgSelectOption, i314.\u0275NgSelectMultipleOption, i314.DefaultValueAccessor, i314.NumberValueAccessor, i314.RangeValueAccessor, i314.CheckboxControlValueAccessor, i314.SelectControlValueAccessor, i314.SelectMultipleControlValueAccessor, i314.RadioControlValueAccessor, i314.NgControlStatus, i314.NgControlStatusGroup, i314.RequiredValidator, i314.MinLengthValidator, i314.MaxLengthValidator, i314.PatternValidator, i314.CheckboxRequiredValidator, i314.EmailValidator, i314.MinValidator, i314.MaxValidator, i314.NgModel, i314.NgModelGroup, i314.NgForm, NgChartsModule, i411.BaseChartDirective], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fc;\n  border-bottom: 1px solid #e3e6f0;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i026.\u0275setClassMetadata(DashboardComponent, [{
    type: Component17,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule16, FormsModule11, NgChartsModule], template: '<div class="card shadow mb-4">\r\n  <div class="card-header d-flex justify-content-between align-items-center py-3">\r\n    <h6 class="m-0 font-weight-bold text-primary">B\xE1o c\xE1o theo Th\xE1ng</h6>\r\n    <select class="form-select w-auto" [(ngModel)]="selectedYear" (ngModelChange)="onYearChange($event)">\r\n      <option *ngFor="let y of availableYears" [value]="y">N\u0103m {{ y }}</option>\r\n    </select>\r\n  </div>\r\n  <div class="card-body" style="position: relative; height: 300px;">\r\n    <canvas\r\n      baseChart\r\n      [data]="monthlyChartData"\r\n      [options]="monthlyChartOptions"\r\n      [type]="monthlyChartType">\r\n    </canvas>\r\n  </div>\r\n</div>\r\n<div class="card shadow mb-4">\r\n  <div class="card-header py-3">\r\n    <h6 class="m-0 font-weight-bold text-primary">B\xE1o c\xE1o theo N\u0103m</h6>\r\n  </div>\r\n  <div class="card-body" style="position: relative; height: 300px;">\r\n    <canvas\r\n      baseChart\r\n      [data]="yearlyChartData"\r\n      [options]="yearlyChartOptions"\r\n      [type]="yearlyChartType">\r\n    </canvas>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/components/dashboard/dashboard.component.scss */\n.card {\n  border: none;\n}\n.card .card-header {\n  background-color: #f8f9fc;\n  border-bottom: 1px solid #e3e6f0;\n}\n.card .card-body {\n  background-color: #fff;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], () => [{ type: ReportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i026.\u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/components/dashboard/dashboard.component.ts", lineNumber: 23 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fdashboard%2Fdashboard.component.ts%40DashboardComponent";
  function DashboardComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i026.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i026.\u0275\u0275replaceMetadata(DashboardComponent, m.default, [i026, i214, i314, i411, report_service_exports], [CommonModule16, FormsModule11, NgChartsModule, Component17], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && DashboardComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && DashboardComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/about-us/about-us.component.ts
import { Component as Component18 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { RouterModule as RouterModule10 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i027 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i19 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i215 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
var AboutUsComponent = class _AboutUsComponent {
  location;
  constructor(location) {
    this.location = location;
  }
  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
  static \u0275fac = function AboutUsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutUsComponent)(i027.\u0275\u0275directiveInject(i19.Location));
  };
  static \u0275cmp = /* @__PURE__ */ i027.\u0275\u0275defineComponent({ type: _AboutUsComponent, selectors: [["app-about-us"]], decls: 102, vars: 0, consts: [[1, "about-us-page"], [1, "container"], [1, "back-button", 3, "click"], [1, "back-arrow"], [1, "page-header"], [1, "author-date"], [1, "highlight-text"], [1, "section-block", "intro-section"], [1, "section-icon"], [1, "section-title"], [1, "highlight-date"], [1, "section-block", "mission-section"], [1, "highlight-tech"], [1, "section-block", "team-section"], [1, "team-circles-container"], [1, "team-circle"], [1, "circle-image"], ["src", "path/to/author_image_1.jpg", "alt", "Th\xE0nh vi\xEAn 1"], [1, "member-name"], [1, "member-title"], ["src", "path/to/author_image_2.jpg", "alt", "Th\xE0nh vi\xEAn 2"], ["src", "path/to/author_image_3.jpg", "alt", "Th\xE0nh vi\xEAn 3"], [1, "section-block", "community-section"], ["href", "https://your-contribution-link.com", "target", "_blank", 1, "btn-primary"], [1, "section-block", "contact-section"], [1, "contact-info"], ["href", "mailto:contact@checkscam.vn"], ["href", "tel:+84123456789"], ["href", "https://www.facebook.com/checkscam.official", "target", "_blank"], [1, "page-footer"]], template: function AboutUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i027.\u0275\u0275element(0, "app-header");
      i027.\u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "button", 2);
      i027.\u0275\u0275listener("click", function AboutUsComponent_Template_button_click_3_listener() {
        return ctx.goBack();
      });
      i027.\u0275\u0275elementStart(4, "span", 3);
      i027.\u0275\u0275text(5, "\u2190");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275text(6, " Quay l\u1EA1i ");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(7, "header", 4)(8, "h1");
      i027.\u0275\u0275text(9, "V\u1EC1 ch\xFAng t\xF4i");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(10, "p", 5);
      i027.\u0275\u0275text(11, " Vi\u1EBFt b\u1EDFi: ");
      i027.\u0275\u0275elementStart(12, "span", 6);
      i027.\u0275\u0275text(13, "\u0110\u1ED9i ng\u0169 CheckScam");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275text(14, " | Ng\xE0y: 06/13/2025 ");
      i027.\u0275\u0275elementEnd()();
      i027.\u0275\u0275elementStart(15, "section", 7)(16, "div", 8);
      i027.\u0275\u0275text(17, "\u{1F310}");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(18, "h2", 9);
      i027.\u0275\u0275text(19, "Gi\u1EDBi Thi\u1EC7u Chung");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(20, "p")(21, "strong");
      i027.\u0275\u0275text(22, "CheckScam (CS)");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275text(23, " l\xE0 m\u1ED9t d\u1EF1 \xE1n phi l\u1EE3i nhu\u1EADn c\u1EE7a Vi\u1EC7t Nam, ch\xEDnh th\u1EE9c ho\u1EA1t \u0111\u1ED9ng t\u1EEB ng\xE0y ");
      i027.\u0275\u0275elementStart(24, "span", 10);
      i027.\u0275\u0275text(25, "01 th\xE1ng 07 n\u0103m 2025");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275text(26, ", v\u1EDBi s\u1EE9 m\u1EC7nh cao c\u1EA3: **b\u1EA3o v\u1EC7 ng\u01B0\u1EDDi d\xF9ng tr\xEAn m\xF4i tr\u01B0\u1EDDng tr\u1EF1c tuy\u1EBFn.** Ch\xFAng t\xF4i cam k\u1EBFt ki\u1EC3m tra \u0111\u1ED9 tin c\u1EADy c\u1EE7a c\xE1c trang web v\xE0 ng\u0103n ch\u1EB7n truy c\u1EADp v\xE0o nh\u1EEFng ngu\u1ED3n kh\xF4ng an to\xE0n, g\xF3p ph\u1EA7n x\xE2y d\u1EF1ng m\u1ED9t kh\xF4ng gian m\u1EA1ng l\xE0nh m\u1EA1nh h\u01A1n cho m\u1ECDi ng\u01B0\u1EDDi. ");
      i027.\u0275\u0275elementEnd()();
      i027.\u0275\u0275elementStart(27, "section", 11)(28, "div", 8);
      i027.\u0275\u0275text(29, "\u{1F3AF}");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(30, "h2", 9);
      i027.\u0275\u0275text(31, "S\u1EE9 M\u1EC7nh v\xE0 Ho\u1EA1t \u0110\u1ED9ng");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(32, "p");
      i027.\u0275\u0275text(33, " D\u1EF1 \xE1n cung c\u1EA5p c\xE1c th\xF4ng tin c\u1EA3nh b\xE1o l\u1EEBa \u0111\u1EA3o v\xE0 gi\u1EA3i ph\xE1p b\u1EA3o m\u1EADt to\xE0n di\u1EC7n, gi\xFAp ng\u01B0\u1EDDi d\xF9ng d\u1EC5 d\xE0ng nh\u1EADn di\u1EC7n v\xE0 ch\u1EE7 \u0111\u1ED9ng tr\xE1nh xa c\xE1c trang web l\u1EEBa \u0111\u1EA3o, \u0111\u1ED9c h\u1EA1i tr\xEAn nhi\u1EC1u n\u1EC1n t\u1EA3ng ph\u1ED5 bi\u1EBFn nh\u01B0 **Facebook, YouTube, TikTok** v\xE0 c\xE1c k\xEAnh tr\u1EF1c tuy\u1EBFn kh\xE1c. CheckScam ti\xEAn phong \xE1p d\u1EE5ng ");
      i027.\u0275\u0275elementStart(34, "span", 12);
      i027.\u0275\u0275text(35, "c\xF4ng ngh\u1EC7 Tr\xED tu\u1EC7 Nh\xE2n t\u1EA1o (AI) v\xE0 H\u1ECDc m\xE1y (Machine Learning - ML)");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275text(36, " ti\xEAn ti\u1EBFn, k\u1EBFt h\u1EE3p ch\u1EB7t ch\u1EBD v\u1EDBi s\u1EF1 \u0111\xF3ng g\xF3p qu\xFD b\xE1u t\u1EEB c\u1ED9ng \u0111\u1ED3ng, nh\u1EB1m x\xE2y d\u1EF1ng v\xE0 duy tr\xEC m\u1ED9t c\u01A1 s\u1EDF d\u1EEF li\u1EC7u l\u1EEBa \u0111\u1EA3o kh\u1ED5ng l\u1ED3, c\u1EADp nh\u1EADt li\xEAn t\u1EE5c. ");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(37, "p");
      i027.\u0275\u0275text(38, " M\u1ED7i b\xE1o c\xE1o, m\u1ED7i d\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c c\u1ED9ng \u0111\u1ED3ng cung c\u1EA5p \u0111\u1EC1u l\xE0 m\u1EA3nh gh\xE9p quan tr\u1ECDng, gi\xFAp h\u1EC7 th\u1ED1ng AI c\u1EE7a ch\xFAng t\xF4i tr\u1EDF n\xEAn th\xF4ng minh h\u01A1n, ph\xE1t hi\u1EC7n l\u1EEBa \u0111\u1EA3o ch\xEDnh x\xE1c h\u01A1n. ");
      i027.\u0275\u0275elementEnd()();
      i027.\u0275\u0275elementStart(39, "section", 13)(40, "div", 8);
      i027.\u0275\u0275text(41, "\u{1F91D}");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(42, "h2", 9);
      i027.\u0275\u0275text(43, "\u0110\u1ED9i Ng\u0169 Ph\xE1t Tri\u1EC3n");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(44, "p");
      i027.\u0275\u0275text(45, " CheckScam \u0111\u01B0\u1EE3c x\xE2y d\u1EF1ng v\xE0 v\u1EADn h\xE0nh b\u1EDFi m\u1ED9t \u0111\u1ED9i ng\u0169 \u0111am m\xEA, t\xE2m huy\u1EBFt v\u1EDBi m\u1EE5c ti\xEAu t\u1EA1o ra gi\xE1 tr\u1ECB cho c\u1ED9ng \u0111\u1ED3ng. Ch\xFAng t\xF4i l\xE0 nh\u1EEFng chuy\xEAn gia trong l\u0129nh v\u1EF1c c\xF4ng ngh\u1EC7 th\xF4ng tin, an to\xE0n th\xF4ng tin v\xE0 ph\xE2n t\xEDch d\u1EEF li\u1EC7u. ");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(46, "div", 14)(47, "div", 15)(48, "div", 16);
      i027.\u0275\u0275element(49, "img", 17);
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(50, "p", 18);
      i027.\u0275\u0275text(51, "Andev");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(52, "p", 19);
      i027.\u0275\u0275text(53, "Tr\u01B0\u1EDFng d\u1EF1 \xE1n");
      i027.\u0275\u0275elementEnd()();
      i027.\u0275\u0275elementStart(54, "div", 15)(55, "div", 16);
      i027.\u0275\u0275element(56, "img", 20);
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(57, "p", 18);
      i027.\u0275\u0275text(58, "Duc");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(59, "p", 19);
      i027.\u0275\u0275text(60, "Tr\u01B0\u1EDFng d\u1EF1 \xE1n");
      i027.\u0275\u0275elementEnd()();
      i027.\u0275\u0275elementStart(61, "div", 15)(62, "div", 16);
      i027.\u0275\u0275element(63, "img", 21);
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(64, "p", 18);
      i027.\u0275\u0275text(65, "Trang");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(66, "p", 19);
      i027.\u0275\u0275text(67, "Tr\u01B0\u1EDFng d\u1EF1 \xE1n");
      i027.\u0275\u0275elementEnd()()()();
      i027.\u0275\u0275elementStart(68, "section", 22)(69, "div", 8);
      i027.\u0275\u0275text(70, "\u{1F4E3}");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(71, "h2", 9);
      i027.\u0275\u0275text(72, "K\xEAu G\u1ECDi C\u1ED9ng \u0110\u1ED3ng");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(73, "p");
      i027.\u0275\u0275text(74, " CheckScam l\xE0 m\u1ED9t d\u1EF1 \xE1n m\u1EDF, lu\xF4n ch\xE0o \u0111\xF3n s\u1EF1 \u0111\xF3ng g\xF3p t\u1EEB m\u1ECDi c\xE1 nh\xE2n v\xE0 t\u1ED5 ch\u1EE9c. S\u1EF1 tham gia c\u1EE7a c\u1ED9ng \u0111\u1ED3ng l\xE0 y\u1EBFu t\u1ED1 then ch\u1ED1t gi\xFAp ch\xFAng t\xF4i ho\xE0n thi\u1EC7n s\u1EA3n ph\u1EA9m, n\xE2ng cao kh\u1EA3 n\u0103ng b\u1EA3o v\u1EC7 ng\u01B0\u1EDDi d\xF9ng tr\u01B0\u1EDBc c\xE1c m\u1ED1i \u0111e d\u1ECDa tr\u1EF1c tuy\u1EBFn ng\xE0y c\xE0ng tinh vi. H\xE3y c\xF9ng chung tay x\xE2y d\u1EF1ng m\u1ED9t c\u1ED9ng \u0111\u1ED3ng m\u1EA1ng an to\xE0n v\xE0 \u0111\xE1ng tin c\u1EADy! ");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(75, "a", 23);
      i027.\u0275\u0275text(76, " T\xECm hi\u1EC3u c\xE1ch \u0111\xF3ng g\xF3p ");
      i027.\u0275\u0275elementEnd()();
      i027.\u0275\u0275elementStart(77, "section", 24)(78, "div", 8);
      i027.\u0275\u0275text(79, "\u2709\uFE0F");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(80, "h2", 9);
      i027.\u0275\u0275text(81, "K\u1EBFt N\u1ED1i V\u1EDBi Ch\xFAng T\xF4i");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(82, "div", 25)(83, "p")(84, "strong");
      i027.\u0275\u0275text(85, "Email:");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(86, "a", 26);
      i027.\u0275\u0275text(87, "contact@checkscam.vn");
      i027.\u0275\u0275elementEnd()();
      i027.\u0275\u0275elementStart(88, "p")(89, "strong");
      i027.\u0275\u0275text(90, "\u0110i\u1EC7n tho\u1EA1i:");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(91, "a", 27);
      i027.\u0275\u0275text(92, "+84 123 456 789");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275text(93, " (Ch\u1EC9 gi\u1EDD h\xE0nh ch\xEDnh)");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(94, "p")(95, "strong");
      i027.\u0275\u0275text(96, "Fanpage Facebook:");
      i027.\u0275\u0275elementEnd();
      i027.\u0275\u0275elementStart(97, "a", 28);
      i027.\u0275\u0275text(98, "CheckScam Official");
      i027.\u0275\u0275elementEnd()()()();
      i027.\u0275\u0275elementStart(99, "footer", 29)(100, "p");
      i027.\u0275\u0275text(101, "C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 tin t\u01B0\u1EDFng v\xE0 \u0111\u1ED3ng h\xE0nh c\xF9ng CheckScam.");
      i027.\u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterModule10, i215.RouterOutlet, i215.RouterLink, i215.RouterLinkActive, i215.\u0275EmptyOutletComponent, HeaderComponent], styles: ['@charset "UTF-8";\n\n\n\n.about-us-page[_ngcontent-%COMP%] {\n  padding-top: 60px;\n  padding-bottom: 60px;\n  background-color: #f8fbfd;\n  font-family: "Inter", sans-serif;\n  line-height: 1.7;\n  color: #333;\n  animation: _ngcontent-%COMP%_fadeIn 0.8s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 40px;\n  background-color: white;\n  border-radius: 12px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n.back-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #4CAF50;\n  cursor: pointer;\n  font-size: 1.1em;\n  font-weight: 600;\n  margin-bottom: 25px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  transition: color 0.3s ease, transform 0.3s ease;\n}\n.back-button[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 1.2em;\n  transition: transform 0.3s ease;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  color: rgb(60.5577689243, 139.4422310757, 63.7450199203);\n  transform: translateX(-5px);\n}\n.back-button[_ngcontent-%COMP%]:hover   .back-arrow[_ngcontent-%COMP%] {\n  transform: translateX(-3px);\n}\n@media (max-width: 480px) {\n  .back-button[_ngcontent-%COMP%] {\n    font-size: 1em;\n    margin-bottom: 20px;\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #eee;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3em;\n  color: #2c3e50;\n  margin-bottom: 10px;\n  line-height: 1.2;\n  font-weight: 800;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .highlight-text[_ngcontent-%COMP%] {\n  color: #4CAF50;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2em;\n  }\n}\n@media (max-width: 480px) {\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%] {\n  font-size: 0.95em;\n  color: #666;\n  font-style: italic;\n}\n.page-header[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%]   .highlight-text[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n}\n.page-header[_ngcontent-%COMP%]   .social-share-buttons[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .social-share-buttons[_ngcontent-%COMP%]   .share-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #f0f0f0;\n  color: #333;\n  justify-content: center;\n  align-items: center;\n  margin: 0 5px;\n  font-size: 1.1em;\n  transition: all 0.3s ease;\n}\n.page-header[_ngcontent-%COMP%]   .social-share-buttons[_ngcontent-%COMP%]   .share-icon[_ngcontent-%COMP%]:hover {\n  background-color: #4CAF50;\n  color: white;\n  transform: translateY(-3px);\n}\n.page-header[_ngcontent-%COMP%]   .social-share-buttons[_ngcontent-%COMP%]   .share-icon.facebook-share[_ngcontent-%COMP%] {\n  background-color: #3b5998;\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .social-share-buttons[_ngcontent-%COMP%]   .share-icon.facebook-share[_ngcontent-%COMP%]:hover {\n  background-color: rgb(44.7393364929, 67.4881516588, 115.2606635071);\n}\n.section-block[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  padding: 30px;\n  background-color: #fefefe;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  border-left: 5px solid #4CAF50;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.section-block[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n}\n.section-block[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .section-block[_ngcontent-%COMP%] {\n    padding: 25px;\n    margin-bottom: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .section-block[_ngcontent-%COMP%] {\n    padding: 20px;\n    margin-bottom: 25px;\n  }\n}\n.section-icon[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  color: #4CAF50;\n  margin-bottom: 15px;\n  display: block;\n  text-align: center;\n  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: #2c3e50;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 20px;\n  text-align: center;\n  position: relative;\n}\n.section-title[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  width: 60px;\n  height: 3px;\n  background-color: #4CAF50;\n  margin: 10px auto 0;\n  border-radius: 2px;\n}\n@media (max-width: 768px) {\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n  }\n}\n@media (max-width: 480px) {\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\np[_ngcontent-%COMP%] {\n  font-size: 1.05em;\n  color: #333;\n  margin-bottom: 15px;\n  text-align: justify;\n}\np[_ngcontent-%COMP%]   .highlight-date[_ngcontent-%COMP%], \np[_ngcontent-%COMP%]   .highlight-tech[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #4CAF50;\n}\n.team-circles-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n.team-circle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 150px;\n  transition: transform 0.3s ease;\n}\n.team-circle[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n}\n.circle-image[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);\n  border: 4px solid #4CAF50;\n}\n.circle-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.member-name[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  font-weight: 700;\n  color: #2c3e50;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n.member-title[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: #666;\n}\n@media (max-width: 768px) {\n  .team-circles-container[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .team-circle[_ngcontent-%COMP%] {\n    width: 120px;\n  }\n  .circle-image[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n}\n@media (max-width: 576px) {\n  .team-circles-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: center;\n    gap: 15px;\n  }\n  .team-circle[_ngcontent-%COMP%] {\n    width: 100px;\n    margin-bottom: 0;\n  }\n  .circle-image[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n  .member-name[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n  .member-title[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      45deg,\n      #4CAF50,\n      rgb(109.9800796813, 192.0199203187, 113.2948207171));\n  color: white;\n  padding: 12px 25px;\n  border-radius: 30px;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 1em;\n  transition: all 0.3s ease;\n  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);\n  margin-top: 20px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);\n  background:\n    linear-gradient(\n      45deg,\n      rgb(68.2788844622, 157.2211155378, 71.8725099602),\n      #4CAF50);\n}\n.contact-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 1em;\n}\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2c3e50;\n}\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  text-decoration: none;\n  font-weight: 500;\n}\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.page-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 50px;\n  padding-top: 20px;\n  border-top: 1px solid #eee;\n  color: #666;\n  font-size: 0.9em;\n}\n@media (max-width: 480px) {\n  .page-footer[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    font-size: 0.8em;\n  }\n}\n/*# sourceMappingURL=about-us.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i027.\u0275setClassMetadata(AboutUsComponent, [{
    type: Component18,
    args: [{ selector: "app-about-us", standalone: true, imports: [RouterModule10, HeaderComponent], template: '<app-header></app-header> <div class="about-us-page">\r\n  <div class="container">\r\n    <button class="back-button" (click)="goBack()">\r\n      <span class="back-arrow">\u2190</span> Quay l\u1EA1i\r\n    </button>\r\n\r\n    <header class="page-header">\r\n      <h1>V\u1EC1 ch\xFAng t\xF4i</h1>\r\n      <p class="author-date">\r\n        Vi\u1EBFt b\u1EDFi: <span class="highlight-text">\u0110\u1ED9i ng\u0169 CheckScam</span> | Ng\xE0y: 06/13/2025\r\n      </p>\r\n      </header>\r\n\r\n    <section class="section-block intro-section">\r\n      <div class="section-icon">\u{1F310}</div>\r\n      <h2 class="section-title">Gi\u1EDBi Thi\u1EC7u Chung</h2>\r\n      <p>\r\n        <strong>CheckScam (CS)</strong> l\xE0 m\u1ED9t d\u1EF1 \xE1n phi l\u1EE3i nhu\u1EADn c\u1EE7a Vi\u1EC7t Nam, ch\xEDnh th\u1EE9c ho\u1EA1t \u0111\u1ED9ng t\u1EEB ng\xE0y\r\n        <span class="highlight-date">01 th\xE1ng 07 n\u0103m 2025</span>, v\u1EDBi s\u1EE9 m\u1EC7nh cao c\u1EA3:\r\n        **b\u1EA3o v\u1EC7 ng\u01B0\u1EDDi d\xF9ng tr\xEAn m\xF4i tr\u01B0\u1EDDng tr\u1EF1c tuy\u1EBFn.** Ch\xFAng t\xF4i cam k\u1EBFt ki\u1EC3m tra \u0111\u1ED9 tin c\u1EADy c\u1EE7a c\xE1c trang web v\xE0\r\n        ng\u0103n ch\u1EB7n truy c\u1EADp v\xE0o nh\u1EEFng ngu\u1ED3n kh\xF4ng an to\xE0n, g\xF3p ph\u1EA7n x\xE2y d\u1EF1ng m\u1ED9t kh\xF4ng gian m\u1EA1ng l\xE0nh m\u1EA1nh h\u01A1n cho m\u1ECDi ng\u01B0\u1EDDi.\r\n      </p>\r\n    </section>\r\n\r\n    <section class="section-block mission-section">\r\n      <div class="section-icon">\u{1F3AF}</div>\r\n      <h2 class="section-title">S\u1EE9 M\u1EC7nh v\xE0 Ho\u1EA1t \u0110\u1ED9ng</h2>\r\n      <p>\r\n        D\u1EF1 \xE1n cung c\u1EA5p c\xE1c th\xF4ng tin c\u1EA3nh b\xE1o l\u1EEBa \u0111\u1EA3o v\xE0 gi\u1EA3i ph\xE1p b\u1EA3o m\u1EADt to\xE0n di\u1EC7n, gi\xFAp ng\u01B0\u1EDDi d\xF9ng d\u1EC5 d\xE0ng\r\n        nh\u1EADn di\u1EC7n v\xE0 ch\u1EE7 \u0111\u1ED9ng tr\xE1nh xa c\xE1c trang web l\u1EEBa \u0111\u1EA3o, \u0111\u1ED9c h\u1EA1i tr\xEAn nhi\u1EC1u n\u1EC1n t\u1EA3ng ph\u1ED5 bi\u1EBFn nh\u01B0\r\n        **Facebook, YouTube, TikTok** v\xE0 c\xE1c k\xEAnh tr\u1EF1c tuy\u1EBFn kh\xE1c. CheckScam ti\xEAn phong \xE1p d\u1EE5ng\r\n        <span class="highlight-tech">c\xF4ng ngh\u1EC7 Tr\xED tu\u1EC7 Nh\xE2n t\u1EA1o (AI) v\xE0 H\u1ECDc m\xE1y (Machine Learning - ML)</span>\r\n        ti\xEAn ti\u1EBFn, k\u1EBFt h\u1EE3p ch\u1EB7t ch\u1EBD v\u1EDBi s\u1EF1 \u0111\xF3ng g\xF3p qu\xFD b\xE1u t\u1EEB c\u1ED9ng \u0111\u1ED3ng, nh\u1EB1m x\xE2y d\u1EF1ng v\xE0 duy tr\xEC m\u1ED9t c\u01A1 s\u1EDF d\u1EEF li\u1EC7u l\u1EEBa \u0111\u1EA3o kh\u1ED5ng l\u1ED3, c\u1EADp nh\u1EADt li\xEAn t\u1EE5c.\r\n      </p>\r\n      <p>\r\n        M\u1ED7i b\xE1o c\xE1o, m\u1ED7i d\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c c\u1ED9ng \u0111\u1ED3ng cung c\u1EA5p \u0111\u1EC1u l\xE0 m\u1EA3nh gh\xE9p quan tr\u1ECDng, gi\xFAp h\u1EC7 th\u1ED1ng AI c\u1EE7a ch\xFAng t\xF4i\r\n        tr\u1EDF n\xEAn th\xF4ng minh h\u01A1n, ph\xE1t hi\u1EC7n l\u1EEBa \u0111\u1EA3o ch\xEDnh x\xE1c h\u01A1n.\r\n      </p>\r\n    </section>\r\n\r\n    <section class="section-block team-section">\r\n      <div class="section-icon">\u{1F91D}</div>\r\n      <h2 class="section-title">\u0110\u1ED9i Ng\u0169 Ph\xE1t Tri\u1EC3n</h2>\r\n      <p>\r\n        CheckScam \u0111\u01B0\u1EE3c x\xE2y d\u1EF1ng v\xE0 v\u1EADn h\xE0nh b\u1EDFi m\u1ED9t \u0111\u1ED9i ng\u0169 \u0111am m\xEA, t\xE2m huy\u1EBFt v\u1EDBi m\u1EE5c ti\xEAu t\u1EA1o ra gi\xE1 tr\u1ECB cho c\u1ED9ng \u0111\u1ED3ng.\r\n        Ch\xFAng t\xF4i l\xE0 nh\u1EEFng chuy\xEAn gia trong l\u0129nh v\u1EF1c c\xF4ng ngh\u1EC7 th\xF4ng tin, an to\xE0n th\xF4ng tin v\xE0 ph\xE2n t\xEDch d\u1EEF li\u1EC7u.\r\n      </p>\r\n      <div class="team-circles-container">\r\n        <div class="team-circle">\r\n          <div class="circle-image">\r\n            <img src="path/to/author_image_1.jpg" alt="Th\xE0nh vi\xEAn 1">\r\n          </div>\r\n          <p class="member-name">Andev</p>\r\n          <p class="member-title">Tr\u01B0\u1EDFng d\u1EF1 \xE1n</p>\r\n        </div>\r\n        <div class="team-circle">\r\n          <div class="circle-image">\r\n            <img src="path/to/author_image_2.jpg" alt="Th\xE0nh vi\xEAn 2">\r\n          </div>\r\n          <p class="member-name">Duc</p>\r\n          <p class="member-title">Tr\u01B0\u1EDFng d\u1EF1 \xE1n</p>\r\n        </div>\r\n        <div class="team-circle">\r\n          <div class="circle-image">\r\n            <img src="path/to/author_image_3.jpg" alt="Th\xE0nh vi\xEAn 3">\r\n          </div>\r\n          <p class="member-name">Trang</p>\r\n          <p class="member-title">Tr\u01B0\u1EDFng d\u1EF1 \xE1n</p>\r\n        </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class="section-block community-section">\r\n      <div class="section-icon">\u{1F4E3}</div>\r\n      <h2 class="section-title">K\xEAu G\u1ECDi C\u1ED9ng \u0110\u1ED3ng</h2>\r\n      <p>\r\n        CheckScam l\xE0 m\u1ED9t d\u1EF1 \xE1n m\u1EDF, lu\xF4n ch\xE0o \u0111\xF3n s\u1EF1 \u0111\xF3ng g\xF3p t\u1EEB m\u1ECDi c\xE1 nh\xE2n v\xE0 t\u1ED5 ch\u1EE9c. S\u1EF1 tham gia c\u1EE7a c\u1ED9ng \u0111\u1ED3ng\r\n        l\xE0 y\u1EBFu t\u1ED1 then ch\u1ED1t gi\xFAp ch\xFAng t\xF4i ho\xE0n thi\u1EC7n s\u1EA3n ph\u1EA9m, n\xE2ng cao kh\u1EA3 n\u0103ng b\u1EA3o v\u1EC7 ng\u01B0\u1EDDi d\xF9ng tr\u01B0\u1EDBc\r\n        c\xE1c m\u1ED1i \u0111e d\u1ECDa tr\u1EF1c tuy\u1EBFn ng\xE0y c\xE0ng tinh vi. H\xE3y c\xF9ng chung tay x\xE2y d\u1EF1ng m\u1ED9t c\u1ED9ng \u0111\u1ED3ng m\u1EA1ng an to\xE0n v\xE0 \u0111\xE1ng tin c\u1EADy!\r\n      </p>\r\n      <a href="https://your-contribution-link.com" target="_blank" class="btn-primary">\r\n        T\xECm hi\u1EC3u c\xE1ch \u0111\xF3ng g\xF3p\r\n      </a>\r\n    </section>\r\n\r\n    <section class="section-block contact-section">\r\n      <div class="section-icon">\u2709\uFE0F</div>\r\n      <h2 class="section-title">K\u1EBFt N\u1ED1i V\u1EDBi Ch\xFAng T\xF4i</h2>\r\n      <div class="contact-info">\r\n        <p><strong>Email:</strong> <a href="mailto:contact&#64;checkscam.vn">contact&#64;checkscam.vn</a></p>\r\n        <p><strong>\u0110i\u1EC7n tho\u1EA1i:</strong> <a href="tel:+84123456789">+84 123 456 789</a> (Ch\u1EC9 gi\u1EDD h\xE0nh ch\xEDnh)</p>\r\n        <p><strong>Fanpage Facebook:</strong> <a href="https://www.facebook.com/checkscam.official" target="_blank">CheckScam Official</a></p>\r\n        </div>\r\n    </section>\r\n\r\n    <footer class="page-footer">\r\n      <p>C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 tin t\u01B0\u1EDFng v\xE0 \u0111\u1ED3ng h\xE0nh c\xF9ng CheckScam.</p>\r\n    </footer>\r\n  </div>\r\n</div>', styles: ['@charset "UTF-8";\n\n/* src/app/components/about-us/about-us.component.scss */\n.about-us-page {\n  padding-top: 60px;\n  padding-bottom: 60px;\n  background-color: #f8fbfd;\n  font-family: "Inter", sans-serif;\n  line-height: 1.7;\n  color: #333;\n  animation: fadeIn 0.8s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 40px;\n  background-color: white;\n  border-radius: 12px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .container {\n    padding: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .container {\n    padding: 20px;\n  }\n}\n.back-button {\n  background: none;\n  border: none;\n  color: #4CAF50;\n  cursor: pointer;\n  font-size: 1.1em;\n  font-weight: 600;\n  margin-bottom: 25px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  transition: color 0.3s ease, transform 0.3s ease;\n}\n.back-button .back-arrow {\n  margin-right: 8px;\n  font-size: 1.2em;\n  transition: transform 0.3s ease;\n}\n.back-button:hover {\n  color: rgb(60.5577689243, 139.4422310757, 63.7450199203);\n  transform: translateX(-5px);\n}\n.back-button:hover .back-arrow {\n  transform: translateX(-3px);\n}\n@media (max-width: 480px) {\n  .back-button {\n    font-size: 1em;\n    margin-bottom: 20px;\n  }\n}\n.page-header {\n  text-align: center;\n  margin-bottom: 40px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #eee;\n}\n.page-header h1 {\n  font-size: 3em;\n  color: #2c3e50;\n  margin-bottom: 10px;\n  line-height: 1.2;\n  font-weight: 800;\n}\n.page-header h1 .highlight-text {\n  color: #4CAF50;\n}\n@media (max-width: 768px) {\n  .page-header h1 {\n    font-size: 2.2em;\n  }\n}\n@media (max-width: 480px) {\n  .page-header h1 {\n    font-size: 1.8em;\n  }\n}\n.page-header .author-date {\n  font-size: 0.95em;\n  color: #666;\n  font-style: italic;\n}\n.page-header .author-date .highlight-text {\n  color: #2c3e50;\n  font-weight: 600;\n}\n.page-header .social-share-buttons {\n  margin-top: 20px;\n}\n.page-header .social-share-buttons .share-icon {\n  display: inline-flex;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #f0f0f0;\n  color: #333;\n  justify-content: center;\n  align-items: center;\n  margin: 0 5px;\n  font-size: 1.1em;\n  transition: all 0.3s ease;\n}\n.page-header .social-share-buttons .share-icon:hover {\n  background-color: #4CAF50;\n  color: white;\n  transform: translateY(-3px);\n}\n.page-header .social-share-buttons .share-icon.facebook-share {\n  background-color: #3b5998;\n  color: white;\n}\n.page-header .social-share-buttons .share-icon.facebook-share:hover {\n  background-color: rgb(44.7393364929, 67.4881516588, 115.2606635071);\n}\n.section-block {\n  margin-bottom: 40px;\n  padding: 30px;\n  background-color: #fefefe;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  border-left: 5px solid #4CAF50;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.section-block:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n}\n.section-block:last-of-type {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .section-block {\n    padding: 25px;\n    margin-bottom: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .section-block {\n    padding: 20px;\n    margin-bottom: 25px;\n  }\n}\n.section-icon {\n  font-size: 2.5em;\n  color: #4CAF50;\n  margin-bottom: 15px;\n  display: block;\n  text-align: center;\n  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));\n}\n.section-title {\n  font-size: 2em;\n  color: #2c3e50;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 20px;\n  text-align: center;\n  position: relative;\n}\n.section-title::after {\n  content: "";\n  display: block;\n  width: 60px;\n  height: 3px;\n  background-color: #4CAF50;\n  margin: 10px auto 0;\n  border-radius: 2px;\n}\n@media (max-width: 768px) {\n  .section-title {\n    font-size: 1.8em;\n  }\n}\n@media (max-width: 480px) {\n  .section-title {\n    font-size: 1.5em;\n  }\n}\np {\n  font-size: 1.05em;\n  color: #333;\n  margin-bottom: 15px;\n  text-align: justify;\n}\np .highlight-date,\np .highlight-tech {\n  font-weight: 600;\n  color: #4CAF50;\n}\n.team-circles-container {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n.team-circle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 150px;\n  transition: transform 0.3s ease;\n}\n.team-circle:hover {\n  transform: translateY(-8px);\n}\n.circle-image {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);\n  border: 4px solid #4CAF50;\n}\n.circle-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.member-name {\n  font-size: 1.1em;\n  font-weight: 700;\n  color: #2c3e50;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n.member-title {\n  font-size: 0.9em;\n  color: #666;\n}\n@media (max-width: 768px) {\n  .team-circles-container {\n    gap: 20px;\n  }\n  .team-circle {\n    width: 120px;\n  }\n  .circle-image {\n    width: 100px;\n    height: 100px;\n  }\n}\n@media (max-width: 576px) {\n  .team-circles-container {\n    flex-direction: row;\n    justify-content: center;\n    gap: 15px;\n  }\n  .team-circle {\n    width: 100px;\n    margin-bottom: 0;\n  }\n  .circle-image {\n    width: 80px;\n    height: 80px;\n  }\n  .member-name {\n    font-size: 1em;\n  }\n  .member-title {\n    font-size: 0.8em;\n  }\n}\n.btn-primary {\n  display: inline-block;\n  background:\n    linear-gradient(\n      45deg,\n      #4CAF50,\n      rgb(109.9800796813, 192.0199203187, 113.2948207171));\n  color: white;\n  padding: 12px 25px;\n  border-radius: 30px;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 1em;\n  transition: all 0.3s ease;\n  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);\n  margin-top: 20px;\n}\n.btn-primary:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);\n  background:\n    linear-gradient(\n      45deg,\n      rgb(68.2788844622, 157.2211155378, 71.8725099602),\n      #4CAF50);\n}\n.contact-info {\n  margin-top: 20px;\n}\n.contact-info p {\n  margin-bottom: 10px;\n  font-size: 1em;\n}\n.contact-info p strong {\n  color: #2c3e50;\n}\n.contact-info p a {\n  color: #4CAF50;\n  text-decoration: none;\n  font-weight: 500;\n}\n.contact-info p a:hover {\n  text-decoration: underline;\n}\n.page-footer {\n  text-align: center;\n  margin-top: 50px;\n  padding-top: 20px;\n  border-top: 1px solid #eee;\n  color: #666;\n  font-size: 0.9em;\n}\n@media (max-width: 480px) {\n  .page-footer {\n    margin-top: 30px;\n    font-size: 0.8em;\n  }\n}\n/*# sourceMappingURL=about-us.component.css.map */\n'] }]
  }], () => [{ type: i19.Location }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i027.\u0275setClassDebugInfo(AboutUsComponent, { className: "AboutUsComponent", filePath: "src/app/components/about-us/about-us.component.ts", lineNumber: 14 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fabout-us%2Fabout-us.component.ts%40AboutUsComponent";
  function AboutUsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i027.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i027.\u0275\u0275replaceMetadata(AboutUsComponent, m.default, [i027, i215, i19], [RouterModule10, HeaderComponent, Component18], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AboutUsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AboutUsComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/news/list-news/list-news.component.ts
import { CommonModule as CommonModule17 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { Component as Component19 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { FormsModule as FormsModule12 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import { RouterModule as RouterModule11 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i028 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i216 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i315 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i412 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
function ListNewsComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i028.\u0275\u0275getCurrentView();
    i028.\u0275\u0275elementStart(0, "span", 8);
    i028.\u0275\u0275listener("click", function ListNewsComponent_span_14_Template_span_click_0_listener() {
      const page_r2 = i028.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i028.\u0275\u0275nextContext();
      return i028.\u0275\u0275resetView(ctx_r2.changePage(page_r2));
    });
    i028.\u0275\u0275text(1);
    i028.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    const ctx_r2 = i028.\u0275\u0275nextContext();
    i028.\u0275\u0275classProp("active", ctx_r2.currentPage === page_r2);
    i028.\u0275\u0275advance();
    i028.\u0275\u0275textInterpolate(page_r2);
  }
}
function ListNewsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i028.\u0275\u0275getCurrentView();
    i028.\u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "img", 18);
    i028.\u0275\u0275listener("error", function ListNewsComponent_div_18_Template_img_error_2_listener($event) {
      i028.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i028.\u0275\u0275nextContext();
      return i028.\u0275\u0275resetView(ctx_r2.onImageError($event));
    });
    i028.\u0275\u0275elementEnd()();
    i028.\u0275\u0275elementStart(3, "div", 19)(4, "h3", 20)(5, "a", 21);
    i028.\u0275\u0275text(6);
    i028.\u0275\u0275elementEnd()();
    i028.\u0275\u0275elementStart(7, "p", 22);
    i028.\u0275\u0275text(8);
    i028.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r5 = ctx.$implicit;
    const ctx_r2 = i028.\u0275\u0275nextContext();
    i028.\u0275\u0275advance(2);
    i028.\u0275\u0275property("src", (post_r5.attachments == null ? null : post_r5.attachments.length) ? ctx_r2.getImageUrl(post_r5.attachments[0]) : "assets/img/placeholder.png", i028.\u0275\u0275sanitizeUrl);
    i028.\u0275\u0275advance(3);
    i028.\u0275\u0275property("routerLink", "/view-news/" + post_r5.id);
    i028.\u0275\u0275advance();
    i028.\u0275\u0275textInterpolate(post_r5.name);
    i028.\u0275\u0275advance(2);
    i028.\u0275\u0275textInterpolate(post_r5.shortDescription);
  }
}
function ListNewsComponent_app_chat_box_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = i028.\u0275\u0275getCurrentView();
    i028.\u0275\u0275elementStart(0, "app-chat-box", 23);
    i028.\u0275\u0275listener("close", function ListNewsComponent_app_chat_box_21_Template_app_chat_box_close_0_listener() {
      i028.\u0275\u0275restoreView(_r6);
      const ctx_r2 = i028.\u0275\u0275nextContext();
      return i028.\u0275\u0275resetView(ctx_r2.closeChatbox());
    });
    i028.\u0275\u0275elementEnd();
  }
}
var ListNewsComponent = class _ListNewsComponent {
  newsService;
  router;
  /* Tin tức */
  posts = [];
  pagedPosts = [];
  /* Phân trang */
  pageSize = 6;
  currentPage = 1;
  totalPosts = 0;
  totalPages = 0;
  pages = [];
  startIndex = 0;
  endIndex = 0;
  /* Tìm kiếm */
  searchTerm = "";
  /* Chat */
  showChatbox = false;
  /* URL ảnh */
  imageBaseUrl = "http://localhost:8080/api/v1/report/image/";
  constructor(newsService, router) {
    this.newsService = newsService;
    this.router = router;
  }
  /* ===== Lifecycle ===== */
  ngOnInit() {
    this.loadAllNews();
  }
  /* ===== API ===== */
  loadAllNews() {
    this.newsService.getListNews().subscribe({
      next: (res) => {
        this.posts = res;
        this.totalPosts = this.posts.length;
        this.calculateTotalPages();
        this.paginatePosts();
      },
      error: (err) => alert(err?.error || "L\u1ED7i khi t\u1EA3i danh s\xE1ch tin t\u1EE9c")
    });
  }
  /* ===== Ảnh ===== */
  getImageUrl({ url }) {
    if (!url)
      return "assets/img/placeholder.png";
    return url.startsWith("http") ? url : `${this.imageBaseUrl}${encodeURIComponent(url)}`;
  }
  onImageError(ev) {
    const img = ev.target;
    if (!img.src.includes("placeholder.png")) {
      img.src = "assets/img/placeholder.png";
    }
  }
  /* ===== Tìm kiếm & phân trang ===== */
  searchPosts() {
    this.currentPage = 1;
    this.paginatePosts();
  }
  paginatePosts() {
    const list = this.searchTerm ? this.posts.filter((p) => p.name.toLowerCase().includes(this.searchTerm.toLowerCase())) : this.posts;
    this.totalPosts = list.length;
    this.calculateTotalPages();
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = Math.min(this.startIndex + this.pageSize - 1, this.totalPosts - 1);
    this.pagedPosts = list.slice(this.startIndex, this.endIndex + 1);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginatePosts();
    }
  }
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalPosts / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  /* ===== Chat ===== */
  onAiTuVanClicked() {
    this.showChatbox = true;
  }
  closeChatbox() {
    this.showChatbox = false;
  }
  /* ===== trackBy ===== */
  trackById(_, item) {
    return item.id;
  }
  static \u0275fac = function ListNewsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListNewsComponent)(i028.\u0275\u0275directiveInject(NewsService), i028.\u0275\u0275directiveInject(i216.Router));
  };
  static \u0275cmp = /* @__PURE__ */ i028.\u0275\u0275defineComponent({ type: _ListNewsComponent, selectors: [["app-view-news"]], decls: 23, vars: 10, consts: [[3, "aiTuVanClicked"], [1, "news-page-container"], [1, "page-content-area"], [1, "container"], [1, "page-title"], [1, "search-and-pagination"], [1, "search-bar"], ["type", "text", "placeholder", "T\xECm ki\u1EBFm tin t\u1EE9c...", 3, "ngModelChange", "input", "ngModel"], [3, "click"], [1, "pagination-controls"], [3, "click", "disabled"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "news-grid"], ["class", "news-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "pagination-info"], [3, "close", 4, "ngIf"], [1, "news-card"], [1, "card-image"], ["alt", "\u1EA2nh tin t\u1EE9c", 3, "error", "src"], [1, "card-content"], [1, "card-title"], [3, "routerLink"], [1, "card-description"], [3, "close"]], template: function ListNewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i028.\u0275\u0275elementStart(0, "app-header", 0);
      i028.\u0275\u0275listener("aiTuVanClicked", function ListNewsComponent_Template_app_header_aiTuVanClicked_0_listener() {
        return ctx.onAiTuVanClicked();
      });
      i028.\u0275\u0275elementEnd();
      i028.\u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      i028.\u0275\u0275text(5, "Trang tin t\u1EE9c");
      i028.\u0275\u0275elementEnd();
      i028.\u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "input", 7);
      i028.\u0275\u0275twoWayListener("ngModelChange", function ListNewsComponent_Template_input_ngModelChange_8_listener($event) {
        i028.\u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      i028.\u0275\u0275listener("input", function ListNewsComponent_Template_input_input_8_listener() {
        return ctx.searchPosts();
      });
      i028.\u0275\u0275elementEnd();
      i028.\u0275\u0275elementStart(9, "button", 8);
      i028.\u0275\u0275listener("click", function ListNewsComponent_Template_button_click_9_listener() {
        return ctx.searchPosts();
      });
      i028.\u0275\u0275text(10, "T\xECm ki\u1EBFm");
      i028.\u0275\u0275elementEnd()();
      i028.\u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
      i028.\u0275\u0275listener("click", function ListNewsComponent_Template_button_click_12_listener() {
        return ctx.changePage(ctx.currentPage - 1);
      });
      i028.\u0275\u0275text(13, "<");
      i028.\u0275\u0275elementEnd();
      i028.\u0275\u0275template(14, ListNewsComponent_span_14_Template, 2, 3, "span", 11);
      i028.\u0275\u0275elementStart(15, "button", 10);
      i028.\u0275\u0275listener("click", function ListNewsComponent_Template_button_click_15_listener() {
        return ctx.changePage(ctx.currentPage + 1);
      });
      i028.\u0275\u0275text(16, ">");
      i028.\u0275\u0275elementEnd()()();
      i028.\u0275\u0275elementStart(17, "div", 12);
      i028.\u0275\u0275template(18, ListNewsComponent_div_18_Template, 9, 4, "div", 13);
      i028.\u0275\u0275elementEnd();
      i028.\u0275\u0275elementStart(19, "div", 14);
      i028.\u0275\u0275text(20);
      i028.\u0275\u0275elementEnd()()()();
      i028.\u0275\u0275template(21, ListNewsComponent_app_chat_box_21_Template, 1, 0, "app-chat-box", 15);
      i028.\u0275\u0275element(22, "app-footer");
    }
    if (rf & 2) {
      i028.\u0275\u0275advance(8);
      i028.\u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      i028.\u0275\u0275advance(4);
      i028.\u0275\u0275property("disabled", ctx.currentPage === 1);
      i028.\u0275\u0275advance(2);
      i028.\u0275\u0275property("ngForOf", ctx.pages);
      i028.\u0275\u0275advance();
      i028.\u0275\u0275property("disabled", ctx.currentPage === ctx.totalPages);
      i028.\u0275\u0275advance(3);
      i028.\u0275\u0275property("ngForOf", ctx.pagedPosts)("ngForTrackBy", ctx.trackById);
      i028.\u0275\u0275advance(2);
      i028.\u0275\u0275textInterpolate3(" Hi\u1EC3n th\u1ECB ", ctx.startIndex + 1, " - ", ctx.endIndex + 1, " c\u1EE7a ", ctx.totalPosts, " tin t\u1EE9c ");
      i028.\u0275\u0275advance();
      i028.\u0275\u0275property("ngIf", ctx.showChatbox);
    }
  }, dependencies: [
    CommonModule17,
    i315.NgClass,
    i315.NgComponentOutlet,
    i315.NgForOf,
    i315.NgIf,
    i315.NgTemplateOutlet,
    i315.NgStyle,
    i315.NgSwitch,
    i315.NgSwitchCase,
    i315.NgSwitchDefault,
    i315.NgPlural,
    i315.NgPluralCase,
    i315.AsyncPipe,
    i315.UpperCasePipe,
    i315.LowerCasePipe,
    i315.JsonPipe,
    i315.SlicePipe,
    i315.DecimalPipe,
    i315.PercentPipe,
    i315.TitleCasePipe,
    i315.CurrencyPipe,
    i315.DatePipe,
    i315.I18nPluralPipe,
    i315.I18nSelectPipe,
    i315.KeyValuePipe,
    RouterModule11,
    i216.RouterOutlet,
    i216.RouterLink,
    i216.RouterLinkActive,
    i216.\u0275EmptyOutletComponent,
    FormsModule12,
    i412.\u0275NgNoValidate,
    i412.NgSelectOption,
    i412.\u0275NgSelectMultipleOption,
    i412.DefaultValueAccessor,
    i412.NumberValueAccessor,
    i412.RangeValueAccessor,
    i412.CheckboxControlValueAccessor,
    i412.SelectControlValueAccessor,
    i412.SelectMultipleControlValueAccessor,
    i412.RadioControlValueAccessor,
    i412.NgControlStatus,
    i412.NgControlStatusGroup,
    i412.RequiredValidator,
    i412.MinLengthValidator,
    i412.MaxLengthValidator,
    i412.PatternValidator,
    i412.CheckboxRequiredValidator,
    i412.EmailValidator,
    i412.MinValidator,
    i412.MaxValidator,
    i412.NgModel,
    i412.NgModelGroup,
    i412.NgForm,
    HeaderComponent,
    FooterComponent,
    ChatBoxComponent
  ], styles: ['@charset "UTF-8";\n\n\n\n.news-page-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #f4f7f6;\n  padding-top: 75px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.news-page-container[_ngcontent-%COMP%]   .page-content-area[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.news-page-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.news-page-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #333;\n  margin-bottom: 30px;\n  font-size: 2em;\n  font-weight: bold;\n  width: 100%;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n  gap: 20px;\n  width: 80%;\n  max-width: 600px;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  width: 100%;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1em;\n  flex-grow: 1;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 15px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  cursor: pointer;\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.news-page-container[_ngcontent-%COMP%]   .search-and-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  color: #007bff;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  width: 80%;\n  max-width: 1200px;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #fff;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  padding: 15px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 1.1em;\n  font-weight: bold;\n  line-height: 1.4;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333;\n  transition: color 0.3s ease;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 0.9em;\n  line-height: 1.5;\n  margin-bottom: 10px;\n  flex-grow: 1;\n}\n.news-page-container[_ngcontent-%COMP%]   .news-grid[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  color: #777;\n  font-size: 0.8em;\n}\n.news-page-container[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  color: #555;\n  width: 100%;\n}\n/*# sourceMappingURL=list-news.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i028.\u0275setClassMetadata(ListNewsComponent, [{
    type: Component19,
    args: [{ selector: "app-view-news", standalone: true, imports: [
      CommonModule17,
      RouterModule11,
      FormsModule12,
      HeaderComponent,
      FooterComponent,
      ChatBoxComponent
    ], template: `<app-header (aiTuVanClicked)="onAiTuVanClicked()"></app-header>\r
<div class="news-page-container">\r
  <div class="page-content-area">\r
    <div class="container">\r
      <h2 class="page-title">Trang tin t\u1EE9c</h2>\r
\r
      <!-- Search + Pagination Top -->\r
      <div class="search-and-pagination">\r
        <div class="search-bar">\r
          <input\r
            type="text"\r
            placeholder="T\xECm ki\u1EBFm tin t\u1EE9c..."\r
            [(ngModel)]="searchTerm"\r
            (input)="searchPosts()"\r
          />\r
          <button (click)="searchPosts()">T\xECm ki\u1EBFm</button>\r
        </div>\r
\r
        <div class="pagination-controls">\r
          <button (click)="changePage(currentPage - 1)" [disabled]="currentPage === 1">&lt;</button>\r
\r
          <span\r
            *ngFor="let page of pages"\r
            [class.active]="currentPage === page"\r
            (click)="changePage(page)"\r
            >{{ page }}</span\r
          >\r
\r
          <button (click)="changePage(currentPage + 1)" [disabled]="currentPage === totalPages">&gt;</button>\r
        </div>\r
      </div>\r
\r
      <!-- Grid -->\r
      <div class="news-grid">\r
        <div\r
          class="news-card"\r
          *ngFor="let post of pagedPosts; trackBy: trackById"\r
        >\r
          <div class="card-image">\r
            <img\r
              [src]="post.attachments?.length ? getImageUrl(post.attachments[0]) : 'assets/img/placeholder.png'"\r
              (error)="onImageError($event)"\r
              alt="\u1EA2nh tin t\u1EE9c"\r
            />\r
          </div>\r
\r
          <div class="card-content">\r
            <h3 class="card-title">\r
              <a [routerLink]="'/view-news/' + post.id">{{ post.name }}</a>\r
            </h3>\r
            <p class="card-description">{{ post.shortDescription }}</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="pagination-info">\r
        Hi\u1EC3n th\u1ECB {{ startIndex + 1 }} - {{ endIndex + 1 }} c\u1EE7a {{ totalPosts }} tin t\u1EE9c\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<app-chat-box *ngIf="showChatbox" (close)="closeChatbox()"></app-chat-box>\r
<app-footer></app-footer>`, styles: ['@charset "UTF-8";\n\n/* src/app/components/news/list-news/list-news.component.scss */\n.news-page-container {\n  min-height: 100vh;\n  background-color: #f4f7f6;\n  padding-top: 75px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.news-page-container .page-content-area {\n  padding: 20px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.news-page-container .container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.news-page-container .page-title {\n  text-align: center;\n  color: #333;\n  margin-bottom: 30px;\n  font-size: 2em;\n  font-weight: bold;\n  width: 100%;\n}\n.news-page-container .search-and-pagination {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n  gap: 20px;\n  width: 80%;\n  max-width: 600px;\n}\n.news-page-container .search-and-pagination .search-bar {\n  display: flex;\n  gap: 5px;\n  width: 100%;\n}\n.news-page-container .search-and-pagination .search-bar input[type=text] {\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1em;\n  flex-grow: 1;\n}\n.news-page-container .search-and-pagination .search-bar button {\n  padding: 8px 15px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.news-page-container .search-and-pagination .search-bar button:hover {\n  background-color: #0056b3;\n}\n.news-page-container .search-and-pagination .pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.news-page-container .search-and-pagination .pagination-controls button {\n  padding: 5px 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.news-page-container .search-and-pagination .pagination-controls button:hover {\n  background-color: #f0f0f0;\n}\n.news-page-container .search-and-pagination .pagination-controls span {\n  font-weight: bold;\n  cursor: pointer;\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.news-page-container .search-and-pagination .pagination-controls span.active {\n  border-color: #007bff;\n  color: #007bff;\n}\n.news-page-container .news-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  width: 80%;\n  max-width: 1200px;\n}\n.news-page-container .news-grid .news-card {\n  border: 1px solid #eee;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #fff;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n}\n.news-page-container .news-grid .news-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.news-page-container .news-grid .news-card .card-image {\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n}\n.news-page-container .news-grid .news-card .card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.news-page-container .news-grid .news-card .card-content {\n  padding: 15px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n.news-page-container .news-grid .news-card .card-content .card-title {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 1.1em;\n  font-weight: bold;\n  line-height: 1.4;\n}\n.news-page-container .news-grid .news-card .card-content .card-title a {\n  text-decoration: none;\n  color: #333;\n  transition: color 0.3s ease;\n}\n.news-page-container .news-grid .news-card .card-content .card-title a:hover {\n  color: #007bff;\n}\n.news-page-container .news-grid .news-card .card-content .card-description {\n  color: #555;\n  font-size: 0.9em;\n  line-height: 1.5;\n  margin-bottom: 10px;\n  flex-grow: 1;\n}\n.news-page-container .news-grid .news-card .card-content .card-footer {\n  display: flex;\n  justify-content: flex-end;\n  color: #777;\n  font-size: 0.8em;\n}\n.news-page-container .pagination-info {\n  text-align: center;\n  margin-top: 20px;\n  color: #555;\n  width: 100%;\n}\n/*# sourceMappingURL=list-news.component.css.map */\n'] }]
  }], () => [{ type: NewsService }, { type: i216.Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i028.\u0275setClassDebugInfo(ListNewsComponent, { className: "ListNewsComponent", filePath: "src/app/components/news/list-news/list-news.component.ts", lineNumber: 32 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fnews%2Flist-news%2Flist-news.component.ts%40ListNewsComponent";
  function ListNewsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i028.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i028.\u0275\u0275replaceMetadata(ListNewsComponent, m.default, [i028, i315, i216, i412, news_service_exports], [CommonModule17, RouterModule11, FormsModule12, HeaderComponent, FooterComponent, ChatBoxComponent, Component19], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ListNewsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ListNewsComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/news/update-news/update-news.component.ts
import { CommonModule as CommonModule18 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import { Component as Component20 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { FormsModule as FormsModule13 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
import * as i029 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i217 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i316 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i413 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_forms.js?v=e44b7f9a";
var UpdateNewsComponent = class _UpdateNewsComponent {
  newsService;
  router;
  route;
  newId;
  name = "";
  shortDescription = "";
  content = "";
  constructor(newsService, router, route) {
    this.newsService = newsService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.newId = Number(this.route.snapshot.paramMap.get("id"));
    if (this.newId) {
      this.loadNewsById();
    }
  }
  loadNewsById() {
    this.newsService.getNewsById(this.newId).subscribe({
      next: (response) => {
        this.name = response.name;
        this.shortDescription = response.shortDescription;
        this.content = response.content;
      },
      error: (error) => {
        alert(error?.error);
      }
    });
  }
  updateNews() {
    const newsDTO = {
      name: this.name,
      shortDescription: this.shortDescription,
      content: this.content
    };
    this.newsService.updateNews(this.newId, newsDTO).subscribe({
      next: () => {
        debugger;
        this.router.navigate(["/news"]);
      },
      error: (error) => {
        debugger;
        alert(error.error);
      }
    });
  }
  goBack() {
    this.router.navigate(["/news"]);
  }
  static \u0275fac = function UpdateNewsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpdateNewsComponent)(i029.\u0275\u0275directiveInject(NewsService), i029.\u0275\u0275directiveInject(i217.Router), i029.\u0275\u0275directiveInject(i217.ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ i029.\u0275\u0275defineComponent({ type: _UpdateNewsComponent, selectors: [["app-update-news"]], decls: 24, vars: 3, consts: [[1, "news-form-container"], [1, "form-header"], [1, "subtitle"], [1, "news-form"], [1, "form-group"], ["for", "name", 1, "form-label"], ["id", "name", "type", "text", "placeholder", "Nh\u1EADp ti\xEAu \u0111\u1EC1 tin t\u1EE9c", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "description", 1, "form-label"], ["id", "description", "type", "text", "placeholder", "Nh\u1EADp m\xF4 t\u1EA3 ng\u1EAFn", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "content", 1, "form-label"], ["id", "content", "placeholder", "Nh\u1EADp n\u1ED9i dung...", 1, "form-control", "content-textarea", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function UpdateNewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i029.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      i029.\u0275\u0275text(3, "C\u1EADp nh\u1EADt tin t\u1EE9c");
      i029.\u0275\u0275elementEnd();
      i029.\u0275\u0275elementStart(4, "p", 2);
      i029.\u0275\u0275text(5, "\u0110i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin \u0111\u1EC3 t\u1EA1o b\u1EA3n tin m\u1EDBi");
      i029.\u0275\u0275elementEnd()();
      i029.\u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "label", 5);
      i029.\u0275\u0275text(9, "Ti\xEAu \u0111\u1EC1");
      i029.\u0275\u0275elementEnd();
      i029.\u0275\u0275elementStart(10, "input", 6);
      i029.\u0275\u0275twoWayListener("ngModelChange", function UpdateNewsComponent_Template_input_ngModelChange_10_listener($event) {
        i029.\u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return $event;
      });
      i029.\u0275\u0275elementEnd()();
      i029.\u0275\u0275elementStart(11, "div", 4)(12, "label", 7);
      i029.\u0275\u0275text(13, "M\xF4 t\u1EA3 ng\u1EAFn");
      i029.\u0275\u0275elementEnd();
      i029.\u0275\u0275elementStart(14, "input", 8);
      i029.\u0275\u0275twoWayListener("ngModelChange", function UpdateNewsComponent_Template_input_ngModelChange_14_listener($event) {
        i029.\u0275\u0275twoWayBindingSet(ctx.shortDescription, $event) || (ctx.shortDescription = $event);
        return $event;
      });
      i029.\u0275\u0275elementEnd()();
      i029.\u0275\u0275elementStart(15, "div", 4)(16, "label", 9);
      i029.\u0275\u0275text(17, "N\u1ED9i dung chi ti\u1EBFt");
      i029.\u0275\u0275elementEnd();
      i029.\u0275\u0275elementStart(18, "textarea", 10);
      i029.\u0275\u0275twoWayListener("ngModelChange", function UpdateNewsComponent_Template_textarea_ngModelChange_18_listener($event) {
        i029.\u0275\u0275twoWayBindingSet(ctx.content, $event) || (ctx.content = $event);
        return $event;
      });
      i029.\u0275\u0275elementEnd()();
      i029.\u0275\u0275elementStart(19, "div", 11)(20, "button", 12);
      i029.\u0275\u0275listener("click", function UpdateNewsComponent_Template_button_click_20_listener() {
        return ctx.goBack();
      });
      i029.\u0275\u0275text(21, " H\u1EE7y ");
      i029.\u0275\u0275elementEnd();
      i029.\u0275\u0275elementStart(22, "button", 13);
      i029.\u0275\u0275listener("click", function UpdateNewsComponent_Template_button_click_22_listener() {
        return ctx.updateNews();
      });
      i029.\u0275\u0275text(23, " C\u1EADp nh\u1EADt ");
      i029.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      i029.\u0275\u0275advance(10);
      i029.\u0275\u0275twoWayProperty("ngModel", ctx.name);
      i029.\u0275\u0275advance(4);
      i029.\u0275\u0275twoWayProperty("ngModel", ctx.shortDescription);
      i029.\u0275\u0275advance(4);
      i029.\u0275\u0275twoWayProperty("ngModel", ctx.content);
    }
  }, dependencies: [CommonModule18, i316.NgClass, i316.NgComponentOutlet, i316.NgForOf, i316.NgIf, i316.NgTemplateOutlet, i316.NgStyle, i316.NgSwitch, i316.NgSwitchCase, i316.NgSwitchDefault, i316.NgPlural, i316.NgPluralCase, i316.AsyncPipe, i316.UpperCasePipe, i316.LowerCasePipe, i316.JsonPipe, i316.SlicePipe, i316.DecimalPipe, i316.PercentPipe, i316.TitleCasePipe, i316.CurrencyPipe, i316.DatePipe, i316.I18nPluralPipe, i316.I18nSelectPipe, i316.KeyValuePipe, FormsModule13, i413.\u0275NgNoValidate, i413.NgSelectOption, i413.\u0275NgSelectMultipleOption, i413.DefaultValueAccessor, i413.NumberValueAccessor, i413.RangeValueAccessor, i413.CheckboxControlValueAccessor, i413.SelectControlValueAccessor, i413.SelectMultipleControlValueAccessor, i413.RadioControlValueAccessor, i413.NgControlStatus, i413.NgControlStatusGroup, i413.RequiredValidator, i413.MinLengthValidator, i413.MaxLengthValidator, i413.PatternValidator, i413.CheckboxRequiredValidator, i413.EmailValidator, i413.MinValidator, i413.MaxValidator, i413.NgModel, i413.NgModelGroup, i413.NgForm], styles: ["\n\n.news-form-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.news-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n  font-size: 1rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #2c3e50;\n  font-weight: 600;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  color: #3498db;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  transition: 0.2s ease;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.15);\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .content-textarea[_ngcontent-%COMP%] {\n  min-height: 150px;\n  resize: vertical;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .file-upload-container[_ngcontent-%COMP%]   .file-hint[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  color: #95a5a6;\n  font-size: 0.85rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%] {\n  background: #f4f6f8;\n  padding: 1rem;\n  border-radius: 6px;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3498db;\n  margin-right: 0.5rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-size[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n  font-size: 0.85rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 1rem;\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%] {\n  background: #ecf0f1;\n  color: #2c3e50;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #dcdde1;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2980b9;\n}\n.news-form-container[_ngcontent-%COMP%]   .news-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #bdc3c7;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=update-news.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i029.\u0275setClassMetadata(UpdateNewsComponent, [{
    type: Component20,
    args: [{ selector: "app-update-news", standalone: true, imports: [CommonModule18, FormsModule13], template: '<div class="news-form-container">\r\n  <div class="form-header">\r\n    <h2>C\u1EADp nh\u1EADt tin t\u1EE9c</h2>\r\n    <p class="subtitle">\u0110i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin \u0111\u1EC3 t\u1EA1o b\u1EA3n tin m\u1EDBi</p>\r\n  </div>\r\n\r\n  <div class="news-form">\r\n    <div class="form-group">\r\n      <label class="form-label" for="name">Ti\xEAu \u0111\u1EC1</label>\r\n      <input id="name" type="text" class="form-control" placeholder="Nh\u1EADp ti\xEAu \u0111\u1EC1 tin t\u1EE9c" [(ngModel)]="name" />\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label" for="description">M\xF4 t\u1EA3 ng\u1EAFn</label>\r\n      <input id="description" type="text" class="form-control" placeholder="Nh\u1EADp m\xF4 t\u1EA3 ng\u1EAFn" [(ngModel)]="shortDescription" />\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label" for="content">N\u1ED9i dung chi ti\u1EBFt</label>\r\n      <textarea id="content" [(ngModel)]="content" class="form-control content-textarea" placeholder="Nh\u1EADp n\u1ED9i dung..."></textarea>\r\n    </div>\r\n\r\n    <div class="form-actions">\r\n      <button class="btn btn-secondary" type="button" (click)="goBack()">\r\n        H\u1EE7y\r\n      </button>\r\n      <button class="btn btn-primary" type="button" (click)="updateNews()">\r\n      C\u1EADp nh\u1EADt\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>', styles: ["/* src/app/components/news/update-news/update-news.component.scss */\n.news-form-container {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.news-form-container .form-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.news-form-container .form-header h2 {\n  color: #2c3e50;\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n}\n.news-form-container .form-header .subtitle {\n  color: #7f8c8d;\n  font-size: 1rem;\n}\n.news-form-container .news-form .form-group {\n  margin-bottom: 1.5rem;\n}\n.news-form-container .news-form .form-group .form-label {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #2c3e50;\n  font-weight: 600;\n}\n.news-form-container .news-form .form-group .form-label i {\n  margin-right: 0.5rem;\n  color: #3498db;\n}\n.news-form-container .news-form .form-group .form-control {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  transition: 0.2s ease;\n}\n.news-form-container .news-form .form-group .form-control:focus {\n  border-color: #3498db;\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.15);\n}\n.news-form-container .news-form .form-group .content-textarea {\n  min-height: 150px;\n  resize: vertical;\n}\n.news-form-container .news-form .file-upload-container .file-hint {\n  margin-top: 0.25rem;\n  color: #95a5a6;\n  font-size: 0.85rem;\n}\n.news-form-container .news-form .selected-files {\n  background: #f4f6f8;\n  padding: 1rem;\n  border-radius: 6px;\n}\n.news-form-container .news-form .selected-files .file-list {\n  margin-top: 0.5rem;\n}\n.news-form-container .news-form .selected-files .file-list .file-item {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.news-form-container .news-form .selected-files .file-list .file-item i {\n  color: #3498db;\n  margin-right: 0.5rem;\n}\n.news-form-container .news-form .selected-files .file-list .file-item .file-name {\n  flex: 1;\n}\n.news-form-container .news-form .selected-files .file-list .file-item .file-size {\n  color: #7f8c8d;\n  font-size: 0.85rem;\n}\n.news-form-container .news-form .form-actions {\n  display: flex;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n.news-form-container .news-form .form-actions button {\n  flex: 1;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 1rem;\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n.news-form-container .news-form .form-actions button i {\n  margin-right: 0.5rem;\n}\n.news-form-container .news-form .form-actions button.btn-secondary {\n  background: #ecf0f1;\n  color: #2c3e50;\n}\n.news-form-container .news-form .form-actions button.btn-secondary:hover {\n  background: #dcdde1;\n}\n.news-form-container .news-form .form-actions button.btn-primary {\n  background: #3498db;\n  color: white;\n}\n.news-form-container .news-form .form-actions button.btn-primary:hover {\n  background: #2980b9;\n}\n.news-form-container .news-form .form-actions button.btn-primary:disabled {\n  background: #bdc3c7;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=update-news.component.css.map */\n"] }]
  }], () => [{ type: NewsService }, { type: i217.Router }, { type: i217.ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i029.\u0275setClassDebugInfo(UpdateNewsComponent, { className: "UpdateNewsComponent", filePath: "src/app/components/news/update-news/update-news.component.ts", lineNumber: 15 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fnews%2Fupdate-news%2Fupdate-news.component.ts%40UpdateNewsComponent";
  function UpdateNewsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i029.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i029.\u0275\u0275replaceMetadata(UpdateNewsComponent, m.default, [i029, i316, i413, news_service_exports, i217], [CommonModule18, FormsModule13, Component20], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && UpdateNewsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && UpdateNewsComponent_HmrLoad(d.timestamp)));
})();

// src/app/components/policy/policy.component.ts
import { Component as Component21 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { RouterModule as RouterModule12 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i030 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import * as i110 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common.js?v=e44b7f9a";
import * as i218 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
var PolicyComponent = class _PolicyComponent {
  location;
  constructor(location) {
    this.location = location;
  }
  // Inject Location để quay lại trang trước
  ngOnInit() {
  }
  /**
   * Quay lại trang trước đó trong lịch sử duyệt web.
   */
  goBack() {
    this.location.back();
  }
  static \u0275fac = function PolicyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PolicyComponent)(i030.\u0275\u0275directiveInject(i110.Location));
  };
  static \u0275cmp = /* @__PURE__ */ i030.\u0275\u0275defineComponent({ type: _PolicyComponent, selectors: [["app-policy"]], decls: 90, vars: 0, consts: [[1, "policy-page"], [1, "container"], [1, "back-button", 3, "click"], [1, "back-arrow"], [1, "page-header"], [1, "author-date"], [1, "highlight-date"], [1, "section-block", "intro-section"], [1, "section-icon"], [1, "section-title"], [1, "section-block"], ["routerLink", "/privacy-policy", 1, "policy-link"], [1, "section-block", "contact-section"], [1, "contact-info"], ["href", "mailto:contact@checkscam.vn"], ["href", "https://www.facebook.com/checkscam.official", "target", "_blank"], [1, "page-footer"]], template: function PolicyComponent_Template(rf, ctx) {
    if (rf & 1) {
      i030.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      i030.\u0275\u0275listener("click", function PolicyComponent_Template_button_click_2_listener() {
        return ctx.goBack();
      });
      i030.\u0275\u0275elementStart(3, "span", 3);
      i030.\u0275\u0275text(4, "\u2190");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275text(5, " Quay l\u1EA1i ");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(6, "header", 4)(7, "h1");
      i030.\u0275\u0275text(8, "\u0110i\u1EC1u Kho\u1EA3n S\u1EED D\u1EE5ng");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(9, "p", 5);
      i030.\u0275\u0275text(10, " C\u1EADp nh\u1EADt l\u1EA7n cu\u1ED1i: ");
      i030.\u0275\u0275elementStart(11, "span", 6);
      i030.\u0275\u0275text(12, "13 th\xE1ng 04 n\u0103m 2025");
      i030.\u0275\u0275elementEnd()()();
      i030.\u0275\u0275elementStart(13, "section", 7)(14, "div", 8);
      i030.\u0275\u0275text(15, "\u{1F4DC}");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(16, "h2", 9);
      i030.\u0275\u0275text(17, "Ch\xE0o M\u1EEBng B\u1EA1n \u0110\u1EBFn V\u1EDBi CheckScam!");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(18, "p");
      i030.\u0275\u0275text(19, ' B\u1EB1ng vi\u1EC7c truy c\u1EADp v\xE0 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 c\u1EE7a CheckScam ("D\u1ECBch v\u1EE5"), b\u1EA1n \u0111\u1ED3ng \xFD tu\xE2n th\u1EE7 c\xE1c \u0110i\u1EC1u kho\u1EA3n S\u1EED d\u1EE5ng n\xE0y ("\u0110i\u1EC1u kho\u1EA3n"). C\xE1c \u0110i\u1EC1u kho\u1EA3n n\xE0y l\xE0 m\u1ED9t th\u1ECFa thu\u1EADn ph\xE1p l\xFD r\xE0ng bu\u1ED9c gi\u1EEFa b\u1EA1n v\xE0 CheckScam. Vui l\xF2ng \u0111\u1ECDc k\u1EF9 tr\u01B0\u1EDBc khi s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 c\u1EE7a ch\xFAng t\xF4i. ');
      i030.\u0275\u0275elementEnd()();
      i030.\u0275\u0275elementStart(20, "section", 10)(21, "div", 8);
      i030.\u0275\u0275text(22, "\u{1F310}");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(23, "h2", 9);
      i030.\u0275\u0275text(24, "Ph\u1EA1m Vi D\u1ECBch V\u1EE5");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(25, "p");
      i030.\u0275\u0275text(26, " CheckScam cung c\u1EA5p m\u1ED9t n\u1EC1n t\u1EA3ng \u0111\u1EC3 ki\u1EC3m tra \u0111\u1ED9 tin c\u1EADy c\u1EE7a c\xE1c \u0111\u01B0\u1EDDng link, s\u1ED1 \u0111i\u1EC7n tho\u1EA1i, t\xE0i kho\u1EA3n ng\xE2n h\xE0ng ho\u1EB7c c\xE1c th\xF4ng tin kh\xE1c nh\u1EB1m c\u1EA3nh b\xE1o v\xE0 b\u1EA3o v\u1EC7 ng\u01B0\u1EDDi d\xF9ng kh\u1ECFi c\xE1c ho\u1EA1t \u0111\u1ED9ng l\u1EEBa \u0111\u1EA3o tr\u1EF1c tuy\u1EBFn. Th\xF4ng tin \u0111\u01B0\u1EE3c cung c\u1EA5p b\u1EDFi D\u1ECBch v\u1EE5 mang t\xEDnh ch\u1EA5t tham kh\u1EA3o v\xE0 c\u1EA3nh b\xE1o, kh\xF4ng ph\u1EA3i l\xE0 l\u1EDDi khuy\xEAn ph\xE1p l\xFD hay \u0111\u1EA3m b\u1EA3o tuy\u1EC7t \u0111\u1ED1i. ");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(27, "p");
      i030.\u0275\u0275text(28, " Ch\xFAng t\xF4i n\u1ED7 l\u1EF1c c\u1EADp nh\u1EADt d\u1EEF li\u1EC7u li\xEAn t\u1EE5c nh\u01B0ng kh\xF4ng th\u1EC3 \u0111\u1EA3m b\u1EA3o t\u1EA5t c\u1EA3 th\xF4ng tin \u0111\u1EC1u ch\xEDnh x\xE1c ho\u1EB7c \u0111\u1EA7y \u0111\u1EE7 tuy\u1EC7t \u0111\u1ED1i t\u1EA1i m\u1ECDi th\u1EDDi \u0111i\u1EC3m do t\xEDnh ch\u1EA5t thay \u0111\u1ED5i nhanh ch\xF3ng c\u1EE7a c\xE1c h\xECnh th\u1EE9c l\u1EEBa \u0111\u1EA3o. ");
      i030.\u0275\u0275elementEnd()();
      i030.\u0275\u0275elementStart(29, "section", 10)(30, "div", 8);
      i030.\u0275\u0275text(31, "\u{1F512}");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(32, "h2", 9);
      i030.\u0275\u0275text(33, "Ch\xEDnh S\xE1ch B\u1EA3o M\u1EADt");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(34, "p");
      i030.\u0275\u0275text(35, " Vi\u1EC7c b\u1EA1n s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 c\u1EE7a ch\xFAng t\xF4i c\u0169ng ch\u1ECBu s\u1EF1 \u0111i\u1EC1u ch\u1EC9nh b\u1EDFi Ch\xEDnh s\xE1ch B\u1EA3o m\u1EADt c\u1EE7a CheckScam. Vui l\xF2ng truy c\u1EADp trang ");
      i030.\u0275\u0275elementStart(36, "a", 11);
      i030.\u0275\u0275text(37, "Ch\xEDnh s\xE1ch B\u1EA3o m\u1EADt");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275text(38, " c\u1EE7a ch\xFAng t\xF4i \u0111\u1EC3 t\xECm hi\u1EC3u th\xEAm v\u1EC1 c\xE1ch ch\xFAng t\xF4i thu th\u1EADp, s\u1EED d\u1EE5ng v\xE0 b\u1EA3o v\u1EC7 d\u1EEF li\u1EC7u c\xE1 nh\xE2n c\u1EE7a b\u1EA1n. ");
      i030.\u0275\u0275elementEnd()();
      i030.\u0275\u0275elementStart(39, "section", 10)(40, "div", 8);
      i030.\u0275\u0275text(41, "\u26A0\uFE0F");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(42, "h2", 9);
      i030.\u0275\u0275text(43, "H\xE0nh Vi C\u1EA5m");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(44, "p");
      i030.\u0275\u0275text(45, "B\u1EA1n \u0111\u1ED3ng \xFD kh\xF4ng th\u1EF1c hi\u1EC7n c\xE1c h\xE0nh vi sau khi s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5:");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(46, "ul")(47, "li");
      i030.\u0275\u0275text(48, "S\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 cho b\u1EA5t k\u1EF3 m\u1EE5c \u0111\xEDch b\u1EA5t h\u1EE3p ph\xE1p ho\u1EB7c tr\xE1i ph\xE9p n\xE0o.");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(49, "li");
      i030.\u0275\u0275text(50, "C\u1ED1 g\u1EAFng truy c\u1EADp tr\xE1i ph\xE9p v\xE0o h\u1EC7 th\u1ED1ng ho\u1EB7c m\u1EA1ng l\u01B0\u1EDBi c\u1EE7a CheckScam.");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(51, "li");
      i030.\u0275\u0275text(52, "G\u1EEDi c\xE1c b\xE1o c\xE1o sai l\u1EC7ch, g\xE2y hi\u1EC3u l\u1EA7m ho\u1EB7c c\xF3 \xFD \u0111\u1ED3 x\u1EA5u.");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(53, "li");
      i030.\u0275\u0275text(54, "S\u1EED d\u1EE5ng b\u1EA5t k\u1EF3 robot, spider, \u1EE9ng d\u1EE5ng t\xECm ki\u1EBFm/truy xu\u1EA5t trang web ho\u1EB7c b\u1EA5t k\u1EF3 ph\u01B0\u01A1ng ti\u1EC7n t\u1EF1 \u0111\u1ED9ng n\xE0o kh\xE1c \u0111\u1EC3 truy c\u1EADp, tr\xEDch xu\u1EA5t, ho\u1EB7c l\u1EADp ch\u1EC9 m\u1EE5c b\u1EA5t k\u1EF3 ph\u1EA7n n\xE0o c\u1EE7a D\u1ECBch v\u1EE5.");
      i030.\u0275\u0275elementEnd()()();
      i030.\u0275\u0275elementStart(55, "section", 10)(56, "div", 8);
      i030.\u0275\u0275text(57, "\u2696\uFE0F");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(58, "h2", 9);
      i030.\u0275\u0275text(59, "Gi\u1EDBi H\u1EA1n Tr\xE1ch Nhi\u1EC7m");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(60, "p");
      i030.\u0275\u0275text(61, " CheckScam s\u1EBD kh\xF4ng ch\u1ECBu tr\xE1ch nhi\u1EC7m \u0111\u1ED1i v\u1EDBi b\u1EA5t k\u1EF3 thi\u1EC7t h\u1EA1i tr\u1EF1c ti\u1EBFp, gi\xE1n ti\u1EBFp, ng\u1EABu nhi\xEAn, \u0111\u1EB7c bi\u1EC7t, do h\u1EADu qu\u1EA3 ho\u1EB7c mang t\xEDnh tr\u1EEBng ph\u1EA1t n\xE0o ph\xE1t sinh t\u1EEB vi\u1EC7c b\u1EA1n s\u1EED d\u1EE5ng ho\u1EB7c kh\xF4ng th\u1EC3 s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5. Th\xF4ng tin c\u1EA3nh b\xE1o \u0111\u01B0\u1EE3c cung c\u1EA5p ch\u1EC9 mang t\xEDnh ch\u1EA5t tham kh\u1EA3o; tr\xE1ch nhi\u1EC7m cu\u1ED1i c\xF9ng thu\u1ED9c v\u1EC1 ng\u01B0\u1EDDi d\xF9ng trong vi\u1EC7c \u0111\u01B0a ra quy\u1EBFt \u0111\u1ECBnh c\u1EE7a m\xECnh. ");
      i030.\u0275\u0275elementEnd()();
      i030.\u0275\u0275elementStart(62, "section", 10)(63, "div", 8);
      i030.\u0275\u0275text(64, "\u270D\uFE0F");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(65, "h2", 9);
      i030.\u0275\u0275text(66, "Thay \u0110\u1ED5i \u0110i\u1EC1u Kho\u1EA3n");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(67, "p");
      i030.\u0275\u0275text(68, " Ch\xFAng t\xF4i c\xF3 th\u1EC3 s\u1EEDa \u0111\u1ED5i \u0110i\u1EC1u kho\u1EA3n n\xE0y b\u1EA5t c\u1EE9 l\xFAc n\xE0o b\u1EB1ng c\xE1ch \u0111\u0103ng phi\xEAn b\u1EA3n s\u1EEDa \u0111\u1ED5i tr\xEAn trang web. Vi\u1EC7c b\u1EA1n ti\u1EBFp t\u1EE5c s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 sau khi c\xE1c thay \u0111\u1ED5i c\xF3 hi\u1EC7u l\u1EF1c s\u1EBD \u0111\u1ED3ng ngh\u0129a v\u1EDBi vi\u1EC7c b\u1EA1n ch\u1EA5p nh\u1EADn c\xE1c \u0110i\u1EC1u kho\u1EA3n \u0111\xE3 s\u1EEDa \u0111\u1ED5i. ");
      i030.\u0275\u0275elementEnd()();
      i030.\u0275\u0275elementStart(69, "section", 12)(70, "div", 8);
      i030.\u0275\u0275text(71, "\u2753");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(72, "h2", 9);
      i030.\u0275\u0275text(73, "Li\xEAn H\u1EC7");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(74, "p");
      i030.\u0275\u0275text(75, "N\u1EBFu b\u1EA1n c\xF3 b\u1EA5t k\u1EF3 c\xE2u h\u1ECFi n\xE0o v\u1EC1 \u0110i\u1EC1u kho\u1EA3n n\xE0y, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i qua:");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(76, "div", 13)(77, "p")(78, "strong");
      i030.\u0275\u0275text(79, "Email:");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(80, "a", 14);
      i030.\u0275\u0275text(81, "contact@checkscam.vn");
      i030.\u0275\u0275elementEnd()();
      i030.\u0275\u0275elementStart(82, "p")(83, "strong");
      i030.\u0275\u0275text(84, "Fanpage Facebook:");
      i030.\u0275\u0275elementEnd();
      i030.\u0275\u0275elementStart(85, "a", 15);
      i030.\u0275\u0275text(86, "CheckScam Official");
      i030.\u0275\u0275elementEnd()()()();
      i030.\u0275\u0275elementStart(87, "footer", 16)(88, "p");
      i030.\u0275\u0275text(89, "C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 tin t\u01B0\u1EDFng v\xE0 s\u1EED d\u1EE5ng CheckScam.");
      i030.\u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterModule12, i218.RouterOutlet, i218.RouterLink, i218.RouterLinkActive, i218.\u0275EmptyOutletComponent], styles: ['@charset "UTF-8";\n\n\n\n.policy-page[_ngcontent-%COMP%] {\n  padding-top: 60px;\n  padding-bottom: 60px;\n  background-color: #f8fbfd;\n  font-family: "Inter", sans-serif;\n  line-height: 1.7;\n  color: #333;\n  animation: _ngcontent-%COMP%_fadeIn 0.8s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 40px;\n  background-color: white;\n  border-radius: 12px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n.back-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #4CAF50;\n  cursor: pointer;\n  font-size: 1.1em;\n  font-weight: 600;\n  margin-bottom: 25px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  transition: color 0.3s ease, transform 0.3s ease;\n}\n.back-button[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 1.2em;\n  transition: transform 0.3s ease;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  color: rgb(60.5577689243, 139.4422310757, 63.7450199203);\n  transform: translateX(-5px);\n}\n.back-button[_ngcontent-%COMP%]:hover   .back-arrow[_ngcontent-%COMP%] {\n  transform: translateX(-3px);\n}\n@media (max-width: 480px) {\n  .back-button[_ngcontent-%COMP%] {\n    font-size: 1em;\n    margin-bottom: 20px;\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #eee;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3em;\n  color: #2c3e50;\n  margin-bottom: 10px;\n  line-height: 1.2;\n  font-weight: 800;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .highlight-text[_ngcontent-%COMP%] {\n  color: #4CAF50;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2em;\n  }\n}\n@media (max-width: 480px) {\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%] {\n  font-size: 0.95em;\n  color: #666;\n  font-style: italic;\n}\n.page-header[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%]   .highlight-date[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n}\n.section-block[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  padding: 30px;\n  background-color: #fefefe;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  border-left: 5px solid #4CAF50;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.section-block[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n}\n.section-block[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .section-block[_ngcontent-%COMP%] {\n    padding: 25px;\n    margin-bottom: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .section-block[_ngcontent-%COMP%] {\n    padding: 20px;\n    margin-bottom: 25px;\n  }\n}\n.section-icon[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  color: #4CAF50;\n  margin-bottom: 15px;\n  display: block;\n  text-align: center;\n  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: #2c3e50;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 20px;\n  text-align: center;\n  position: relative;\n}\n.section-title[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  width: 60px;\n  height: 3px;\n  background-color: #4CAF50;\n  margin: 10px auto 0;\n  border-radius: 2px;\n}\n@media (max-width: 768px) {\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n  }\n}\n@media (max-width: 480px) {\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\np[_ngcontent-%COMP%] {\n  font-size: 1.05em;\n  color: #333;\n  margin-bottom: 15px;\n  text-align: justify;\n}\np[_ngcontent-%COMP%]   .highlight-date[_ngcontent-%COMP%], \np[_ngcontent-%COMP%]   .highlight-tech[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #4CAF50;\n}\nul[_ngcontent-%COMP%] {\n  list-style: disc;\n  padding-left: 25px;\n  margin-bottom: 15px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 1em;\n  color: #333;\n}\na.policy-link[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  font-weight: 500;\n}\na.policy-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.contact-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 1em;\n}\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2c3e50;\n}\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  text-decoration: none;\n  font-weight: 500;\n}\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.page-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 50px;\n  padding-top: 20px;\n  border-top: 1px solid #eee;\n  color: #666;\n  font-size: 0.9em;\n}\n@media (max-width: 480px) {\n  .page-footer[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    font-size: 0.8em;\n  }\n}\n/*# sourceMappingURL=policy.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i030.\u0275setClassMetadata(PolicyComponent, [{
    type: Component21,
    args: [{ selector: "app-policy", standalone: true, imports: [RouterModule12], template: '<div class="policy-page">\n  <div class="container">\n    <button class="back-button" (click)="goBack()">\n      <span class="back-arrow">\u2190</span> Quay l\u1EA1i\n    </button>\n\n    <header class="page-header">\n      <h1>\u0110i\u1EC1u Kho\u1EA3n S\u1EED D\u1EE5ng</h1>\n      <p class="author-date">\n        C\u1EADp nh\u1EADt l\u1EA7n cu\u1ED1i: <span class="highlight-date">13 th\xE1ng 04 n\u0103m 2025</span>\n      </p>\n    </header>\n\n    <section class="section-block intro-section">\n      <div class="section-icon">\u{1F4DC}</div>\n      <h2 class="section-title">Ch\xE0o M\u1EEBng B\u1EA1n \u0110\u1EBFn V\u1EDBi CheckScam!</h2>\n      <p>\n        B\u1EB1ng vi\u1EC7c truy c\u1EADp v\xE0 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 c\u1EE7a CheckScam ("D\u1ECBch v\u1EE5"), b\u1EA1n \u0111\u1ED3ng \xFD tu\xE2n th\u1EE7 c\xE1c \u0110i\u1EC1u kho\u1EA3n S\u1EED d\u1EE5ng n\xE0y\n        ("\u0110i\u1EC1u kho\u1EA3n"). C\xE1c \u0110i\u1EC1u kho\u1EA3n n\xE0y l\xE0 m\u1ED9t th\u1ECFa thu\u1EADn ph\xE1p l\xFD r\xE0ng bu\u1ED9c gi\u1EEFa b\u1EA1n v\xE0 CheckScam. Vui l\xF2ng \u0111\u1ECDc k\u1EF9\n        tr\u01B0\u1EDBc khi s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 c\u1EE7a ch\xFAng t\xF4i.\n      </p>\n    </section>\n\n    <section class="section-block">\n      <div class="section-icon">\u{1F310}</div>\n      <h2 class="section-title">Ph\u1EA1m Vi D\u1ECBch V\u1EE5</h2>\n      <p>\n        CheckScam cung c\u1EA5p m\u1ED9t n\u1EC1n t\u1EA3ng \u0111\u1EC3 ki\u1EC3m tra \u0111\u1ED9 tin c\u1EADy c\u1EE7a c\xE1c \u0111\u01B0\u1EDDng link, s\u1ED1 \u0111i\u1EC7n tho\u1EA1i, t\xE0i kho\u1EA3n ng\xE2n h\xE0ng\n        ho\u1EB7c c\xE1c th\xF4ng tin kh\xE1c nh\u1EB1m c\u1EA3nh b\xE1o v\xE0 b\u1EA3o v\u1EC7 ng\u01B0\u1EDDi d\xF9ng kh\u1ECFi c\xE1c ho\u1EA1t \u0111\u1ED9ng l\u1EEBa \u0111\u1EA3o tr\u1EF1c tuy\u1EBFn. Th\xF4ng tin\n        \u0111\u01B0\u1EE3c cung c\u1EA5p b\u1EDFi D\u1ECBch v\u1EE5 mang t\xEDnh ch\u1EA5t tham kh\u1EA3o v\xE0 c\u1EA3nh b\xE1o, kh\xF4ng ph\u1EA3i l\xE0 l\u1EDDi khuy\xEAn ph\xE1p l\xFD hay \u0111\u1EA3m b\u1EA3o\n        tuy\u1EC7t \u0111\u1ED1i.\n      </p>\n      <p>\n        Ch\xFAng t\xF4i n\u1ED7 l\u1EF1c c\u1EADp nh\u1EADt d\u1EEF li\u1EC7u li\xEAn t\u1EE5c nh\u01B0ng kh\xF4ng th\u1EC3 \u0111\u1EA3m b\u1EA3o t\u1EA5t c\u1EA3 th\xF4ng tin \u0111\u1EC1u ch\xEDnh x\xE1c ho\u1EB7c \u0111\u1EA7y \u0111\u1EE7\n        tuy\u1EC7t \u0111\u1ED1i t\u1EA1i m\u1ECDi th\u1EDDi \u0111i\u1EC3m do t\xEDnh ch\u1EA5t thay \u0111\u1ED5i nhanh ch\xF3ng c\u1EE7a c\xE1c h\xECnh th\u1EE9c l\u1EEBa \u0111\u1EA3o.\n      </p>\n    </section>\n\n    <section class="section-block">\n      <div class="section-icon">\u{1F512}</div>\n      <h2 class="section-title">Ch\xEDnh S\xE1ch B\u1EA3o M\u1EADt</h2>\n      <p>\n        Vi\u1EC7c b\u1EA1n s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 c\u1EE7a ch\xFAng t\xF4i c\u0169ng ch\u1ECBu s\u1EF1 \u0111i\u1EC1u ch\u1EC9nh b\u1EDFi Ch\xEDnh s\xE1ch B\u1EA3o m\u1EADt c\u1EE7a CheckScam. Vui l\xF2ng\n        truy c\u1EADp trang <a routerLink="/privacy-policy" class="policy-link">Ch\xEDnh s\xE1ch B\u1EA3o m\u1EADt</a> c\u1EE7a ch\xFAng t\xF4i \u0111\u1EC3 t\xECm hi\u1EC3u th\xEAm v\u1EC1 c\xE1ch ch\xFAng t\xF4i thu th\u1EADp, s\u1EED d\u1EE5ng v\xE0 b\u1EA3o v\u1EC7 d\u1EEF li\u1EC7u c\xE1 nh\xE2n c\u1EE7a b\u1EA1n.\n      </p>\n    </section>\n\n    <section class="section-block">\n      <div class="section-icon">\u26A0\uFE0F</div>\n      <h2 class="section-title">H\xE0nh Vi C\u1EA5m</h2>\n      <p>B\u1EA1n \u0111\u1ED3ng \xFD kh\xF4ng th\u1EF1c hi\u1EC7n c\xE1c h\xE0nh vi sau khi s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5:</p>\n      <ul>\n        <li>S\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 cho b\u1EA5t k\u1EF3 m\u1EE5c \u0111\xEDch b\u1EA5t h\u1EE3p ph\xE1p ho\u1EB7c tr\xE1i ph\xE9p n\xE0o.</li>\n        <li>C\u1ED1 g\u1EAFng truy c\u1EADp tr\xE1i ph\xE9p v\xE0o h\u1EC7 th\u1ED1ng ho\u1EB7c m\u1EA1ng l\u01B0\u1EDBi c\u1EE7a CheckScam.</li>\n        <li>G\u1EEDi c\xE1c b\xE1o c\xE1o sai l\u1EC7ch, g\xE2y hi\u1EC3u l\u1EA7m ho\u1EB7c c\xF3 \xFD \u0111\u1ED3 x\u1EA5u.</li>\n        <li>S\u1EED d\u1EE5ng b\u1EA5t k\u1EF3 robot, spider, \u1EE9ng d\u1EE5ng t\xECm ki\u1EBFm/truy xu\u1EA5t trang web ho\u1EB7c b\u1EA5t k\u1EF3 ph\u01B0\u01A1ng ti\u1EC7n t\u1EF1 \u0111\u1ED9ng n\xE0o kh\xE1c\n            \u0111\u1EC3 truy c\u1EADp, tr\xEDch xu\u1EA5t, ho\u1EB7c l\u1EADp ch\u1EC9 m\u1EE5c b\u1EA5t k\u1EF3 ph\u1EA7n n\xE0o c\u1EE7a D\u1ECBch v\u1EE5.</li>\n      </ul>\n    </section>\n\n    <section class="section-block">\n      <div class="section-icon">\u2696\uFE0F</div>\n      <h2 class="section-title">Gi\u1EDBi H\u1EA1n Tr\xE1ch Nhi\u1EC7m</h2>\n      <p>\n        CheckScam s\u1EBD kh\xF4ng ch\u1ECBu tr\xE1ch nhi\u1EC7m \u0111\u1ED1i v\u1EDBi b\u1EA5t k\u1EF3 thi\u1EC7t h\u1EA1i tr\u1EF1c ti\u1EBFp, gi\xE1n ti\u1EBFp, ng\u1EABu nhi\xEAn, \u0111\u1EB7c bi\u1EC7t,\n        do h\u1EADu qu\u1EA3 ho\u1EB7c mang t\xEDnh tr\u1EEBng ph\u1EA1t n\xE0o ph\xE1t sinh t\u1EEB vi\u1EC7c b\u1EA1n s\u1EED d\u1EE5ng ho\u1EB7c kh\xF4ng th\u1EC3 s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5.\n        Th\xF4ng tin c\u1EA3nh b\xE1o \u0111\u01B0\u1EE3c cung c\u1EA5p ch\u1EC9 mang t\xEDnh ch\u1EA5t tham kh\u1EA3o; tr\xE1ch nhi\u1EC7m cu\u1ED1i c\xF9ng thu\u1ED9c v\u1EC1 ng\u01B0\u1EDDi d\xF9ng\n        trong vi\u1EC7c \u0111\u01B0a ra quy\u1EBFt \u0111\u1ECBnh c\u1EE7a m\xECnh.\n      </p>\n    </section>\n\n    <section class="section-block">\n      <div class="section-icon">\u270D\uFE0F</div>\n      <h2 class="section-title">Thay \u0110\u1ED5i \u0110i\u1EC1u Kho\u1EA3n</h2>\n      <p>\n        Ch\xFAng t\xF4i c\xF3 th\u1EC3 s\u1EEDa \u0111\u1ED5i \u0110i\u1EC1u kho\u1EA3n n\xE0y b\u1EA5t c\u1EE9 l\xFAc n\xE0o b\u1EB1ng c\xE1ch \u0111\u0103ng phi\xEAn b\u1EA3n s\u1EEDa \u0111\u1ED5i tr\xEAn trang web.\n        Vi\u1EC7c b\u1EA1n ti\u1EBFp t\u1EE5c s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 sau khi c\xE1c thay \u0111\u1ED5i c\xF3 hi\u1EC7u l\u1EF1c s\u1EBD \u0111\u1ED3ng ngh\u0129a v\u1EDBi vi\u1EC7c b\u1EA1n ch\u1EA5p nh\u1EADn\n        c\xE1c \u0110i\u1EC1u kho\u1EA3n \u0111\xE3 s\u1EEDa \u0111\u1ED5i.\n      </p>\n    </section>\n\n    <section class="section-block contact-section">\n      <div class="section-icon">\u2753</div>\n      <h2 class="section-title">Li\xEAn H\u1EC7</h2>\n      <p>N\u1EBFu b\u1EA1n c\xF3 b\u1EA5t k\u1EF3 c\xE2u h\u1ECFi n\xE0o v\u1EC1 \u0110i\u1EC1u kho\u1EA3n n\xE0y, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i qua:</p>\n      <div class="contact-info">\n        <p><strong>Email:</strong> <a href="mailto:contact&#64;checkscam.vn">contact&#64;checkscam.vn</a></p>\n        <p><strong>Fanpage Facebook:</strong> <a href="https://www.facebook.com/checkscam.official" target="_blank">CheckScam Official</a></p>\n      </div>\n    </section>\n\n    <footer class="page-footer">\n      <p>C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 tin t\u01B0\u1EDFng v\xE0 s\u1EED d\u1EE5ng CheckScam.</p>\n    </footer>\n  </div>\n</div>', styles: ['@charset "UTF-8";\n\n/* src/app/components/policy/policy.component.scss */\n.policy-page {\n  padding-top: 60px;\n  padding-bottom: 60px;\n  background-color: #f8fbfd;\n  font-family: "Inter", sans-serif;\n  line-height: 1.7;\n  color: #333;\n  animation: fadeIn 0.8s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 40px;\n  background-color: white;\n  border-radius: 12px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .container {\n    padding: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .container {\n    padding: 20px;\n  }\n}\n.back-button {\n  background: none;\n  border: none;\n  color: #4CAF50;\n  cursor: pointer;\n  font-size: 1.1em;\n  font-weight: 600;\n  margin-bottom: 25px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  transition: color 0.3s ease, transform 0.3s ease;\n}\n.back-button .back-arrow {\n  margin-right: 8px;\n  font-size: 1.2em;\n  transition: transform 0.3s ease;\n}\n.back-button:hover {\n  color: rgb(60.5577689243, 139.4422310757, 63.7450199203);\n  transform: translateX(-5px);\n}\n.back-button:hover .back-arrow {\n  transform: translateX(-3px);\n}\n@media (max-width: 480px) {\n  .back-button {\n    font-size: 1em;\n    margin-bottom: 20px;\n  }\n}\n.page-header {\n  text-align: center;\n  margin-bottom: 40px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #eee;\n}\n.page-header h1 {\n  font-size: 3em;\n  color: #2c3e50;\n  margin-bottom: 10px;\n  line-height: 1.2;\n  font-weight: 800;\n}\n.page-header h1 .highlight-text {\n  color: #4CAF50;\n}\n@media (max-width: 768px) {\n  .page-header h1 {\n    font-size: 2.2em;\n  }\n}\n@media (max-width: 480px) {\n  .page-header h1 {\n    font-size: 1.8em;\n  }\n}\n.page-header .author-date {\n  font-size: 0.95em;\n  color: #666;\n  font-style: italic;\n}\n.page-header .author-date .highlight-date {\n  color: #2c3e50;\n  font-weight: 600;\n}\n.section-block {\n  margin-bottom: 40px;\n  padding: 30px;\n  background-color: #fefefe;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  border-left: 5px solid #4CAF50;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.section-block:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n}\n.section-block:last-of-type {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .section-block {\n    padding: 25px;\n    margin-bottom: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .section-block {\n    padding: 20px;\n    margin-bottom: 25px;\n  }\n}\n.section-icon {\n  font-size: 2.5em;\n  color: #4CAF50;\n  margin-bottom: 15px;\n  display: block;\n  text-align: center;\n  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));\n}\n.section-title {\n  font-size: 2em;\n  color: #2c3e50;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 20px;\n  text-align: center;\n  position: relative;\n}\n.section-title::after {\n  content: "";\n  display: block;\n  width: 60px;\n  height: 3px;\n  background-color: #4CAF50;\n  margin: 10px auto 0;\n  border-radius: 2px;\n}\n@media (max-width: 768px) {\n  .section-title {\n    font-size: 1.8em;\n  }\n}\n@media (max-width: 480px) {\n  .section-title {\n    font-size: 1.5em;\n  }\n}\np {\n  font-size: 1.05em;\n  color: #333;\n  margin-bottom: 15px;\n  text-align: justify;\n}\np .highlight-date,\np .highlight-tech {\n  font-weight: 600;\n  color: #4CAF50;\n}\nul {\n  list-style: disc;\n  padding-left: 25px;\n  margin-bottom: 15px;\n}\nul li {\n  margin-bottom: 8px;\n  font-size: 1em;\n  color: #333;\n}\na.policy-link {\n  color: #007bff;\n  text-decoration: none;\n  font-weight: 500;\n}\na.policy-link:hover {\n  text-decoration: underline;\n}\n.contact-info {\n  margin-top: 20px;\n}\n.contact-info p {\n  margin-bottom: 10px;\n  font-size: 1em;\n}\n.contact-info p strong {\n  color: #2c3e50;\n}\n.contact-info p a {\n  color: #4CAF50;\n  text-decoration: none;\n  font-weight: 500;\n}\n.contact-info p a:hover {\n  text-decoration: underline;\n}\n.page-footer {\n  text-align: center;\n  margin-top: 50px;\n  padding-top: 20px;\n  border-top: 1px solid #eee;\n  color: #666;\n  font-size: 0.9em;\n}\n@media (max-width: 480px) {\n  .page-footer {\n    margin-top: 30px;\n    font-size: 0.8em;\n  }\n}\n/*# sourceMappingURL=policy.component.css.map */\n'] }]
  }], () => [{ type: i110.Location }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i030.\u0275setClassDebugInfo(PolicyComponent, { className: "PolicyComponent", filePath: "src/app/components/policy/policy.component.ts", lineNumber: 14 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fpolicy%2Fpolicy.component.ts%40PolicyComponent";
  function PolicyComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i030.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i030.\u0275\u0275replaceMetadata(PolicyComponent, m.default, [i030, i218, i110], [RouterModule12, Component21], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && PolicyComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && PolicyComponent_HmrLoad(d.timestamp)));
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: ChatbotComponent, pathMatch: "full" },
  {
    path: "admin",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "users", component: UserComponent },
      { path: "create-user", component: CreateUserComponent },
      { path: "news", component: NewsComponent },
      { path: "create-news", component: CreateNewsComponent },
      { path: "detail-news/:id", component: DetailNewsComponent },
      { path: "update-news/:id", component: UpdateNewsComponent },
      { path: "list-news", component: ListNewsComponent },
      { path: "reports", component: ReportComponent },
      { path: "create-report", component: CreateReportComponent },
      { path: "detail-report/:id", component: DetailReportComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "chatbox", component: ChatBoxComponent },
  { path: "list-news", component: ListNewsComponent },
  { path: "view-news/:id", component: ViewNewsComponent },
  { path: "create-report", component: CreateReportComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "privacy-policy", component: PolicyComponent },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
import { provideHttpClient, withInterceptors } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_common_http.js?v=e44b7f9a";

// src/app/interceptors/token.interceptor.ts
import { inject } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
var tokenInterceptor = (req, next) => {
  const tokenService = inject(TokenService);
  const token = tokenService.getToken();
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([tokenInterceptor]))
  ]
};

// src/app/app.component.ts
import { Component as Component22 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
import { RouterOutlet as RouterOutlet13 } from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_router.js?v=e44b7f9a";
import * as i031 from "/@fs/Users/Pham13a07/Downloads/fe-checkscam/.angular/cache/19.2.15/checkscam-admin/vite/deps/@angular_core.js?v=e44b7f9a";
var AppComponent = class _AppComponent {
  title = "checkscam-admin";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i031.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i031.\u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet13], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i031.\u0275setClassMetadata(AppComponent, [{
    type: Component22,
    args: [{ selector: "app-root", standalone: true, imports: [
      RouterOutlet13
    ], template: "<!-- <app-header></app-header> -->\n\n<router-outlet></router-outlet>\n\n<!-- <app-footer></app-footer> -->" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i031.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 13 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.component.ts%40AppComponent";
  function AppComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i031.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i031.\u0275\u0275replaceMetadata(AppComponent, m.default, [i031], [RouterOutlet13, Component22], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppComponent_HmrLoad(d.timestamp)));
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyIsInNyYy9hcHAvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwic3JjL2FwcC9zZXJ2aWNlcy9odHRwLnV0aWwuc2VydmljZS50cyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXBkYXRlLXVzZXIvdXBkYXRlLXVzZXIuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXBkYXRlLXVzZXIvdXBkYXRlLXVzZXIuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy9uZXdzLmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL3NlcnZpY2VzL25ld3Muc2VydmljZS50cyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZHMvcGlwZXMvcmVwb3J0LXN0YXR1cy10by1zdHJpbmcucGlwZS50cyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWRzL2VudW1zL3JlcG9ydC1zdGF0dXMuZW51bS50cyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWRzL3BpcGVzL2luZm9ybWF0aW9uLXR5cGUtdG8tc3RyaW5nLnBpcGUudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkcy9lbnVtcy9pbmZvcm1hdGlvbi10eXBlLmVudW0udHMiLCJzcmMvYXBwL3NlcnZpY2VzL3JlcG9ydC5zZXJ2aWNlLnRzIiwic3JjL2FwcC9zZXJ2aWNlcy9zY2FtLXR5cGUuc2VydmljZS50cyIsInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL2NyZWF0ZS1uZXdzL2NyZWF0ZS1uZXdzLmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL2NyZWF0ZS1uZXdzL2NyZWF0ZS1uZXdzLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXRib3QvY2hhdGJvdC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdGJvdC9jaGF0Ym90LmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LWJveC9jaGF0LWJveC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1ib3gvY2hhdC1ib3guY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL3NlcnZpY2VzL2NoZWNrLXNjYW0uc2VydmljZS50cyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL3NlcnZpY2VzL3Rva2VuLnNlcnZpY2UudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3J0L2NyZWF0ZS1yZXBvcnQvY3JlYXRlLXJlcG9ydC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3J0L2NyZWF0ZS1yZXBvcnQvY3JlYXRlLXJlcG9ydC5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL3ZpZXctbmV3cy92aWV3LW5ld3MuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21wb25lbnRzL25ld3Mvdmlldy1uZXdzL3ZpZXctbmV3cy5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL2RldGFpbC1uZXdzL2RldGFpbC1uZXdzLmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL2RldGFpbC1uZXdzL2RldGFpbC1uZXdzLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL3JlcG9ydC9kZXRhaWwtcmVwb3J0L2RldGFpbC1yZXBvcnQuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlcG9ydC9kZXRhaWwtcmVwb3J0L2RldGFpbC1yZXBvcnQuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy9saXN0LW5ld3MvbGlzdC1uZXdzLmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL2xpc3QtbmV3cy9saXN0LW5ld3MuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy91cGRhdGUtbmV3cy91cGRhdGUtbmV3cy5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy91cGRhdGUtbmV3cy91cGRhdGUtbmV3cy5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY29tcG9uZW50cy9wb2xpY3kvcG9saWN5LmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50cy9wb2xpY3kvcG9saWN5LmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIiwic3JjL2FwcC9pbnRlcmNlcHRvcnMvdG9rZW4uaW50ZXJjZXB0b3IudHMiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXBBcHBsaWNhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBhcHBDb25maWcgfSBmcm9tICcuL2FwcC9hcHAuY29uZmlnJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvYXBwLmNvbXBvbmVudCc7XHJcblxyXG5ib290c3RyYXBBcHBsaWNhdGlvbihBcHBDb21wb25lbnQsIGFwcENvbmZpZylcclxuICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWcsIHByb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHByb3ZpZGVSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcclxuaW1wb3J0IHsgcHJvdmlkZUh0dHBDbGllbnQsIHdpdGhJbnRlcmNlcHRvcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHRva2VuSW50ZXJjZXB0b3IgfSBmcm9tICcuL2ludGVyY2VwdG9ycy90b2tlbi5pbnRlcmNlcHRvcic7XHJcblxyXG5leHBvcnQgY29uc3QgYXBwQ29uZmlnOiBBcHBsaWNhdGlvbkNvbmZpZyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHByb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uKHsgZXZlbnRDb2FsZXNjaW5nOiB0cnVlIH0pLFxyXG4gICAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpLFxyXG4gICAgcHJvdmlkZUh0dHBDbGllbnQoXHJcbiAgICAgIHdpdGhJbnRlcmNlcHRvcnMoW3Rva2VuSW50ZXJjZXB0b3JdKVxyXG4gICAgKVxyXG4gIF1cclxufTsiLCIgIGltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAgaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuICBpbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG4gIGltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbiAgQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtbGF5b3V0JyxcbiAgICBpbXBvcnRzOiBbXG4gICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsOiAnLi9sYXlvdXQuY29tcG9uZW50LnNjc3MnXG4gIH0pXG4gIGV4cG9ydCBjbGFzcyBMYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXJSb2xlOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlzQWRtaW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbGxhYm9yYXRvcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzRHJvcGRvd25PcGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgY3VycmVudFVzZXI6IGFueSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcbiAgICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZSh1c2VyRGF0YSk7XG4gICAgICAgIHRoaXMudXNlclJvbGUgPSB1c2VyLnJvbGUgfHwgW107XG4gICAgICAgIHRoaXMuaXNBZG1pbiA9IHRoaXMudXNlclJvbGUuaW5jbHVkZXMoJ1JPTEVfQURNSU4nKTtcbiAgICAgICAgdGhpcy5pc0NvbGxhYm9yYXRvciA9IHRoaXMudXNlclJvbGUuaW5jbHVkZXMoJ1JPTEVfQ09MTEFCJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3RfdG9rZW4nKTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgY29uc3QgdG9rZW5EYXRhID0gSlNPTi5wYXJzZShhdG9iKHRva2VuLnNwbGl0KCcuJylbMV0pKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0ge1xuICAgICAgICAgICAgbmFtZTogdG9rZW5EYXRhLmNoZWNrc2NhbT8ucHJpbmNpcGFsPy51c2VybmFtZSB8fCAnJyxcbiAgICAgICAgICAgIGVtYWlsOiB0b2tlbkRhdGEuc3ViIHx8ICcnXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZURyb3Bkb3duKCkge1xuICAgICAgdGhpcy5pc0Ryb3Bkb3duT3BlbiA9ICF0aGlzLmlzRHJvcGRvd25PcGVuO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoJyN1c2VyRHJvcGRvd24nKSkge1xuICAgICAgICB0aGlzLmlzRHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dvdXQoKS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnand0X3Rva2VuJyk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgYWxlcnQoZXJyb3I/LmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4iLCIgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gICAgPGRpdj5cbiAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgYmctZ3JhZGllbnQtcHJpbWFyeSBzaWRlYmFyIHNpZGViYXItZGFyayBhY2NvcmRpb25cIiBpZD1cImFjY29yZGlvblNpZGViYXJcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJzaWRlYmFyLWJyYW5kIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiIHJvdXRlckxpbms9XCIvdXNlcnNcIlxuICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1icmFuZC1pY29uIHJvdGF0ZS1uLTE1XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXNoaWVsZC1oYWx2ZWRcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgQ2hlY2tTY2FtXG4gICAgICAgIDwvYT5cbiAgICAgICAgPCEtLSBEaXZpZGVyIC0tPlxuICAgICAgICA8aHIgY2xhc3M9XCJzaWRlYmFyLWRpdmlkZXIgbXktMFwiPlxuICAgICAgICA8IS0tIE5hdiBJdGVtIC0gRGFzaGJvYXJkIC0tPlxuICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiByb3V0ZXJMaW5rPVwiL2FkbWluL2Rhc2hib2FyZFwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVwie2V4YWN0OiB0cnVlfVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZncgZmEtdGFjaG9tZXRlci1hbHRcIj48L2k+XG4gICAgICAgICAgICA8c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8aHIgY2xhc3M9XCJzaWRlYmFyLWRpdmlkZXIgbXktMFwiPlxuICAgICAgICA8IS0tIEFkbWluIG9ubHkgbWVudSBpdGVtcyAtLT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQWRtaW5cIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIHJvdXRlckxpbms9XCIvYWRtaW4vdXNlcnNcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cIntleGFjdDogdHJ1ZX1cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS11c2Vyc1wiPjwvaT5cbiAgICAgICAgICAgICAgPHNwYW4+UXXhuqNuIGzDvSB0w6BpIGtob+G6o248L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSBDb21tb24gbWVudSBpdGVtcyBmb3IgYm90aCBBZG1pbiBhbmQgQ29sbGFib3JhdG9yIC0tPlxuICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiByb3V0ZXJMaW5rPVwiL2FkbWluL25ld3NcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cIntleGFjdDogdHJ1ZX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbmV3c3BhcGVyXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4+UXXhuqNuIGzDvSB0aW4gdOG7qWM8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIHJvdXRlckxpbms9XCIvYWRtaW4vcmVwb3J0c1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVwie2V4YWN0OiB0cnVlfVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zY3JvbGxcIj48L2k+XG4gICAgICAgICAgICA8c3Bhbj5RdeG6o24gbMO9IGLDoW8gY8Ohbzwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBDb250ZW50IFdyYXBwZXIgLS0+XG4gICAgPGRpdiBpZD1cImNvbnRlbnQtd3JhcHBlclwiIGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG5cbiAgICAgIDwhLS0gTWFpbiBDb250ZW50IC0tPlxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cblxuICAgICAgICA8IS0tIFRvcGJhciAtLT5cbiAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kIG5hdmJhci1saWdodCBiZy13aGl0ZSB0b3BiYXIgbWItNCBzdGF0aWMtdG9wIHNoYWRvd1wiPlxuXG4gICAgICAgICAgPCEtLSBTaWRlYmFyIFRvZ2dsZSAoVG9wYmFyKSAtLT5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwic2lkZWJhclRvZ2dsZVRvcFwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGQtbWQtbm9uZSByb3VuZGVkLWNpcmNsZSBtci0zXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWJhcnNcIj48L2k+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8IS0tIFRvcGJhciBOYXZiYXIgLS0+XG4gICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XG5cbiAgICAgICAgICAgIDwhLS0gTmF2IEl0ZW0gLSBTZWFyY2ggRHJvcGRvd24gKFZpc2libGUgT25seSBYUykgLS0+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93biBuby1hcnJvdyBkLXNtLW5vbmVcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBocmVmPVwiI1wiIGlkPVwic2VhcmNoRHJvcGRvd25cIiByb2xlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zZWFyY2ggZmEtZndcIj48L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biAtIE1lc3NhZ2VzIC0tPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0IHAtMyBzaGFkb3cgYW5pbWF0ZWQtLWdyb3ctaW5cIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNlYXJjaERyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtLWlubGluZSBtci1hdXRvIHctMTAwIG5hdmJhci1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBiZy1saWdodCBib3JkZXItMCBzbWFsbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvci4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zZWFyY2ggZmEtc21cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgIDwhLS0gTmF2IEl0ZW0gLSBVc2VyIEluZm9ybWF0aW9uIC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd24gbm8tYXJyb3dcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBpZD1cInVzZXJEcm9wZG93blwiIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd24oKVwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLnNob3ddPVwiaXNEcm9wZG93bk9wZW5cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiaXNEcm9wZG93bk9wZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVzZXItZW1haWxcIj57e2N1cnJlbnRVc2VyLmVtYWlsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1wcm9maWxlIHJvdW5kZWQtY2lyY2xlXCIgc3JjPVwiL2Fzc2V0cy9pbWcvdW5kcmF3X3Byb2ZpbGUuc3ZnXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biAtIFVzZXIgSW5mb3JtYXRpb24gLS0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHQgc2hhZG93IGFuaW1hdGVkLS1ncm93LWluXCIgW2NsYXNzLnNob3ddPVwiaXNEcm9wZG93bk9wZW5cIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInVzZXJEcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hZGRyZXNzLWNhcmRcIj48L2k+XG4gICAgICAgICAgICAgICAgICBUaMO0bmcgdGluIHTDoGkga2hv4bqjblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiAoY2xpY2spPVwibG9nb3V0KClcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcmlnaHQtZnJvbS1icmFja2V0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgxJDEg25nIHh14bqldFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgPC91bD5cblxuICAgICAgICA8L25hdj5cbiAgICAgICAgPCEtLSBFbmQgb2YgVG9wYmFyIC0tPlxuXG4gICAgICAgIDwhLS0gQmVnaW4gUGFnZSBDb250ZW50IC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cbiAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIC8uY29udGFpbmVyLWZsdWlkIC0tPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDwhLS0gRW5kIG9mIE1haW4gQ29udGVudCAtLT5cblxuICAgICAgPCEtLSBGb290ZXIgLS0+XG4gICAgICA8IS0tIDxmb290ZXIgY2xhc3M9XCJzdGlja3ktZm9vdGVyIGJnLXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXktYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3B5cmlnaHQgdGV4dC1jZW50ZXIgbXktYXV0b1wiPlxuICAgICAgICAgICAgPHNwYW4+Q29weXJpZ2h0IMKpIFlvdXIgV2Vic2l0ZSAyMDIxPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPiAtLT5cbiAgICAgIDwhLS0gRW5kIG9mIEZvb3RlciAtLT5cblxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PiIsIlxuICBpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuICBpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gIGltcG9ydCB7IEh0dHBVdGlsU2VydmljZSB9IGZyb20gJy4vaHR0cC51dGlsLnNlcnZpY2UnO1xuICBpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4gIGltcG9ydCB7IExvZ2luRFRPIH0gZnJvbSAnLi4vZHRvcy9sb2dpbi5kdG8nO1xuICBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG4gIGltcG9ydCB7IFVzZXJEVE8gfSBmcm9tICcuLi9kdG9zL3VzZXIuZHRvJztcblxuICBASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG4gIH0pXG4gIGV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBhcGlMb2dpbiA9IGAke2Vudmlyb25tZW50LmFwaUJhc2VVcmx9L2F1dGgvbG9naW5gO1xuICAgIHByaXZhdGUgYXBpQ3JlYXRlVXNlciA9IGAke2Vudmlyb25tZW50LmFwaUJhc2VVcmx9L3VzZXJzYDtcbiAgICBwcml2YXRlIGFwaVVwZGF0ZVVzZXIgPSBgJHtlbnZpcm9ubWVudC5hcGlCYXNlVXJsfS91c2Vyc2A7XG4gICAgcHJpdmF0ZSBhcGlMb2dvdXQgPSBgJHtlbnZpcm9ubWVudC5hcGlCYXNlVXJsfS9hdXRoL2xvZ291dGA7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICBwcml2YXRlIGh0dHBVdGlsU2VydmljZTogSHR0cFV0aWxTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIHByaXZhdGUgZ2V0QXBpQ29uZmlnKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5odHRwVXRpbFNlcnZpY2UuY3JlYXRlSGVhZGVycygpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBsb2dpbihsb2dpbkRUTzogTG9naW5EVE8pOiBPYnNlcnZhYmxlPGFueT4geyAgICBcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaUxvZ2luLCBsb2dpbkRUTywgdGhpcy5nZXRBcGlDb25maWcoKSk7XG4gICAgfSBcbiAgICBcbiAgICBsb2dvdXQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8dm9pZD4odGhpcy5hcGlMb2dvdXQsIHRoaXMuZ2V0QXBpQ29uZmlnKCkpO1xuICAgIH1cblxuICAgIGdldExpc3RVc2VycygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7ZW52aXJvbm1lbnQuYXBpQmFzZVVybH0vdXNlcnNgKTtcbiAgICB9XG5cbiAgICBjcmVhdGVVc2VyKHVzZXJEVE86IFVzZXJEVE8pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpQ3JlYXRlVXNlciwgdXNlckRUTywgdGhpcy5nZXRBcGlDb25maWcoKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlVXNlcihpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke2Vudmlyb25tZW50LmFwaUJhc2VVcmx9L3VzZXJzLyR7aWR9YCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVXNlcihpZDogbnVtYmVyLCB1c2VyRFRPOiBVc2VyRFRPKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke3RoaXMuYXBpVXBkYXRlVXNlcn0vJHtpZH1gLCB1c2VyRFRPLCB0aGlzLmdldEFwaUNvbmZpZygpKTtcbiAgICB9XG5cbiAgICBzYXZlVXNlckRhdGEodG9rZW46IGFueSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICAvLyBO4bq/dSB0cnV54buBbiB2w6BvIGzDoCBvYmplY3QgY2jhu6lhIGFjY2Vzc190b2tlbiB0aMOsIGzhuqV5IGNodeG7l2kgdG9rZW5cbiAgICAgIGNvbnN0IHJhd1Rva2VuID0gdHlwZW9mIHRva2VuID09PSAnc3RyaW5nJyA/IHRva2VuIDogdG9rZW4/LmFjY2Vzc190b2tlbjtcblxuICAgICAgaWYgKCFyYXdUb2tlbiB8fCB0eXBlb2YgcmF3VG9rZW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUb2tlbiBraMO0bmcgaOG7o3AgbOG7hzpcIiwgdG9rZW4pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKGF0b2IocmF3VG9rZW4uc3BsaXQoJy4nKVsxXSkpO1xuXG4gICAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgICAgcm9sZTogcGF5bG9hZD8ucm9sZXMgfHwgW10sXG4gICAgICAgIHRva2VuOiByYXdUb2tlblxuICAgICAgfTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTOG7l2kga2hpIHBow6JuIHTDrWNoIHRva2VuOlwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgfVxuIiwiZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG4gICAgYXBpQmFzZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEnLFxyXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwVXRpbFNlcnZpY2Uge1xyXG4gIGNyZWF0ZUhlYWRlcnMoKTogSHR0cEhlYWRlcnMge1xyXG4gICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiAndmknLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG4gIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gIGltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuICBpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG4gIGltcG9ydCB7IFJvdXRlciwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuICBpbXBvcnQgeyBVc2VyRFRPIH0gZnJvbSAnLi4vLi4vZHRvcy91c2VyLmR0byc7XHJcbiAgaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbiAgaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuICBpbXBvcnQgeyBDcmVhdGVVc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jcmVhdGUtdXNlci9jcmVhdGUtdXNlci5jb21wb25lbnQnO1xyXG4gIGltcG9ydCB7IFVwZGF0ZVVzZXJDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS11c2VyL3VwZGF0ZS11c2VyLmNvbXBvbmVudCc7XHJcblxyXG4gIEBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtdXNlcicsXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgUm91dGVyTW9kdWxlLFxyXG4gICAgICBGb3Jtc01vZHVsZVxyXG4gICAgXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsOiAnLi91c2VyLmNvbXBvbmVudC5zY3NzJ1xyXG4gIH0pXHJcbiAgZXhwb3J0IGNsYXNzIFVzZXJDb21wb25lbnQge1xyXG4gICAgbmFtZSA6IHN0cmluZyA9ICcnO1xyXG4gICAgZW1haWw6IHN0cmluZyAgPSAnJztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmcgPSAnJztcclxuICAgIGlzUG9wdXBWaXNpYmxlOiBhbnk7XHJcblxyXG4gICAgYWNjb3VudHM6IGFueVtdID0gW107XHJcbiAgICBzZWxlY3RlZFVzZXI6IGFueSA9IG51bGw7XHJcbiAgICBpc0VkaXRNb2RlID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMubG9hZExpc3RVc2VycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRMaXN0VXNlcnMoKSB7XHJcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0TGlzdFVzZXJzKCkuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMuYWNjb3VudHMgPSByZXNwb25zZS5tYXAoKHVzZXI6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgLi4udXNlcixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQgfHwgJycgLy8gxJDhuqNtIGLhuqNvIGPDsyB0csaw4budbmcgcGFzc3dvcmRcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KGVycm9yLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVXNlcihpZDogbnVtYmVyKSB7XHJcbiAgICAgIGlmIChjb25maXJtKFwiQuG6oW4gY8OzIGNo4bqvYyBtdeG7kW4geMOzYSBuZ8aw4budaSBkw7luZyBuw6B5P1wiKSkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZGVsZXRlVXNlcihpZCkuc3Vic2NyaWJlKHtcclxuICAgICAgICAgIG5leHQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTGlzdFVzZXJzKCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvci5lcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuRGlhbG9nQ3JlYXRlVXNlcigpOiB2b2lkIHtcclxuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDcmVhdGVVc2VyQ29tcG9uZW50LCB7XHJcbiAgICAgICAgd2lkdGg6ICc0MDBweCcsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy5sb2FkTGlzdFVzZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRGlhbG9nVXBkYXRlVXNlcih1c2VyOiBhbnkpOiB2b2lkIHtcclxuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihVcGRhdGVVc2VyQ29tcG9uZW50LCB7XHJcbiAgICAgICAgd2lkdGg6ICc0MDBweCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkIHx8ICcnIC8vIFRydXnhu4FuIHBhc3N3b3JkIHbDoG8gZGlhbG9nXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgICAgIHRoaXMubG9hZExpc3RVc2VycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVubG9ja0FjY291bnQodXNlcklkOiBudW1iZXIpIHtcclxuICAgICAgLy8gSW1wbGVtZW50IHVubG9jayBhY2NvdW50IGZ1bmN0aW9uYWxpdHlcclxuICAgICAgY29uc29sZS5sb2coJ1VubG9jayBhY2NvdW50OicsIHVzZXJJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4iLCJcclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWFjdGlvbnNcIj5cclxuICAgICAgPGgxIGNsYXNzPVwiaDMgbWItMiB0ZXh0LWdyYXktODAwXCI+UXXhuqNuIGzDvSB0w6BpIGtob+G6o248L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0YVRhYmxlc19sZW5ndGhcIiBpZD1cImRhdGFUYWJsZV9sZW5ndGhcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJnLWdyYWRpZW50LXByaW1hcnlcIiAoY2xpY2spPVwib3BlbkRpYWxvZ0NyZWF0ZVVzZXIoKVwiPjxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICBUaMOqbTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQgc2hhZG93IG1iLTRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIHB5LTNcIj5cclxuICAgICAgICA8aDYgY2xhc3M9XCJtLTAgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXByaW1hcnlcIj5EYW5oIHPDoWNoIHTDoGkga2hv4bqjbjwvaDY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJkYXRhVGFibGVfd3JhcHBlclwiIGNsYXNzPVwiZGF0YVRhYmxlc193cmFwcGVyIGR0LWJvb3RzdHJhcDRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkYXRhVGFibGVfZmlsdGVyXCIgY2xhc3M9XCJkYXRhVGFibGVzX2ZpbHRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIGRhdGFUYWJsZVwiIGlkPVwiZGF0YVRhYmxlXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cImdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZGF0YVRhYmxlX2luZm9cIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIHJvbGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBhcmlhLWNvbnRyb2xzPVwiZGF0YVRhYmxlXCIgcm93c3Bhbj1cIjFcIiBjb2xzcGFuPVwiMVwiIGFyaWEtc29ydD1cImFzY2VuZGluZ1wiIHN0eWxlPVwid2lkdGg6IDIwcHg7XCI+SURcclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJzb3J0aW5nXCIgdGFiaW5kZXg9XCIwXCIgcm93c3Bhbj1cIjFcIiBjb2xzcGFuPVwiMVwiIHN0eWxlPVwid2lkdGg6IDI0Ny43cHg7XCI+VMOqbiBuZ8aw4budaSBkw7luZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJzb3J0aW5nXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1jb250cm9scz1cImRhdGFUYWJsZVwiIHJvd3NwYW49XCIxXCIgY29sc3Bhbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAyNDcuN3B4O1wiPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInNvcnRpbmdcIiB0YWJpbmRleD1cIjBcIiBhcmlhLWNvbnRyb2xzPVwiZGF0YVRhYmxlXCIgcm93c3Bhbj1cIjFcIiBjb2xzcGFuPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDc4LjJweDtcIj5Iw6BuaCDEkeG7mW5nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwib2RkXCIgKm5nRm9yPVwibGV0IGFjY291bnQgb2YgYWNjb3VudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInNvcnRpbmdfMVwiPnt7IGFjY291bnQuaWQgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IGFjY291bnQubmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgYWNjb3VudC5lbWFpbCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gZWRpdC1idG5cIiAoY2xpY2spPVwib3BlbkRpYWxvZ1VwZGF0ZVVzZXIoYWNjb3VudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBlbi10by1zcXVhcmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGRlbGV0ZS1idG5cIiAoY2xpY2spPVwiZGVsZXRlVXNlcihhY2NvdW50LmlkKVwiPjxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiIsIlxuICBpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuICBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAgaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4gIGltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4gIGltcG9ydCB7IFVzZXJEVE8gfSBmcm9tICcuLi8uLi8uLi9kdG9zL3VzZXIuZHRvJztcbiAgaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuICBpbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuICBpbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG4gIGltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuICBpbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcblxuICBAQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1jcmVhdGUtdXNlcicsXG4gICAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBdLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jcmVhdGUtdXNlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmw6ICcuL2NyZWF0ZS11c2VyLmNvbXBvbmVudC5zY3NzJ1xuICB9KVxuICBleHBvcnQgY2xhc3MgQ3JlYXRlVXNlckNvbXBvbmVudCB7XG5cbiAgICBuYW1lID0gJyc7XG4gICAgZW1haWwgPSAnJztcbiAgICBwYXNzd29yZCA9ICcnO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDcmVhdGVVc2VyQ29tcG9uZW50PixcbiAgICApe31cbiAgICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlVXNlcigpe1xuICAgICAgY29uc3QgdXNlckRUTzogVXNlckRUTyA9IHtcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICB9O1xuICAgICAgdGhpcy51c2VyU2VydmljZS5jcmVhdGVVc2VyKHVzZXJEVE8pLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xuICAgICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3VzZXJzJ10pO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICBhbGVydChlcnJvci5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2xvc2VEaWFsb2coKTogdm9pZCB7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4iLCIgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICA8aDU+VGjDqm0gdMOgaSBraG/huqNuPC9oNT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlRGlhbG9nKClcIj7DlzwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICA8bGFiZWw+VMOqbjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTmjhuq1wIHTDqm5cIiBbKG5nTW9kZWwpXT1cIm5hbWVcIiA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTmjhuq1wIGVtYWlsXCIgWyhuZ01vZGVsKV09XCJlbWFpbFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgIDxsYWJlbD5N4bqtdCBraOG6qXU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJOaOG6rXAgbeG6rXQga2jhuql1XCIgWyhuZ01vZGVsKV09XCJwYXNzd29yZFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIChjbGljayk9XCJjbG9zZURpYWxvZygpXCI+SOG7p3k8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImNyZWF0ZVVzZXIoKVwiPlThuqFvPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+IiwiICBpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuICBpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gIGltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuICBpbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuICBpbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUsIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbiAgaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG4gIGltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuICBpbXBvcnQgeyBVc2VyRFRPIH0gZnJvbSAnLi4vLi4vLi4vZHRvcy91c2VyLmR0byc7XG4gIGltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcblxuICBpbnRlcmZhY2UgVXNlckRhdGEge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgfVxuXG4gIEBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXVwZGF0ZS11c2VyJyxcbiAgICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgIE1hdElucHV0TW9kdWxlLFxuICAgICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIF0sXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VwZGF0ZS11c2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybDogJy4vdXBkYXRlLXVzZXIuY29tcG9uZW50LnNjc3MnXG4gIH0pXG4gIGV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBuYW1lID0gJyc7XG4gICAgZW1haWwgPSAnJztcbiAgICBwYXNzd29yZCA9ICcnO1xuICAgIHVzZXJJZCE6IG51bWJlcjtcbiAgICBzaG93UGFzc3dvcmQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFVwZGF0ZVVzZXJDb21wb25lbnQ+LFxuICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBVc2VyRGF0YVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZGF0YTonLCB0aGlzLmRhdGEpOyAvLyBEZWJ1ZyBsb2dcbiAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLmRhdGEuaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLmVtYWlsID0gdGhpcy5kYXRhLmVtYWlsO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gdGhpcy5kYXRhLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpIHtcbiAgICAgIHRoaXMuc2hvd1Bhc3N3b3JkID0gIXRoaXMuc2hvd1Bhc3N3b3JkO1xuICAgIH1cblxuICAgIHVwZGF0ZVVzZXIoKSB7XG4gICAgICBpZiAoIXRoaXMudXNlcklkKSB7XG4gICAgICAgIGFsZXJ0KCdLaMO0bmcgdMOsbSB0aOG6pXkgdGjDtG5nIHRpbiBuZ8aw4budaSBkw7luZycpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVzZXJEVE86IFVzZXJEVE8gPSB7XG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXIodGhpcy51c2VySWQsIHVzZXJEVE8pLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICBhbGVydChlcnJvci5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlRGlhbG9nKCk6IHZvaWQge1xuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG4gIH1cbiIsIiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGg1PkPhuq1wIG5o4bqtdCB0w6BpIGtob+G6o248L2g1PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idXR0b25cIiAoY2xpY2spPVwiY2xvc2VEaWFsb2coKVwiPsOXPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VMOqbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5o4bqtcCB0w6puXCIgWyhuZ01vZGVsKV09XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIk5o4bqtcCBlbWFpbFwiIFsobmdNb2RlbCldPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5N4bqtdCBraOG6qXU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIk5o4bqtcCBt4bqtdCBraOG6qXVcIiBbKG5nTW9kZWwpXT1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiAoY2xpY2spPVwiY2xvc2VEaWFsb2coKVwiPkjhu6d5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJ1cGRhdGVVc2VyKClcIj5D4bqtcCBuaOG6rXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgTmV3c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uZXdzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZXdzRFRPIH0gZnJvbSAnLi4vLi4vZHRvcy9uZXdzLmR0byc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1uZXdzJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZXdzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uZXdzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qIGRhbmggc8OhY2ggKi9cclxuICBwb3N0czogYW55W10gPSBbXTtcclxuXHJcbiAgLyogcG9wdXAgc3RhdGUgKyBmb3JtICovXHJcbiAgaXNQb3B1cFZpc2libGUgPSBmYWxzZTtcclxuICBuYW1lID0gJyc7XHJcbiAgc2hvcnREZXNjcmlwdGlvbiA9ICcnO1xyXG4gIGNvbnRlbnQgPSAnJztcclxuICBzZWxlY3RlZEZpbGU6IEZpbGUgfCBudWxsID0gbnVsbDtcclxuXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIGZpbGVJbnB1dCE6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuZXdzU2VydmljZTogTmV3c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7fVxyXG5cclxuICAvKiAtLS0tLS0tLS0tIGxpZmVjeWNsZSAtLS0tLS0tLS0tICovXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7IHRoaXMubG9hZEFsbE5ld3MoKTsgfVxyXG5cclxuICAvKiAtLS0tLS0tLS0tIGzhuqV5IGRhbmggc8OhY2ggLS0tLS0tLS0tLSAqL1xyXG4gIHByaXZhdGUgbG9hZEFsbE5ld3MoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldExpc3ROZXdzKCkuc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dDogcmVzID0+ICh0aGlzLnBvc3RzID0gcmVzKSxcclxuICAgICAgZXJyb3I6IGVyciA9PiBhbGVydChlcnIuZXJyb3IgfHwgJ0tow7RuZyBs4bqleSDEkcaw4bujYyBkYW5oIHPDoWNoJylcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyogLS0tLS0tLS0tLSB4w7NhIC0tLS0tLS0tLS0gKi9cclxuICBkZWxldGVOZXdzKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghY29uZmlybSgnQuG6oW4gY8OzIGNo4bqvYyBtdeG7kW4geMOzYSBiw6BpIMSRxINuZyBuw6B5PycpKSB7IHJldHVybjsgfVxyXG5cclxuICAgIHRoaXMubmV3c1NlcnZpY2UuZGVsZXRlTmV3c0J5SWQoaWQpLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6ICgpID0+IHRoaXMubG9hZEFsbE5ld3MoKSxcclxuICAgICAgZXJyb3I6IGVyciA9PiBhbGVydChlcnIuZXJyb3IgfHwgJ1jDs2EgdGjhuqV0IGLhuqFpJylcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyogLS0tLS0tLS0tLSBwb3B1cCAtLS0tLS0tLS0tICovXHJcbiAgdG9nZ2xlUG9wdXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzUG9wdXBWaXNpYmxlID0gIXRoaXMuaXNQb3B1cFZpc2libGU7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzUG9wdXBWaXNpYmxlKSB7XHJcbiAgICAgIC8qIHJlc2V0IGZvcm0ga2hpIMSRw7NuZyAqL1xyXG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnNob3J0RGVzY3JpcHRpb24gPSB0aGlzLmNvbnRlbnQgPSAnJztcclxuICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBudWxsO1xyXG4gICAgICBpZiAodGhpcy5maWxlSW5wdXQpIHsgdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9wZW5Bc3NpZ25Qb3B1cCgpOiB2b2lkIHsgdGhpcy50b2dnbGVQb3B1cCgpOyB9XHJcblxyXG4gIGNsb3NlUG9wdXAoZXZ0OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoKGV2dC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygncG9wdXAtb3ZlcmxheScpKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlUG9wdXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIC0tLS0tLS0tLS0gZmlsZSAtLS0tLS0tLS0tICovXHJcbiAgb25GaWxlU2VsZWN0KGV2dDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXZ0LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSA/IGlucHV0LmZpbGVzWzBdIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qIC0tLS0tLS0tLS0gdOG6oW8gdGluIC0tLS0tLS0tLS0gKi9cclxuICBjcmVhdGVOZXdzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZHRvOiBOZXdzRFRPID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHNob3J0RGVzY3JpcHRpb246IHRoaXMuc2hvcnREZXNjcmlwdGlvbixcclxuICAgICAgY29udGVudDogdGhpcy5jb250ZW50XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubmV3c1NlcnZpY2UuY3JlYXRlTmV3cyhkdG8pLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IHJlcyA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXM/LmRhdGE/LmlkID8/IHJlcz8uaWQ7XHJcbiAgICAgICAgaWYgKCFpZCkgeyBhbGVydCgnS2jDtG5nIG5o4bqtbiDEkcaw4bujYyBJRCBiw6BpIHZp4bq/dCcpOyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWxlKSB7XHJcbiAgICAgICAgICB0aGlzLnVwbG9hZEZpbGUoaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydCgnVOG6oW8gYsOgaSB2aeG6v3QgdGjDoG5oIGPDtG5nIScpO1xyXG4gICAgICAgICAgdGhpcy5hZnRlckNyZWF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlOiBIdHRwRXJyb3JSZXNwb25zZSkgPT5cclxuICAgICAgICBhbGVydChlLmVycm9yPy5tZXNzYWdlIHx8ICdU4bqhbyBiw6BpIHZp4bq/dCB0aOG6pXQgYuG6oWknKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwbG9hZEZpbGUobmV3c0lkOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEZpbGUpIHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlcycsIHRoaXMuc2VsZWN0ZWRGaWxlLCB0aGlzLnNlbGVjdGVkRmlsZS5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLnVwbG9hZEZpbGVzKG5ld3NJZCwgZm9ybURhdGEpLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6ICgpID0+IHtcclxuICAgICAgICBhbGVydCgnVOG6oW8gYsOgaSB2aeG6v3QgJiB1cGxvYWQg4bqjbmggdGjDoG5oIGPDtG5nIScpO1xyXG4gICAgICAgIHRoaXMuYWZ0ZXJDcmVhdGUoKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlOiBIdHRwRXJyb3JSZXNwb25zZSkgPT5cclxuICAgICAgICBhbGVydChlLmVycm9yPy5tZXNzYWdlIHx8ICdVcGxvYWQg4bqjbmggdGjhuqV0IGLhuqFpJylcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZnRlckNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9nZ2xlUG9wdXAoKTtcclxuICAgIHRoaXMubG9hZEFsbE5ld3MoKTtcclxuICB9XHJcbn0iLCI8IS0tIFFV4bqiTiBMw50gVElOIFThu6hDIC0tPlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgPGRpdiBjbGFzcz1cImhlYWRlci1hY3Rpb25zXCI+XHJcbiAgICA8aDEgY2xhc3M9XCJoMyBtYi0yIHRleHQtZ3JheS04MDBcIj5RdeG6o24gbMO9IHRpbiB04bupYzwvaDE+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBiZy1ncmFkaWVudC1wcmltYXJ5XCJcclxuICAgICAgICAgICByb3V0ZXJMaW5rPVwiL2FkbWluL2NyZWF0ZS1uZXdzXCIgPlxyXG4gICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPiBUaMOqbVxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkIHNoYWRvdyBtYi00XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgcHktM1wiPlxyXG4gICAgICA8aDYgY2xhc3M9XCJtLTAgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXByaW1hcnlcIj5EYW5oIHPDoWNoIHRpbiB04bupYzwvaDY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBzdHlsZT1cIndpZHRoOjYwcHhcIj5JRDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Uw6puPC90aD5cclxuICAgICAgICAgICAgPHRoPk3DtCB04bqjPC90aD5cclxuICAgICAgICAgICAgPHRoIHN0eWxlPVwid2lkdGg6MTEwcHhcIj5Iw6BuaCZuYnNwO8SR4buZbmc8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcG9zdCBvZiBwb3N0c1wiPlxyXG4gICAgICAgICAgICA8dGQ+e3sgcG9zdC5pZCB9fTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9hZG1pbi9kZXRhaWwtbmV3cycsIHBvc3QuaWRdXCI+e3sgcG9zdC5uYW1lIH19PC9hPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3sgcG9zdC5zaG9ydERlc2NyaXB0aW9uIH19PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBlZGl0LWJ0blwiIHJvdXRlckxpbms9XCIvYW1kaW4vdXBkYXRlLW5ld3Mve3twb3N0LmlkfX1cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuLXRvLXNxdWFyZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBkZWxldGUtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkZWxldGVOZXdzKHBvc3QuaWQpXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSA9PT09PT09PT09IFBPUFVQID09PT09PT09PT0gLS0+XHJcbjxkaXYgY2xhc3M9XCJwb3B1cC1vdmVybGF5XCJcclxuICAgICAqbmdJZj1cImlzUG9wdXBWaXNpYmxlXCJcclxuICAgICAoY2xpY2spPVwiY2xvc2VQb3B1cCgkZXZlbnQpXCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaGVhZGVyXCI+XHJcbiAgICAgIDxoNT5UaMOqbSB0aW4gdOG7qWM8L2g1PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZVBvcHVwKClcIj7DlzwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBvcHVwLWJvZHlcIj5cclxuICAgICAgPCEtLSB0w6puIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgPGxhYmVsPlTDqm48L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJuYW1lXCI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBtw7QgdOG6oyAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgIDxsYWJlbD5Nw7QgdOG6ozwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNob3J0RGVzY3JpcHRpb25cIj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIG7hu5lpIGR1bmcgLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTNcIj5cclxuICAgICAgICA8bGFiZWw+TuG7mWkgZHVuZzwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImNvbnRlbnRcIj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIOG6o25oIMSRw61uaCBrw6htIChjaOG7iSAxKSAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj7huqJuaCDEkcOtbmgga8OobTwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJmaWxlSW5wdXQuY2xpY2soKVwiPlxyXG4gICAgICAgICAgQ2jhu41uIOG6o25o4oCmXHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxpbnB1dCAjZmlsZUlucHV0XHJcbiAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uRmlsZVNlbGVjdCgkZXZlbnQpXCI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBoaeG7g24gdGjhu4sgZmlsZSAtLT5cclxuICAgICAgPGRpdiAqbmdJZj1cInNlbGVjdGVkRmlsZVwiIGNsYXNzPVwibWItM1wiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj7huqJuaCDEkcOjIGNo4buNbjo8L2xhYmVsPlxyXG4gICAgICAgIDxkaXY+e3sgc2VsZWN0ZWRGaWxlLm5hbWUgfX0gKHt7IHNlbGVjdGVkRmlsZS5zaXplIHwgbnVtYmVyIH19IGJ5dGVzKTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1mb290ZXJcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgKGNsaWNrKT1cInRvZ2dsZVBvcHVwKClcIj5I4buneTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImNyZWF0ZU5ld3MoKVwiPlThuqFvPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+IiwiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IEh0dHBVdGlsU2VydmljZSB9IGZyb20gJy4vaHR0cC51dGlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE5ld3NEVE8gfSBmcm9tICcuLi9kdG9zL25ld3MuZHRvJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld3NTZXJ2aWNlIHtcclxuICBwcml2YXRlIGFwaU5ld3MgPSBgJHtlbnZpcm9ubWVudC5hcGlCYXNlVXJsfS9uZXdzYDtcclxuICBwcml2YXRlIGFwaVVwZGF0ZU5ld3MgPSBgJHtlbnZpcm9ubWVudC5hcGlCYXNlVXJsfS9uZXdzYDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGh0dHBVdGlsU2VydmljZTogSHR0cFV0aWxTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBcGlDb25maWcoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLmh0dHBVdGlsU2VydmljZS5jcmVhdGVIZWFkZXJzKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsTmV3cyhwYWdlOiBudW1iZXIgPSAwLCBzaXplOiBudW1iZXIgPSA1KTogT2JzZXJ2YWJsZTxhbnk+IHsgXHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgJHt0aGlzLmFwaU5ld3N9P3BhZ2U9JHtwYWdlfSZzaXplPSR7c2l6ZX1gKTtcclxuICB9XHJcblxyXG4gIGdldExpc3ROZXdzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtlbnZpcm9ubWVudC5hcGlCYXNlVXJsfS9uZXdzYCk7XHJcbiAgfVxyXG5cclxuICBnZXROZXdzQnlJZChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke2Vudmlyb25tZW50LmFwaUJhc2VVcmx9L25ld3MvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZU5ld3MobmV3c0RUTzogTmV3c0RUTyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlOZXdzLCBuZXdzRFRPLCB0aGlzLmdldEFwaUNvbmZpZygpKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZU5ld3NCeUlkKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoYCR7ZW52aXJvbm1lbnQuYXBpQmFzZVVybH0vbmV3cy8ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZXMobmV3c0lkOiBudW1iZXIgfCBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihgJHtlbnZpcm9ubWVudC5hcGlCYXNlVXJsfS9uZXdzL3VwbG9hZHMvJHtuZXdzSWR9YCwgZm9ybURhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTmV3cyhpZDogbnVtYmVyLG5ld3NEVE86IE5ld3NEVE8pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7ZW52aXJvbm1lbnQuYXBpQmFzZVVybH0vbmV3cy8ke2lkfWAsIG5ld3NEVE8pO1xyXG4gIH1cclxufSIsIiAgaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuICBpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gIGltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbiAgaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4gIGltcG9ydCB7IFJlcG9ydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXBvcnQuc2VydmljZSc7XHJcbiAgaW1wb3J0IHsgU2NhbVR5cGVTZXJ2aWNlLCBTY2FtVHlwZUR0byB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NjYW0tdHlwZS5zZXJ2aWNlJztcclxuXHJcbiAgaW1wb3J0IHsgUmVwb3J0U3RhdHVzVG9TdHJpbmdQaXBlIH0gZnJvbSAnLi4vc2hhcmVkcy9waXBlcy9yZXBvcnQtc3RhdHVzLXRvLXN0cmluZy5waXBlJztcclxuICBpbXBvcnQgeyBJbmZvcm1hdGlvblR5cGVUb1N0cmluZ1BpcGUgfSBmcm9tICcuLi9zaGFyZWRzL3BpcGVzL2luZm9ybWF0aW9uLXR5cGUtdG8tc3RyaW5nLnBpcGUnO1xyXG5cclxuICBAQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXJlcG9ydCcsXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgICAgRm9ybXNNb2R1bGUsICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIFJlcG9ydFN0YXR1c1RvU3RyaW5nUGlwZSxcclxuICAgICAgSW5mb3JtYXRpb25UeXBlVG9TdHJpbmdQaXBlXHJcbiAgICBdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlcG9ydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9yZXBvcnQuY29tcG9uZW50LnNjc3MnXVxyXG4gIH0pXHJcbiAgZXhwb3J0IGNsYXNzIFJlcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcmVwb3J0czogYW55W10gPSBbXTtcclxuXHJcbiAgICAvKiAtLS0tLS0tLS0tLS0gc3RhdGUgZHJvcGRvd24gLS0tLS0tLS0tLS0tICovXHJcbiAgICBkcm9wZG93bk9wZW5Gb3JJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7ICAgICBcclxuICAgIHNjYW1UeXBlczogU2NhbVR5cGVEdG9bXSA9IFtdO1xyXG4gICAgc2VsZWN0ZWRTY2FtVHlwZUlkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAgIG5ld1NjYW1UeXBlID0geyBuYW1lOiAnJywgY29kZTogJycgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHJpdmF0ZSByZXBvcnRTZXJ2aWNlOiBSZXBvcnRTZXJ2aWNlLFxyXG4gICAgICBwcml2YXRlIHNjYW1UeXBlU2VydmljZTogU2NhbVR5cGVTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIC8qID09PT09IGxpZmVjeWNsZSA9PT09PSAqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IHRoaXMubG9hZEFsbFJlcG9ydHMoKTsgfVxyXG5cclxuICAgIC8qID09PT09IGfhu41pIEFQSSBkYW5oIHPDoWNoID09PT09ICovXHJcbiAgICBsb2FkQWxsUmVwb3J0cygpOiB2b2lkIHtcclxuICAgICAgdGhpcy5yZXBvcnRTZXJ2aWNlLmdldExpc3RSZXBvcnRzKCkuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAocmVzKSA9PiB0aGlzLnJlcG9ydHMgPSByZXMuZGF0YSB8fCBbXSxcclxuICAgICAgICBlcnJvcjogKGVycikgPT4gYWxlcnQoZXJyLmVycm9yPy5tZXNzYWdlIHx8IGVyci5tZXNzYWdlIHx8ICdM4buXaSB04bqjaSBkYW5oIHPDoWNoJylcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogPT09PT0gbeG7nyBkcm9wZG93biA9PT09PSAqL1xyXG4gICAgb3BlbkRyb3Bkb3duKHJlcG9ydElkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy5kcm9wZG93bk9wZW5Gb3JJZCA9IHJlcG9ydElkO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkU2NhbVR5cGVJZCA9IG51bGw7XHJcbiAgICAgIHRoaXMubmV3U2NhbVR5cGUgPSB7IG5hbWU6ICcnLCBjb2RlOiAnJyB9O1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2NhbVR5cGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuc2NhbVR5cGVTZXJ2aWNlLmdldEFsbCgpLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICBuZXh0OiBsaXN0ID0+IHRoaXMuc2NhbVR5cGVzID0gbGlzdCxcclxuICAgICAgICAgIGVycm9yOiAoKSA9PiBhbGVydCgnS2jDtG5nIHThuqNpIMSRxrDhu6NjIGRhbmggc8OhY2ggaMOsbmggdGjhu6ljIGzhu6thIMSR4bqjbycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZURyb3Bkb3duKCk6IHZvaWQgeyB0aGlzLmRyb3Bkb3duT3BlbkZvcklkID0gbnVsbDsgfVxyXG5cclxuICAgIC8qID09PT09IHjDoWMgbmjhuq1uIHbhu5tpIGlkIGPDsyBz4bq1biA9PT09PSAqL1xyXG4gICAgY29uZmlybVJlcG9ydChyZXBvcnRJZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZFNjYW1UeXBlSWQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVwb3J0U2VydmljZS5oYW5kbGVSZXBvcnQoe1xyXG4gICAgICAgIGlkUmVwb3J0OiByZXBvcnRJZCxcclxuICAgICAgICBzdGF0dXM6IDIsXHJcbiAgICAgICAgaWRTY2FtVHlwZUFmdGVySGFuZGxlOiB0aGlzLnNlbGVjdGVkU2NhbVR5cGVJZFxyXG4gICAgICB9KS5zdWJzY3JpYmUoe1xyXG4gICAgICAgIG5leHQ6ICgpID0+IHsgYWxlcnQoJ1jDoWMgbmjhuq1uIHRow6BuaCBjw7RuZycpOyB0aGlzLmFmdGVySGFuZGxlKCk7IH0sXHJcbiAgICAgICAgZXJyb3I6ICgpID0+IGFsZXJ0KCdM4buXaSB4w6FjIG5o4bqtbicpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qID09PT09IHThuqFvIG3hu5tpICsgeMOhYyBuaOG6rW4gPT09PT0gKi9cclxuICAgIGNyZWF0ZVNjYW1UeXBlQW5kQ29uZmlybShyZXBvcnRJZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgY29kZSB9ID0gdGhpcy5uZXdTY2FtVHlwZTtcclxuICAgICAgaWYgKCFuYW1lLnRyaW0oKSB8fCAhY29kZS50cmltKCkpIHsgYWxlcnQoJ05o4bqtcCB0w6puICYgbcOjIScpOyByZXR1cm47IH1cclxuXHJcbiAgICAgIHRoaXMuc2NhbVR5cGVTZXJ2aWNlLmNyZWF0ZSh7IG5hbWU6IG5hbWUudHJpbSgpLCBjb2RlOiBjb2RlLnRyaW0oKSB9KS5zdWJzY3JpYmUoe1xyXG4gICAgICAgIG5leHQ6IChjcmVhdGVkKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNjYW1UeXBlcy5wdXNoKGNyZWF0ZWQpO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFNjYW1UeXBlSWQgPSBjcmVhdGVkLmlkO1xyXG4gICAgICAgICAgdGhpcy5jb25maXJtUmVwb3J0KHJlcG9ydElkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoKSA9PiBhbGVydCgnTOG7l2kgdOG6oW8gbeG7m2kgU2NhbeKAkXR5cGUnKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiA9PT09PSB04burIGNo4buRaSA9PT09PSAqL1xyXG4gICAgcmVqZWN0UmVwb3J0KHJlcG9ydElkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy5yZXBvcnRTZXJ2aWNlLmhhbmRsZVJlcG9ydCh7XHJcbiAgICAgICAgaWRSZXBvcnQ6IHJlcG9ydElkLFxyXG4gICAgICAgIHN0YXR1czogMyxcclxuICAgICAgICBpZFNjYW1UeXBlQWZ0ZXJIYW5kbGU6IG51bGxcclxuICAgICAgfSkuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAoKSA9PiB7IGFsZXJ0KCdU4burIGNo4buRaSB0aMOgbmggY8O0bmcnKTsgdGhpcy5hZnRlckhhbmRsZSgpOyB9LFxyXG4gICAgICAgIGVycm9yOiAoKSA9PiBhbGVydCgnTOG7l2kgdOG7qyBjaOG7kWknKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFmdGVySGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcclxuICAgICAgdGhpcy5sb2FkQWxsUmVwb3J0cygpO1xyXG4gICAgfVxyXG4gIH1cclxuIiwiICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWFjdGlvbnNcIj5cclxuICAgICAgPGgxIGNsYXNzPVwiaDMgbWItMiB0ZXh0LWdyYXktODAwXCI+UXXhuqNuIGzDvSBiw6FvIGPDoW88L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCBzaGFkb3cgbWItNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgcHktM1wiPlxyXG4gICAgICAgIDxoNiBjbGFzcz1cIm0tMCBmb250LXdlaWdodC1ib2xkIHRleHQtcHJpbWFyeVwiPkRhbmggc8OhY2ggYsOhbyBjw6FvPC9oNj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImRhdGFUYWJsZV93cmFwcGVyXCIgY2xhc3M9XCJkYXRhVGFibGVzX3dyYXBwZXIgZHQtYm9vdHN0cmFwNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImRhdGFUYWJsZV9maWx0ZXJcIiBjbGFzcz1cImRhdGFUYWJsZXNfZmlsdGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWQgZGF0YVRhYmxlXCIgaWQ9XCJkYXRhVGFibGVcIiB3aWR0aD1cIjEwMCVcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwiZ3JpZFwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJkYXRhVGFibGVfaW5mb1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHIgcm9sZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGFyaWEtY29udHJvbHM9XCJkYXRhVGFibGVcIiByb3dzcGFuPVwiMVwiIGNvbHNwYW49XCIxXCIgYXJpYS1zb3J0PVwiYXNjZW5kaW5nXCIgc3R5bGU9XCJ3aWR0aDogMjBweDtcIj5JRFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInNvcnRpbmdcIiB0YWJpbmRleD1cIjBcIiByb3dzcGFuPVwiMVwiIGNvbHNwYW49XCIxXCIgc3R5bGU9XCJ3aWR0aDogMTUwcHg7XCI+VGjDtG5nIHRpbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJzb3J0aW5nXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1jb250cm9scz1cImRhdGFUYWJsZVwiIHJvd3NwYW49XCIxXCIgY29sc3Bhbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAyNTBweDtcIj5Nw7QgdOG6ozwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJzb3J0aW5nXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1jb250cm9scz1cImRhdGFUYWJsZVwiIHJvd3NwYW49XCIxXCIgY29sc3Bhbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA3OC4ycHg7XCI+VHLhuqFuZyB0aMOhaTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJzb3J0aW5nXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1jb250cm9scz1cImRhdGFUYWJsZVwiIHJvd3NwYW49XCIxXCIgY29sc3Bhbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA3OC4ycHg7XCI+TG/huqFpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInNvcnRpbmdcIiB0YWJpbmRleD1cIjBcIiBhcmlhLWNvbnRyb2xzPVwiZGF0YVRhYmxlXCIgcm93c3Bhbj1cIjFcIiBjb2xzcGFuPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDc4LjJweDtcIj5EdXnhu4d0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCByZXBvcnQgb2YgcmVwb3J0c1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyByZXBvcnQuaWQgfX08L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cIi9hZG1pbi9kZXRhaWwtcmVwb3J0L3t7IHJlcG9ydC5pZCB9fVwiPnt7IHJlcG9ydC5pbmZvIH19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgcmVwb3J0LmRlc2NyaXB0aW9uIH19PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgcmVwb3J0LnN0YXR1cyB8IHJlcG9ydFN0YXR1c1RvU3RyaW5nIH19PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgcmVwb3J0LnR5cGUgfCBpbmZvcm1hdGlvblR5cGVUb1N0cmluZyB9fTwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYWN0aW9uLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBOw5pUIFjDgUMgTkjhuqxOIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaWNvbi1idXR0b25cIiB0aXRsZT1cIljDoWMgbmjhuq1uXCIgKGNsaWNrKT1cIm9wZW5Ecm9wZG93bihyZXBvcnQuaWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE7DmlQgVOG7qiBDSOG7kEkgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpY29uLWJ1dHRvblwiIHRpdGxlPVwiVOG7qyBjaOG7kWlcIiAoY2xpY2spPVwicmVqZWN0UmVwb3J0KHJlcG9ydC5pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkcm9wZG93bk9wZW5Gb3JJZCA9PT0gcmVwb3J0LmlkXCIgY2xhc3M9XCJkcm9wZG93bi1jYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFNjYW1UeXBlSWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gW25nVmFsdWVdPVwibnVsbFwiIGRpc2FibGVkIHNlbGVjdGVkPi0tIENo4buNbiBow6xuaCB0aOG7qWMgLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHMgb2Ygc2NhbVR5cGVzXCIgW25nVmFsdWVdPVwicy5pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBzLm5hbWUgfX0gKHt7IHMuY29kZSB9fSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBbbmdWYWx1ZV09XCIwXCI+4p6VIFRow6ptIG3hu5tp4oCmPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzZWxlY3RlZFNjYW1UeXBlSWQgPT09IDBcIiBjbGFzcz1cIm5ldy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVMOqblwiIFsobmdNb2RlbCldPVwibmV3U2NhbVR5cGUubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNw6NcIiBbKG5nTW9kZWwpXT1cIm5ld1NjYW1UeXBlLmNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNyZWF0ZVNjYW1UeXBlQW5kQ29uZmlybShyZXBvcnQuaWQpXCI+TMawdSAmIHjDoWMgbmjhuq1uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzZWxlY3RlZFNjYW1UeXBlSWQgJiYgc2VsZWN0ZWRTY2FtVHlwZUlkICE9PSAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjb25maXJtUmVwb3J0KHJlcG9ydC5pZClcIj5Yw6FjIG5o4bqtbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuXCIgKGNsaWNrKT1cImNsb3NlRHJvcGRvd24oKVwiPuKclTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVwb3J0U3RhdHVzIH0gZnJvbSAnLi4vZW51bXMvcmVwb3J0LXN0YXR1cy5lbnVtJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmVwb3J0U3RhdHVzVG9TdHJpbmcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnRTdGF0dXNUb1N0cmluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBSZXBvcnRTdGF0dXMpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlIFJlcG9ydFN0YXR1cy5QRU5ESU5HOlxyXG4gICAgICAgIHJldHVybiAnQ2jhu50geOG7rSBsw70nO1xyXG4gICAgICBjYXNlIFJlcG9ydFN0YXR1cy5BUFBST1ZFRDpcclxuICAgICAgICByZXR1cm4gJ8SQw6MgeMOhYyBuaOG6rW4nO1xyXG4gICAgICBjYXNlIFJlcG9ydFN0YXR1cy5SRUpFQ1RFRDpcclxuICAgICAgICByZXR1cm4gJ8SQw6MgdOG7qyBjaOG7kWknO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnVHLhuqFuZyB0aMOhaSBraMO0bmcgeMOhYyDEkeG7i25oJztcclxuICAgIH1cclxuICB9XHJcblxyXG59IiwiZXhwb3J0IGVudW0gUmVwb3J0U3RhdHVzIHtcclxuICAgIFBFTkRJTkcgPSAxLFxyXG4gICAgQVBQUk9WRUQgPSAyLFxyXG4gICAgUkVKRUNURUQgPSAzLFxyXG4gIH0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluZm9ybWF0aW9uVHlwZSB9IGZyb20gJy4uL2VudW1zL2luZm9ybWF0aW9uLXR5cGUuZW51bSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2luZm9ybWF0aW9uVHlwZVRvU3RyaW5nJyxcclxuICBzdGFuZGFsb25lOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmZvcm1hdGlvblR5cGVUb1N0cmluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IEluZm9ybWF0aW9uVHlwZSk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgSW5mb3JtYXRpb25UeXBlLlBob25lTnVtYmVyOiByZXR1cm4gJ1Phu5EgxJFp4buHbiB0aG/huqFpJztcclxuICAgICAgY2FzZSBJbmZvcm1hdGlvblR5cGUuQmFuazogcmV0dXJuICdT4buRIHTDoGkga2hv4bqjbic7XHJcbiAgICAgIGNhc2UgSW5mb3JtYXRpb25UeXBlLlVSTDogcmV0dXJuICdVUkwnO1xyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gJ0xv4bqhaSB0aMO0bmcgdGluIGtow7RuZyB4w6FjIMSR4buLbmgnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBJbmZvcm1hdGlvblR5cGUge1xyXG4gICAgUGhvbmVOdW1iZXIgPSAxLFxyXG4gICAgQmFuayA9IDIsXHJcbiAgICBVUkwgPSAzLFxyXG4gIH0iLCJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBVdGlsU2VydmljZSB9IGZyb20gJy4vaHR0cC51dGlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgUmVwb3J0RFRPIH0gZnJvbSAnLi4vZHRvcy9yZXBvcnQuZHRvJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9ydFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgYXBpQ3JlYXRlUmVwb3J0ID0gYCR7ZW52aXJvbm1lbnQuYXBpQmFzZVVybH0vcmVwb3J0YDtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgaHR0cFV0aWxTZXJ2aWNlOiBIdHRwVXRpbFNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBwcml2YXRlIGdldEFwaUNvbmZpZygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuaHR0cFV0aWxTZXJ2aWNlLmNyZWF0ZUhlYWRlcnMoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjcmVhdGVSZXBvcnQocmVwb3J0RFRPOiBSZXBvcnREVE8pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpQ3JlYXRlUmVwb3J0LCByZXBvcnREVE8sIHRoaXMuZ2V0QXBpQ29uZmlnKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGlzdFJlcG9ydHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke2Vudmlyb25tZW50LmFwaUJhc2VVcmx9L3JlcG9ydC9hbGxgKTtcclxuICB9XHJcblxyXG4gIGdldFJlcG9ydEJ5SWQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtlbnZpcm9ubWVudC5hcGlCYXNlVXJsfS9yZXBvcnQvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZEZpbGVzKHJlcG9ydElkOiBudW1iZXIgfCBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihgJHtlbnZpcm9ubWVudC5hcGlCYXNlVXJsfS9yZXBvcnQvdXBsb2Fkcy8ke3JlcG9ydElkfWAsIGZvcm1EYXRhKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlcG9ydChib2R5OiB7XHJcbiAgICBpZFJlcG9ydDogbnVtYmVyO1xyXG4gICAgc3RhdHVzOiAyIHwgMztcclxuICAgIGlkU2NhbVR5cGVBZnRlckhhbmRsZTogbnVtYmVyIHwgbnVsbDtcclxuICB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtlbnZpcm9ubWVudC5hcGlCYXNlVXJsfS9yZXBvcnQvaGFuZGxlYCwgYm9keSk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aGx5U3RhdHMoeWVhcjogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xyXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3llYXInLCB5ZWFyLnRvU3RyaW5nKCkpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55W10+KGAke2Vudmlyb25tZW50LmFwaUJhc2VVcmx9L3JlcG9ydC9tb250aGx5YCwgeyBwYXJhbXMgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRZZWFybHlTdGF0cygpOiBPYnNlcnZhYmxlPHsgeWVhcjogbnVtYmVyOyBjb3VudDogbnVtYmVyIH1bXT4ge1xyXG4gIHJldHVybiB0aGlzLmh0dHAuZ2V0PHsgeWVhcjogbnVtYmVyOyBjb3VudDogbnVtYmVyIH1bXT4oXHJcbiAgICBgJHtlbnZpcm9ubWVudC5hcGlCYXNlVXJsfS9yZXBvcnQveWVhcmx5YFxyXG4gICk7XHJcbn1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjYW1UeXBlRHRvIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjb2RlOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2NhbVR5cGVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IEJBU0UgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9zY2FtLXR5cGVzJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICAvKiogR0VUIC9iYXRjaCAqL1xuICAgIGdldEFsbCgpOiBPYnNlcnZhYmxlPFNjYW1UeXBlRHRvW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgJHt0aGlzLkJBU0V9L2JhdGNoYClcbiAgICAgICAgICAgIC5waXBlKG1hcChyZXMgPT4gcmVzLmRhdGEgYXMgU2NhbVR5cGVEdG9bXSkpO1xuICAgIH1cblxuICAgIC8qKiBQT1NUIC8gICovXG4gICAgY3JlYXRlKGJvZHk6IHsgbmFtZTogc3RyaW5nOyBjb2RlOiBzdHJpbmcgfSk6IE9ic2VydmFibGU8U2NhbVR5cGVEdG8+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5CQVNFLCBib2R5KVxuICAgICAgICAgICAgLnBpcGUobWFwKHJlcyA9PiByZXMuZGF0YSBhcyBTY2FtVHlwZUR0bykpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRWRpdG9yTW9kdWxlIH0gZnJvbSAnQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyJzsgXG5cbmltcG9ydCB7IE5ld3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbmV3cy5zZXJ2aWNlJztcbmltcG9ydCB7IE5ld3NEVE8gfSBmcm9tICcuLi8uLi8uLi9kdG9zL25ld3MuZHRvJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNyZWF0ZS1uZXdzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEVkaXRvck1vZHVsZV0sIFxuICB0ZW1wbGF0ZVVybDogJy4vY3JlYXRlLW5ld3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcmVhdGUtbmV3cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZU5ld3NDb21wb25lbnQge1xuICBuYW1lID0gJyc7XG4gIHNob3J0RGVzY3JpcHRpb24gPSAnJztcbiAgY29udGVudCA9ICcnO1xuICBzZWxlY3RlZEZpbGVzOiBGaWxlW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5ld3NTZXJ2aWNlOiBOZXdzU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBvbkZpbGVTZWxlY3QoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdGVkRmlsZXMgPSBpbnB1dC5maWxlcyA/IEFycmF5LmZyb20oaW5wdXQuZmlsZXMpIDogW107XG4gIH1cblxuICBjcmVhdGVOZXdzKCk6IHZvaWQge1xuICAgIGNvbnN0IGR0bzogTmV3c0RUTyA9IHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHNob3J0RGVzY3JpcHRpb246IHRoaXMuc2hvcnREZXNjcmlwdGlvbixcbiAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCBcbiAgICB9O1xuXG4gICAgdGhpcy5uZXdzU2VydmljZS5jcmVhdGVOZXdzKGR0bykuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IHJlcyA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcmVzPy5kYXRhPy5pZCA/PyByZXM/LmlkO1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgYWxlcnQoJ0tow7RuZyBuaOG6rW4gxJHGsOG7o2MgSUQgYsOgaSB2aeG6v3QgdOG7qyBzZXJ2ZXInKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudXBsb2FkRmlsZXMoaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KCdU4bqhbyBiw6BpIHZp4bq/dCB0aMOgbmggY8O0bmchJyk7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbmV3cyddKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyOiBIdHRwRXJyb3JSZXNwb25zZSkgPT5cbiAgICAgICAgYWxlcnQoYEzhu5dpIGtoaSB04bqhbyBiw6BpIHZp4bq/dDogJHtlcnIuZXJyb3I/Lm1lc3NhZ2UgfHwgZXJyLm1lc3NhZ2V9YClcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBsb2FkRmlsZXMobmV3c0lkOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIHRoaXMuc2VsZWN0ZWRGaWxlcy5mb3JFYWNoKGYgPT4gZm9ybURhdGEuYXBwZW5kKCdmaWxlcycsIGYsIGYubmFtZSkpO1xuXG4gICAgdGhpcy5uZXdzU2VydmljZS51cGxvYWRGaWxlcyhuZXdzSWQsIGZvcm1EYXRhKS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICBhbGVydCgnVOG6oW8gYsOgaSB2aeG6v3QgJiB04bqjaSDhuqNuaCB0aMOgbmggY8O0bmchJyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL25ld3MnXSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnI6IEh0dHBFcnJvclJlc3BvbnNlKSA9PlxuICAgICAgICBhbGVydChgTOG7l2kgdXBsb2FkOiAke2Vyci5lcnJvcj8ubWVzc2FnZSB8fCBlcnIubWVzc2FnZX1gKVxuICAgIH0pO1xuICB9XG59IiwiPGgyPlRow6ptIHRpbiB04bupYzwvaDI+XHJcblxyXG48ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj5Uw6puPC9sYWJlbD5cclxuICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmjhuq1wIHTDqm5cIlxyXG4gICAgICAgICBbKG5nTW9kZWwpXT1cIm5hbWVcIiAvPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiPk3DtCB04bqjPC9sYWJlbD5cclxuICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmjhuq1wIG3DtCB04bqjXCJcclxuICAgICAgICAgWyhuZ01vZGVsKV09XCJzaG9ydERlc2NyaXB0aW9uXCIgLz5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj5O4buZaSBkdW5nPC9sYWJlbD5cclxuICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5o4bqtcCBu4buZaSBkdW5nXCJcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjb250ZW50XCJcclxuICAgICAgICAgICAgcm93cz1cIjEwXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiAyMDBweDsgcmVzaXplOiB2ZXJ0aWNhbDtcIiA+PC90ZXh0YXJlYT5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIiBmb3I9XCJmaWxlc1wiPuG6om5oIMSRw61uaCBrw6htIChQTkcsIEpQRywgR0lGKTwvbGFiZWw+XHJcbiAgPGlucHV0IGlkPVwiZmlsZXNcIlxyXG4gICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgIChjaGFuZ2UpPVwib25GaWxlU2VsZWN0KCRldmVudClcIiAvPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgKm5nSWY9XCJzZWxlY3RlZEZpbGVzLmxlbmd0aFwiIGNsYXNzPVwibWItM1wiPlxyXG4gIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj5Dw6FjIHThu4dwIMSRw6MgY2jhu41uOjwvbGFiZWw+XHJcbiAgPHVsIGNsYXNzPVwibWItMFwiPlxyXG4gICAgPGxpICpuZ0Zvcj1cImxldCBmIG9mIHNlbGVjdGVkRmlsZXNcIj5cclxuICAgICAge3sgZi5uYW1lIH19ICh7eyBmLnNpemUgfCBudW1iZXIgfX0gYnl0ZXMpXHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvZGl2PlxyXG5cclxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiXHJcbiAgICAgICAgKGNsaWNrKT1cImNyZWF0ZU5ld3MoKVwiPlxyXG4gIFThuqFvXHJcbjwvYnV0dG9uPiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ2hlY2tTY2FtU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrLXNjYW0uc2VydmljZSc7XHJcbmltcG9ydCB7IENoZWNrU2NhbVJlcXVlc3REVE8gfSBmcm9tICcuLi8uLi9kdG9zL2NoZWNrLXNjYW0tcmVxdWVzdC5kdG8nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdEJveENvbXBvbmVudCB9IGZyb20gJy4uL2NoYXQtYm94L2NoYXQtYm94LmNvbXBvbmVudCc7XHJcblxyXG5pbnRlcmZhY2UgTWVzc2FnZSB7XHJcbiAgc2VuZGVyOiAndXNlcicgfCAnYm90JztcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgaXNVc2VyOiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jaGF0Ym90JyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgQ2hhdEJveENvbXBvbmVudFxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXRib3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9jaGF0Ym90LmNvbXBvbmVudC5zY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhdGJvdENvbXBvbmVudCB7XHJcbmN1cnJlbnRUeXBlVGV4dDogYW55O1xyXG5vblR5cGVDaGFuZ2UoKSB7XHJcbnRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxufVxyXG4gIG1lc3NhZ2VzOiBNZXNzYWdlW10gPSBbXTtcclxuICBpbmZvOiBzdHJpbmcgPSAnJztcclxuICBzZWxlY3RlZFR5cGU6IG51bWJlciA9IDE7XHJcbiAgc2hvd0NoYXRib3g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzY2FtUmVwb3J0czogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHVzZXJzUHJvdGVjdGVkOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgY2hlY2tlZEl0ZW1zOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbmN1cnJlbnRJY29uOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hlY2tTY2FtU2VydmljZTogQ2hlY2tTY2FtU2VydmljZSkgeyB9XHJcblxyXG4gIHNlbmRNZXNzYWdlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluZm8udHJpbSgpO1xyXG4gICAgaWYgKCF2YWx1ZSkgeyByZXR1cm47IH1cclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFR5cGUgPT09IDEgJiYgIXRoaXMuaXNQaG9uZU51bWJlcih2YWx1ZSkpIHtcclxuICAgICAgYWxlcnQoJ1Phu5EgxJFp4buHbiB0aG/huqFpIHBo4bqjaSBi4bqvdCDEkeG6p3UgYuG6sW5nIDAgdsOgIGfhu5NtIDEwIGNo4buvIHPhu5EuJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkVHlwZSA9PT0gMiAmJiAhdGhpcy5pc0JhbmtOdW1iZXIodmFsdWUpKSB7XHJcbiAgICAgIGFsZXJ0KCdT4buRIHTDoGkga2hv4bqjbiBjaOG7iSDEkcaw4bujYyBjaOG7qWEga8O9IHThu7Egc+G7kS4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUeXBlID09PSAzICYmICF0aGlzLmlzVXJsKHZhbHVlKSkge1xyXG4gICAgYWxlcnQoJ1VSTCBraMO0bmcgaOG7o3AgbOG7hyAodsOtIGThu6UgaOG7o3AgbOG7hzogaHR0cHM6Ly9leGFtcGxlLmNvbSBob+G6t2MgZXhhbXBsZS52bikuJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAgIHRoaXMubWVzc2FnZXMucHVzaCh7IHNlbmRlcjogJ3VzZXInLCB0ZXh0OiB2YWx1ZSwgaXNVc2VyOiB0cnVlIH0pO1xyXG4gICAgdGhpcy5jaGVja1NjYW0odmFsdWUsIHRoaXMuc2VsZWN0ZWRUeXBlKTtcclxuICAgIHRoaXMuaW5mbyA9ICcnO1xyXG4gIH1cclxuICBcclxuXHJcbiAgY2hlY2tTY2FtKHF1ZXJ5OiBzdHJpbmcsIHR5cGU6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHk6IENoZWNrU2NhbVJlcXVlc3REVE8gPSB7XHJcbiAgICAgIGluZm86IHF1ZXJ5LFxyXG4gICAgICB0eXBlOiB0eXBlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY2hlY2tTY2FtU2VydmljZS5jaGVja1NjYW0ocmVxdWVzdEJvZHkpLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGxldCBib3RSZXNwb25zZVRleHQgPSAnJztcclxuICAgICAgICBpZiAocmVzcG9uc2U/LmNvZGUgPT09IDIwMCAmJiByZXNwb25zZT8uZGF0YSkge1xyXG4gICAgICAgICAgYm90UmVzcG9uc2VUZXh0ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYm90UmVzcG9uc2VUZXh0ID0gKHJlc3BvbnNlPy5tZXNzYWdlID8gJyBDaGkgdGnhur90OiAnICsgcmVzcG9uc2UubWVzc2FnZSA6ICdLaMO0bmcgbmjhuq1uIMSRxrDhu6NjIHBo4bqjbiBo4buTaSB04burIGJvdC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHsgc2VuZGVyOiAnYm90JywgdGV4dDogYm90UmVzcG9uc2VUZXh0LCBpc1VzZXI6IGZhbHNlIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3I/LmVycm9yIHx8ICfEkMOjIHjhuqN5IHJhIGzhu5dpIGtoaSB0cmEgY+G7qXUuJztcclxuICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7IHNlbmRlcjogJ2JvdCcsIHRleHQ6ICdM4buXaTogJyArIGVycm9yTWVzc2FnZSwgaXNVc2VyOiBmYWxzZSB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUGhvbmVOdW1iZXIodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIC9eMFxcZHs5fSQvLnRlc3QodmFsdWUudHJpbSgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNCYW5rTnVtYmVyKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAvXlxcZCskLy50ZXN0KHZhbHVlLnRyaW0oKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVXJsKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICBjb25zdCB1cmxSZWdleCA9IC9eKGh0dHBzPzpcXC9cXC8pPyhbYS16QS1aMC05LV0rXFwuKStbYS16QS1aXXsyLH0oXFwvXFxcXFMqKT8kL2k7XHJcbiAgcmV0dXJuIHVybFJlZ2V4LnRlc3QodmFsdWUudHJpbSgpKTtcclxufVxyXG5cclxuICBvbkFpVHVWYW5DbGlja2VkKCkge1xyXG4gICAgdGhpcy5zaG93Q2hhdGJveCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBjbG9zZUNoYXRib3goKSB7XHJcbiAgICB0aGlzLnNob3dDaGF0Ym94ID0gZmFsc2U7XHJcbiAgfVxyXG59IiwiPGFwcC1oZWFkZXIgKGFpVHVWYW5DbGlja2VkKT1cIm9uQWlUdVZhbkNsaWNrZWQoKVwiPjwvYXBwLWhlYWRlcj5cclxuXHJcbjxkaXYgY2xhc3M9XCJtYWluLXNlY3Rpb25cIj5cclxuICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1lbGVtZW50c1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNxdWFyZSBncmVlbi1zcXVhcmUgdG9wLWxlZnRcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzcXVhcmUgeWVsbG93LXNxdWFyZSBib3R0b20tcmlnaHRcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzcXVhcmUgZ3JlZW4tc3F1YXJlIG1pZC1sZWZ0XCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3F1YXJlIHllbGxvdy1zcXVhcmUgbWlkLXJpZ2h0XCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3F1YXJlIGdyZWVuLXNxdWFyZSBib3R0b20tbGVmdC1zbWFsbFwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNxdWFyZSB5ZWxsb3ctc3F1YXJlIHRvcC1yaWdodC1zbWFsbFwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgIDxoMSBjbGFzcz1cIm1haW4tdGl0bGVcIj5C4bqgTiBDw5MgxJBBTkcgPGJyPiBMxq/hu5pUIFdFQiA8c3BhbiBjbGFzcz1cInNhZmUtdGV4dFwiPkFOIFRPw4BOPzwvc3Bhbj48L2gxPlxyXG4gICAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+S2nhu4NtIHRyYSBuZ2F5IHPhu5EgxJFp4buHbiB0aG/huqFpLCB0w6BpIGtob+G6o24gbmfDom4gaMOgbmcgdsOgIHdlYnNpdGUgY8OzIGFuIHRvw6BuIGhheSBraMO0bmc8L3A+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWJveC1jb250YWluZXJcIj5cclxuICAgICAgICA8c2VsZWN0IFsobmdNb2RlbCldPVwic2VsZWN0ZWRUeXBlXCIgY2xhc3M9XCJpbnB1dC10eXBlLXNlbGVjdFwiPlxyXG4gICAgICAgICAgPG9wdGlvbiBbbmdWYWx1ZV09XCIxXCI+8J+TsSBT4buRIMSRaeG7h24gdGhv4bqhaTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiBbbmdWYWx1ZV09XCIyXCI+8J+PpiBT4buRIHTDoGkga2hv4bqjbjwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiBbbmdWYWx1ZV09XCIzXCI+8J+MkCBVUkw8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZWFyY2gtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmjhuq1wIHRow7RuZyB0aW4gY+G6p24ga2nhu4NtIHRyYS4uLlwiXHJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cImluZm9cIiAoa2V5ZG93bi5lbnRlcik9XCJzZW5kTWVzc2FnZSgpXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlYXJjaC1idXR0b25cIiB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cInNlbmRNZXNzYWdlKClcIiBbZGlzYWJsZWRdPVwiIWluZm8udHJpbSgpXCI+XHJcbiAgPGkgY2xhc3M9XCJmYXMgZmEtcGFwZXItcGxhbmVcIj48L2k+XHJcbiAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gU3RhdHMgU2VjdGlvbiAtLT5cclxuICA8ZGl2IGNsYXNzPVwic3RhdHMtc2VjdGlvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInN0YXRzLWdyaWRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaXRlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGVyLW51bWJlclwiPjMyNTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWxhYmVsXCI+QsOhbyBjw6FvIGzhu6thIMSR4bqjbzwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaXRlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGVyLW51bWJlclwiPjEwMDA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1sYWJlbFwiPk5nxrDhu51pIGTDuW5nIMSRxrDhu6NjIGLhuqNvIHbhu4c8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRlci1udW1iZXJcIj44NzU8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1sYWJlbFwiPk3hu6VjIMSRw6Mga2nhu4NtIHRyYTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaXRlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGVyLW51bWJlclwiPjk4LDQlPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbGFiZWxcIj7EkOG7mSBjaMOtbmggeMOhYzwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIENvbW11bml0eSBTZWN0aW9uIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJjb21tdW5pdHktc2VjdGlvbi1uZXdcIj5cclxuICAgIDxoMyBjbGFzcz1cImNvbW11bml0eS10aXRsZVwiPlRoYW0gZ2lhIGPhu5luZyDEkeG7k25nIENoZWNrc2NhbTwvaDM+XHJcbiAgICA8cCBjbGFzcz1cImNvbW11bml0eS1kZXNjXCI+S+G6v3QgbuG7kWkgduG7m2kgY+G7mW5nIMSR4buTbmcgxJHhu4MgY+G6rXAgbmjhuq10IHRow7RuZyB0aW4gYuG6o28gbeG6rXQgbeG7m2kgbmjhuqV0PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cInNvY2lhbC1saW5rc1wiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwic29jaWFsLWJ1dHRvbiBmYWNlYm9va1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL2ltZy9mYWNlYm9vay5wbmdcIiBhbHQ9XCJGYWNlYm9va1wiPiBGYWNlYm9va1xyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzb2NpYWwtYnV0dG9uIHRlbGVncmFtXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvaW1nL3RlbGVncmFtLnBuZ1wiIGFsdD1cIlRlbGVncmFtXCI+IFRlbGVncmFtXHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInNvY2lhbC1idXR0b24gemFsb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL2ltZy96YWxvLnBuZ1wiIGFsdD1cIlphbG9cIj4gWmFsb1xyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48IS0tIEZlYXR1cmVzIFNlY3Rpb24gLS0+XHJcbjxkaXYgY2xhc3M9XCJmZWF0dXJlcy1zZWN0aW9uXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwic2VjdGlvbi1sYWJlbFwiPlTDjU5IIE7Egk5HPC9wPlxyXG4gICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLW1haW4tdGl0bGVcIj5C4bqjbyB24buHIHRvw6BuIGRp4buHbiBraOG7j2kgbOG7q2EgxJHhuqNvPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZXMtZ3JpZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1jYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtaWNvblwiPvCfm6HvuI88L2Rpdj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJmZWF0dXJlLXRpdGxlXCI+S2nhu4NtIHRyYSBz4buRIMSRaeG7h24gdGhv4bqhaTwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJmZWF0dXJlLWRlc2NyaXB0aW9uXCI+WMOhYyBtaW5oIGRhbmggdMOtbmggbmfGsOG7nWkgZ+G7jWksIHBow6F0IGhp4buHbiBjw6FjIHPhu5EgxJFp4buHbiB0aG/huqFpIGzhu6thIMSR4bqjbyDEkcOjIMSRxrDhu6NjIGLDoW8gY8OhbyBi4bufaSBj4buZbmcgxJHhu5NuZy48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1jYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtaWNvblwiPvCfj6Y8L2Rpdj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJmZWF0dXJlLXRpdGxlXCI+WMOhYyB0aOG7sWMgdMOgaSBraG/huqNuIG5nw6JuIGjDoG5nPC9oMz5cclxuICAgICAgICA8cCBjbGFzcz1cImZlYXR1cmUtZGVzY3JpcHRpb25cIj5LaeG7g20gdHJhIHTDrW5oIGjhu6NwIGzhu4cgY+G7p2Egc+G7kSB0w6BpIGtob+G6o24gbmfDom4gaMOgbmcgdHLGsOG7m2Mga2hpIHRo4buxYyBoaeG7h24gZ2lhbyBk4buLY2ggY2h1eeG7g24gdGnhu4FuLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlLWNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1pY29uXCI+8J+MkDwvZGl2PlxyXG4gICAgICAgIDxoMyBjbGFzcz1cImZlYXR1cmUtdGl0bGVcIj5RdcOpdCB3ZWJzaXRlIGFuIHRvw6BuPC9oMz5cclxuICAgICAgICA8cCBjbGFzcz1cImZlYXR1cmUtZGVzY3JpcHRpb25cIj5QaMOibiB0w61jaCB3ZWJzaXRlIMSR4buDIHBow6F0IGhp4buHbiBjw6FjIHRyYW5nIHdlYiBnaeG6oyBt4bqhbywgbOG7q2EgxJHhuqNvIGhv4bq3YyBjaOG7qWEgbcOjIMSR4buZYy48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1jYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtaWNvblwiPvCfpJY8L2Rpdj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJmZWF0dXJlLXRpdGxlXCI+QUkgVMawIHbhuqVuIHRow7RuZyBtaW5oPC9oMz5cclxuICAgICAgICA8cCBjbGFzcz1cImZlYXR1cmUtZGVzY3JpcHRpb25cIj5DaGF0Ym90IEFJIGjhu5cgdHLhu6MgMjQvNywgdMawIHbhuqVuIHbDoCBnaeG6o2kgxJHDoXAgY8OhYyB0aOG6r2MgbeG6r2MgduG7gSBhbiB0b8OgbiB0aMO0bmcgdGluLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlLWNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1pY29uXCI+8J+TijwvZGl2PlxyXG4gICAgICAgIDxoMyBjbGFzcz1cImZlYXR1cmUtdGl0bGVcIj5DxqEgc+G7nyBk4buvIGxp4buHdSBj4bqtcCBuaOG6rXQ8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZmVhdHVyZS1kZXNjcmlwdGlvblwiPkThu68gbGnhu4d1IGzhu6thIMSR4bqjbyDEkcaw4bujYyBj4bqtcCBuaOG6rXQgbGnDqm4gdOG7pWMgdOG7qyBjw6FjIG5ndeG7k24gdXkgdMOtbiB2w6AgYsOhbyBjw6FvIHThu6sgY+G7mW5nIMSR4buTbmcuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlLWljb25cIj7wn5SUPC9kaXY+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwiZmVhdHVyZS10aXRsZVwiPkPhuqNuaCBiw6FvIHRo4budaSBnaWFuIHRo4buxYzwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJmZWF0dXJlLWRlc2NyaXB0aW9uXCI+Tmjhuq1uIHRow7RuZyBiw6FvIG5nYXkgbOG6rXAgdOG7qWMga2hpIHBow6F0IGhp4buHbiBjw6FjIG3hu5FpIMSRZSBk4buNYSBt4bubaSBob+G6t2MgY2hpw6p1IHRyw7IgbOG7q2EgxJHhuqNvLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiYWJvdXQtdXMtc2VjdGlvblwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhYm91dC11cy1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJncmFwaGljLWNvbHVtblwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jaG9uZ2x1YWRhby52bi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZtZWRpYSUyRmFib3V0dXMuYzlmMWQyMzIucG5nJnc9NzUwJnE9NzVcIiBhbHQ9XCJBYm91dCBVcyBHcmFwaGljXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb2x1bW5cIj5cclxuICAgICAgICA8cCBjbGFzcz1cInNlY3Rpb24tbGFiZWxcIj5W4buAIENIw5pORyBUw5RJPC9wPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb24tbWFpbi10aXRsZVwiPlbDjCBN4buYVCBJTlRFUk5FVCA8YnI+IEFOIFRPw4BOIEjGoE48L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzPVwic2VjdGlvbi1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgQ2hlY2tTY2FtIGzDoCBu4buBbiB04bqjbmcgaMOgbmcgxJHhuqd1IHThuqFpIFZp4buHdCBOYW0gdHJvbmcgdmnhu4djIGLhuqNvIHbhu4cgbmfGsOG7nWkgZMO5bmcga2jhu49pIGPDoWMgaMOsbmggdGjhu6ljIGzhu6thIMSR4bqjbyB0cuG7sWMgdHV54bq/bi4gXHJcbiAgICAgICAgICBDaMO6bmcgdMO0aSBz4butIGThu6VuZyBjw7RuZyBuZ2jhu4cgQUkgdGnDqm4gdGnhur9uIHbDoCBjxqEgc+G7nyBk4buvIGxp4buHdSDEkcaw4bujYyBj4bqtcCBuaOG6rXQgbGnDqm4gdOG7pWMgxJHhu4MgbWFuZyBs4bqhaSBz4buxIGFuIHRvw6BuIHThu5FpIMSRYSBjaG8gbmfGsOG7nWkgZMO5bmcgaW50ZXJuZXQgVmnhu4d0IE5hbS5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGEgcm91dGVyTGluaz1cIi9hYm91dC11c1wiIGNsYXNzPVwiYnRuLWFib3V0LXVzXCI+XHJcbiAgICAgICAgICBYZW0gdGjDqm0gduG7gSBjaMO6bmcgdMO0aVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcnJvdy1pY29uXCI+4oaSPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48IS0tIEV4dGVuc2lvbiBJbmZvIFNlY3Rpb24gLS0+XHJcbjwhLS0gPGRpdiBjbGFzcz1cImV4dGVuc2lvbi1zZWN0aW9uXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImV4dGVuc2lvbi1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJleHRlbnNpb24tdGV4dFwiPlxyXG4gICAgICAgIDxoMz5UaeG7h24gw61jaCBt4bufIHLhu5luZyB0csOsbmggZHV54buHdDwvaDM+XHJcbiAgICAgICAgPHA+PHN0cm9uZz5DaGVja1NjYW08L3N0cm9uZz4gxJHDoyBjw7Mgc+G6tW4gdHLDqm4gY+G7rWEgaMOgbmcgdGnhu4duIMOtY2ggbeG7nyBy4buZbmcgY+G7p2EgY8OhYyB0csOsbmggZHV54buHdCBzYXU6IE1pY3Jvc29mdCBFZGdlLCBDaHJvbWUsIEPhu5FjIEPhu5FjLCBCcmF2ZSB2w6AgRmlyZWZveC4gTmdvw6BpIHJhLCBjaMO6bmcgdMO0aSDEkcOjIHTDrWNoIGjhu6NwIGThu68gbGnhu4d1IGRhbmggc8OhY2ggY2jhurduIGPhu6dhIG3DrG5oIHbDoG8gT3BlbkROUywgTmV4dEROUywgVHdpdHRlciB2w6Agbmhp4buBdSBuaMOgIGN1bmcgY+G6pXAgcGjhuqduIG3hu4FtIGRp4buHdCB2aXJ1cyBwaOG7lSBiaeG6v24uPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleHRlbnNpb24tYnV0dG9uc1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImV4dGVuc2lvbi1idG4gY2hyb21lXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2Nocm9tZS1pY29uLnBuZ1wiIGFsdD1cIkNocm9tZVwiPiBDaHJvbWVcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJleHRlbnNpb24tYnRuIGVkZ2VcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvZWRnZS1pY29uLnBuZ1wiIGFsdD1cIkVkZ2VcIj4gRWRnZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImV4dGVuc2lvbi1idG4gZmlyZWZveFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9maXJlZm94LWljb24ucG5nXCIgYWx0PVwiRmlyZWZveFwiPiBGaXJlZm94XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PiAtLT5cclxuXHJcbjwhLS0gRm9vdGVyIExpbmtzIFNlY3Rpb24gLS0+XHJcbjxkaXYgY2xhc3M9XCJmb290ZXItbGlua3Mtc2VjdGlvblwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItZ3JpZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWNvbHVtblwiPlxyXG4gICAgICAgIDxoMz5T4bqjbiBwaOG6qW08L2gzPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL2NoZWNrLXBob25lXCI+S2nhu4NtIHRyYSBz4buRIMSRaeG7h24gdGhv4bqhaTwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvY2hlY2stYmFua1wiPljDoWMgdGjhu7FjIHTDoGkga2hv4bqjbiBuZ8OibiBow6BuZzwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvY2hlY2std2Vic2l0ZVwiPlF1w6l0IHdlYnNpdGUgYW4gdG/DoG48L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL2V4dGVuc2lvblwiPlRp4buHbiDDrWNoIG3hu58gcuG7mW5nPC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItY29sdW1uXCI+XHJcbiAgICAgICAgPGgzPlRow7RuZyB0aW4gaOG7r3Ugw61jaDwvaDM+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvdXNlZnVsLWluZm8vc2NhbS10eXBlc1wiPkPDoWMga2nhu4N1IGzhu6thIMSR4bqjbyBwaOG7lSBiaeG6v248L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL3VzZWZ1bC1pbmZvL2VtYWlsLXNjYW1cIj5OaOG6rW4gYmnhur90IGVtYWlsIGzhu6thIMSR4bqjbzwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvdXNlZnVsLWluZm8vYmFuay1zZWN1cml0eVwiPkLhuqNvIG3huq10IHTDoGkga2hv4bqjbiBuZ8OibiBow6BuZzwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvdXNlZnVsLWluZm8vb25saW5lLXNob3BwaW5nXCI+TXVhIHPhuq9tIG9ubGluZSBhbiB0b8OgbjwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWNvbHVtblwiPlxyXG4gICAgICAgIDxoMz5I4buXIHRy4bujPC9oMz5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGEgcm91dGVyTGluaz1cIi9zdXBwb3J0L2ZhcVwiPkPDonUgaOG7j2kgdGjGsOG7nW5nIGfhurdwPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgcm91dGVyTGluaz1cIi9zdXBwb3J0L2d1aWRlXCI+SMaw4bubbmcgZOG6q24gc+G7rSBk4bulbmc8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL3N1cHBvcnQvcmVwb3J0XCI+QsOhbyBjw6FvIGzhu6thIMSR4bqjbzwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvc3VwcG9ydC9jb250YWN0XCI+TGnDqm4gaOG7hyBo4buXIHRy4bujPC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItY29sdW1uXCI+XHJcbiAgICAgICAgPGgzPlhlbSB0aMOqbTwvaDM+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvdGVybXNcIj7EkGnhu4F1IGtob+G6o24gc+G7rSBk4bulbmc8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL3ByaXZhY3ktcG9saWN5XCI+Q2jDrW5oIHPDoWNoIGLhuqNvIG3huq10PC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgcm91dGVyTGluaz1cIi91c2VmdWwtaW5mb1wiPlRow7RuZyB0aW4gaOG7r3Ugw61jaDwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvYWJvdXQtdXNcIj5W4buBIGNow7puZyB0w7RpPC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48YXBwLWNoYXQtYm94ICpuZ0lmPVwic2hvd0NoYXRib3hcIiAoY2xvc2UpPVwiY2xvc2VDaGF0Ym94KClcIj48L2FwcC1jaGF0LWJveD4gXHJcbjxhcHAtZm9vdGVyPjwvYXBwLWZvb3Rlcj4iLCIvLyBzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHNcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT25Jbml0LCBPdXRwdXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlckxpbmsgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nOyAvLyBUaMaw4budbmcgY+G6p24gY2hvIHN0YW5kYWxvbmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInOyAvLyBJbXBvcnQgUm91dGVyIHbDoCBOYXZpZ2F0aW9uRW5kXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTGluayxcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuc2NzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gaXNIZWFkZXJIaWRkZW4gbMOgIG3hu5l0IEBJbnB1dCDEkeG7gyBuaOG6rW4gZ2nDoSB0cuG7iyB04burIGNvbXBvbmVudCBjaGEgKEFwcENvbXBvbmVudClcclxuICBASW5wdXQoKSBpc0hlYWRlckhpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvLyBCaeG6v24gxJHhu4MgcXXhuqNuIGzDvSB0cuG6oW5nIHRow6FpIG3hu58vxJHDs25nIGPhu6dhIG1lbnUgbW9iaWxlIChoYW1idXJnZXIpXHJcbiAgaXNNZW51T3BlbjogYm9vbGVhbiA9IGZhbHNlOyAvLyDEkMOjIGto4bufaSB04bqhbyBnacOhIHRy4buLIGJhbiDEkeG6p3UgbMOgIGZhbHNlXHJcblxyXG4gIEBPdXRwdXQoKSBhaVR1VmFuQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyAvLyBJbmplY3QgUm91dGVyXHJcbiAgICAvLyBM4bqvbmcgbmdoZSBz4buxIGtp4buHbiBjaHV54buDbiBoxrDhu5tuZyDEkeG7gyDEkcOzbmcgbWVudSBtb2JpbGUgdOG7sSDEkeG7mW5nXHJcbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xyXG4gICAgICAgIHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlOyAvLyDEkMOzbmcgbWVudSBraGkgY2h1eeG7g24gdHJhbmdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpOyAvLyBC4buPIGNo4bq3biBjdeG7mW5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIEtow7RuZyBj4bqnbiBsb2dpYyBjdeG7mW4g4bufIMSRw6J5XHJcbiAgfVxyXG5cclxuICAvLyBQaMawxqFuZyB0aOG7qWMgxJHhu4MgbeG7ny/EkcOzbmcgbWVudSBtb2JpbGVcclxuICB0b2dnbGVNZW51KCkge1xyXG4gICAgdGhpcy5pc01lbnVPcGVuID0gIXRoaXMuaXNNZW51T3BlbjtcclxuICAgIGlmICh0aGlzLmlzTWVudU9wZW4pIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBQaMawxqFuZyB0aOG7qWMga2hpIGNsaWNrIHbDoG8gJ0FJIFTGsCB24bqlbidcclxuICBvbkFpVHVWYW5DbGljaygpIHtcclxuICAgIHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlOyAvLyDEkMOzbmcgbWVudSBraGkgY2xpY2sgdsOgbyBt4bulY1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTsgLy8gQuG7jyBjaOG6t24gY3Xhu5luXHJcbiAgICB0aGlzLmFpVHVWYW5DbGlja2VkLmVtaXQoKTsgXHJcbiAgfVxyXG5cclxuICAvLyBDw6FjIHBoxrDGoW5nIHRo4bupYyBraMOhYyBjaG8gY8OhYyByb3V0ZXJMaW5rIG7hur91IGLhuqFuIG114buRbiDEkcOzbmcgbWVudSBzYXUga2hpIGNsaWNrXHJcbiAgLy8gVsOtIGThu6U6XHJcbiAgb25OYXZMaW5rQ2xpY2soKSB7XHJcbiAgICB0aGlzLmlzTWVudU9wZW4gPSBmYWxzZTsgLy8gxJDDs25nIG1lbnVcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7IC8vIELhu48gY2jhurduIGN14buZblxyXG4gICAgLy8gUm91dGVyTGluayB04buxIHjhu60gbMO9IG5hdmlnYXRlLCBraMO0bmcgY+G6p24gbG9naWMgbmF2aWdhdGUg4bufIMSRw6J5XHJcbiAgfVxyXG59IiwiPG5hdiBjbGFzcz1cImhlYWRlci1uYXZcIiBbY2xhc3MuaGlkZGVuXT1cImlzSGVhZGVySGlkZGVuXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGEgY2xhc3M9XCJicmFuZFwiIGhyZWY9XCJcIj5DaGVja1NjYW08L2E+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtdG9nZ2xlXCIgKGNsaWNrKT1cInRvZ2dsZU1lbnUoKVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImhhbWJ1cmdlci1pY29uXCIgW2NsYXNzLm9wZW5dPVwiaXNNZW51T3BlblwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJoYW1idXJnZXItaWNvblwiIFtjbGFzcy5vcGVuXT1cImlzTWVudU9wZW5cIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiaGFtYnVyZ2VyLWljb25cIiBbY2xhc3Mub3Blbl09XCJpc01lbnVPcGVuXCI+PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPHVsIGNsYXNzPVwibmF2LWxpbmtzXCIgW2NsYXNzLm1lbnUtb3Blbl09XCJpc01lbnVPcGVuXCI+XHJcbiAgICAgIDxsaT48YSAoY2xpY2spPVwib25BaVR1VmFuQ2xpY2soKVwiPkFJIFTGsCB24bqlbjwvYT48L2xpPlxyXG4gICAgICA8bGk+PGEgcm91dGVyTGluaz1cIi9saXN0LW5ld3NcIj5UaW4gdOG7qWM8L2E+PC9saT5cclxuICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvY3JlYXRlLXJlcG9ydFwiPkLDoW8gY8OhbzwvYT48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC9uYXY+XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJMaW5rIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJzsgXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1mb290ZXInLCBcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vZm9vdGVyLmNvbXBvbmVudC5zY3NzJyBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XHJcbiAgc2Nyb2xsVG9Ub3AoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcbn0iLCI8Zm9vdGVyIGNsYXNzPVwiYXBwLWZvb3RlclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItbGVmdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFuZ3VhZ2Utc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2Nyb2xsLXRvLXRvcFwiIChjbGljayk9XCJzY3JvbGxUb1RvcCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInBhdGgvdG8veW91ci9hcnJvdy11cC1pY29uLnBuZ1wiIGFsdD1cIlNjcm9sbCB0byB0b3BcIj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItaXRlbSBjb250YWN0LWluZm9cIj5cclxuICAgICAgICAgIDxwPiZjb3B5OyBC4bqjbiBxdXnhu4FuIMKpIDIwMjU8L3A+XHJcbiAgICAgICAgICA8cD5UaMO0bmcgdGluIGxpw6puIGjhu4cgPGEgaHJlZj1cIiNcIj48L2E+PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItcmlnaHRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1pdGVtIGRlc2lnbi1pbmZvXCI+XHJcbiAgICAgICAgPHA+VGhp4bq/dCBr4bq/IGLhu59pIDxhIHJvdXRlckxpbms9XCIvYWJvdXQtdXNcIiBjbGFzcz1cImJ0bi1hYm91dC11c1wiPjwvYT48L3A+IFxyXG4gICAgICAgIDxwPkzhuq1wIHRyw6xuaCBi4bufaSA8YSByb3V0ZXJMaW5rPVwiL2Fib3V0LXVzXCIgY2xhc3M9XCJidG4tYWJvdXQtdXNcIj48L2E+PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Zvb3Rlcj4iLCIgIGltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbiAgaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gIGltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG4gIGltcG9ydCB7IENoZWNrU2NhbVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVjay1zY2FtLnNlcnZpY2UnO1xyXG5cclxuICBpbnRlcmZhY2UgTWVzc2FnZSB7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBpc1VzZXI6IGJvb2xlYW47XHJcbiAgfVxyXG5cclxuICBAQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNoYXQtYm94JyxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgRm9ybXNNb2R1bGVcclxuICAgIF0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2hhdC1ib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmw6ICcuL2NoYXQtYm94LmNvbXBvbmVudC5zY3NzJ1xyXG4gIH0pXHJcbiAgZXhwb3J0IGNsYXNzIENoYXRCb3hDb21wb25lbnQge1xyXG4gICAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gICAgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xyXG4gICAgbWVzc2FnZVRleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hlY2tTY2FtU2VydmljZTogQ2hlY2tTY2FtU2VydmljZSkge31cclxuXHJcbiAgICBzZW5kTWVzc2FnZSgpIHtcclxuICAgICAgaWYgKHRoaXMubWVzc2FnZVRleHQudHJpbSgpKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHtcclxuICAgICAgICAgIHRleHQ6IHRoaXMubWVzc2FnZVRleHQsXHJcbiAgICAgICAgICBpc1VzZXI6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2FsbCBBUElcclxuICAgICAgICB0aGlzLmNoZWNrU2NhbVNlcnZpY2UuY2hhdCh0aGlzLm1lc3NhZ2VUZXh0KS5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgbmV4dDogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBpc1VzZXI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdYaW4gbOG7l2ksIHTDtGkga2jDtG5nIHRo4buDIHjhu60gbMO9IHnDqnUgY+G6p3UgY+G7p2EgYuG6oW4gbMO6YyBuw6B5LicsXHJcbiAgICAgICAgICAgICAgICBpc1VzZXI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ8SQw6MgeOG6o3kgcmEgbOG7l2kga2hpIGvhur90IG7hu5FpIHbhu5tpIHNlcnZlci4nLFxyXG4gICAgICAgICAgICAgIGlzVXNlcjogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NoYXQgQVBJIEVycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlVGV4dCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIiwiICA8ZGl2IGNsYXNzPVwiY2hhdC1ib3gtd3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNoYXQtaGVhZGVyXCI+XHJcbiAgICAgIDxzcGFuPlTGsCB24bqlbiBBSTwvc3Bhbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJ1dHRvblwiIChjbGljayk9XCJjbG9zZS5lbWl0KClcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2hhdC1ib2R5XCI+XHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBcclxuICAgICAgICAgIGNsYXNzPVwibWVzc2FnZS13cmFwcGVyXCJcclxuICAgICAgICAgIFtjbGFzcy51c2VyLW1lc3NhZ2VdPVwibWVzc2FnZS5pc1VzZXJcIlxyXG4gICAgICAgICAgW2NsYXNzLmJvdC1tZXNzYWdlXT1cIiFtZXNzYWdlLmlzVXNlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXRleHRcIj57eyBtZXNzYWdlLnRleHQgfX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjaGF0LWlucHV0XCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmjhuq1wIHRpbiBuaOG6r24uLi5cIiBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VUZXh0XCIgKGtleWRvd24uZW50ZXIpPVwic2VuZE1lc3NhZ2UoKVwiPlxyXG4gICAgICA8YnV0dG9uIChjbGljayk9XCJzZW5kTWVzc2FnZSgpXCI+R+G7rWk8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBVdGlsU2VydmljZSB9IGZyb20gJy4vaHR0cC51dGlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgQ2hlY2tTY2FtUmVxdWVzdERUTyB9IGZyb20gJy4uL2R0b3MvY2hlY2stc2NhbS1yZXF1ZXN0LmR0byc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja1NjYW1TZXJ2aWNlIHtcclxuICBwcml2YXRlIGFwaUNoZWNrU2NhbSA9IGAke2Vudmlyb25tZW50LmFwaUJhc2VVcmx9L2NoZWNrLXNjYW1gO1xyXG4gIHByaXZhdGUgYXBpQ2hhdCA9IGAke2Vudmlyb25tZW50LmFwaUJhc2VVcmx9L2NoZWNrLXNjYW0vY2hhdGA7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGh0dHBVdGlsU2VydmljZTogSHR0cFV0aWxTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBcGlDb25maWcoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLmh0dHBVdGlsU2VydmljZS5jcmVhdGVIZWFkZXJzKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2hlY2tTY2FtKGNoZWNrU2NhbVJlcXVlc3REVE86IENoZWNrU2NhbVJlcXVlc3REVE8pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpQ2hlY2tTY2FtLCBjaGVja1NjYW1SZXF1ZXN0RFRPLCB0aGlzLmdldEFwaUNvbmZpZygpKTtcclxuICB9XHJcblxyXG4gIGNoYXQobWVzc2FnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaUNoYXQsIG1lc3NhZ2UsIHRoaXMuZ2V0QXBpQ29uZmlnKCkpO1xyXG4gIH1cclxufVxyXG4iLCIgICAgaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICAgIGltcG9ydCB7IEZvcm1zTW9kdWxlLCBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbiAgICBpbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbiAgICBpbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbiAgICBpbXBvcnQgeyBMb2dpbkRUTyB9IGZyb20gJy4uLy4uL2R0b3MvbG9naW4uZHRvJztcclxuICAgIGltcG9ydCB7IFRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Rva2VuLnNlcnZpY2UnO1xyXG5cclxuICAgIEBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcclxuICAgICAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgICAgIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgUm91dGVyTW9kdWxlXSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ11cclxuICAgIH0pXHJcbiAgICBleHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgICAgIEBWaWV3Q2hpbGQoJ2xvZ2luRm9ybScpIGxvZ2luRm9ybSE6IE5nRm9ybTtcclxuICAgICAgICB1c2VybmFtZSA9ICdhZG1pbkBnbWFpbC5jb20nO1xyXG4gICAgICAgIHBhc3N3b3JkID0gJzEyMzQ1Nic7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgICAgICAgICAgcHJpdmF0ZSB0b2tlblNlcnZpY2U6IFRva2VuU2VydmljZSxcclxuICAgICAgICApIHsgfVxyXG5cclxuICAgICAgICBsb2dpbigpIHtcclxuICAgICAgICAgICAgdGhpcy50b2tlblNlcnZpY2UuY2xlYXJUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBsb2dpbkRUTzogTG9naW5EVE8gPSB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4obG9naW5EVE8pLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgICAgICBuZXh0OiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5TZXJ2aWNlLnNhdmVUb2tlbih0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5zYXZlVXNlckRhdGEocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FkbWluJ10pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yPy5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yZ290UGFzc3dvcmQoZXZlbnQ6IGFueSkgeyBcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgICAgIGFsZXJ0KCdWdWkgbMOybmcgbGnDqm4gaOG7hyBxdeG6o24gdHLhu4sgdmnDqm4gxJHhu4MgxJHGsOG7o2MgY+G6pXAgbOG6oWkgbeG6rXQga2jhuql1LicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIiwiICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB2aC0xMDBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIHAtNSBzaGFkb3ctbGcgcm91bmRlZC0zIGN1c3RvbS1jYXJkLXN0eWxlXCI+XHJcbiAgICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIG1iLTQgdGV4dC1wcmltYXJ5XCI+xJDEg25nIG5o4bqtcDwvaDI+XHJcbiAgICAgIDxmb3JtICNsb2dpbkZvcm09XCJuZ0Zvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWItNFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lTnVtYmVyXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+VMOqbiDEkcSDbmcgbmjhuq1wPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj48aSBjbGFzcz1cImJpIGJpLXBlcnNvbi1maWxsXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwaG9uZU51bWJlclwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOaOG6rXAgdMOqbiDEkcSDbmcgbmjhuq1wXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGhvbmVOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWItNFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+TeG6rXQga2jhuql1PC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj48aSBjbGFzcz1cImJpIGJpLWxvY2stZmlsbFwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5o4bqtcCBt4bqtdCBraOG6qXVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicmVtZW1iZXJNZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJyZW1lbWJlck1lXCJcclxuICAgICAgICAgICAgICA+Tmjhu5sgdMOgaSBraG/huqNuPC9sYWJlbFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LW11dGVkIGZvcmdvdC1wYXNzd29yZC1saW5rXCIgKGNsaWNrKT1cImZvcmdvdFBhc3N3b3JkKCRldmVudClcIj5RdcOqbiBt4bqtdCBraOG6qXU/PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIHctMTAwIGJnLWdyYWRpZW50LXByaW1hcnlcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cImxvZ2luKClcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImxvZ2luRm9ybS5pbnZhbGlkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDEkMSDbmcgbmjhuq1wXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuIiwiICBpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4gIEBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG4gIH0pXHJcbiAgZXhwb3J0IGNsYXNzIFRva2VuU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IFRPS0VOX0tFWSA9ICdqd3RfdG9rZW4nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBVU0VSX0tFWSA9ICd1c2VyJztcclxuXHJcbiAgICBzYXZlVG9rZW4odG9rZW46IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLlRPS0VOX0tFWSwgdG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5UT0tFTl9LRVkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVG9rZW4oKTogdm9pZCB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuVVNFUl9LRVkpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuVE9LRU5fS0VZKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0RGVjb2RlZFRva2VuKCk6IGFueSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShhdG9iKHRva2VuLnNwbGl0KCcuJylbMV0pKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Rva2VuIGtow7RuZyBo4bujcCBs4buHOicsIGUpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iLCIgIGltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbiAgaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICBpbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuICBpbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbiAgaW1wb3J0IHsgUmVjYXB0Y2hhTW9kdWxlIH0gZnJvbSAnbmctcmVjYXB0Y2hhJztcclxuICBpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuICBpbXBvcnQgeyBSZXBvcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcmVwb3J0LnNlcnZpY2UnO1xyXG5cclxuICAvLyBJbXBvcnQgSW50ZXJmYWNlIFJlcG9ydERUTyAoQuG6oW4gY+G6p24gxJHhuqNtIGLhuqNvIGZpbGUgbsOgeSBjw7MgdHLGsOG7nW5nIHBhZ2VUb1JlcG9ydClcclxuICBpbXBvcnQgeyBSZXBvcnREVE8gfSBmcm9tICcuLi8uLi8uLi9kdG9zL3JlcG9ydC5kdG8nO1xyXG5cclxuICBpbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XHJcbiAgaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50XCI7XHJcbiAgaW1wb3J0IHsgQ2hhdEJveENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jaGF0LWJveC9jaGF0LWJveC5jb21wb25lbnRcIjtcclxuXHJcbiAgQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jcmVhdGUtcmVwb3J0JyxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWNhcHRjaGFNb2R1bGUsIEZvb3RlckNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBDaGF0Qm94Q29tcG9uZW50XSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jcmVhdGUtcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NyZWF0ZS1yZXBvcnQuY29tcG9uZW50LnNjc3MnXVxyXG4gIH0pXHJcbiAgZXhwb3J0IGNsYXNzIENyZWF0ZVJlcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpbmZvID0gJyc7XHJcbiAgICB0eXBlID0gMTtcclxuICAgIGVtYWlsQXV0aG9yUmVwb3J0ID0gJyc7XHJcbiAgICByZWFzb24gPSAnJztcclxuICAgIGluZm9EZXNjcmlwdGlvbiA9ICcnO1xyXG4gICAgYWNjb3VudEhvbGRlck5hbWUgPSAnJztcclxuICAgIGJhbmtOYW1lID0gJyc7XHJcbiAgICBzaG93Q2hhdGJveDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vID4+IELhu5Ugc3VuZzogVGjDqm0gdGh14buZYyB0w61uaCBwYWdlVG9SZXBvcnRcclxuICAgIHBhZ2VUb1JlcG9ydDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgLy8gPj4gQuG7lSBzdW5nOiBUaMOqbSB0aHXhu5ljIHTDrW5oIGFncmVlVGVybXMgY2hvIGNoZWNrYm94XHJcbiAgICBhZ3JlZVRlcm1zOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHNlbGVjdGVkRmlsZXM6IEZpbGVbXSA9IFtdO1xyXG4gICAgY2FwdGNoYVRva2VuID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZXBvcnRTZXJ2aWNlOiBSZXBvcnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgLy8gQuG6oW4gY8OzIHRo4buDIGPhuqduIGZldGNoIGThu68gbGnhu4d1IGJhbiDEkeG6p3UgaG/hurdjIHNldHVwIGfDrCDEkcOzIOG7nyDEkcOieSBu4bq/dSBj4bqnblxyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZVNlbGVjdChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgdGhpcy5zZWxlY3RlZEZpbGVzID0gaW5wdXQuZmlsZXMgPyBBcnJheS5mcm9tKGlucHV0LmZpbGVzKSA6IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhcHRjaGFSZXNwb25zZSh0b2tlbjogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmNhcHRjaGFUb2tlbiA9IHRva2VuID8/ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVJlcG9ydCgpOiB2b2lkIHtcclxuICAgICAgaWYgKCF0aGlzLmNhcHRjaGFUb2tlbikge1xyXG4gICAgICAgIGFsZXJ0KCdWdWkgbMOybmcgaG/DoG4gdGjDoG5oIENBUFRDSEEnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gPj4gQ+G6rXAgbmjhuq10OiBLaeG7g20gdHJhIHRow6ptIGPDoWMgdHLGsOG7nW5nIG3hu5tpIHbDoCBjaGVja2JveCDEkeG7k25nIMO9XHJcbiAgICAgIC8vIGlmICh0aGlzLmlzRm9ybUludmFsaWQoKSkge1xyXG4gICAgICAvLyAgIGFsZXJ0KCdWdWkgbMOybmcgxJFp4buBbiDEkeG6p3kgxJHhu6cgY8OhYyB0csaw4budbmcgYuG6r3QgYnXhu5ljIHbDoCDEkeG7k25nIMO9IHbhu5tpIMSRaeG7gXUga2hv4bqjbi4nKTtcclxuICAgICAgLy8gICByZXR1cm47XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIGNvbnN0IGluZm8yID0gdGhpcy50eXBlID09PSAyID8gdGhpcy5hY2NvdW50SG9sZGVyTmFtZSA6IHVuZGVmaW5lZDtcclxuICAgICAgY29uc3QgaW5mbzMgPSB0aGlzLnR5cGUgPT09IDIgPyB0aGlzLmJhbmtOYW1lIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgLy8gPj4gQ+G6rXAgbmjhuq10OiBUaMOqbSBwYWdlVG9SZXBvcnQgdsOgbyByZXBvcnREVE9cclxuICAgICAgY29uc3QgcmVwb3J0RFRPOiBSZXBvcnREVE8gPSB7XHJcbiAgICAgICAgaW5mbzogdGhpcy5pbmZvLFxyXG4gICAgICAgIHBhZ2VUb1JlcG9ydDogdGhpcy5wYWdlVG9SZXBvcnQsIC8vIDw8IFRow6ptIHRyxrDhu51uZyBuw6B5XHJcbiAgICAgICAgZW1haWxBdXRob3JSZXBvcnQ6IHRoaXMuZW1haWxBdXRob3JSZXBvcnQsXHJcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICAgIHJlYXNvbjogdGhpcy5yZWFzb24sXHJcbiAgICAgICAgaW5mb0Rlc2NyaXB0aW9uOiB0aGlzLmluZm9EZXNjcmlwdGlvbixcclxuICAgICAgICBjYXB0Y2hhVG9rZW46IHRoaXMuY2FwdGNoYVRva2VuLFxyXG4gICAgICAgIGluZm8yLFxyXG4gICAgICAgIGluZm8zXHJcbiAgICAgICAgLy8gQuG6oW4gY8OzIHRo4buDIGtow7RuZyBj4bqnbiBn4butaSBhZ3JlZVRlcm1zIGzDqm4gYmFja2VuZCwgdMO5eSB5w6p1IGPhuqd1XHJcbiAgICAgICAgLy8gYWdyZWVUZXJtczogdGhpcy5hZ3JlZVRlcm1zXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnJlcG9ydFNlcnZpY2UuY3JlYXRlUmVwb3J0KHJlcG9ydERUTykuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KCdH4butaSB0aMO0bmcgdGluIGLDoW8gY8OhbyB0aMOgbmggY8O0bmchJyk7XHJcbiAgICAgICAgICBjb25zdCByZXBvcnRJZCA9IHJlcy5kYXRhPy5pZCA/PyByZXMuaWQ7XHJcbiAgICAgICAgICBpZiAoIXJlcG9ydElkKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdLaMO0bmcgbmjhuq1uIMSRxrDhu6NjIElEIGLDoW8gY8OhbyB04burIHNlcnZlci4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlcyhyZXBvcnRJZCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyA+PiBD4bqtcCBuaOG6rXQ6IEPDsyB0aOG7gyBjaHV54buDbiBoxrDhu5tuZyB24buBIHRyYW5nIGtow6FjIHRoYXkgdsOsIGNoYXRib3QgbuG6v3UgbXXhu5FuXHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Jhby1jYW8tdGhhbmgtY29uZyddKTsgLy8gVsOtIGThu6UgdHJhbmcgYsOhbyBjw6FvIHRow6BuaCBjw7RuZ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IChlcnI6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdM4buXaSBraGkgdOG6oW8gYsOhbyBjw6FvOicsIGVycik7XHJcbiAgICAgICAgICBhbGVydChgTOG7l2k6ICR7ZXJyLmVycm9yPy5tZXNzYWdlIHx8IGVyci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgLy8gPj4gQ+G6rXAgbmjhuq10OiBDw7MgdGjhu4MgY2h1eeG7g24gaMaw4bubbmcgduG7gSB0cmFuZyBraMOhYyBraGkgbOG7l2lcclxuICAgICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Jhby1jYW8tbG9pJ10pOyAvLyBWw60gZOG7pSB0cmFuZyBiw6FvIGPDoW8gbOG7l2lcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBsb2FkRmlsZXMocmVwb3J0SWQ6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZXMuZm9yRWFjaChmID0+IGZvcm1EYXRhLmFwcGVuZCgnZmlsZXMnLCBmLCBmLm5hbWUpKTtcclxuXHJcbiAgICAgIHRoaXMucmVwb3J0U2VydmljZS51cGxvYWRGaWxlcyhyZXBvcnRJZCwgZm9ybURhdGEpLnN1YnNjcmliZSh7XHJcbiAgICAgICAgbmV4dDogKCkgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoJ1ThuqNpIGzDqm4gdOG7h3AgdGjDoG5oIGPDtG5nIScpO1xyXG4gICAgICAgICAgLy8gPj4gQ+G6rXAgbmjhuq10OiBDaHV54buDbiBoxrDhu5tuZyBzYXUga2hpIHVwbG9hZCBmaWxlXHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9iYW8tY2FvLXRoYW5oLWNvbmcnXSk7IC8vIFbDrSBk4bulIHRyYW5nIGLDoW8gY8OhbyB0aMOgbmggY8O0bmdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoZXJyOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignTOG7l2kga2hpIHThuqNpIGzDqm4gdOG7h3A6JywgZXJyKTtcclxuICAgICAgICAgIGFsZXJ0KGBM4buXaTogJHtlcnIuZXJyb3I/Lm1lc3NhZ2UgfHwgZXJyLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAvLyA+PiBD4bqtcCBuaOG6rXQ6IENodXnhu4NuIGjGsOG7m25nIGtoaSBs4buXaSB1cGxvYWRcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Jhby1jYW8tbG9pJ10pOyAvLyBWw60gZOG7pSB0cmFuZyBiw6FvIGPDoW8gbOG7l2lcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNGb3JtSW52YWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgLy8gPj4gQ+G6rXAgbmjhuq10OiBUaMOqbSBraeG7g20gdHJhIGNobyBwYWdlVG9SZXBvcnQgdsOgIGFncmVlVGVybXNcclxuICAgICAgY29uc3QgYmFzaWNJbnZhbGlkID0gIXRoaXMuaW5mbyB8fCAhdGhpcy5yZWFzb24gfHwgIXRoaXMucGFnZVRvUmVwb3J0IHx8ICF0aGlzLmVtYWlsQXV0aG9yUmVwb3J0IHx8ICF0aGlzLmluZm9EZXNjcmlwdGlvbjtcclxuICAgICAgY29uc3QgZXh0cmFJbnZhbGlkRm9yVHlwZTIgPSB0aGlzLnR5cGUgPT09IDIgJiYgKCF0aGlzLmFjY291bnRIb2xkZXJOYW1lIHx8ICF0aGlzLmJhbmtOYW1lKTtcclxuICAgICAgY29uc3QgY2FwdGNoYUludmFsaWQgPSAhdGhpcy5jYXB0Y2hhVG9rZW47XHJcbiAgICAgIGNvbnN0IHRlcm1zTm90QWdyZWVkID0gIXRoaXMuYWdyZWVUZXJtczsgLy8gS2nhu4NtIHRyYSBjaGVja2JveCDEkeG7k25nIMO9XHJcblxyXG4gICAgICByZXR1cm4gYmFzaWNJbnZhbGlkIHx8IGV4dHJhSW52YWxpZEZvclR5cGUyIHx8IGNhcHRjaGFJbnZhbGlkIHx8IHRlcm1zTm90QWdyZWVkO1xyXG4gICAgfVxyXG4gICAgLy8gPj4gQuG7lSBzdW5nOiBQaMawxqFuZyB0aOG7qWMgcmVzZXQgZm9ybSBzYXUga2hpIGfhu61pIHRow6BuaCBjw7RuZy90aOG6pXQgYuG6oWkgKHTDuXkgbG9naWMpXHJcbiAgICByZXNldEZvcm0oKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuaW5mbyA9ICcnO1xyXG4gICAgICB0aGlzLnR5cGUgPSAxO1xyXG4gICAgICB0aGlzLmVtYWlsQXV0aG9yUmVwb3J0ID0gJyc7XHJcbiAgICAgIHRoaXMucmVhc29uID0gJyc7XHJcbiAgICAgIHRoaXMuaW5mb0Rlc2NyaXB0aW9uID0gJyc7XHJcbiAgICAgIHRoaXMuYWNjb3VudEhvbGRlck5hbWUgPSAnJztcclxuICAgICAgdGhpcy5iYW5rTmFtZSA9ICcnO1xyXG4gICAgICB0aGlzLnBhZ2VUb1JlcG9ydCA9ICcnOyAvLyBSZXNldCB0csaw4budbmcgbeG7m2lcclxuICAgICAgdGhpcy5hZ3JlZVRlcm1zID0gZmFsc2U7IC8vIFJlc2V0IGNoZWNrYm94XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlcyA9IFtdO1xyXG4gICAgICB0aGlzLmNhcHRjaGFUb2tlbiA9ICcnOyAvLyBSZXNldCBjYXB0Y2hhIHRva2VuXHJcbiAgICAgIC8vIE7hur91IGTDuW5nIHJlLWNhcHRjaGEsIGPhuqduIHJlc2V0IGzhuqFpIHdpZGdldCBjYXB0Y2hhIG7hur91IGPDsyBBUEkgaOG7lyB0cuG7o1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWlUdVZhbkNsaWNrZWQoKSB7XHJcbiAgICAgIHRoaXMuc2hvd0NoYXRib3ggPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbG9zZUNoYXRib3goKSB7XHJcbiAgICAgIHRoaXMuc2hvd0NoYXRib3ggPSBmYWxzZTtcclxuICAgIH1cclxuICB9IiwiPGFwcC1oZWFkZXIgKGFpVHVWYW5DbGlja2VkKT1cIm9uQWlUdVZhbkNsaWNrZWQoKVwiPjwvYXBwLWhlYWRlcj5cclxuXHJcbjxkaXYgY2xhc3M9XCJyZXBvcnQtcGFnZS1jb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwidHdvLWNvbHVtbi1sYXlvdXRcIj5cclxuXHJcbiAgICA8IS0tID09PT09PT09PT0gTEVGVCBDT0xVTU4gPT09PT09PT09IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImxlZnQtY29sdW1uXCI+XHJcbiAgICAgIDxmb3JtIGNsYXNzPVwicmVwb3J0LWZvcm1cIiAjcmVwb3J0Rm9ybT1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJjcmVhdGVSZXBvcnQoKVwiIG5vdmFsaWRhdGU+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwiaW5mby1ib3gtdGl0bGVcIj5Cw4FPIEPDgU8gTOG7qkEgxJDhuqJPPC9oMz5cclxuXHJcbiAgICAgICAgPCEtLSBUaMO0bmcgdGluIGxpw6puIHF1YW4gLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbmZvXCI+VGjDtG5nIHRpbiBsacOqbiBxdWFuOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJpbmZvXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaW5mb1wiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmjhuq1wIHPhu5EgdGjDtG5nIHRpbiBuZ2hpIG5n4budXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpbmZvXCJcclxuICAgICAgICAgICAgI2luZm9DdHJsPVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8IS0tIExv4bqhaSB0aMO0bmcgdGluICsgTmfDom4gaMOgbmcgKGNo4buJIGhp4buDbiB0aOG7iyBraGkgbMOgIFNUSykgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0eXBlXCI+TG/huqFpIHRow7RuZyB0aW46PC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ0eXBlXCIgbmFtZT1cInR5cGVcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cInR5cGVcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiBbbmdWYWx1ZV09XCIxXCI+U+G7kSDEkWnhu4duIHRob+G6oWk8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiBbbmdWYWx1ZV09XCIyXCI+U+G7kSB0w6BpIGtob+G6o248L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiBbbmdWYWx1ZV09XCIzXCI+VVJMPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiAqbmdJZj1cInR5cGUgPT09IDJcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJhY2NvdW50SG9sZGVyTmFtZVwiPlTDqm4gY2jhu6cgdMOgaSBraG/huqNuOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgaWQ9XCJhY2NvdW50SG9sZGVyTmFtZVwiIG5hbWU9XCJhY2NvdW50SG9sZGVyTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJhY2NvdW50SG9sZGVyTmFtZVwiIC8+XHJcblxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImJhbmtOYW1lXCI+TmfDom4gaMOgbmc6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBpZD1cImJhbmtOYW1lXCIgbmFtZT1cImJhbmtOYW1lXCIgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImJhbmtOYW1lXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSBFbWFpbCAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWwgbmfGsOG7nWkgYsOhbyBjw6FvPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsQXV0aG9yUmVwb3J0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOaOG6rXAgZW1haWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImVtYWlsQXV0aG9yUmVwb3J0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gTcO0IHThuqMgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPk3DtCB04bqjIGNoaSB0aeG6v3Q6PC9sYWJlbD5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgbmFtZT1cImluZm9EZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNw7QgdOG6oyBjaGkgdGnhur90IHbhu4EgduG7pSB2aeG7h2NcIlxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImluZm9EZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSBGaWxlIHVwbG9hZCAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImZpbGVzXCI+VMOgaSBsaeG7h3UgxJHDrW5oIGvDqG0gKFBORywgSlBHLCBHSUYpOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgaWQ9XCJmaWxlc1wiIHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIG11bHRpcGxlIChjaGFuZ2UpPVwib25GaWxlU2VsZWN0KCRldmVudClcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiICpuZ0lmPVwic2VsZWN0ZWRGaWxlcy5sZW5ndGhcIj5cclxuICAgICAgICAgIDxsYWJlbD5Dw6FjIHThu4dwIMSRw6MgY2jhu41uOjwvbGFiZWw+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgZiBvZiBzZWxlY3RlZEZpbGVzXCI+e3sgZi5uYW1lIH19ICh7eyBmLnNpemUgfCBudW1iZXIgfX0gYnl0ZXMpPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gQ2FwdGNoYSAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPHJlLWNhcHRjaGEgc2l0ZUtleT1cIjZMZkc2VEFyQUFBQUFEM01fWUx3Z1VIdUM2UVBMN0k3QVRuV0U0WGxcIiAocmVzb2x2ZWQpPVwiaGFuZGxlQ2FwdGNoYVJlc3BvbnNlKCRldmVudClcIj48L3JlLWNhcHRjaGE+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCJyZXBvcnRGb3JtLmludmFsaWQgfHwgIWNhcHRjaGFUb2tlblwiPlxyXG4gICAgICAgICAgR+G7rWkgQsOhbyBDw6FvXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gPT09PT09PT09PSBSSUdIVCBDT0xVTU4gPT09PT09PT09IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbHVtblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ib3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDQgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+PGkgY2xhc3M9XCJpbmZvLWljb24gd2FybmluZ1wiPiE8L2k+IENow7ogw708L2g0PlxyXG4gICAgICAgICAgPHA+VGjDtG5nIELDoW8gduG7gSBWaeG7h2MgQsOhbyBDw6FvIGPDoWMgVHJhbmcgV2ViIEPDoSDEkOG7mSwgQ+G7nSBC4bqhYywgMTgrLC4uLjwvcD5cclxuICAgICAgICAgIDxwPlRoZW8gxJHDoW5oIGdpw6EgdsOgIHRo4buRbmcga8OqIHThu6sgY+G7mW5nIMSR4buTbmcsIGPDoWMgdHJhbmcgd2ViIGPDsyBu4buZaSBkdW5nIDE4KywgY8OhIMSR4buZIGLDs25nIMSRw6EsIGPhu50gYuG6oWMgdHLhu7FjIHR1eeG6v24gxJHhu4F1IHZpIHBo4bqhbSBwaMOhcCBsdeG6rXQgVmnhu4d0IE5hbSB24bubaSBt4bupYyDEkeG7mSAxMDAlLjwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiaGlnaGxpZ2h0LXRleHRcIj48aSBjbGFzcz1cImluZm8taWNvbiB3YXJuaW5nXCI+ITwvaT4gVsOsIHbhuq15LCBi4bqhbiA8c3Ryb25nPktIw5RORyBD4bqmTjwvc3Ryb25nPiBwaOG6o2kgZ+G7rWkgYsOhbyBjw6FvIGPDoWMgdHJhbmcgd2ViIGThuqFuZyBuw6B5IGzDqm4gaOG7hyB0aOG7kW5nIGPhu6dhIGNow7puZyB0w7RpLjwvcD5cclxuICAgICAgICAgIDxwPkNow7puZyB0w7RpIGx1w7RuIHRyw6JuIHRy4buNbmcgxJHDs25nIGfDs3AgcXXDvSBiw6F1IHThu6sgY+G7mW5nIMSR4buTbmcuIFZp4buHYyBraMO0bmcgY+G6p24gYsOhbyBjw6FvIG5o4buvbmcgdHJhbmcgdmkgcGjhuqFtIHBow6FwIGx14bqtdCByw7UgcsOgbmcgZ2nDunAgY2jDum5nIHTDtGkgdOG6rXAgdHJ1bmcgbmd14buTbiBs4buxYyB2w6BvIHZp4buHYyB44butIGzDvSBjw6FjIHRyYW5nIHdlYiBs4burYSDEkeG6o28gdGluaCB2aSB2w6AgZ8OieSBo4bqhaSDEkeG6v24gbmfGsOG7nWkgZMO5bmcuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDQgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+PGkgY2xhc3M9XCJpbmZvLWljb24gaW5mb1wiPmk8L2k+IFRow7RuZyB0aW4gcXVhbiB0cuG7jW5nPC9oND5cclxuICAgICAgICAgIDxwPlRyxrDhu5tjIGtoaSBiw6FvIGPDoW8sIHZ1aSBsw7JuZyBraeG7g20gdHJhIHRow7RuZyB0aW4gdHLDqm4gaOG7hyB0aOG7kW5nIGPhu6dhIGNow7puZyB0w7RpLiBO4bq/dSBraMO0bmcgY8OzLCBow6N5IHRoZW8gY8OhYyBixrDhu5tjIMSR4buDIGLDoW8gY8Ohby4gQ2hlY2tTY2FtIHPhur0geMOpdCBkdXnhu4d0IGvhu7kgbMaw4buhbmcgdsOgIHF1eeG6v3QgxJHhu4tuaCBjdeG7kWkgY8O5bmcuPC9wPlxyXG4gICAgICAgICAgPHA+Tmdvw6BpIHJhIGLhuqFuIGPDsyB0aOG7gyB0aGFtIGto4bqjbyB0aMO0bmcgdGluIGjhu691IMOtY2gga2jDoWM6PC9wPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwicmVmZXJlbmNlLWxpbmtzXCI+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9jaG9uZ2x1YWRhby52bi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5DaOG7kW5nIGzhu6thIMSR4bqjbzwvYT4gPGkgY2xhc3M9XCJsaW5rLWljb25cIj7ihpc8L2k+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3Rpbm5oaWVtbWFuZy52bi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Uw61uIG5oaeG7h20gbeG6oW5nPC9hPiA8aSBjbGFzcz1cImxpbmstaWNvblwiPuKGlzwvaT48L2xpPlxyXG4gICAgICAgICAgICA8IS0tIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9raG9uZ2dpYW5tYW5nLnZuL1wiIHRhcmdldD1cIl9ibGFua1wiPktow7RuZyBnaWFuIG3huqFuZzwvYT4gPGkgY2xhc3M9XCJsaW5rLWljb25cIj7ihpc8L2k+PC9saT4gLS0+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48YXBwLWNoYXQtYm94ICpuZ0lmPVwic2hvd0NoYXRib3hcIiAoY2xvc2UpPVwiY2xvc2VDaGF0Ym94KClcIj48L2FwcC1jaGF0LWJveD5cclxuPGFwcC1mb290ZXI+PC9hcHAtZm9vdGVyPlxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUsIExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInOyAvLyBJbXBvcnQgUm91dGVyTW9kdWxlXHJcbmltcG9ydCB7IE5ld3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbmV3cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7ICBcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhRmFjZWJvb2tGIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhQ2xvY2ssIGZhQXJyb3dMZWZ0LCBmYUVudmVsb3BlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgRmFJY29uTGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcclxuXHJcblxyXG4vLyDEkOG7i25oIG5naMSpYSBjw6FjIGludGVyZmFjZSDEkeG7gyBjw7Mga2nhu4N1IGThu68gbGnhu4d1IG3huqFuaCBt4bq9IGjGoW5cclxuaW50ZXJmYWNlIEF0dGFjaG1lbnREdG8ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdXJsPzogc3RyaW5nIHwgbnVsbDsgLy8gdXJsIGPDsyB0aOG7gyBsw6AgbnVsbCBob+G6t2MgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmludGVyZmFjZSBQb3N0IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzaG9ydERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIHB1Ymxpc2hlZERhdGU/OiBzdHJpbmc7IFxyXG4gIGF0dGFjaG1lbnRzPzogQXR0YWNobWVudER0b1tdOyAvLyBhdHRhY2htZW50cyBjw7MgdGjhu4MgbMOgIHVuZGVmaW5lZFxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC12aWV3LW5ld3MnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgRm9vdGVyQ29tcG9uZW50LCAvLyDEkOG6o20gYuG6o28gRm9vdGVyQ29tcG9uZW50IMSRxrDhu6NjIGltcG9ydCB2w6AgdGjDqm0gdsOgbyDEkcOieVxyXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsIC8vIFRow6ptIEZvbnRBd2Vzb21lTW9kdWxlXHJcbiAgICBSb3V0ZXJNb2R1bGUgLy8gVEjDik0gRMOSTkcgTsOAWSDEkOG7giBLSOG6rkMgUEjhu6RDIEzhu5ZJIHJvdXRlckxpbmtcclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LW5ld3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3ZpZXctbmV3cy5jb21wb25lbnQuc2NzcyddICBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZpZXdOZXdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcG9zdDogUG9zdCA9IHt9IGFzIFBvc3Q7IC8vIEto4bufaSB04bqhbyDEkeG7gyB0csOhbmggbOG7l2kgdW5kZWZpbmVkXHJcbiAgYXR0YWNobWVudER0bzogQXR0YWNobWVudER0b1tdID0gW107XHJcbiAgc2VsZWN0ZWRJbWFnZVVybDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgY3VycmVudFVybDogc3RyaW5nID0gJyc7XHJcbiAgcmVsYXRlZE5ld3M6IFBvc3RbXSA9IFtdOyAvLyBN4bqjbmcgxJHhu4MgbMawdSB0cuG7ryB0aW4gdOG7qWMgbGnDqm4gcXVhblxyXG5cclxuICByZWFkb25seSBpbWFnZUJhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9yZXBvcnQvaW1hZ2UvJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5ld3NTZXJ2aWNlOiBOZXdzU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgbGlicmFyeTogRmFJY29uTGlicmFyeSAvLyBJbmplY3QgRmFJY29uTGlicmFyeVxyXG4gICkge1xyXG4gICAgLy8gQWRkIEZvbnRBd2Vzb21lIGljb25zIHRvIHRoZSBsaWJyYXJ5XHJcbiAgICBsaWJyYXJ5LmFkZEljb25zKGZhRmFjZWJvb2tGLCBmYUNsb2NrLCBmYUFycm93TGVmdCwgZmFFbnZlbG9wZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIEzhuq9uZyBuZ2hlIHPhu7EgdGhheSDEkeG7lWkgY+G7p2EgcGFyYW1NYXAgxJHhu4MgdOG6o2kgbOG6oWkgbuG7mWkgZHVuZyBraGkgY2h1eeG7g24gxJHhu5VpIGdp4buvYSBjw6FjIGLDoGkgdmnhur90IGxpw6puIHF1YW5cclxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgIGNvbnN0IHBvc3RJZCA9IE51bWJlcihwYXJhbXMuZ2V0KCdpZCcpKTtcclxuICAgICAgaWYgKHBvc3RJZCkge1xyXG4gICAgICAgIHRoaXMubG9hZE5ld3NCeUlkKHBvc3RJZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmOyAvLyBM4bqleSBVUkwgaGnhu4duIHThuqFpIGNobyBjaGlhIHPhursgRmFjZWJvb2tcclxuICAgIHRoaXMubG9hZFJlbGF0ZWROZXdzKCk7IC8vIFThuqNpIHRpbiB04bupYyBsacOqbiBxdWFuIGtoaSBjb21wb25lbnQga2jhu59pIHThuqFvXHJcbiAgfVxyXG5cclxuICBsb2FkTmV3c0J5SWQoaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5uZXdzU2VydmljZS5nZXROZXdzQnlJZChpZCkuc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dDogKHJlczogUG9zdCkgPT4geyAvLyBUeXBlICdyZXMnIGzDoCBQb3N0XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdhdHRhY2htZW50cyBmcm9tIEFQSScsIHJlcy5hdHRhY2htZW50cyk7XHJcbiAgICAgICAgdGhpcy5wb3N0ID0gcmVzO1xyXG4gICAgICAgIHRoaXMuYXR0YWNobWVudER0byA9IHJlcy5hdHRhY2htZW50cyA/PyBbXTtcclxuICAgICAgICAvLyBDdeG7mW4gbMOqbiDEkeG6p3UgdHJhbmcgc2F1IGtoaSB04bqjaSB0aW4gdOG7qWMgbeG7m2lcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IFxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgIGFsZXJ0KGVycj8uZXJyb3I/Lm1lc3NhZ2UgfHwgJ0zhu5dpIGtoaSB04bqjaSBiw6BpIHZp4bq/dCcpOyAvLyBM4bqleSBtZXNzYWdlIHThu6sgZXJyLmVycm9yXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTOG7l2kga2hpIHThuqNpIGLDoGkgdmnhur90OicsIGVycik7IC8vIExvZyBs4buXaSBjaGkgdGnhur90IGjGoW5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkUmVsYXRlZE5ld3MoKTogdm9pZCB7XHJcbiAgICAvLyBC4bqhbiBj4bqnbiBt4buZdCBwaMawxqFuZyB0aOG7qWMgdHJvbmcgTmV3c1NlcnZpY2UgxJHhu4MgbOG6pXkgZGFuaCBzw6FjaCB0aW4gdOG7qWMgKHbDrSBk4bulOiA1IHRpbiBt4bubaSBuaOG6pXQpXHJcbiAgICAvLyDEkOG6o20gYuG6o28gTmV3c1NlcnZpY2UuZ2V0QWxsTmV3cyB0cuG6oyB24buBIE9ic2VydmFibGU8UG9zdFtdPiBob+G6t2MgT2JzZXJ2YWJsZTxhbnk+XHJcbiAgICB0aGlzLm5ld3NTZXJ2aWNlLmdldEFsbE5ld3MoMCwgNSkuc3Vic2NyaWJlKHsgXHJcbiAgICAgIG5leHQ6IChyZXM6IFBvc3RbXSkgPT4geyAvLyBHaeG6oyDEkeG7i25oIHJlcyBsw6AgbeG7mXQgbeG6o25nIFBvc3RcclxuICAgICAgICAvLyBM4buNYyBi4buPIGLDoGkgdmnhur90IGhp4buHbiB04bqhaSBraOG7j2kgZGFuaCBzw6FjaCB0aW4gdOG7qWMgbGnDqm4gcXVhblxyXG4gICAgICAgIC8vIMSQ4bqjbSBi4bqjbyB0aGlzLnBvc3QuaWQgxJHDoyBjw7MgZ2nDoSB0cuG7iyB0csaw4bubYyBraGkgbOG7jWMgKHRoxrDhu51uZyBsw6AgY8OzIHNhdSBsb2FkTmV3c0J5SWQpXHJcbiAgICAgICAgLy8gTuG6v3UgbG9hZE5ld3NCeUlkIGNoxrBhIGNo4bqheSB4b25nLCB0aGlzLnBvc3QuaWQgY8OzIHRo4buDIGzDoCB1bmRlZmluZWQvMCwgY+G6p24geOG7rSBsw70gdHJvbmcgYmFja2VuZCBob+G6t2Mg4bufIMSRw6J5XHJcbiAgICAgICAgdGhpcy5yZWxhdGVkTmV3cyA9IHJlcy5maWx0ZXIobmV3c0l0ZW0gPT4gbmV3c0l0ZW0uaWQgIT09IHRoaXMucG9zdC5pZCk7XHJcbiAgICAgICAgLy8gTuG6v3UgY+G6p24sIGLhuqFuIGPDsyB0aOG7gyBj4bqvdCBi4bubdCBjaOG7iSBs4bqleSA0LTUgdGluXHJcbiAgICAgICAgdGhpcy5yZWxhdGVkTmV3cyA9IHRoaXMucmVsYXRlZE5ld3Muc2xpY2UoMCwgNSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTOG7l2kga2hpIHThuqNpIHRpbiB04bupYyBsacOqbiBxdWFuOicsIGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qIC0tLS0tLS0tLS0gSGVscGVycyAtLS0tLS0tLS0tICovXHJcblxyXG4gIGdldEltYWdlVXJsKGF0dGFjaG1lbnQ6IEF0dGFjaG1lbnREdG8pOiBzdHJpbmcge1xyXG4gICAgaWYgKCFhdHRhY2htZW50LnVybCkgeyAvLyBLaeG7g20gdHJhIG51bGwgaG/hurdjIHVuZGVmaW5lZFxyXG4gICAgICByZXR1cm4gJ2Fzc2V0cy9pbWcvcGxhY2Vob2xkZXIucG5nJzsgXHJcbiAgICB9XHJcbiAgICBpZiAoYXR0YWNobWVudC51cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XHJcbiAgICAgIHJldHVybiBhdHRhY2htZW50LnVybDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IGF0dGFjaG1lbnQudXJsLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICByZXR1cm4gZmlsZU5hbWUgPyBgJHt0aGlzLmltYWdlQmFzZVVybH0ke2VuY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSl9YCA6ICdhc3NldHMvaW1nL3BsYWNlaG9sZGVyLnBuZyc7XHJcbiAgfVxyXG5cclxuICAvLyBT4butYSBs4buXaSB0cm9uZyBwaMawxqFuZyB0aOG7qWMgbsOgeTogJ21haW5BdHRhY2htZW50LnVybCcgaXMgcG9zc2libHkgJ251bGwnIG9yICd1bmRlZmluZWQnLlxyXG4gIGdldEltYWdlVXJsRm9yUmVsYXRlZChuZXdzSXRlbTogUG9zdCk6IHN0cmluZyB7XHJcbiAgICBpZiAobmV3c0l0ZW0uYXR0YWNobWVudHMgJiYgbmV3c0l0ZW0uYXR0YWNobWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBtYWluQXR0YWNobWVudCA9IG5ld3NJdGVtLmF0dGFjaG1lbnRzWzBdO1xyXG4gICAgICAvLyBUSMOKTSBLSeG7gk0gVFJBIMSQ4buCIMSQ4bqiTSBC4bqiTyBtYWluQXR0YWNobWVudCBWw4AgbWFpbkF0dGFjaG1lbnQudXJsIEtIw5RORyBQSOG6okkgTMOAIG51bGwvdW5kZWZpbmVkXHJcbiAgICAgIGlmIChtYWluQXR0YWNobWVudCAmJiBtYWluQXR0YWNobWVudC51cmwpIHsgXHJcbiAgICAgICAgaWYgKG1haW5BdHRhY2htZW50LnVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcclxuICAgICAgICAgIHJldHVybiBtYWluQXR0YWNobWVudC51cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpbGVOYW1lID0gbWFpbkF0dGFjaG1lbnQudXJsLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgICAgcmV0dXJuIGZpbGVOYW1lID8gYCR7dGhpcy5pbWFnZUJhc2VVcmx9JHtlbmNvZGVVUklDb21wb25lbnQoZmlsZU5hbWUpfWAgOiAnYXNzZXRzL2ltZy9wbGFjZWhvbGRlci5wbmcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ2Fzc2V0cy9pbWcvcGxhY2Vob2xkZXIucG5nJzsgLy8gVHLhuqMgduG7gSDhuqNuaCBt4bq3YyDEkeG7i25oIG7hur91IGtow7RuZyB0w6xtIHRo4bqleSBVUkwgaOG7o3AgbOG7h1xyXG4gIH1cclxuXHJcbiAgLy8gRMO5bmcgYGFueWAgY2hvIGBpdGVtYCB0cm9uZyBgdHJhY2tCeUlkYCDEkeG7gyBsaW5oIGhv4bqhdCB24bubaSBj4bqjIFBvc3QgdsOgIEF0dGFjaG1lbnREdG9cclxuICB0cmFja0J5SWQoXzogbnVtYmVyLCBpdGVtOiBhbnkpOiBudW1iZXIgeyBcclxuICAgIHJldHVybiBpdGVtLmlkO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmlsZU5hbWUoYXR0OiBBdHRhY2htZW50RHRvKTogc3RyaW5nIHtcclxuICAgIC8vIFPhu60gZOG7pW5nIHRvw6FuIHThu60gb3B0aW9uYWwgY2hhaW5pbmcgKD8uKSB2w6AgbnVsbGlzaCBjb2FsZXNjaW5nICg/PykgYW4gdG/DoG4gaMahblxyXG4gICAgcmV0dXJuIGF0dC51cmw/LnNwbGl0KCcvJykucG9wKCkgPz8gJ8SQw61uaCBrw6htJztcclxuICB9XHJcblxyXG4gIC8qIC0tLS0tLS0tLS0gTmF2aWdhdGlvbiAtLS0tLS0tLS0tICovXHJcbiAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7IC8vIFF1YXkgbOG6oWkgdHJhbmcgdHLGsOG7m2MgxJHDsyB0cm9uZyBs4buLY2ggc+G7rSB0csOsbmggZHV54buHdFxyXG4gIH1cclxuXHJcbiAgLyogLS0tLS0tLS0tLSBMaWdodGJveCAtLS0tLS0tLS0tICovXHJcbiAgb3BlbkltYWdlKHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSB1cmw7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7IC8vIE5nxINuIGN14buZbiB0cmFuZyBu4buBblxyXG4gIH1cclxuXHJcbiAgY2xvc2VJbWFnZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbWFnZVVybCA9IG51bGw7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7IC8vIENobyBwaMOpcCBjdeG7mW4gbOG6oWlcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLmVzY2FwZScpXHJcbiAgb25Fc2NLZXkoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEltYWdlVXJsKSB0aGlzLmNsb3NlSW1hZ2UoKTtcclxuICB9XHJcblxyXG4gIG9uSW1hZ2VFcnJvcihldjogRXZlbnQpOiB2b2lkIHtcclxuICAgIChldi50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudCkuc3JjID0gJ2Fzc2V0cy9pbWcvZXJyb3ItcGxhY2Vob2xkZXIucG5nJzsgLy8g4bqibmggbOG7l2kgbeG6t2MgxJHhu4tuaFxyXG4gIH1cclxufSIsIjxhcHAtaGVhZGVyPjwvYXBwLWhlYWRlcj5cclxuXHJcbjxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnQtYXJlYVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBuZXdzLXBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5ld3MtbWFpbi1jb2x1bW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgbmV3cy1kZXRhaWwtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhY2stYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWJhY2tcIiAoY2xpY2spPVwiZ29CYWNrKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYXJyb3ctbGVmdFwiPjwvaT4gUXVheSBs4bqhaVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibmV3cy10aXRsZVwiPnt7IHBvc3QubmFtZSB9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmV3cy1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZXdzLWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2xvY2tcIj48L2k+IHt7IHBvc3QucHVibGlzaGVkRGF0ZSB8IGRhdGU6J00vZC95eXl5LCBoOm1tIGEnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9e3sgY3VycmVudFVybCB9fVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwic29jaWFsLXNoYXJlLWljb24gZmFjZWJvb2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzcz1cIm5ld3MtZGl2aWRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJhdHRhY2htZW50RHRvICYmIGF0dGFjaG1lbnREdG8ubGVuZ3RoID4gMFwiIGNsYXNzPVwibWFpbi1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiZ2V0SW1hZ2VVcmwoYXR0YWNobWVudER0b1swXSlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFthbHRdPVwiZ2V0RmlsZU5hbWUoYXR0YWNobWVudER0b1swXSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYWluLW5ld3MtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW5JbWFnZShnZXRJbWFnZVVybChhdHRhY2htZW50RHRvWzBdKSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKT1cIm9uSW1hZ2VFcnJvcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmV3cy1jb250ZW50XCIgW2lubmVySFRNTF09XCJwb3N0LmNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0YWNobWVudHMtc2VjdGlvbiBtdC00XCIgKm5nRj1cImF0dGFjaG1lbnREdG8/Lmxlbmd0aCAmJiBhdHRhY2htZW50RHRvLmxlbmd0aCA+IDFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+SMOsbmgg4bqjbmgga2jDoWM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdGhlci1hdHRhY2htZW50cy1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGF0dGFjaG1lbnQgb2YgYXR0YWNobWVudER0by5zbGljZSgxKTsgdHJhY2tCeTogdHJhY2tCeUlkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhdHRhY2htZW50LWl0ZW0tc21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJnZXRJbWFnZVVybChhdHRhY2htZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthbHRdPVwiZ2V0RmlsZU5hbWUoYXR0YWNobWVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNtYWxsLWF0dGFjaG1lbnQtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib3BlbkltYWdlKGdldEltYWdlVXJsKGF0dGFjaG1lbnQpKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJvbkltYWdlRXJyb3IoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhdHRhY2htZW50LW5hbWVcIj57eyBnZXRGaWxlTmFtZShhdHRhY2htZW50KSB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuZXdzLXNpZGViYXItY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHNpZGViYXItY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwic2lkZWJhci10aXRsZVwiPlhlbSB0aMOqbTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyZWxhdGVkLW5ld3MtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgcmVsYXRlZE5ld3NJdGVtIG9mIHJlbGF0ZWROZXdzOyB0cmFja0J5OiB0cmFja0J5SWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvdmlldy1uZXdzJywgcmVsYXRlZE5ld3NJdGVtLmlkXVwiIGNsYXNzPVwicmVsYXRlZC1uZXdzLWxpbmtcIiAoY2xpY2spPVwibG9hZE5ld3NCeUlkKHJlbGF0ZWROZXdzSXRlbS5pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJnZXRJbWFnZVVybEZvclJlbGF0ZWQocmVsYXRlZE5ld3NJdGVtKVwiIGFsdD1cInt7IHJlbGF0ZWROZXdzSXRlbS5uYW1lIH19XCIgY2xhc3M9XCJyZWxhdGVkLW5ld3MtdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRlZC1uZXdzLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJyZWxhdGVkLW5ld3MtdGl0bGVcIj57eyByZWxhdGVkTmV3c0l0ZW0ubmFtZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZWxhdGVkLW5ld3MtZGF0ZVwiPnt7IHJlbGF0ZWROZXdzSXRlbS5wdWJsaXNoZWREYXRlIHwgZGF0ZTonTS9kL3l5eXknIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cInJlbGF0ZWROZXdzLmxlbmd0aCA9PT0gMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLXJlbGF0ZWQtbmV3c1wiPktow7RuZyBjw7MgdGluIHThu6ljIGxpw6puIHF1YW4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJsaWdodGJveFwiICpuZ0lmPVwic2VsZWN0ZWRJbWFnZVVybFwiIChjbGljayk9XCJjbG9zZUltYWdlKClcIj5cclxuICA8aW1nIFtzcmNdPVwic2VsZWN0ZWRJbWFnZVVybFwiIGFsdD1cIlhlbSDhuqNuaFwiPlxyXG48L2Rpdj5cclxuXHJcbjxhcHAtZm9vdGVyPjwvYXBwLWZvb3Rlcj4iLCJcbi8qIGRldGFpbC1uZXdzLmNvbXBvbmVudC50cyAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5ld3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbmV3cy5zZXJ2aWNlJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JzsgICAvLyBu4bq/dSBtdeG7kW4gZMO5bmdcblxuaW50ZXJmYWNlIEF0dGFjaG1lbnREdG8ge1xuICBpZDogbnVtYmVyO1xuICB1cmw/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kZXRhaWwtbmV3cycsXG4gIHN0YW5kYWxvbmU6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIC8vIEZvb3RlckNvbXBvbmVudCAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RldGFpbC1uZXdzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGV0YWlsLW5ld3MuY29tcG9uZW50LnNjc3MnXSAgXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbE5ld3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHBvc3Q6IGFueSA9IHt9O1xuICBhdHRhY2htZW50RHRvOiBBdHRhY2htZW50RHRvW10gPSBbXTtcbiAgc2VsZWN0ZWRJbWFnZVVybDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgcmVhZG9ubHkgaW1hZ2VCYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvcmVwb3J0L2ltYWdlLyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuZXdzU2VydmljZTogTmV3c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGlkID0gTnVtYmVyKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpKTtcbiAgICB0aGlzLmxvYWROZXdzQnlJZChpZCk7XG4gIH1cblxuICBwcml2YXRlIGxvYWROZXdzQnlJZChpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5uZXdzU2VydmljZS5nZXROZXdzQnlJZChpZCkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChyZXMpID0+IHtcbiAgICAgICAgIGNvbnNvbGUubG9nKCdhdHRhY2htZW50cyBmcm9tIEFQSScsIHJlcy5hdHRhY2htZW50cyk7XG4gICAgICAgIHRoaXMucG9zdCA9IHJlcztcbiAgICAgICAgdGhpcy5hdHRhY2htZW50RHRvID0gcmVzLmF0dGFjaG1lbnRzID8/IFtdOyAgIC8vIMSR4buVaSB0w6puIHRyxrDhu51uZyBu4bq/dSBj4bqnblxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgIGFsZXJ0KGVycj8uZXJyb3IgfHwgJ0zhu5dpIGtoaSB04bqjaSBiw6BpIHZp4bq/dCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLSBIZWxwZXJzIC0tLS0tLS0tLS0gKi9cblxuICBnZXRJbWFnZVVybCh7IHVybCB9OiBBdHRhY2htZW50RHRvKTogc3RyaW5nIHtcbiAgICBpZiAoIXVybCkgcmV0dXJuICdhc3NldHMvaW1nL3BsYWNlaG9sZGVyLnBuZyc7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwJykpIHJldHVybiB1cmw7XG5cbiAgICBjb25zdCBmaWxlTmFtZSA9IHVybC5zcGxpdCgnLycpLnBvcCgpO1xuICAgIHJldHVybiBmaWxlTmFtZSA/IGAke3RoaXMuaW1hZ2VCYXNlVXJsfSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKX1gIFxuICAgICAgICAgICAgICAgICAgICA6ICdhc3NldHMvaW1nL3BsYWNlaG9sZGVyLnBuZyc7XG4gIH1cblxuICB0cmFja0J5SWQoXzogbnVtYmVyLCBpdGVtOiBBdHRhY2htZW50RHRvKTogbnVtYmVyIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuICBnZXRGaWxlTmFtZShhdHQ6IEF0dGFjaG1lbnREdG8pOiBzdHJpbmcge1xuICAgIHJldHVybiBhdHQudXJsPy5zcGxpdCgnLycpLnBvcCgpID8/ICfEkMOtbmgga8OobSc7XG4gIH1cbiAgLyogLS0tLS0tLS0tLSBMaWdodGJveCAtLS0tLS0tLS0tICovXG4gIG9wZW5JbWFnZSh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJbWFnZVVybCA9IHVybDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cblxuICBjbG9zZUltYWdlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJbWFnZVVybCA9IG51bGw7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24uZXNjYXBlJylcbiAgb25Fc2NLZXkoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbWFnZVVybCkgdGhpcy5jbG9zZUltYWdlKCk7XG4gIH1cblxuICBvbkltYWdlRXJyb3IoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgKGV2LnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5zcmMgPSAnYXNzZXRzL2ltZy9wbGFjZWhvbGRlci5wbmcnO1xuICB9XG59XG4iLCI8YXBwLWhlYWRlcj48L2FwcC1oZWFkZXI+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIG10LTRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCBwLTRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRleHRcIj5Uw6puPC9sYWJlbD5cbiAgICAgICAgPGg0IGNsYXNzPVwiZnctYm9sZFwiPnt7IHBvc3QubmFtZSB9fTwvaDQ+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0ZXh0XCI+TcO0IHThuqM8L2xhYmVsPlxuICAgICAgICA8cD57eyBwb3N0LnNob3J0RGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0ZXh0XCI+TuG7mWkgZHVuZzwvbGFiZWw+XG4gICAgICAgIDxwPnt7IHBvc3QuY29udGVudCB9fTwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlcG9ydC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYXR0YWNobWVudHMtc2VjdGlvblwiPlThu4dwIMSRw61uaCBrw6htPC9sYWJlbD5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhdHRhY2htZW50cy1zZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJhdHRhY2htZW50cy1jb250YWluZXIgbXQtMlwiXG4gICAgICAgICAgICAgICAgICpuZ0lmPVwiYXR0YWNobWVudER0bz8ubGVuZ3RoOyBlbHNlIG5vQXR0YWNobWVudHNcIj5cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYXR0YWNobWVudCBvZiBhdHRhY2htZW50RHRvOyB0cmFja0J5OiB0cmFja0J5SWRcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXR0YWNobWVudC1pdGVtIG1iLTNcIj5cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8aW1nICBbc3JjXT1cImdldEltYWdlVXJsKGF0dGFjaG1lbnQpXCJcbiAgICAgICAgICAgICAgICAgICBbYWx0XT1cImdldEZpbGVOYW1lKGF0dGFjaG1lbnQpXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZCByb3VuZGVkIHJlcG9ydC1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW5JbWFnZShnZXRJbWFnZVVybChhdHRhY2htZW50KSlcIlxuICAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJvbkltYWdlRXJyb3IoJGV2ZW50KVwiPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZCBzbWFsbCBtdC0xXCI+XG4gICAgICAgICAgICAgICB7eyBnZXRGaWxlTmFtZShhdHRhY2htZW50KSB9fVxuICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm9BdHRhY2htZW50cz5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXBvcnQtdmFsdWVcIj5LaMO0bmcgY8OzIHThu4dwIMSRw61uaCBrw6htLjwvcD5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIExpZ2h0Ym94IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ2h0Ym94XCIgKm5nSWY9XCJzZWxlY3RlZEltYWdlVXJsXCIgKGNsaWNrKT1cImNsb3NlSW1hZ2UoKVwiPlxuICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwic2VsZWN0ZWRJbWFnZVVybFwiIGFsdD1cIlhlbSDhuqNuaFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSA8YXBwLWZvb3Rlcj48L2FwcC1mb290ZXI+IC0tPiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBSZXBvcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcmVwb3J0LnNlcnZpY2UnOyAgICAgICAgICAgICAgIFxyXG5pbXBvcnQgeyBJbmZvcm1hdGlvblR5cGVUb1N0cmluZ1BpcGUgfSBmcm9tICcuLi8uLi9zaGFyZWRzL3BpcGVzL2luZm9ybWF0aW9uLXR5cGUtdG8tc3RyaW5nLnBpcGUnO1xyXG5pbXBvcnQgeyBJbmZvcm1hdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zaGFyZWRzL2VudW1zL2luZm9ybWF0aW9uLXR5cGUuZW51bSc7XHJcblxyXG5pbnRlcmZhY2UgQXR0YWNobWVudER0byB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlcG9ydERhdGEge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgaW5mbzogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIHN0YXR1cz86IG51bWJlcjtcclxuICB0eXBlOiBudW1iZXIgfCBzdHJpbmc7ICAgICAgICAgICAgICBcclxuICBpZFNjYW1UeXBlQWZ0ZXJIYW5kbGU/OiBudW1iZXI7XHJcbiAgZW1haWxBdXRob3JSZXBvcnQ6IHN0cmluZztcclxuICByZWFzb246IHN0cmluZztcclxuICBpbmZvRGVzY3JpcHRpb246IHN0cmluZztcclxuICBkYXRlUmVwb3J0Pzogc3RyaW5nO1xyXG4gIGF0dGFjaG1lbnREdG86IEF0dGFjaG1lbnREdG9bXTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWRldGFpbC1yZXBvcnQnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgSW5mb3JtYXRpb25UeXBlVG9TdHJpbmdQaXBlICAgICBcclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXRhaWwtcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kZXRhaWwtcmVwb3J0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERldGFpbFJlcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHJlcG9ydDogUmVwb3J0RGF0YSA9IHtcclxuICAgIGlkOiAwLFxyXG4gICAgaW5mbzogJycsXHJcbiAgICB0eXBlOiAwLFxyXG4gICAgZW1haWxBdXRob3JSZXBvcnQ6ICcnLFxyXG4gICAgcmVhc29uOiAnJyxcclxuICAgIGluZm9EZXNjcmlwdGlvbjogJycsXHJcbiAgICBhdHRhY2htZW50RHRvOiBbXVxyXG4gIH07XHJcblxyXG4gIGlzTG9hZGluZyA9IHRydWU7XHJcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBzZWxlY3RlZEltYWdlVXJsOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqIFVSTCBn4buRYyBs4bqleSDhuqNuaCAodGhheSBi4bqxbmcgZG9tYWluIHRo4buxYyB04bq/IGPhu6dhIGLhuqFuKSAqL1xyXG4gIHJlYWRvbmx5IGltYWdlQmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL3JlcG9ydC9pbWFnZS8nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVwb3J0U2VydmljZTogUmVwb3J0U2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgKSB7IH1cclxuXHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLSBsaWZl4oCRY3ljbGUgLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaWRQYXJhbSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgaWYgKCFpZFBhcmFtKSB7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0tow7RuZyB0w6xtIHRo4bqleSBJRCBiw6FvIGPDoW8gdHJvbmcgVVJMLic7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpZCA9IE51bWJlcihpZFBhcmFtKTtcclxuICAgIGlmIChpc05hTihpZCkpIHtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnSUQgYsOhbyBjw6FvIGtow7RuZyBo4bujcCBs4buHLic7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubG9hZFJlcG9ydEJ5SWQoaWQpO1xyXG4gIH1cclxuXHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLSBnZXR0ZXIgLyBoZWxwZXIgLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIC8qKiDDiXAga2nhu4N1IGByZXBvcnQudHlwZWDCoOKGkiBlbnVtOyBu4bq/dSBzYWkgdGjDrCB0cuG6oyB24buBIFBob25lTnVtYmVyIG3hurdjIMSR4buLbmggKi9cclxuICBnZXQgcmVwb3J0VHlwZUVudW0oKTogSW5mb3JtYXRpb25UeXBlIHtcclxuICAgIGNvbnN0IHZhbCA9IE51bWJlcih0aGlzLnJlcG9ydC50eXBlKTtcclxuICAgIHJldHVybiBpc05hTih2YWwpID8gSW5mb3JtYXRpb25UeXBlLlBob25lTnVtYmVyIDogdmFsIGFzIEluZm9ybWF0aW9uVHlwZTtcclxuICB9XHJcblxyXG4gIC8qKiBM4bqleSBVUkwg4bqjbmggZ+G7kWMgdOG7qyBhdHRhY2htZW50ICovXHJcbiAgZ2V0SW1hZ2VVcmwoYXR0YWNobWVudDogQXR0YWNobWVudER0byk6IHN0cmluZyB7XHJcbiAgICBpZiAoIWF0dGFjaG1lbnQ/LnVybCkgcmV0dXJuICdhc3NldHMvaW1nL3BsYWNlaG9sZGVyLnBuZyc7XHJcblxyXG4gICAgY29uc3QgZmlsZU5hbWUgPSBhdHRhY2htZW50LnVybC5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgaWYgKCFmaWxlTmFtZSkgcmV0dXJuICdhc3NldHMvaW1nL3BsYWNlaG9sZGVyLnBuZyc7XHJcblxyXG4gICAgcmV0dXJuIGAke3RoaXMuaW1hZ2VCYXNlVXJsfSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKX1gO1xyXG4gIH1cclxuXHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLSBjYWxsIEFQSSAtLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgcHJpdmF0ZSBsb2FkUmVwb3J0QnlJZChpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5yZXBvcnRTZXJ2aWNlLmdldFJlcG9ydEJ5SWQoaWQpLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnS2jDtG5nIG5o4bqtbiDEkcaw4bujYyBk4buvIGxp4buHdSBiw6FvIGPDoW8gaOG7o3AgbOG7hyB04burIEFQSS4nO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0YS5hdHRhY2htZW50RHRvID0gQXJyYXkuaXNBcnJheShkYXRhLmF0dGFjaG1lbnREdG8pID8gZGF0YS5hdHRhY2htZW50RHRvIDogW107XHJcbiAgICAgICAgZGF0YS50eXBlID0gTnVtYmVyKGRhdGEudHlwZSk7XHJcbiAgICAgICAgdGhpcy5yZXBvcnQgPSBkYXRhO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZXJyID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9XHJcbiAgICAgICAgICBgTOG7l2kga2hpIHThuqNpIGLDoW8gY8OhbzogJHtlcnIuZXJyb3I/Lm1lc3NhZ2UgfHwgZXJyLm1lc3NhZ2UgfHwgJ0zhu5dpIGtow7RuZyB4w6FjIMSR4buLbmgnfWA7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiAodGhpcy5pc0xvYWRpbmcgPSBmYWxzZSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLSBsaWdodGJveCAtLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgb3BlbkltYWdlKHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSB1cmw7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7ICAgXHJcbiAgfVxyXG5cclxuICBjbG9zZUltYWdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEltYWdlVXJsID0gbnVsbDtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLmVzY2FwZScpXHJcbiAgb25Fc2NLZXkoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEltYWdlVXJsKSB0aGlzLmNsb3NlSW1hZ2UoKTtcclxuICB9XHJcblxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0gaW1hZ2UgZXJyb3IgLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIG9uSW1hZ2VFcnJvcihldjogRXZlbnQpOiB2b2lkIHtcclxuICAgIChldi50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudCkuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtZXJyb3ItcGxhY2Vob2xkZXInKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC00IGQtZmxleCBmbGV4LWNvbHVtbiBnYXAtMiBjZW50ZXJlZC1jb250YWluZXJcIj5cclxuICAgIDwhLS0gTG9hZGluZyAtLT5cclxuICAgIDxkaXYgKm5nSWY9XCJpc0xvYWRpbmdcIiBjbGFzcz1cInRleHQtY2VudGVyIHAtNVwiPlxyXG4gICAgICAgIDxwPsSQYW5nIHThuqNpIGThu68gbGnhu4d1IGLDoW8gY8Ohby4uLjwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1wcmltYXJ5XCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIEzhu5dpIC0tPlxyXG4gICAgPGRpdiAqbmdJZj1cIiFpc0xvYWRpbmcgJiYgZXJyb3JNZXNzYWdlXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIgdy0xMDBcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICB7eyBlcnJvck1lc3NhZ2UgfX1cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gTuG7mWkgZHVuZyAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNMb2FkaW5nICYmICFlcnJvck1lc3NhZ2UgJiYgcmVwb3J0LmlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcC00IHctMTAwXCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVwb3J0LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbmZvLXRleHRcIj5UaMO0bmcgdGluIGxpw6puIHF1YW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGg0IGlkPVwiaW5mby10ZXh0XCIgY2xhc3M9XCJmdy1ib2xkIHJlcG9ydC12YWx1ZVwiPnt7IHJlcG9ydC5pbmZvIH19PC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVwb3J0LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0eXBlLXRleHRcIj5Mb+G6oWkgdGjDtG5nIHRpbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cInR5cGUtdGV4dFwiIGNsYXNzPVwicmVwb3J0LXZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgcmVwb3J0VHlwZUVudW0gfCBpbmZvcm1hdGlvblR5cGVUb1N0cmluZyB9fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXBvcnQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImF1dGhvci1lbWFpbFwiPk5nxrDhu51pIGfhu61pPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwiYXV0aG9yLWVtYWlsXCIgY2xhc3M9XCJyZXBvcnQtdmFsdWVcIj57eyByZXBvcnQuZW1haWxBdXRob3JSZXBvcnQgfX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlcG9ydC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVhc29uLXRleHRcIj5Iw6xuaCB0aOG7qWMgbOG7q2EgxJHhuqNvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwicmVhc29uLXRleHRcIiBjbGFzcz1cInJlcG9ydC12YWx1ZVwiPnt7IHJlcG9ydC5yZWFzb24gfX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlcG9ydC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb24tdGV4dFwiPk3DtCB04bqjIGNoaSB0aeG6v3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJkZXNjcmlwdGlvbi10ZXh0XCIgY2xhc3M9XCJyZXBvcnQtdmFsdWVcIj57eyByZXBvcnQuaW5mb0Rlc2NyaXB0aW9uIH19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXBvcnQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImF0dGFjaG1lbnRzLXNlY3Rpb25cIj5U4buHcCDEkcOtbmgga8OobTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImF0dGFjaG1lbnRzLXNlY3Rpb25cIiBjbGFzcz1cImF0dGFjaG1lbnRzLWNvbnRhaW5lciBtdC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInJlcG9ydC5hdHRhY2htZW50RHRvLmxlbmd0aCA+IDA7IGVsc2Ugbm9BdHRhY2htZW50c1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhdHRhY2htZW50IG9mIHJlcG9ydC5hdHRhY2htZW50RHRvXCIgY2xhc3M9XCJhdHRhY2htZW50LWl0ZW0gbWItM1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cImdldEltYWdlVXJsKGF0dGFjaG1lbnQpXCIgW2FsdF09XCJhdHRhY2htZW50LnVybC5zcGxpdCgnLycpLnBvcCgpIHx8ICfEkMOtbmgga8OobSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWQgcm91bmRlZCByZXBvcnQtaW1hZ2VcIiAoY2xpY2spPVwib3BlbkltYWdlKGdldEltYWdlVXJsKGF0dGFjaG1lbnQpKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPVwib25JbWFnZUVycm9yKCRldmVudClcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZCBzbWFsbCBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBhdHRhY2htZW50LnVybC5zcGxpdCgnLycpLnBvcCgpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm9BdHRhY2htZW50cz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlcG9ydC12YWx1ZVwiPktow7RuZyBjw7MgdOG7h3AgxJHDrW5oIGvDqG0uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PiA8IS0tIC8uY2FyZCAtLT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYWxpZ24tc2VsZi1lbmQgbXQtMyBtYi0zXCIgcm91dGVyTGluaz1cIi9hZG1pbi9yZXBvcnRzXCI+XHJcbiAgICAgICAgVHLhu58gbOG6oWlcclxuICAgIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcbjwhLS0gT3ZlcmxheSB4ZW0g4bqjbmggbOG7m24gLS0+XHJcbjxkaXYgY2xhc3M9XCJpbWFnZS1vdmVybGF5XCIgKm5nSWY9XCJzZWxlY3RlZEltYWdlVXJsXCIgKGNsaWNrKT1cImNsb3NlSW1hZ2UoKVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImltYWdlLW92ZXJsYXlfX2NvbnRlbnRcIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpbWFnZS1vdmVybGF5X19jbG9zZVwiIGFyaWEtbGFiZWw9XCLEkMOzbmdcIiAoY2xpY2spPVwiY2xvc2VJbWFnZSgpXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8aW1nIFtzcmNdPVwic2VsZWN0ZWRJbWFnZVVybFwiIGFsdD1cIuG6om5oIHBow7NuZyB0b1wiIGNsYXNzPVwiaW1hZ2Utb3ZlcmxheV9faW1nXCI+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nQ2hhcnRzTW9kdWxlIH0gZnJvbSAnbmcyLWNoYXJ0cyc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcnRPcHRpb25zLFxyXG4gIENoYXJ0VHlwZSxcclxuICBDaGFydERhdGEsXHJcbiAgQ2hhcnREYXRhc2V0XHJcbn0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBSZXBvcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVwb3J0LnNlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIFllYXJseVN0YXQgeyB5ZWFyOiBudW1iZXI7IGNvdW50OiBudW1iZXI7IH1cclxuaW50ZXJmYWNlIE1vbnRobHlTdGF0IHsgbW9udGg6IG51bWJlcjsgY291bnQ6IG51bWJlcjsgfVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZGFzaGJvYXJkJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTmdDaGFydHNNb2R1bGUgXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgeWVhcmx5Q2hhcnRUeXBlOiBDaGFydFR5cGUgPSAnYmFyJztcclxuICBwdWJsaWMgeWVhcmx5Q2hhcnREYXRhITogQ2hhcnREYXRhPCdiYXInPjtcclxuICBwdWJsaWMgeWVhcmx5Q2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICBwbHVnaW5zOiB7XHJcbiAgICAgIGxlZ2VuZDogeyBkaXNwbGF5OiBmYWxzZSB9LFxyXG4gICAgICB0b29sdGlwOiB7IGNhbGxiYWNrczogeyBsYWJlbDogY3R4ID0+IGBCw6FvIGPDoW86ICR7Y3R4LnBhcnNlZC55fWAgfSB9XHJcbiAgICB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHg6IHsgdGl0bGU6IHsgZGlzcGxheTogdHJ1ZSwgdGV4dDogJ07Eg20nIH0sIGdyaWQ6IHsgZGlzcGxheTogZmFsc2UgfSwgYm9yZGVyOiB7IGRpc3BsYXk6IGZhbHNlIH0gfSxcclxuICAgICAgeTogeyB0aXRsZTogeyBkaXNwbGF5OiB0cnVlLCB0ZXh0OiAnU+G7kSBiw6FvIGPDoW8nIH0sIGJlZ2luQXRaZXJvOiB0cnVlLCB0aWNrczogeyBzdGVwU2l6ZTogMSB9LCBncmlkOiB7IGNvbG9yOiAncmdiYSgwLDAsMCwwLjA1KScgfSwgYm9yZGVyOiB7IGRpc3BsYXk6IGZhbHNlIH0gfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBtb250aGx5Q2hhcnRUeXBlOiBDaGFydFR5cGUgPSAnbGluZSc7XHJcbiAgcHVibGljIG1vbnRobHlDaGFydERhdGEhOiBDaGFydERhdGE8J2xpbmUnPjtcclxuICBwdWJsaWMgbW9udGhseUNoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgcGx1Z2luczoge1xyXG4gICAgICBsZWdlbmQ6IHsgZGlzcGxheTogZmFsc2UgfSxcclxuICAgICAgdG9vbHRpcDogeyBjYWxsYmFja3M6IHsgbGFiZWw6IGN0eCA9PiBgQsOhbyBjw6FvOiAke2N0eC5wYXJzZWQueX1gIH0gfVxyXG4gICAgfSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB4OiB7IHRpdGxlOiB7IGRpc3BsYXk6IHRydWUsIHRleHQ6ICdUaMOhbmcnIH0sIGdyaWQ6IHsgZGlzcGxheTogZmFsc2UgfSwgYm9yZGVyOiB7IGRpc3BsYXk6IGZhbHNlIH0gfSxcclxuICAgICAgeTogeyB0aXRsZTogeyBkaXNwbGF5OiB0cnVlLCB0ZXh0OiAnU+G7kSBiw6FvIGPDoW8nIH0sIGJlZ2luQXRaZXJvOiB0cnVlLCB0aWNrczogeyBzdGVwU2l6ZTogMSB9LCBncmlkOiB7IGRpc3BsYXk6IHRydWUsIGNvbG9yOiAncmdiYSgwLDAsMCwwLjEpJywgbGluZVdpZHRoOiAxLCBkcmF3VGlja3M6IGZhbHNlIH0sIGJvcmRlcjogeyBkaXNwbGF5OiBmYWxzZSB9IH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwdWJsaWMgYXZhaWxhYmxlWWVhcnM6IG51bWJlcltdID0gW107XHJcbiAgcHVibGljIHNlbGVjdGVkWWVhciE6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXBvcnRTZXJ2aWNlOiBSZXBvcnRTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVwb3J0U2VydmljZS5nZXRZZWFybHlTdGF0cygpLnN1YnNjcmliZSgoc3RhdHM6IFllYXJseVN0YXRbXSkgPT4ge1xyXG4gICAgICBzdGF0cy5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIpO1xyXG5cclxuICAgICAgdGhpcy5hdmFpbGFibGVZZWFycyA9IHN0YXRzLm1hcChzID0+IHMueWVhcik7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRZZWFyID0gdGhpcy5hdmFpbGFibGVZZWFyc1t0aGlzLmF2YWlsYWJsZVllYXJzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgY29uc3QgcmVjZW50U3RhdHMgPSBzdGF0cy5zbGljZSgtNSk7XHJcbiAgICAgIHRoaXMubG9hZFllYXJseUNoYXJ0KHJlY2VudFN0YXRzKTtcclxuXHJcbiAgICAgIHRoaXMubG9hZE1vbnRobHlDaGFydCh0aGlzLnNlbGVjdGVkWWVhcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFllYXJseUNoYXJ0KHN0YXRzOiBZZWFybHlTdGF0W10pOiB2b2lkIHtcclxuICAgIGNvbnN0IGxhYmVscyA9IHN0YXRzLm1hcChzID0+IHMueWVhci50b1N0cmluZygpKTtcclxuICAgIGNvbnN0IGRhdGEgPSBzdGF0cy5tYXAocyA9PiBzLmNvdW50KTtcclxuICAgIGNvbnN0IGRzOiBDaGFydERhdGFzZXQ8J2Jhcic+ID0geyBkYXRhLCBsYWJlbDogJ1Phu5EgYsOhbyBjw6FvJywgYmFja2dyb3VuZENvbG9yOiAnIzM4YmRmOCcsIGJvcmRlckNvbG9yOiAnIzBlYTVlOScsIGJvcmRlcldpZHRoOiAxLCBib3JkZXJSYWRpdXM6IDQgfTtcclxuICAgIHRoaXMueWVhcmx5Q2hhcnREYXRhID0geyBsYWJlbHMsIGRhdGFzZXRzOiBbZHNdIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZE1vbnRobHlDaGFydCh5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMucmVwb3J0U2VydmljZS5nZXRNb250aGx5U3RhdHMoeWVhcikuc3Vic2NyaWJlKChzdGF0czogTW9udGhseVN0YXRbXSkgPT4ge1xyXG4gICAgICBjb25zdCBtYXAgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xyXG4gICAgICBzdGF0cy5mb3JFYWNoKHMgPT4gbWFwLnNldChzLm1vbnRoLCBzLmNvdW50KSk7XHJcblxyXG4gICAgICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIGNvbnN0IGRhdGE6IG51bWJlcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IG0gPSAxOyBtIDw9IDEyOyBtKyspIHtcclxuICAgICAgICBsYWJlbHMucHVzaChgVGjDoW5nICR7bX1gKTtcclxuICAgICAgICBkYXRhLnB1c2gobWFwLmdldChtKSA/PyAwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZHM6IENoYXJ0RGF0YXNldDwnbGluZSc+ID0geyBkYXRhLCBsYWJlbDogJ1Phu5EgYsOhbyBjw6FvJywgZmlsbDogZmFsc2UsIGJvcmRlckNvbG9yOiAnIzM4YmRmOCcsIHRlbnNpb246IDAuMywgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjMzhiZGY4JyB9O1xyXG4gICAgICB0aGlzLm1vbnRobHlDaGFydERhdGEgPSB7IGxhYmVscywgZGF0YXNldHM6IFtkc10gfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uWWVhckNoYW5nZSh5ZWFyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRZZWFyID0gK3llYXI7XHJcbiAgICB0aGlzLmxvYWRNb250aGx5Q2hhcnQodGhpcy5zZWxlY3RlZFllYXIpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY2FyZCBzaGFkb3cgbWItNFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIHB5LTNcIj5cclxuICAgIDxoNiBjbGFzcz1cIm0tMCBmb250LXdlaWdodC1ib2xkIHRleHQtcHJpbWFyeVwiPkLDoW8gY8OhbyB0aGVvIFRow6FuZzwvaDY+XHJcbiAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1zZWxlY3Qgdy1hdXRvXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFllYXJcIiAobmdNb2RlbENoYW5nZSk9XCJvblllYXJDaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB5IG9mIGF2YWlsYWJsZVllYXJzXCIgW3ZhbHVlXT1cInlcIj5OxINtIHt7IHkgfX08L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgaGVpZ2h0OiAzMDBweDtcIj5cclxuICAgIDxjYW52YXNcclxuICAgICAgYmFzZUNoYXJ0XHJcbiAgICAgIFtkYXRhXT1cIm1vbnRobHlDaGFydERhdGFcIlxyXG4gICAgICBbb3B0aW9uc109XCJtb250aGx5Q2hhcnRPcHRpb25zXCJcclxuICAgICAgW3R5cGVdPVwibW9udGhseUNoYXJ0VHlwZVwiPlxyXG4gICAgPC9jYW52YXM+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiY2FyZCBzaGFkb3cgbWItNFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBweS0zXCI+XHJcbiAgICA8aDYgY2xhc3M9XCJtLTAgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXByaW1hcnlcIj5Cw6FvIGPDoW8gdGhlbyBOxINtPC9oNj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogMzAwcHg7XCI+XHJcbiAgICA8Y2FudmFzXHJcbiAgICAgIGJhc2VDaGFydFxyXG4gICAgICBbZGF0YV09XCJ5ZWFybHlDaGFydERhdGFcIlxyXG4gICAgICBbb3B0aW9uc109XCJ5ZWFybHlDaGFydE9wdGlvbnNcIlxyXG4gICAgICBbdHlwZV09XCJ5ZWFybHlDaGFydFR5cGVcIj5cclxuICAgIDwvY2FudmFzPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJMaW5rIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJzsgXHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7IFxyXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFib3V0LXVzJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUsIEhlYWRlckNvbXBvbmVudF0sIFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hYm91dC11cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWJvdXQtdXMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRVc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIELhuqFuIGPDsyB0aOG7gyB0aMOqbSBsb2dpYyBraOG7n2kgdOG6oW8gZOG7ryBsaeG7h3Ug4bufIMSRw6J5IG7hur91IGPhuqduXHJcbiAgfVxyXG5cclxuICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICB9XHJcblxyXG59IiwiPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPiA8ZGl2IGNsYXNzPVwiYWJvdXQtdXMtcGFnZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJiYWNrLWJ1dHRvblwiIChjbGljayk9XCJnb0JhY2soKVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImJhY2stYXJyb3dcIj7ihpA8L3NwYW4+IFF1YXkgbOG6oWlcclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxoZWFkZXIgY2xhc3M9XCJwYWdlLWhlYWRlclwiPlxyXG4gICAgICA8aDE+VuG7gSBjaMO6bmcgdMO0aTwvaDE+XHJcbiAgICAgIDxwIGNsYXNzPVwiYXV0aG9yLWRhdGVcIj5cclxuICAgICAgICBWaeG6v3QgYuG7n2k6IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXRleHRcIj7EkOG7mWkgbmfFqSBDaGVja1NjYW08L3NwYW4+IHwgTmfDoHk6IDA2LzEzLzIwMjVcclxuICAgICAgPC9wPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24tYmxvY2sgaW50cm8tc2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1pY29uXCI+8J+MkDwvZGl2PlxyXG4gICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+R2nhu5tpIFRoaeG7h3UgQ2h1bmc8L2gyPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8c3Ryb25nPkNoZWNrU2NhbSAoQ1MpPC9zdHJvbmc+IGzDoCBt4buZdCBk4buxIMOhbiBwaGkgbOG7o2kgbmh14bqtbiBj4bunYSBWaeG7h3QgTmFtLCBjaMOtbmggdGjhu6ljIGhv4bqhdCDEkeG7mW5nIHThu6sgbmfDoHlcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1kYXRlXCI+MDEgdGjDoW5nIDA3IG7Eg20gMjAyNTwvc3Bhbj4sIHbhu5tpIHPhu6kgbeG7h25oIGNhbyBj4bqjOlxyXG4gICAgICAgICoqYuG6o28gduG7hyBuZ8aw4budaSBkw7luZyB0csOqbiBtw7RpIHRyxrDhu51uZyB0cuG7sWMgdHV54bq/bi4qKiBDaMO6bmcgdMO0aSBjYW0ga+G6v3Qga2nhu4NtIHRyYSDEkeG7mSB0aW4gY+G6rXkgY+G7p2EgY8OhYyB0cmFuZyB3ZWIgdsOgXHJcbiAgICAgICAgbmfEg24gY2jhurduIHRydXkgY+G6rXAgdsOgbyBuaOG7r25nIG5ndeG7k24ga2jDtG5nIGFuIHRvw6BuLCBnw7NwIHBo4bqnbiB4w6J5IGThu7FuZyBt4buZdCBraMO0bmcgZ2lhbiBt4bqhbmcgbMOgbmggbeG6oW5oIGjGoW4gY2hvIG3hu41pIG5nxrDhu51pLlxyXG4gICAgICA8L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uLWJsb2NrIG1pc3Npb24tc2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1pY29uXCI+8J+OrzwvZGl2PlxyXG4gICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+U+G7qSBN4buHbmggdsOgIEhv4bqhdCDEkOG7mW5nPC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgROG7sSDDoW4gY3VuZyBj4bqlcCBjw6FjIHRow7RuZyB0aW4gY+G6o25oIGLDoW8gbOG7q2EgxJHhuqNvIHbDoCBnaeG6o2kgcGjDoXAgYuG6o28gbeG6rXQgdG/DoG4gZGnhu4duLCBnacO6cCBuZ8aw4budaSBkw7luZyBk4buFIGTDoG5nXHJcbiAgICAgICAgbmjhuq1uIGRp4buHbiB2w6AgY2jhu6cgxJHhu5luZyB0csOhbmggeGEgY8OhYyB0cmFuZyB3ZWIgbOG7q2EgxJHhuqNvLCDEkeG7mWMgaOG6oWkgdHLDqm4gbmhp4buBdSBu4buBbiB04bqjbmcgcGjhu5UgYmnhur9uIG5oxrBcclxuICAgICAgICAqKkZhY2Vib29rLCBZb3VUdWJlLCBUaWtUb2sqKiB2w6AgY8OhYyBrw6puaCB0cuG7sWMgdHV54bq/biBraMOhYy4gQ2hlY2tTY2FtIHRpw6puIHBob25nIMOhcCBk4bulbmdcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC10ZWNoXCI+Y8O0bmcgbmdo4buHIFRyw60gdHXhu4cgTmjDom4gdOG6oW8gKEFJKSB2w6AgSOG7jWMgbcOheSAoTWFjaGluZSBMZWFybmluZyAtIE1MKTwvc3Bhbj5cclxuICAgICAgICB0acOqbiB0aeG6v24sIGvhur90IGjhu6NwIGNo4bq3dCBjaOG6vSB24bubaSBz4buxIMSRw7NuZyBnw7NwIHF1w70gYsOhdSB04burIGPhu5luZyDEkeG7k25nLCBuaOG6sW0geMOieSBk4buxbmcgdsOgIGR1eSB0csOsIG3hu5l0IGPGoSBz4bufIGThu68gbGnhu4d1IGzhu6thIMSR4bqjbyBraOG7lW5nIGzhu5MsIGPhuq1wIG5o4bqtdCBsacOqbiB04bulYy5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICBN4buXaSBiw6FvIGPDoW8sIG3hu5dpIGThu68gbGnhu4d1IMSRxrDhu6NjIGPhu5luZyDEkeG7k25nIGN1bmcgY+G6pXAgxJHhu4F1IGzDoCBt4bqjbmggZ2jDqXAgcXVhbiB0cuG7jW5nLCBnacO6cCBo4buHIHRo4buRbmcgQUkgY+G7p2EgY2jDum5nIHTDtGlcclxuICAgICAgICB0cuG7nyBuw6puIHRow7RuZyBtaW5oIGjGoW4sIHBow6F0IGhp4buHbiBs4burYSDEkeG6o28gY2jDrW5oIHjDoWMgaMahbi5cclxuICAgICAgPC9wPlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi1ibG9jayB0ZWFtLXNlY3Rpb25cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taWNvblwiPvCfpJ08L2Rpdj5cclxuICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPsSQ4buZaSBOZ8WpIFBow6F0IFRyaeG7g248L2gyPlxyXG4gICAgICA8cD5cclxuICAgICAgICBDaGVja1NjYW0gxJHGsOG7o2MgeMOieSBk4buxbmcgdsOgIHbhuq1uIGjDoG5oIGLhu59pIG3hu5l0IMSR4buZaSBuZ8WpIMSRYW0gbcOqLCB0w6JtIGh1eeG6v3QgduG7m2kgbeG7pWMgdGnDqnUgdOG6oW8gcmEgZ2nDoSB0cuG7iyBjaG8gY+G7mW5nIMSR4buTbmcuXHJcbiAgICAgICAgQ2jDum5nIHTDtGkgbMOgIG5o4buvbmcgY2h1ecOqbiBnaWEgdHJvbmcgbMSpbmggduG7sWMgY8O0bmcgbmdo4buHIHRow7RuZyB0aW4sIGFuIHRvw6BuIHRow7RuZyB0aW4gdsOgIHBow6JuIHTDrWNoIGThu68gbGnhu4d1LlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLWNpcmNsZXMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0tY2lyY2xlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWltYWdlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwicGF0aC90by9hdXRob3JfaW1hZ2VfMS5qcGdcIiBhbHQ9XCJUaMOgbmggdmnDqm4gMVwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm1lbWJlci1uYW1lXCI+QW5kZXY8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm1lbWJlci10aXRsZVwiPlRyxrDhu59uZyBk4buxIMOhbjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbS1jaXJjbGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJwYXRoL3RvL2F1dGhvcl9pbWFnZV8yLmpwZ1wiIGFsdD1cIlRow6BuaCB2acOqbiAyXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibWVtYmVyLW5hbWVcIj5EdWM8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm1lbWJlci10aXRsZVwiPlRyxrDhu59uZyBk4buxIMOhbjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbS1jaXJjbGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJwYXRoL3RvL2F1dGhvcl9pbWFnZV8zLmpwZ1wiIGFsdD1cIlRow6BuaCB2acOqbiAzXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibWVtYmVyLW5hbWVcIj5UcmFuZzwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibWVtYmVyLXRpdGxlXCI+VHLGsOG7n25nIGThu7Egw6FuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi1ibG9jayBjb21tdW5pdHktc2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1pY29uXCI+8J+TozwvZGl2PlxyXG4gICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+S8OqdSBH4buNaSBD4buZbmcgxJDhu5NuZzwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIENoZWNrU2NhbSBsw6AgbeG7mXQgZOG7sSDDoW4gbeG7nywgbHXDtG4gY2jDoG8gxJHDs24gc+G7sSDEkcOzbmcgZ8OzcCB04burIG3hu41pIGPDoSBuaMOibiB2w6AgdOG7lSBjaOG7qWMuIFPhu7EgdGhhbSBnaWEgY+G7p2EgY+G7mW5nIMSR4buTbmdcclxuICAgICAgICBsw6AgeeG6v3UgdOG7kSB0aGVuIGNo4buRdCBnacO6cCBjaMO6bmcgdMO0aSBob8OgbiB0aGnhu4duIHPhuqNuIHBo4bqpbSwgbsOibmcgY2FvIGto4bqjIG7Eg25nIGLhuqNvIHbhu4cgbmfGsOG7nWkgZMO5bmcgdHLGsOG7m2NcclxuICAgICAgICBjw6FjIG3hu5FpIMSRZSBk4buNYSB0cuG7sWMgdHV54bq/biBuZ8OgeSBjw6BuZyB0aW5oIHZpLiBIw6N5IGPDuW5nIGNodW5nIHRheSB4w6J5IGThu7FuZyBt4buZdCBj4buZbmcgxJHhu5NuZyBt4bqhbmcgYW4gdG/DoG4gdsOgIMSRw6FuZyB0aW4gY+G6rXkhXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8veW91ci1jb250cmlidXRpb24tbGluay5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgVMOsbSBoaeG7g3UgY8OhY2ggxJHDs25nIGfDs3BcclxuICAgICAgPC9hPlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi1ibG9jayBjb250YWN0LXNlY3Rpb25cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taWNvblwiPuKcie+4jzwvZGl2PlxyXG4gICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+S+G6v3QgTuG7kWkgVuG7m2kgQ2jDum5nIFTDtGk8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1pbmZvXCI+XHJcbiAgICAgICAgPHA+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4gPGEgaHJlZj1cIm1haWx0bzpjb250YWN0JiM2NDtjaGVja3NjYW0udm5cIj5jb250YWN0JiM2NDtjaGVja3NjYW0udm48L2E+PC9wPlxyXG4gICAgICAgIDxwPjxzdHJvbmc+xJBp4buHbiB0aG/huqFpOjwvc3Ryb25nPiA8YSBocmVmPVwidGVsOis4NDEyMzQ1Njc4OVwiPis4NCAxMjMgNDU2IDc4OTwvYT4gKENo4buJIGdp4budIGjDoG5oIGNow61uaCk8L3A+XHJcbiAgICAgICAgPHA+PHN0cm9uZz5GYW5wYWdlIEZhY2Vib29rOjwvc3Ryb25nPiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2NoZWNrc2NhbS5vZmZpY2lhbFwiIHRhcmdldD1cIl9ibGFua1wiPkNoZWNrU2NhbSBPZmZpY2lhbDwvYT48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgPGZvb3RlciBjbGFzcz1cInBhZ2UtZm9vdGVyXCI+XHJcbiAgICAgIDxwPkPhuqNtIMahbiBi4bqhbiDEkcOjIHRpbiB0xrDhu59uZyB2w6AgxJHhu5NuZyBow6BuaCBjw7luZyBDaGVja1NjYW0uPC9wPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBOZXdzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25ld3Muc2VydmljZSc7XHJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGF0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2hhdC1ib3gvY2hhdC1ib3guY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIEF0dGFjaG1lbnREdG8ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdXJsPzogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdmlldy1uZXdzJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgQ2hhdEJveENvbXBvbmVudCxcclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LW5ld3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xpc3QtbmV3cy5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdE5ld3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qIFRpbiB04bupYyAqL1xyXG4gIHBvc3RzOiBhbnlbXSA9IFtdO1xyXG4gIHBhZ2VkUG9zdHM6IGFueVtdID0gW107XHJcblxyXG4gIC8qIFBow6JuIHRyYW5nICovXHJcbiAgcGFnZVNpemUgPSA2O1xyXG4gIGN1cnJlbnRQYWdlID0gMTtcclxuICB0b3RhbFBvc3RzID0gMDtcclxuICB0b3RhbFBhZ2VzID0gMDtcclxuICBwYWdlczogbnVtYmVyW10gPSBbXTtcclxuICBzdGFydEluZGV4ID0gMDtcclxuICBlbmRJbmRleCA9IDA7XHJcblxyXG4gIC8qIFTDrG0ga2nhur9tICovXHJcbiAgc2VhcmNoVGVybSA9ICcnO1xyXG5cclxuICAvKiBDaGF0ICovXHJcbiAgc2hvd0NoYXRib3ggPSBmYWxzZTtcclxuXHJcbiAgLyogVVJMIOG6o25oICovXHJcbiAgcmVhZG9ubHkgaW1hZ2VCYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvcmVwb3J0L2ltYWdlLyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuZXdzU2VydmljZTogTmV3c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICkge31cclxuXHJcbiAgLyogPT09PT0gTGlmZWN5Y2xlID09PT09ICovXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRBbGxOZXdzKCk7XHJcbiAgfVxyXG5cclxuICAvKiA9PT09PSBBUEkgPT09PT0gKi9cclxuICBsb2FkQWxsTmV3cygpOiB2b2lkIHtcclxuICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0TGlzdE5ld3MoKS5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wb3N0cyA9IHJlcztcclxuICAgICAgICB0aGlzLnRvdGFsUG9zdHMgPSB0aGlzLnBvc3RzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcclxuICAgICAgICB0aGlzLnBhZ2luYXRlUG9zdHMoKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlcnIpID0+IGFsZXJ0KGVycj8uZXJyb3IgfHwgJ0zhu5dpIGtoaSB04bqjaSBkYW5oIHPDoWNoIHRpbiB04bupYycpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiA9PT09PSDhuqJuaCA9PT09PSAqL1xyXG4gIGdldEltYWdlVXJsKHsgdXJsIH06IEF0dGFjaG1lbnREdG8pOiBzdHJpbmcge1xyXG4gICAgaWYgKCF1cmwpIHJldHVybiAnYXNzZXRzL2ltZy9wbGFjZWhvbGRlci5wbmcnO1xyXG5cclxuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aCgnaHR0cCcpXHJcbiAgICAgID8gdXJsXHJcbiAgICAgIDogYCR7dGhpcy5pbWFnZUJhc2VVcmx9JHtlbmNvZGVVUklDb21wb25lbnQodXJsKX1gO1xyXG4gIH1cclxuXHJcbiAgb25JbWFnZUVycm9yKGV2OiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW1nID0gZXYudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBpZiAoIWltZy5zcmMuaW5jbHVkZXMoJ3BsYWNlaG9sZGVyLnBuZycpKSB7XHJcbiAgICAgIGltZy5zcmMgPSAnYXNzZXRzL2ltZy9wbGFjZWhvbGRlci5wbmcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogPT09PT0gVMOsbSBraeG6v20gJiBwaMOibiB0cmFuZyA9PT09PSAqL1xyXG4gIHNlYXJjaFBvc3RzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICB0aGlzLnBhZ2luYXRlUG9zdHMoKTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlUG9zdHMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5zZWFyY2hUZXJtXHJcbiAgICAgID8gdGhpcy5wb3N0cy5maWx0ZXIoKHApID0+XHJcbiAgICAgICAgICBwLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSksXHJcbiAgICAgICAgKVxyXG4gICAgICA6IHRoaXMucG9zdHM7XHJcblxyXG4gICAgdGhpcy50b3RhbFBvc3RzID0gbGlzdC5sZW5ndGg7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSAodGhpcy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZTtcclxuICAgIHRoaXMuZW5kSW5kZXggPSBNYXRoLm1pbihcclxuICAgICAgdGhpcy5zdGFydEluZGV4ICsgdGhpcy5wYWdlU2l6ZSAtIDEsXHJcbiAgICAgIHRoaXMudG90YWxQb3N0cyAtIDEsXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucGFnZWRQb3N0cyA9IGxpc3Quc2xpY2UodGhpcy5zdGFydEluZGV4LCB0aGlzLmVuZEluZGV4ICsgMSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYWdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHBhZ2UgPj0gMSAmJiBwYWdlIDw9IHRoaXMudG90YWxQYWdlcykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgdGhpcy5wYWdpbmF0ZVBvc3RzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVUb3RhbFBhZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMudG90YWxQb3N0cyAvIHRoaXMucGFnZVNpemUpO1xyXG4gICAgdGhpcy5wYWdlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMudG90YWxQYWdlcyB9LCAoXywgaSkgPT4gaSArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyogPT09PT0gQ2hhdCA9PT09PSAqL1xyXG4gIG9uQWlUdVZhbkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNob3dDaGF0Ym94ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNsb3NlQ2hhdGJveCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd0NoYXRib3ggPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qID09PT09IHRyYWNrQnkgPT09PT0gKi9cclxuICB0cmFja0J5SWQoXzogbnVtYmVyLCBpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGl0ZW0uaWQ7XHJcbiAgfVxyXG59IiwiPGFwcC1oZWFkZXIgKGFpVHVWYW5DbGlja2VkKT1cIm9uQWlUdVZhbkNsaWNrZWQoKVwiPjwvYXBwLWhlYWRlcj5cclxuPGRpdiBjbGFzcz1cIm5ld3MtcGFnZS1jb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50LWFyZWFcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgyIGNsYXNzPVwicGFnZS10aXRsZVwiPlRyYW5nIHRpbiB04bupYzwvaDI+XHJcblxyXG4gICAgICA8IS0tIFNlYXJjaCArIFBhZ2luYXRpb24gVG9wIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWFuZC1wYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1iYXJcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVMOsbSBraeG6v20gdGluIHThu6ljLi4uXCJcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWFyY2hUZXJtXCJcclxuICAgICAgICAgICAgKGlucHV0KT1cInNlYXJjaFBvc3RzKClcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInNlYXJjaFBvc3RzKClcIj5Uw6xtIGtp4bq/bTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1jb250cm9sc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlUGFnZShjdXJyZW50UGFnZSAtIDEpXCIgW2Rpc2FibGVkXT1cImN1cnJlbnRQYWdlID09PSAxXCI+Jmx0OzwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBwYWdlIG9mIHBhZ2VzXCJcclxuICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJjdXJyZW50UGFnZSA9PT0gcGFnZVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJjaGFuZ2VQYWdlKHBhZ2UpXCJcclxuICAgICAgICAgICAgPnt7IHBhZ2UgfX08L3NwYW5cclxuICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2VQYWdlKGN1cnJlbnRQYWdlICsgMSlcIiBbZGlzYWJsZWRdPVwiY3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXNcIj4mZ3Q7PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBHcmlkIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmV3cy1ncmlkXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3M9XCJuZXdzLWNhcmRcIlxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHBvc3Qgb2YgcGFnZWRQb3N0czsgdHJhY2tCeTogdHJhY2tCeUlkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZVwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgW3NyY109XCJwb3N0LmF0dGFjaG1lbnRzPy5sZW5ndGggPyBnZXRJbWFnZVVybChwb3N0LmF0dGFjaG1lbnRzWzBdKSA6ICdhc3NldHMvaW1nL3BsYWNlaG9sZGVyLnBuZydcIlxyXG4gICAgICAgICAgICAgIChlcnJvcik9XCJvbkltYWdlRXJyb3IoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgYWx0PVwi4bqibmggdGluIHThu6ljXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIicvdmlldy1uZXdzLycgKyBwb3N0LmlkXCI+e3sgcG9zdC5uYW1lIH19PC9hPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtZGVzY3JpcHRpb25cIj57eyBwb3N0LnNob3J0RGVzY3JpcHRpb24gfX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1pbmZvXCI+XHJcbiAgICAgICAgSGnhu4NuIHRo4buLIHt7IHN0YXJ0SW5kZXggKyAxIH19IC0ge3sgZW5kSW5kZXggKyAxIH19IGPhu6dhIHt7IHRvdGFsUG9zdHMgfX0gdGluIHThu6ljXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGFwcC1jaGF0LWJveCAqbmdJZj1cInNob3dDaGF0Ym94XCIgKGNsb3NlKT1cImNsb3NlQ2hhdGJveCgpXCI+PC9hcHAtY2hhdC1ib3g+XHJcbjxhcHAtZm9vdGVyPjwvYXBwLWZvb3Rlcj4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5ld3NEVE8gfSBmcm9tICcuLi8uLi8uLi9kdG9zL25ld3MuZHRvJztcclxuaW1wb3J0IHsgTmV3c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uZXdzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdXBkYXRlLW5ld3MnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlIF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3VwZGF0ZS1uZXdzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vdXBkYXRlLW5ld3MuY29tcG9uZW50LnNjc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVOZXdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBuZXdJZCE6IG51bWJlcjtcclxuICBuYW1lID0gJyc7XHJcbiAgc2hvcnREZXNjcmlwdGlvbiA9ICcnO1xyXG4gIGNvbnRlbnQgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5ld3NTZXJ2aWNlOiBOZXdzU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5ld0lkID0gTnVtYmVyKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpKTtcclxuICAgIGlmICh0aGlzLm5ld0lkKSB7XHJcbiAgICAgIHRoaXMubG9hZE5ld3NCeUlkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWROZXdzQnlJZCgpOiB2b2lkIHtcclxuICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0TmV3c0J5SWQodGhpcy5uZXdJZCkuc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dDogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcmVzcG9uc2UubmFtZTtcclxuICAgICAgICB0aGlzLnNob3J0RGVzY3JpcHRpb24gPSByZXNwb25zZS5zaG9ydERlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICBhbGVydChlcnJvcj8uZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU5ld3MoKTogdm9pZCB7XHJcbiAgICBjb25zdCBuZXdzRFRPOiBOZXdzRFRPID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHNob3J0RGVzY3JpcHRpb246IHRoaXMuc2hvcnREZXNjcmlwdGlvbixcclxuICAgICAgY29udGVudDogdGhpcy5jb250ZW50XHJcbiAgICB9O1xyXG4gICAgdGhpcy5uZXdzU2VydmljZS51cGRhdGVOZXdzKHRoaXMubmV3SWQsIG5ld3NEVE8pLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6ICgpID0+IHtcclxuICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL25ld3MnXSlcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgYWxlcnQoZXJyb3IuZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdvQmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL25ld3MnXSk7XHJcbiAgfVxyXG59IiwiPGRpdiBjbGFzcz1cIm5ld3MtZm9ybS1jb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiZm9ybS1oZWFkZXJcIj5cclxuICAgIDxoMj5D4bqtcCBuaOG6rXQgdGluIHThu6ljPC9oMj5cclxuICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj7EkGnhu4FuIMSR4bqneSDEkeG7pyB0aMO0bmcgdGluIMSR4buDIHThuqFvIGLhuqNuIHRpbiBt4bubaTwvcD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cIm5ld3MtZm9ybVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiIGZvcj1cIm5hbWVcIj5UacOqdSDEkeG7gTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJOaOG6rXAgdGnDqnUgxJHhu4EgdGluIHThu6ljXCIgWyhuZ01vZGVsKV09XCJuYW1lXCIgLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIiBmb3I9XCJkZXNjcmlwdGlvblwiPk3DtCB04bqjIG5n4bqvbjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBpZD1cImRlc2NyaXB0aW9uXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTmjhuq1wIG3DtCB04bqjIG5n4bqvblwiIFsobmdNb2RlbCldPVwic2hvcnREZXNjcmlwdGlvblwiIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCIgZm9yPVwiY29udGVudFwiPk7hu5lpIGR1bmcgY2hpIHRp4bq/dDwvbGFiZWw+XHJcbiAgICAgIDx0ZXh0YXJlYSBpZD1cImNvbnRlbnRcIiBbKG5nTW9kZWwpXT1cImNvbnRlbnRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBjb250ZW50LXRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJOaOG6rXAgbuG7mWkgZHVuZy4uLlwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1hY3Rpb25zXCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ29CYWNrKClcIj5cclxuICAgICAgICBI4buneVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBkYXRlTmV3cygpXCI+XHJcbiAgICAgIEPhuq1wIG5o4bqtdFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iLCIvLyBzcmMvYXBwL2NvbXBvbmVudHMvcG9saWN5L3BvbGljeS5jb21wb25lbnQudHNcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgLy8gSW1wb3J0IExvY2F0aW9uIMSR4buDIGTDuW5nIGdvQmFjaygpXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInOyAvLyBJbXBvcnQgUm91dGVyTW9kdWxlIG7hur91IGPDsyBjw6FjIHJvdXRlckxpbmsga2jDoWNcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBvbGljeScsIC8vIFNlbGVjdG9yIGNobyBjb21wb25lbnQgbsOgeVxuICBzdGFuZGFsb25lOiB0cnVlLCAvLyDEkOG6o20gYuG6o28gY29tcG9uZW50IGzDoCBzdGFuZGFsb25lXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGVdLCAvLyBJbXBvcnRzIGPhuqduIHRoaeG6v3QsIHTGsMahbmcgdOG7sSBBYm91dFVzQ29tcG9uZW50XG4gIHRlbXBsYXRlVXJsOiAnLi9wb2xpY3kuY29tcG9uZW50Lmh0bWwnLCAvLyBMacOqbiBr4bq/dCDEkeG6v24gZmlsZSBIVE1MXG4gIHN0eWxlVXJsczogWycuL3BvbGljeS5jb21wb25lbnQuc2NzcyddIC8vIExpw6puIGvhur90IMSR4bq/biBmaWxlIFNDU1Ncbn0pXG5leHBvcnQgY2xhc3MgUG9saWN5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikgeyB9IC8vIEluamVjdCBMb2NhdGlvbiDEkeG7gyBxdWF5IGzhuqFpIHRyYW5nIHRyxrDhu5tjXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gTG9naWMga2jhu59pIHThuqFvIGThu68gbGnhu4d1IGNobyB0cmFuZyDEkGnhu4F1IGtob+G6o24gc+G7rSBk4bulbmcgKG7hur91IGPDsylcbiAgICAvLyBWw60gZOG7pTogdOG6o2kgbuG7mWkgZHVuZyDEkWnhu4F1IGtob+G6o24gdOG7qyBt4buZdCBBUElcbiAgfVxuXG4gIC8qKlxuICAgKiBRdWF5IGzhuqFpIHRyYW5nIHRyxrDhu5tjIMSRw7MgdHJvbmcgbOG7i2NoIHPhu60gZHV54buHdCB3ZWIuXG4gICAqL1xuICBnb0JhY2soKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gIH1cbn0iLCI8ZGl2IGNsYXNzPVwicG9saWN5LXBhZ2VcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJiYWNrLWJ1dHRvblwiIChjbGljayk9XCJnb0JhY2soKVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJiYWNrLWFycm93XCI+4oaQPC9zcGFuPiBRdWF5IGzhuqFpXG4gICAgPC9idXR0b24+XG5cbiAgICA8aGVhZGVyIGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgIDxoMT7EkGnhu4F1IEtob+G6o24gU+G7rSBE4bulbmc8L2gxPlxuICAgICAgPHAgY2xhc3M9XCJhdXRob3ItZGF0ZVwiPlxuICAgICAgICBD4bqtcCBuaOG6rXQgbOG6p24gY3Xhu5FpOiA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1kYXRlXCI+MTMgdGjDoW5nIDA0IG7Eg20gMjAyNTwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICA8L2hlYWRlcj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi1ibG9jayBpbnRyby1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1pY29uXCI+8J+TnDwvZGl2PlxuICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkNow6BvIE3hu6tuZyBC4bqhbiDEkOG6v24gVuG7m2kgQ2hlY2tTY2FtITwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgQuG6sW5nIHZp4buHYyB0cnV5IGPhuq1wIHbDoCBz4butIGThu6VuZyBk4buLY2ggduG7pSBj4bunYSBDaGVja1NjYW0gKFwiROG7i2NoIHbhu6VcIiksIGLhuqFuIMSR4buTbmcgw70gdHXDom4gdGjhu6cgY8OhYyDEkGnhu4F1IGtob+G6o24gU+G7rSBk4bulbmcgbsOgeVxuICAgICAgICAoXCLEkGnhu4F1IGtob+G6o25cIikuIEPDoWMgxJBp4buBdSBraG/huqNuIG7DoHkgbMOgIG3hu5l0IHRo4buPYSB0aHXhuq1uIHBow6FwIGzDvSByw6BuZyBideG7mWMgZ2nhu69hIGLhuqFuIHbDoCBDaGVja1NjYW0uIFZ1aSBsw7JuZyDEkeG7jWMga+G7uVxuICAgICAgICB0csaw4bubYyBraGkgc+G7rSBk4bulbmcgROG7i2NoIHbhu6UgY+G7p2EgY2jDum5nIHTDtGkuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uLWJsb2NrXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1pY29uXCI+8J+MkDwvZGl2PlxuICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPlBo4bqhbSBWaSBE4buLY2ggVuG7pTwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgQ2hlY2tTY2FtIGN1bmcgY+G6pXAgbeG7mXQgbuG7gW4gdOG6o25nIMSR4buDIGtp4buDbSB0cmEgxJHhu5kgdGluIGPhuq15IGPhu6dhIGPDoWMgxJHGsOG7nW5nIGxpbmssIHPhu5EgxJFp4buHbiB0aG/huqFpLCB0w6BpIGtob+G6o24gbmfDom4gaMOgbmdcbiAgICAgICAgaG/hurdjIGPDoWMgdGjDtG5nIHRpbiBraMOhYyBuaOG6sW0gY+G6o25oIGLDoW8gdsOgIGLhuqNvIHbhu4cgbmfGsOG7nWkgZMO5bmcga2jhu49pIGPDoWMgaG/huqF0IMSR4buZbmcgbOG7q2EgxJHhuqNvIHRy4buxYyB0dXnhur9uLiBUaMO0bmcgdGluXG4gICAgICAgIMSRxrDhu6NjIGN1bmcgY+G6pXAgYuG7n2kgROG7i2NoIHbhu6UgbWFuZyB0w61uaCBjaOG6pXQgdGhhbSBraOG6o28gdsOgIGPhuqNuaCBiw6FvLCBraMO0bmcgcGjhuqNpIGzDoCBs4budaSBraHV5w6puIHBow6FwIGzDvSBoYXkgxJHhuqNtIGLhuqNvXG4gICAgICAgIHR1eeG7h3QgxJHhu5FpLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIENow7puZyB0w7RpIG7hu5cgbOG7sWMgY+G6rXAgbmjhuq10IGThu68gbGnhu4d1IGxpw6puIHThu6VjIG5oxrBuZyBraMO0bmcgdGjhu4MgxJHhuqNtIGLhuqNvIHThuqV0IGPhuqMgdGjDtG5nIHRpbiDEkeG7gXUgY2jDrW5oIHjDoWMgaG/hurdjIMSR4bqneSDEkeG7p1xuICAgICAgICB0dXnhu4d0IMSR4buRaSB04bqhaSBt4buNaSB0aOG7nWkgxJFp4buDbSBkbyB0w61uaCBjaOG6pXQgdGhheSDEkeG7lWkgbmhhbmggY2jDs25nIGPhu6dhIGPDoWMgaMOsbmggdGjhu6ljIGzhu6thIMSR4bqjby5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24tYmxvY2tcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWljb25cIj7wn5SSPC9kaXY+XG4gICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+Q2jDrW5oIFPDoWNoIELhuqNvIE3huq10PC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBWaeG7h2MgYuG6oW4gc+G7rSBk4bulbmcgROG7i2NoIHbhu6UgY+G7p2EgY2jDum5nIHTDtGkgY8WpbmcgY2jhu4t1IHPhu7EgxJFp4buBdSBjaOG7iW5oIGLhu59pIENow61uaCBzw6FjaCBC4bqjbyBt4bqtdCBj4bunYSBDaGVja1NjYW0uIFZ1aSBsw7JuZ1xuICAgICAgICB0cnV5IGPhuq1wIHRyYW5nIDxhIHJvdXRlckxpbms9XCIvcHJpdmFjeS1wb2xpY3lcIiBjbGFzcz1cInBvbGljeS1saW5rXCI+Q2jDrW5oIHPDoWNoIELhuqNvIG3huq10PC9hPiBj4bunYSBjaMO6bmcgdMO0aSDEkeG7gyB0w6xtIGhp4buDdSB0aMOqbSB24buBIGPDoWNoIGNow7puZyB0w7RpIHRodSB0aOG6rXAsIHPhu60gZOG7pW5nIHbDoCBi4bqjbyB24buHIGThu68gbGnhu4d1IGPDoSBuaMOibiBj4bunYSBi4bqhbi5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24tYmxvY2tcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWljb25cIj7imqDvuI88L2Rpdj5cbiAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5Iw6BuaCBWaSBD4bqlbTwvaDI+XG4gICAgICA8cD5C4bqhbiDEkeG7k25nIMO9IGtow7RuZyB0aOG7sWMgaGnhu4duIGPDoWMgaMOgbmggdmkgc2F1IGtoaSBz4butIGThu6VuZyBE4buLY2ggduG7pTo8L3A+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5T4butIGThu6VuZyBE4buLY2ggduG7pSBjaG8gYuG6pXQga+G7syBt4bulYyDEkcOtY2ggYuG6pXQgaOG7o3AgcGjDoXAgaG/hurdjIHRyw6FpIHBow6lwIG7DoG8uPC9saT5cbiAgICAgICAgPGxpPkPhu5EgZ+G6r25nIHRydXkgY+G6rXAgdHLDoWkgcGjDqXAgdsOgbyBo4buHIHRo4buRbmcgaG/hurdjIG3huqFuZyBsxrDhu5tpIGPhu6dhIENoZWNrU2NhbS48L2xpPlxuICAgICAgICA8bGk+R+G7rWkgY8OhYyBiw6FvIGPDoW8gc2FpIGzhu4djaCwgZ8OieSBoaeG7g3UgbOG6p20gaG/hurdjIGPDsyDDvSDEkeG7kyB44bqldS48L2xpPlxuICAgICAgICA8bGk+U+G7rSBk4bulbmcgYuG6pXQga+G7syByb2JvdCwgc3BpZGVyLCDhu6luZyBk4bulbmcgdMOsbSBraeG6v20vdHJ1eSB4deG6pXQgdHJhbmcgd2ViIGhv4bq3YyBi4bqldCBr4buzIHBoxrDGoW5nIHRp4buHbiB04buxIMSR4buZbmcgbsOgbyBraMOhY1xuICAgICAgICAgICAgxJHhu4MgdHJ1eSBj4bqtcCwgdHLDrWNoIHh14bqldCwgaG/hurdjIGzhuq1wIGNo4buJIG3hu6VjIGLhuqV0IGvhu7MgcGjhuqduIG7DoG8gY+G7p2EgROG7i2NoIHbhu6UuPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uLWJsb2NrXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1pY29uXCI+4pqW77iPPC9kaXY+XG4gICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+R2nhu5tpIEjhuqFuIFRyw6FjaCBOaGnhu4dtPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBDaGVja1NjYW0gc+G6vSBraMO0bmcgY2jhu4t1IHRyw6FjaCBuaGnhu4dtIMSR4buRaSB24bubaSBi4bqldCBr4buzIHRoaeG7h3QgaOG6oWkgdHLhu7FjIHRp4bq/cCwgZ2nDoW4gdGnhur9wLCBuZ+G6q3Ugbmhpw6puLCDEkeG6t2MgYmnhu4d0LFxuICAgICAgICBkbyBo4bqtdSBxdeG6oyBob+G6t2MgbWFuZyB0w61uaCB0cuG7q25nIHBo4bqhdCBuw6BvIHBow6F0IHNpbmggdOG7qyB2aeG7h2MgYuG6oW4gc+G7rSBk4bulbmcgaG/hurdjIGtow7RuZyB0aOG7gyBz4butIGThu6VuZyBE4buLY2ggduG7pS5cbiAgICAgICAgVGjDtG5nIHRpbiBj4bqjbmggYsOhbyDEkcaw4bujYyBjdW5nIGPhuqVwIGNo4buJIG1hbmcgdMOtbmggY2jhuqV0IHRoYW0ga2jhuqNvOyB0csOhY2ggbmhp4buHbSBjdeG7kWkgY8O5bmcgdGh14buZYyB24buBIG5nxrDhu51pIGTDuW5nXG4gICAgICAgIHRyb25nIHZp4buHYyDEkcawYSByYSBxdXnhur90IMSR4buLbmggY+G7p2EgbcOsbmguXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uLWJsb2NrXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1pY29uXCI+4pyN77iPPC9kaXY+XG4gICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+VGhheSDEkOG7lWkgxJBp4buBdSBLaG/huqNuPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBDaMO6bmcgdMO0aSBjw7MgdGjhu4Mgc+G7rWEgxJHhu5VpIMSQaeG7gXUga2hv4bqjbiBuw6B5IGLhuqV0IGPhu6kgbMO6YyBuw6BvIGLhurFuZyBjw6FjaCDEkcSDbmcgcGhpw6puIGLhuqNuIHPhu61hIMSR4buVaSB0csOqbiB0cmFuZyB3ZWIuXG4gICAgICAgIFZp4buHYyBi4bqhbiB0aeG6v3AgdOG7pWMgc+G7rSBk4bulbmcgROG7i2NoIHbhu6Ugc2F1IGtoaSBjw6FjIHRoYXkgxJHhu5VpIGPDsyBoaeG7h3UgbOG7sWMgc+G6vSDEkeG7k25nIG5naMSpYSB24bubaSB2aeG7h2MgYuG6oW4gY2jhuqVwIG5o4bqtblxuICAgICAgICBjw6FjIMSQaeG7gXUga2hv4bqjbiDEkcOjIHPhu61hIMSR4buVaS5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24tYmxvY2sgY29udGFjdC1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1pY29uXCI+4p2TPC9kaXY+XG4gICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+TGnDqm4gSOG7hzwvaDI+XG4gICAgICA8cD5O4bq/dSBi4bqhbiBjw7MgYuG6pXQga+G7syBjw6J1IGjhu49pIG7DoG8gduG7gSDEkGnhu4F1IGtob+G6o24gbsOgeSwgdnVpIGzDsm5nIGxpw6puIGjhu4cgduG7m2kgY2jDum5nIHTDtGkgcXVhOjwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWluZm9cIj5cbiAgICAgICAgPHA+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4gPGEgaHJlZj1cIm1haWx0bzpjb250YWN0JiM2NDtjaGVja3NjYW0udm5cIj5jb250YWN0JiM2NDtjaGVja3NjYW0udm48L2E+PC9wPlxuICAgICAgICA8cD48c3Ryb25nPkZhbnBhZ2UgRmFjZWJvb2s6PC9zdHJvbmc+IDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vY2hlY2tzY2FtLm9mZmljaWFsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q2hlY2tTY2FtIE9mZmljaWFsPC9hPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxmb290ZXIgY2xhc3M9XCJwYWdlLWZvb3RlclwiPlxuICAgICAgPHA+Q+G6o20gxqFuIGLhuqFuIMSRw6MgdGluIHTGsOG7n25nIHbDoCBz4butIGThu6VuZyBDaGVja1NjYW0uPC9wPlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbjwvZGl2PiIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5ld3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmV3cy9uZXdzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlcG9ydENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENyZWF0ZU5ld3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmV3cy9jcmVhdGUtbmV3cy9jcmVhdGUtbmV3cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGF0Ym90Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoYXRib3QvY2hhdGJvdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDcmVhdGVSZXBvcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVwb3J0L2NyZWF0ZS1yZXBvcnQvY3JlYXRlLXJlcG9ydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWV3TmV3c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uZXdzL3ZpZXctbmV3cy92aWV3LW5ld3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3JlYXRlVXNlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91c2VyL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERldGFpbE5ld3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmV3cy9kZXRhaWwtbmV3cy9kZXRhaWwtbmV3cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZXRhaWxSZXBvcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVwb3J0L2RldGFpbC1yZXBvcnQvZGV0YWlsLXJlcG9ydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBYm91dFVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudCc7IFxyXG5pbXBvcnQgeyBDaGF0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoYXQtYm94L2NoYXQtYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpc3ROZXdzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25ld3MvbGlzdC1uZXdzL2xpc3QtbmV3cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVcGRhdGVOZXdzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25ld3MvdXBkYXRlLW5ld3MvdXBkYXRlLW5ld3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9saWN5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BvbGljeS9wb2xpY3kuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBDaGF0Ym90Q29tcG9uZW50LCBwYXRoTWF0Y2g6ICdmdWxsJyB9LCBcclxuXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ2FkbWluJywgXHJcbiAgICAgICAgY29tcG9uZW50OiBMYXlvdXRDb21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdkYXNoYm9hcmQnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LCBcclxuICAgICAgICAgIHsgcGF0aDogJ2Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICB7IHBhdGg6ICd1c2VycycsIGNvbXBvbmVudDogVXNlckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgeyBwYXRoOiAnY3JlYXRlLXVzZXInLCBjb21wb25lbnQ6IENyZWF0ZVVzZXJDb21wb25lbnQgfSxcclxuICAgICAgICAgIHsgcGF0aDogJ25ld3MnLCBjb21wb25lbnQ6IE5ld3NDb21wb25lbnQgfSwgXHJcbiAgICAgICAgICB7IHBhdGg6ICdjcmVhdGUtbmV3cycsIGNvbXBvbmVudDogQ3JlYXRlTmV3c0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgeyBwYXRoOiAnZGV0YWlsLW5ld3MvOmlkJywgY29tcG9uZW50OiBEZXRhaWxOZXdzQ29tcG9uZW50IH0sIFxyXG4gICAgICAgICAgeyBwYXRoOiAndXBkYXRlLW5ld3MvOmlkJywgY29tcG9uZW50OiBVcGRhdGVOZXdzQ29tcG9uZW50IH0sIFxyXG4gICAgICAgICAgeyBwYXRoOiAnbGlzdC1uZXdzJywgY29tcG9uZW50OiBMaXN0TmV3c0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgeyBwYXRoOiAncmVwb3J0cycsIGNvbXBvbmVudDogUmVwb3J0Q29tcG9uZW50IH0sIFxyXG4gICAgICAgICAgeyBwYXRoOiAnY3JlYXRlLXJlcG9ydCcsIGNvbXBvbmVudDogQ3JlYXRlUmVwb3J0Q29tcG9uZW50IH0sIFxyXG4gICAgICAgICAgeyBwYXRoOiAnZGV0YWlsLXJlcG9ydC86aWQnLCBjb21wb25lbnQ6IERldGFpbFJlcG9ydENvbXBvbmVudCB9LCBcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgICAgXHJcbiAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSwgXHJcbiAgICB7IHBhdGg6ICdjaGF0Ym94JywgY29tcG9uZW50OiBDaGF0Qm94Q29tcG9uZW50IH0sIFxyXG4gICAgeyBwYXRoOiAnbGlzdC1uZXdzJywgY29tcG9uZW50OiBMaXN0TmV3c0NvbXBvbmVudCB9LCBcclxuICAgIHsgcGF0aDogJ3ZpZXctbmV3cy86aWQnLCBjb21wb25lbnQ6IFZpZXdOZXdzQ29tcG9uZW50IH0sIFxyXG4gICAgeyBwYXRoOiAnY3JlYXRlLXJlcG9ydCcsIGNvbXBvbmVudDogQ3JlYXRlUmVwb3J0Q29tcG9uZW50IH0sIFxyXG4gICAgeyBwYXRoOiAnYWJvdXQtdXMnLCBjb21wb25lbnQ6IEFib3V0VXNDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ3ByaXZhY3ktcG9saWN5JywgY29tcG9uZW50OiBQb2xpY3lDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJycgfSwgXHJcbl07IiwiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yRm4gfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90b2tlbi5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGV4Y2x1ZGVkVXJscyA9IFtcclxuLy8gICcvYXBpL3YxL3JlcG9ydCcsXHJcbi8vICAnL2FwaS92MS9uZXdzJ1xyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRva2VuSW50ZXJjZXB0b3I6IEh0dHBJbnRlcmNlcHRvckZuID0gKHJlcSwgbmV4dCkgPT4ge1xyXG4gIGNvbnN0IHRva2VuU2VydmljZSA9IGluamVjdChUb2tlblNlcnZpY2UpO1xyXG4gIGNvbnN0IHRva2VuID0gdG9rZW5TZXJ2aWNlLmdldFRva2VuKCk7XHJcblxyXG4gIC8vIGNvbnN0IGlzRXhjbHVkZWQgPSBleGNsdWRlZFVybHMuc29tZSh1cmwgPT4gcmVxLnVybC5pbmNsdWRlcyh1cmwpKTtcclxuICAvLyBpZiAoaXNFeGNsdWRlZCkge1xyXG4gIC8vICAgcmV0dXJuIG5leHQocmVxKTtcclxuICAvLyB9XHJcblxyXG4gIGlmICh0b2tlbikge1xyXG4gICAgY29uc3QgY2xvbmVkID0gcmVxLmNsb25lKHtcclxuICAgICAgc2V0SGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5leHQoY2xvbmVkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXh0KHJlcSk7XHJcbn07IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFJvdXRlck91dGxldFxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2FwcC5jb21wb25lbnQuc2NzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgdGl0bGUgPSAnY2hlY2tzY2FtLWFkbWluJztcclxufSIsIjwhLS0gPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPiAtLT5cblxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuXG48IS0tIDxhcHAtZm9vdGVyPjwvYXBwLWZvb3Rlcj4gLS0+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyw0QkFBNEI7OztBQ0FyQyxTQUE0QixrQ0FBa0M7QUFDOUQsU0FBUyxxQkFBcUI7OztBQ0Q1QixTQUFTLFdBQW1CLG9CQUFvQjtBQUNoRCxTQUFpQixvQkFBb0I7QUFFckMsU0FBUyxvQkFBb0I7Ozs7QUVEN0I7Ozs7U0FBUyxjQUFBQSxtQkFBa0I7OztBQ0Z0QixJQUFNLGNBQWM7RUFDdkIsWUFBWTs7QTs7Ozs7O0FDRGhCLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsbUJBQW1COztBQUt0QixJQUFPLGtCQUFQ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QUFBLEdBQUEsT0FBQSxJQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLGlCQUFBLEdBQUEsQ0FBQSxHQUFBLGdCQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsUUFBQSxlQUFBLEdBQUEsQ0FBQSxHQUFBLFFBQUEsVUFBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxPQUFBLG9CQUFBLGNBQUEsR0FBQSxDQUFBLEdBQUEsV0FBQSxHQUFBLENBQUEsR0FBQSxrQkFBQSxHQUFBLENBQUEsTUFBQSxxQkFBQSxHQUFBLHNCQUFBLGVBQUEsR0FBQSxDQUFBLEdBQUEsS0FBQSxHQUFBLENBQUEsR0FBQSxhQUFBLFVBQUEsR0FBQSxDQUFBLE1BQUEsb0JBQUEsR0FBQSxtQkFBQSxHQUFBLENBQUEsR0FBQSxXQUFBLEdBQUEsQ0FBQSxNQUFBLGFBQUEsU0FBQSxRQUFBLGVBQUEsS0FBQSxRQUFBLFFBQUEsb0JBQUEsa0JBQUEsR0FBQSxTQUFBLGtCQUFBLGFBQUEsR0FBQSxTQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsS0FBQSxHQUFBLENBQUEsaUJBQUEsYUFBQSxXQUFBLEtBQUEsV0FBQSxLQUFBLGFBQUEsYUFBQSxHQUFBLFNBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxLQUFBLFdBQUEsS0FBQSxXQUFBLEtBQUEsR0FBQSxXQUFBLEdBQUEsU0FBQSxPQUFBLEdBQUEsQ0FBQSxZQUFBLEtBQUEsaUJBQUEsYUFBQSxXQUFBLEtBQUEsV0FBQSxLQUFBLEdBQUEsV0FBQSxHQUFBLFNBQUEsT0FBQSxHQUFBLENBQUEsWUFBQSxLQUFBLGlCQUFBLGFBQUEsV0FBQSxLQUFBLFdBQUEsS0FBQSxHQUFBLFdBQUEsR0FBQSxTQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLFlBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsU0FBQSxvQkFBQSxHQUFBLGVBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLFlBQUEsVUFBQSxH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Q0FBQSxHQUFBLHNCQUFBLEdBQUEsQ0FBQSxHQUFBLHFCQUFBLEdBQUEsaUJBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxTQUFBLEdBQUEsQ0FBQSxRQUFBLFFBQUEsZUFBQSxvREFBQSxHQUFBLGdCQUFBLEdBQUEsaUJBQUEsaUJBQUEsU0FBQSxHQUFBLENBQUEsUUFBQSxVQUFBLEdBQUEsaUJBQUEsR0FBQSxTQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxnQkFBQSxHQUFBLENBQUEsR0FBQSxlQUFBLEdBQUEsQ0FBQSxHQUFBLFlBQUEsR0FBQSxDQUFBLEdBQUEsV0FBQSxHQUFBLENBQUEsR0FBQSxnQkFBQSxHQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxHQUFBLHVCQUFBLEdBQUEsQ0FBQSxHQUFBLGlCQUFBLEdBQUEsQ0FBQSxHQUFBLGdCQUFBLEdBQUEsQ0FBQSxHQUFBLGNBQUEsR0FBQSxDQUFBLFFBQUEsS0FBQSxHQUFBLGlCQUFBLFVBQUEsR0FBQSxDQUFBLE9BQUEsb0NBQUEsT0FBQSxVQUFBLEdBQUEsQ0FBQSxRQUFBLEtBQUEsR0FBQSxpQkFBQSxVQUFBLEdBQUEsQ0FBQSxPQUFBLG9DQUFBLE9BQUEsVUFBQSxHQUFBLENBQUEsUUFBQSxLQUFBLEdBQUEsaUJBQUEsTUFBQSxHQUFBLENBQUEsT0FBQSxnQ0FBQSxPQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsa0JBQUEsR0FBQSxDQUFBLEdBQUEsV0FBQSxHQUFBLENBQUEsR0FBQSxnQkFBQSxHQUFBLENBQUEsR0FBQSxlQUFBLEdBQUEsQ0FBQSxHQUFBLG9CQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsR0FBQSxDQUFBLEdBQUEsY0FBQSxHQUFBLENBQUEsR0FBQSxjQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsR0FBQSxDQUFBLEdBQUEscUJBQUEsR0FBQSxDQUFBLEdBQUEsa0JBQUEsR0FBQSxDQUFBLEdBQUEsa0JBQUEsR0FBQSxDQUFBLEdBQUEsZ0JBQUEsR0FBQSxDQUFBLE9BQUEsc0dBQUEsT0FBQSxrQkFBQSxHQUFBLENB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QTtBQW1MN0QsTUFBQSx5QkFBQSxHQUFBO0FBQUEsTUFBQSwwQkFBQSxRQUFBLElBQUEsV0FBQTs7O0lEeExYSTtJQUFZO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUNaQztJQUFXO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFDWEM7SUFBWTtJQUFBO0lBQUE7SUFBQTtJQUNaO0lBQ0E7SUFDQTtFQUFnQixHQUFBLFFBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFBQSxFQUFBLENBQUE7OztpRkFLUCxrQkFBZ0IsQ0FBQTtVQWQ1QkM7dUJBQ1csZUFBYSxZQUNYLE1BQUksU0FDUDtNQUNQSDtNQUNBQztNQUNBQztNQUNBO01BQ0E7TUFDQTtPQUNELFVBQUEsdzJWQUFBLFFBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBLHFCQUFBLEtBQUEsSUFBQSxDQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxlQUFBLFlBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSw0QkFBQSxPQUFBLEVBQUEsT0FBQSxNQUFBLHFCQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7O0ExRFJ6QixxQkFBcUIsY0FBYyxTQUFTLEVBQ3pDLE1BQU0sQ0FBQyxRQUFRLFFBQVEsTUFBTSxHQUFHLENBQUM7IiwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkluamVjdGFibGUiLCJpMCIsIkNvbXBvbmVudCIsIkNvbW1vbk1vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJpMyIsImkyIiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiRm9ybXNNb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXREaWFsb2dNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiTWF0RGlhbG9nTW9kdWxlIiwiTWF0Rm9ybUZpZWxkTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkzIiwiaTQiLCJpNSIsImkyIiwiaTYiLCJpNyIsImk4IiwiaTkiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTQiLCJpMiIsImk1IiwiaTMiLCJDb21tb25Nb2R1bGUiLCJDb21wb25lbnQiLCJSb3V0ZXJNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkluamVjdGFibGUiLCJJbmplY3RhYmxlIiwiQ29tbW9uTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkzIiwiaTIiLCJpNCIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsIlJvdXRlck1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiUmVwb3J0U3RhdHVzIiwiUGlwZSIsIkluZm9ybWF0aW9uVHlwZSIsIlBpcGUiLCJJbmplY3RhYmxlIiwiSW5qZWN0YWJsZSIsIkluamVjdGFibGUiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTMiLCJpNCIsImk1IiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiRm9ybXNNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTMiLCJpNCIsImk1IiwiaTIiLCJDb21wb25lbnQiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkNvbXBvbmVudCIsIlJvdXRlckxpbmsiLCJDb21tb25Nb2R1bGUiLCJpMCIsImkyIiwiaTEiLCJDb21wb25lbnQiLCJDb21tb25Nb2R1bGUiLCJpMCIsImkxIiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiT3V0cHV0IiwiRm9ybXNNb2R1bGUiLCJJbmplY3RhYmxlIiwiSW5qZWN0YWJsZSIsIkV2ZW50RW1pdHRlciIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiQ29tcG9uZW50IiwiT3V0cHV0IiwiaTAiLCJpMiIsImkzIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkyIiwiaTMiLCJpNCIsIkNvbXBvbmVudCIsIlZpZXdDaGlsZCIsIkZvcm1zTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiSW5qZWN0YWJsZSIsIkZvcm1zTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiQ29tcG9uZW50IiwiVmlld0NoaWxkIiwiaTAiLCJpNCIsImkxIiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiRm9ybXNNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTMiLCJpMiIsImk0IiwiaTUiLCJDb21tb25Nb2R1bGUiLCJDb21wb25lbnQiLCJIb3N0TGlzdGVuZXIiLCJSb3V0ZXJNb2R1bGUiLCJfYzAiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJDb21wb25lbnQiLCJIb3N0TGlzdGVuZXIiLCJpMCIsImkzIiwiaTQiLCJpMiIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsIkhvc3RMaXN0ZW5lciIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsIkhvc3RMaXN0ZW5lciIsImkwIiwiaTMiLCJpMiIsIkNvbXBvbmVudCIsIkhvc3RMaXN0ZW5lciIsIlJvdXRlck1vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkNvbXBvbmVudCIsIkhvc3RMaXN0ZW5lciIsImkwIiwiaTMiLCJpMiIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsIkZvcm1zTW9kdWxlIiwibWFwIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkyIiwiaTMiLCJpNCIsIkNvbXBvbmVudCIsIlJvdXRlck1vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTIiLCJpMSIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsIkZvcm1zTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkzIiwiaTIiLCJpNCIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsIkZvcm1zTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkzIiwiaTQiLCJpMiIsIkNvbXBvbmVudCIsIlJvdXRlck1vZHVsZSIsImkwIiwiaTIiLCJpMSIsIkNvbXBvbmVudCIsIlJvdXRlck91dGxldCIsImkwIl19