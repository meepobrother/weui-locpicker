import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';

@Component({
    selector: 'weui-locpicker-setting',
    templateUrl: './weui-locpicker-setting.html',
    styleUrls: ['./weui-locpicker-setting.scss']
})
export class WeuiLocpickerSettingComponent extends ReactComponent<any, any> {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }

    setHeight() {
        const ele = document.getElementById(this.props.id);
        this.render.setStyle(ele, 'height', `${this.props.height}px`);
    }
}
