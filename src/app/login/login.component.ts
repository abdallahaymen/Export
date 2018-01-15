import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AlertService, AuthenticationService } from '../_services/index';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onLoggedin() {  alert('login');
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    alert('errer');
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
