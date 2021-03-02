import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  template: `<p-toast>
    <ng-template let-message pTemplate="message">
        <div style="display:block;margin:5px;">
            <div style="width: 12%;float: left; padding-bottom: 20px;">
                <img style="margin-top: -4px;width: 26px;" src="/assets/img/{{message.summary}}.png" />
            </div>
            <div style="display:block;width: 88%;">
                <strong>{{message.summary}}:</strong>
                {{message.detail}}
            </div>
        </div>
    </ng-template>
</p-toast>`})

export class ToastComponent  {}
