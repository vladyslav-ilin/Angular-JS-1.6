let app = angular.module("exampleApp", [])
   app.controller("defaultCtrl", function ($scope, $timeout) {

      $scope.currentView = "route";

      $scope.refresh = function () {
         $scope.items = [{ id: 0, name: "Vlad Ilin", department: 'Development', textarea: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
         { id: 1, name: "Anna Kobzar", department: 'Development', textarea: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
         { id: 2, name: "Roma Nepuypivo", department: 'QA', textarea: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
         { id: 3, name: "Sasha Velichko", department: 'Development', textarea: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
         { id: 4, name: "Julia Lytvyn", department: 'Master Yoda', textarea: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
            { id: 5, name: "Vova PolishCow", department: 'Designer', textarea: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
         ];
      }

      $scope.select = ['', 'Development', 'QA', 'Designer', 'Master Yoda'];
      $scope.selected = $scope.select[0]

      $scope.create = function (item) {
         $scope.items.push(item);
         $scope.currentView = "table"
      }

      // Обновить
      $scope.update = function (item) {
         for (var i = 0; i < $scope.items.length; i++) {
            if ($scope.items[i].id == item.id) {
               $scope.items[i] = item;
               break;
            }
         }
         $scope.currentView = "table"
      }


      // Удалить элемент
      $scope.delete = function (item) {
         if (confirm('Are realy wana delete this perfect record???')) {
               $scope.items.splice($scope.items.indexOf(item), 1);
         } else {
            return;
         }
      }
      

      // Редактировать или создать новое
      $scope.editOrCreate = function (item) {
         $scope.currentItem = item ? angular.copy(item) : {};
         $scope.currentView = "edit";
      }

      // Сохранить
      $scope.saveEdit = function (item) {
         if (angular.isDefined(item.id)) {
            $scope.update(item);
         } else {
            $scope.create(item);
         }
      }

      // Отменить изменения
      $scope.cancelEdit = function () {
         $scope.currentItem = {};
         $scope.currentView = "table";
      }

      $scope.mainEdit = function () {

         angular.element(document.querySelector(".loading")).addClass("add");
         $timeout(function () {
            $scope.currentView = "table";
            angular.element(document.querySelector(".loading")).removeClass("add");
          }, 2000);

      }

      $scope.routeEdit = function () {
         $scope.currentView = "route";
      }

      $scope.refresh();

   });

