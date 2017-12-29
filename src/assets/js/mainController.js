var app = angular.module("myApp", ["ngRoute"]);
app.controller("myCtrl", function ($scope) {
    $scope.lhn = [
        {
            "dispValue": "Application Form",
            "url": "#!applicationform"
        }, {
            "dispValue": "Retailers / Dealers",
            "url": "#!dealers"
        }, {
            "dispValue": "Investors",
            "url": "#!investors"
        }, {
            "dispValue": "Agents",
            "url": "#!agents"
        }
    ]

});
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "./assets/views/home.html"
        })
        .when("/currentresearch", {
            templateUrl: "./assets/views/currentresearch.html"
        })
        .when("/whatisbiodiesel", {
            templateUrl: "./assets/views/whatisbiodiesel.html"
        })
        .when("/biodieselhistory", {
            templateUrl: "./assets/views/biodieselhistory.html"
        })
        .when("/futurefuel", {
            templateUrl: "./assets/views/futurefuel.html"
        })
        .when("/swotanalysis", {
            templateUrl: "./assets/views/swotanalysis.html"
        })
        .when("/factsandfigures", {
            templateUrl: "./assets/views/factsandfigures.html"
        })
        .when("/aboutFeedStock", {
            templateUrl: "./assets/views/aboutFeedStock.html"
        })
        .when("/animaltallow", {
            templateUrl: "./assets/views/animaltallow.html"
        })
        .when("/biodieselfromneemoil", {
            templateUrl: "./assets/views/biodieselfromneemoil.html"
        })
        .when("/biodieselfrompalmoil", {
            templateUrl: "./assets/views/biodieselfrompalmoil.html"
        })
        .when("/rapeseedasafuel", {
            templateUrl: "./assets/views/rapeseedasafuel.html"
        })
        .when("/ricebranoil", {
            templateUrl: "./assets/views/ricebranoil.html"
        })
        .when("/wastevegetableoil", {
            templateUrl: "./assets/views/wastevegetableoil.html"
        })
        .when("/governmentvision", {
            templateUrl: "./assets/views/governmentvision.html"
        })
        .when("/faq", {
            templateUrl: "./assets/views/faq.html"
        })
        .when("/companymission", {
            templateUrl: "./assets/views/companymission.html"
        })
        .when("/deskofmd", {
            templateUrl: "./assets/views/deskofmd.html"
        })
        .when("/contact", {
            templateUrl: "./assets/views/contact.html"
        })
        .when("/production", {
            templateUrl: "./assets/views/production.html"
        })
        .when("/policies", {
            templateUrl: "./assets/views/policies.html"
        })
        .when("/companyinfo", {
            templateUrl: "./assets/views/companyinfo.html"
        })
        .when("/", {
            templateUrl: "./assets/views/home.html"
        })
        .when("/applicationform", {
            templateUrl: "./assets/views/applicationform.html"
        })
        .when("/dealers", {
            templateUrl: "./assets/views/dealers.html"
        })
        .when("/investors", {
            templateUrl: "./assets/views/investors.html"
        })
        .when("/agents", {
            templateUrl: "./assets/views/agents.html"
        });
});