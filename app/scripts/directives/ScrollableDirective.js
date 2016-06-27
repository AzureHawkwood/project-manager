'use strict';

//Ftscroller
angular.module('projectManagerApp').directive('scrollable', function () {
    return {
        replace: false,
        restrict: 'A',
        scope:{},   //Important pour pouvoir récupérer le scope de l'élément dans la fonction link
        link: function (scope, element, attr)
        {
           
           

        

/*
            var ngScrollerOptions = {
                scrollbars: true,
                scrollingX: false,
                scrollingY: false
            };

             // default timeout
            var ngiScroll_timeout = 5;
            // default options
            var ngiScroll_opts = {
                snap: true,
                momentum: true,
                hScrollbar: false
            };

            // ng-ftscroller-always-scroll
            if (attr.ngFtscrollerAlwaysScroll !== undefined && attr.ngFtscrollerAlwaysScroll == 'true') {
                ngScrollerOptions.alwaysScroll = true;
            }

            var scroll_key = attr.ngIscroll;

            if (scroll_key === '') {
                scroll_key = attr.id;
            }


            // ng-ftscroller-base-alignments
            // instead of using an object use x,y
            // example:
            // ng-ftscroller-base-alignments="-1,10"
            if (attr.ngFtscrollerBaseAlignments !== undefined) {
                if (attr.ngFtscrollerBaseAlignments.indexOf(',') > 0) {
                    var c = attr.ngFtscrollerBaseAlignments.split(',');
                    ngScrollerOptions.baseAlignments = {
                        x: parseInt(c[0], 10),
                        y: parseInt(c[1], 10)
                    };
                } else {
                    console.error('Invalid configuration for `ng-ftscroller-base-alignments`, it must be like x,y (example: -5,10)');
                }
            }

            if (scope.$parent.myScrollOptions) {
                for (var i in scope.$parent.myScrollOptions) {
                    if (i === scroll_key) {
                        for (var k in scope.$parent.myScrollOptions[i]) {
                            ngiScroll_opts[k] = scope.$parent.myScrollOptions[i][k];
                        }
                    } else {
                        ngiScroll_opts[i] = scope.$root.myScrollOptions[i];
                    }
                }
            }

            // ng-ftscroller-bouncing
            if (attr.ngFtscrollerBouncing !== undefined && attr.ngFtscrollerBouncing == 'true') {
                ngScrollerOptions.bouncing = true;
            }

            // ng-ftscroller-content-width
            if (attr.ngFtscrollerContentWidth !== undefined) {
                ngScrollerOptions.contentWidth = attr.ngFtscrollerContentWidth;
            }
            // ng-ftscroller-content-height
            if (attr.ngFtscrollerContentHeight !== undefined) {
                ngScrollerOptions.contentHeight = attr.ngFtscrollerContentHeight;
            }

            // new specific setting for setting timeout using: ng-iscroll-timeout='{val}'
            if (attr.ngIscrollDelay !== undefined) {
                ngiScroll_timeout = attr.ngIscrollDelay;
            }

*/
           

           var ngiScroll_timeout = 5;
            // default options
            var ngiScroll_opts = {
                snap: true,
                momentum: true,
                hScrollbar: false,

                scrollbars: true,
                scrollingX: true,
                scrollingY: true,
                bouncing: false,
                alwaysScroll: false,
                updateOnWindowResize: true
            };


           
            var scroll_key = attr.id;
            
            // initialize function
            function setScroll()
            {
                if (scope.$parent.myScroll === undefined) {
                    scope.$parent.myScroll = [];
                }

                scope.$parent.myScroll[scroll_key] = new FTScroller(element[0], ngiScroll_opts);
                
            }


            

            // watch for 'ng-iscroll' directive in html code
            scope.$watch(attr.ngIscroll, function ()
            {
               setTimeout(setScroll, ngiScroll_timeout);
            });
        }
    };
});



