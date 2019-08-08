define(['knockout'], function (ko) {
    function appUtils() {
        var self = this;
        /* Utils */
        self.formatDate = function (date) {
            var formatDate = oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME)
                .createConverter({
                    'pattern': 'dd/MM/yyyy'
                });
            return formatDate.format(date)
        }
        /* Function to calculate date ranges */
        self.dateDifference = function (date) {
            var todaysDate = new Date();
            var messageDate = new Date(date)
            var res = Math.abs(todaysDate - messageDate) / 1000;
            var days = Math.floor(res / 86400);
            if (days < 1) {
                return "less than a day ago"
            } else if (days === 1) {
                return "a day ago"
            } else if (days <= 7) {
                return "less than a week ago"
            } else if (days > 7 && days <= 30) {
                return "more than a week ago"
            } else if (days > 30) {
                return "more than a month ago"
            }
        }
        /* Function to get ticket status */
        self.ticketStatus = function (status) {
            if (status === "Working") {
                return "Ticket status currently 'working', our team are hard at work looking into your issue."
            } else if (status === "Closed") {
                return "Ticket status is 'closed', and is now in read-only mode. In order to help us continue to offer the best support we can, please rate your experience."
            } else if (status === "Awaiting Customer Response") {
                return "Ticket status is currently 'awaiting customer response', our team is awaiting your reply."
            }
        }
    }
    return new appUtils;
})