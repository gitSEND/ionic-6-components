import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalInfoPage } from "../modal-info/modal-info.page";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"],
})
export class ModalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async onClick() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: "Nelson",
        pais: "Perú",
      },
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    // const { data } = await modal.onWillDismiss();
    console.log(data);
  }
}
