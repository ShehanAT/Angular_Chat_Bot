import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly token = environment.dialogflow.angularChatBot;
  // POST https://dialogflow.googleapis.com/v2/projects/project-id/agent/sessions/session-id:detectIntent
  constructor(private http: HttpClient) { }

  request = {
    queryInput: {
      text: {
        text: "Who are you?",
        languageCode: "en",
      },
    },
  };
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
    })
  };
  talk(){
    return this.http.post(environment.dialogflow.baseUrl + environment.dialogflow.sessionParam + environment.dialogflow.sessionValue + environment.dialogflow.contextParam, this.request, this.httpOptions)
  }
}
