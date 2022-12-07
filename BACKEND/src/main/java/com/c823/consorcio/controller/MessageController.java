package com.c823.consorcio.controller;

import com.c823.consorcio.dto.MessageDto;
import com.c823.consorcio.service.MessageService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/messages")
public class MessageController {

  @Autowired
  private MessageService messageService;

  @PostMapping("send")
  public ResponseEntity<MessageDto> sendMessage(@RequestBody MessageDto messageDto){
    MessageDto message = this.messageService.sendMessage(messageDto);
    return ResponseEntity.status(HttpStatus.CREATED).body(message);
  }

  //TODO : Resta lista de MENSAJES del usuario autenticado (GET/MESSAGES)
  //TODO: resta lista de MENSAJES del usuario visto desde el administrador (GET/MESSAGES/USER_ID)
  //TODO: resta MENSAJE por id (GET/MESSAGES/MESSAGE_ID)


}
