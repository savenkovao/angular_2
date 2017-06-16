import { Component } from '@angular/core';

@Component({
    selector: 'sub-comp',
    templateUrl: `app/sub.component/sub.component.html`,
    styleUrls:[`app/sub.component/sub.component.css`]
})

export class SubComponent {
    name = 'Гость';
}