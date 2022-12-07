package com.c823.consorcio.mapper;

import com.c823.consorcio.dto.MessageBasicDto;
import com.c823.consorcio.dto.MessageDto;
import com.c823.consorcio.entity.MessageEntity;
import com.c823.consorcio.repository.IUserRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MessageMap {
  @Autowired
  private IUserRepository userRepository;

  public MessageEntity messageDto2Entity(MessageDto messageDto) {
    MessageEntity entity = new MessageEntity();
    entity.setDetail(messageDto.getDetail());
    entity.setSubject(messageDto.getSubject());
    entity.setUser(userRepository.findByUserId(messageDto.getUserId()));
    entity.setCreationDate(messageDto.getCreationDate());
    return entity;
  }

  public MessageDto messageEntity2Dto(MessageEntity entitySaved) {
    MessageDto dto = new MessageDto();
    dto.setId(entitySaved.getId());
    dto.setSubject(entitySaved.getSubject());
    dto.setDetail(entitySaved.getDetail());
    dto.setUserId(entitySaved.getUser().getUserId());
    dto.setCreationDate(entitySaved.getCreationDate());
    return dto;
  }

  public List<MessageBasicDto> messageEntityList2BasicDtoList(List<MessageEntity> entities) {
    List<MessageBasicDto> messages = new ArrayList<>();
    for (MessageEntity entiy : entities){
      messages.add(messagesEntity2BasicDto(entiy));
    }
    return messages;
  }

  private MessageBasicDto messagesEntity2BasicDto(MessageEntity entiy) {
    MessageBasicDto dto = new MessageBasicDto();
    dto.setCreationDate(entiy.getCreationDate());
    dto.setSubject(entiy.getSubject());
    return dto;
  }
}
