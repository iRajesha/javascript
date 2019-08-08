/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore',
        'knockout',
        'jquery',
        'ojs/ojlistview',
        'ojs/ojinputtext',
        'ojs/ojcollectiontabledatasource',
        'ojs/ojarraytabledatasource',
        'ojs/ojmodel',
        'ojs/ojvalidation-datetime',
        'ojs/ojconveyorbelt'],
 function(oj, ko, $) {
    function TicketDeskViewModel() {
      var self = this;
      ticketListDataSource = ko.observable()
      ticketModelItem = oj.Model.extend({
        idAttribute:'id'
      })
      ticketListCollection = new oj.Collection(null, {
        url : 'http://localhost:8080/tickets',
        model : ticketModelItem
      })
      self.ticketList = ko.observable(ticketListCollection);
      self.ticketListDataSource= new oj.CollectionTableDataSource(self.ticketList());
      //ticketListDataSource = new oj.CollectionTableDataSource(ticketListCollection)
    

      self.selectedTicket = ko.observableArray([]);
      self.selectedTicketModel = ko.observable();
      self.selectedTicketRepId = ko.observable();


      /* List selection listener */
      self.listSelectionChanged = function () {
      self.selectedTicketModel(self.ticketList().get(self.selectedTicket()[0]))
               // Check if the selected ticket exists within the tab data
               var match = ko.utils.arrayFirst(self.tabData(), function (item) {
                     return item.id == self.selectedTicket()[0];
               });
               if (!match) {
                      self.tabData.push({
                           "name": self.selectedTicket()[0],
                           "id": self.selectedTicket()[0]
                      });
               }
          self.selectedTicketRepId(self.selectedTicketModel().get('representativeId'));
         self.selectedTabItem(self.selectedTicket()[0]);
  }
      self.selectedTabItem = ko.observable()
      /* Tab Component */
      self.tabData = ko.observableArray([]);
      self.tabBarDataSource = new oj.ArrayTableDataSource(self.tabData, { idAttribute: 'id' });
      self.tabSelectionChanged = function () {
        self.selectedTicketModel(self.ticketList().get(self.selectedTabItem()))
        self.selectedTicket([self.selectedTabItem()])
      }
      self.deleteTab = function (id) {
        var hnavlist = document.getElementById('ticket-tab-bar'),
          items = self.tabData();
        for (var i = 0; i < items.length; i++) {
          if (items[i].id === id) {
            self.tabData.splice(i, 1);
            if(id === self.selectedTicket()[0] ||
         self.selectedTicket()[0] != self.selectedTabItem()){
         self.selectedTabItem(self.tabData()[0].id);
}
            oj.Context.getContext(hnavlist)
              .getBusyContext()
              .whenReady()
              .then(function () {
                hnavlist.focus();
              });
            break;
          }
        }
      };
      self.onTabRemove = function (event) {
        self.deleteTab(event.detail.key);
        event.preventDefault();
        event.stopPropagation();
      };
      self.formatDate = function(date){
        return oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).
        createConverter({
          'pattern':'dd/MM/yyyy'
        }).format(date)
      }
  
    }
    return TicketDeskViewModel;
  }
);

// define([],
//  function() {

//     function DashboardViewModel() {
//       var self = this;
//       // Below are a set of the ViewModel methods invoked by the oj-module component.
//       // Please reference the oj-module jsDoc for additional information.

//       /**
//        * Optional ViewModel method invoked after the View is inserted into the
//        * document DOM.  The application can put logic that requires the DOM being
//        * attached here.
//        * This method might be called multiple times - after the View is created
//        * and inserted into the DOM and after the View is reconnected
//        * after being disconnected.
//        */
//       self.connected = function() {
//         // Implement if needed
//       };

//       /**
//        * Optional ViewModel method invoked after the View is disconnected from the DOM.
//        */
//       self.disconnected = function() {
//         // Implement if needed
//       };

//       /**
//        * Optional ViewModel method invoked after transition to the new View is complete.
//        * That includes any possible animation between the old and the new View.
//        */
//       self.transitionCompleted = function() {
//         // Implement if needed
//       };
//     }

//     /*
//      * Returns a constructor for the ViewModel so that the ViewModel is constructed
//      * each time the view is displayed.  Return an instance of the ViewModel if
//      * only one instance of the ViewModel is needed.
//      */
//     return new DashboardViewModel();
//   }
// );
