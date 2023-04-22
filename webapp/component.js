sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      // metadata section defines a reference to the root view
      metadata: {
        manifest: "json", // metadata points to manifest.json file
      },
      // init function will instantiate the data model and i18n model
      // models are now set directly on the component and not on the root view
      // However, as nested controls automatically inherit the models from the parent controls,
      // the models will be available on the view as well
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data model
        let oData = {
          recipient: {
            name: "World",
          },
        };
        let oModel = new JSONModel(oData);
        this.setModel(oModel);
        // set i18n model
        /*        let i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");*/
      },
    });
  }
);
