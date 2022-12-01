package com.c823.consorcio.service;

import com.c823.consorcio.entity.ApartmentEntity;

public interface IApartmentService {


  String addApartment(Long apartmentNumber, String email);

  ApartmentEntity createApartment(Long apartmentNumber);
}
