import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { ConfirmDeleteComponent } from '../dialog/confirm-delete/confirm-delete.component';
import { DriverInfoComponent } from '../dialog/driver-info/driver-info.component';
import { NewAgentComponent } from './new-agent/new-agent.component';

@Component({
  selector: 'app-touragent',
  templateUrl: './touragent.component.html',
  styleUrls: ['./touragent.component.scss'],
})
export class TouragentComponent implements OnInit {
  constructor(private dialog:Dialog,private databaseService:DatabaseService,private alertify:AlertsAndNotificationsService){}
  tourAgents: any[] = [
    {
      image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AoQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQYHAwQFAgj/xAA6EAABAwMCAwYEBAUDBQAAAAABAAIDBAUREiEGMUETIlFhcYEHFEKRIzKhsRUzcsHwJFLhNFNistH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAhEQACAgICAwADAAAAAAAAAAAAAQIRAyESMSJBUQQTMv/aAAwDAQACEQMRAD8AuBCEIcGmkmF0AmEdU0AISLg3mQoZxpx7RcPxSRQPZLVAY33bH6+J8lxyS7OpWyV3C4UdtgM9fUxU8Q+qVwb+/NcpvGfDjmNe26wODuWnLv2Xzpf+LLheal1RJI57s7Sy97H9LeTfstKiqKiqqHRvmc/und7tvMnyVfKRPij6ip+JrFUtBhu9EfIzBp+xXTjkjlYHxPa9h5Oacgr5YEUrpcBxLA3Vp8un+eyklt4l4mo4Gspa6aKNn5YQQ7A8N0WT6deP4fQyFCeHOM6yuZFT1Fv7SpGz3Ndp98Y23U1Y7UxpO2RyU4yUuiEouPY0JoUiIkJoQAhCEAIQhAYEIQuAaYSCYXQNM8kkevJAVz8WuL5LEynoKWXs5Zoy972nvMGcD+6omvq6i7VuvS90YPdbnK7HxArpLrxddpX7Ht3MaAejctA/RTThbh+Kmt8RdCO0IBORnms+TIo7NOLFz0VsymqWs7M0ry3XnOn0XmkbLTNfmN2snvbbc/8Akn2V9UNrZtqaPTC3xZKE/wAymjPj3eapWdv0Xv8AHivZSNHNVsYGwxOccbua3cn1/wA6LLDNdrX/AKiSmfjoXNOMq9IaGlZgR08bQPBoCy1FvpKiB0UsDHMcMEEBStshxSKv4f4i+ZuTGsmMLNDWvIO73df3V02guNI3U4uw0YyML51mtX8L4wqKR7SI4pg0OHgdwr94SJNmh/EL2gYGVZipOirMnR2kIQtBnBCEIAQhNACEIQGsmkhAMJhJNANem8wvITCA+UatvzF+1vB71Xpfn+rByrwpIezYxoGwAVRXuGKLjqsp6c64zcy1oHnIrKrbpchU/LWe3PqTHs95IDcrFljbN2F0iU0rN86d1sknfkFGbJd7+akRXOxGBh5SNkDseu6lbmB5Bbywo8C1yMMLsuI8FtNGVHr1cq21SAUlqnrCRklhAA9ynQXu7TPY6axSQRnnmRpI+xVkUUy3sj3FdCxvFUko2MsDA7bOrc/8K0rdSx0dJHDE0NaBnA8VXvEv4/ElIA07xxuHiO8QrKbggEciFPEtsqzPSGhCFoM4IQhACaEIAQhCA1U0kLgPQTC8phdB6T35Dmkmh1dlGy2Av4isVY4MMzyHVOOrmtJB9dgPZTCthrp5o46CRsMQOZTq0uf6HBx9lo1FGbTfKuaYgsfVN05H8vLtOPQh2fZdtoLD1ysDk0enxTlr2QcU/ElpeDV3D5h/ak5a4uyzwOw3VicNVUk4iMzSNtmlcmcN7XVK3UejQNyupaKeQT6/yknYdAPBQUm5WWyhFY6NXjiirK8CCmmdFE4HUW5BJ6bjwP3XjhSxVdtoII6itMkzHEvfrc7WOgweXspJcNOkNfz5A+JWOmaGgY5LQtSMjfijUrqOGS9UVS8tbpje0E9XdP3KkdMC2niDvzBgB+y5LoG1svZuOGxSNdseo3/uF2lbjW2UZWuKQIQhWlAJoQgBCEIAQhCA1UJIXAekwvKa6D0E15CaAj/F1kirrdV1TXObPHC54x9ZaNTf1C5FurY6qAPdgOxuMqcOaHtLHDLXDBHiFRF3kqLHdK2jleWmDVFud9J3B9wRj1WfND2jVhyPpna4g4woaOpfFS/i1LDsGbgHzWOwcb11NQPqaq31M75pMMwSRv542C4HDFubMx8/z3YzOOS3S0j32JUupKqOmkDJ73Fl22nYfphZ0qN0fOPkzaouL4J6ZkdyZPTPkJ0GUl3XxKl9NKw07ZcgtIBB8VHeILWyus8jYa17pA3UwYbgnp05LQsFbN/AKeGZzTM2TS6MdDnAAU1dmfJVaJzY8SwyVJBzLM4gHwB0j9l1lrUNP8tSRQZzoaAT4nqtla4qkYZO2CEIUiI0JJoAQhCAEIQgNRCRSyuA9J5XnKWVIGQJrGCta43ShtVOai41UVPCPqkdjPoOq4Fs3wVWPxd4fNwkFbSD/Vsp8Fv/AHWgnb1HRdC3fEiK8OndaaF3YQu0mSd2C8+TRyGPE+y157jU3CR0lW4OPJrcYDR4ALPkzRXj7NGPDLtlR8NXn5CQ90PdJhve5tUspDSmr7d8TC44ALhqx/mFi4h4To62oM9K/wCUqXc3tHdd6j+6wUnA14qCG/xaJpH5HaXHZVSUZbLoSlBUSCr4kpXRPilkDY2bDScafDOFI+DLU+sqIr1VRmKDSHU0J5vJGNbvLHIe/gubw58NLdQzCru9S+5TZBEbxiIHnu36t/HwVgROHIbAdApqKRXKTkdGCVkgwxwJbzHULJlcSaMl2ppIPiConxTeK3hOWirKSvnfFNK5slHUPMrHDSdwXd5uNuRwrI5rdNEHhb6ZZCFDeHfiFbrkxjLhiimc0EOJzGT69Pf7qYRvZLGJI3tex3JzTkFXFUoSj2j0mkhCI0IQgBCEIDRyjK85RkcycAc1w6MlcW/cVWewsd8/Vt7YDPYR9559unvhVTxh8SbpV1dXT2qp+WoWSOjY6IYfIBtqLuYz5YVey1MkrwXve4uBJJOclc5fC2OL6WTxH8WrjVCSKyxNooz9ZGuTHjvsPsfVVxcbpWXCpdNWVEs8p+uV2okeGViyXb59V4dHv5hRstUUujtcGXn+EXMtk/6aow148D0P7q1YpBIGvjOWvGQqNeMbgclYvw6vIq4nW+pdiWIZZk/mCzZce+SLccq8WS2phDmZW5YcsqW692pNaCTG7qtilp3QPBPiq43ZN00ShuDHkeCcGVrQzB0YbkZK28tiaC44Cusz1R4r6yKgpZKiocGxsGSSVQnFvEMnEt+a4kiCIFsY/wBrSd/vj9FLfizxMDBHQ0z8l53x9SrKiY6MEg5edifE/wCf3TGuTv0XxjR24qgPZJKMNEZwF2rJxPcLO5r6ad8bSd2g90+oOyisLxFbow447SR7nZ8jgLYhlD4YR9T+X3V5Y96ZdNg+JNDWNY24sEL3bdowd3PmM/tlTWmqoKuLtaWZkrP9zHZx/wDF8vtnxbastOwnIafYrsUN/rqJ9smoamWOokEeQx2O0GMOB8eSkmZp4Iy/nR9HJrh8J3aS6W5xqnB1TC7Q84A1DocBdxSMk4uLpghCEInOUS+Jt7dZ+GpWwO01FWexYeoGO8ft+6lap/42VD33ahpT/Ljpy8ernb/+oXH0WYo3IrHOsTDoHah6FYTtg+BWSmd+NgjYgj7LG/8AI7+pQNPozSNDWuI8kpB3gfHqvVQcQs8wk7eFhQkYyAdinS1M1vqWT073Mew5a4dPVLHdJTIzHulHKLL4b4zpa18UVxkbTTctbj3He/T3VlVLYRQiZjmuGnIc05BXzTTMD3OZuNs5CytqKilbpp6iWNrtyI3loP2Kr/UvR27RfNBc4Y5y6WZrWjq92AFwOMfiPQwNNPa5PnKjGD2Z7jT5u6+yp18skzvxnvk3+txK2oIxsOh8lxYfrO8rdozSy1VdVPq615kmeM+TR5LcjYKePH/h+q8NjaS1uNicLLXbHT5BXJUWLRp3EltDTNG2Mn7p0E2Xh5/LBCXe683Y9xnotWBxbba1454a32JXCDlUjaDyyxAk7vkc7P6Lcs1QWVUE2nXLHEyGnaRsHu31ewyfsudWdy3UrBy0ErpWIdm35gfnhgDm/wBT3ac+wC6jifkkWhwHdfkbvHEXZjkPZvOrOcnn9+qtlUHZHGKZoadwRgq+YHa4I3nm5jSfsplf5cdqRkQkhDGf/9k=',
      name:'Rajesh Panna',
      phone:'1234567890',
      lastBooking:'er32t4yu5iytou',
      noOfBookings: 2,
      rating: 4.5,
      totalBooking: 100,
      enabled: true,
    }
  ]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.databaseService.getTourAgents().then(res=>{
      this.tourAgents = res.docs.map(doc=>{return {...doc.data(),id:doc.id}})
    })
  }
  
  onDelete() {
    this.dialog.open(ConfirmDeleteComponent);
  }
  driverInfo() {
    this.dialog.open(DriverInfoComponent);
  }

  addNewAgent(){
    const dialog = this.dialog.open(NewAgentComponent);
    dialog.closed.subscribe(res => {
      if(res){
        this.tourAgents.push(res)
        this.databaseService.addTourAgent(res).then(res=>{
          console.log(res)
          this.alertify.presentToast('New agent added successfully')
        }).catch(err=>{
          this.alertify.presentToast('Error adding new agent')
        })
      }
    })
  }
}
