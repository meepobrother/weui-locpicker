import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener,
    HostBinding, OnInit, AfterViewInit
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ReactComponent } from 'ng-react-component';
export interface WeuiLocpickerProps {
    children: any[];
    height: number;
    id: string;
    loc: any;
    search: number;
    policy: number;
    mapdraggable: number;
    zoom: number;
    radius: number;
    total: number;
    key: string;
}
@Component({
    selector: 'weui-locpicker-preview',
    templateUrl: './weui-locpicker-preview.html',
    styleUrls: ['./weui-locpicker-preview.scss']
})
export class WeuiLocpickerPreviewComponent extends ReactComponent<WeuiLocpickerProps, any> implements OnInit, AfterViewInit {
    src: SafeResourceUrl;
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2,
        private dom: DomSanitizer
    ) {
        super(_differs, _ele, _render);
        window.addEventListener('message', (event) => {
            try {
                const loc = event.data;
                if (loc && loc.module === 'locationPicker') {
                    this.props.loc = loc;
                }
            } catch (err) {

            }
        }, false);
    }

    updateSrc() {
        let { search, policy, total, radius, zoom, mapdraggable, key } = this.props;
        search = search || 1;
        policy = policy || 1;
        total = total || 10;
        radius = radius || 1000;
        zoom = zoom || 15;
        mapdraggable = mapdraggable || 1;
        key = key || 'LHRBZ-4XCWF-FGRJ5-NKTKW-GAQIS-LEBZG';
        const src = `https://apis.map.qq.com/tools/locpicker?search=${search}&type=1&policy=${policy}&total=${total}&radius=${radius}&zoom=${zoom}&mapdraggable=${mapdraggable}&key=${key}&referer=myapp`;
        this.src = this.dom.bypassSecurityTrustResourceUrl(src);
    }
    ngOnInit() {
        this.setStyle({
            height: `${this.props.height}px`
        });
        this._id = this.props.id;
        this.updateSrc();
    }

    ngAfterViewInit() { }

    onPropsChange() {
        this.setStyle({
            height: `${this.props.height}px`
        });
    }

    onStateChange() {
        console.log(this.state);
    }
}
