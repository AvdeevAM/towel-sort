
// You should implement your task here.

module.exports = function towelSort (arr) {
      let result = [];
      if (arr == undefined){
          return result;
      }
      var n = 0;
      for (var i = 0; i < arr.length; i++){
          if (i % 2 == 0){
              for (var j = 0; j < arr[i].length; j++){
                  result[n] = arr[i][j];
                  n++;
              }
          }
          if (i % 2 == 1){
              for (var j = arr[i].length - 1; j >= 0; j--){
                  result[n] = arr[i][j];
                  n++;
              }
          }
      }
      return result;
  }