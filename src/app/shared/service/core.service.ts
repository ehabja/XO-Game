export class CoreService{

    public notFair(matrix): boolean{
        var x = 0;
        var o = 0;
        for(let i=0 ; i<matrix.length ; i++){
            for(let j=0 ; j<matrix[i].length ; j++){
                if(matrix[i][j] == "x"){
                    x++;
                }
                if(matrix[i][j] == "o"){
                    o++
                }
            }
        }
        return x == o;
    }
    
    //check if x won
    public xWin(matrix): boolean{
        if(matrix[0][0] == "x" && matrix[0][1] == "x" && matrix[0][2] == "x" || matrix[1][0] == "x" && matrix[1][1] == "x" &&  matrix[1][2] == "x" || matrix[2][0] == "x" && matrix[2][1] == "x" && matrix[2][2] == "x" || matrix[0][0] == "x" && matrix[1][1] == "x" && matrix[2][2] == "x" || matrix[0][2] == "x" && matrix[1][1] == "x" && matrix[2][0] == "x" || matrix[0][0] == "x" && matrix[1][0] == "x" && matrix[2][0] == "x" || matrix[0][1] == "x" && matrix[1][1] == "x" && matrix[2][1] == "x" || matrix[0][2] == "x" && matrix[1][2] == "x" && matrix[2][2] == "x"){
            return true;
        }
        return false;
    }

    //check if x can win 
    public xCanWin(matrix): boolean{
        if(matrix[0][0] == "empty" && matrix[0][1] == "x" && matrix[0][2] == "x" || matrix[1][0] == "empty" && matrix[1][1] == "x" && matrix[1][2] == "x" || matrix[2][0] == "empty" && matrix[2][1] == "x" && matrix[2][2] == "x" || matrix[0][0] == "empty" && matrix[1][1] == "x" && matrix[2][2] == "x" || matrix[0][2] == "empty" && matrix[1][1] == "x" && matrix[2][0] == "x" || matrix[0][0] == "empty" && matrix[1][0] == "x" && matrix[2][0] == "x" || matrix[0][1] == "empty" && matrix[1][1] == "x" && matrix[2][1] == "x" || matrix[0][2] == "empty" && matrix[1][2] == "x" && matrix[2][2] == "x" || matrix[0][0] == "x" && matrix[0][1] == "empty" && matrix[0][2] == "x" || matrix[1][0] == "x" && matrix[1][1] == "empty" &&  matrix[1][2] == "x" || matrix[2][0] == "o" && matrix[2][1] == "empty" && matrix[2][2] == "x" || matrix[0][0] == "x" && matrix[1][1] == "empty" && matrix[2][2] == "x" || matrix[0][2] == "x" && matrix[1][1] == "empty" && matrix[2][0] == "x" || matrix[0][0] == "x" && matrix[1][0] == "empty" && matrix[2][0] == "x" || matrix[0][1] == "x" && matrix[1][1] == "empty" && matrix[2][1] == "x" || matrix[0][2] == "x" && matrix[1][2] == "empty" && matrix[2][2] == "x" || matrix[0][0] == "x" && matrix[0][1] == "x" && matrix[0][2] == "empty" || (matrix[1][0] == "x" && matrix[1][1] == "x" &&  matrix[1][2]) == "empty" || matrix[2][0] == "x" && matrix[2][1] == "x" && matrix[2][2] == "empty" || matrix[0][0] == "x" && matrix[1][1] == "x" && matrix[2][2] == "empty" || matrix[0][2] == "x" && matrix[1][1] == "x" && matrix[2][0] == "empty" || matrix[0][0] == "x" && matrix[1][0] == "x" && matrix[2][0] == "empty" || matrix[0][1] == "x" && matrix[1][1] == "x" && matrix[2][1] == "empty" || matrix[0][2] == "x" && matrix[1][2] == "x" && matrix[2][2] == "empty"){
            return true;
        }
        return false;
    }

    //check if o won
    public oWin(matrix): boolean{
        if(matrix[0][0] == "o" && matrix[0][1] == "o" && matrix[0][2] == "o" || matrix[1][0] == "o" && matrix[1][1] == "o" &&  matrix[1][2] == "o" || matrix[2][0] == "o" && matrix[2][1] == "o" && matrix[2][2] == "o" || matrix[0][0] == "o" && matrix[1][1] == "o" && matrix[2][2] == "o" || matrix[0][2] == "o" && matrix[1][1] == "o" && matrix[2][0] == "o" || matrix[0][0] == "o" && matrix[1][0] == "o" && matrix[2][0] == "o" || matrix[0][1] == "o" && matrix[1][1] == "o" && matrix[2][1] == "o" || matrix[0][2] == "o" && matrix[1][2] == "o" && matrix[2][2] == "o"){
            return true;
        }
        return false;
    }

    //check if o can win
    public oCanWin(matrix): boolean{
        if(matrix[0][0] == "empty" && matrix[0][1] == "o" && matrix[0][2] == "o" || matrix[1][0] == "empty" && matrix[1][1] == "o" &&  matrix[1][2] == "o" || matrix[2][0] == "empty" && matrix[2][1] == "o" && matrix[2][2] == "o" || matrix[0][0] == "empty" && matrix[1][1] == "o" && matrix[2][2] == "o" || matrix[0][2] == "empty" && matrix[1][1] == "o" && matrix[2][0] == "o" || matrix[0][0] == "empty" && matrix[1][0] == "o" && matrix[2][0] == "o" || matrix[0][1] == "empty" && matrix[1][1] == "o" && matrix[2][1] == "o" || matrix[0][2] == "empty" && matrix[1][2] == "o" && matrix[2][2] == "o" || matrix[0][0] == "o" && matrix[0][1] == "empty" && matrix[0][2] == "o" || matrix[1][0] == "o" && matrix[1][1] == "empty" &&  matrix[1][2] == "o" || matrix[2][0] == "o" && matrix[2][1] == "empty" && matrix[2][2] == "o" || matrix[0][0] == "o" && matrix[1][1] == "empty" && matrix[2][2] == "o" || matrix[0][2] == "o" && matrix[1][1] == "empty" && matrix[2][0] == "o" || matrix[0][0] == "o" && matrix[1][0] == "empty" && matrix[2][0] == "o" || matrix[0][1] == "o" && matrix[1][1] == "empty" && matrix[2][1] == "o" || matrix[0][2] == "o" && matrix[1][2] == "empty" && matrix[2][2] == "o" || matrix[0][0] == "o" && matrix[0][1] == "o" && matrix[0][2] == "empty" || (matrix[1][0] == "o" && matrix[1][1] == "o" &&  matrix[1][2]) == "empty" || matrix[2][0] == "o" && matrix[2][1] == "o" && matrix[2][2] == "empty" || matrix[0][0] == "o" && matrix[1][1] == "o" && matrix[2][2] == "empty" || matrix[0][2] == "o" && matrix[1][1] == "o" && matrix[2][0] == "empty" || matrix[0][0] == "o" && matrix[1][0] == "o" && matrix[2][0] == "empty" || matrix[0][1] == "o" && matrix[1][1] == "o" && matrix[2][1] == "empty" || matrix[0][2] == "o" && matrix[1][2] == "o" && matrix[2][2] == "empty"){
            return true;
        }
        return false;
    }

    //check if empty
    public isEmpty(matrix): any{
        for(let i=0 ; i<matrix.length ; i++){
            for(let j=0 ; j<matrix[i].length ; j++){
                if(matrix[i][j] == "o" || matrix[i][j] == "x"){
                    return false;
                }
            }
        }
        return true;
    }

    //check if there is no place
    public isFull(matrix): any{
        for(let i=0 ; i<matrix.length ; i++){
            for(let j=0 ; j<matrix[i].length ; j++){
                if(matrix[i][j] == "empty"){
                    return false;
                }
            }
        }
        return true;
    }
    
    //random playing o
    public randomPlay(matrix){
        var pass = false;
        while(!pass){
            var x = this.randomInt(0,2);
            var y = this.randomInt(0,2);
            if(matrix[x][y] == "empty"){
                matrix[x][y] = "o";
                pass = true;
            }
        }
        return matrix;
    }

    public randomInt(min, max): any{
        return Math.floor(Math.random()*(max - min +1)) + min;
    }

    //block x if winning
    public blockX(matrix): any{
       //Check for Rows
       for(var i = 0; i < matrix.length; i++){
            if(matrix[i][0] == "x" && matrix[i][1] == "x" && matrix[i][2] == "empty"){
                matrix[i][2] = "o";
                return matrix;
            }
            else if(matrix[i][0] == "x" && matrix[i][1] == "empty" && matrix[i][2] == "x"){
                matrix[i][1] = "o"; 
                return matrix;
            }
            else if(matrix[i][0] == "empty" && matrix[i][1] == "x" && matrix[i][2] == "x"){
                matrix[i][0] = "o";
                return matrix;
            }
        }

        //Check for Columns
        var i = 0;
        for(var k = 0; k < matrix.length; k++){
            if(matrix[i][k] == "x" && matrix[i + 1][k] == "x" && matrix[i + 2][k] == "empty"){
                matrix[i+2][k] = "o";
                return matrix;
            }
            else if(matrix[i][k] == "x" && matrix[i + 1][k] == "empty" && matrix[i + 2][k] == "x"){
                matrix[i+1][k] = "o";
                return matrix;
            }
            else if(matrix[i][k] == "empty" && matrix[i + 1][k] == "x" && matrix[i + 2][k] == "x"){
                matrix[i][k] = "o";
                return matrix;
            }
        }
        //Check for Diagonals
        //Top-Left
        if(matrix[0][0] == "x" && matrix[1][1] == "x" && matrix[2][2] == "empty"){
            matrix[2][2] = "o";
            return matrix;
        }
        else if(matrix[0][0] == "x" && matrix[1][1] == "empty" && matrix[2][2] == "x"){
            matrix[1][1] = "o";
            return matrix;
        }
        else if(matrix[0][0] == "empty" && matrix[1][1] == "x" && matrix[2][2] == "x"){
            matrix[0][0] = "o";
            return matrix;
        }
        
        //Top-Right
        if(matrix[0][2] == "x" && matrix[1][1] == "x" && matrix[2][0] == "empty"){
            matrix[2][0] = "o";
            return matrix;
        }else if(matrix[0][2] == "x" && matrix[1][1] == "empty" && matrix[2][0] == "x"){
            matrix[1][1] = "o";
            return matrix;
        }else if(matrix[0][2] == "empty" && matrix[1][1] == "x" && matrix[2][0] == "x"){
            matrix[0][2] = "o";
            return matrix;
        }

        return null;
    }

    //computer win the game
     public oWinning(matrix): any{
        //Check for Rows
        for(var i = 0; i < matrix.length; i++){
             if(matrix[i][0] == "o" && matrix[i][1] == "o" && matrix[i][2] == "empty"){
                 matrix[i][2] = "o";
                 return matrix;
             }
             else if(matrix[i][0] == "o" && matrix[i][1] == "empty" && matrix[i][2] == "o"){
                 matrix[i][1] = "o"; 
                 return matrix;
             }
             else if(matrix[i][0] == "empty" && matrix[i][1] == "o" && matrix[i][2] == "o"){
                 matrix[i][0] = "o";
                 return matrix;
             }
         }
 
         //Check for Columns
         var i = 0;
         for(var k = 0; k < matrix.length; k++){
             if(matrix[i][k] == "o" && matrix[i + 1][k] == "o" && matrix[i + 2][k] == "empty"){
                 matrix[i+2][k] = "o";
                 return matrix;
             }
             else if(matrix[i][k] == "o" && matrix[i + 1][k] == "empty" && matrix[i + 2][k] == "o"){
                 matrix[i+1][k] = "o";
                 return matrix;
             }
             else if(matrix[i][k] == "empty" && matrix[i + 1][k] == "o" && matrix[i + 2][k] == "o"){
                 matrix[i][k] = "o";
                 return matrix;
             }
         }
         //Check for Diagonals
         //Top-Left
         if(matrix[0][0] == "o" && matrix[1][1] == "o" && matrix[2][2] == "empty"){
             matrix[2][2] = "o"
             return matrix;
         }
         else if(matrix[0][0] == "o" && matrix[1][1] == "empty" && matrix[2][2] == "o"){
             matrix[1][1] = "o";
             return matrix;
         }
         else if(matrix[0][0] == "empty" && matrix[1][1] == "o" && matrix[2][2] == "o"){
             matrix[0][0] = "o";
             return matrix;
         }
         
         //Top-Right
         if(matrix[0][2] == "o" && matrix[1][1] == "o" && matrix[2][0] == "empty"){
             matrix[2][0] = "o";
             return matrix;
         }else if(matrix[0][2] == "o" && matrix[1][1] == "empty" && matrix[2][0] == "o"){
             matrix[1][1] = "o";
             return matrix;
         }else if(matrix[0][2] == "empty" && matrix[1][1] == "o" && matrix[2][0] == "o"){
             matrix[0][2] = "o";
             return matrix;
         }
 
         return matrix;
     }

}