import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  categories = ['Work', 'School', 'Personal']

  taskObject //new variable for our addTask()

  taskName //itemName = variable name for addTask object which will add the new tasks
  taskDate //itemDueDate
  taskPriority //itemPriority
  taskCategory  //itemCategory

 

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

 async dismiss(){
  await this.modalCtrl.dismiss(this.taskObject)   //this function will allow us to exit the addItem page and return to the todolist
  }

  selectedCategory(index){
    this.taskCategory = this.categories[index]
  }

  addTask(){ //after creating this addTask() function, we need to go back to the packingList.ts which is our to do list, and modal that after dismiss, we will push in the addTask to the list
    this.taskObject = ({
        itemName: this.taskName, 
        itemDueDate: this.taskDate, 
        itemPriority: this.taskPriority, 
        itemCategory: this.taskCategory 
      })

      this.dismiss()
  }


  

}
