sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Core",
	"sap/ui/core/library",
	'sap/m/MessageToast',
	"sap/ui/unified/library"
], function(Controller, JSONModel, Core, CoreLibrary, MessageToast) {
	"use strict";

	var result = {
		firstname: "",
		middlename: "",
		lastname: "",
		dob: "",
		gender: ""
	};

	return Controller.extend("mark.one.controller.App", {
		onInit: function() {
			var oData = {
				"SelectedProduct": "HT-1000",
				"ProductCollection": [{
						"ProductId": "HT-1000",
						"Name": "Select"
					},

					{
						"ProductId": "HT-1001",
						"Name": "Male"
					}, {
						"ProductId": "HT-1002",
						"Name": "Female"
					}
				],

				"Editable": true,
				"Enabled": true
			};

			// set explored app's demo model on this sample
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},

		onSubmit: function() {
			result.firstname = this.getView().byId("FirstName").getValue();
			result.middlename = this.getView().byId("MiddleName").getValue();
			result.lastname = this.getView().byId("LastName").getValue();
			result.dob = this.getView().byId("DP1").getValue();
			result.gender = this.getView().byId("Gender").getSelectedItem().getText();
			if (result.gender == "Select") {
				result.gender = "Not Selected";
			}

			console.log(result.firstname, result.middlename, result.lastname, result.dob, result.gender);
			
			
			if (result.firstname == "" || result.lastname == "" || result.dob == "") {
				MessageToast.show("Please fill the form and submit, thank you!");
			} else {
				var sJson = JSON.stringify(result);
            console.log("JSON data:", sJson);
            this.getView().byId("Resultdisplay").setValue("JSON data:\n"+sJson);
				MessageToast.show("Submitted Succesfully :)");
			}
			// do something with the value of firstName
		}
	});
});