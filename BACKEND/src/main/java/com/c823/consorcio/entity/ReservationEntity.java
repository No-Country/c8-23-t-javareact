package com.c823.consorcio.entity;

import com.c823.consorcio.enums.Amenities;
import com.c823.consorcio.enums.Turn;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

@Getter
@Setter
@Entity
@Table(name = "AMENITIES_RESERVATIONS")
public class ReservationEntity {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "AMENITY_ID")
    private Long amenityId;

    @Column(name = "NAME")
    private Amenities name;

    @Column(name= "RESERVATION_DATE")
    @DateTimeFormat(pattern = "yyyy/mm/dd")
    private LocalDate reservationDate;

    @Column(name = "TURN")
    private Turn turn;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "USER_ID")
    private UserEntity userEntity;



    public ReservationEntity() {
    }



}
