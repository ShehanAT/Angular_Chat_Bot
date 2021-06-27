import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TextMessage } from '../model/text-messsage.model';

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
  sendMessage(textMessage: TextMessage){
    var reqBody = {
      "projectId": environment.dialogflow.projectId,
      "requestText": textMessage.text
    }
    console.log(environment.backend.requestTextUrl);
    return this.http.post(environment.backend.requestTextUrl, reqBody, this.httpOptions)
  }
}
