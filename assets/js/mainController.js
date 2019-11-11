var app = angular.module("myApp", ["ngRoute"]);
app.controller("myCtrl", function($scope, $sce) {
    $scope.lhn = [{
            "dispValue": "पेटी डीलर /सप्लायर",
            "url": "#!petidealer"
        }, {
            "dispValue": "हमारे डीलर/सप्लायर",
            "url": "#!dealers"
        },
        // {
        //     "dispValue": "Investors",
        //     "url": "#!investors"
        // },
        {
            "dispValue": "माई डीजल सप्लायर (केवल उ0 प्र0 के लिये)",
            "url": "#!agents"
        }, {
            "dispValue": "पेटी - पेट्रोल पम्प (2000लीटर)",
            "url": "#!petipetrolpump"
        }, {
            "dispValue": "मिनी - पेट्रोल पम्प",
            "url": "#!minipetrolpump"
        },
        {
            "dispValue": "पेट्रोल पम्प डिपोट",
            "url": "#!investors"
        },
        {
            "dispValue": "मेगा - पेट्रोल पम्प",
            "url": "#!agents"
        }, {
            "dispValue": "माई डीजल प्रोडक्शन फैक्ट्री",
            "url": "#!productionfactory"
        },
        {
            "dispValue": "रजिस्टर्ड कस्टमर योजना",
            "url": "#!registeredcustomer"
        },
        {
            "dispValue": "दरवाजे-दरवाजे डीजल सप्लाई योजना",
            "url": "#!doortodoor"
        },
        {
            "dispValue": "सम्पर्क एवं कार्यालय",
            "url": "#!contact"
        }

    ]
    $scope.data = [{
            "name": "Biodiesel Retail Outlet",
            "imgpath": "./assets/img/angularjslogo.jpg",
            "topic": "Biodiesel Retail Outlet",
            "Description": "Fill this Application Form if you want to open a Retail Outlet",
            "id": "1",
            "url": "https://docs.google.com/forms/d/e/1FAIpQLSeztynG2BBTWrhwVXtEEcFHWabEIMdk8SMPVnstQIz-wesMYA/viewform?embedded=true"
        }
        // ,
        // {
        //     "name": "Biodiesel Pump",
        //     "imgpath": "./assets/img/awslogologo.jpg",
        //     "topic": "Biodiesel Pump",
        //     "Description": "Fill this Application Form if you want to open a Biodiesel Outlet",
        //     "id": "2",
        //     "url": "https://docs.google.com/forms/d/e/1FAIpQLScR72WW8CfolqOI-Yqj60Yzw7LDipKvcWptPcbHS2CkzBPDng/viewform?embedded=true"
        // }
    ]
    $scope.investors = [{
        "name": "Investors",
        "imgpath": "./assets/img/investors.jpg",
        "topic": "Investors",
        "Description": "Fill this Application Form if you want to invest in Krasak Biofuels",
        "id": "1",
        "url": "https://docs.google.com/forms/d/e/1FAIpQLSfzRQiDqRzkc2wTshlaRXWwX9fQEEcAfdZFiNJkwBeLDSjp9A/viewform?embedded=true"
    }]
    $scope.representatives = [{
        "name": "Agency",
        "imgpath": "./assets/img/representative.jpg",
        "topic": "Agency",
        "Description": "Fill this Application Form if you want to be Agency for Krasak Biofuels",
        "id": "1",
        "url": "https://docs.google.com/forms/d/e/1FAIpQLSdssz7Pltj3z79-vHTFp1VTSV0E08eOyrHoORLnBYLq1GtNcg/viewform?embedded=true"
    }]

});
app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "./assets/views/home.html"
        })
        .when("/currentresearch", {
            templateUrl: "./assets/views/currentresearch.html"
        })
        .when("/mydiesel", {
            templateUrl: "./assets/views/mydiesel.html"
        })
        .when("/mydieselmain", {
            templateUrl: "./assets/views/mydieselmain.html"
        })
        .when("/mydieselproduction", {
            templateUrl: "./assets/views/mydieselproduction.html"
        })
        .when("/mydieselbenefits", {
            templateUrl: "./assets/views/mydieselbenefits.html"
        })
        .when("/investment", {
            templateUrl: "./assets/views/investors.html"
        })
        .when("/loan", {
            templateUrl: "./assets/views/loan.html"
        })
        .when("/team", {
            templateUrl: "./assets/views/team.html"
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
        })
        .when("/minipetrolpump", {
            templateUrl: "./assets/views/minipetrolpump.html"
        })
        .when("/registeredcustomer", {
            templateUrl: "./assets/views/registeredcustomer.html"
        })
        .when("/petidealer", {
            templateUrl: "./assets/views/petidealer.html"
        })
        .when("/doortodoor", {
            templateUrl: "./assets/views/doortodoor.html"
        })
        .when("/productionfactory", {
            templateUrl: "./assets/views/myDieselProductionFac.html"
        })
        .when("/petipetrolpump", {
            templateUrl: "./assets/views/petipetrolpump.html"
        });
});

// app.controller("dealerCtrl", function ($scope, $sce) {
//     $scope.data = [
//         {
//             "name": "Biodiesel Retail Outlet",
//             "imgpath": "./assets/img/angularjslogo.jpg",
//             "topic": "Biodiesel Retail Outlet",
//             "Description": "Fill this Application Form if you want to open a Retail Outlet",
//             "id": "1",
//             "url": "https://docs.google.com/forms/d/e/1FAIpQLSeztynG2BBTWrhwVXtEEcFHWabEIMdk8SMPVnstQIz-wesMYA/viewform?embedded=true"
//         }
//     ]
//     $scope.name = "John Doe";
// });

app.filter('trusted', ['$sce', function($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);