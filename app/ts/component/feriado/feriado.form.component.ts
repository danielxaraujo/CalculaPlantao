import {Component, Input, Inject} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators, FORM_DIRECTIVES} from 'angular2/common';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {PanelComponent} from '../panel.component';
import {FeriadoService} from '../../service';
import {Feriado} from '../../model';

@Component({
    templateUrl: '../../../view/feriado/feriado.form.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class FeriadoFormComponent extends PanelComponent {

    @Input() id: number;
    feriado : Feriado;
    form: ControlGroup;

    constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        private _formBuilder:FormBuilder,
        private _service:FeriadoService
    ){ super(); }

    ngOnInit() {
        this.id = <number><any> this._routeParams.get('id');
        if (this.id) {
            this.feriado = this._service.getFeriado(this.id);
        }
        this.form = this._formBuilder.group({
            "id":   [this.feriado ? this.feriado.id   : ''],
            "date": [this.feriado ? this.feriado.date : '', Validators.required],
            "name": [this.feriado ? this.feriado.name : '', Validators.required]
        });
    }

    salvar(value) {
        var f = this.form.value;
        if (this.feriado) {
            this.feriado.date = f.date;
            this.feriado.name = f.name;
        } else {
            this.feriado = new Feriado(0, f.date, f.name);
            this._service.addFeriado(this.feriado);
        }
        this._router.navigate(['Feriado']);
    }
}
