package com.c823.consorcio.mapper;

import com.c823.consorcio.dto.ReportDTO;
import com.c823.consorcio.entity.ReportEntity;
import com.c823.consorcio.enums.Status;
import com.c823.consorcio.repository.IUserRepository;
import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReportMap {
  @Autowired
  private IUserRepository userRepository;


  public ReportEntity reportDto2Entity(ReportDTO reportDTO, Long userId) {
    ReportEntity entity = new ReportEntity();
    entity.setUser(userRepository.findByUserId(userId));
    entity.setIssue(reportDTO.getIssue());
    entity.setDetail(reportDTO.getDetail());
    entity.setPlace(reportDTO.getPlace());
    entity.setStatus(Status.ON_REVIEW);
    entity.setCreationDate(reportDTO.getCreationDate());
    return entity;
  }

  public ReportDTO reportEntity2Dto(ReportEntity entitySaved) {
    ReportDTO dto =  new ReportDTO();
    dto.setUserId(entitySaved.getUser().getUserId());
    dto.setIssue(entitySaved.getIssue());
    dto.setDetail(entitySaved.getDetail());
    dto.setPlace(entitySaved.getPlace());
    dto.setStatus(entitySaved.getStatus());
    dto.setCreationDate(entitySaved.getCreationDate());
    return dto;
  }
}
