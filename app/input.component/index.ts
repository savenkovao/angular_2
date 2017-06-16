import { Input, Component } from "@angular/core";

@Component({
    selector: 'input-comp',
    templateUrl:'app/input.component/input.component.html',
    styleUrls: ['app/input.component/input.component.css']
})

export class InputComponent {
    @Input() inputName: string;
    @Input() inputAge: number;

    @Input() inputSurname:string;

    _inputWorkplace: string;

    @Input()
        set inputWorkplace(workplace:string) {
            this._inputWorkplace ='works at ' + workplace;
        }
        get inputWorkplace():string {
            return this._inputWorkplace;
        }
}