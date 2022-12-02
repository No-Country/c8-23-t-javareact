package com.c823.consorcio.mapper;

import com.c823.consorcio.dto.ReservationDto;
import com.c823.consorcio.entity.ReservationEntity;
import com.c823.consorcio.repository.IUserRepository;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AmenitiesMap {
  @Autowired
  private IUserRepository iUserRepository;

  public ReservationEntity amenitieDto2Entity(ReservationDto reservationDto, Long userId) {
    ReservationEntity entity = new ReservationEntity();
    entity.setName(reservationDto.getName());
    entity.setTurn(reservationDto.getTur());
    entity.setReservationDate(reservationDto.getReservationDate());
    entity.setUserEntity(iUserRepository.findByUserId(userId));
    return entity;
  }

  public ReservationDto amenitieEntity2Dto(ReservationEntity entitySaved) {
    ReservationDto dto = new ReservationDto();
    dto.setReservationId(entitySaved.getAmenityId());
    dto.setName(entitySaved.getName());
    dto.setTur(entitySaved.getTurn());
    dto.setReservationDate(entitySaved.getReservationDate());
    //Long id = entitySaved.getUserEntity().getUserId();
    dto.setUserId(entitySaved.getUserEntity().getUserId());
    return dto;

  }

  private LocalDate stringToLocalDate(String stringDate) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-mm-dd");
    LocalDate date = LocalDate.parse(stringDate, formatter);
    return date;
  }

}
