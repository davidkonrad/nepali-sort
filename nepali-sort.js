jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "nepali-sort-pre" : function(a) {
        function nepaliToLatin(nepali) {
            switch (nepali) {
                case "०": return 0; break;
                case "१": return 1; break;
                case "२": return 2; break;
                case "३": return 3; break;
                case "४": return 4; break;
                case "५": return 5; break;
                case "६": return 6; break;
                case "७": return 7; break;
                case "८": return 8; break;
                case "९": return 9; break;        
                default : return 0; break;
            }        
        }
        var latin = '';
        for (var i=0;i<a.length;i++) {
            latin+=nepaliToLatin(a.charAt(i));
        }
        return parseInt(latin);
    },                
    "nepali-sort-asc": function( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
    "nepali-sort-desc": function(a,b) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
});
