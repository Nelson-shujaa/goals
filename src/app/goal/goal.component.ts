import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

    goals = [
      new Goal(1,'Watch Finding Nemo', 'FInd an onliine version and watch merlin find his son'),
      new Goal(2,'Buy Cookies', 'I have to buy cookies for the parrot'),
      new Goal(3, 'Get new Phone Case','Diana has her birthday coming up soon'),
      new Goal(4, 'Get Dog Food','pupper likes expensive snacks'),
      new Goal(5, 'Solve math homework', 'Damn math'),
      new Goal(6, 'Plot my world domination plan' , 'cause I am an evil overlod'),
    ]
    //

    toogleDetails(index){
        this.goals[index].showDescription = !this.goals[index].showDescription;
    }

        completeGoal(isComplete,index){
          if (isComplete){
            this.goals.splice(index,1);
          }
        }

  // 
  // constructor() { }
  // ngOnInit() {
  // }
}
