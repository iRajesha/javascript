define(['ojs/ojcore',
    'knockout',
    'jquery',
    'appUtils',
    'trumbowyg',
    'ojs/ojlistview',
    'ojs/ojarraydataprovider',
    'trumbowyg'

  ],
  function (oj, ko, $, appUtils) {
    function ViewTicketViewModel(params) {
      var self = this;
      //console.log('applUtils ', appUtils)
      self.formatDate = appUtils.formatDate;
      self.ticketStatus = appUtils.ticketStatus
      self.dateDifference = appUtils.dateDifference
      //console.log(params.ticketModel())
      self.ticketId = ko.observable();
      self.title = ko.observable();
      self.author = ko.observable();
      self.dateCreated = ko.observable();
      self.showDateDifference = ko.observable();
      self.message = ko.observable();
      self.status = ko.observable()
      self.attachment = ko.observable();

      self.ticketModel = ko.computed(function () {
        self.ticketId(params.ticketModel().get('id'))
        self.title(params.ticketModel().get('title'))
        self.author(params.ticketModel().get('author'))
        self.dateCreated(params.ticketModel().get('dateCreated'))
        self.message(params.ticketModel().get('message'))
        self.status(params.ticketModel().get('status'))
        self.attachment(params.ticketModel().get('attachment'))
        return params.ticketModel();
      });

      /* List View Collection and Model */
      self.ticketRepliesDataSource = ko.observable();
      self.ticketReplyModel = oj.Model.extend({
        idAttribute: 'id'
      });
      var ticketRepliesCollection = oj.Collection.extend({
        customURL: function () {
          var retObj = {};
          retObj['url'] = "http://localhost:8080/tickets/replies/" + self.ticketId()
          return retObj
        },
        model: self.ticketReplyModel
      });
      self.ticketReplies = new ticketRepliesCollection();

      self.ticketRepliesDataSource(new oj.CollectionTableDataSource(self.ticketReplies));
      self.ticketId.subscribe(function () {
        self.ticketReplies.fetch();
      })

      self.handleAttached = function () {
        // console.log('In connected method')
        // $('#ticket-reply-area').trumbowyg(
        //   {
        //   btns: ['bold', 'italic', 'underline'],
        //   resetCss: false,
        //   removeformatPasted: true
        // })
      }

    }
    return ViewTicketViewModel;
  });