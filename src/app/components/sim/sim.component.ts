import { NgFor } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { SimService } from '../../service/sim.service';
import Keycloak from 'keycloak-js';
import {
  HasRolesDirective,
  KEYCLOAK_EVENT_SIGNAL,
  KeycloakEventType,
  typeEventArgs,
  ReadyArgs
} from 'keycloak-angular';


@Component({
  selector: 'app-sim',
  imports: [NgFor, HasRolesDirective], // <-- ajoute bien HasRolesDirective pour verifier le role avec keycloak
  templateUrl: './sim.component.html',
  styleUrl: './sim.component.css'
})
export class SimComponent implements OnInit {
  authenticated = false;
  keycloakStatus: string | undefined;
  private readonly keycloak = inject(Keycloak);
  private readonly keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);

  sims: any[] = [];
  private readonly simService = inject(SimService);
  constructor() {
    effect(() => {
      const keycloakEvent = this.keycloakSignal();

      this.keycloakStatus = keycloakEvent.type;

      if (keycloakEvent.type === KeycloakEventType.Ready) {
        this.authenticated = typeEventArgs<ReadyArgs>(keycloakEvent.args);
      }

      if (keycloakEvent.type === KeycloakEventType.AuthLogout) {
        this.authenticated = false;
      }
    });
  }
  
  login() {
    this.keycloak.login();
  }

  logout() {
    this.keycloak.logout();
  }
  ngOnInit() {
    this.simService.listsims().subscribe((data) => {
      this.sims = data;
    });
  }
}
