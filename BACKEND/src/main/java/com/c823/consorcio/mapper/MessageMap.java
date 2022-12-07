package com.c823.consorcio.mapper;

import com.c823.consorcio.dto.MessageDto;
import com.c823.consorcio.entity.MessageEntity;
import com.c823.consorcio.repository.IUserRepository;
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
}
