package com.c823.consorcio.Entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class ApartmentEntity {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "APARTMENT_ID")
    private long apartmentId;

    @Column(name = "APARTMENT_NUMBER")
    private Long apartmentNumber;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    public ApartmentEntity() {
    }


}
