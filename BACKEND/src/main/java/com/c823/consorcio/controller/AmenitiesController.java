package com.c823.consorcio.controller;

import com.c823.consorcio.dto.ReservationDto;
import com.c823.consorcio.service.IAmenitiesService;
import com.c823.consorcio.service.Impl.AmenitiesServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservations")
public class AmenitiesController {
  @Autowired
  private IAmenitiesService amenitiesService;

  @PostMapping("/amenities")
  public ResponseEntity<ReservationDto> reservation(@RequestBody ReservationDto reservationDto){
    ReservationDto reservation = this.amenitiesService.saveReservation(reservationDto);
    return ResponseEntity.status(HttpStatus.CREATED).body(reservation);
  }


}
