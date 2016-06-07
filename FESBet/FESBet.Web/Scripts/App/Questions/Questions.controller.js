(function () {
    'use strict';

    angular.module("app").controller('QuestionsController', QuestionsController);

    QuestionsController.$inject = ["$state","$scope"];
    function QuestionsController($state, $scope) {
        
        $scope.questionText = 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.';
        $scope.ShowHide = function (index) {
            $scope.container.questions[index].boolShow = !$scope.container.questions[index].boolShow;
        }

        $scope.container = {
            questions: [
                {
                    question:'I have forgotten my username/password - what can I do?',
                    answer:'If you have forgotten your login details, you can use our Lost Login facility, available on web, mobile and tablet. Web   To access the Lost Login facility via the web, please select Lost Login? in the top right corner of our website.',         
                    index: 0,
                    boolShow : false
                },
                {
                    question:'How can I change my pasword?',
                    answer: 'You can change your password by logging into your account and going to the Services drop down menu in the top left corner > Profil > Change Password.',
                    index:1,
                    boolShow : false

                },
                {
                    question:'How do I place a bet?',
                    answer: 'To bet on a single selection, make your choice from the sports navigation and then choose your market. Select the price you wish to take, this automatically adds your selection to the Bet Slip. Once on the Bet Slip you can enter the stake you wish to risk. If your selection is correct, select Place Bet',
                    index: 2,
                    boolShow: false
                    
                },
                  {
                     question: 'What is the minimum unit stake?',
                     answer: 'The minimum unit stake that you can place on any bet is determined by the odds of the selection(s). If your stake is below the minimum permitted your Bet Slip will indicate the minimum allowed.',
                     index: 3,
                     boolShow: false
                  },
                {
                    question: 'Where do I find information about Maximum Winnings?',
                    answer: 'There are maximum winnings limits that apply to FESBbet bets within any 24 hour period and the limit will vary dependent on the different sports and events you have bet on. Where a multiple bet has been placed involving events with different maximum winnings limits then the lowest limit will apply.',
                    index: 4,
                    boolShow: false
                },
                {
                    question: 'What payment methods do you accept?',
                    answer: 'You can fund your FESBbet account using a wide range of payment methods including debit and credit cards, bank transfers, prepaid vouchers or ewallet systems.',
                    index: 5,
                    boolShow: false
                },
                {
                    question: 'What is an IBAN?',
                    answer: 'The International Bank Account Number (IBAN) is an international standard for numbering bank accounts. The IBAN consists of a two letter country code and up to thirty alphanumeric characters. If you reside in the EU, you can find the IBAN number on your bank statement.',
                    index: 6,
                    boolShow: false
                },
                {
                    question: 'Are my transactions/personal details secure?',
                    answer: 'Our site has been developed with your personal privacy and security as our prime concern. All payments are processed using software from Retail Logic, one of the leading providers of online credit and debit card transaction processing solutions, employing only the highest standards of data encryption to ensure your details cannot be accessed or misused.',
                    index: 7,
                    boolShow: false
                }
            ]
        }
    }
}
)();