package com.c823.consorcio.service.Impl;

import com.c823.consorcio.auth.exception.ParamNotFound;
import com.c823.consorcio.dto.ReservationDto;
import com.c823.consorcio.entity.ReservationEntity;
import com.c823.consorcio.entity.UserEntity;
import com.c823.consorcio.mapper.AmenitiesMap;
import com.c823.consorcio.repository.IAmenitieRepository;
import com.c823.consorcio.repository.IUserRepository;
import com.c823.consorcio.service.IAmenitiesService;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AmenitiesServiceImpl implements IAmenitiesService {
  @Autowired
  private AmenitiesMap amenitiesMap;
  @Autowired
  private IAmenitieRepository iAmenitieRepository;
  @Autowired
  private IUserRepository userRepository;


  @Override
  public ReservationDto saveReservation(ReservationDto reservationDto) {
    String email = SecurityContextHolder.getContext().getAuthentication().getName();
    UserEntity user = userRepository.findByEmail(email);
    Long userId= user.getUserId();
    List<ReservationEntity> reservations = iAmenitieRepository.findAll();
    ReservationEntity entity = amenitiesMap.amenitieDto2Entity(reservationDto,userId);
    reservations.forEach(reservation -> {
      if(reservations.stream().anyMatch(i -> reservationDto.getReservationDate().equals(i.getReservationDate()) )){
        throw new ParamNotFound("The day already in use");
      }
    });
    ReservationEntity entitySaved = iAmenitieRepository.save(entity);
    ReservationDto result = amenitiesMap.amenitieEntity2Dto(entitySaved);

    return result;
  }
}
