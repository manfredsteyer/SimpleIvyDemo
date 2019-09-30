var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Hello World!';
    }
    AppComponent.ngComponentDef = ɵdefineComponent({
        type: AppComponent,
        selectors: [["app-root"]],
        factory: function AppComponent_Factory(t) {
          return new (t || AppComponent)();
        },
        consts: 2,
        vars: 1,
        template: function AppComponent_Template(rf, ctx) {

          if (rf & 1) { // Init

            ɵelementStart(0, "b");
            ɵtext(1); //ID=1
            ɵelementEnd();

          } if (rf & 2) {

            ɵtextBinding(1, ctx.title);

          }
        },
        encapsulation: 2
      });
    return AppComponent;
}());
