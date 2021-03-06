import {Component, Inject} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Profile} from '../../model';

@Component({
    selector: 'sidebar',
    templateUrl: '../../../view/common/sidebar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class SideBarComponent {

    profile: Profile;
    navigationItens:[any] = [{
        name: 'Feriado',
        icon: 'fa fa-th-large',
        childrens: [
            {
                name: 'Lista de Feriados',
                router: 'Feriado'

            },
            {
                name: 'Cadastro de Feriados',
                router: 'FeriadoDetail'
            }
        ]
    }, {
        name: 'Feriado',
        icon: 'fa fa-th-large',
        router: 'Feriado'
    }, {
        name: 'Feriado',
        icon: 'fa fa-th-large',
        childrens: [
            {
                name: 'Lista de Feriados',
                router: 'Feriado'

            },
            {
                name: 'Cadastro de Feriados',
                router: 'FeriadoDetail'
            }
        ]
    }];

    constructor() {
        this.profile = new Profile(
            1,
            'Daniel Xavier Araújo',
            'Analista de Sistemas',
            'img/profile_small.jpg'
        );
    }

    active(event: MouseEvent) {
        event.preventDefault();
        var li = jQuery(event.currentTarget).parent('li');
        li.closest('ul.metismenu').find('li').removeClass('active');
        li.parent('ul.nav-second-level').parent('li').addClass('active');
        li.addClass('active');
    }
}
