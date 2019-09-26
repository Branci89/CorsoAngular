import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrandDataService } from '../model/brand-data.service';
import { ModelDataService } from '../model/model-data.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Modello } from '../model/model';
import { QueryResult } from '../model/query-result';

@Component({
  selector: 'app-search-model',
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchModelComponent implements OnInit {

  infoFG: FormGroup = this.fb.group({
    nome: ['', Validators.required]
  });
  listaModelli: Array<object>;
  modelliTrovati: number;

  messaggio: string;

  isCollapsed = true;

  constructor(private fb: FormBuilder, private brandSvc: BrandDataService, private modelSvc: ModelDataService) { }

  ngOnInit() {
  }

  onSubmit(toolTip: any) {
    if (this.infoFG.valid) {
      if (toolTip.isOpen()) {
        toolTip.close();
      }
      this.modelSvc.getModelByName(this.infoFG.value.nome)
        .subscribe((response1: any) => {
          this.listaModelli = [];
          const queryResult1: QueryResult = response1;
          const modelli: Array<Modello> = queryResult1.esito.modello;
          const n = modelli.length;
          for (let i = 0; i < n; i++) {
            this.brandSvc.getBrandById(modelli[i].idMarca)
              .subscribe((response2: any) => {
                const queryResult2: QueryResult = response2;
                this.listaModelli.push({
                  nomeModello: modelli[i].nome,
                  cilindrata: modelli[i].cilindrata,
                  potenza: modelli[i].potenza,
                  nomeMarca: queryResult2.esito.marca[0].nome,
                  fondazione: queryResult2.esito.marca[0].fondazione,
                  website: queryResult2.esito.marca[0].website,
                });
                this.modelliTrovati = this.listaModelli.length;
                this.isCollapsed = false;
              });
          }
        }, (error: any) => {
          this.messaggio = 'HTTP error!<br><br>' + error.message;
          this.isCollapsed = false;
        });
    } else {
      if (!toolTip.isOpen()) {
        toolTip.open();
      }
      this.isCollapsed = true;
    }
  }

}
