package com.c823.consorcio.auth.service;

import com.c823.consorcio.Entity.UserEntity;
import com.c823.consorcio.auth.dto.ResponseUserDto;
import com.c823.consorcio.auth.exception.RepeatedUsername;
import com.c823.consorcio.repository.IApartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsCustomService implements UserDetailsService {

  @Autowired
  IApartmentRepository iApartmentRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    return null;
  }

  public ResponseUserDto save(ResponseUserDto userDto) throws RepeatedUsername {
    if (iApartmentRepository.findByApartmentNumber(userDto.getApartmentNumber()) != null){
      throw new RepeatedUsername("Repeted Department Number");
    }
    UserEntity entity =

    return null;
  }

}
