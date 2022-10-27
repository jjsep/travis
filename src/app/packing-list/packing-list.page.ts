import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page'; //to import functionality from addItems page


@Component({
  selector: 'app-packing-list',
  templateUrl: './packing-list.page.html',
  styleUrls: ['./packing-list.page.scss'],
})

export class PackingListPage implements OnInit  {

  todoList = []

  //   {
  //   itemName: 'Pass CS701: Finish Project & Study for Final',
  //   itemDueDate: '10-18-22', //MM-DD-YY
  //   itemPriority: 'high',
  //   itemCategory: 'School'
  // },
  // {
  //   itemName: 'Prepare for Workshop',
  //   itemDueDate: '10-25-22',
  //   itemPriority: 'medium',
  //   itemCategory: 'Work'
  // },
  // {
  //   itemName: 'Pack for Fall Weekend',
  //   itemDueDate: '10-20-22',
  //   itemPriority: 'low',
  //   itemCategory: 'Personal'
  // }

today: number = Date.now()

  constructor(public modalCtrl: ModalController) { } //modal in ionic is displayed as a temporary UI in the form of a popup, form, or alert. It uses create() method. Customize by setting modal options.

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddItemPage,
    });

    modal.onDidDismiss().then(newTaskObj =>{ //we come back here after creating the addTask() from the addItem page.ts in order to push in new data
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)
    })

    return await modal.present()

  }

  delete(index){
    this.todoList.splice(index,1) 
  }
  ngOnInit() {
  }
  

}
