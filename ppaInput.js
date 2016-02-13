angular.module('ppaComponents')
  .directive('ppaInput', function() {
    return {
      restrict: 'E',
      template: '<app-input></app-input>',
      scope: {
        value: '@',
        type: '@',
        onValueChange: '&'
      },
      link: function(scope, iElement, iAttrs) {
        var appInput = angular.element(iElement.children()[0]);
        appInput[0].value = scope.value;
        appInput[0].type = scope.type;
        appInput[0].readonly = iAttrs.hasOwnProperty('readonly');

        appInput.on('value-change', function(event) {
          scope.$apply(function() {
            scope.onValueChange({event: event});
          });
        });
      }
    };
  });
