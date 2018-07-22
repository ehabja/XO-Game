import { Component, OnInit, HostListener, Input } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';
import { AttachSession } from 'protractor/built/driverProviders';
import { timeout } from 'q';
import { CoreService } from '../shared/service/core.service';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})

export class MatrixComponent implements OnInit {

    @Input()
    public matrix;
    public state: number;

    constructor(private coreService: CoreService) { 
    }

    ngOnInit() {
        this.state = 0;
        this.matrix = [["empty","empty","empty"],["empty","empty","empty"],["empty","empty","empty"]];
    }

    public playAgain(): void{
        this.ngOnInit();
    }

    playerClicked(x,y): void{
        //user cant click while the computer is playing or winning
        if(this.coreService.isEmpty(this.matrix)){
            if(this.matrix[x][y] == "empty" && !this.coreService.xWin(this.matrix) && !this.coreService.oWin(this.matrix)){
                this.matrix[x][y] = "x";
                let that=this;
                setTimeout(function(){that.computerTurn();}, 2000);
            }
        }
        else{
            if(this.matrix[x][y] == "empty" && !this.coreService.xWin(this.matrix) && !this.coreService.oWin(this.matrix) && this.coreService.notFair(this.matrix)){
                this.matrix[x][y] = "x";
                let that=this;
                setTimeout(function(){that.computerTurn();}, 2000);
            }
        }
    }  

    //Game Logic
    public computerTurn(): void{
        if(this.coreService.isFull(this.matrix)){
            if(this.coreService.xWin(this.matrix) && this.coreService.oCanWin(this.matrix)){
                this.state = 3;
            }
            else if(this.coreService.xWin(this.matrix) && !this.coreService.oWin(this.matrix)){
                this.state = 2;
            }
            else{
                this.state = 3;
            }
        }
        else{
            if(this.coreService.xWin(this.matrix) && !this.coreService.oWin(this.matrix)){
                this.state = 2;
            }
            else if(!this.coreService.xWin(this.matrix) && this.coreService.oWin(this.matrix)){
                var that = this;
                setTimeout(function(){that.state = 1;}, 2000);
            }
            else{
                if(this.coreService.oCanWin(this.matrix)){
                    this.coreService.oWinning(this.matrix);
                    var that = this;
                    setTimeout(function(){that.state = 1;}, 2000);
                }
                else if(this.coreService.xCanWin(this.matrix)){
                    this.coreService.blockX(this.matrix);
                } 
                else{
                    this.coreService.randomPlay(this.matrix);
                }
            } 
        }
    }
}