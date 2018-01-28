var app = angular.module("myApp", ["ngRoute"]);
app.controller("myCtrl", function ($scope, $sce) {
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
            "dispValue": "Representatives",
            "url": "#!agents"
        }
    ]
    $scope.data = [
        {
            "name": "Retail Outlet",
            "imgpath": "./assets/img/angularjslogo.jpg",
            "topic": "Retail Outlet",
            "Description": "Fill this Application Form if you want to open a Retail Outlet",
            "id": "1",
            "url": "https://docs.google.com/forms/d/e/1FAIpQLSeztynG2BBTWrhwVXtEEcFHWabEIMdk8SMPVnstQIz-wesMYA/viewform?embedded=true"
        },
        {
            "name": "Biodiesel Outlet",
            "imgpath": "./assets/img/awslogologo.jpg",
            "topic": "Biodiesel Outlet",
            "Description": "Fill this Application Form if you want to open a Biodiesel Outlet",
            "id": "2",
            "url": "https://docs.google.com/forms/d/e/1FAIpQLScR72WW8CfolqOI-Yqj60Yzw7LDipKvcWptPcbHS2CkzBPDng/viewform?embedded=true"
        }
    ]
    $scope.investors = [
        {
            "name": "Investors",
            "imgpath": "./assets/img/investors.jpg",
            "topic": "Investors",
            "Description": "Fill this Application Form if you want to invest in Jai Jawan Biodiesel",
            "id": "1",
            "url": "https://docs.google.com/forms/d/e/1FAIpQLSfzRQiDqRzkc2wTshlaRXWwX9fQEEcAfdZFiNJkwBeLDSjp9A/viewform?embedded=true"
        }
    ]
    $scope.representatives = [
        {
            "name": "Representatives",
            "imgpath": "./assets/img/representative.jpg",
            "topic": "Representatives",
            "Description": "Fill this Application Form if you want to be representative for Jai Jawan Biodiesel",
            "id": "1",
            "url": "https://docs.google.com/forms/d/e/1FAIpQLSdssz7Pltj3z79-vHTFp1VTSV0E08eOyrHoORLnBYLq1GtNcg/viewform?embedded=true"
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

app.filter('trusted', ['$sce', function ($sce) {
    return function (url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);